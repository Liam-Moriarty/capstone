const Button = ({ label, iconURL }) => {
  return (
    <button className={`button`}>
      {label}
      {iconURL}
    </button>
  );
};

export default Button;
