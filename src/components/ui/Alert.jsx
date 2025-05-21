export default function Alert({ textColor, bgColor, children }) {
  if (!children)
    return (
      <div className={`alert alert-red alert-bg-red`}>
        Si è verificato un errore!
      </div>
    );
  return (
    <div
      className={`alert alert-${textColor || "red"} alert-${bgColor || "red"} `}
    >
      {children}
    </div>
  );
}
