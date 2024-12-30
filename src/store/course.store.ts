// course.store.ts
// This file defines the CourseStore class which manages the course data and related operations.
// It uses MobX for state management, allowing for reactive updates to the UI when course data changes.
// The store handles loading course data, managing course details, and enrollment status.
import { action, makeObservable, observable } from 'mobx';
import RootStore from './rootStore';
import { ICourse, ICourseService } from '@eLearning/models/courses.model';
import { data } from '@eLearning/service/data/data';


export class CourseStore implements ICourseService {

    rootStore: typeof RootStore // Reference to the RootStore
    @observable courseList: ICourse[] = undefined // List of courses
    @observable isLoading: boolean = false; // Loading state for course data
    @observable courseDetailData: ICourse[] = []; // Detailed data for a specific course
    @observable isCourseDetailLoading: boolean = false // Loading state for course details
    @observable isRatingModalVisible: boolean = false // Visibility state for rating modal
    @observable isCourseEnrolled:boolean = false // Tracks if a course is enrolled
    @observable isToggleEnrolledCourse:boolean = false // State for toggling enrollment

  constructor(rootStore:  typeof RootStore) {
    makeObservable(this); // Make the store observable
    this.rootStore = rootStore; // Assign the root store reference
  }
  @action
 addToList(){
    // Maps initial data to course detail data
    this.courseDetailData = data?.map((item,index) => {
      return {
        ...item,
        isCourseEnrolled: false // Initialize enrollment status for each course
      }
    })
  }

  @action
    initializeCourses = async () => {
       this.addToList()
        await this.getCourseList(); // Re-fetch courses on login
    }

  @action
  closedRatingModel = () => {
     // Closes the rating modal
    this.isRatingModalVisible = false
  };

  @action
  showRatingModel = () => {
     // open the rating modal
    this.isRatingModalVisible = true
  };

  @action
  checkLoadingState(status: boolean){
    // Sets the loading state for course data.
    // This is used to indicate whether the course data is currently being loaded.
    this.isLoading = status
  }

  @action
  async getCourseList(){
     // Fetches the list of courses.
    // It first sets the loading state to true, then assigns the courseDetailData to courseList,
    // and finally sets the loading state to false to indicate loading is complete.
    this.checkLoadingState(true)
    this.courseList = this.courseDetailData;
    this.checkLoadingState(false)
  }

  @action
  checkCourseDetailLoading(status: boolean){
    // Sets the loading state for course details.
    // This is used to indicate whether the course detail data is currently being loaded.
    this.isCourseDetailLoading = status
  }

  @action
  getCourseDetail(id: string) {
    // Fetches the details of a specific course by its ID.
    // It sets the loading state to true, filters the courseList to find the course with the given ID,
    // and then sets the loading state to false once the details are loaded.
    this.checkCourseDetailLoading(true)
    this.courseDetailData =  this.courseList.filter((item) => {return item.id === id})
    this.checkCourseDetailLoading(false)
  }

  @action
  coursedEnrolled(status: boolean){
    // Updates the enrollment status of the course.
    // This method is used to track whether a course is currently enrolled by the user.
    this.isCourseEnrolled = status
  }

  @action
  getStudentEnrolled(id: string){
    // Enrolls a student in a course by adding the course ID to the enrolled list.
    // It sets the toggle state to true, adds the course ID to the enrolled list in the root store,
    // and updates the enrollment status of the course in courseDetailData if it exists.
    this.isToggleEnrolledCourse = true
    this.rootStore.enrolledStore?.enrolledList.add(id)
    if (this.courseDetailData[0]) {
      this.courseDetailData[0].isCourseEnrolled = true;
    }
  }

  @action
  clearStore() {
      this.courseList = undefined;
      this.isLoading = false;
      this.courseDetailData = [];
      this.isCourseDetailLoading = false;
  }
}