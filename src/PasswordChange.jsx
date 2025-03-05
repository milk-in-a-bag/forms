import styles from "./PasswordChange.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PasswordChange() {
  const [formFields, setFormFields] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <h3>Change Password</h3>
        <label htmlFor="currentPassword">Current Password</label>
        <input
          type="password"
          id="currentPassword"
          name="currentPassword"
          placeholder="current password"
          className={styles.input}
          value={formFields.currentPassword}
          required
          onChange={(e) => {
            setFormFields((currentState) => ({
              ...currentState,
              currentPassword: e.target.value,
            }));
          }}
        />
        <label htmlFor="newPassword">New Password</label>
        <input
          type="password"
          id="new-password"
          name="newPassword"
          placeholder="new password"
          className={styles.input}
          value={formFields.newPassword}
          required
          onChange={(e) => {
            setFormFields((currentState) => ({
              ...currentState,
              newPassword: e.target.value,
            }));
          }}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          name="confirmPassword"
          placeholder="confirm password"
          className={styles.input}
          value={formFields.confirmPassword}
          required
          onChange={(e) => {
            setFormFields((currentState) => ({
              ...currentState,
              confirmPassword: e.target.value,
            }));
          }}
        />
        <div className={styles.buttons}>
          <button type="submit" className={styles.button}>
            Submit
          </button>
          <button className={styles.button} onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
