import * as Plot from "npm:@observablehq/plot";
import * as d3 from "npm:d3";

export function station_demand_plot(network_data, station_data, {width} = {}) {
    // if needed, variables can be created here
    // Extract network name for the title 
    const network_name = network_data[0]["name"];

    // Sort stations by empty_slots
    const sorted_stations = station_data.slice().sort((a, b) => a.empty_slots - b.empty_slots);

    return Plot.plot({
        title: `Station Demand in ${network_name}`,
        marks: [
            // CHALLENGE 6.2
            Plot.barY(sorted_stations, {
                x: "name",
                y: "empty_slots",
                sort: {x: "y"},  // sort by empty slots left to right
                fill: "#00bfff",  // color of bars
                tip: true         // enable tooltips
            })
        ],
        x: {
            // CHALLENGE 6.3
            label: "Station",
            tickRotation: -45,  // rotate labels for readability
            tickSize: 5
        },
        y: {
            // CHALLENGE 6.4
            label: "Number of Empty Slots"
        },
        // CHALLENGE 6.5
        marginLeft: 120,
        width: width,
        height: 400,
        marginBottom: 150
    });
}