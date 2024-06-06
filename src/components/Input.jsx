import "../styles/input.scss";

export default function Input({ labelText, handleInputChange, id }) {
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
      <input id={id} type={inputType} onChange={handleInputChange} />
    </div>
  );
}
