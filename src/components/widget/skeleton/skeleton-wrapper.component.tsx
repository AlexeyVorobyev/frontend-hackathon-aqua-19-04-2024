import {CSSProperties, FC, ReactNode} from 'react'
import {Box, useTheme} from '@mui/material'
import {AlexErrorBoundary} from '../../../shared-react-components/AlexErrorBoundary/AlexErrorBoundary.tsx'
import {
    AlexMobileBottomNavigation,
} from '../../../shared-react-components/alex-mobile-bottom-navigation/alex-mobile-bottom-navigation.component.tsx'
import {alexBottomMobileNavigationConfigData} from '../../../config/alex-bottom-mobile-navigation-config.data.tsx'
import {useLocation} from 'react-router-dom'

interface IProps {
    children: ReactNode
}

export const SkeletonWrapper: FC<IProps> = ({children}) => {

    const theme = useTheme()
    const location = useLocation()
    console.log(location)

    return (
        <Box width={'100%'} sx={{
            ...(location.pathname !== '/map' && {
                height: '91dvh',
                overflowY: 'scroll'
            } as CSSProperties),
            ...(location.pathname === '/map' && {
                height: '100dvh',
            } as CSSProperties),
        }}>
            <AlexErrorBoundary>
                {children}
            </AlexErrorBoundary>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                position: 'absolute',
                zIndex: 500,
                bottom: 0,
                padding: '25px',
                boxSizing: 'border-box',
            }}>
                <AlexMobileBottomNavigation
                    styles={{
                        stroke: true,
                        fill: false,
                    }}
                    config={alexBottomMobileNavigationConfigData}
                    disabledOnRoutes={[
                        '/places/place',
                    ]}
                />
            </Box>
        </Box>
    )
}

