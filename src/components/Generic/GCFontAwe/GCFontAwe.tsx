import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as solid from '@fortawesome/free-solid-svg-icons'
import * as regular from '@fortawesome/free-regular-svg-icons'
import * as brands from '@fortawesome/free-brands-svg-icons'
import { UpperFirst } from '@utils/'

export interface FontProps {
    isReg?: boolean,
    isBrand?: boolean,
    customClass?: string,
    nameIco: string
}

export const GCFontAwe: FC<FontProps> = ({ isReg, isBrand, customClass, nameIco }) => {
    if (!nameIco) return null
    const finalName = nameIco.split('-').map((cv, ind) => ind === 0 ? cv : UpperFirst(cv)).join('')
    const solidOrReg = isReg ? regular[finalName] : solid[finalName]
    const finalIcon = isBrand ? brands[finalName] : solidOrReg
    if (!finalIcon) return null
    return <FontAwesomeIcon icon={finalIcon} className={customClass || ''} />
}

export default GCFontAwe