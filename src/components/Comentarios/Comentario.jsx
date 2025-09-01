import userAvatar from "../../assets/images/user.png";
import "../../styles/Comentario.css";

const formatarData = (date) => {
  if (!date) return "";
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);
};

const Comentario = ({ id, name, email, date, children, onRemove }) => {
  return (
    <div className="comentario-container">
      <img
        className="comentario-avatar"
        src={userAvatar}
        alt={`Avatar de ${name}`}
      />
      <div className="comentario-header">
        <h3 className="comentario-name">{name}</h3>
        <button
          className="comentario-remove-button"
          onClick={() => onRemove(id)}
        >
          &times;
        </button>
      </div>
      <p className="comentario-email">{email}</p>
      <p className="comentario-content">{children}</p>
      <p className="comentario-date">{formatarData(date)}</p>
    </div>
  );
};

export default Comentario;
