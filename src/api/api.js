const BASE_URL = "https://api.adsbdb.com/v0/callsign";

export const getFlightByCallsign = async (callsign) => {
    const response = await fetch(`${BASE_URL}/${callsign}`);
    return response.json();
};

export const getRandomFlight = async () => {
    const response = await fetch(`${BASE_URL}/random`);
    return response.json();
};

export const fetchPhotos = async (searchParameter, typeOfSearch) => {
    let card = document.getElementById(typeOfSearch === "origin" ? 'originCard' : 'destinationCard');

    const response = await fetch(`https://api.pexels.com/v1/search?query=${searchParameter}`, {
        headers: {
            Authorization: 'Y8ESpTBDSSubxdsRobqXXYWyLezQGXS5VKmot8xkC63RNF6JbGyFLL8d'
        }
    });
    console.log(response)
    const data = await response.json();
    console.log(data)
    const imageUrl = data.photos[0].src.large;
    const img = new Image();
    img.src = imageUrl;
    await img.decode();

    card.style.backgroundImage = `url(${imageUrl})`;
};