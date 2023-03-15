// bodywork app
import bodyworkMock from '@images/bodyworkmock.jpg'
import bodyworkspec from '@images/bodyworkWeb.png'
import bodyworkgrid from '@images/bodyGrid.png'
import bodyworkpalet from '@images/bodyPalet.png'
import bodyworkuicomp from '@images/bodyUiComp.png'

// kakoi app
import kakoiMock from '@images/kakoiMock.jpg'
import kakoispec from '@images/kakoiSpec.png'
import kakoigrid from '@images/kakoiGrid.png'
import kakoipalet from '@images/kakoiPalet.png'
import kakoiuicomp from '@images/kakoiComp.png'

// muzz appp
import muzzMock from '@images/muzz_mockup.png'
import muzzSpec from '@images/muzz_features.png'
import muzzGrid from '@images/muzzGrid.png'
import muzzpalet from '@images/muzzPalet.png'

// eventi appp
import eventiMock from '@images/eventi-banner.png'
import eventiSpec from '@images/eventi_main_page.png'
import eventiGrid from '@images/eventGrid.png'
import eventipalet from '@images/eventiPalet.png'

//polsky app
import polskyMock from '@images/polandtrips_main.png'
import polskySpec from '@images/polandtrips_page2.png'
import polskyGrid from '@images/polGrid.png'
import polskypalet from '@images/polPalet.png'

// manage dashboard
import manageDashMock from '@images/dashboardmock.jpg'
import manageDashSpec from '@images/manageDash.png'
import manageDashGrid from '@images/manageGrid.png'
import manageDashpalet from '@images/managePalet.png'

// reprots
import reprotsMock from '@images/web1.png'
import reprotsSpec from '@images/reportGlob.png'
import reprotsSpecTwo from '@images/repGlob2.png'
import reprotsGrid from '@images/reports grid.png'
import reprotspalet from '@images/reportPelet.png'

// colap backs
import manBack from '@images/collapManege.png'
import repBack from '@images/collapReprots.png'
import kakBack from '@images/collapKakoi.png'
import bodBack from '@images/colapBodywork.png'
import evenBack from '@images/collapEvent.png'
import muzzBack from '@images/collapMuzz.png'
import polBack from '@images/collapPolSky.png'

const uiSchema = [
    {
        ref: 'uiSpec06',
        title: 'Globechain - Manage Dashboard (Design and Develop)',
        style: {
            backgroundImage: `url(${manBack})`
        },
        images: [
            {
                img: manageDashMock,
                class: 'mb-3'
            },
            {
                img: manageDashSpec,
                class: ''
            },
            {
                img: manageDashGrid,
                class: ''
            },
            {
                img: manageDashpalet,
                class: ''
            }
        ]
    },
    {
        ref: 'uiSpec07',
        title: 'Globechain - Reports (Design and Develop)',
         style: {
            backgroundImage: `url(${repBack})`
        },
        images: [
            {
                img: reprotsMock,
                class: 'mb-3'
            },
            {
                img: reprotsSpec,
                class: 'mb-3'
            },
            {
                img: reprotsSpecTwo,
                class: ''
            },
            {
                img: reprotsGrid,
                class: ''
            },
            {
                img: reprotspalet,
                class: ''
            }
        ]
    },
    {
        ref: 'uiSpec01',
        title: 'Kakoi - Manga Reading App',
         style: {
            backgroundImage: `url(${kakBack})`
        },
        images: [
            {
                img: kakoiMock,
                class: 'mb-3'
            },
            {
                img: kakoispec,
                class: ''
            },
            {
                img: kakoigrid,
                class: ''
            },
            {
                img: kakoipalet,
                class: ''
            },
            {
                img: kakoiuicomp,
                class: ''
            }
        ]
    },
    {
        ref: 'uiSpec05',
        title: 'BodyWork - Fitness Club Website',
         style: {
            backgroundImage: `url(${bodBack})`
        },
        images: [
            {
                img: bodyworkMock,
                class: 'mb-3'
            },
            {
                img: bodyworkspec,
                class: ''
            },
            {
                img: bodyworkgrid,
                class: ''
            },
            {
                img: bodyworkpalet,
                class: ''
            },
            {
                img: bodyworkuicomp,
                class: ''
            }
        ]
    },
    {
        ref: 'uiSpec03',
        title: 'EVENTI - Fashion Events Searcher',
         style: {
            backgroundImage: `url(${evenBack})`
        },
        images: [
            {
                img: eventiMock,
                class: 'mb-3'
            },
            {
                img: eventiSpec,
                class: ''
            },
            {
                img: eventiGrid,
                class: ''
            },
            {
                img: eventipalet,
                class: ''
            }
        ]
    },
    {
        ref: 'uiSpec02',
        title: 'Muzz App - Music App',
         style: {
            backgroundImage: `url(${muzzBack})`
        },
        images: [
            {
                img: muzzMock,
                class: 'mb-3'
            },
            {
                img: muzzSpec,
                class: ''
            },
            {
                img: muzzGrid,
                class: ''
            },
            {
                img: muzzpalet,
                class: ''
            },
        ]
    },
    {
        ref: 'uiSpec04',
        title: 'polSKY App - Poland Travel App',
         style: {
            backgroundImage: `url(${polBack})`
        },
        images: [
            {
                img: polskyMock,
                class: 'mb-3'
            },
            {
                img: polskySpec,
                class: ''
            },
            {
                img: polskyGrid,
                class: ''
            },
            {
                img: polskypalet,
                class: ''
            }
        ]
    }
]
export default uiSchema