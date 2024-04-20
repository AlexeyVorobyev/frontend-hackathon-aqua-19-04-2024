import {
  TBottomNavigationConfig,
} from '../shared-react-components/alex-mobile-bottom-navigation/alex-mobile-bottom-navigation.component.tsx'
import {SvgIcon, SvgIconTypeMap} from '@mui/material'
import {OverridableComponent} from '@mui/material/OverridableComponent'
import {FavouriteSvgMenu, MainSvgMenu, RouteSvgMenu, ServiceSvgMenu} from '../components/svg'

export const alexBottomMobileNavigationConfigData: TBottomNavigationConfig[] = [
  {
    name: 'Главная',
    path: '/',
    icon: MainSvgMenu as unknown as OverridableComponent<SvgIconTypeMap<{}, 'svg'>>,
  },
  {
    name: 'Сервисы',
    path: '/service',
    icon: ServiceSvgMenu as unknown as OverridableComponent<SvgIconTypeMap<{}, 'svg'>>,
  },
  {
    name: 'Маршрут',
    path: '/map',
    icon: RouteSvgMenu as unknown as OverridableComponent<SvgIconTypeMap<{}, 'svg'>>,
  },
  {
    name: 'Избранное',
    path: '/lk',
    icon: FavouriteSvgMenu as unknown as OverridableComponent<SvgIconTypeMap<{}, 'svg'>>,
  },
]