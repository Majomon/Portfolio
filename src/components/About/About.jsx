function About() {
  return (
    <div className="About">
      <div className="w-11/12">
        <h2 className="text-center text-yellow-400 text-6xl pb-6">Sobre mí</h2>
        <p>
          <span>Hola, soy Mauricio Monzón.</span> Un desarrollador Full Stack.
          Poseo habilidades en trabajo en equipo, resolución de problemas y
          conocimientos en tecnologías como React, Redux, Express, Sequelize y
          PostgreSQL entre otras. Me encantan el mundo de la programación,
          resolver situaciones, aprender y tomar nuevos desafíos.
        </p>
      </div>
      <div className="w-11/12 flex justify-around py-6">
        <div>
          <h3>Datos Personales</h3>
        </div>
        <div>
          <h3>Intereses</h3>
        </div>
      </div>
    </div>
  );
}

export default About;
