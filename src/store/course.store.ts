import { makeAutoObservable, makeObservable, observable } from 'mobx';
import { RootStore } from './rootStore';


export class CourseStore {

    rootStore: typeof RootStore
    @observable data: string = 'xyz'

  constructor(rootStore:  typeof RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }
}