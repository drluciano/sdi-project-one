const favoriteButton = document.getElementById("favBtn");
const currentCallsign = document.getElementById("callsign");
const heartIcon = favoriteButton.querySelector('.heartIcon');


export const favoriteCallsign = () => {
    const callSignText = currentCallsign.textContent.trim()

    console.log(callSignText)

    //Check if it exists in local storage ? remove from favorites : add to favorites
    if(localStorage.getItem(callSignText) === "true"){
        heartIcon.textContent = '♡';
        heartIcon.classList.remove('filled');
        localStorage.removeItem(callSignText);
        console.log("Removed from Favorites.")

        renderFavorites()
    } else {
        heartIcon.classList.add('filled');
        localStorage.setItem(callSignText, 'true');
        heartIcon.textContent = '♥';
        console.log("Added to favorites.");

        renderFavorites()
    }
}

const renderFavorites = () => {
    let currentFavorites = Object.keys(localStorage);

    let favoritesDropDown = currentFavorites.map(favorite => {
        return `<option value="${favorite}">${favorite}</option>`
    }).join('')

    document.getElementById('favoritesSelect').innerHTML = `<option disabled selected hidden>Make a selection.</option>` + favoritesDropDown;

    console.log(currentFavorites)
}

export const checkIfFavorite = () => {
    const callSignText = currentCallsign.textContent.trim()
    if(localStorage.getItem(callSignText) === "true") {
        heartIcon.textContent = '♥';
        heartIcon.classList.add('filled');
    } else {
        heartIcon.textContent = '♡';
        heartIcon.classList.remove('filled');
    }
}

renderFavorites();