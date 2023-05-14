import React, { useEffect } from "react";
import styles from "./ListaPortfolio.module.css";
import { Portfolio, deletePortfolio, getPortfolio } from "../../../services/portfolioService";
import { useNavigate } from "react-router-dom";

const ListaPortfolio: React.FC = () => {
   const navigate = useNavigate();

   const [portfolios, setPortfolios] = React.useState<Portfolio[]>([]);

   const fetchPortfolios = async () => {
      try {
         const portfolios = await getPortfolio();
         setPortfolios(portfolios);
      } catch (error) {
         console.log("Erro ao buscar experiências ", error);
      }
   };

   useEffect(() => {
      fetchPortfolios();
   }, []);

   const handleDelete = async (id: number) => {
      try {
         await deletePortfolio(id);
         fetchPortfolios();
         alert("Experiência excluída com sucesso!");
      } catch (error) {
         console.log(error);
         alert("Fala ao excluir o portfolio!");
      }
   };

   const handleEdit = async (portfolio: Portfolio) => {
      navigate("/portfolio/cadastro", { state: portfolio });
   };

   return (
      <table className={styles.table}>
         <thead>
            <tr>
               <th>Título</th>
               <th>Imagem</th>
               <th>Link</th>
               <th>Ações</th>
            </tr>
         </thead>
         <tbody>
            {portfolios.map((portfolio, index) => (
               <tr key={index}>
                  <td>{portfolio.titulo}</td>
                  <td>
                     <img src={portfolio.imagem} alt={portfolio.titulo} className={styles.image} />
                  </td>
                  <td>
                     <a href={portfolio.link} target="_blank" rel="noreferrer">
                        {portfolio.link}
                     </a>
                  </td>
                  <button onClick={() => handleEdit(portfolio)}>Editar</button>
                  <button onClick={() => handleDelete(portfolio.id)}>Excluir</button>
               </tr>
            ))}
         </tbody>
      </table>
   );
};

export default ListaPortfolio;
