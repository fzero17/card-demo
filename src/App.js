import './App.css';
import React, {useEffect, useState} from "react";
import Card from './Card'
import styled from 'styled-components'

function App() {

  const [cats, setCats] = useState(['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6', 'cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6'])
  const [current,setCurrent] = useState('')
  const [downArray,setDownArray] = useState([])
  const [selectedCard,setSelectedCard] = useState([])

  useEffect(() => {
    const cats = []
  }, [])

  const handleClick=(cardName)=>{
    if(current){
      if(current === cardName){
        setTimeout(()=>{
          // 两张卡片不可见
          setDownArray([...downArray,cardName])
          setCurrent('')
        },250)
      }else{
        setTimeout(()=>{
          // 所有翻开的卡片回到背面
          setSelectedCard([current,cardName])
          setCurrent('')
        },250)
      }
    }else{
      setCurrent(cardName)
      setSelectedCard([])
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <MainContainer>
          {cats.map((n,i) => <Card index={`${n}-${i}`} imgName={n} flipBack={selectedCard.includes(n)} miss={downArray.includes(n)} onClick={()=>handleClick(n)}/>)}
        </MainContainer>
      </header>
    </div>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 240px;
  height: 400px;
`

export default App;
