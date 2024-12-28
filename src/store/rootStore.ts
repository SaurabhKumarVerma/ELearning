import { EnrolledStore } from './enrolled.store';
import { CourseStore } from './course.store';

class RootStore {
  courseStore: CourseStore;
  enrolledStore: EnrolledStore;

  constructor() {
    this.courseStore = new CourseStore(this);
    this.enrolledStore = new EnrolledStore(this);
  }
}

export default new RootStore()
