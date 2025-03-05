import styles from "./Report.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import clsx from "clsx";

export default function Report() {
  const [formData, setFormData] = useState({
    name: "",
    client: "",
    collection: "",
    acollection: "",
    dueTo: "",
    dueFrom: "",
    parreas: "",
    narreas: "",
    arreasc: "",
    items: "",
  });

  const handleToast = () => {
    toast("Data Submitted", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const [rform, setRform] = useState(true);
  const [confirm, setConfirm] = useState(false);

  const today = new Date().toLocaleString();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setRform(false);
    setConfirm(true);
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      {rform && (
        <form action="" className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.head}>
            <h3>Group Meeting Report</h3>
            <p className={styles.today}>{today}</p>
          </div>
          <div className="name-div">
            <label htmlFor="name">Group Name</label>
            <select
              name="name"
              id="name"
              className={styles.input}
              value={formData.name}
              onChange={(e) => {
                setFormData((currentValue) => ({
                  ...currentValue,
                  name: e.target.value,
                }));
              }}
            >
              <option value="" disabled>
                Group Name
              </option>
              <option value="group1">Group 1</option>
              <option value="group2">Group 2</option>
              <option value="group3">Group 3</option>
            </select>
          </div>
          <div className="client-div">
            <label htmlFor="client">Receiving Client No:</label>
            <input
              type="number"
              name="client"
              placeholder="client no"
              className={styles.input}
              value={formData.client}
              onChange={(e) => {
                setFormData((currentValue) => ({
                  ...currentValue,
                  client: e.target.value,
                }));
              }}
            />
          </div>
          <div className="ecollection-div">
            <label htmlFor="collection">Expected Collection</label>
            <input
              type="number"
              name="collection"
              placeholder="expected collection"
              className={styles.input}
              value={formData.collection}
              onChange={(e) => {
                setFormData((currentValue) => ({
                  ...currentValue,
                  collection: e.target.value,
                }));
              }}
            />
          </div>
          <div className="acollection-div">
            <label htmlFor="acollection">Actual Collection</label>
            <input
              type="number"
              name="acollection"
              placeholder="actual collection"
              className={styles.input}
              value={formData.acollection}
              onChange={(e) => {
                setFormData((currentValue) => ({
                  ...currentValue,
                  acollection: e.target.value,
                }));
              }}
            />
          </div>
          <div className="due-to-div">
            <label htmlFor="dueTo">Aditional amount due to client</label>
            <input
              type="number"
              name="dueTo"
              placeholder="0"
              className={styles.input}
              value={formData.dueTo}
              onChange={(e) => {
                setFormData((currentValue) => ({
                  ...currentValue,
                  dueTo: e.target.value,
                }));
              }}
            />
          </div>
          <div className="due-from-div">
            <label htmlFor="dueFrom">Aditional amount due from client</label>
            <input
              type="number"
              name="dueFrom"
              placeholder="0"
              className={styles.input}
              value={formData.dueFrom}
              onChange={(e) => {
                setFormData((currentValue) => ({
                  ...currentValue,
                  dueFrom: e.target.value,
                }));
              }}
            />
          </div>
          <div className="parreas-div">
            <label htmlFor="parreas">Previous Arreas</label>
            <input
              type="number"
              name="parreas"
              placeholder="0"
              className={styles.input}
              value={formData.parreas}
              onChange={(e) => {
                setFormData((currentValue) => ({
                  ...currentValue,
                  parreas: e.target.value,
                }));
              }}
            />
          </div>
          <div className="narreas-div">
            <label htmlFor="narreas">New Arreas</label>
            <input
              type="number"
              name="narreas"
              placeholder="0"
              className={styles.input}
              value={formData.narreas}
              onChange={(e) => {
                setFormData((currentValue) => ({
                  ...currentValue,
                  narreas: e.target.value,
                }));
              }}
            />
          </div>
          <div className="arreasc-div">
            <label htmlFor="arreasc"> Arreas Collected</label>
            <input
              type="number"
              name="arreasc"
              placeholder="actual collection"
              className={styles.input}
              value={formData.arreasc}
              onChange={(e) => {
                setFormData((currentValue) => ({
                  ...currentValue,
                  arreasc: e.target.value,
                }));
              }}
            />
          </div>
          <div className="items-div">
            <label htmlFor="items">Items delivered</label>
            <textarea
              name="items"
              placeholder="items comma seperated"
              className={styles.input}
              value={formData.items}
              onChange={(e) => {
                setFormData((currentValue) => ({
                  ...currentValue,
                  items: e.target.value,
                }));
              }}
            ></textarea>
          </div>

          <hr className={styles.rule} />
          <div className={styles.buttons}>
            <input type="submit" className={styles.button} />
            <button className={styles.button} onClick={() => navigate(-1)}>
              Back
            </button>
          </div>
          <div className={styles.download}>
            <p className={styles.downloadp}>Download Report</p>
          </div>
          <hr className={styles.lrule} />
        </form>
      )}
      {confirm && (
        <div className={clsx(styles.form, styles.confirm)}>
          <div className={styles.cheader}>
            <h3>Confirm</h3>
            <p
              className={styles.xButton}
              onClick={() => {
                setConfirm(false);
                setRform(true);
              }}
            >
              x
            </p>
          </div>
          <p>Confirm submission for data for group</p>
          <div className={styles.cbuttons}>
            <button
              className={styles.cbutton}
              onClick={() => {
                setConfirm(false);
                setRform(true);
              }}
            >
              Cancel
            </button>
            <button
              className={styles.cbutton}
              onClick={() => {
                setConfirm(false);
                setRform(true);
                handleToast();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
