/* eslint-disable */

import 'isomorphic-fetch';
import { message } from 'antd';
import Util from './Util';
import config from '../config';
import createHashHistory from 'history/createHashHistory';

require('es6-promise').polyfill();
const history = createHashHistory();

function parseJSON(response: any) {
  return response.json();
}

function checkStatus(response: any) {
  if (response.status === 401) {
    if (localStorage.getItem('applicationType') === 'app') {
      message.error('登录过期，请至app里重新登录');
    } else {
      history.replace('/login');
    }
    return;
  }
  if (response.status >= 500) {
    message.error('网络错误!');
    return;
  }
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    message.error('网络错误!');
  }
  throw new Error(response.statusText);
}

function encodeUriQuery(val: string, pctEncodeSpaces?: any) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
}

function serializeValue(v: any) {
  if (Util.isObject(v)) {
    return Util.isDate(v) ? v.toISOString() : JSON.stringify(v);
  }
  return v;
}

/**
 * 将get参数拼接
 * @param params
 * @returns {*}
 */
function paramSerializer(params: any) {
  if (!params) return '';
  const urlPart = [];
  for (const k of Object.keys(params)) {
    const value = params[ k ];
    if (value === null || Util.isUndefined(value)) continue;
    urlPart.push(encodeUriQuery(k) + '=' + encodeUriQuery(serializeValue(value)));
  }
  return urlPart.join('&');
}

function transformRequestData(data: object) {
  const obj = deleteUndefindeProps(data);
  return Util.isObject(obj) ? JSON.stringify(obj) : obj;
}

function deleteUndefindeProps(Obj: any) {
  let newObj: any;
  if (Obj instanceof Array) {
    newObj = [];  // 创建一个空的数组
    let i = Obj.length;
    while (i--) {
      newObj[ i ] = deleteUndefindeProps(Obj[ i ]);
    }
    return newObj;
  } else if (Obj instanceof Object) {
    newObj = {};  // 创建一个空对象
    for (const k of Object.keys(Obj)) {  // 为这个对象添加新的属性
      newObj[ k ] = deleteUndefindeProps(Obj[ k ]);
    }
    return newObj;
  } else {
    return !Obj ? null : Obj;
  }
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} isShow       是否需要展示错误验证 为字符串的isShow的时候不需要展示
 * @param  {object} [options] The options we want to pass to "fetch"
 * @param  {string} type       是否是上传
 * @return {object}           An object containing either "data" or "err"
 * @isShow  {string}          如何有isShow是字符串的 isShow传进来，则出错的情况下不给出提示
 */

export default function request(options: { url: string, headers?: object, params?: object, [ key: string ]: any }, isShow?: string, type?: string) {
  const params = paramSerializer(options.params);
  if (params) options.url = `${options.url}?${params}`;
  let opt: any = {};
  for (const k in options) {
    if (k !== 'params') {
      opt[ k ] = options[ k ];
    }
  }

  opt.headers = opt.headers || {};
  opt.headers = new Headers({
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: localStorage.getItem('token'),
    userType: 'enterprise',
    ...opt.headers
  });
  opt.credentials = 'include';  // 发送请求时带cookie
  // 请求地址加入公共路径
  options.url = config.publicUrl + options.url;
  if (type === 'upload') {
    opt = {
      body: opt.data,
      method: 'POST'
    };
  } else {
    opt.body = transformRequestData(opt.data);
  }
  return fetch(options.url, opt)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => {
      if (data.code && data.code !== '200' && isShow !== 'isShow') {
        message.error(data.msg);
      }
      return data;
    })
    .catch(err => ({ err }));
}
