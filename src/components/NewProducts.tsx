import React from "react";
import ProductCard from "./ProductCard";

const NewProducts = () => {
  const ProductData = [
    {
      img: "/products/jacket-1.jpg",
      title: "Jaket",
      desc: "MEN Yarn Fleece Full-Zip Jacket",
      rating: 4,
      price: "45.00",
    },
    {
      img: "/products/skirt-1.jpg",
      title: "SKIRT",
      desc: "Black Floral Wrap Midi Skirt",
      rating: 5,
      price: "55.00",
    },
    {
      img: "/products/party-wear-1.jpg",
      title: "PARTY WEAR",
      desc: "Women's Party Wear Shoes",
      rating: 2,
      price: "25.00",
    },
    {
      img: "/products/shirt-1.jpg",
      title: "SHIRT",
      desc: "Pure Garment Dyed Cotton Shirt",
      rating: 5,
      price: "45.00",
    },
    {
      img: "/products/sports-1.jpg",
      title: "Sports",
      desc: "Trekking & Running Shoes - Black",
      rating: 3,
      price: "58.00",
    },
  ];
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {ProductData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
