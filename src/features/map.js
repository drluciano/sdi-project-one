export let map = L.map("map").setView([50, 20], 1);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);


let mapMarkerGroup = L.layerGroup().addTo(map);

export const updateMapMarkers = (origin, destination) => {
    mapMarkerGroup.clearLayers();
    const pLine = L.polyline([origin, destination]).addTo(mapMarkerGroup);
    L.marker(origin).addTo(mapMarkerGroup);
    L.marker(destination).addTo(mapMarkerGroup);
    map.flyToBounds(pLine);
}