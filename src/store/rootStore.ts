// import { EnrolledStore } from './enrolled.store';
// import { CourseStore } from './course.store';
// import React, { createContext, FC, ReactElement, ReactNode, useContext } from 'react';

// class RootStore {
//     courseStore: CourseStore;
// 	enrolledStore: EnrolledStore;
//     constructor() {
//         this.courseStore = new CourseStore(this)
//         this.enrolledStore = new EnrolledStore(this)
//     }
// }



// // export type PropsWithStore<T> = T & {
// //     rootStore?: RootStore;
// //   };

// //   export type StoreComponent = FC<{
// // 	store: RootStore;
// // 	children: ReactNode;
// // }>;

// // export const StoreContext = createContext<RootStore>({} as RootStore);


// // export const StoreProvider: StoreComponent = ({ children, store }): ReactElement => {
// // 	return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
// // };

// // export const useStore = () => useContext(StoreContext);



// export default rootStore = new RootStore();

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
