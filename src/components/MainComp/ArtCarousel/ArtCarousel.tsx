import React, { FC } from 'react'
import carData from './data'
import MyArtCarousel from './MyArtCarousel'
import GenButton from '@generic/GenButton'
import s from './ArtCarousel.scss'

interface ArtProps {
    handleDesign: (p?:string) => void
}

const ArtCarousel: FC<ArtProps> = ({ handleDesign }) => {
    const { images } = carData || {}
    return (
        <div className='container-fluid my-5 py-4 d-none d-lg-block'>
            <div className='row py-5'>
                <div className='col-12 col-lg-7 m-auto'>
                    <section className='w-100 text-center'>
                        <p className={`${s.fontBold} h2`}>Artworks Showcase</p>
                        <p className={`${s.fontThin}`}>Art is my safe haven, where I can escape from the pressures of daily life, focus on something positive and uplifting.</p>
                        <GenButton content='View All Artworks' onClick={() => handleDesign('artworks')} />
                    </section>
                </div>
            </div>
            <MyArtCarousel images={images} />
        </div>

    )
}

export default ArtCarousel