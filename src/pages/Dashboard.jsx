
import { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import { getAllFavorites, removeFavorite } from '../utlity/LocalStorage'
import Card from '../components/Card'


const Dashboard = () => {
  const [coffees, setCoffees] = useState([])
  useEffect(() => {
    const favorites = getAllFavorites()
    setCoffees(favorites)
  }, [])

  const handleRemove = id => {
    removeFavorite(id)
    const favorites = getAllFavorites()
    setCoffees(favorites)
  }
  return (
    <>
      <Heading
        title='Welcome to Dashboard'
        subtitle='Manage coffees that you have previously added as favorite. You can view or remove them from here.'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto my-12'>
        {coffees.map(coffee => (
          <Card handleRemove={handleRemove} key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </>
  )
}

export default Dashboard
