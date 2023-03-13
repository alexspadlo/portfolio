import React, { FC } from 'react'
import s from './ArtCarousel.scss'

const ArtCarousel: FC = () => {
    return (
        <div className='container-fluid my-5 py-4'>
            <div className='row py-5'>
                <div className='col-12 col-lg-7 m-auto'>
                    <section className='w-100 text-center'>
                        <p className={`${s.fontBold} h2`}>Artworks Showcase</p>
                        <p className={`${s.fontThin}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <span className="btn mt-1 btn-info">View Artworks</span>
                    </section>
                </div>
                {/* <div className='col-12'>

                </div> */}
            </div>
        </div>

    )
}

export default ArtCarousel