import "../styles/input.scss";

export default function Input({
  labelText,
  handleInputChange,
  id,
  inputAlert,
  value,
}) {
  let inputType;
  if (id === "phone") {
    inputType = "tel";
  }
  if (id === "email") {
    inputType = "email";
  }
  if (id === "name" || id === "address") {
    inputType = "text";
  }

  return (
    <div className="inputWrapper">
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type={inputType}
        onChange={handleInputChange}
        className={inputAlert && !value ? "inputAlert" : ""}
        required
      />
    </div>
  );
}

export function InputTextArea({ labelText, handleInputChange, id }) {
  return (
    <div className="inputWrapper">
      <label htmlFor={id}>{labelText}</label>
      <textarea
        id={id}
        onChange={handleInputChange}
        type="text"
        rows="5"
        cols="50"
      />
    </div>
  );
}
