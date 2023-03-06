import React, { FC, ReactNode, useState } from 'react'
import GCFontAwe from '@generic/GCFontAwe'
// import GCWrapTag from '@molecules/GCWrapTag'
import s from './GenCollapse.scss'

export interface GenCollapseProps {
    text: string,
    children: ReactNode,
    noSpace?: boolean,
    content?: ReactNode,
    forceClose?: boolean,
    fullClick?: boolean
}

export const GenCollapse: FC<GenCollapseProps> = ({ text, children, noSpace, content, forceClose, fullClick }) => {
    if ((!text && !content) || !children) return null
    const [togColap, settogColap] = useState(false)
    const fullShow = !forceClose && togColap
    return (
        <section
            aria-hidden="true"
            className={`w-100 ${fullClick ? s.gcPointer : ''}`}
            onClick={() => {
                if (!fullClick || !!(forceClose)) return null
                return settogColap(!togColap)
            }}
        >
            <div className='row'>
                <div className='col-10'>
                    {!content && text && <p className={`${s.gcLight} mb-0 mt-1`}>{text}</p>}
                    {content}
                </div>
                <div className='col-2 text-right'>
                    <span
                        aria-hidden="true"
                        onClick={(e) => {
                            if (forceClose) return null
                            e.preventDefault()
                            return settogColap(!togColap)
                        }}
                        className={`${s.txtGold} d-inline-block align-middle mb-0`}>
                        <GCFontAwe nameIco={`fa-${fullShow ? 'minus' : 'plus'}`} />
                    </span>
                </div>
                {fullShow &&
                    <div className='col-12'>
                        {noSpace && children}
                        {/* {!noSpace && <GCWrapTag type='col12' >{children}</GCWrapTag>} */}
                    </div>
                }
            </div>
        </section>
    )
}

export default GenCollapse
