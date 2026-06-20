import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        background: "#2d6a4f",
        color: "white",
        flexWrap: "wrap"
      }}
    >
      <h2>🌾 Crop Advisor</h2>

      <div>
        <Link to="/" style={{margin:"10px",color:"white"}}>Home</Link>
        <Link to="/about" style={{margin:"10px",color:"white"}}>About</Link>
        <Link to="/dashboard" style={{margin:"10px",color:"white"}}>Dashboard</Link>
        <Link to="/login" style={{margin:"10px",color:"white"}}>Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;