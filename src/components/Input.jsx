import "../styles/input.scss";

export default function Input({ labelText }) {
  return (
    <div className="inputWrapper">
      <label htmlFor="">{labelText}</label>
      <input type="text" />
    </div>
  );
}
