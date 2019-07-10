import mobx, { observable, action, flow, runInAction } from 'mobx';

export default class EnterpriseState {
  @observable
  enterpriseInfo: any = {};

  @action
  toEnterpriseCert = async () => {
    console.log(1243)
  };
}
