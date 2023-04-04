import React from 'react'
import styles from "./styles.module.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image1 from "../../assets/Image1.webp"
import Image2 from "../../assets/Image2.webp"
import Image3 from "../../assets/Image3.webp"
import Image4 from "../../assets/Image4.webp"
import Image5 from "../../assets/Image5.webp"

import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className={styles.Wrapper}>
    <Card style={{ width: '25rem' , height: '20rem'}}>
        <Card.Img className={styles.Image} variant="top" src={Image1} />
        <Card.Body>
            <Card.Title>Sports Quiz</Card.Title>
            <Link to="/SportsQuiz"><Button variant="primary">Go to Sports Quiz</Button></Link>
        </Card.Body>
    </Card>
    
    <Card style={{ width: '25rem' , height: '20rem'}}>
        <Card.Img className={styles.Image} variant="top" src={Image2} />
        <Card.Body>
            <Card.Title>History Quiz</Card.Title>
            <Link to="/HistoryQuiz"><Button variant="primary">Go to History Quiz</Button></Link>
        </Card.Body>
    </Card>

    <Card style={{ width: '25rem' , height: '20rem'}}>
        <Card.Img className={styles.Image} variant="top" src={Image3} />
        <Card.Body>
            <Card.Title>Math Quiz</Card.Title>
            <Link to="/MathQuiz"><Button variant="primary">Go to Math Quiz</Button></Link>
        </Card.Body>
    </Card>

    <Card style={{ width: '25rem' , height: '20rem'}}>
        <Card.Img className={styles.Image} variant="top" src={Image4} />
        <Card.Body>
            <Card.Title>Physics Quiz</Card.Title>
            <Link to="/PhysQuiz"><Button variant="primary">Go to Physics Quiz</Button></Link>
        </Card.Body>
    </Card>

    <Card style={{ width: '25rem' , height: '20rem'}}>
        <Card.Img className={styles.Image} variant="top" src={Image5} />
        <Card.Body>
            <Card.Title>Computer Quiz</Card.Title>
            <Link to="/ComputerQuiz"><Button variant="primary">Go to Computer Quiz</Button></Link>
        </Card.Body>
    </Card>
    

    </div>
  )
}

export default Home