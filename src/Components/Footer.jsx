const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-customBlue w-full absolute bottom-0">
      <div className="flex flex-col items-center w-full h-[100px] text-center justify-center">
        <h4 className="bg-customBlue p-2">
          © {year} Celebrare, Inc. All rights reserved.
        </h4>
      </div>
    </div>
  );
};

export default Footer;
