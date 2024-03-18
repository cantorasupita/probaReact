import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [items, setItem] = React.useState([])

  const fetchData = () => {
    fetch(`https://18.198.94.122/api/getCitiesWithTour`)
      .then(res=>res.json())
      .then(res=>{
        console.log(res)
        setItem(res.data)
      })
  }

  React.useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {items.map((item, id)=>{
              return <div className='item' key={id}>
                <img src={item.image}/>
                {item.name}
                </div>
          })

          }
      </header>
    </div>
  );
}

export default App;
