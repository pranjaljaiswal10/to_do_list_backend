import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(`${BASE_URL}/api/v1/user/signup`, formData);
      const data = response.data;
      navigate("/login");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        username:<input
          type="text"
          id="username"
          value={formData.username}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
       email: <input
          type="text"
          id="email"
          value={formData.email}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
       password: <input
          type="pasword"
          id="password"
          value={formData.password}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <button type="submit">Create Account</button>
    </form>
  );
};

export default Signup;
