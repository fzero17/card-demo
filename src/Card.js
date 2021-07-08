import React, {useEffect} from "react";
import styled from "styled-components";

function Card({index = 'cat1-1', imgName = 'cat1', onClick, miss = false, flipBack = false}) {
  const flip = (e) => {
    const transformProperty = e.currentTarget.style.transform
    if (transformProperty && transformProperty === 'rotateY(180deg)') {
      // e.currentTarget.style.removeProperty('transform')
    } else {
      e.currentTarget.style.setProperty('transform', "rotateY(180deg)")
      onClick()
    }
  }

  useEffect(() => {
    const container = document.getElementsByClassName(index)[0];
    if (flipBack && container.style.transform) {
      container.style.removeProperty('transform')
    }
  }, [flipBack])

  return <CardContainer className={index} onClickCapture={(e) => flip(e)} style={miss ? {visibility: 'hidden'} : {}}>
    <Front/>
    <Back style={{backgroundImage: `url(./${imgName}.jpg)`}}/>
  </CardContainer>
}

const Front = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  background-image: url("./bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`

const Back = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`

const CardContainer = styled.div`
  position: relative;
  width: 50px;
  height: 75px;
  transition: transform 0.2s;
  transform-style: preserve-3d;
`

export default Card;
