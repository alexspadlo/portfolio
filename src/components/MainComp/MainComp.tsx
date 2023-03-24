import React, { FC, useEffect, useRef, useState } from 'react'
import WorkSection from './WorkSection'
import DesignContent from './WorkSection/DesignContent'
import StoreSection from './StoreSection'
import ArtCarousel from './ArtCarousel'
import HeroBanner from './HeroBanner'
import { PopupProps } from '../Generic/PopUp'
import s from './MainComp.scss'

export interface MainCompProps {
    handlePopup: (p: PopupProps) => void
}

export const MainComp: FC<MainCompProps> = ({ handlePopup }) => {
    const [refState, setRefState] = useState<boolean>(false)
    const refScroll = useRef<boolean>(false)

    const handleRefState = (param: boolean) => {
        refScroll.current = param
        return setRefState(param)
    }

    const handleScroll = () => {
        if (!refScroll.current && window.scrollY > 1300) return handleRefState(true)
        return null
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleDesign = (startWith?: string) => {
        return handlePopup({
            modalContent: <DesignContent startWith={startWith} />,
            customSize: '100%',
            noBackDrop: true
        })
    }
    return (
        <section className={`${s.txtcolWhite} h-100`}>
            <HeroBanner />
            <WorkSection handlePopup={handlePopup} handleDesign={handleDesign} />
            <ArtCarousel handleDesign={handleDesign} />
            <StoreSection refState={refState} />
        </section>

    )
}

export default MainComp