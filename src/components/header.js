

function Header(){
   
      const handleClickScroll = () => {
       
        const element = document.getElementById( "section-1");
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
       const handleClickScroll1 = () => {
         const element1 = document.getElementById("section-2");
         if (element1) {
           // 👇 Will scroll smoothly to the top of the next section
           element1.scrollIntoView({ behavior: "smooth" });
         }
       };
       const handleClickScroll2 = () => {
         const element2 = document.getElementById("section-3");
         if (element2) {
           // 👇 Will scroll smoothly to the top of the next section
           element2.scrollIntoView({ behavior: "smooth" });
         }
       };
        const handleClickScroll3 = () => {
          const element3 = document.getElementById("section-4");
          if (element3) {
            // 👇 Will scroll smoothly to the top of the next section
            element3.scrollIntoView({ behavior: "smooth" });
          }
        };
    return (
      <div>
        <div>
          <nav>
            {/* <div class="headingg"></div> */}
            <div class="nav-links">
              <button className="btnn">
                <p>Home</p>
              </button>
              <button onClick={handleClickScroll} className="btnn">
                Our Banks
              </button>
              <button onClick={handleClickScroll1} className="btnn">
                <p>About</p>
              </button>
              <div class="dropdown">
                <button
                  class="dropbtn"
                  onClick={handleClickScroll2}
                  className="btnn"
                >
                  <p>Services</p>
                </button>
                <div class="dropdown-content">
                  <a href="#hotel">Hotel reservation</a>
                  <a href="#utility">Utility Payments</a>
                  <a href="#charity">Charity Donations</a>
                  <a href="#hospital">Hospital Bills</a>
                  <a href="#ticketing">Ticketing</a>
                  <a href="#loan">Apply for Loan</a>
                  <a href="#btob">Transfer B to B</a>
                </div>
              </div>

              <button onClick={handleClickScroll3} className="btnn">
                <p>Contact</p>
              </button>
            </div>
          </nav>
        </div>
        <div class="trans">
          <header className="go">
            <h1> Online Banking Ethiopia</h1>
          </header>
        </div>
      </div>
    );  

}
export default Header;

//  <nav>
//             <div class="headingg"></div>
//             <ul class="nav-links">
//               <li>
//                 <a class="active">Home</a>
//               </li >
//               <li>
//                 <a onClick={handleClickScroll}>Our Banks</a>
//               </li>
//               <li>
//                 <a>About</a>
//               </li>
//               <li>
//                 <a>Services</a>
//               </li>
//               <li>
//                 <a>Contact</a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//         <div class="trans">
//           <header className="go">
//             <h1> Online Banking Ethiopia</h1>
//           </header>
//         </div>
//       </div>
//     );  