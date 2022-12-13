import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import useCrud from './hooks/useCrud'


function App() {

const [closeForm, setCloseForm] = useState(true)
const  {users, getAllUsers, createNewUser, deleteUserById, updateUserById} = useCrud ()
const [updateInfo, setUpdateInfo] = useState()

useEffect (() => { 
  getAllUsers()
},[])

  return (
    <div className="App">
      <div className='App__header'>
      <h1 className='header__title'>Users</h1>
      <button onClick={() => setCloseForm (false)} className='App__btn'>+ Create New User</button>
      </div>
     
     <div className={`form-container ${closeForm &&'close__form'}`}>
      <FormUser
      createNewUser={createNewUser} 
      updateInfo={updateInfo}
      updateUserById={updateUserById}
      setUpdateInfo={ setUpdateInfo}
      setCloseForm={setCloseForm} // prop para el modal
      />
     </div>
     <div className='user-container'>
      
    
        {
            users?.map(user => (
              <UserCard 
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              
              />
            ))

        }
       </div>



    </div>
  )
}

export default App
