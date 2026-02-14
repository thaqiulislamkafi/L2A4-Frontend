import ProductDetails from '@/components/product-details';
import { Product } from '@/types/product.type';

async function getFood(id: string): Promise<Product> {

  const res = await fetch(
    `http://localhost:5000/api/meals/${id}`,
    { cache: "no-store" } 
  );
  return res.json();
}

const MealDetails = async({ params }: {
  params: Promise<{ id: string }>
}) => {
    const { id } = await params;
    const food = await getFood(id);

    return (
        <div>
            {
                <ProductDetails product={food?.data}/>
            }
        </div>
    );
};

export default MealDetails;