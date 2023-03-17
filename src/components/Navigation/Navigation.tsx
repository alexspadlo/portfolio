import React, { FC, useState, useEffect } from 'react'
import GCFontAwe from '@generic/GCFontAwe'
import navSchema from './data'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { sleep } from '@utils/'
import s from './Navigation.scss'

const Navigation: FC = () => {
    const [copied, setCopied] = useState(false)
    if (!navSchema) return null
    const { socials, title } = navSchema

    const handleCopied = async () => {
        await sleep(1000)
        return setTimeout(() => {
            return setCopied(false)
        }, 1000);
    }

    useEffect(() => {
        if (copied) handleCopied()
    }, [copied])

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 col-lg-7 text-center text-lg-left'>
                    <p className={`p-3 h5 ${s.fontThin} ${s.txtcolWhite}`}>{title}</p>
                </div>
                <div className='col-12 col-lg-3'>
                    <section className='w-100 p-3 text-center text-lg-right'>
                        {socials && socials.length > 0 &&
                            socials.map((soc) => (
                                <span
                                    key={soc.icon}
                                    aria-hidden="true"
                                    onClick={() => window.open(soc.url)}
                                >
                                    <GCFontAwe isBrand nameIco={soc.icon} customClass={`${soc.hasMar ? 'ml-5' : ''} h5 ${s.socialStyle} ${s.pointer}`} />
                                </span>
                            ))}
                    </section>
                </div>
                <div className='col-12 col-lg-2 text-center text-lg-right p-3'>
                    <CopyToClipboard text={'alexspadlo@gmail.com'} onCopy={() => setCopied(true)}>
                        {!copied ? <span className={`h5 ${s.socialStyle} ${s.pointer}`}><GCFontAwe nameIco={'fa-at'} /> copy email</span> : <span className={`h5 ${s.socialStyle} ${s.pointer}`}><GCFontAwe nameIco={'fa-smile-beam'} /> copied</span>}
                    </CopyToClipboard>
                </div>
            </div>
        </div>

    )
}

export default Navigation