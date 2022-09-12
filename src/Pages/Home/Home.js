import { useState } from "react";
import Piechart from "../../Components/Piechart/Piechart";
import Scatterplot from "../../Components/Scatterplot/Scatterplot";
import "./home.css";

function Home() {
    const [pickedSeason, setPickedSeason] = useState("2015-16");
    const [teamElo, setTeamElo] = useState('');
    const [winPercent, setWinPercent] = useState('');
    const [showCharts, setShowCharts] = useState(false);

    const getData = async () => {
        fetch(
            `https://basketball-game-predictions.onrender.com/teamdata/${pickedSeason}`
        )
            .then((response) => response.json())
            .then((data) => { setTeamElo(data.scatter_data); setWinPercent(data.predictions); });
        
        setShowCharts(true);
    };

    return (
        <>
            <div className="intro-container">
                <div className="intro-header">
                    <h1>Welcome</h1>
                    <h3>Select a season to simulate</h3>
                    <p>
                        When the simulation begins 70% of the selected season
                        will be used as teaching data for the machine learning
                        model. And then the model will predict the remaining 30%
                        of the season.{" "}
                    </p>
                </div>
            </div>

            <div className="season-selection-container">
                <div>
                    <label htmlFor="pickedSeason">Choose a season:</label>
                    <select
                        name="pickedSeason"
                        id="pickedSeason"
                        onChange={(e) => setPickedSeason(e.target.value)}
                    >
                        <option defaultValue="2014-15">2014-15</option>
                        <option value="2015-16">2015-16</option>
                        <option value="2016-17">2016-17</option>
                        <option value="2017-18">2017-18</option>
                        <option value="2018-19">2018-19</option>
                        <option value="2019-20">2019-20</option>
                        <option value="2020-21">2020-21</option>
                    </select>
                    <div className="sim-button">
                        <button onClick={() => getData()}>Simulate</button>
                    </div>
                </div>
            </div>

            <div className="chart-container">
                {showCharts ? (
                    <div className="charts">
                        <Piechart winPercent={winPercent}/>
                        <Scatterplot teamElo={teamElo}/>
                    </div>
                ) : null}
            </div>
        </>
    );
}

export default Home;
