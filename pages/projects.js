import React from 'react'
import Image from 'next/image'
import Styles from '../styles/Projects.module.css'
import weatherPic from '/public/assets/weatherAppPic.jpg'
import budgetPic from '/public/assets/budgetAppPic.jpg'
import todoListPic from '/public/assets/todoList.jpg'

export default function Projects() {
  return (
    <div className={Styles.container}>
      <div className={Styles.card}>
        <a href='https://weather-app-4a90b.web.app/'>
        <Image src={weatherPic} alt="Picture of the author" width={250} height={250}></Image>
        <div className={Styles.description}>
          <h4>Weather App</h4>
        </div>
      </a>
      </div>
      <div className={Styles.card} >
        <a href='https://budget-app-cd7b1.web.app/'>
        <Image src={budgetPic} alt="Picture of the author" width={250} height={250}></Image>
        <div className={Styles.description}>
          <h4>Budget App</h4>
        </div>
        </a>
      </div>
      <div className={Styles.card}>
        <a href='https://react-to-do-754f3.web.app/'>
        <Image src={todoListPic} alt="Picture of the author" width={250} height={250}></Image>
        <div className={Styles.description}>
          <h4>Todo List App</h4>
      </div>
      </a>
      </div>
    </div>
  )
}
