"use client";

import {
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import {
  totalCartItemsSelector,
} from "@/store/features/cartSlice";
import { useAppSelector } from "@/store/store";

interface Props {
  className?: string;
}
const CartButton = (props: Props) => {
  const totalItems = useAppSelector(totalCartItemsSelector);
  return (
    <div className={`${props.className} relative`}>
      <ShoppingCartIcon className="w-9 text-slate-600" />
      {!!totalItems && (
        <div
          key={totalItems}
          className="absolute flex items-center justify-center w-6 text-white bg-red-500 rounded-full -top-2 -right-2 animate-pingOnce "
        >
          {totalItems}
        </div>
      )}
    </div>
  );
};

export default CartButton;