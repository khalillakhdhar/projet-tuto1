import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
function Login() {
 const initialValues={
    email:"",
    motDePasse:""
 };
 const validationSchema=Yup.object(
    {
        email:Yup.string().email("Email invalide")
        .required("Champ requis"),
        motDePasse:Yup.string().required("Champ requis")
        .length(8,"Le mot de passe doit contenir au moins 6 caractères")
    }

 )
 const onSubmit=(values: unknown)=>{
    console.log("Form data",values)
 }


  return (
    <div>
<div className="container text-center">
  <div className="row">
    <div className="col">
      
    </div>
    <div className="col">
      <h2>Connexion</h2>
      <Formik initialValues={initialValues}
      validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <Field type="email" className="form-control" id="email" name="email" />
            <br></br>
            <ErrorMessage name="email" component="div" className="alert alert-danger" />

</div>
<div className="mb-3">
            <label htmlFor="motDePasse" className="form-label">Mot de passe</label>
            <Field type="password" className="form-control" id="motDePasse" name="motDePasse" />
            <br></br>
            <ErrorMessage name="motDePasse" component="div" className="alert alert-danger" />

</div>
<br></br>
<button type="submit" className="btn btn-primary">Connexion</button>
<br /><br />
            <a href="signup">S'inscrire</a>
      
            </Form>
            </Formik>
    </div>
    <div className="col">
      
    </div>
  </div>
</div>


    </div>
  )
}

export default Login