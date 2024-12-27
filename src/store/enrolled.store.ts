
import { makeAutoObservable, makeObservable } from "mobx";
import { RootStore } from "./rootStore";



export class EnrolledStore {
    rootStore: typeof RootStore

    constructor(rootStore: typeof RootStore) {
      makeObservable(this);
        this.rootStore = rootStore!;
      }
}