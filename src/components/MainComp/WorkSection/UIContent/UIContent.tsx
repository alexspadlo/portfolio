import React, { FC } from 'react'
import GenCollapse from '@generic/GenCollapse'
import uiSchema from './data'
import s from './UIContent.scss'

const UIContent: FC = () => {
    return (
        <div className='container-fluid'>
            <div className={`row`}>
                <div className='col-12'>
                    <p className={`h2 mb-3 ${s.fontBold} ${s.txtcolBlack}`}>Web/App UI Design & Specification</p>
                    <hr className={`${s.goldHR} w-100`} />
                </div>
                {uiSchema && uiSchema.length > 0 &&
                    uiSchema.map((uSch) => (
                        <div key={uSch.ref} className='col-12'>
                            <GenCollapse text={uSch.title} style={uSch.style} customClass={`${s.colapStyle}`} rowClass={s.rowBack} >
                                <div className='row p-4'>
                                    <div className='col-12'>
                                        <section>
                                            {uSch.images && uSch.images.length > 0 &&
                                                uSch.images.map((imSch) => (
                                                    <span key={imSch.img}><img className={`img-fluid w-100 ${imSch.class || ''}`} src={imSch.img} alt={imSch.img} /></span>
                                                ))}
                                        </section>
                                    </div>
                                </div>
                            </GenCollapse>
                        </div>
                    ))}
            </div>
        </div>

    )
}

export default UIContent