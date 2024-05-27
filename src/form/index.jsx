import styles from "../../styles/Home.module.css";
import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, date } = formData;

    if (!name || !email || !lastName || !date) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return;
    }

    console.log("Form data:", formData);
  };

  return (
    <>
      <div className={styles.form_div}>
        <div className={styles.circle}>1</div>
        <h2>Ingrese su información</h2>
      </div>
      <div className={styles.container_form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <div>
              <label className={styles.label} htmlFor="name">
                Nombre:
              </label>
              <input
                className={styles.input}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Correo Electrónico:</label>
              <input
                className={styles.input}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastName">Apellido:</label>
              <input
                className={styles.input}
                id="lastName"
                name="lastName"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="date">Fecha:</label>
              <input
                className={styles.input}
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.div_button}>
            <button className={styles.button} type="submit">
              CONFIRMAR ASISTENCIA
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
