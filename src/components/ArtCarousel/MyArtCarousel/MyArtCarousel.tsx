import React, { FC, useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'
import s from './MyArtCarousel.scss'

interface ObjImg {
    data: string
    index: number
}

interface CarProps {
    images: Array<ObjImg>
}

export const MyArtCarousel: FC<CarProps> = ({ images }) => {
    if (!images || !images.length || images.length < 5) return null
    const rawSize = Array(images.length).fill(null).map((_, ind) => ind)
    const [arrAct, setActiveArr] = useState(rawSize.slice(0, 5))

    const findEdges = (currPos: number) => {
        if ((currPos > rawSize.length - 1) || (currPos < 0) || arrAct[2] === currPos) return null
        const endArr = rawSize.slice(currPos, currPos + 3)
        const beginArr = rawSize.slice(currPos - 2, currPos)
        if (endArr.length < 3) return setActiveArr([...beginArr, ...endArr, ...rawSize.slice(0, 3 - endArr.length)])
        if (beginArr.length < 2) return setActiveArr([...rawSize.slice(-2 + beginArr.length), ...beginArr, ...endArr])
        return setActiveArr([...beginArr, ...endArr])
    }

    return (
        <section className='w-100 position-relative'>
            <span className={s.topBorder}>&nbsp;</span>
            <div className='row'>
                {arrAct.map(cv => images[cv]).map((cv) => (
                    <div key={`${cv.data}${cv.index}carousel`} className='col-sm text-center' >
                        <section
                            className={`bg-white h-100 ${s.pointer}`}
                            onClick={() => findEdges(cv.index)} >
                            <img className={`${s.imgClass} p-2`} src={cv.data} alt={cv.data} />
                        </section>
                    </div>
                ))}
            </div>
            <span className={s.bottomBorder}>&nbsp;</span>
        </section>
    )

}

export default MyArtCarousel
