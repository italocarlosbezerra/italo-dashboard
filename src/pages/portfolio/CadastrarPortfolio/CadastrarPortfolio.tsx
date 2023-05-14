import { Formik, Form } from "formik";
import styles from "./CadastrarPortfolio.module.css";

import * as Yup from "yup";
import Input from "../../../components/forms/Input";
import { Portfolio, createPortfolio } from "../../../services/portfolioService";
import { useNavigate } from "react-router-dom";

const CadastrarPortfolio: React.FC = () => {
   const navigate = useNavigate();

   const initialValues: Portfolio = {
      id: 0,
      titulo: "",
      imagem: "",
      link: "",
   };

   const validationSchema = Yup.object().shape({
      titulo: Yup.string().required("Campo obrigatório"),
      imagem: Yup.string().required("Campo obrigatório"),
      link: Yup.string().required("Campo obrigatório"),
   });

   const onSubmit = async (values: Portfolio, { resetForm }: { resetForm: () => void }) => {
      try {
         await createPortfolio(values);
         console.log(values);
         resetForm();
         navigate("/portfolio/listagem");
         alert("Formulário enviado com sucesso!");
      } catch (error) {
         console.log(error);
         alert("Ocorreu um erro ao enviar o formulário");
      }
   };

   return (
      <div className={styles.formWrapper}>
         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched }) => (
               <Form className={styles.form}>
                  <h2 className={styles.title}>Cadastro de Portfólio</h2>
                  <Input label="Link" name="link" errors={errors.link} touched={touched.link} />
                  <Input label="Imagem" name="imagem" errors={errors.imagem} touched={touched.imagem} />
                  <Input label="Título" name="titulo" errors={errors.titulo} touched={touched.titulo} />

                  <button type="submit" className={styles.button}>
                     Enviar
                  </button>
               </Form>
            )}
         </Formik>
      </div>
   );
};

export default CadastrarPortfolio;
