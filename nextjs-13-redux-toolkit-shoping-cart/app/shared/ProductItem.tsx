import Image from "next/image";
import React from "react";
import AddButton from "@/app/shared/AddButton";
import { ProductItemProps } from "@/interfaces";

const ProductItem = (props: ProductItemProps) => {
  return (
    <div className="overflow-hidden transition border rounded-md shadow hover:shadow-lg ">
      <Image
        src={props.product.imagePath}
        width={400}
        height={300}
        alt={props.product.name}
      />
      <div className="p-2">
        <h6 className="text-center text-slate-600">
          {props.product.name}
        </h6>
        <p className="text-center text-slate-600">
          {props.product.price} $
        </p>
        <AddButton product={props.product} />
      </div>
    </div>
  );
};

export default ProductItem;