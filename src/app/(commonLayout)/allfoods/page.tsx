import {  ProductCard } from '@/components/product-card1';
import { Product } from '@/types/product.type';

interface ProductResponse {
    data : Product[]
}

async function getFoods() : Promise<ProductResponse>{

    const res = await fetch("http://localhost:5000/api/meals", {
        cache: "no-store",
    });
    return res.json() as Promise<ProductResponse>;
}

const AllFoods = async  () => {

    const foods = await getFoods();

    return (
        <div>
            <div className="grid grid-cols-4 gap-6 p-6">
                {foods.data.map((food:Product) => (
                    <ProductCard key={food.id} product={food}/>
                ))}
            </div>
        </div>
    );
};

export default AllFoods;