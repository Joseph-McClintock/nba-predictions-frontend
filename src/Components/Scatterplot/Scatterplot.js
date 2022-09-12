import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import "./scatterplot.css";

function Barchart({ teamElo }) {
    ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: "Team ELO",
                    font: {
                        size: 15,
                        weight: "bold",
                        lineHeight: 1,
                    },
                    padding: { top: 0, left: 0, right: 0, bottom: 0 },
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: "Team Wins",
                    font: {
                        size: 15,
                        weight: "bold",
                        lineHeight: 1,
                    },
                    padding: { top: 10, left: 0, right: 0, bottom: 0 },
                },
            },
        },
    };
    const data = {
        datasets: [
            {
                label: "Wins to ELO",
                data: teamElo,
                backgroundColor: "rgb(255, 99, 132)",
            },
        ],
    };

    return (
        <div className="scatterplot-container">
            <Scatter options={options} data={data} />
        </div>
    );
}

export default Barchart;
