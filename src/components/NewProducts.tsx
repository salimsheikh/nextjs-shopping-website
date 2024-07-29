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
    {
      img: "/products/watch-1.jpg",
      title: "WATCHES",
      desc: "Smart Watches Vital Plus",
      rating: 4,
      price: "100.00",
    },
    {
      img: "/products/watch-2.jpg",
      title: "WATCHES",
      desc: "Pocket Watch Leather Pouch",
      rating: 3,
      price: "120.00",
    },
    {
      img: "/products/placeholder.jpg",
      title: "Jeans",
      desc: "Slim Fit Men's Jeans",
      rating: 4,
      price: "40.00",
    },
    {
      img: "/products/placeholder.jpg",
      title: "Dress",
      desc: "Summer Floral Print Dress",
      rating: 5,
      price: "70.00",
    },
    {
      img: "/products/placeholder.jpg",
      title: "Bag",
      desc: "Leather Handbag for Women",
      rating: 4,
      price: "80.00",
    },
    {
      img: "/products/placeholder.jpg",
      title: "Shoes",
      desc: "Men's Formal Leather Shoes",
      rating: 5,
      price: "90.00",
    },
    {
      img: "/products/placeholder.jpg",
      title: "Hat",
      desc: "Unisex Cotton Baseball Cap",
      rating: 3,
      price: "20.00",
    },
    {
      img: "/products/placeholder.jpg",
      title: "Sunglasses",
      desc: "Polarized Sunglasses for Men",
      rating: 4,
      price: "35.00",
    },
    {
      img: "/products/placeholder.jpg",
      title: "Earrings",
      desc: "Gold Plated Stud Earrings",
      rating: 5,
      price: "15.00",
    },
    {
      img: "/products/placeholder.jpg",
      title: "Belt",
      desc: "Leather Belt for Men",
      rating: 4,
      price: "25.00",
    },
    {
      img: "/products/placeholder.jpg",
      title: "Gloves",
      desc: "Winter Warm Gloves",
      rating: 3,
      price: "18.00",
    },
    {
      img: "/products/placeholder.jpg",
      title: "Scarf",
      desc: "Women's Cashmere Scarf",
      rating: 5,
      price: "50.00",
    },
    {
      img: "/products/placeholder.jpg",
      title: "Sneakers",
      desc: "Men's Casual Sneakers",
      rating: 4,
      price: "60.00",
    },
    {
      img: "/products/placeholder.jpg",
      title: "Necklace",
      desc: "Silver Pendant Necklace",
      rating: 5,
      price: "45.00",
    },
    {
      img: "/products/jacket-1.jpg",
      title: "Jacket",
      desc: "Women's Leather Biker Jacket",
      rating: 5,
      price: "150.00",
    }
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
