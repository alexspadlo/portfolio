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

const images = [
    artwork01,
    artwork02,
    artwork03,
    artwork04,
    artwork05,
    artwork06,
    artwork07,
    artwork08,
    artwork09,
    artwork010,
    artwork011,
    artwork012,
    artwork013,
    artwork014,
    artwork015,
    artwork016,
]

const carData = {
    ref: 'artworks',
    images: images.map((cv, ind) => ({ index: ind, data: cv }))
}

export default carData