import anime from "../../assets/anime.png";
import gaming from "../../assets/gaming-pc.png";
import viaje from "../../assets/viajes.png";

function About() {
  return (
    <div className="About">
      <div className="w-10/12">
        <h2 className="w-72 text-center text-yellow-400 dark:text-yellow-400 text-5xl pb-2 mb-6 mx-auto border-b-4 border-yellow-400">
          Sobre mí
        </h2>
        <p>
          <span className="text-yellow-400 dark:text-yellow-400 text-left">
            Hola, mi nombre es Mauricio Monzón.
          </span>
          Soy un desarrollador Full Stack. Poseo habilidades en trabajo en
          equipo, resolución de problemas y conocimientos en tecnologías como
          React, Redux, Express, Sequelize y PostgreSQL entre otras. Me encantan
          el mundo de la programación, resolver situaciones, aprender y tomar
          nuevos desafíos.
        </p>
      </div>
      <div className="w-10/12 flex flex-col py-8 justify-start lg:flex-row">
        <div className="w-11/12 mx-auto my-10 lg:w-1/2 flex flex-col lg:mr-10">
          <h2 className="text-center lg:text-left text-yellow-400 dark:text-yellow-400 text-3xl pb-6">
            Datos Personales
          </h2>
          <div className="w-11/12  mx-auto h-auto flex flex-col md:w-full">
            <div className="w-full my-4 flex flex-col justify-between md:flex-row md:my-0">
              <h3 className="w-6/12 my-2 text-3xl md:text-xl">Teléfono</h3>
              <p className="text-2xl md:text-xl">+54 9 1138612819</p>
            </div>
            <div className="w-full my-4 flex flex-col justify-between md:flex-row md:my-0">
              <h3 className="w-6/12 my-2 text-3xl md:text-xl">Email</h3>
              <p className="text-2xl md:text-xl">mauri.monzon91@gmail.com</p>
            </div>
            <div className="w-full my-4 flex flex-col justify-between md:flex-row md:my-0">
              <h3 className="w-6/12 my-2 text-3xl md:text-xl">Dirección</h3>
              <p className="text-2xl md:text-xl">Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto my-10 lg:w-1/2 flex flex-col lg:mr-10">
          <h3 className="text-center lg:text-left text-yellow-400 dark:text-yellow-400 text-3xl pb-6">
            Intereses
          </h3>
          <div className="w-full lg:w-8/12 h-auto flex justify-between mx-auto my-auto">
            <div className="flex flex-col justify-center items-center">
              <img
                src={anime}
                className="w-[110px] h-[110px] lg:w-[60px] lg:h-[60px]"
              />
              <h4>Anime</h4>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={viaje}
                className="w-[110px] h-[110px] lg:w-[60px] lg:h-[60px]"
              />
              <h4>Viajes</h4>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={gaming}
                className="w-[110px] h-[110px] lg:w-[60px] lg:h-[60px]"
              />
              <h4>Gaming</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
