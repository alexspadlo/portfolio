import React, { FC, MouseEventHandler, ReactNode, useState } from 'react'
import s from './GenButton.scss'

interface BtnProps {
    onClick: MouseEventHandler<HTMLSpanElement>,
    content: string | ReactNode,
    disabled?: boolean,
    customClass?: string,
}

export const GenButton: FC<BtnProps> = ({ content, customClass, onClick, disabled }) => {
    if (!content || !onClick) return null
    const [selectTxt, setSelect] = useState(false)
    return (
        <section className="w-100">
            <span
                aria-hidden="true"
                role="button"
                onClick={(e) => {
                    if (disabled) return null
                    return onClick(e)
                }}
                className={`d-block d-md-inline-block ${selectTxt ? s.selected : ''} ${customClass || ''} ${s.textLink}`}>
                {content}
            </span>
        </section>
    )
}
export default GenButton
