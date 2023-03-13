import React, { FC } from 'react'
// import GCFontAwe from '@generic/GCFontAwe'
import mockup from '@images/kakoiMock.jpg'
import spec from '@images/kakoiSpec.png'
import grid from '@images/kakoiGrid.png'
import palet from '@images/kakoiPalet.png'
import uicomp from '@images/kakoiComp.png'
// import s from './UISpec.scss'

const UISpec: FC = () => {
    return (
        <div className='container-fluid'>
            <div className='row py-4'>
                <div className='col-12'>
                    <section>
                        <img className="img-fluid w-100 mb-3" src={mockup} alt={mockup} />
                        <img className="img-fluid w-100" src={spec} alt={spec} />
                        <img className="img-fluid w-100" src={grid} alt={grid} />
                        <img className="img-fluid w-100" src={palet} alt={palet} />
                        <img className="img-fluid w-100" src={uicomp} alt={uicomp} />
                    </section>
                </div>



                {/* <div className='col-12 col-lg-6'>
                    <section className='w-100 text-center'>
                        <p className={`${s.fontLight} h5`}>Color Palette</p>
                        <span className='d-inline-block align-middle'>
                            <GCFontAwe nameIco='fa-circle' customClass={`${s.iconSize} text-info`} /><br />
                            <span className='mt-2'>#ffff</span>
                        </span>
                        <span className='d-inline-block align-middle'>
                            <GCFontAwe nameIco='fa-circle' customClass={`${s.iconSize} text-info`} /><br />
                            <span className='mt-2'>#ffff</span>
                        </span>
                        <span className='d-inline-block align-middle'>
                            <GCFontAwe nameIco='fa-circle' customClass={`${s.iconSize} text-info`} /><br />
                            <span className='mt-2'>#ffff</span>
                        </span>
                        <span className='d-inline-block align-middle'>
                            <GCFontAwe nameIco='fa-circle' customClass={`${s.iconSize} text-info`} /><br />
                            <span className='mt-2'>#ffff</span>
                        </span>
                    </section>
                </div>
                <div className='col-12 col-lg-6'>
                    <section className='w-100 text-center'>
                        <p className={`${s.fontLight} h5 mb-2`}>Typography</p>
                        <span className={`${s.fontBold} h2`}>Aa</span>
                        <span className={`${s.fontLight} h2 ml-3`}>Aa</span>
                    </section>
                </div> */}
            </div>
        </div>
    )
}

export default UISpec