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
}

export interface ICourseService{
  getCourseList();

}