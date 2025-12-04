/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { authApi, useLoginMutation } from "@/Redux/features/user/user.api";
import { useAppDispatch } from "@/Redux/hook";
import { PhoneCall } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

const Login = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log({ email, password });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format!");

      return;
    }

    if (!passwordRegex.test(password)) {
      toast.error("Password must be at least 6 characters, include one uppercase and one lowercase letter.");

      return;
    }

    // You can send this data to backend using fetch/axios
    const userInfo = { email, password };
    const toastId = toast.loading("Logging In");
    try {
      console.log(userInfo);
      const result = await login(userInfo).unwrap();
      console.log(result);
      if (result.success) {
        dispatch(authApi.util.invalidateTags(["USER"]));
        navigate("/profile");
        toast.success("Login successful!", { id: toastId });
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast.error(error.data.message, { id: toastId });
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h1 className="font-bold mb-6">Login</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1">
        <div style={{ marginBottom: "15px" }} className="text-start">
          <label>Email</label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }} className="text-start">
          <label className="text-start">Password</label>
          <input
            type="password"
            required
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4F46E5",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
        <Link className="mt-2 " to={"/login-with-phone"}>
          {" "}
          <Button className="w-full" variant="outline" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <PhoneCall></PhoneCall>
            </svg>
            Login With Phone Number
          </Button>
        </Link>
      </form>
      <div className="my-6 ">
        Dont have an account?{" "}
        <span className="font-bold">
          <Link to="/register">Register</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
