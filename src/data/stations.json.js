// Function to fetch data from the specified API endpoint
async function fetchJson(url) {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`fetch failed: ${response.status}`);
    return await response.json();
  }
  
  // Function to parse the data on each station and place it into a dictionary
  function parseStations(data) {
    const stationData = new Map();
  
    data.network.stations.forEach(station => {
      const stationInfo = new Map();
  
      // Only use fields that exist in the API response
      stationInfo.set("name", station.name);
      stationInfo.set("free_bikes", station.free_bikes);
      stationInfo.set("empty_slots", station.empty_slots);
      stationInfo.set("total_slots", station.extra.slots);
      stationInfo.set("address", station.extra.address);
  
      // Add to stationData map keyed by station name
      stationData.set(station.name, stationInfo);
    });
  
    // Convert Map to plain object for JSON serialization
    const plainObject = Object.fromEntries(
      [...stationData.entries()].map(([stationId, infoMap]) => [
        stationId,
        Object.fromEntries(infoMap)
      ])
    );
  
    return plainObject;
  }
  
  // Main function to fetch and process stations
  async function main() {
    const pghStations = await fetchJson('https://api.citybik.es/v2/networks/pittsburgh');
    const stations = parseStations(pghStations);
  
    // Output JSON to stdout (or you can save to a file if needed)
    process.stdout.write(JSON.stringify(stations, null, 2));
  }
  
  // Run main
  main().catch(err => console.error(err));