import React, { FC } from 'react'
import hero from '@images/heroBan.png'
import bannerSchema from './data'
import s from './HeroBanner.scss'

const HeroBanner: FC = () => {
    if (!bannerSchema) return null
    const { progtitle, progSub, progDes, desTitle, desSub, desDescript } = bannerSchema
    return (
        <div className='container-fluid my-lg-5 my-0 py-4'>
            <div className='row py-lg-5 py-0'>
                <div className='col-12 order-lg-1 order-2 col-lg-4 px-3'>
                    <section className='w-100 text-right position-relative'>
                        <section className={`${s.progAnime} w-100`}>
                            <p className={`${s.letterStyle}`}>{progtitle}</p>
                            <p className={`${s.typeStyle}`}>{progSub}</p>
                            <p className={`${s.fontThin}`}>{progDes}</p>
                        </section>
                    </section>
                </div>
                <div className='col-12 order-lg-2 order-1 col-lg-4 pb-4 pb-lg-0'>
                    <img className="img-fluid w-100" src={hero} alt={hero} />
                </div>
                <div className='col-12 order-lg-3 order-3 col-lg-4 px-3'>
                    <section className={`${s.customHei} d-lg-block d-none`}>&nbsp;</section>
                    <section className='w-100 position-relative'>
                        <section className={`${s.desAnime} w-100`}>
                            <p className={`${s.letterStyle}`}>{desTitle}</p>
                            <p className={`${s.typeStyle}`}>{desSub}</p>
                            <p className={`${s.fontThin}`}>{desDescript}</p>
                        </section>
                    </section>
                </div>
            </div>
        </div>

    )
}

export default HeroBanner