import { useEffect, useState } from "react";
import "./App.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Button } from "./Components/Button";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userSubmit = (data) => {
    console.log(data);
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    localStorage.setItem("token", token);
    setIsLogged(true);
    navigate("/");
  };

  const hambMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Button className="text-rose-500">Click me! </Button>
      <Button variant="primaryOutline">Click me! </Button>
      <Button>Click me! </Button>
      <nav className="flex items-center justify-between bg-dark-blue p-4">
        <img
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          alt=""
        />
        {isLogged && (
          <div className="lg:hidden">
            <button
              className="bg-cyan-800 p-2 text-white"
              onClick={hambMenuHandler}
            >
              <RxHamburgerMenu width={50} height={50} />
            </button>
          </div>
        )}
        {isLogged && (
          <ul className="hidden items-center justify-between gap-4 text-white lg:flex">
            <li>
              <a href="">Link 1</a>
            </li>
            <li>
              <a href="">Link 2</a>
            </li>
            <li>
              <a href="">Link 3</a>
            </li>
            <li>
              <a href="">Link 4</a>
            </li>
          </ul>
        )}
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="mx-auto mt-4 w-3/4 p-4">
                <form
                  onSubmit={handleSubmit(userSubmit)}
                  action=""
                  className="mt-4 rounded-lg border bg-dark-blue p-4"
                >
                  <div className="mb-4 flex flex-col gap-4">
                    <label htmlFor="" className="text-white">
                      Email
                    </label>
                    <input
                      type="text"
                      className="rounded-lg border border-white bg-white px-4 py-2"
                      {...register("email")}
                    />
                  </div>
                  <div className="mb-4 flex flex-col gap-4">
                    <label htmlFor="" className="text-white">
                      Password
                    </label>
                    <input
                      type="text"
                      className="rounded-lg border border-white bg-white px-4 py-2"
                      {...register("password")}
                    />
                  </div>
                  <button className="mt-4 rounded-lg border border-green-500 bg-green-500 px-4 py-2 text-white hover:bg-green-300 hover:text-slate-500">
                    Log In
                  </button>
                </form>
              </div>
            </>
          }
        />
        <Route path="/home" element={<Home />} />
      </Routes>

      {isMenuOpen && (
        <ul className="fixed left-0 top-0 z-50 h-screen h-screen w-9/12 overflow-y-scroll rounded-lg border border-slate-800 bg-white p-4">
          <li>
            <a href="">Link 1</a>
          </li>
          <li>
            <a href="">Link 2</a>
          </li>
          <li>
            <a href="">Link 3</a>
          </li>
          <li>
            <a href="">Link 4</a>
          </li>
          <li>
            <a href="">Link 1</a>
          </li>
          <li>
            <a href="">Link 2</a>
          </li>
          <li>
            <a href="">Link 3</a>
          </li>

          <li>
            <a href="">Link 1</a>
          </li>
          <li>
            <a href="">Link 2</a>
          </li>
          <li>
            <a href="">Link 3</a>
          </li>
          <li>
            <a href="">Link 4</a>
          </li>
          <li>
            <a href="">Link 1</a>
          </li>
          <li>
            <a href="">Link 2</a>
          </li>
          <li>
            <a href="">Link 3</a>
          </li>
          <li>
            <a href="">Link 4</a>
          </li>
          <li>
            <a href="">Link 1</a>
          </li>
          <li>
            <a href="">Link 2</a>
          </li>
          <li>
            <a href="">Link 3</a>
          </li>
          <li>
            <a href="">Link 4</a>
          </li>
          <li>
            <a href="">Link 1</a>
          </li>
          <li>
            <a href="">Link 2</a>
          </li>
          <li>
            <a href="">Link 3</a>
          </li>
          <li>
            <a href="">Link 4</a>
          </li>
          <li>
            <a href="">Link 1</a>
          </li>
          <li>
            <a href="">Link 2</a>
          </li>
          <li>
            <a href="">Link 3</a>
          </li>
          <li>
            <a href="">Link 4</a>
          </li>
          <li>
            <a href="">Link 1</a>
          </li>
          <li>
            <a href="">Link 2</a>
          </li>
          <li>
            <a href="">Link 3</a>
          </li>
          <li>
            <a href="">Link 4</a>
          </li>
          <li>
            <a href="">Link 1</a>
          </li>
          <li>
            <a href="">Link 2</a>
          </li>
          <li>
            <a href="">Link 3</a>
          </li>
          <li>
            <a href="">Link 4</a>
          </li>
          <li>
            <a href="">Link 1</a>
          </li>
          <li>
            <a href="">Link 2</a>
          </li>
          <li>
            <a href="">Link 3</a>
          </li>
          <li>
            <a href="">Link 4</a>
          </li>
          <li>
            <a href="">Link 1</a>
          </li>
          <li>
            <a href="">Link 2</a>
          </li>
          <li>
            <a href="">Link 3</a>
          </li>
          <li>
            <a href="">Link 4</a>
          </li>
        </ul>
      )}
      {isMenuOpen && (
        <div className="fixed left-0 top-0 h-screen w-screen bg-black bg-opacity-50"></div>
      )}
    </>
  );
}

export default App;
