
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {
  const coffees = useLoaderData();

  

  return (
    <div className='m-20'>
      
      <h1 className='text-6xl text-center text-purple-600 my-20'>Hot hot cold coffee : {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-2'>
      {
        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
      }
      </div>
      
    </div>
  )
}

export default App
