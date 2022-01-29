import { Link } from "react-router-dom"

function App() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/movies">Navigate to Movies</Link>
    </div>
  );
}

export default App;
