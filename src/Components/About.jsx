/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Sou Bacharel e Licenciado em Ciências Biológicas, Pós-graduado MBA em Perícia, Gestão e Auditoria Ambiental. Estive por 8 anos servindo o Exército Brasileiro e tive a oportunidade em participar de uma Missão de Paz das Nações Unidas no Haiti. Durante esse concluí a graduação, mesmo trancando por um ano para participar da missão no exterior. Tive a oportunidade de estar em sala de aula lecionando Física, Matemática em turmas do ensino fundamental, ensino médio e EJA. Trabalhei por onze meses (entre 2018 e 2019) na empresa Biopar (Biodiesel Parecis) como analista de laboratório, e apenas a deixando para assumir um novo desafio no serviço público. Hoje estou como Dirigente Municipal de Educação, Cultura, Esporte e Turismo, e busco constantemente inovar e tentar trazer cada vez mais melhorias para todo o município.
  "Sou totalmente adepto a inovação no ambiente de trabalho, tanto que busquei uma certificação Google For Education, e estou cursando nova graduação em Ciências de Dados.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "Data Science",
  "Trabalho em Equipe",
  "Ferramentas Digitais",
  "Educação Inclusiva",
  "Ciências",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
"Sou apaixonado por resolver problemas de novas maneiras criativas para impulsionar a inovação. Ao aproveitar minha experiência, procuro continuamente maneiras novas e melhores de tornar a tecnologia acessível a todos."
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
