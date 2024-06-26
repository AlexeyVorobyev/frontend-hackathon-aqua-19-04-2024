import React, {FC, useCallback, useEffect, useMemo, useState} from 'react'
import {MapContainer, Pane} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {MapBounds} from './map-bounds.tsx'
import {MapEventsListener} from './map-events-listener.tsx'
import {MapGray} from './map-gray.tsx'
import {MapTilesPane} from './map-tiles-pane.tsx'
import Leaflet from 'leaflet'
import {
    TSetStoredOptions,
    TStoredOptions,
} from '../../../shared-react-components/functions/useAlexPageState/useAlexPageState.tsx'
import {GLOBAL_CONFIG} from '../../../globalConfig.ts'
import {MapZoomControl} from './map-zoom-control.component.tsx'
import {UserMarker} from './markers/user-marker.component.tsx'
import {GeoapifyGetPlaceListQuery} from '../../../core/apollo/types/graphql/graphql.ts'
import {EMarkerType, IPlaceMarkerProps, PlaceMarker} from './markers/external-place-marker.component.tsx'
import MarkerClusterGroup from 'react-leaflet-cluster'
import {Box} from '@mui/system'
import {AlexInput} from '../../../shared-react-components/form-utils/AlexInput/AlexInput.tsx'
import {AlexFiltersDialog} from '../../../shared-react-components/AlexFilters/AlexFiltersDialog.tsx'
import {useDebounce} from '../../hook/useDebounce.tsx'
import {alexFiltersConfigData} from '../../../config/alex-filters-config.data.tsx'
import {RoutingEngine} from './routing/routing-engine.component.tsx'
import {PlaceCardDrawer} from '../place-card/place-card-drawer.component.tsx'
import {useReactiveVar} from '@apollo/client'
import {pickedPlaceId} from '../../../core/apollo/vars.ts'
import {RoutingEngineDisplay} from './routing/routing-map-display.component.tsx'
import L, {PointTuple} from 'leaflet'
import {theme} from '../../../core/theme/theme.ts'

const DEFAULT_ICON_ANCHOR: L.Point = new L.Point(-10, -10)
const _ICON_SIZE = 24
const _LARGE_ICON_SIZE = 64
const DEFAULT_ICON_SIZE: PointTuple = [_ICON_SIZE, _ICON_SIZE]

type TPlacesList = GeoapifyGetPlaceListQuery['place']['list']['data']

interface IProps {
    storedOptions: TStoredOptions,
    setStoredOptions: TSetStoredOptions,
    externalPlacesList: TPlacesList | null
}

export const GRAYSCALE_NAME: string = 'Затенение'
export const CLUSTERS_NAME: string = 'Кластеризация'

export const MapRender: FC<IProps> = ({
                                          storedOptions,
                                          setStoredOptions,
                                          externalPlacesList,
                                      }) => {

    const [dataExternalPlacesProcessed, setDataExternalPlacesProcessed] = useState<IPlaceMarkerProps[]>([])

    const dataExternalPlacesFormat = useCallback((dataMaps: TPlacesList) => {
        return dataMaps.map((item) => {
            return {
                id: item.id,
                name: item.name,
                coordinates: {
                    lat: item.location.coordinates.lat,
                    lon: item.location.coordinates.lon,
                },
                markerType: EMarkerType.external,
            } as IPlaceMarkerProps
        })
    }, [externalPlacesList])


    const pickedPlaceIdVar = useReactiveVar(pickedPlaceId)

    useEffect(() => {
        if (Array.isArray(externalPlacesList)) {
            setDataExternalPlacesProcessed(dataExternalPlacesFormat(externalPlacesList))
        }
    }, [externalPlacesList])

    const renderExternalPlaceMarkers = useMemo(() => {
        return (<>
            {dataExternalPlacesProcessed.map((elem) => (
                <PlaceMarker {...elem} key={elem.id}/>
            ))}
        </>)
    }, [dataExternalPlacesProcessed])

    const [simpleFilterValue, setSimpleFilterValue] = useState<string>(storedOptions.get('simpleFilter') || '')


    useEffect(() => {
        debouncedSetStoredOptions((prev: TStoredOptions) => {
            if (simpleFilterValue) {
                prev.set('simpleFilter', simpleFilterValue)
            } else {
                prev.delete('simpleFilter')
            }
            return new Map(prev)
        })
    }, [simpleFilterValue])

    const debouncedSetStoredOptions = useDebounce(setStoredOptions, 500)

    const createCompaniesClusterCustomIcon = (cluster: any) => {
        return Leaflet.divIcon({
                html: `<span style = 'font-weight: bold; color: ${theme.palette.neutral.main};'>${cluster.getChildCount()} </span>`,
                iconAnchor: DEFAULT_ICON_ANCHOR,
                iconSize: DEFAULT_ICON_SIZE,
                className: 'markerIcon markerBlue10',
            }
        )
    }

    return (<>
        <Box sx={{
            position: 'absolute',
            zIndex: 403,
            left: '25px',
            top: '25px',
        }}>
            <AlexInput value={simpleFilterValue}
                       onChange={(event) => setSimpleFilterValue(event.target.value)}
                       placeholder={'Поиск'}
                       InputProps={{
                           endAdornment: (
                               <AlexFiltersDialog storedOptions={storedOptions}
                                                  setServerSideOptions={setStoredOptions}
                                                  filterListIds={[
                                                      'placeType',
                                                      'placeCondition'
                                                  ]}
                                                  filtersMap={alexFiltersConfigData}/>
                           ),
                       }}/>
        </Box>
        {pickedPlaceIdVar && (
            <PlaceCardDrawer id={pickedPlaceIdVar} storedOptions={storedOptions}
                             setStoredOptions={setStoredOptions}/>
        )}
        <MapContainer
            preferCanvas={true}
            maxZoom={GLOBAL_CONFIG.mapMaxZoom}
            minZoom={GLOBAL_CONFIG.mapMinZoom}
            zoom={storedOptions.get('zoom')}
            center={storedOptions.get('coords')}
            zoomControl={false}
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            <Box sx={{
                position: 'absolute',
                zIndex: 403,
                right: '25px',
                bottom: '105px',
            }}>
                <RoutingEngine
                    storedOptions={storedOptions}
                    setStoredOptions={setStoredOptions} localData={externalPlacesList}/>
            </Box>

            <Pane name={'externalPlacesMarkers'} style={{zIndex: 410}}>
                {storedOptions.get('clusters')
                    ? (<>
                        <MarkerClusterGroup
                        >
                            {renderExternalPlaceMarkers}
                        </MarkerClusterGroup>
                    </>)
                    : <>{renderExternalPlaceMarkers}</>
                }
            </Pane>

            <Pane name={'route'} style={{zIndex:409}}>
                <RoutingEngineDisplay storedOptions={storedOptions}
                                      setStoredOptions={setStoredOptions}/>
            </Pane>

            <MapBounds
                storedOptions={storedOptions}
                setStoredOptions={setStoredOptions}/>

            <MapEventsListener
                storedOptions={storedOptions}
                setStoredOptions={setStoredOptions}/>

            <MapGray storedOptions={storedOptions}/>

            <MapZoomControl/>

            <UserMarker/>

            <MapTilesPane storedOptions={storedOptions}/>
        </MapContainer>
    </>)
}