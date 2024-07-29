import Image from "next/image";
import React from "react";
import ProductRating from "./ProductRating";

interface productCardPropsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const ProductCard: React.FC<productCardPropsType> = ({
  img,
  title,
  desc,
  rating,
  price,
}) => {
  return (
    <div className="px-4 border border-gray-200 max-w-[400px] rounded-lg">
      <div>
        <Image
          className="w-full h-auto"
          src={img}
          height={200}
          width={200}
          alt={title}
        />
      </div>
      <div className=" space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p className=" text-gray-400 max-w-[150px]">{desc}</p>
        <ProductRating rating={rating} />
        <div className="font-bold flex gap-10">${price} <del className=" text-gray-400 font-normal">${parseFloat(price) + 50}.00</del></div>
      </div>
    </div>
  );
};

export default ProductCard;
