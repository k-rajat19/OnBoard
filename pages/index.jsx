import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import NavBar from '../components/LandingPage/NavBar'
import Container1 from '../components/LandingPage/Container-1'
import Container2 from '../components/LandingPage/Container-2'
import Container3 from '../components/LandingPage/Container-3'
import Container4 from '../components/LandingPage/Container-4'
import Container5 from '../components/LandingPage/Container-5'
import Container6 from '../components/LandingPage/Container-6'
import Container7 from '../components/LandingPage/Container-7'
import Container8 from '../components/LandingPage/Container-8'
import Container9 from '../components/LandingPage/Container-9'

export default function LandingPage() {
  return (
          <div className="landing-page-container ">
            <NavBar/>
            <Container1/>
            <Container2/>
            <Container3/>
            <Container4/>
            <Container5/>
            <Container6/>
            <Container7/>
            <Container8/>
            <Container9/>
          </div>
  )
}
