import { useContext, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { UserContext } from "../utils/usercontext.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const Signin = () => {
  const [formData, setformData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch } = useContext(UserContext);
  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `${BASE_URL}/api/v1/user/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials:true
        }
      );
      dispatch({ type: "LOGIN", payload: response.data.data });
      console.log(response.data);
      navigate(location?.state?.from?.pathname || "/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="email">
        email:{" "}
        <input
          type="text"
          id="email"
          value={formData.email}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label htmlFor="password">
        password:{" "}
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <button type="submit">login</button>
    </form>
  );
};

export default Signin;
