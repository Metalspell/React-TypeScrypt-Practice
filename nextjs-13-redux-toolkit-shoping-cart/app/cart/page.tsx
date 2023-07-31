"use client";
import CartCard from "@/app/shared/CartCard";
import React from "react";
import { TotalPriceSelector } from "@/store/features/cartSlice";
import { useAppSelector } from "@/store/store";

const CartPage = () => {
  const cartItems = useAppSelector(
    (state) => state.cart.cartItems
  );

  const totalPrice = useAppSelector(TotalPriceSelector);
  return (
    <div className="p-2">
      {cartItems.map((item, i) => (
        <CartCard key={i} cartItem={item} />
      ))}

      <p className="text-slate-600">
        Total Price:{" "}
        <span className="font-bold text-slate-900">
          {totalPrice} $
        </span>
      </p>
    </div>
  );
};

export default CartPage;