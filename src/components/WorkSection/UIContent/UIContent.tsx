import React, { FC } from 'react'
import s from './UIContent.scss'

const UIContent: FC = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                <p className={`h2 mb-3 ${s.fontBold} ${s.txtcolBlack}`}>Web/App UI Design, Prototypes & Coding Specification</p>
                <hr className={`${s.goldHR} w-100`} />
                </div>
            </div>
        </div>

    )
}

export default UIContent