import React, { FC } from 'react'
// import uuid from 'react-uuid'
import s from './GenDropDown.scss'

interface DataD {
    label: string,
    action: () => void
}

interface DropProps {
    dropData: Array<DataD>
    dropId: string
    txtClass?: string
    onClick: (p1: DataD) => void,
    dropLabel?: string,
}

const GenDropDown: FC<DropProps> = ({
    dropData, dropId, txtClass, onClick, dropLabel,
}) => {
    if (!dropData || !dropData.length) return null
    return (
        <span className="dropdown">
            <span id={dropId} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className={`${txtClass || ''}`}>
                {dropLabel}
                <i className="fas h5 ml-1 mb-0 fa-sort-down" />
            </span>
            <div className={`${s.dropDownColor} dropdown-menu`} aria-labelledby={dropId}>
                {dropData.map((moreOpt) => (
                    <span
                        key={'moreOptId'}
                        aria-hidden="true"
                        role="button"
                        onClick={() => onClick(moreOpt)}
                        className={`${s.pointer} ${s.dropLink} dropdown-item`}
                    >
                        {moreOpt.label}
                    </span>
                ))}
            </div>
        </span>
    )
}

export default GenDropDown
