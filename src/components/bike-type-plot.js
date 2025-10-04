import * as Plot from "npm:@observablehq/plot";
import * as d3 from "npm:d3";

export function bike_type_plot(data, {width} = {}) {
    // if needed, variables can be created here
    const station_name = data.name;

    // Calculate counts for each bike type
    const bike_counts = [
        {type: "Normal Bikes", count: data.normal_bikes},
        {type: "E-Bikes", count: data.ebikes}
    ];
    // Total slots
    const total_slots = data.normal_bikes + data.ebikes + data.empty_slots;

    // Define color scale
    const color_scale = d3.scaleOrdinal()
        .domain(["Normal Bikes", "E-Bikes"])
        .range(["#1f77b4", "#ff7f0e"]); // blue for normal, orange for e-bikes

    return Plot.plot({
        title: `Bike Availability at ${station_name}`,
        marks: [
            // CHALLENGE 7.2
            Plot.barY(bike_counts, {
                x: "type",
                y: "count",
                fill: d => color_scale(d.type),
                tip: true
            })
        ],
        x: {
            // CHALLENGE 7.3
            label: "Bike Type"
        },
        y:{
            // CHALLENGE 7.4
            label: "Number of Bikes",
            domain: [0, total_slots],
            ticks: d3.range(0, total_slots + 1, Math.max(1, Math.floor(total_slots / 5))),
            grid: true
        },
        color: {
            // CHALLENGE 7.5
            legend: true,
            domain: ["Normal Bikes", "E-Bikes"],
            range: ["#1f77b4", "#ff7f0e"]
        },
        width: width,
        height: 400,
        marginLeft: 80,
        marginBottom: 80
    })
}