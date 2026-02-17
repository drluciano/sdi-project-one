export const fetchPhotos = async (searchParameter, typeOfSearch) => {
    let photoLink;
    let card = document.getElementById(typeOfSearch === "origin" ? 'originCard' : 'destinationCard');

    const response = await fetch(`https://api.pexels.com/v1/search?query=${searchParameter}`, {
        headers: {
            Authorization: 'Y8ESpTBDSSubxdsRobqXXYWyLezQGXS5VKmot8xkC63RNF6JbGyFLL8d'
        }
    });
    const data = await response.json();
    const imageUrl = data.photos[0].src.large;

    const img = new Image();
    img.src = imageUrl;
    await img.decode();

    card.style.backgroundImage = `url(${imageUrl})`;
};