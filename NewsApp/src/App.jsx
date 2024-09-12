import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsBoard from './components/NewsBoard';
import NewsItem from './components/NewsItem';
import "./App.css"
import HeaderCaro from './components/HeaderCaro';

 const App = () => {
  const [category,setCategory]= useState("general")
  return (
    <>
   
     <Navbar setcategory={setCategory}/>
     <HeaderCaro/>
    <NewsBoard category={category}/>
    <NewsItem/>
    </>
   
  )
}
export default App;
