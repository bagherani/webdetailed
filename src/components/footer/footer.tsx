export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-700 p-4">
      <div className="container mx-auto text-center">
        <p className="text-white">© {year} WebDetailed</p>
      </div>
    </footer>
  );
};
