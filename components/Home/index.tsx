import React from 'react'
import SearchBar from './SearchBar'
import ProductList from './ProductList'
import Banner from './Banner'

const Home = () => {
    return (
        <div className='flex flex-col gap-7'>
            <SearchBar />
            <ProductList />
            <Banner />
        </div>
    )
}

export default Home