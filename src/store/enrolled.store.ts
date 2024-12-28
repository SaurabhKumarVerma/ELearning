
import { action, makeObservable, observable } from "mobx";
import { IErolled } from "@eLearning/models/enrolled.model";
import RootStore from "./rootStore";



export class EnrolledStore implements IErolled {
  rootStore: typeof RootStore
  @observable isEnrolled: Boolean = false
  @observable enrolledList: Set<string> = new Set()

  constructor(rootStore: typeof RootStore) {
    makeObservable(this);
    this.rootStore = rootStore!;
  }
  enrolledCourse: () => void;

  @action
  enrolledCourseId = (id: string) => {
    return this.enrolledList.has(id)
  };
  removeEnrolledCourse: () => void;
  showEnrolledModel: () => void;

}