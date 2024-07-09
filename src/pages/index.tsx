import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
// import { sign } from "crypto";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isX,setX] = useState(true); //to check whos chance is this
  const [sign, setSign] = useState(Array(9).fill(null));
  let message;
  if(calculateWinner(sign)){
    message = "Winner is " + calculateWinner(sign);
  }
  else{
    message = isX ? "Next Player is X" : "Next Player is O";
  }



  function signLogic(i){
    let sudoSign = sign.slice();
    
    if(calculateWinner(sign) || sign[i]){
      return;
    }
    else if(isX){
      sudoSign[i] = "X";
      setX(!isX);
      // console.log(sign);
    }
    else{
      sudoSign[i] = "O";
      setX(!isX);
      // console.log(sign);
    }
    setSign(sudoSign);
    const winner = calculateWinner(sign);
    console.log(winner);
    
  }
  return <>
  <h1>{message}</h1>
  <div>
    <Button value={sign[0]} onClickSign={()=>signLogic(0)}/>
    <Button value={sign[1]} onClickSign={()=>signLogic(1)}/>
    <Button value={sign[2]} onClickSign={()=>signLogic(2)}/>
  </div>
  <div>
    <Button value={sign[3]} onClickSign={()=>signLogic(3)}/>
    <Button value={sign[4]} onClickSign={()=>signLogic(4)}/>
    <Button value={sign[5]} onClickSign={()=>signLogic(5)}/>
  </div>
  <div>
    <Button value={sign[6]} onClickSign={()=>signLogic(6)}/>
    <Button value={sign[7]} onClickSign={()=>signLogic(7)}/>
    <Button value={sign[8]} onClickSign={()=>signLogic(8)}/>
  </div>
  </>
}
    

function Button({value, onClickSign}){
  return <>
  <button className="buttonShape" onClick={onClickSign}>
    {value}   
  </button>
  </>
}

function calculateWinner(square){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for(let i=0; i<lines.length; i++){
    const [a,b,c] = lines[i];
    if(square[a] && square[a] === square[b] && square[a] === square[c]){
      return square[a];
    }
  }
  return null;
}