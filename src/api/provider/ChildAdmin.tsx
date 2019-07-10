import request from "../../util/request";

export default {
  // 设置某成员为子管理员
  addChildAdmin(data: {}) {
    return request({
      url: '/api/user/subadmin/permission/set',
      headers: {
        userType: "enterprise",
        "Content-Type": "application/json"
      },
      data: JSON.stringify(data),
      method: 'post'
    }, '', '');
  }
}
