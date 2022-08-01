import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Styles from '../styles/Header.module.css'
import {TbBrandJavascript} from 'react-icons/tb'
import { TbBrandHtml5 } from 'react-icons/tb'
import { TbBrandCss3 } from 'react-icons/tb'
import { FaReact } from 'react-icons/fa'
import {TbBrandTailwind} from 'react-icons/tb'

export default function Header() {
  return (
    <>
    <div className={Styles.container}>
      
      <div className={Styles.links}>
          <ul className="breadcrumb">
            <Link href="/">
              <li className="breadcrumb-item"><a href="#">HOME</a></li>
            </Link>
            <Link href="/projects">
              <li className="breadcrumb-item"><a href="#">PROJECTS</a></li>
            </Link>
            <li className="breadcrumb-item">
              <a href="https://drive.google.com/file/d/19FjHMmQm443AgSDAO_XW914SDG0B9-r_/view?usp=sharing">RESUME</a>
            </li>
            
              <li className="breadcrumb-item"><a href="https://drive.google.com/file/d/1196mvlZeVmM_tcPBBnstl_21K4gLSNeM/view?usp=sharing">RECOMMENDATIONS</a></li>
            
        </ul>
        </div>
        <div className={Styles. skills}>
          <TbBrandJavascript size="25px" id={Styles.jsIcon} />
          <TbBrandHtml5 size="25px" id={Styles.jsIcon} />
          <TbBrandCss3 size="25px" id={Styles.jsIcon} />
          <FaReact size="25px" id={Styles.jsIcon} />
          <TbBrandTailwind size="25px" id={Styles.jsIcon} />
        </div>
      
    </div>
    </>
    
  )
}
