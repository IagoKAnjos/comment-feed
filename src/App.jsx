import { useCallback, useState } from "react";
import Comentario from "./components/Comentarios/Comentario.jsx";
import "./styles/App.css";

function App() {
  const [comentarios, setComentarios] = useState([
    {
      id: 1,
      name: "Iago",
      email: "iagokaued@gmail.com",
      date: new Date(2025, 8, 20, 10, 30, 0),
      comment: "Primeiro comentário!",
    },
  ]);

  const [novoComentario, setNovoComentario] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const preencherCampos = (event) => {
    const { name, value } = event.target;
    setNovoComentario({ ...novoComentario, [name]: value });
  };

  const adicionarComentario = (event) => {
    event.preventDefault();
    if (
      !novoComentario.name ||
      !novoComentario.email ||
      !novoComentario.comment
    ) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
    const comentarioAdicionado = {
      ...novoComentario,
      id: Date.now(),
      date: new Date(),
    };

    setComentarios([...comentarios, comentarioAdicionado]);
    setNovoComentario({ name: "", email: "", comment: "" });
  };

  const removerComentario = useCallback((id) => {
    setComentarios((prevComentarios) =>
      prevComentarios.filter((c) => c.id !== id)
    );
  }, []);

  return (
    <>
      <div className="app-container">
        <h1 className="app-title">Comment Feed</h1>

        <form className="comment-form" onSubmit={adicionarComentario}>
          <input
            className="form-input"
            type="text"
            name="name"
            value={novoComentario.name}
            onChange={preencherCampos}
            placeholder="Digite seu nome"
            required
          />

          <input
            className="form-input"
            type="email"
            name="email"
            value={novoComentario.email}
            onChange={preencherCampos}
            placeholder="Digite seu email"
            required
          />

          <textarea
            className="form-textarea"
            name="comment"
            rows={4}
            value={novoComentario.comment}
            onChange={preencherCampos}
            placeholder="Digite aqui seu comentário..."
            required
          />

          <button className="form-button" type="submit">
            Adicionar Comentário
          </button>
        </form>

        <div className="comments-list">
          {comentarios.map((comentario) => (
            <Comentario
              key={comentario.id}
              id={comentario.id}
              name={comentario.name}
              email={comentario.email}
              date={comentario.date}
              onRemove={removerComentario}
            >
              {comentario.comment}
            </Comentario>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
