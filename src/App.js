import './App.css';
// // import Navbar from './component/Navbar';
// import Compter from '../component/Compter'
// import ValidateForm from '../component/ValidateForm';
import Cherche from './Component/Cherche'
function App() {
  const data=[
    {nom:"banane",type:"fruit"},
    {nom:"orange",type:"fruit"},
    {nom:"pomme",type:"fruit"},
    {nom:"raisins",type:"fruit"},
    {nom:"kiwi",type:"fruit"},
    {nom:"tomate",type:"legume"},
    {nom:"carotte",type:"legume"},
    {nom:"pomme de terre",type:"legume"},
    {nom:"navet",type:"legume"},
    {nom:"poivron",type:"legume"}
    ]
  return (
    <div className="container bg-success text-center" >
      <h1>Composant App</h1>
<Cherche />
<Result
      {/* <Navbar /> */}
      {/* <Compter/>
      <ValidateForm/> */}
    </div>
  );
}

export default App;
