import { NotExistPage } from '../components/page/not-exist/not-exist-page.component.tsx'
import {TRoute} from '../shared-react-components/AlexRouter/AlexRouter.tsx'
import {MapPage} from '../components/page/map/map-page.component.tsx'
import {PlacePage} from '../components/page/place/place.component.tsx'
import {Main} from '../components/page/glav/glav.tsx'
import {Places} from '../components/page/sob/sob.tsx'
import {Infocard} from '../components/page/infokard/infocard.tsx'
import {Profile} from '../components/page/lk/lk.tsx'
import {Purchase} from '../components/page/pocup/pocup.tsx'
import {Purchase1} from '../components/page/korz/korz.tsx'
import {QrScanner} from '../components/page/qr.tsx'
import {Purchase2} from '../components/page/oplataitog/oplataitog.tsx'
import {Services} from '../components/page/servis/servis.tsx'
import {Hotel} from '../components/page/hotel/hotel.tsx'
import {Tour} from '../components/page/tur/tur.tsx'
import {InfocardPlace} from '../components/page/infokardplace/infocard.tsx'
export const routesListConfig: TRoute[] = [
    {
        path: '/',
        name: 'Главная',
        component: <Main/>,
    },
    {
        path: '/infocardplace',
        name: 'Карточка вторая',
        component: <InfocardPlace/>,
    },
    {
        path: '/hotel',
        name: 'Отель',
        component: <Hotel/>,
    },
    {
        path: '/tur',
        name: 'Тур',
        component: <Tour/>,
    },
    {
        path: '/sob',
        name: 'Интересные события',
        component: <Places/>,
    },
    {
        path: '/oplataitog',
        name: 'Оплата итог',
        component: <Purchase2/>,
    },
    {
        path: '/korz',
        name: 'Интересные события',
        component: <Purchase1/>,
    },
    {
        path: '/pocup',
        name: 'Мои покупки',
        component: <Purchase/>,
    },
    {
        path: '/infocard',
        name: 'информация по карточке',
        component: <Infocard/>,
    },
    {
        path: '/qr',
        name: 'Сканер',
        component: <QrScanner/>,
    },
    {
        path: '/service',
        name: 'Сервисы',
        component:<Services/>,
    },

    {
        path: '/map',
        name: 'Маршруты',
        component: <MapPage/>,
    },

    {
        path: '/places/place',
        name: 'Место',
        component: <PlacePage/>,
    },

    {
        path: '/lk',
        name: 'Избранное',
        component: <Profile/>,
    },

    {
        path: '*',
        name: 'Не существует',
        component: <NotExistPage/>,
    },
]

const mapRoutesListPaths = (routesList: TRoute[]): string[] => {
    const resultArr: string[] = []

    routesList.map((item) => {
        resultArr.push(item.path)
        if (item.routes) {
            resultArr.push(...mapRoutesListPaths(item.routes))
        }
    })

    return resultArr
}

const mapRoutesListNames = (routesList: TRoute[]): [string, string][] => {
    const resultArr: [string, string][] = []

    routesList.map((item) => {
        resultArr.push([item.path, item.name])
        if (item.routes) {
            resultArr.push(...mapRoutesListNames(item.routes))
        }
    })

    return resultArr
}
export const autoGeneratedRoutesListMap = new Map(mapRoutesListNames(routesListConfig))
export const autoGeneratedAllowedLinks = mapRoutesListPaths(routesListConfig)