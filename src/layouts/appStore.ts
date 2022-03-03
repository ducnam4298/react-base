import { observable } from 'mobx';
class AppStore {
    @observable isLightMode: boolean = false;
}

export const appStore = new AppStore();
