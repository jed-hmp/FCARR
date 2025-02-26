import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminAccess() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const correctPassword = "admin123"; // Change this for real authentication

  const handleStudentClick = () => {
    navigate("/");
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      navigate("/admin");
    } else {
      setError("Incorrect password. Try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Select Access</h2>
      <button onClick={handleStudentClick} style={{ margin: "10px", padding: "10px" }}>
        Student/Parent
      </button>
      <br />
      <h3>Admin Access</h3>
      <form onSubmit={handleAdminSubmit}>
        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: "10px", padding: "5px" }}
        />
        <button type="submit" style={{ padding: "5px" }}>Enter</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default AdminAccess;
