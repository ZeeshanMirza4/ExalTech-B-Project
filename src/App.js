import './App.css';
import {useState} from 'react';
import DashBoard from './ExalTech/Navigation/Dashboard/DashBoard';
import Navigation from './ExalTech/Navigation/Navigation/Navigation';
import CustomCarousel from './ExalTech/Navigation/CustomCarousel/CustomCarousel';
import Courses from './ExalTech/Navigation/Courses/Courses'; 
// import FormOne from './Components/FormOne';
// import FormThree from './Components/FormThree'/;
// import FormTwo from './Components/FormTwo';
// import {BrowserRouter,Routes,Route} from "react-router-dom";
// import {useSelector} from "react-redux"


function App() {
  // const data = useSelector((store)=>store.FirstReducer);
  const [show,setShow]=useState(false);
  return (
    <div className="App">
      <button onClick={()=> setShow(!show)}>Dashboard</button>
      {show && <DashBoard/>}
      <hr /> <hr />
      <Navigation/>
      <hr /> <hr />
      <CustomCarousel/>
      <hr />
      <Courses/>
    </div>
  );
}

export default App;  

// {/* <h1>Zee_Mirza</h1> */}
// {/* {data.map((item)=>{
//   return <>
//   <h2>{item.name}</h2>
//   <h4>{item.profession}</h4>
//   <h4>{item.add}</h4> */}
