export interface ProjectModel {
  name: string;
  about: string;
  coverImage: string;
  description: Array<string>;
  companyName: string;
  iosLink: string;
  androidLink: string;
  images: Array<ProjectImagesModel>;
}
export interface ProjectImagesModel {
  detalis: Array<string>;
  image: string;
}
