import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      const user = auth.currentUser;

      await setDoc(doc(db, "userProfiles", user.uid), {
        nomeCompleto: "",
        bioCurta: "",
        linkPortfolio: ""
      });

      navigate("/profile");
    } catch (e) {
      setErro("Erro ao cadastrar: " + e.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Cadastro</h2>
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setSenha(e.target.value)} placeholder="Senha" />
      <button onClick={handleRegister}>Cadastrar</button>
      {erro && <p className="erro">{erro}</p>}
      <p className="link-text">
        Já tem conta? <a href="/">Faça login</a>
      </p>
    </div>
  );
}
