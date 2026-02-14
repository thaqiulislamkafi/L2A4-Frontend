import { Category } from "./category.type";
import { Cuisine } from "./cuisine.type";
import { Dietry } from "./dietry.type";
import { Review } from "./review.type";
import { User } from "./user.type";

export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  cuisine_rel: Cuisine;
  dietry_rel: Dietry;
  category: Category;
  availabilty_status: string;
  price: number;
  provider: User;
 
}

export interface ProductCardProps {
  className?: string;
  product : Product ;
  reviews? : Review[]
}