import React from 'react'
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Dock from './components/Dock';
import Terminal from './windows/Terminal';
import Safari from './windows/Safari';
import Resume from './windows/Resume';
import Finder from './windows/Finder';
import TextWindow from './windows/Text';
import ImageWindow from './windows/Image';
import ContactWindow from './windows/Contact';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>

      <Terminal />
      <Safari />
      <Resume/>
      <Finder/>
      <TextWindow/>
      <ImageWindow/>
      <ContactWindow/>
    </main>
  )
}

export default App;