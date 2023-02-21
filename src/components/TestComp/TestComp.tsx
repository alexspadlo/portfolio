import React from 'react'
// import testVid from './drop_1.mp4'
import s from './TestComp.scss'
import '@google/model-viewer'
import batata from '../../static/images/avatar.glb'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': MyElementAttributes;
        }
        interface MyElementAttributes {
            src: string;
        }
    }
}

const TestComp: React.FC = () => {
    return (
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <p className={`${s.batata} h3 py-4 text-center ${s.some}`}>Webpack Typescript Test</p>
                        <model-viewer auto-rotate camera-controls src={batata}></model-viewer>
                        {/* <video className='img-fluid w-100' controls>
                            <source src={testVid} />
                        </video> */}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default TestComp