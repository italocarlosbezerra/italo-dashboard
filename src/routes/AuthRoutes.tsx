import Layout from "../components/layout";

import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import CadastrarInformacoes from "../pages/curriculo/CadastrarInformacoes";
import CadastrarExperiencia from "../pages/curriculo/CadastrarExperiencia";
import ListaPortfolio from "../pages/portfolio/ListaPortfolio";
import CadastrarPortfolio from "../pages/portfolio/CadastrarPortfolio";
import ListaExperiencia from "../pages/curriculo/ListaExperiencia";
import { useAuth } from "../contexts/AuthContext";

const AppRoutes: React.FC = () => {
   const { authenticated, isLoading } = useAuth();

   if (isLoading) {
      return <h1>Carregando...</h1>;
   }

   if (!authenticated) {
      return <Navigate to="/login" />;
   }

   return (
      <Layout>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curriculo/informacoes/cadastro" element={<CadastrarInformacoes />} />
            <Route path="/curriculo/experiencia/cadastro" element={<CadastrarExperiencia />} />
            <Route path="/portfolio/listagem" element={<ListaPortfolio />} />
            <Route path="/portfolio/cadastro" element={<CadastrarPortfolio />} />
            <Route path="/curriculo/experiencia/lista" element={<ListaExperiencia />} />
         </Routes>
      </Layout>
   );
};

export default AppRoutes;
