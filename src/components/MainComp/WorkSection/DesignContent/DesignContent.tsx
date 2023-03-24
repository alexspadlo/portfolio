import React, { FC, useState } from 'react'
import GenButton from '@generic/GenButton'
import DesignCarousel from './DesignCarousel'
import designSchema from './data'
import s from './DesignContent.scss'

interface DesProps {
    startWith?: string
}

const DesignContent: FC<DesProps> = ({ startWith }) => {
    if (!designSchema) return null
    const { title, buttons } = designSchema
    if (!buttons || !buttons.length) return null
    const [first] = buttons
    const [choosed, setChoosed] = useState(startWith || first.ref)
    const [mainImages] = buttons.filter(cv => cv.ref === choosed)
    const { images } = mainImages || {}

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 text-right'>
                    <p className={`h2 mb-3 ${s.fontBold} ${s.txtcolBlack}`}>{title}</p>
                    <hr className={`${s.goldHR} w-100`} />
                </div>
                {buttons.map((btN, ix) => (
                    <div key={`imagesArt${ix + 1}`} className='col-12 col-lg-2 col-md-6 text-center'>
                        <GenButton content={btN.text} onClick={() => setChoosed(btN.ref)} selectTxt={choosed === btN.ref} customClass={`mb-3`} />
                    </div>
                ))}
                <DesignCarousel images={images} />
            </div>

        </div>
    )
}

export default DesignContent