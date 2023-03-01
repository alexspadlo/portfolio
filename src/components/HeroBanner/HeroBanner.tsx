import React, { FC } from 'react'
import hero from '../../static/images/heroBan.png'
import s from './HeroBanner.scss'

const HeroBanner: FC = () => {
    return (
        <div className='container-fluid my-5 py-4'>
            <div className='row py-lg-5 py-0'>
                <div className='col-12 order-lg-1 order-2 col-lg-4 px-lg-0 px-3'>
                    <section className='w-100 text-right'>
                        <p className={`${s.letterStyle}`}>PROGRAMING</p>
                        <p className={`${s.typeStyle}`}>JAVASCRIPT REACT  —  TYPESCRIPT -  MACHINE LEARNING  —  PYTHON</p>
                        <p className={`${s.fontThin}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </section>
                </div>
                <div className='col-12 order-lg-2 order-1 col-lg-4 pb-4 pb-lg-0'>
                    <img className="img-fluid w-100" src={hero} alt={hero} />
                </div>
                <div className='col-12 order-lg-3 order-3 col-lg-4 px-lg-0 px-3'>
                    <section className={`${s.customHei} d-lg-block d-none`}>&nbsp;</section>
                    <section className='w-100'>
                        <p className={`${s.letterStyle}`}>DESIGN</p>
                        <p className={`${s.typeStyle}`}>UI WEB DESIGN  —  ARTWORKS  —  COMMERCIAL</p>
                        <p className={`${s.fontThin}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </section>
                </div>
            </div>
        </div>

    )
}

export default HeroBanner