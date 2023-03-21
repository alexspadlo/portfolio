import React, { FC } from 'react'
import carData from './data'
import MyArtCarousel from './MyArtCarousel'
import GenButton from '@generic/GenButton'
import s from './ArtCarousel.scss'

const ArtCarousel: FC = () => {
    const { images } = carData || {}
    return (
        <div className='container-fluid my-5 py-4'>
            <div className='row py-5'>
                <div className='col-12 col-lg-7 m-auto'>
                    <section className='w-100 text-center'>
                        <p className={`${s.fontBold} h2`}>Artworks Showcase</p>
                        <p className={`${s.fontThin}`}>Art is my safe haven, where I flee in the sad days and also in the happy days to expose my inspirations.</p>
                        <GenButton content='View Artworks' onClick={() => console.log('artworks')} />
                    </section>
                </div>
            </div>
            <MyArtCarousel images={images} />
        </div>

    )
}

export default ArtCarousel