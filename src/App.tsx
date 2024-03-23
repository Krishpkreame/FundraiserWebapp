import { useEffect, useState } from "react"; // Importing necessary hooks from React
import Progressbar from "./components/progressbar"; // Importing Progressbar component
import config from "./config.json"; // Importing configuration data
import "./App.css"; // Importing styles

// App component
const App = () => {
  const { fundraisingGoal, apiUrl, fetchInterval } = config; // Destructuring configuration data
  const [fundsRaised, setFundsRaised] = useState(0); // State for funds raised

  // Effect to fetch funds raised and update state
  useEffect(() => {
    const fetchFundsRaised = async () => {
      try {
        const response = await fetch(apiUrl); // Fetching data from API
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json(); // Parsing response
        setFundsRaised(data.funds); // Updating state with fetched funds
      } catch (error) {
        console.error("Error fetching data:", error); // Logging error if fetch fails
      }
    };

    fetchFundsRaised(); // Initial fetch
    const intervalId = setInterval(fetchFundsRaised, fetchInterval); // Setting up interval to fetch data periodically
    return () => clearInterval(intervalId); // Cleanup function to clear interval
  }, [apiUrl, fetchInterval]); // Dependencies for the effect

  // Rendering UI
  return (
    <aside>
      <h1>Target Goal: ${fundraisingGoal}</h1>{" "}
      {/* Displaying fundraising goal */}
      <div className="progress-wrapper">
        <p className="progress-label" data-animate aria-hidden="true"></p>{" "}
        {/* Progress label */}
        <p className="bubble bubble--left" aria-hidden="true">
          Raised 🎉 {/* Bubble indicating raised funds */}
        </p>
        <Progressbar value={(fundsRaised / fundraisingGoal) * 100} />{" "}
        {/* Progress bar component */}
        <div className="progress-overlay">
          {/* Progress overlay showing raised and remaining funds */}
          <p>${fundsRaised}</p>
          <p>${fundraisingGoal - fundsRaised}</p>
        </div>
        <p className="bubble bubble--right" aria-hidden="true">
          Yet to raise 🚀 {/* Bubble indicating remaining funds to raise */}
        </p>
      </div>
    </aside>
  );
};

export default App; // Exporting App component as default
