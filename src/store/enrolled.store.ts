
import { action, makeObservable, observable } from "mobx";
import { IErolled } from "@eLearning/models/enrolled.model";
import RootStore from "./rootStore";
import { ICourse } from "@eLearning/models/courses.model";



export class EnrolledStore implements IErolled {
  rootStore: typeof RootStore
  @observable isEnrolled: Boolean = false
  @observable enrolledList: Set<string> = new Set()
  @observable enrolledListData:ICourse[] = []

  constructor(rootStore: typeof RootStore) {
    makeObservable(this);
    this.rootStore = rootStore!;
  }

  @action
  getEnrolledData = () => {
    this.enrolledListData = this.rootStore.courseStore.courseList.filter((item, index) => {
      if(this.enrolledList.has(item?.id)){
        return item
      }
    })
  };
  enrolledCourse: () => void;

  @action
  enrolledCourseId = (id: string) => {
    return this.enrolledList.has(id)
  };
  removeEnrolledCourse: () => void;
  showEnrolledModel: () => void;

}