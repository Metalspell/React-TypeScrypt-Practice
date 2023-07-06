export enum SelectedPage {
  Home = 'home',
  Benefits = "benefits",
  OurClasses = "gallery",
  ContactUs = "contactus"
}

type SelectedPageVoidProps = {
  setSelectedPage: (value: SelectedPage) => void;
}

export type SelectedPageProps = SelectedPageVoidProps & {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
}

export type LinksProps = SelectedPageVoidProps & {
  page: string;
  selectedPage: SelectedPage;
}

export type ActionButtonProps = SelectedPageVoidProps & {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
}

export type HomePageProps = SelectedPageVoidProps;
export type BenefitsPageProps = SelectedPageVoidProps;
export type GalleryPageProps = SelectedPageVoidProps;
export type ContactUsProps = SelectedPageVoidProps;

export type MainTextProps = {
  children: React.ReactNode;
}

export type IBenefitsItemProps = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};
export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export type GalleryItemProps = {
  name: string;
  description: string | undefined;
  image: string;
};

export type GalleryType = {
  name: string;
  description?: string;
  image: string;
}