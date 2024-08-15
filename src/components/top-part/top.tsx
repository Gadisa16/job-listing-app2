import React from 'react'

function top() {
    return (
        <div className='w-[97%] md:w-[80%] mx-auto mt-10 mb-[50px]'>
            <div className="w-[236px] h-[38px] gap-0">
                <p className="font-poppins text-4xl font-extrabold leading-[38.4px] text-left text-customBlue">opportunities</p>
                <p className="text-customGray font-epilogue text-base font-normal leading-[25.6px] text-left mt-2">showing 10 results</p>
            </div>
            <div className="text-right">
                <span className="text-customGray font-epilogue text-base font-extralight leading-[25.6px] text-right">sort by:</span>
                <select className='font-epilogue text-base font-medium leading-[25.6px]'>
                    <option>most relevant</option>
                    <option>newest</option>
                    <option>oldest</option>
                </select>
            </div>
        </div>
    );
}

export default top