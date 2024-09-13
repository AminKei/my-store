import { useState } from "react";

interface Product {
  title: string;
  image: string;
  price: number;
}

export const useFilter = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showFree, setShowFree] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(9999);

  const filterProducts = products.filter((product) => {
    const isFree = showFree ? product.price === 0 : true;
    const withinPriceRange =
      product.price >= minPrice && product.price <= maxPrice;
    return isFree && withinPriceRange;
  });

  

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(event.target.value));
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(event.target.value));
  };

  return {
    handleMaxPriceChange,
    handleMinPriceChange,
    filterProducts,
    setMaxPrice,
    setProducts,
    showFree,
    minPrice,
    maxPrice,
  };
};
