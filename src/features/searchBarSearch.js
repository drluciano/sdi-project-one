const search = () => {
    loader.removeAttribute("hidden");
    mapMarkerGroup.clearLayers();

    let searchBarContents = document.getElementById("search").value;

    fetch(`https://api.adsbdb.com/v0/callsign/${searchBarContents}`)
        .then((response) => response.json())
        .then((response) => {
            randomFlight = response;
            flightOriginLatLong = [
                randomFlight.response.flightroute.origin.latitude,
                randomFlight.response.flightroute.origin.longitude,
            ];
            flightDestinationLatLong = [
                randomFlight.response.flightroute.destination.latitude,
                randomFlight.response.flightroute.destination.longitude,
            ];
            flightPolyLine = [flightOriginLatLong, flightDestinationLatLong];
            console.log(randomFlight);
            console.log(flightOriginLatLong);
            console.log(flightDestinationLatLong);

            (L.marker(flightOriginLatLong).addTo(mapMarkerGroup),
                L.marker(flightDestinationLatLong).addTo(mapMarkerGroup),
                (pLine = L.polyline(flightPolyLine).addTo(mapMarkerGroup)),
                map.flyToBounds(pLine));

            renderFlightInformation(randomFlight);
            loader.setAttribute("hidden", "");
        })
        .catch((error) => error);
};


document.getElementById("searchButton").addEventListener("click", search);