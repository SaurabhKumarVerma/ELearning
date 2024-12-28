import { action, makeObservable, observable } from 'mobx';
import RootStore from './rootStore';
import { ICourse, ICourseService } from '@eLearning/models/courses.model';
import { data } from '@eLearning/service/data/data';


export class CourseStore implements ICourseService {

    rootStore: typeof RootStore
    @observable courseList: ICourse[] = undefined
    @observable isLoading: boolean = false;
    @observable courseDetailData: ICourse[] = [];
    @observable isCourseDetailLoading: boolean = false
    @observable isRatingModalVisible: boolean = false
    @observable isCourseEnrolled:boolean = false
    @observable isToggleEnrolledCourse:boolean = false

  constructor(rootStore:  typeof RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
    this.addToList()
  }
  @action
  private addToList(){
    this.courseDetailData = data?.map((item,index) => {
      return {
        ...item,
        isCourseEnrolled: false
      }
    })
  }

  @action
  closedRatingModel = () => {
    this.isRatingModalVisible = false
  };

  @action
  showRatingModel = () => {
    this.isRatingModalVisible = true
  };

  @action
  checkLoadingState(status: boolean){
    this.isLoading = status
  }

  @action
  getCourseList(){
    this.checkLoadingState(true)
    this.courseList = this.courseDetailData;
    this.checkLoadingState(false)
  }

  @action
  checkCourseDetailLoading(status: boolean){
    this.isCourseDetailLoading = status
  }

  @action
  getCourseDetail(id: string) {
    this.checkCourseDetailLoading(true)
    this.courseDetailData =  this.courseList.filter((item) => {return item.id === id})
    this.checkCourseDetailLoading(false)
  }

  @action
  coursedEnrolled(status: boolean){
    this.isCourseEnrolled = status
  }

  @action
  getStudentEnrolled(id: string){
    this.isToggleEnrolledCourse = true
    this.rootStore.enrolledStore?.enrolledList.add(id)
    if (this.courseDetailData[0]) {
      this.courseDetailData[0].isCourseEnrolled = true;
    }
  }
}