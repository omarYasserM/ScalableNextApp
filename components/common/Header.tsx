import React from 'react'

const Header = () => {
    return (
        <div className='flex items-center w-full py-5 bg-blue-600 text-white'>
            <div className='flex items-center justify-between max-w-4xl w-full mx-auto'>
                <h1 className='text-2xl font-semibold'>SampleProject</h1>
                <nav>
                    <ul className='flex gap-7'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Header