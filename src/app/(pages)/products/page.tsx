import Header from "@/app/components/Header";
import Card from "@/app/components/card";
import productlist from "@/app/assets/data/productlist.json";

const products = () => {
  return (
    <div>
      <Header />
      <div className="card-list flex-row flex-wrap space-x-4 object-cover sm:flex md:flex justify-center gap-4 mt-4">
        {productlist.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            brand={product.brand}
            name={product.name}
            size={product.size}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};
export default products;
