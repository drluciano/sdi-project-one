export let map = L.map("map").setView([50, 20], 1);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);


let mapMarkerGroup = L.layerGroup().addTo(map);

let originIcon = L.icon({
    iconUrl: "./images/plane-takeoff.svg",
    iconSize: [24, 24],
    iconAnchor: [10, 10]
})

let destIcon = L.icon({
    iconUrl: "./images/plane-landing.svg",
    iconSize: [24, 24],
    iconAnchor: [10, 10]
})

export const updateMapMarkers = (origin, destination, flightData) => {
    mapMarkerGroup.clearLayers();
    const pLine = L.polyline([origin, destination]).addTo(mapMarkerGroup);
    const originMarker = L.marker(origin, {icon: originIcon}).addTo(mapMarkerGroup);
    originMarker.bindPopup(`<h2>Origin Information:</h2>
    ${flightData.response.flightroute.origin.municipality}, ${flightData.response.flightroute.origin.country_name}<br>
    ${flightData.response.flightroute.origin.name}
    `)
    const destMarker = L.marker(destination, {icon: destIcon}).addTo(mapMarkerGroup);
    destMarker.bindPopup(`<h2>Destination Information:</h2>
    ${flightData.response.flightroute.destination.municipality}, ${flightData.response.flightroute.destination.country_name}<br>
    ${flightData.response.flightroute.destination.name}
    `)
    map.flyToBounds(pLine);
}