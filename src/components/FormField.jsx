export default function FormField({ label, name, error, children }) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      {children}
      <p className="error">{error}</p>
    </div>
  );
}
