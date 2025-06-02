import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css"; // novo arquivo de estilos

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/profile");
    } catch (e) {
      setErro("Erro ao fazer login: " + e.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setSenha(e.target.value)} placeholder="Senha" />
      <button onClick={handleLogin}>Entrar</button>
      {erro && <p className="erro">{erro}</p>}
      <p className="link-text">
        Não tem conta? <a href="/register">Cadastre-se</a>
      </p>
    </div>
  );
}
