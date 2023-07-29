import React from 'react'
import { Navbar, Hero, Sales, FlexContent, Stories, Cart, Footer } from './components'
import { heroapi, popularsales, topratedsales, highlight, sneaker, story, footerAPI } from './data/data.js'

const App = () => {

  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi}/>
        <Sales endpoint={popularsales} isExists/>
        <FlexContent endpoint={highlight} ifExists/>
        <Sales endpoint={topratedsales}/>
        <FlexContent endpoint={sneaker}/>
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI}/>
    </>
  )
}

export default App
