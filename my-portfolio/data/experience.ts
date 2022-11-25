export interface MyExpirienceTypes {
  company: string,
  position: string,
  month_begin: string,
  month_end: string,
  year_begin: number,
  year_end: number,
  activity: string
}

export const experience: MyExpirienceTypes[] = [
  {
    company: "TechMANGO",
    position: 'React Dev',
    month_begin: "July",
    month_end: "June",
    year_begin: 2021,
    year_end: 2022,
    activity: 'During my work, I performed the following tasks: • Work with SignUp and SignIn functionality (data validation, work with requests: sending input data to the server, processing the server response) • Adding and editing new components (new pages) and correction of existing ones. • Working with layouts in Figma, developing new elements according to the layout. • Fix existing bugs • Testing requests via Swagger and Postman.'
  },
  {
    company: "Ukrainian Railway",
    position: 'Quality Control Engineer',
    month_begin: "August",
    month_end: "October",
    year_begin: 2009,
    year_end: 2020,
    activity: 'I started working as a department head (train brake repair department). I was qualified as an assembly quality engineer for all assemblies and mechanisms of the passenger car. I supervised the whole technological process of assembly.'
  }
]