import { useState } from "react";
import "./App.css";

function App() {
  const [crop, setCrop] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = async (e) => {
  e.preventDefault();

  if (!crop || !quantity || !location) return;

  const API_URL = import.meta.env.VITE_API_URL;

  try {
    const response = await fetch(`${API_URL}/api/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        crop,
        quantity,
        location,
      }),
    });

    const data = await response.json();
    console.log(data);

    setShowResults(true);
  } catch (error) {
    console.error("API Error:", error);
  }
};

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">🌾 MandiMind</div>
        <div className="nav-links">
          <span>Home</span>
          <span>How It Works</span>
          <span>About</span>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <p className="tag">SMART MANDI DECISION MAKING</p>

          <h1>
            Sell Smarter.
            <br />
            <span>Earn Better.</span>
          </h1>

          <p className="subtitle">
            Find the mandi that gives you the best possible return
            for your crops.
          </p>

          <form onSubmit={handleSearch} className="search-card">
            <div className="input-group">
              <label>🌱 Select Crop</label>
              <select value={crop} onChange={(e) => setCrop(e.target.value)}>
                <option value="">Choose crop</option>
                <option value="Wheat">Wheat</option>
                <option value="Rice">Rice</option>
                <option value="Potato">Potato</option>
                <option value="Tomato">Tomato</option>
                <option value="Onion">Onion</option>
              </select>
            </div>

            <div className="input-group">
              <label>⚖️ Quantity (kg)</label>
              <input
                type="number"
                placeholder="e.g. 500"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>📍 Your Location</label>
              <input
                type="text"
                placeholder="Enter city/location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <button type="submit">Find Best Mandi →</button>
          </form>
        </div>
      </section>

      {showResults && (
        <section className="results">
          <h2>Best Mandi Options</h2>
          <p className="result-subtitle">
            Based on your crop, quantity and location
          </p>

          <div className="mandi-grid">
            <div className="mandi-card best">
              <div className="recommended">RECOMMENDED</div>
              <h3>Najafgarh Mandi</h3>
              <p>📍 24 km away</p>

              <div className="price">
                ₹2,450 <small>/ quintal</small>
              </div>

              <div className="details">
                <span>Transport</span>
                <strong>₹850</strong>
              </div>

              <div className="details">
                <span>Estimated Profit</span>
                <strong className="profit">₹11,400</strong>
              </div>

              <button className="select-btn">View Details</button>
            </div>

            <div className="mandi-card">
              <h3>Azadpur Mandi</h3>
              <p>📍 32 km away</p>

              <div className="price">
                ₹2,380 <small>/ quintal</small>
              </div>

              <div className="details">
                <span>Transport</span>
                <strong>₹1,100</strong>
              </div>

              <div className="details">
                <span>Estimated Profit</span>
                <strong className="profit">₹10,800</strong>
              </div>

              <button className="select-btn">View Details</button>
            </div>

            <div className="mandi-card">
              <h3>Ghazipur Mandi</h3>
              <p>📍 41 km away</p>

              <div className="price">
                ₹2,320 <small>/ quintal</small>
              </div>

              <div className="details">
                <span>Transport</span>
                <strong>₹1,350</strong>
              </div>

              <div className="details">
                <span>Estimated Profit</span>
                <strong className="profit">₹10,250</strong>
              </div>

              <button className="select-btn">View Details</button>
            </div>
          </div>
        </section>
      )}

      <section className="how">
        <h2>How MandiMind Works</h2>

        <div className="steps">
          <div>
            <span>01</span>
            <h3>Enter Your Crop</h3>
            <p>Tell us what you want to sell and how much you have.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Compare Mandis</h3>
            <p>We compare prices, distance and transportation costs.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Maximize Your Profit</h3>
            <p>Choose the mandi with the most beneficial overall return.</p>
          </div>
        </div>
      </section>

      <footer>
        <strong>🌾 MandiMind</strong>
        <p>Making smarter agricultural decisions, one mandi at a time.</p>
      </footer>
    </div>
  );
}

export default App;