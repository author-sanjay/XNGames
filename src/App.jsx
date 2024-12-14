import { useState } from 'react'
import Hero from './Components/Hero'


function App() {

  return (
    <>
      <main className='relative min-h-screen w-screen overflow-x-hidden'>
        <Hero />
      </main>
      <section className='z-0 min-h-screen bg-violet-300'></section>
    </>
  )
}

export default App
