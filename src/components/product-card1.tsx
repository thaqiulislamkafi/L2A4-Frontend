import { cn } from "@/lib/utils";

import { Price, PriceValue } from "@/components/price";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { ProductCardProps } from "@/types/product.type";
import Link from "next/link";



const ProductCard = ({ className, product }: ProductCardProps) => {

  return (

    <Card className="h-full overflow-hidden p-0">
      <CardHeader className="relative block p-0">
        <AspectRatio ratio={1.268115942} className="overflow-hidden">
          <img
            src={product.image}
            className="block size-full object-cover object-center"
          />
        </AspectRatio>
        {product.badge && (
          <Badge
            style={{
              background: product.badge.backgroundColor,
            }}
            className="absolute start-4 top-4"
          >
            {product.badge.text}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="flex h-full flex-col gap-4 pb-6">
        <CardTitle className="text-xl font-semibold">
          {product.name}
        </CardTitle>
        <CardDescription className="font-medium text-muted-foreground">
          {product.description}
        </CardDescription>
        <div className="mt-auto">
          <Price onSale={product.price != null} className="text-lg font-semibold">
            <PriceValue
              price={product.price}
              currency="USD"
              variant="regular"
            />
            <PriceValue price={product.price} currency="USD" variant="sale" />
          </Price>
        </div>
        <Button className="cursor-pointer">
          <Link href={`/allfoods/${product.id}`}>Details</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export { ProductCard };
