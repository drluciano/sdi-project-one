# ✈️ SkyWatch

SkyWatch is a flight tracking and information dashboard. It allows users to visualize flight paths on an interactive map and view detailed information about the airline, aircraft, and geographic data for both origin and destination airports, complete with dynamic regional imagery.

## ✨ Features

- Integrated with Leaflet.js to display flight routes and airport locations.
- Fetches flight route details using the ADSBDB API.
- Automatically retrieves high-quality background images for origin and destination cities via the Pexels API.
- Discover random active flights globally with a single click.

## 🚀 Getting Started

### Prerequisites

- A web browser (not safari, webkit has not been implemented).
- A Pexels API Key (for background imagery): https://www.pexels.com/api/

### Installation

1. **Clone the repository:**

   ```bash
   git clone git@github.com:drluciano/sdi-project-one.git
   cd sdi-project-one
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup API Keys:**

   Open `src/features/imageSearch.js` and replace the Authorization header with your Pexels API key:

   ```javascript
   headers: {
       Authorization: 'YOUR_PEXELS_API_KEY'
   }
   ```

4. **Run the project:**

   Open `index.html` via a local server. I recommend using live-server. Install via:
    ```bash
    npm install live-server
   ```