"use client";
import { useProducts } from '@/data/products'
import React from 'react'
import ProductCard from './ProductCard'
import { Loader2 } from 'lucide-react';

const ProductList = () => {
    const { data, isLoading } = useProducts()
    console.log(data)
    return (
        <div className='grid gap-4 grid-cols-3 max-w-4xl mx-auto'>
            {isLoading && <><span /><Loader2 className='animate-spin mx-auto my-10' size={64} /></>}
            {data?.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList