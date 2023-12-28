const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-customBlue items-center">
        <h2> Celebrare</h2>

        <div>
          <ul className="flex p-3 bg-customBlue">
            <li className="p-2">
              <h1>Home</h1>
            </li>
            <li className="p-2 ">
              <h1>About</h1>
            </li>
            <li className="p-2">
              <h1>Contact</h1>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
