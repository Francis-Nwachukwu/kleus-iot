const Card = ({ children }) => {
  return (
    <div className="bg-white border-t-4 border-[#1976d2] p-4 flex flex-col gap-4">
      {children}
    </div>
  );
};

export default Card;
