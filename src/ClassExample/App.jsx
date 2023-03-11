import React, { Component } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Covid19 from './Covid19'
import Crime from './Crime'
import Education from './Education'
import Entertainment from './Entertainment'
import Home from './Home'
import Jokes from './Jokes'
import Main from './Main'
import Navbar from './Navbar'
import News from './News'
import Politics from './Politics'
import Sports from './Sports'
import Technology from './Technology'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Main/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/politics' element={<Politics/>}></Route>
          <Route path='/education' element={<Education/>}></Route>
          <Route path='/technology' element={<Technology/>}></Route>
          <Route path='/sports' element={<Sports/>}></Route>
          <Route path='/covid19' element={<Covid19/>}></Route>
          <Route path='/crime' element={<Crime/>}></Route>
          <Route path='/jokes' element={<Jokes/>}></Route>
          <Route path='/entertainment' element={<Entertainment/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
