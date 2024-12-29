// This file defines the RootStore class which serves as the central store for the application.
// It initializes and manages instances of CourseStore, UserStore and EnrolledStore. The RootStore is exported as a singleton instance for global access.
import { EnrolledStore } from './enrolled.store';
import { CourseStore } from './course.store';
import { UserStore } from './user.store';

class RootStore {
  courseStore: CourseStore; // Instance of CourseStore to manage course data
  enrolledStore: EnrolledStore; // Instance of EnrolledStore to manage enrollment data
  userStore: UserStore // Instance of UserStore for manage user data

  constructor() {
    this.courseStore = new CourseStore(this); // Initialize CourseStore with reference to RootStore
    this.enrolledStore = new EnrolledStore(this); // Initialize EnrolledStore with reference to RootStore
    this.userStore = new UserStore(this); // Initialize UserStore with reference to RootStore
  }
}

export default new RootStore() // Export a singleton instance of RootStore
