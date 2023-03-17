import React, { FC } from 'react'
import { PopupProps } from '../Generic/PopUp'
import GenButton from '@generic/GenButton'
import UIContent from './UIContent'
import DesignContent from './DesignContent'
import workSchema from './data'
import s from './WorkSection.scss'

interface WorkProps {
    handlePopup: (p: PopupProps) => void
}

const WorkSection: FC<WorkProps> = ({ handlePopup }) => {
    const { button, workSection, designSection } = workSchema

    const handleUI = () => {
        handlePopup({
            modalContent: <UIContent />,
            customSize: '100%',
            noBackDrop: true
        })
    }

    const handleDesign = () => {
        handlePopup({
            modalContent: <DesignContent />,
            customSize: '100%',
            noBackDrop: true
        })
    }

    return (
        <div className='container-fluid my-5 p-0'>
            <div className='row'>
                <div className='col-12 col-lg-6 p-0'>
                    <section className={`${s.codingStyle}`}>
                        <p className={`h2 mb-3 ${s.fontBold}`}>{workSection.title}</p>
                        <p className={`${s.fontThin} mb-4`}>{workSection.subTitle}</p>
                        <GenButton content={button} onClick={() => handleUI()} />
                    </section>
                </div>
                <div className="col-12 col-lg-6 p-0">
                    <section className={`${s.commonBg} w-100`}></section>
                </div>
            </div>
            <div className='row mt-5'>
                <div className={`col-12 col-lg-6 p-0`}>
                    <section className={`${s.commonBg} ${s.designBack} w-100`}></section>
                </div>
                <div className='col-12 col-lg-6 text-right p-0'>
                    <section className={`${s.codingStyle}`}>
                        <p className={`h2 mb-3 ${s.fontBold}`}>{designSection.title}</p>
                        <p className={`${s.fontThin} mb-4`}>{designSection.subTitle}</p>
                        <GenButton content={button} onClick={() => handleDesign()} />
                    </section>
                </div>
            </div>
        </div>

    )
}

export default WorkSection