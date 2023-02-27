import React, { useState, useRef, useEffect } from 'react';
import './DataApp.css';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const DataApp = ({
    name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange
}) => {

    const [openDropdown, setOpenDropdown] = useState(false);
    const isMobiles = window.innerWidth < 800;
    const ref = useRef(null);
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if(ref.current && !ref.current.contains(event.target)) {
                setOpenDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [ref]);
        

    return (
        <>
        {isMobiles ? (
            <div ref={ref}>
                <div className="relative inline-block text-left">
                    <button className="w-48 md:w-[450px] my-3 rounded-md border border-gray-300 bg-white px-4 py-2 shadow-sm hover:bg-gray-50" onClick={() => setOpenDropdown(!openDropdown)}>
                        <div className="space-x-5 flex justify-between text-gray-700">
                            <img src={image} alt='crypto' className='img-rotate w-7 h-7 my-auto' />
                            <p className='uppercase text-2xl font-semibold my-auto md:hidden'>{symbol}</p>
                            <p className='uppercase text-2xl font-semibold my-auto hidden md:block'>{name}</p>
                            <div className="my-auto">{openDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
                        </div>
                    </button>

                    <div className={`${openDropdown ? 'block' : 'hidden'} absolute right-0 z-10 -mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                        <div className="py-1">
                        <p className="text-gray-700 block px-4 py-2 text-sm">{price} €</p>
                        <p className="text-gray-700 block px-4 py-2 text-sm">{volume.toLocaleString()}</p>
                        <p className={`${priceChange < 0 ? 'text-red-700' : 'text-green-700'} block px-4 py-2 text-sm`}>{priceChange.toFixed(2)}%</p>
                        <p className="text-gray-700 block px-4 py-2 text-sm">Cap: {marketcap.toLocaleString()} €</p>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className='coin-container'>
                <div className='coin-row'>
                    <div className='coin'>
                        <img src={image} alt='crypto' className='img-rotate' />
                        <h1>{name}</h1>
                        <p className='coin-symbol'>{symbol}</p>
                    </div>
                    <div className='coin-data'>
                        <p className='coin-price'>{price} €</p>
                        <p className='coin-volume'>{volume.toLocaleString()} €</p>

                        {priceChange < 0 ? (
                            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                        ) : (
                            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                        )}

                        <p className='coin-marketcap'>
                            Cap: {marketcap.toLocaleString()} €
                        </p>
                    </div>
                </div>
            </div>
        )}
        </>
    );
};

export default DataApp;
