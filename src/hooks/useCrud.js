import axios from "axios"
import { useState } from "react"


const useCrud = () => {


    const [users, setUsers] = useState()

    const getAllUsers = () => {
        const URL = 'http://users-crud.academlo.tech/users/'
        axios.get(URL)
        .then(res => setUsers(res.data)) // guardamos la  informacion
        .catch(err => console.log(err))
      }
      
      

      
      const createNewUser = data => {
        const URL = 'http://users-crud.academlo.tech/users/'
        axios.post(URL, data)
        .then(res =>  getAllUsers())
        .catch(err => console.loh(err))
      }
      
      
      // Delete  User
      const deleteUserById =(id) => {
        const URL =`http://users-crud.academlo.tech/users/${id}/`
        axios.delete(URL)
        .then(res => getAllUsers())
        .catch(err => console.log(err))
      }
      
       // update users
      
       const updateUserById = (id, data) =>{
        const URL = `http://users-crud.academlo.tech/users/${id}/`
        axios.put(URL, data)
        .then(res => getAllUsers())
        .catch(err => console.log(err))
      
       }


       return {
        users,
        createNewUser,
        getAllUsers,
        deleteUserById, 
        updateUserById
    }
}

export default useCrud