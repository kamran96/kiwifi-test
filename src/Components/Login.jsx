import React, { useState } from "react";
import { Link } from "react-router-dom";
import kiwiLogo from "../assets/KiwiLogo.png";

const Login = () => {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });
  const [emailValidate, setEmailValidate] = useState(null);
  const [passwordValidate, setPasswordValidate] = useState(null);
  const handleEmail = (e) => {
    const email = e.target.value;
    setformdata((prev) => ({
      ...prev,
      email,
    }));
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailValidate("Esse campo é obrigatório");
    } else if (!emailPattern.test(email)) {
      setEmailValidate("O e-mail deve ser válido");
    } else {
      setEmailValidate("");
    }
  };
  const handlePassword = (e) => {
    const password = e.target.value;
    setformdata((prev) => ({
      ...prev,
      password,
    }));
    if (!password) {
      setPasswordValidate("Esse campo é obrigatório");
    } else {
      setPasswordValidate("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formdata.email === "") {
      setEmailValidate("Esse campo é obrigatório");
    }
    if (formdata.password === "") {
      setPasswordValidate("Esse campo é obrigatório");
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col bg-white shadow-xl px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full md:max-w-md">
        <div className="flex justify-center mb-5">
          <img src={kiwiLogo} alt="" className="mx-auto h-12 w-auto" />
        </div>
        <div className="font-bold self-center text-xl sm:text-2xl text-gray-800">
          Entrar na sua conta
        </div>
        <div className="mt-4">
          <p className="text-center text-lg">
            Ou{" "}
            <Link to="/sign-up" className="text-[#5850ec]">
              fazer cadastro
            </Link>
          </p>
        </div>
        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-6">
              <label
                for="email"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                E-Mail
              </label>
              <div className="relative">
                <input
                  onChange={(e) => handleEmail(e)}
                  onBlur={handleEmail}
                  id="email"
                  type="email"
                  name="email"
                  className={`form-input block py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                    emailValidate ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <div className={`text-xs text-red-500 mt-2`}>
                  {emailValidate && emailValidate}
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                for="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Senha
              </label>
              <div className="relative">
                <input
                  onChange={handlePassword}
                  onBlur={handlePassword}
                  id="password"
                  type="password"
                  name="password"
                  className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                    passwordValidate ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <div className={`text-xs text-red-500 mt-2`}>
                  {passwordValidate && passwordValidate}
                </div>
              </div>
            </div>

            <div className="flex items-center mb-6 -mt-4">
              <div className="flex ml-auto">
                <a
                  href="#"
                  className="inline-flex text-xs sm:text-sm text-[#6875f5] hover:text-[#6875f5]"
                >
                  Esqueceu a senha?
                </a>
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#5850ec] hover:bg-[#665ff5] focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                <span className="mr-2 uppercase">Entrar</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
