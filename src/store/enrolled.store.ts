// enrolled.store.ts
// This file defines the EnrolledStore class which manages the enrollment state and data for courses.
// It uses MobX for state management, allowing for reactive updates to the UI when enrollment data changes.
// The store tracks whether a user is enrolled, the list of enrolled course IDs, and the corresponding course data.
import { action, makeObservable, observable } from "mobx";
import { IErolled } from "@eLearning/models/enrolled.model";
import RootStore from "./rootStore";
import { ICourse } from "@eLearning/models/courses.model";



export class EnrolledStore implements IErolled {
  rootStore: typeof RootStore // Reference to the RootStore
  @observable isEnrolled: Boolean = false // Tracks enrollment status
  @observable enrolledList: Set<string> = new Set() // Set of enrolled course IDs
  @observable enrolledListData:ICourse[] = [] // Array to hold enrolled course data

  constructor(rootStore: typeof RootStore) {
    makeObservable(this);
    this.rootStore = rootStore!; // Assign the root store reference
  }

  @action
  getEnrolledData = () => {
     // Filters the course list from CourseStore to get data for enrolled courses
    this.enrolledListData = this.rootStore.courseStore.courseList.filter((item, index) => {
      if(this.enrolledList.has(item?.id)){  // Check if the course ID is in the enrolled list
        return item
      }
    })
  };
  enrolledCourse: () => void;

  @action
  enrolledCourseId = (id: string) => {
    return this.enrolledList.has(id)  // Checks if a specific course ID is in the enrolled list
  };
  removeEnrolledCourse: () => void;
  showEnrolledModel: () => void;

  @action
    clearStore() {
        this.isEnrolled = false;
        this.enrolledList.clear();
        this.enrolledListData = [];
    }

}