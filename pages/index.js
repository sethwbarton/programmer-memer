import Head from 'next/head'
import React from "react";
import {useState, useEffect} from "react";
import styles from '../styles/Home.module.css'
import memes from '/public/memes.json'
import styled from "styled-components";

export default function Home() {
    const [currentMeme, setCurrentMeme]= useState(0)
    return (
        <div className={styles.container}>
          <Head>
            <title>Programmer Memer</title>
            <meta name="description" content="Where Programmers Go to Get the Memes" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <div style={{marginBottom: "50px"}}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                You've got {memes.memes.length} memes to view!
            </div>
              <Meme src={memes.memes[currentMeme].resource}/>

              <ButtonsContainer>
                  <button onClick={() => {
                      if (currentMeme < memes.memes.length - 1) {
                          setCurrentMeme(currentMeme + 1)
                      }
                  }}>
                      Next
                  </button>
                  <button onClick={() => {setCurrentMeme(Math.floor(Math.random() * memes.memes.length))}}>
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      I'm Feeling Lucky
                  </button>
                  <button onClick={() => {
                      if (currentMeme > 0) {
                          setCurrentMeme(currentMeme - 1)
                      }
                  }}>
                      Previous
                  </button>
              </ButtonsContainer>
          </main>
        </div>
    )
}


const Meme = styled.img`
  width: 100%;
  height: 500px;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 50px;
  gap: 20px;
`