import React, { FC } from 'react'
import shopPaint from '../../static/images/forShop.png'
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
                                        <p className={`${s.fontThin}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        <span className="btn mt-3 btn-info">View shop</span>
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