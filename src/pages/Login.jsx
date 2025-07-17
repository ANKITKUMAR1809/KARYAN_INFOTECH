import axios from "axios";

import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://server.3karyaninfotech.in/auth/login",
        formData
      );
      if (response.status === 200) {
        login(response.data.token); // triggers re-render across app
        navigate("/dashboard");
      }
    } catch (error) {
      alert("Login failed");
      console.error(error);
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <div className="">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border-2 border-blue-500 rounded-md py-2 px-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border-2 border-blue-500 rounded-md py-2 px-2 outline-blue-600 "
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600  outline-blue-600"
          >
            Login
          </button>
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
