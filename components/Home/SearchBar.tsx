import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const SearchBar = () => {
    return (
        <div className='shadow-lg p-3 sticky top-0 bg-white z-50'>
            <div className='flex items-center justify-end w-full max-w-4xl mx-auto'>
                <div className='flex gap-2'>
                    <Input type='text' placeholder='Search products...' />
                    <Button>Search</Button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar