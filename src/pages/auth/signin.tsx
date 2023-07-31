import { useState, useCallback, ChangeEvent, FormEvent } from "react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

export default function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const context = api.useContext();

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await context.auth.signin.fetch(formData);
      if (response.token) {
        // Login successful, save the token to local storage and redirect to profile page
        window.localStorage.setItem("token", response.token);
        // Redirect to profile page after successful login
        // Assuming you have div profile page at "/profile"
        window.location.href = "/profile";
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Login - Onomics</title>
        <meta name="description" content="Login Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="mx-auto rounded-xl  my-32 md:w-[450px] h-[440px] flex  justify-center bg-primary text-text-primary dark:bg-secondary-dark dark:text-text-primary-dark">
          <form className="flex flex-col justify-around font-light" onSubmit={handleSubmit}>
            <h1 className="flex justify-center mt-4 mb-6 text-xl">Войти в аккаунт</h1>
            <div className="flex flex-col">
              <label className="">Почта:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="px-2 py-1 mt-1 bg-secondary border-[1px] hover:bg-[#e5e5e5] duration-300 dark:bg-[#212121] dark:border-0 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="">Пароль:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="px-2 py-1 mt-1 bg-secondary border-[1px] hover:bg-[#e5e5e5] duration-300 dark:bg-[#212121] dark:border-0 rounded-md"
                required
              />
            </div>

            <div className="mb-4 flex text-sm justify-end">
              <Link href="#!">
                <p className="text-[#4c879a] hover:text-[#5fa9c1] dark:text-[#5fa9c1] dark:hover:text-[#4c879a] duration-150">Забыли пароль?</p>
              </Link>
            </div>

            <div className="flex flex-row justify-center ">
              <button
                type="submit"
                className="text-center text-white mt-3 mb-1 bg-[#5fa9c1] py-[5px] px-6 border-2 rounded-3xl border-[#5fa9c1] duration-[400ms] hover:bg-[#3f7081] hover:border-[#3f7081] active:bg-[#3f7081] active:border-[#3f7081]"
              >
                Войти
              </button>
            </div>
            <div className="flex flex-col justify-center items-center text-sm mb-2">
              <p>У вас ещё нет аккаунта?</p>
              <Link href="/auth/signup">
                <p className="text-[#4c879a] hover:text-[#5fa9c1] dark:text-[#5fa9c1] dark:hover:text-[#4c879a] duration-150">Зарегистрироваться</p>
              </Link>
            </div>
          </form>
        </div>
    </>
  );
}
