export const toggleLoader = (show) => {
    const loader = document.getElementById("loader");
    show ? loader.removeAttribute("hidden") : loader.setAttribute("hidden", "");
};

export const renderFlightInformation = (flightInformation) => {
    const updateText = (element, text) => {
        if (element) element.textContent = text || "N/A";
    };

    // Header
    let headerObject = {
        callsign: document.getElementById("callsign"),
        airline: document.getElementById("airline"),
        countryOrigin: document.getElementById("countryOfOrigin"),
    };
    let flightRouteData = flightInformation.response.flightroute;

    //oriigin card
    let originCardObject = {
        originCard: document.getElementById("originCard"),
        originCountryIso: document.getElementById("originCountryIso"),
        originCountry: document.getElementById("originCountry"),
        originMunicipality: document.getElementById("originMunicipality"),
        originAirport: document.getElementById("originAirport"),
        originAirportElevation: document.getElementById("originAirportElevation"),
        originAirportLat: document.getElementById("originAirportLat"),
        originAirportLon: document.getElementById("originAirportLon"),
    };
    let originData = flightInformation.response.flightroute.origin;

    //destination card
    let destinationCardObject = {
        destinationCard: document.getElementById("destinationCard"),
        destinationCountryIso: document.getElementById("destinationCountryIso"),
        destinationCountry: document.getElementById("destinationCountry"),
        destinationMunicipality: document.getElementById("destinationMunicipality"),
        destinationAirport: document.getElementById("destinationAirport"),
        destinationAirportElevation: document.getElementById(
            "destinationAirportElevation",
        ),
        destinationAirportLat: document.getElementById("destinationAirportLat"),
        destinationAirportLon: document.getElementById("destinationAirportLon"),
    };
    let destData = flightInformation.response.flightroute.destination;

    //header setters
    updateText(headerObject.callsign, flightRouteData.callsign);
    updateText(headerObject.airline, flightRouteData.airline.name);
    updateText(headerObject.countryOrigin, flightRouteData.airline.country);

    //Get country flag for airline
    const airlineCountryOfOriginFlag = document.getElementById("airlineCountryOfOriginFlag")
    airlineCountryOfOriginFlag.innerHTML = "";
    const airlineCountry = flightInformation.response.flightroute.airline.country_iso
    const airlineCountryFlag = document.createElement("img")
    airlineCountryFlag.classList = "countryFlag"
    airlineCountryFlag.src = `https://countryflagsapi.netlify.app/flag/${airlineCountry}.svg`
    airlineCountryOfOriginFlag.appendChild(airlineCountryFlag)


    //get country flag for origin
    const originFlagHeader = document.getElementById("countryOfOriginFlag")
    originFlagHeader.innerHTML = ""
    const originCountry = flightInformation.response.flightroute.origin.country_iso_name
    const originCountryFlag = document.createElement("img")
    originCountryFlag.classList = "countryFlag"
    originCountryFlag.src = `https://countryflagsapi.netlify.app/flag/${originCountry}.svg`
    originFlagHeader.appendChild(originCountryFlag)

    //get country flag for destination
    const destFlagHeader = document.getElementById("countryOfDestinationFlag")
    destFlagHeader.innerHTML = ""
    const destCountry = flightInformation.response.flightroute.destination.country_iso_name
    const destCountryFlag = document.createElement("img")
    destCountryFlag.classList = "countryFlag"
    destCountryFlag.src = `https://countryflagsapi.netlify.app/flag/${destCountry}.svg`
    destFlagHeader.appendChild(destCountryFlag)


    //origin setters
    updateText(originCardObject.originCountryIso, originData.country_iso_name);
    updateText(originCardObject.originCountry, originData.country_name);
    updateText(originCardObject.originMunicipality, originData.municipality);
    updateText(originCardObject.originAirport, originData.name);
    updateText(originCardObject.originAirportElevation, originData.elevation);
    updateText(originCardObject.originAirportLat, originData.latitude);
    updateText(originCardObject.originAirportLon, originData.longitude);

    //destination setters
    updateText(
        destinationCardObject.destinationCountryIso,
        destData.country_iso_name,
    );
    updateText(destinationCardObject.destinationCountry, destData.country_name);
    updateText(
        destinationCardObject.destinationMunicipality,
        destData.municipality,
    );
    updateText(destinationCardObject.destinationAirport, destData.name);
    updateText(
        destinationCardObject.destinationAirportElevation,
        destData.elevation,
    );
    updateText(destinationCardObject.destinationAirportLat, destData.latitude);
    updateText(destinationCardObject.destinationAirportLon, destData.longitude);
};