import Register from "../Register/Register";

export default function InfoTooltip() {
  return (
    <form className="popup__form popup__form-infoTooltip-register">
      <img
        className="popup__image-infoTooltip-register"
        src={Register}
        alt="icone register"
      />
      <p className="popup__message-infoTooltip">
        xx -- nome -- xx ! Você precisa se registrar.
      </p>
    </form>
  );
}
