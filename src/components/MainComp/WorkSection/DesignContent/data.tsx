// motion
import video from '@images/drop.mp4'
//newsletters
import newsletter01 from '@images/newsletter01.png'
import newsletter02 from '@images/newsletter02.png'
import newsletter03 from '@images/newsletter03.png'
// banners
import banner00 from '@images/commercial.png'
import banner01 from '@images/banner1.jpg'
import banner02 from '@images/banner2.jpg'
import banner03 from '@images/banner3.jpg'
import banner04 from '@images/banner4.jpg'
import banner05 from '@images/banner11.png'
import banner06 from '@images/banner33.png'
import banner07 from '@images/banner22.png'
// posters
import poster01 from '@images/poster3.jpg'
import poster02 from '@images/poster2.jpg'
import poster03 from '@images/poster4.jpg'
import poster04 from '@images/poster1.png'
import poster05 from '@images/poster5.png'
// logos
import logo01 from '@images/logo1.png'
import logo02 from '@images/logo2.png'
import logo03 from '@images/logo3.png'
import logo04 from '@images/logo4.png'
// artworks
import artwork01 from '@images/artwork1.jpg'
import artwork02 from '@images/artwork2.jpg'
import artwork03 from '@images/artwork3.jpg'
import artwork04 from '@images/artwork4.jpg'
import artwork05 from '@images/artwork5.png'
import artwork06 from '@images/artwork6.png'
import artwork07 from '@images/artwork7.jpg'
import artwork08 from '@images/artwork8.jpg'
import artwork09 from '@images/artwork155.png'
import artwork010 from '@images/artwork9.png'
import artwork011 from '@images/artwork10.png'
import artwork012 from '@images/artwork11.png'
import artwork013 from '@images/artwork12.png'
import artwork014 from '@images/artwork13.png'
import artwork015 from '@images/artwork14.png'
import artwork016 from '@images/artwork15.png'

interface ImageProps {
    data: string,
    isVideo?: boolean
}

interface ButtonProps {
    ref: string,
    text: string,
    images: Array<ImageProps>
}

interface DesProps {
    title: string,
    buttons: Array<ButtonProps>
}

const designSchema: DesProps = {
    title: 'Commercial Design',
    buttons: [
        { 
            ref: 'banners',
            text: 'Banners',
            images: [
                {
                    data: banner00
                },
                {
                    data: banner01
                },
                {
                    data: banner02
                },
                {
                    data: banner03
                },
                {
                    data: banner04
                },
                {
                    data: banner05
                },
                {
                    data: banner06
                },
                {
                    data: banner07
                }
            ]
        },
        { 
            ref: 'posters',
            text: 'Posters',
            images: [
                {
                    data: poster01
                },
                {
                    data: poster02
                },
                {
                    data: poster03
                },
                {
                    data: poster04
                },
                {
                    data: poster05
                }
            ]
        },
        { 
            ref: 'newsletters',
            text: 'Newsletters',
            images: [
                {
                    data: newsletter01
                },
                {
                    data: newsletter02
                },
                {
                    data: newsletter03
                }
            ]
        },
        { 
            ref: 'motion',
            text: 'Motion',
            images: [
                { 
                    data: video,
                    isVideo: true
                }
            ]
        },
        { 
            ref: 'logos',
            text: 'Logos',
            images: [
                {
                    data: logo01
                },
                {
                    data: logo02
                },
                {
                    data: logo03
                },
                {
                    data: logo04
                }
            ]
        },
        { 
            ref: 'artworks',
            text: 'Artworks',
            images: [
                {
                    data: artwork01
                },
                {
                    data: artwork02
                },
                {
                    data: artwork03
                },
                {
                    data: artwork04
                },
                {
                    data: artwork05
                },
                {
                    data: artwork06
                },
                {
                    data: artwork07
                },
                {
                    data: artwork08
                },
                {
                    data: artwork09
                },
                {
                    data: artwork010
                },
                {
                    data: artwork011
                },
                {
                    data: artwork012
                },
                {
                    data: artwork013
                },
                {
                    data: artwork014
                },
                {
                    data: artwork015
                },
                {
                    data: artwork016
                }
            ]
        }
    ]
}

export default designSchema