import CarItem from "../cart_item/CartItem";
import { Wrapper } from "./Cart.styled";
import { CartItemType } from "../../general_component/App";

type Props = {
  cartItems: CartItemType[];
  addItemToCart: (value: CartItemType) => void;
  removeItemFromCart: (value: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addItemToCart, removeItemFromCart }) => {
  return (
    <Wrapper>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ?
        <p>No items in cart</p>
        :
        null
      }
      {cartItems.map(item => (
        <CarItem />
      ))}
    </Wrapper>
  );
}

export default Cart;