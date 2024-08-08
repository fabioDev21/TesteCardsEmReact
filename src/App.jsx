import { useState, useEffect } from 'react'
import './App.css'

const CardUsuario = ({id, name, email}) => {
  return(
    <div className='card' key={id}>
      <img src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="default pic" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

const MostraUsuarios = () => {
  
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res =>  { 
      return res.json()
    })
    .then(newUsers => {
      setUsers(newUsers)
    })

  }, [])

  return(
    <div>
      {users.map(el => {
        return(
          <CardUsuario id={el.id} name={el.name} email={el.email}/>
        )
      })}
    </div>
  )

}

function App() {
  return (
    <>
    <MostraUsuarios />
    </>
  )
}

export default App
