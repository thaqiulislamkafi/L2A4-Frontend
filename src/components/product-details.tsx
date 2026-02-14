import { ProductCardProps } from "@/types/product.type";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { GiModernCity } from "react-icons/gi";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";


const ProductDetails = ({ product, reviews }: ProductCardProps) => {


    return (

        <div className="max-w-5xl mx-auto ">
            <div className='bg-gray-100 text-center py-16 rounded-xl px-4 lg:px-16 dark:bg-gray-700 my-6'>
                <p className='text-3xl md:text-4xl my-3 poppins font-bold'>Meal Details</p>
                <p className='text-gray-800 my-2 md:text-lg font-semibold'>
                    Enjoy the delicious taste of <span className='text-[#23BE0A]'>{product?.name}</span>,
                    freshly prepared with quality ingredients in <span className='text-[#23BE0A]'>{product?.price}</span>.
                    A perfect choice for food lovers seeking flavor, freshness, and satisfaction.
                </p>
            </div>

            {/* ..............Nestora Bar.............. */}

            <Card className="md:flex flex-row mt-10 px-6">

                <div className='bg-gray-200 lg:p-6 rounded-xl lg:w-[29.13vw] h-auto md:w-3/5'><img className='rounded-xl h-60 w-full' src={product.image} alt="" /></div>

                <CardContent className=' text-gray-700 dark:text-gray-200 space-y-1.5'>

                    {/* <p className='text-[#176AE5] text-xs px-3 py-2 bg-[#1769e51c] rounded-2xl w-fit my-2 dark:text-gray-200'># {product.category} </p> */}


                    <CardTitle className=" text-xl lg:text-3xl font-bold">{product?.name}</CardTitle>

                    <CardDescription className="text-sm lg:text-xl font-medium">Description : {product.description}</CardDescription>

                    <p className='font-medium  text-sm lg:text-lg'>Provider Name : <span className='text-[#23BE0A] font-bold'>{product.
                        provider.name}</span></p>

                    <p className='font-medium  text-sm lg:text-lg'>Cuisine Type : <span className='text-[#23BE0A] font-bold'>{product.
                        cuisine_rel.cuisine_type_name}</span></p>

                    
                    <p className='font-medium text-sm lg:text-lg'>Price : <span className='text-[#23BE0A] font-bold'>{product.price} Tk</span></p>


                    <Button className='my-3'>Add to Cart</Button>
                </CardContent>
            </Card>


            {/* ..............product Reviews Bar.............. */}

            <div className='border-2 border-gray-200 rounded-xl p-7 text-center my-20 mb-40'>
                <p className='poppins text-xl lg:text-3xl my-1 font-bold'>Reviews</p>
                <div className='border-t-2 border-dashed border-gray-200 my-6'></div>
                <div className='my-10 flex flex-col md:flex-row'>

                    {reviews?.length === 0 && <>

                        <p className='text-gray-800 font-semibold  text-center mx-auto md:text-lg'>There is no review of this <span className='text-[#23BE0A]'>{product.name}</span> Meal</p>

                    </>
                    }

                    {reviews?.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white mx-4 p-6 rounded-2xl shadow-xs w-80 flex-shrink-0 border-l border-[#fceb00] hover:shadow-lg transition-shadow  duration-300"
                        >
                            <div className="flex items-center mb-4">

                                <div>
                                    <h3 className="font-semibold text-gray-900">{review.user_name}</h3>
                                    <div className="flex items-center">

                                        {
                                            [...Array(5)].map((k, i) => (
                                                <FaStar
                                                    key={i} className={`text-sm ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <FaQuoteLeft className="text-gray-300 text-xl mb-2" />
                                <p className="text-gray-600 italic">{review.comment}</p>
                            </div>

                            <div className="flex items-center text-sm text-gray-500">
                                <GiModernCity className="mr-2" />
                                <span>{review.product_name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='border-t-2  border-gray-100 my-4'></div>

                <div className=' my-3 btn bg-[#fceb00] w-full rounded-4xl'>Add Review</div>
            </div>

        </div>

    );
};

export default ProductDetails;