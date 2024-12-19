import bienestar from "../../assets/yoga.png";
import gaming from "../../assets/gaming.png";
import viaje from "../../assets/viajes.png";
import crypto from "../../assets/crypto.png";

function About() {
  return (
    <div className="About">
      <div className="w-10/12 md:w-5/12 flex flex-col justify-center">
        <h2 className="w-64 text-center text-yellow-400 dark:text-yellow-400 text-5xl pb-2 mb-6 mx-auto border-b-4 border-yellow-400">
          Sobre mí
        </h2>
        <p className="text-lg">
          Hola, mi nombre es{" "}
          <span className="text-yellow-400">Mauricio Monzón</span>, soy
          Desarrollador Web Full Stack y Desarrollador Mobile. Me gusta crear
          soluciones eficientes y afrontar nuevos desafíos. Con experiencia en
          tecnologías como React, Nextjs, Redux, Zustand, Express, Nestjs,
          Mongodb, PostgreSQL, React native Cli y Expo.
        </p>
      </div>
      <div className="w-10/12 md:w-9/12 flex flex-col py-8 lg:flex-row">
        <div className="w-full mx-auto my-10 lg:w-1/2 flex flex-col lg:mr-10">
          <h2 className="text-center lg:text-left text-yellow-400 dark:text-yellow-400 text-3xl pb-6">
            Datos Personales
          </h2>
          <div className="w-full  mx-auto h-auto flex flex-col md:w-full">
            <div className="w-full my-4 flex flex-col justify-between lg:flex-row lg:my-0 lg:items-center">
              <h3 className="w-6/12 my-2 text-xl md:text-2xl">Teléfono: </h3>
              <p className="text-xl md:text-lg">+54 9 1138612819</p>
            </div>
            <div className="w-full my-4 flex flex-col justify-between lg:flex-row lg:my-0 lg:items-center">
              <h3 className="w-6/12 my-2 text-xl md:text-2xl">Email: </h3>
              <p className="text-xl md:text-lg">mauri.monzon91@gmail.com</p>
            </div>
            <div className="w-full my-4 flex flex-col justify-between lg:flex-row lg:my-0 lg:items-center">
              <h3 className="w-6/12 my-2 text-xl md:text-2xl">Dirección: </h3>
              <p className="text-xl md:text-lg">Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto my-10 lg:w-1/2 flex flex-col lg:ml-20">
          <h3 className="text-center lg:text-left text-yellow-400 dark:text-yellow-400 text-3xl pb-6">
            Intereses
          </h3>
          <div className="w-full md:w-10/12 h-auto grid grid-cols-2 lg:grid-cols-4 gap-8 mx-auto my-auto">
            <div className="flex flex-col justify-center items-center py-4">
              <img
                src={bienestar}
                className="w-[90px] h-[90px] lg:w-[60px] lg:h-[60px]"
              />
              <h4>Yoga</h4>
            </div>
            <div className="flex flex-col justify-center items-center py-4">
              <img
                src={viaje}
                className="w-[90px] h-[90px] lg:w-[60px] lg:h-[60px]"
              />
              <h4>Viajes</h4>
            </div>
            <div className="flex flex-col justify-center items-center py-4">
              <img
                src={gaming}
                className="w-[90px] h-[90px] lg:w-[60px] lg:h-[60px]"
              />
              <h4>Gaming</h4>
            </div>
            <div className="flex flex-col justify-center items-center py-4">
              <img
                src={crypto}
                className="w-[90px] h-[90px] lg:w-[60px] lg:h-[60px]"
              />
              <h4>Cryptos</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
