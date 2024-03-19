import { useState, useEffect } from "react";
import categoryData from "api/categories.json";
import Category from "components/ui/Category";
import Title from "components/ui/Title";
export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(categoryData);
  }, []);
  return (
    <div className=" bg-white py-4 shadow md:mb-3">
      <div className="container mx-auto">
        <Title>Kategoriler</Title>
        <div className=" grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8  xl:grid-cols-10 ">
          {categories &&
            categories.map((category ) => (
              <Category  key={category.id} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
}
