import React, { FC } from 'react'
import GenCollapse from '@generic/GenCollapse'
import uiSchema from './data'
import s from './UIContent.scss'

const UIContent: FC = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <p className={`h2 mb-3 ${s.fontBold} ${s.txtcolBlack}`}>Web/App UI Design, Prototypes & Coding Specification</p>
                    <hr className={`${s.goldHR} w-100`} />
                </div>
                {uiSchema && uiSchema.length > 0 &&
                    uiSchema.map((uSch) => (
                        <div key={uSch.ref} className='col-12'>
                            <GenCollapse text={uSch.title} customClass={`${s.colapStyle}`} >
                                {uSch.content}
                            </GenCollapse>
                        </div>
                    ))}
            </div>
        </div>

    )
}

export default UIContent