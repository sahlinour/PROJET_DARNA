import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Adduser } from "../../Slices/userSlice";

const CreateUser = () => {
  const dispatch = useDispatch();

  const [Name, setName] = useState("");
  const [Date, setDate] = useState("");
  const [Genre, setGenre] = useState("");
  const [Ville, setVille] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handlerName = (e) => {
    setName(e.target.value);
  };
  const handlerDate = (e) => {
    setDate(e.target.value);
  };
  const handlerGenre = (e) => {
    setGenre(e.target.value);
  };
  const handlerVille = (e) => {
    setVille(e.target.value);
  };
  const handlerTelephone = (e) => {
    setTelephone(e.target.value);
  };
  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };
  const handlerForm = (e) => {
    e.preventDefault();
    if (
      Name.trim() === "" ||
      Date.trim() === "" ||
      Genre.trim() === "" ||
      Ville.trim() === "0" ||
      Telephone.trim() === "" ||
      Email.trim() === "" ||
      Password.trim() === ""
    ) {
      setErr("Veuillez remplir tous les champs.");
    } else if (Password.length < 6) {
      setErr("Le mot de passe doit contenir au moins 6 caractères.");
    } else if (!validateEmail(Email)) {
      setErr("Veuillez saisir une adresse e-mail valide.");
    } else if (!validateTelephone(Telephone)) {
      setErr("Veuillez saisir un numéro de téléphone valide.");
    } else {
      const form = {
        Name: Name,
        Date: Date,
        Genre: Genre,
        Ville: Ville,
        Telephone: Telephone,
        Email: Email,
        Password: Password,
        Role: "client",
      };
      dispatch(Adduser(form));
      setDate("");
      setName("");
      setGenre("");
      setVille("");
      setTelephone("");
      setEmail("");
      setPassword("");
      setErr("");
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateTelephone = (telephone) => {
    const re = /^\d{10}$/;
    return re.test(telephone);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 border rounded-lg shadow-lg flex">
      <div className="w-1/2">
        <img src="img/your-image.jpg" alt="Your Image" className="w-full" />
      </div>
      <div className="w-1/2 p-8">
        <h2 className="text-2xl font-semibold mb-4">S'inscrire</h2>
        <form>
          {err && <div className="text-red-500 mb-4">{err}</div>}
          <div className="mb-4">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              onChange={handlerName}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block">
              Date Naissance
            </label>
            <input
              type="date"
              id="date"
              className="form-input"
              onChange={handlerDate}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="genre" className="block">
              Genre :
            </label>
            <div>
              <input
                type="radio"
                id="homme"
                name="genre"
                value="Homme"
                onChange={handlerGenre}
              />
              <label htmlFor="homme" className="mr-3">
                Homme
              </label>
              <input
                type="radio"
                id="femme"
                name="genre"
                value="Femme"
                onChange={handlerGenre}
              />
              <label htmlFor="femme">Femme</label>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="ville" className="block">
              Ville :
            </label>
            <select id="ville" className="form-select" onChange={handlerVille}>
              <option value="0">---</option>
              <option value="1">Tangier</option>
              <option value="2">Casa</option>
              <option value="3">Rabat</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="telephone" className="block">
              Telephone :
            </label>
            <input
              type="tel"
              id="telephone"
              className="form-input"
              placeholder="06 **--"
              onChange={handlerTelephone}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              onChange={handlerEmail}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              onChange={handlerPassword}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={handlerForm}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
