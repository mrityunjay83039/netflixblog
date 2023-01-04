import logo from './logo.svg';
import Card from './Card';
import './App.css';
import Sdata from './Sdata';

function ncard(val){
  return(
    <Card
      imgSrc = {val.imgsrc}
      title = {val.title}
      sname = {val.sname}
      link = {val.links}
    />
  )
}

function App() {
  return (
    <>
      <h1 style={{textAlign:'center', textDecoration:'underline'}}>Top 5 Netflix Web Series</h1>
      <div className="App">
      
        
        {Sdata.map(ncard)}
        

      </div>
    </>
    
  );
}

export default App;
