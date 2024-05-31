import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Product } from '@/data/products/type';
import Image from 'next/image';

type ProductCardProps = {
    product: Product;
}
const ProductCard = (props:ProductCardProps) => {
    const { product:{title,image,description,category,id,price,rating} } = props;
  return (
    <Card className='hover:scale-105'>
        <CardHeader>
            <Image src={image} alt={title} height={100} width={140} className='object-contain h-28 mx-auto'/>
            <CardTitle>{title}</CardTitle>
        </CardHeader>

        <CardContent>
        <p className='text-sm text-opacity-75'>{description.slice(0, 100) + '...'
        }</p>
        </CardContent>

        <CardFooter>
            <div className='flex justify-between w-full'>
                <p className='text-xs text-opacity-75 font-semibold'>{category}</p>
                <p className='text-lg font-bold text-opacity-75'>${price}</p>
            </div>
        </CardFooter>
    </Card>
  )
}

export default ProductCard