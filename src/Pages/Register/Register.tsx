import { useRegisterMutation } from "@/Redux/features/user/user.api";
import { useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [register] = useRegisterMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, email, password });
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
    const userInfo = { email, password, name };
    const toastId = toast.loading("Registering...");
    try {
      console.log(userInfo);
      const result = await register(userInfo).unwrap();
      console.log(result);
      if (result.success) toast.success("Registration successful!", { id: toastId });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast.error(error.data.message, { id: toastId });
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h1 className="font-bold mb-4">Register</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }} className="text-start">
          <label>Name</label>
          <input
            type="text"
            required
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          <label>Password</label>
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
          Register
        </button>
      </form>
      <div className="my-6 ">
        ALready have an account? {" "}
        <span className="font-bold">
          <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
