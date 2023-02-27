import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import coti from './Assets/coti.png';
import ethernity from './Assets/ethernity.png';
import keyfi from './Assets/keyfi.png';
import mina from './Assets/mina.png';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';

export default function Home() {

    const autoplay = useRef(Autoplay({ delay: 2000 }));

    const Images = [
        { img: coti, title: 'COTI', caption: '',  },
        { img: ethernity, title: 'Ethernity', caption: '',  },
        { img: keyfi, title: 'Keyfi', caption: '',  },
        { img: mina, title: 'Mina', caption: '',  },
    ]

    return (
        <div>
            <Carousel
                sx={{ maxWidth: 380, "& > .mantine-Carousel-indicators > button": {
                    background: '#242423',
                } }}
                mx="auto"
                loop
                withControls={false}
                withIndicators
                // height={200}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
            >
                {Images.map((item, i) => (
                    <Carousel.Slide key={i}>
                        <div className="text-center">
                            <div className='min-h-[420px] flex items-center'>
                                <img className={`m-auto h-[100px]`} src={item.img} alt="eos"  />
                            </div>
                            <h3>{item.title}</h3>
                            <p className='text-center'>Investissez et récupérer rapidement vos gains</p>
                            <p className='text-black text-lg mb-14'>Nos crypto du moment</p>
                        </div>

                    </Carousel.Slide>
                ))}
            </Carousel>
        </div>


    )
}
