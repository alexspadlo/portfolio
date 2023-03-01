import React, { FC } from 'react'
import WorkSection from '@components/WorkSection'
import StoreSection from '@components/StoreSection'
import HeroBanner from '@components/HeroBanner'
import s from './MainComp.scss'

interface MainCompProps {
    handlePopup: () => void
}

const MainComp: FC<MainCompProps> = ({ handlePopup }) => {
    return (
        <section className={`${s.txtcolWhite} h-100`}>
            <HeroBanner />
            <WorkSection handlePopup={handlePopup} />
            <StoreSection />
        </section>

    )
}

export default MainComp