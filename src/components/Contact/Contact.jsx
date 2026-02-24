import { useRef, useState } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import contactAnimation from "../../assets/animations/contact.json";
import { validation } from "../../utils/validations";
import { toast } from "react-hot-toast";

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
      }),
    );
  };

  const sendEmail = async (event) => {
    event.preventDefault();

    const existingErrors = Object.values(errors).some(
      (value) => value.trim().length !== 0,
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
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send email");
      }
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      toast.success("En breve te respondere. Gracias por contactarte!");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again later.");
    }
  };

  return (
    <section
      id="Contact"
      className="py-24 bg-white dark:bg-[#0b1120] transition-colors duration-500 relative"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Hablemos de tu <span className="text-yellow-400">Próxima Idea</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="section-subtitle"
          >
            Si tienes un proyecto en mente o simplemente quieres saludar, estaré
            encantado de escucharte.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Información de <span className="text-yellow-400">Contacto</span>
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: "phone-filled",
                    label: "Teléfono",
                    value: "+54 9 1138612819",
                    color: "text-green-500",
                  },
                  {
                    icon: "mail-filled",
                    label: "Email",
                    value: "mauri.monzon91@gmail.com",
                    color: "text-blue-500",
                  },
                  {
                    icon: "map-pin-filled",
                    label: "Ubicación",
                    value: "Buenos Aires, Argentina",
                    color: "text-red-500",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 glass-card flex items-center justify-center group-hover:border-yellow-400 transition-all">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`icon icon-tabler icon-tabler-${item.icon} ${item.color}`}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        {item.icon === "phone-filled" && (
                          <path
                            d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z"
                            strokeWidth="0"
                            fill="currentColor"
                          />
                        )}
                        {item.icon === "mail-filled" && (
                          <>
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
                          </>
                        )}
                        {item.icon === "map-pin-filled" && (
                          <path
                            d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                            strokeWidth="0"
                            fill="currentColor"
                          />
                        )}
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        {item.label}
                      </p>
                      <span className="text-slate-900 dark:text-white font-bold">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <Lottie
                animationData={contactAnimation}
                speed={0.5}
                className="w-full max-w-sm h-auto opacity-80"
              />
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-7/12"
          >
            <div className="glass-card p-8 md:p-12">
              <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
                      htmlFor="name"
                    >
                      Nombre
                    </label>
                    <input
                      onChange={handleChange}
                      value={formData.name}
                      autoComplete="name"
                      className={`bg-slate-50 dark:bg-slate-900/50 border ${errors.name ? "border-red-500" : "border-slate-200 dark:border-slate-800"} rounded-2xl p-4 focus:border-yellow-400 outline-none transition-all dark:text-white`}
                      type="text"
                      name="name"
                      placeholder="Tu nombre completo"
                    />
                    {errors.name && (
                      <span className="text-xs font-bold text-red-500 italic">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
                      htmlFor="email"
                    >
                      Tu Email
                    </label>
                    <input
                      onChange={handleChange}
                      value={formData.email}
                      autoComplete="email"
                      className={`bg-slate-50 dark:bg-slate-900/50 border ${errors.email ? "border-red-500" : "border-slate-200 dark:border-slate-800"} rounded-2xl p-4 focus:border-yellow-400 outline-none transition-all dark:text-white`}
                      type="email"
                      name="email"
                      placeholder="hola@ejemplo.com"
                    />
                    {errors.email && (
                      <span className="text-xs font-bold text-red-500 italic">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
                    htmlFor="message"
                  >
                    Mensaje
                  </label>
                  <textarea
                    onChange={handleChange}
                    value={formData.message}
                    className={`bg-slate-50 dark:bg-slate-900/50 border ${errors.message ? "border-red-500" : "border-slate-200 dark:border-slate-800"} rounded-2xl p-4 focus:border-yellow-400 outline-none transition-all dark:text-white min-h-[160px] resize-none`}
                    name="message"
                    rows="5"
                    placeholder="Cuéntame sobre tu proyecto..."
                  ></textarea>
                  {errors.message && (
                    <span className="text-xs font-bold text-red-500 italic">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  className="btn-primary w-full py-5 flex items-center justify-center gap-3 text-lg"
                  type="submit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-send"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 14l11 -11" />
                    <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                  </svg>
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
