import React, { Component } from 'react'
import { render } from "react-dom"
import { Header } from './Header/Header'
import { BrowserRouter } from 'react-router-dom';
import { Content } from './Pages/Content'
import { Footer } from './Pages/Footer'

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      logo: {},
      loaded: false,
      placeholder: "Loading"
    }
  }


  render() {
    //get static and render it
    return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
    )
  }
}

export default App

const container = document.querySelector("#app")
// render(<Header />, container)
render(
<BrowserRouter>
  <App />
</BrowserRouter>, container)