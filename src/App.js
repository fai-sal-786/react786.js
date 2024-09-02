import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
// ```import About from './component/About';
import React, { useState } from 'react';
// import Alert from './component/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


// let name = 'FAISAL12';
function App() {
  // return 
  const [mode, setMode] = useState('light');
  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type)=> {
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 2000);
  // }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // showAlert("dark mode has been Enable", "sucess");
      document.title = 'TextUtils - DarkMode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("light mode has been Enable", "sucess");
      document.title = 'TextUtils - LightMode';
    }    
  }
  return (
//   //
//     // <>
//     //   <nav>
//     //     <li>HOME</li>
//     //     <li>ABOUT US</li>
//     //     <li>CONTACT US</li>
//     //   </nav>
//     //   <div className="container">
//     //     <h1>HELLO {name}</h1>
//     //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa autem quae placeat dolorum dignissimos quibusdam suscipit nostrum velit, sapiente delectus, cumque vero vitae aliquid qui modi iure? Dolorem facilis tenetur blanditiis dolores minima doloremque iure ratione cum nobis vel unde eaque, porro voluptatem iusto consectetur autem, modi dolore earum. Alias reiciendis officia sequi, animi accusantium optio corporis deleniti nobis, ex dolore, sit iure! Distinctio expedita corporis quae ducimus dignissimos et quo alias sed vel ad, rem hic error reiciendis, eveniet praesentium vitae eaque, atque omnis impedit. Nostrum id harum et deleniti tempora dolore beatae, corporis suscipit explicabo commodi laudantium, voluptas consequatur exercitationem eligendi libero. Consequatur quam officia deleniti assumenda blanditiis rem tempora numquam magni ipsa quaerat deserunt, dicta veritatis sed molestiae necessitatibus, quasi cum vel accusantium inventore repellat recusandae nostrum! Perferendis, beatae, alias quia, deleniti dignissimos dolores mollitia provident animi sunt ex est ipsam quis! Enim omnis numquam facere?
//     //   </div>
// // </>
    
//       <>   
//       {/* <div className="Apphow
//       Hello World
//       </div> */}
//        
        <>
        
       {/* <Router> */}
       <Navbar title="TextUtils" aboutText="About TextUtils" contactText="Contact TextUtils" emailText="Email TextUtils" sendText="Send TextUtlis" mode={mode} toggleMode={toggleMode} />       
       <div className='container my-5'>    
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>          
          <Route path="/"> */}
          <TextForm /*showAlert={showAlert}*/ heading="Enter the text analyze below" mode={mode} />
            {/* <Home />
          </Route>
          </Switch>   */}
          </div>
        {/* </Router> */}

          
        </>
    
  );
}

export default App;
