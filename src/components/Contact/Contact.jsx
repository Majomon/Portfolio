import { useRef, useState } from "react";
import Lottie from "lottie-react";
import contactAnimation from "../../assets/animations/contact.json";
import { validation } from "../../utils/validations";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const form = useRef();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors(
      validation({
        ...formData,
        [name]: value,
      })
    );
  };

  const sendEmail = async (event) => {
    event.preventDefault();

    const existingErrors = Object.values(errors).some(
      (value) => value.trim().length !== 0
    );
    if (existingErrors) {
      toast.error("All fields are required.");
      return;
    }

    try {
      const response = await fetch(
        "https://porfolio-back.vercel.app/resendEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      toast.success("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again later.");
    }
  };

  return (
    <div className="Contact">
      <Toaster position="bottom-center"/>
      <div className="w-full flex flex-col items-center justify-center text-center">
        <h2 className="w-48text-center text-yellow-400 dark:text-yellow-300 text-5xl pb-2 mb-6 mx-auto border-b-4 border-yellow-400">
          Contactame
        </h2>
        <h4 className="pb-8">
          Si desea ponerse en contacto conmigo, estaré encantado de recibir su
          mensaje.
        </h4>
      </div>
      <div className="w-full block lg:flex rounded-lg p-6 bg-yellow-300 dark:bg-slate-700 border-2 border-slate-200">
        <div className="w-1/2 pr-4 hidden lg:flex flex-col justify-between rounded-l-lg">
          <h1 className="text-center pb-2 dark:text-yellow-300">
            Información de contacto
          </h1>
          <div className="flex py-2	space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-phone-filled text-black dark:text-white"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z"
                strokeWidth="0"
                fill="currentColor"
              />
            </svg>
            <p>Teléfono: </p>
            <span>+54 9 1138612819</span>
          </div>
          <div className="flex py-2	space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-mail-filled text-black dark:text-white"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"
                strokeWidth="0"
                fill="currentColor"
              />
              <path
                d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
                strokeWidth="0"
                fill="currentColor"
              />
            </svg>
            <p>Email: </p>
            <span>mauri.monzon91@gmail.com</span>
          </div>
          <div className="flex py-2	space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-map-pin-filled text-black dark:text-white"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                strokeWidth="0"
                fill="currentColor"
              />
            </svg>
            <p>Dirección: </p>
            <span className="flex justify-start">
              Gregorio de laferrere , Buenos aires, Argentina
            </span>
          </div>
          <Lottie
            animationData={contactAnimation}
            speed={0.5}
            className="w-96 h-72 relative left-0"
          />
        </div>
        <div className="w-full lg:w-1/2 p-6 rounded-lg bg-white dark:bg-slate-800">
          <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col mb-4">
              <label className="text-xl mb-1" htmlFor="name">
                Nombre completo
              </label>
              <input
                onChange={handleChange}
                value={formData.name}
                className={`rounded-lg border p-2 ${
                  errors.name && "outline-red-600"
                }`}
                type="text"
                name="name"
                placeholder="Luna Herrera"
              />
              {errors.name && (
                <span className="text-red-600 dark:text-red-600">
                  {errors.name}
                </span>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-xl mb-1" htmlFor="email">
                Email
              </label>
              <input
                onChange={handleChange}
                value={formData.email}
                className={`rounded-lg border p-2 ${
                  errors.email && "outline-red-600"
                }`}
                type="text"
                name="email"
                placeholder="luna@gmail.com"
              />
              {errors.email && (
                <span className="text-red-600 dark:text-red-600">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-xl mb-1" htmlFor="message">
                Mensaje
              </label>
              <textarea
                onChange={handleChange}
                value={formData.message}
                className={`rounded-lg border p-2 overflow-auto resize-none ${
                  errors.message && "outline-red-600"
                }`}
                name="message"
                rows="5"
                placeholder="Ingresa tu mensaje..."
              ></textarea>
              {errors.message && (
                <span className="text-red-600 dark:text-red-600">
                  {errors.message}
                </span>
              )}
            </div>
            <button
              className="w-24 flex items-center justify-between bg-yellow-400 hover:bg-spring-green-700 rounded-xl p-2 cursor-pointer"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-send stroke-black dark:stroke-white"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 14l11 -11" />
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
              </svg>
              <span className="w-full">Enviar</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
