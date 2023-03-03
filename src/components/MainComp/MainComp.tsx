import React, { FC } from 'react'
import WorkSection from '@components/WorkSection'
import StoreSection from '@components/StoreSection'
import HeroBanner from '@components/HeroBanner'
import { PopupProps } from '../Generic/PopUp'
import s from './MainComp.scss'

export interface MainCompProps {
    handlePopup: (p: PopupProps) => void
}

export const MainComp: FC<MainCompProps> = ({ handlePopup }) => {
    return (
        <section className={`${s.txtcolWhite} h-100`}>
            <HeroBanner />
            <WorkSection handlePopup={handlePopup} />
            <StoreSection />
        </section>

    )
}

export default MainComp