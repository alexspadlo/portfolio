import React, { FC } from 'react'
import { PopupProps } from '../../Generic/PopUp'
import GenButton from '@generic/GenButton'
import UIContent from './UIContent'
import workSchema from './data'
import s from './WorkSection.scss'

interface WorkProps {
    handlePopup: (p: PopupProps) => void,
    handleDesign: () => void
}

const WorkSection: FC<WorkProps> = ({ handlePopup, handleDesign }) => {
    const { button, workSection, designSection } = workSchema

    const handleUI = () => {
        handlePopup({
            modalContent: <UIContent />,
            customSize: '100%',
            noBackDrop: true
        })
    }

    return (
        <div className='container-fluid my-5 p-0'>
            <div className='row'>
                <div className='col-12 col-lg-6 p-0 order-2 order-lg-1'>
                    <section className={`${s.codingStyle}`}>
                        <p className={`h-lg-2 h3 mb-3 ${s.fontBold}`}>{workSection.title}</p>
                        <p className={`${s.fontThin} mb-4`}>{workSection.subTitle}</p>
                        <GenButton content={button} onClick={() => handleUI()} />
                    </section>
                </div>
                <div className="col-12 col-lg-6 p-0 order-1 order-lg-2">
                    <section className={`${s.commonBg} w-100`}>&nbsp;</section>
                </div>
            </div>
            <div className='row mt-5'>
                <div className={`col-12 col-lg-6 p-0`}>
                    <section className={`${s.commonBg} ${s.designBack} w-100`}>&nbsp;</section>
                </div>
                <div className='col-12 col-lg-6 text-right p-0'>
                    <section className={`${s.codingStyle}`}>
                        <p className={`h-lg-2 h3 mb-3 ${s.fontBold}`}>{designSection.title}</p>
                        <p className={`${s.fontThin} mb-4`}>{designSection.subTitle}</p>
                        <GenButton content={button} onClick={() => handleDesign()} />
                    </section>
                </div>
            </div>
        </div>

    )
}

export default WorkSection