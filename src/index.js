import {getFlightByCallsign, getRandomFlight} from './api/api.js';
import {fetchPhotos} from './api/api.js';
import {renderFlightInformation, toggleLoader} from './features/renderFlightInformation.js';
import {updateMapMarkers} from './features/map.js';
import {checkIfFavorite, favoriteCallsign} from './features/favoriteCallsign.js';

const favoriteButton = document.getElementById("favBtn");

favoriteButton.addEventListener("click", favoriteCallsign);

const handleFlightData = async (flightData) => {
    toggleLoader(true);

    console.log(flightData);

    const origin = [flightData.response.flightroute.origin.latitude, flightData.response.flightroute.origin.longitude];
    const destination = [flightData.response.flightroute.destination.latitude, flightData.response.flightroute.destination.longitude]
    const route = [origin,destination];

    updateMapMarkers(origin, destination);
    renderFlightInformation(flightData);
    checkIfFavorite()

    await Promise.all([
        fetchPhotos(origin.municipality, "origin"),
        fetchPhotos(destination.municipality, "destination")
    ]).then(() => {
        toggleLoader(false);
    })
}

handleFlightData(await getRandomFlight());

document.getElementById("randomizeButton").addEventListener("click", async () => {
    toggleLoader(true)
    const flightData = await getRandomFlight();
    await handleFlightData(flightData);
})

document.getElementById("searchButton").addEventListener("click", async () => {
    let searchBarContents = document.getElementById("search").value;
    toggleLoader(true)
    const flightData = await getFlightByCallsign(searchBarContents);
    await handleFlightData(flightData)
});

document.getElementById('favoritesSelect').addEventListener("change", async (event) => {
    let selectedFavorite = event.target.value
    toggleLoader(true)
try{
    const flightData = await getFlightByCallsign(selectedFavorite);
    console.log(`value changed to: ${selectedFavorite}`)
    await handleFlightData(flightData);
} finally {
    toggleLoader(false)
}

})

