import { useState } from "react";
import Btn from "./components/Btn";
import LimitationModal from "./components/LimitationModal";
import Range from "./components/Range";


function App() {
  const [modal,setModal]=useState(false);
  const [green,setGreen]=useState([0,0]);
  const [yellow,setYellow]=useState([0,0]);
  const [red,setRed]=useState([0,0]);
  const [orange,setOrange]=useState([0,0]);
  const submitHandler=(values,setErrors)=>{
   try {
     
    const {up,down,area}=values;
    if(up<down)
      throw {type:1}
    
      switch (area) {
        case 1:
          setRed([down, up]);
          break;
        case 2:
          if(up>=red[1] && down<=red[0])
              throw {type:1}
          setYellow([down, up]);
          break;
        case 3:
          if((up>=red[1] && down<=red[0])  || (up>=yellow[1] && down<=yellow[0]) )
          throw {type:1}
          setOrange([down, up]);
          break;
        case 4:
          if((up>=red[1] && down<=red[0]) || (up>=orange[1] && down<=orange[0]) || (up>=yellow[1] && down<=yellow[0]) )
            throw {type:1}
          setGreen([down, up]);
          break;
      }
      setModal(false);
   } catch (error) {
    const {type}=error;
    switch (type) {
      case 1:
        setErrors({up:"محدوده نامعتبر"})
        break;
    }
   }
  }

  return (
    <div className="bg-zinc-50 h-screen flex justify-center items-center font-iranSans">
      <div className=" bg-white w-[900px] h-60 shadow-md rounded-md p-4">
        
        <Btn text="افزودن محدوده" onClick={()=>setModal(true)}/>
       <Range count={20} green={green} yellow={yellow} red={red} orange={orange}/>
      </div>
      <LimitationModal show={modal} closeHandler={()=>setModal(!modal)} submitHandler={submitHandler} />
    </div>
  );
}

export default App;
