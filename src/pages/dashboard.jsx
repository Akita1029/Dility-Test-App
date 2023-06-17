import { React, useState, useEffect } from 'react'
import TopNav from '../components/topnav';
import SideNav from '../components/sidenav';
import Main from '../components/main';

export default function Dashboard() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        /*Make the app fetch the items assynchronously*/
        const getUsers = async () => {
          const usersFromServer = await fetchUsers()
          setUsers(usersFromServer)
        }
      
        getUsers()
    }, [])

    const fetchUsers = async () => {
        const res = await fetch('http://localhost:5000/users')
        const data = await res.json()
        console.log(data)
        return data
    }

    const deleteUser = async (id) => {
        const res = await fetch(`http://localhost:5000/users/${id}`, {
          method: 'DELETE',
        })
        //We should control the response status to decide if we will change the state or not.
        res.status === 200
          ? setUsers(users.filter((user) => user.id !== id))
          : alert('Error Deleting This User')
    }

  return (
    <div className="bg-gray-100">
        <TopNav />
        <div>
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                    {/* SideNav */}
                    <SideNav />

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <Main users = {users} onDelete={deleteUser}/>
                    </div>
                </div>
            </section>
            </main>
        </div>
    </div>
  )
}