import React, { FC } from 'react'
import GenDropDown from '@generic/GenDropDown'
import GCFontAwe from '@generic/GCFontAwe'
import navSchema from './data'
import s from './Navigation.scss'

const Navigation: FC = () => {
    if (!navSchema) return null
    const { socials, title, contSchema } = navSchema
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 col-lg-7 text-center text-lg-left'>
                    <p className={`p-3 h5 ${s.fontThin}`}>{title}</p>
                </div>
                <div className='col-12 col-lg-3'>
                    <section className='w-100 p-3 text-center text-lg-right'>
                        {socials && socials.length > 0 &&
                            socials.map((soc) => (
                                <span
                                    aria-hidden="true"
                                    onClick={() => window.open(soc.url)}
                                >
                                    <GCFontAwe isBrand nameIco={soc.icon} customClass={`${soc.hasMar ? 'ml-5' : ''} h5 ${s.socialStyle} ${s.pointer}`} />
                                </span>
                            ))}
                    </section>
                </div>
                <div className='col-12 col-lg-2 text-center text-lg-right p-3'>
                    <GenDropDown
                        dropId={'contactMeId'}
                        dropData={contSchema.dropdown}
                        txtClass={`h5 ${s.fontLight}`}
                        onClick={() => console.log('vvbk')}
                        dropLabel={contSchema.label}
                    />
                </div>
            </div>
        </div>

    )
}

export default Navigation