import styles from "./LoginForm.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/meeting-report");
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="email-div">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="value"
            value={formFields.email}
            className={styles.input}
            required
            onChange={(e) => {
              setFormFields((currentState) => ({
                ...currentState,
                email: e.target.value,
              }));
            }}
          />
        </div>
        <div className="password-div">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="value"
            value={formFields.password}
            className={styles.input}
            required
            onChange={(e) => {
              setFormFields((currentState) => ({
                ...currentState,
                password: e.target.value,
              }));
            }}
          />
        </div>
        <div className="buttons">
          <button type="submit" className={styles.button}>
            Sign In
          </button>
          <Link to="reset-password">Forgot your password?</Link>
        </div>
      </form>
    </div>
  );
}
