import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import MythologicalCharacterListContainer from '../container/MythologicalCharacterListContainer'

function MythologicalCharacterList() {
  return (
    <div>
      <Header/>
      <MythologicalCharacterListContainer/>
      <Footer/>
    </div>
  )
}

export default MythologicalCharacterList