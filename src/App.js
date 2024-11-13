import React, { useState } from "react";
import "./App.css";

function App() {
  const [chatInput, setChatInput] = useState("");
  const [dashboardUrl, setDashboardUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChatSubmit = async (event) => {
    setChatInput("");
    event.preventDefault();

    if (!chatInput.trim()) {
      return;
    }

    setIsLoading(true);

    try {

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const fetchedDashboardUrl =
        "https://play.grafana.org/d/play-bigquery-1/citibike-example-overview?orgId=1&from=2017-04-01T00:00:00.000Z&to=2018-05-31T23:59:59.000Z&timezone=utc";

      setDashboardUrl(fetchedDashboardUrl);
      setIsLoading(false);
    } catch (error) {
      console.error("ERROR: ", error);
      setIsLoading(false);
    }

    setChatInput("");
  };

  const handleInputChange = (event) => {
    setChatInput(event.target.value);
    
  };

  return (
    <div className="app-container">
      <div className="chat-container">
        <div className="chat-content">
          {isLoading ? (
            <div className="loading-indicator">
              <h2>Loading...</h2>
            </div>
          ) : dashboardUrl ? (
            <iframe
              src={dashboardUrl}
              title="Grafana Dashboard"
              className="iframe-content"
            />
          ) : (
            <div className="placeholder">
              <div>
              <h2>Cisco Intelligent Dashboard</h2>
              <h3>Your data insights, simplified.</h3>
              </div>
              {/* <img
                src="https://aurus5.com/upload/blog/images/2017-cisco-logo-4.png"
                
                alt="Dashboard Placeholder"
                className="placeholder-image"
              /> */}
            </div>
          )}
        </div>
        <form className="chat-input-form" onSubmit={handleChatSubmit}>
          <input
            className="chat-input"
            type="text"
            value={chatInput}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <button className="chat-submit-button" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
