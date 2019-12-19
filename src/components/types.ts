export interface TechIcon {
  src: string;
  name: string;
}

export interface Project {
  imgURL: string;
  title: string;
  description: string;
  frontEnd: string;
  backEnd: string;
  siteURL?: string;
  hideLink?: boolean;
  bgColor?: string;
}
