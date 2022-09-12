import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./piechart.css";

function Piechart({ winPercent }) {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    const data = {
        labels: ["Correct Guesses %", "Incorrect Guesses %"],
        datasets: [
            {
                label: "Win loss chart",
                data: [(winPercent.W * 100).toFixed(2), (winPercent.L * 100).toFixed(2)],
                backgroundColor: [
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 99, 132, 0.6)",
                ],
                borderColor: [
                    "rgba(54, 162, 235, .6)",
                    "rgba(255, 99, 132, .6)",
                ],
                borderWidth: 1,
                hoverOffset: 6,
                rotation: 0,
            },
        ],
    };
    return (
        <div className="piechart-container">
            <Pie options={options} data={data} />
        </div>
    );
}

export default Piechart;
