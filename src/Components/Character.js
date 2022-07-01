import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { ContextCharacter } from '../Context/CharactersContext';


export const Character = () => {
    const {character,search,setSearch}= useContext(ContextCharacter);

  return (
    <div  className='row d-flex justify-content-center text-center'>
          <div className='search'>
              <input type="text" 
              placeholder={"Search Character"}
              className="inputSearch col-lg-5 col-sm-10 rounded-pill"
              onChange={event=>setSearch(event.target.value)}
              value={search}
              />
          </div>
        {character.map((charac)=>{
                return(
                  <div className="col-lg-5 col-sm-10"> 
                  <div  className="card text-dark mb-3"style={{ width: "20rem",backgroundColor:"rgb(40, 182, 158)"}}>
                              <div className="card-body" >
                                 
                                 <img className="card-img-top rounded-pill" src={charac.image} alt="Card image cap"/>
                                
                                 <h5 className="card-title">Name: {charac.name}</h5>
                                  <p className="card-text h5">Status: {charac.status}</p>
                                  <p className="card-text h5">Gender: {charac.gender}</p>
                                  <p className="card-text h5">Origin: {charac.origin.name}</p>
                              </div>
                          </div>
                          </div>
                )
            })
        }
    </div>
  )
}
