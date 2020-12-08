import React, {useState,useEffect} from 'react'
import { Form } from 'react-bootstrap'
import { Card, Image, Row , Col, Button } from 'react-bootstrap'
import Tags from './Tags'
import '../repo.css'

function Repo({ id, name, language, description, owner, html_url }) {
    const [star, setStar] = useState(0) 

    useEffect( () => setStar( Number(localStorage.getItem(id))) , [] )
    useEffect( () => localStorage.setItem( id, star), [star] )
   
    const toggleStar = (e) => {
        star? setStar(0) : setStar(1)
    } 


    return (
       <> 
          <Card className="my-3 py-3 text-center repo-card" >
             <Row>
               <Col  md = {6} sm = {12} >
                 <Image className="card-img" src={owner.avatar_url} roundedCircle />
                 <br></br>
                 <a href={html_url} ><i className="fab fa-github"></i> </a>
               </Col>
               <Col>
                   <Card.Title className="repo-name"> {name} </Card.Title> 
                   <Card.Text> {description} </Card.Text>
                   <Button className="repo-btn" onClick = {toggleStar}> 
                       {star?   <i className="fas fa-star"> </i>
                       :  <i className="far fa-star"> </i> 
                       }
                   </Button>
                   <p> {language} </p>
               </Col>
           </Row>
          </Card> 
       
       </>
    )
}

export default Repo 