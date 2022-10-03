import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import HomeContainer from '../container/HomeContainer'

function Home() {
  localStorage.setItem('menu', 'home')
  return (
    <div>
      <Header/>
      <HomeContainer/>
      <Footer/>
    </div>
  )
}

export default Home