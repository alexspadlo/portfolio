import React, { FC } from 'react'
import GenButton from '@generic/GenButton'
import shopPaint from '@images/forShop.png'
import s from './StoreSection.scss'

const StoreSection: FC = () => {
    return (
        <div className='container-fluid my-5 py-4'>
            <div className='row py-5'>
                <div className='col-12 col-lg-7 m-auto'>
                    <section className={s.boxStyle}>
                        <div className='row m-0'>
                            <div className='col-12 col-lg-6 p-0'>
                                <img className="img-fluid w-100" src={shopPaint} alt={shopPaint} />
                            </div>
                            <div className='col-12 col-lg-6 p-0'>
                                <section className='w-100 text-center py-5 py-lg-4 px-4 h-100 position-relative'>
                                    <section className={`${s.centerAlign} position-relative position-lg-absolute`}>
                                        <p className={`${s.fontBold} h4`}>Support my Art</p>
                                        <p className={`${s.fontThin}`}>Like my Artworks? Feel free to check my store, where you can find tons of products with my art printed on. By purchase them, you supposrting my art (before AI will take over) and give me motivation for more art-making :)</p>
                                        <GenButton content="View shop" onClick={() => window.open('https://www.redbubble.com/people/kapirotex/shop?asc=u')} />
                                    </section>
                                </section>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    )
}

export default StoreSection