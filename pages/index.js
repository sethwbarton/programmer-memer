import Head from 'next/head'
import React from "react";
import {useState, useEffect} from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import memes from '/utils/output.json'

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
            <div>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                You've got {memes.memes.length} to read.
            </div>
              <img src={memes.memes[currentMeme].resource}/>
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
          </main>

          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </span>
            </a>
          </footer>
        </div>
    )
}