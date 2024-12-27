import { action, makeAutoObservable, makeObservable, observable } from 'mobx';
import { RootStore } from './rootStore';
import { ICourse, ICourseService } from '@eLearning/models/courses.model';
import { data } from '@eLearning/service/data/data';


export class CourseStore implements ICourseService {

    rootStore: typeof RootStore
    @observable courseList: ICourse[] = undefined
    @observable isLoading: Boolean = false;

  constructor(rootStore:  typeof RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action
  checkLoadingState(status: boolean){
    this.isLoading = status
  }

  @action
  getCourseList(){
    this.isLoading = true
    this.courseList = data;
    this.isLoading = false
  }
}