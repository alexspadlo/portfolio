import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import s from './DesignCarousel.scss'

interface ImageProps {
    data: string,
    isVideo?: boolean
}

interface CarouProps {
    images: Array<ImageProps>
}

const DesignCarousel: FC<CarouProps> = ({ images }) => {
    if (!images || !images.length) return null
    return (
        <div className='col-12 mb-3'>
            <div id="designCarousel" className={`carousel slide`} data-ride="carousel">
                <div className="carousel-inner text-center px-5">
                    {images.map((img, iImg) => (
                        <div key={uuidv4()} className={`carousel-item ${iImg === 0 ? 'active' : ''}`}>
                            {!img.isVideo &&
                                <img className={s.imgHei} src={img.data} alt={img.data} />
                            }
                            {img.isVideo &&
                                <video className="w-100" height="auto" autoPlay >
                                    <source src={img.data} type="video/mp4" />
                                </video>
                            }
                        </div>
                    ))}
                </div>
                {images.length > 1 &&
                    <span>
                        <a className={`${s.carouseControl} ${s.carouselPrev} carousel-control-prev`} href="#designCarousel" role="button" data-slide="prev">
                            <span className={`${s.carouselArrows} carousel-control-prev-icon`} aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className={`${s.carouseControl} ${s.carouselNext} carousel-control-next`} href="#designCarousel" role="button" data-slide="next">
                            <span className={`${s.carouselArrows} ${s.carouselRight} carousel-control-next-icon`} aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </span>
                }
            </div>
        </div>
    )
}

export default DesignCarousel