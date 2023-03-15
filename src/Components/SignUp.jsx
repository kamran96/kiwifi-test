import React, { useState } from "react";
import { Link } from "react-router-dom";
import kiwiLogo from "../assets/KiwiLogo.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    confrimEmail: "",
    password: "",
  });
  const [emailValidate, setEmailValidate] = useState(null);
  const [passwordValidate, setPasswordValidate] = useState(null);
  const [confrimEmailValidate, SetConfrimEmailValidate] = useState(null);
  const [terms, setTerms] = useState(false);
  const [termsValidation, setTermsValidation] = useState(false);
  const handleEmail = (e) => {
    const email = e.target.value;
    setFormData({ ...formData, email: email });
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailValidate("Esse campo é obrigatório");
    } else if (!emailPattern.test(email)) {
      setEmailValidate("e-mail deve ser válido");
    } else {
      setEmailValidate("");
    }
  };
  const handleConfrimEmail = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, confrimEmail: value });
    if (value !== formData.email) {
      SetConfrimEmailValidate(
        "Os dois e-mails devem ser iguais. Esse campo é obrigatório"
      );
    } else {
      SetConfrimEmailValidate("");
    }
  };
  const handlePassword = (e) => {
    const password = e.target.value;
    setFormData({ ...formData, password: password });
    if (!password) {
      setPasswordValidate("Esse campo é obrigatório");
    } else {
      setPasswordValidate("");
    }
  };
  const handleTerms = (e) => {
    setTerms(!terms);
    if (terms) {
        setTermsValidation("(Esse campo é obrigatório)");
    }else{
        setTermsValidation("")
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "") {
      setEmailValidate("e-mail deve ser válido");
    }
    if (formData.confrimEmail === "") {
      SetConfrimEmailValidate(
        "Os dois e-mails devem ser iguais. Esse campo é obrigatório"
      );
    }
    if (formData.password === "") {
      setPasswordValidate("Esse campo é obrigatório");
    }
    if (terms == false) {
      setTermsValidation("(Esse campo é obrigatório)");
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col bg-white shadow-xl px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-5">
          <img src={kiwiLogo} alt="" className="mx-auto h-12 w-auto" />
        </div>
        <div className="font-bold self-center text-xl sm:text-2xl text-gray-800">
            Criar nova conta
        </div>
        <div className="mt-4">
          <p className="text-center text-lg">
            Ou{" "}
            <Link to="/" className="text-[#5850ec]">
              entrar na sua conta existente
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
                for="email"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Repetir e-mail
              </label>
              <div className="relative">
                <input
                  onChange={(e) => handleConfrimEmail(e)}
                  onBlur={handleConfrimEmail}
                  id="email"
                  type="email"
                  name="confrimEmail"
                  className={`form-input block py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                    confrimEmailValidate ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <div className={`text-xs text-red-500 mt-2`}>
                  {confrimEmailValidate && confrimEmailValidate}
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
              <div>
                <input
                  type="checkbox"
                  name="agreed"
                  checked={terms}
                  id=""
                  className={`mr-4 mt-4 rounded-full border-red-600 accent-[#5850ec] focus:rounded-full text-red-600 ${!terms &&  "focus:ring-red-500 focus:ring-1"}`}
                  onChange={handleTerms}
                />
                
                <span className="font-medium text-gray-700 text-sm">
                  Eu li e aceito os{" "}
                  <span className="underline">termos de uso</span>,{" "}
                  <span className="underline">
                    termos de licença de uso de software
                  </span>{" "}
                  , <span className="underline">política de conteúdo</span> da
                  Kiwify
                </span>
                <br />
                <span className="text-red-500 border-b-0">
                  {termsValidation}
                </span>
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#5850ec] hover:bg-[#6c65f8] focus:outline-none focus:border-bg-[#5850ec] focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                <span className="mr-2">Criar conta</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
