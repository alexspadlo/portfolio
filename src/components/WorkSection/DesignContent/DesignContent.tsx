import React, { FC, useState } from 'react'
import designSchema from './data'
import s from './DesignContent.scss'

const DesignContent: FC = () => {
    if (!designSchema) return null
    const { title, buttons } = designSchema
    if (!buttons || !buttons.length) return null
    const [first] = buttons
    const [choosed, setChoosed] = useState(first.ref)
    const [mainImages] = buttons.filter(cv => cv.ref === choosed)
    const { images } = mainImages || {}
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 pb-3 text-right'>
                    <p className={`h2 mb-3 ${s.fontBold} ${s.txtcolBlack}`}>{title}</p>
                    <hr className={`${s.goldHR} w-100`} />
                </div>
                {buttons.map((btN, ix) => (
                    <div key={`imagesArt${ix + 1}`} className='col-12 col-lg-2 col-md-6 text-center'>
                        <span onClick={() => setChoosed(btN.ref)} className={`btn ${choosed === btN.ref ? 'active' : ''} mb-3 btn-info`}>{btN.text}</span>
                    </div>
                ))}
                {images && images.length > 0 &&
                    <div className='col-12'>
                        <div id="designCarousel" className={`carousel slide`} data-ride="carousel">
                            <div className="carousel-inner px-5"> {/* Test to lock the height */}
                                {images.map((img, iImg) => (
                                    <div key={`img${iImg}`} className={`carousel-item ${iImg === 0 ? 'active' : ''}`}>
                                        <img className="d-block w-100" src={img.data} alt={img.data} />
                                    </div>
                                ))}
                            </div>
                            <a className={`${s.carouseControl} ${s.carouselPrev} carousel-control-prev`} href="#designCarousel" role="button" data-slide="prev">
                                <span className={`${s.carouselArrows} carousel-control-prev-icon`} aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className={`${s.carouseControl} ${s.carouselNext} carousel-control-next`} href="#designCarousel" role="button" data-slide="next">
                                <span className={`${s.carouselArrows} ${s.carouselRight} carousel-control-next-icon`} aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}

export default DesignContent