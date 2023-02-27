import React from 'react';
import './Footer.css';
import countapi from 'countapi-js';
/* import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'; */
/* import $ from 'jquery'; */
import { Link } from 'react-router-dom';

countapi.visits().then((result) => {
    document.getElementById("counter").innerHTML = result.value;
});



export default function Footer() {

    return (
        <div className='footer lg:fixed lg:bottom-[0]'>
            <div className='flex flex-wrap justify-center text-center md:grid lg:flex'>
                <div className="foots block">
                    <div className='my-1'>
                        <Link to='/politique-de-confidentialite' className="no-underline text-gray-200 text-xs hover:!text-white">Polique de confidentialité</Link>
                    </div>
                    <div className='my-1'>
                        <Link to='/conditions' className="no-underline text-gray-200 text-xs  hover:!text-white">Conditions général d'utilisation</Link>
                    </div>
                    <div className='my-1'>
                        <Link to='/mention-legale' className="no-underline text-gray-200 text-xs  hover:!text-white">Mention légales</Link>
                    </div>

                </div>
                <div className="foots">
                    <h6 className='font-black'>Avertissement</h6>
                    <p style={{ color: "#F5CB5C" }}>Faire du tradding peut comporter des risques.</p>
                </div>
                <div className="foots mb-4">
                    <h6 className='mb-3 font-black'>Nous contacter</h6>
                    <a href="mailto:lmkmeta3@gmail.com" className='bg-[#F5CB5C] py-2 px-4 rounded-md no-underline text-[#242423] font-bold'>Contactez-nous</a>
                </div>
                <div className="foots">
                    <h6 className='font-black'>Nombre de visite:</h6>
                    <h6 style={{ color: "#F5CB5C" }} id="counter">0</h6>
                </div>
                <div className="foots">
                    <p>
                        Copyright &copy; 2022. Designed by <span className='text-[#F5CB5C]'>Kenza SKALLI</span>
                    </p>
                </div>
            </div>
        </div >
    )
}