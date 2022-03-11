import React, { useEffect, useState } from 'react';

const LoadScreen: React.FC<{callback: Function}> = ({callback}) => {
  const word = "Fullstack Web Developer"
  
  const [actualWord, setActualWord] = useState("")
  const [starting, setStarting] = useState(true)
  
  //Threads
  const [fireTypingUseEffect, setFireTypingUseEffect] = useState(false)
  const [fireMoveUseEffect, setFireMoveUseEffect] = useState(false)

  useEffect(() => {
    if(!fireTypingUseEffect) return
    if(starting){
      if(actualWord != word){
        setTimeout(() => setActualWord(word.substring(0, actualWord.length + 1)), 50)
      }else{
        setStarting(false)
        setTimeout(() => setActualWord(actualWord.substring(0, actualWord.length - 1)), 1000)
      }
    }else{
      if(actualWord != ""){
        setTimeout(() => setActualWord(actualWord.substring(0, actualWord.length - 1)), 50)
      }else{
        setFireTypingUseEffect(false)
        setActualWord("/")
        setTimeout(() => {
          setFireMoveUseEffect(true)
        }, 300);
      }
    }
  }, [actualWord, fireTypingUseEffect])

  useEffect(() => {
    if(fireMoveUseEffect){
      const typeAnimationDimension = document.getElementById('type-animation')!.getBoundingClientRect()
      const logoDimension = document.getElementById('logo')!.getBoundingClientRect()
  
      document.getElementById('type-animation')!.style.left = `${typeAnimationDimension.x}px`;
      document.getElementById('type-animation')!.style.top = `${typeAnimationDimension.y}px`;
      
      setTimeout(() => {
        document.getElementById('type-animation')!.style.left = `${logoDimension.x}px`;
        document.getElementById('type-animation')!.style.top = `${logoDimension.y}px`;
        setTimeout(() => {
          document.getElementById('load-screen')!.style.opacity = "0"
          setTimeout(() => {
            document.getElementById('load-screen')!.style.display = "none"
            callback()
          }, 1200);
        }, 800);
      }, 200)
    }
  }, [fireMoveUseEffect])

  useEffect(() => {
    document.getElementById('type-animation')!.style.opacity = "1"
    setTimeout(() => setFireTypingUseEffect(true), 200)
  }, [])

  return (
    <div id='load-screen'>
        <span id='type-animation'>&lt;{actualWord}&gt;</span>
    </div>
  );
};

export default LoadScreen;