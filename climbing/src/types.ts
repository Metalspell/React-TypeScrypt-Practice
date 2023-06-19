export enum SelectedPage {
  Home = 'home',
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus"
}

export type SelectedPageProps = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

export type LinksProps = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}