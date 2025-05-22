export default function Alert({ type, children }) {
  if (!children)
    return (
      <div className={`alert alert-danger`}>Si è verificato un errore!</div>
    );
  return <div className={`alert alert-${type || "danger"}`}>{children}</div>;
}
