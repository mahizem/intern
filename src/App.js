import Todo from "./components/todo";
import Modal from "./components/Modal";
import Header from "./components/header";
import Backdrop from "./components/Backdrop"
import Service from "./components/Services";
import Contact from "./components/contact";
import Login from "./components/loginn";
import React from "react";
import { Route , Link, Routes } from "react-router";
import Loginn from "./components/loginn";

function App() {
  
  return (
    <div>
      <div>
        <div className="goes">
          <div>
            <Header />
          </div>
          <div>
            <Todo />
          </div>
        </div>

        <div>
          <Modal id="1section-1" />
        </div>

        <div>
          <Backdrop id="section-2" />
        </div>
        <div>
          <Service id="section-3" />
        </div>
        <div>
          <Contact id="section-4" />
        </div>
      </div>
      <div>
        <Routes>
          <Route exact path="/loginn" element={<Loginn />} />
        </Routes>
      </div>
    </div>
  ); 
}
export default App;


{/* export default App;
/*this returns jsx codes  
meaning html in a javascript
the function todo have to start with a higher 
case because when we do the <Todo/> tag html
differenciates between built in functions 
and components we created by the case they start
s
//   return
    //     <>
    //       <div id="hero-section">
    //         <button className="btn-scroll" onClick={handleClickScroll}>
    //           Scroll Down
    //         </button>
    //       </div>
    //       <div id="section-1">Section 1</div>
    //    
  /* <BrowserRouter>
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/Modal" element={<Modal id="1section-1" />} />
          <Route path="/Backdrop" element={<Backdrop id="section-2" />} />
          <Route path="/Services" element={<Service id="section-3" />} />
          <Route path="/contact" element={<Contact id="section-4" />} />
        </Routes>
      </BrowserRouter> 
       <switch>
        <Route path="/login" exact>
          <Login/>
        </Route>
      </switch> 
        <switch>
        <Routes>
          <Route path="/login" exact>
            <Login />
          </Route>
        </Routes>
      </switch>
    </BrowserRouter></BrowserRouter> */}
     {
       /* <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/Modal" element={<Modal id="1section-1" />} />
        <Route path="/Backdrop" element={<Backdrop id="section-2" />} />
        <Route path="/Services" element={<Service id="section-3" />} />
        <Route path="/contact" element={<Contact id="section-4" />} />
      </Routes> */
     }
     
// const Signup = () => {
//   return <div></div>;
// }; 

