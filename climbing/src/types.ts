export enum SelectedPage {
  Home = 'home',
  Benefits = "benefits",
  OurClasses = "ourclasses",
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