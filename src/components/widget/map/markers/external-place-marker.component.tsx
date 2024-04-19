import {FC, useEffect, useState} from 'react'
import {AlexIcon} from '../../../../shared-react-components/alex-icon/alex-icon.component.tsx'
import {MarkerEnchanced} from './marker-enchanced.component.tsx'
import {Button, useTheme} from '@mui/material'
import {Marker} from 'react-leaflet'
import {useReactiveVar} from '@apollo/client'
import {pickedPlaceId} from '../../../../core/apollo/vars.ts'
import {ActivePlaceIcon, InActivePlaceIcon} from '../../../svg'

export enum EMarkerType {
    external = 'external'
}

export interface IPlaceMarkerProps {
    id: string
    name: string
    coordinates: {
        lat: number
        lon: number
    }
    markerType: EMarkerType
    handleOnClick?: (id: string) => void
}

export const PlaceMarker: FC<IPlaceMarkerProps> = ({
                                                       id,
                                                       name,
                                                       coordinates,
                                                       markerType,
                                                       handleOnClick,
                                                   }) => {
    const pickedPlaceIdVar = useReactiveVar(pickedPlaceId)
    const theme = useTheme()
    const [active, setActive] = useState<boolean>(false)

    useEffect(() => {
        setActive(pickedPlaceIdVar === id)
    }, [pickedPlaceIdVar])

    return (
        <MarkerEnchanced
            eventHandlers={{
                click: () => {
                    pickedPlaceId(id)
                    handleOnClick?.(id)
                },
            }}
            key={id}
            icon={(<>
                {active ? (
                    <AlexIcon icon={ActivePlaceIcon} width={'40px'}/>
                ) : (
                    <AlexIcon icon={InActivePlaceIcon} width={'40px'}/>
                )}
            </>)}
            position={[
                coordinates.lat,
                coordinates.lon,
            ]}/>
    )
}