import React, { FC, useState, useEffect } from 'react'
import $ from 'jquery'
import {
    BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom'
import Navigation from '@components/Navigation'
import Footer from '@components/Footer'
import MainComp from '@components/MainComp'
import PopUp, { PopupProps } from '../components/Generic/PopUp'

const App: FC = () => {
    const [popup, setPopup] = useState<PopupProps>({})

    const handlePopup = (popupCont: PopupProps) => {
        if (!popupCont || !popupCont.modalContent) return null
        return setPopup({
            ...popup,
            ...popupCont,
        })
    }

    const closePopup = () => {
        setPopup({})
    }

    useEffect(() => {
        if (popup && popup.modalContent) {
            $('#popUpAlex').modal('show')
        }
    }, [popup])


    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route element={(<MainComp handlePopup={handlePopup} />)} path="/" />
                <Route path="*" element={(<Navigate replace to="/" />)} />
            </Routes>
            <PopUp
                {...popup}
                closePopup={closePopup}
            />
            <Footer />
        </BrowserRouter>
    )
}

export default App