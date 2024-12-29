/**
 * ICourse Interface
 * 
 * This interface defines the structure of a course object within the 
 * application. It outlines the properties that a course must have, 
 * providing a clear contract for course data management.
 *
 * ICourseService Interface
 * 
 * This interface defines the structure for a service that manages 
 * course-related operations within the application. It outlines the 
 * methods that must be implemented to handle course data retrieval and 
 * user interactions.
 */
export interface ICourse {
  id: string;
  sku: string;
  pic: string;
  title: string;
  coupon: string;
  org_price: string;
  desc_text: string;
  category: string;
  language: string;
  platform: string;
  rating: number;
  duration: string;
  expiry: string;
  savedtime: string;
  instructor: {
    name: string;
  };
  video_link: {
    url: string;
  };
  isCourseEnrolled?: boolean
}

export interface ICourseService{
  getCourseList: () => void;
  showRatingModel: () => void;
  closedRatingModel:() => void;
  getStudentEnrolled:(id:string) => void;
  getCourseDetail:(id:string) => void
}