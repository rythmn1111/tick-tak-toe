import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <>
  <h1>next chance: X</h1>
  <div>
    <Button />
    <Button />
    <Button />
  </div>
  <div>
    <Button />
    <Button />
    <Button />
  </div>
  <div>
    <Button />
    <Button />
    <Button />
  </div>
  </>
}
    

function Button(){
  return <>
  <button className="buttonShape">
    X   
  </button>
  </>
}