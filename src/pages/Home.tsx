import React from 'react'

import { Slideshow, Slide} from 'components/Slideshow'
import Title from 'components/Title'

import Confort from 'assets/images/confort/banner.jpg'

const Home= () => {
  return (
    <>
      <div>
        <Title>Desarrollo personal</Title>
        <Slideshow>
          <Slide>
            <a href="#a">
              <img src={Confort} alt="Zona de confort" />
              <Title h={4}>¿Cómo salir de tu zona de confort?</Title>  
            </a>
          </Slide>
          <Slide>
            <a href="#a">
              <img src={Confort} alt="Zona de confort" />
              <Title h={4}>¿Cómo salir de tu zona de confort?2</Title>  
            </a>
          </Slide>
          <Slide>
            <a href="#a">
              <img src={Confort} alt="Zona de confort" />
              <Title h={4}>¿Cómo salir de tu zona de confort?2</Title>  
            </a>
          </Slide>
          <Slide>
            <a href="#a">
              <img src={Confort} alt="Zona de confort" />
              <Title h={4}>¿Cómo salir de tu zona de confort?2</Title>  
            </a>
          </Slide>
        </Slideshow>
      </div>
    </>
  )
}

export default Home
