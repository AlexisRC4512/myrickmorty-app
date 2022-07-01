import React, { createContext,useState,useEffect} from 'react'
import { FetchUse } from '../hooks/FetchUse';
export const ContextCharacter=createContext([]);
export const CharactersProvider = ({children}) => {
  let [search,setSearch]=useState("");
    const [character,setCharacter]=useState([]);

    const URL=`https://rickandmortyapi.com/api/character/?name=${search}`;
 
    const UseFetch=FetchUse(URL,(response)=>{
      console.log(response.results)
        setCharacter(response.results)

      })
    useEffect(() => {
      UseFetch();
    }, [search]);
  return (
   <ContextCharacter.Provider value={{character,setSearch,search}}>
    {children}
   </ContextCharacter.Provider>
  )
}
