import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
          <h1>Menu</h1>
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem"
            }}
          >
            <Link to="/products">Products</Link> |{" "}
          </nav>
      </div>
    </div>
  );
}

export default App;
