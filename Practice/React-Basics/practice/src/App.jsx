
import './App.css'
import { useState } from 'react';
import Header from './components/Header'
import Button from './components/Start'
import Quiz from './components/Quiz'

function App() {
  const [show, setShow] = useState(true);
  const [started, setStarted] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [qNum, setQNum] = useState(0);
  function startQuiz(){
    setShow(false);
    setStarted(true);
    setShowQuiz(true)
    setQNum(0);
  }
  let i = 0;
  function nextQuestion(){
    i = i + 1;
    setQNum(i);
  }
  return(
    <>
    {show && <Header/>}
    {show && <Button onClick = {startQuiz}/>}
    <Quiz questionNum = {() => nextQuestion} ></Quiz>
    <button onClick={nextQuestion}>Next</button>
    </>
  )
}
export default App
