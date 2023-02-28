import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Navigation/Home/Home';
import About from './Components/Navigation/About/About';
import Payment from './Components/Navigation/Payment/Payment';
import News from './Components/Navigation/News/News';
import Policies from './Components/Navigation/Policies';
import Cgu from './Components/Navigation/Cgu';
import LegalNotice from './Components/Navigation/LegalNotice';
import Video from './Video/MathiasLacrosse.mp4'; 
import Crypto from './Components/Navigation/Crypto/Crypto';
import axios from 'axios';
import ModalGetPhone from './Components/ModalGetPhone/ModalGetPhone';
import { useSnackbar } from "notistack";



function App() {
  const [isShowVideo, setIsShowVideo] = useState(false);
  const [isVideoOver, setIsVideoOver] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isModal, setIsModal] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setIsShowVideo(true);
    setTimeout(() =>  {
      setIsShowVideo(false); 
      setIsVideoOver(true);
    }, 64000)
}, [])

useEffect(() => {
  setIsModal(false);
  if(isVideoOver) {
    setTimeout(() =>  setIsModal(true), 5000)
  }
}, [isVideoOver])

const handleSubmit = () => {
  axios
    .post(process.env.REACT_APP_URL_API, 
      {
          "identifier": phoneNumber
      }, {
        headers: {
          "Content-Type": "application/json",
        },
    }) 
    .then(res => {
        enqueueSnackbar("Votre numéro a été ajouté à notre liste privée !", {
          variant: "success",
        });
      setIsModal(false);
    })
    .catch(error => {
      if(error.response.data.code === 15) {
        enqueueSnackbar("Ce numéro a déjà été ajouté à notre liste privée ! Veuillez en saisir un autre", {
          variant: "error",
        });
      } else if (error.response.data.code === 11 || error.response.data.code === 19) {
        enqueueSnackbar("Veuillez mettre un numéro valide !", {
          variant: "error",
        });
      } else {
        enqueueSnackbar("une erreur est survenue", {
          variant: "error",
        });
      } 
    });
  }

  return (
    <div className={`${isModal ? "bg-[rgba(0,0,0,.3)] md:h-screen" : "App w-full h-full mt-5 lg:mt-0"}`}>
      {isShowVideo && (
        <div className='fixed w-screen h-screen mx-auto top-0 z-50 bg-black'>
            <video 
              autoPlay 
              controls    
              preload='true'
              className="bg-cover w-screen h-full"
          >
            <source src={Video} type="video/mp4"/>
          </video>
              <button 
                className='bg-[#F5CB5C] font-bold py-2 px-4 rounded-md text-[#242423] absolute z-[60] bottom-20 md:bottom-11 xxs:w-56 sm:w-70 left-[50%] translate-x-[-50%] mx-auto' 
                onClick={() => {
                  setIsShowVideo(false);
                  setIsVideoOver(true);
                }}>
                  Ignorer la présentation
              </button>
        </div>
      )}

      {isModal && (
        <div className='flex justify-center'>
          <ModalGetPhone phoneNumber={phoneNumber} handleClose={() => setIsModal(false)} handleChange={setPhoneNumber} handleSubmit={handleSubmit} />
        </div>
      )}
            
      <Routes >
        <Route path="*" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/cryptomonnaie" element={<Crypto />} />
        <Route path="/news" element={<News />} />
        <Route path="/achat" element={<Payment />} />
        <Route path="/politique-de-confidentialite" element={<Policies />} />
        <Route path="/conditions" element={<Cgu />} />
        <Route path="/mention-legale" element={<LegalNotice />} />

      </Routes>
    </div>
  );
}

export default App;
