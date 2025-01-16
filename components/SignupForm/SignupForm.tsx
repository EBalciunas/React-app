import React, { useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { SigninUser } from "@/api/user";

interface SignupFormProps {
  onSwitchToLogin: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSwitchToLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoggingIn, setLoggingIn] = useState(false);
  const router = useRouter();

  const onRegister = async () => {
    setLoggingIn(true);
    setError(null);
    const userData = { name, email, password };

    try {
      const response = await SigninUser(userData);

      if (response.status === 200) {
        await router.push("/login");
      } else {
        setError(
          response.data?.message ||
            "Registration failed. Please check your details."
        );
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setLoggingIn(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>Register</h1>
      {error && <p className={styles.error}>{error}</p>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={onRegister} disabled={isLoggingIn}>
        {isLoggingIn ? "Registering..." : "Register"}
      </button>
      <button onClick={onSwitchToLogin}>Already have an account?</button>
    </div>
  );
};

export default SignupForm;
