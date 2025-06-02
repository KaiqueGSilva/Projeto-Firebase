import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./form.css";

export default function Profile() {
  const [perfil, setPerfil] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "userProfiles", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setPerfil(docSnap.data());
          } else {
            setPerfil(null);
          }
        } catch (error) {
          console.error("Erro ao buscar perfil:", error);
          setPerfil(null);
        }
      } else {
        setPerfil(null);
      }
      setCarregando(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  if (carregando) return <p className="form-container">Carregando perfil...</p>;

  return (
    <div className="form-container">
      <h2>Meu Perfil</h2>
      {perfil ? (
        <div>
          <p><strong>Nome:</strong> {perfil.nomeCompleto || "Não preenchido"}</p>
          <p><strong>Bio:</strong> {perfil.bioCurta || "Não preenchida"}</p>
          <p><strong>Portfólio:</strong> {perfil.linkPortfolio ? (
            <a href={perfil.linkPortfolio} target="_blank" rel="noreferrer">{perfil.linkPortfolio}</a>
          ) : "Não informado"}</p>
        </div>
      ) : (
        <p>Perfil ainda não configurado.</p>
      )}
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}
