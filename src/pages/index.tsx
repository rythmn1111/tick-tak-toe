import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
// import { sign } from "crypto";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <>
  <h1>next chance: X</h1>
  <div>
    <Button signn=""/>
    <Button signn="X"/>
    <Button signn="X"/>
  </div>
  <div>
    <Button signn=""/>
    <Button signn="X"/>
    <Button signn=""/>
  </div>
  <div>
    <Button signn=""/>
    <Button signn=""/>
    <Button signn=""/>
  </div>
  </>
}
    

function Button({signn}){
  return <>
  <button className="buttonShape">
    {signn}   
  </button>
  </>
}