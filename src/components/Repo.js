import React, {useState,useEffect} from 'react'
import { Card, Image, Row , Col, Button } from 'react-bootstrap'
import '../repo.css'

function Repo({ id, name, language, description, owner, html_url, addLanguage }) {
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
                   <Button value={language} onClick={addLanguage} className= "mx-3 my-3 btn btn-success" > {language}  </Button>  
                   <br></br>
                   <Button className="repo-btn" onClick = {toggleStar}> 
                       {star?   <i className="fas fa-star"> </i>
                       :  <i className="far fa-star"> </i> 
                       }
                   </Button>
               </Col>
           </Row>
          </Card> 
       
       </>
    )
}

export default Repo 