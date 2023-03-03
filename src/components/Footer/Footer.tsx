import React from 'react'
import s from './Footer.scss'

const Footer: React.FC = () => {
    return (
        <div className='container-fluid'>
            <div className="row pb-2">
                <div className="col-11 p-0 m-auto text-center">
                    <hr className={s.goldHR} />
                    <p className={`${s.fontBold} ${s.txtcolWhite}`}>Copyright © {new Date().getFullYear()} Aleksandra Spadlo</p>
                </div>
            </div>
        </div>

    )
}

export default Footer