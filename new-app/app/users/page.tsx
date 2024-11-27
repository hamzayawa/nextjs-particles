import React from 'react'

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users: User[] = await res.json()
  return (
    <div>
      <h2>This is a Users Page!</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Username</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Phone</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Website</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.id}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.username}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.email}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.phone}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.website}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersPage
