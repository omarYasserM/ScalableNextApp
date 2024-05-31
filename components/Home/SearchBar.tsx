import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const SearchBar = () => {
    return (
        <div className='flex gap-2 shadow-lg p-3 justify-end sticky top-0 bg-white'>
            <div className='flex gap-2'>
                <Input type='text' placeholder='Search products...' />
                <Button>Search</Button>
            </div>
        </div>
    )
}

export default SearchBar