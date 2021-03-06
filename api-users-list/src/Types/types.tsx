export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAddress;
  phone: string;
}

export interface IAddress {
  street: string;
  city: string;
  zipcode: string;
}

export interface TableNavData {
  text: string;
}

export interface sizeCells {
  size: string;
}

export interface tableItemCount {
  countOfUsers: number;
}