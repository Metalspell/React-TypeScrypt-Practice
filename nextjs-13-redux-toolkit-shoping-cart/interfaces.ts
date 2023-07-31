export interface Product {
  id: number;
  name: string;
  price: number;
  imagePath: string;
}

export interface CartItem {
  product: Product;
  qty: number;
}

export interface CartState {
  cartItems: CartItem[];
}

export interface ProvidersProps {
  children: React.ReactNode;
}

export interface ProductItemProps {
  product: Product;
}

export type VariantType =
  | "primary"
  | "danger"
  | "success"
  | "warning"
  | "outline-danger"
  | "outline-warning"
  | "outline-success"
  | "outline-primary";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  variant?: VariantType;
  square?: boolean;
  paddingLess?: boolean;
}