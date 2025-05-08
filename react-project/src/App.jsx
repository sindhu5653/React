import Card from "./components/card"
import "./App.css"
import Nav from "./navbar/nav"
import UserProfile from "./state/state"
import Page from "./formpage/page"
import { useState } from 'react';
import Footer from "./footer/footer";


function App() {
  const [sindhu, setSindhu] = useState(0)

  // let data = "Sindhu"
  // function changename(e) {
  //   data = "Nithin"
  // }

  return (
    <div>
        <Nav />

       <div id="head">
        <h2>Helloo World</h2>
      </div> 

       <div id="main">
        <Card />
        <Card />
        <Card />
      </div> 

       <div id="main-footer">
        <Footer />
      </div> 

       <div id="count">
        <p>The count is {sindhu}</p>
        <button onClick={() => setSindhu(sindhu + 1)}>Increment</button>
        <button onClick={() => setSindhu(sindhu - 1)}>Decrement</button>
        <button onClick={() => setSindhu(0)}>Reset</button>
      </div>  


      
      
  <UserProfile/>
  <Page/>  


    </div>
  )
}

export default App