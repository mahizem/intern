
import * as React from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Login from "./loginn";
function Todo() {
 
  return (
    <div>
      
      <button class="bcenter" className="btn">
        Log in
      </button>
 
      <button class="bcenter" className="btn">
        Sign up
      </button>
    </div>
  );
  }

export default Todo;






/*  {modalopen && <Modal/>}  means if modalopen is true 
then <Modal/> is renderd 
 // const [modalopen, setmodalopen] = useState(false);
(<Modal onCancel = {closemodalhandeler}  onConfirm ={closemodalhandeler} /> )*/
/*modalopen is current value and setmodalopen
is the one that changes the initial value and resets 
is*/
//   function deletehandeler() {

// setmodalopen(true);

//   }
//   function closemodalhandeler() {
//     setmodalopen(false);
/* {modalopen && <Modal onclose = {closemodalhandeler}/>} 
      {modalopen && <Backdrop onClick = {closemodalhandeler}/>} */