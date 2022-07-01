
import './App.css';
import { Character } from './Components/Character';
import { Header } from './Components/Header';
import { Routes,Route } from 'react-router-dom';
import { CharactersProvider } from './Context/CharactersContext';
function App() {
  return (
    <div className='container'>
         <Header/>
        <Routes>
          <Route path='/' element={
             <CharactersProvider>
                    <Character />
             </CharactersProvider>
            
          }/>
        </Routes>
         
         
           
        
        

     
    </div>


  );
}

export default App;
