import { observable } from 'mobx';
class AppStore {
  @observable isLightMode = false;
}

export const appStore = new AppStore();
