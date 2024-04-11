const Button = ({ label, iconURL, padding, text, border, color }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 font-poppins leading-none 
      font-bold dark:bg-cyber-blue bg-slate-blue max-sm:px-4 px-7 
      ${padding ? `${padding} ${text} ${border} ${color}` : "max-sm:py-2 py-4 rounded-full text-lg max-sm:text-base text-white-primary"}`}
    >
      {label}
      {iconURL}
    </button>
  );
};

export default Button;
