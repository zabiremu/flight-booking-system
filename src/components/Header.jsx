import logo from "../assets/img/lws-logo.svg";
const Header = () => {
  return (
    <>
      <header id="header">
        <div className="container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-6lcJLXZac6GC90dCTJWrdMX41qqcbvWmw&usqp=CAU"
            alt="logo"
            className=""
            width="80"
          />
          <div className="flex items-center">
            <a className="text-white min-w-[50px] font-medium" href="#">
              Home
            </a>
            <button className="log-btn btn">Login</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
