import { useState, useEffect } from "react";
import axios from "axios";
import GoogleMapReact from 'google-map-react';
import start from '../../assets/img/start.png';
import finish from '../../assets/img/finish.png';

export default function Map() {
    const url = 'https://maps.googleapis.com/maps/api/geocode/json';
    const key = 'AIzaSyAGofo_vg5tDfrO5LsyWm-81zfjyWsiTKI';
    const coorHCM = { lat: 10.762622, lng: 106.660172 };

    const [location, setLocation] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const [location2, setLocation2] = useState(null);
    const [latitude2, setLatitude2] = useState(null);
    const [longitude2, setLongitude2] = useState(null);

    const url2 = 'https://localhost:8001/api/donhang';
    useEffect(() => {
        axios.get(url2)
            .then(res => {
                console.log(res);
                setLocation(res.data[0].dia_chi);
                setLocation2(res.data[1].dia_chi);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    //starting geometry
    useEffect(() => {
        if (location) {
            axios.get(url, {
                params: {
                    address: { location },
                    key: key
                }
            })
                .then(res => {
                    console.log(res);
                    setLatitude(res.data.results[0].geometry.location.lat);
                    setLongitude(res.data.results[0].geometry.location.lng);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [location])

    //destination geometry
    useEffect(() => {
        if (location2) {
            axios.get(url, {
                params: {
                    address: { location2 },
                    key: key
                }
            })
                .then(res => {
                    console.log(res);
                    setLatitude2(res.data.results[0].geometry.location.lat);
                    setLongitude2(res.data.results[0].geometry.location.lng);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [location2])

    const apiIsLoaded = (map, maps) => {
        const google = window.google;
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer({
            suppressMarkers: true
        });
        directionsRenderer.setMap(map);

        const origin = { lat: latitude, lng: longitude };
        const destination = { lat: latitude2, lng: longitude2 };

        var marker = new google.maps.Marker({
            position: origin,
            map: map,
            icon: start
        })

        var marker = new google.maps.Marker({
            position: destination,
            map: map,
            icon: finish
        })

        directionsService.route(
            {
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    directionsRenderer.setDirections(result);
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            }
        );
    };

    if (!(latitude && longitude && latitude2 && longitude2)) {
        return null;
    }

    return (
        <div style={{ height: '400px', width: '60%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: key
                }}
                defaultZoom={10}
                center={coorHCM}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
            />
        </div>
    );
}