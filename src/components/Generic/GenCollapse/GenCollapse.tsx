import React, { FC, ReactNode, useState } from 'react'
import GCFontAwe from '@generic/GCFontAwe'
import s from './GenCollapse.scss'

export interface GenCollapseProps {
    text: string,
    children: ReactNode,
    content?: ReactNode,
    fullClick?: boolean,
    customClass?: string,
    rowClass?: string,
    style?: object
}

export const GenCollapse: FC<GenCollapseProps> = ({ text, children, content, fullClick, customClass, rowClass, style }) => {
    if ((!text && !content) || !children) return null
    const [togColap, settogColap] = useState(false)
    return (
        <section
            aria-hidden="true"
            style={style}
            className={`w-100 ${fullClick ? s.gcPointer : ''} ${customClass || ''}`}
            onClick={() => {
                if (!fullClick) return null
                return settogColap(!togColap)
            }}
        >
            <div className={`row ${rowClass || ''}`}>
                <div className='col-10'>
                    {!content && text && <p className={`${s.gcLight} mb-0 h4 mt-1`}>{text}</p>}
                    {content}
                </div>
                <div className='col-2 text-right'>
                    <span
                        aria-hidden="true"
                        onClick={(e) => {
                            e.preventDefault()
                            return settogColap(!togColap)
                        }}
                        className={`${s.txtGold} ${s.gcBold} d-inline-block align-middle h2 mb-0`}>
                        <GCFontAwe nameIco={`fa-${togColap ? 'minus' : 'plus'}`} customClass={s.pointer} />
                    </span>
                </div>
                {togColap &&
                    <div className='col-12'> {children}</div>
                }
            </div>
        </section>
    )
}

export default GenCollapse
