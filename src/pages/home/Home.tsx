import { FaGraduationCap, FaBriefcase, FaFolder } from "react-icons/fa";
import InfoBox from "../../components/common/InfoBox";
import { Experiencia, getExperienciasByTipo } from "../../services/experienciaService";
import { useEffect, useState } from "react";
import { Portfolio, getPortfolio } from "../../services/portfolioService";
import styles from "./Home.module.css";

const Home = () => {
   const [experienciasAcademicas, setExperienciasAcademicas] = useState<Experiencia[]>([]);
   const [experienciasProfissionais, setExperienciasProfissionais] = useState<Experiencia[]>([]);
   const [portfolio, setPortfolio] = useState<Portfolio[]>([]);

   const fetchExperienciasAcademicas = async () => {
      try {
         const response = await getExperienciasByTipo("academico");
         setExperienciasAcademicas(response);
      } catch (error) {
         console.log(error);
      }
   };

   const fetchExperienciasProfissionais = async () => {
      try {
         const response = await getExperienciasByTipo("profissional");
         setExperienciasProfissionais(response);
      } catch (error) {
         console.log(error);
      }
   };

   const fetchPortfolio = async () => {
      try {
         const response = await getPortfolio();
         setPortfolio(response);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchExperienciasAcademicas();
      fetchExperienciasProfissionais();
      fetchPortfolio();
   }, []);

   return (
      <main className={styles.container}>
         <h1>Bem-vindo ao nosso site!</h1>
         <p>Esta é a página inicial. Navegue pelo menu na barra lateral para explorar outras seções.</p>

         <div className={styles.infoBoxContainer}>
            <InfoBox
               title="Experiências Acadêmicas"
               value={experienciasAcademicas.length}
               icon={<FaGraduationCap size={65} />}
            />
            <InfoBox
               title="Experiências Profissionais"
               value={experienciasProfissionais.length}
               icon={<FaBriefcase />}
            />
            <InfoBox title="Projetos no Portfolio" value={portfolio.length} icon={<FaFolder />} />
         </div>
      </main>
   );
};

export default Home;
