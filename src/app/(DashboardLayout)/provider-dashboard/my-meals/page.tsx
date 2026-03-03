"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { axiosSecure } from "@/hooks/useAxios"
import { authClient } from "@/lib/auth-client"
import { Product } from "@/types/product.type"
import { useQuery } from "@tanstack/react-query"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export default function MeMeals() {

    const {data:session} = authClient.useSession() ;

    const {data : meals=[]} = useQuery({
       queryKey : ['my-meals'],
       queryFn : async()=>{
            const {data} = await axiosSecure.get(`/api/meals/my-meals/${session?.user.id}`) ;
            return data.data ;
       }
       ,enabled : !! session
    })


  return (

    <Table>
      <TableCaption>A list of your all meals.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Meal Id</TableHead>
          <TableHead>Meal Name</TableHead>
          <TableHead>Cuisine Type</TableHead>
          <TableHead>Dietry Type</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {meals?.map((meal:Product) => (
          <TableRow key={meal.id}>
            <TableCell className="font-medium">{meal.id}</TableCell>
            <TableCell>{meal.name}</TableCell>
            <TableCell>{meal.cuisine_rel.cuisine_type_name}</TableCell>
            <TableCell >{meal.dietry_rel.dietry_type_name}</TableCell>
            <TableCell >{meal.category_rel.category_name}</TableCell>
            <TableCell className="text-right">{meal.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
