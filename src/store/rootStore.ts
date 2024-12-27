import { EnrolledStore } from './enrolled.store';
import { CourseStore } from './course.store';

export class RootStore {
  courseStore: CourseStore;
  enrolledStore: EnrolledStore;

  constructor() {
    this.courseStore = new CourseStore(RootStore);
    this.enrolledStore = new EnrolledStore(RootStore);
  }
}
