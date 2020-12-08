import React, {useState, useEffect} from 'react'
import Repo from './Repo'
import Tags from './Tags'
import Taps from './Taps' 
import axios from 'axios'
import {Button} from 'react-bootstrap'

async function getRepos( setRepos ){
    const url = 'https://api.github.com/search/repositories?q=created'
    const res = await axios.get(url)
    console.log(res.data.items)
    setRepos( res.data.items )
}   

function RepoList () {
    const [repos, setRepos] = useState([]) 
    const [selectedLanguages, setSelectedLanguages] = useState([])
    const [favoriteTap, setFavoriteTap] = useState(0) 
    let languages = ['JavaScript' , 'HTML', 'C++', 'C#', 'Python', 'PHP']
    useEffect( () => getRepos(setRepos) , [] )
   
    const isFavourite = (id) => {
        return Number( localStorage.getItem(id) )
    }
 
    const addLanguage = (e) => {
        if( selectedLanguages.includes(e.target.value) ) return 
        setSelectedLanguages( [...selectedLanguages, e.target.value] )      
    }

    function deleteLanguage(language) {
        const newLanguages = selectedLanguages.filter( l => l != language) 
        setSelectedLanguages(newLanguages)
    } 

    return(
        <div className="container text-center my-3">
          {
              languages.map( l => 
                 <Button value={l} onClick={addLanguage} key={l} className= "mx-3 my-3 btn btn-success" > {l}  </Button>  
              )
          }

          <Tags languages= {selectedLanguages} deleteLanguage= {deleteLanguage} />

          <Taps setFavoriteTap= {setFavoriteTap} />

          {repos.map( repo => 
              !selectedLanguages.length ||  selectedLanguages.includes(repo.language)?  
                !favoriteTap || isFavourite(repo.id) ? <Repo key={repo.id} {...repo} /> : null
               : null             
          )}
        </div>   
    )
}

export default RepoList 