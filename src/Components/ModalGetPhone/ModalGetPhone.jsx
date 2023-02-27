import React from 'react';
import { IoIosClose } from 'react-icons/io';

const ModalGetPhone = ({
    handleClose,
    handleChange,
    phoneNumber,
    handleSubmit,
}) => {
    return (
        <div className='w-[80%] h-[365px] xs:h-[350px] sm:h-80 md:w-[340px] xl:w-96 bg-white rounded-2xl mt-44 z-50 mx-auto px-10 py-12 text-center shadow-lg fixed'>
             <IoIosClose className='absolute top-2 right-2 text-4xl cursor-pointer' onClick={handleClose} />
            <h6 className='uppercase text-2xl font-bold leading-6 pb-2'>Rejoignez notre Liste privée</h6>
            <p className='text-xs xl:text-sm font-light'>En vous inscrivant, vous recevrez directement par sms les dernières cryptos du moment à investir.</p>
            <input type="text" placeholder="Entrez votre numéro de téléphone" className="border-2 border-gray-200 rounded-lg w-full h-10 pl-5 text-xs mt-2 ring-[#F5CB5C]" 
                value={phoneNumber ? phoneNumber : ''} 
                onChange={(evt) => {
                const value = evt.target.value;
                handleChange?.(value);
            }}/>
            <button type="button" className='w-full py-2 mt-2 shadow-md rounded-lg text-center bg-black font-bold hover:bg-green-500' onClick={handleSubmit}>VALIDER</button>
            <p className='text-[10px] lg:text-xs font-light mt-2'>C'est une opportunité à ne surtout pas manquer !</p>
        </div>
    );
};

export default ModalGetPhone;