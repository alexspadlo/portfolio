import newsletter01 from '@images/newsletter01.png'
import newsletter02 from '@images/newsletter02.png'
import newsletter03 from '@images/newsletter03.png'

const designSchema = {
    title: 'Commercial Design',
    buttons: [
        { 
            ref: 'artworks',
            text: 'Artworks',
            images: [
                
            ]
        },
        { 
            ref: 'banners',
            text: 'Banners',
            images: [
                
            ]
        },
        { 
            ref: 'posters',
            text: 'Posters',
            images: [
                
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
                
            ]
        },
        { 
            ref: 'logos',
            text: 'Logos',
            images: [
                
            ]
        }
    ]
}

export default designSchema