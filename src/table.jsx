import React from 'react'

const TableData = ({item}) => {
  return (
    <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nom</th>
        <th>Ville</th>
      </tr>
    </thead>
    <tbody>
      
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.nom}</td>
          <td>{item.ville}</td>
        </tr>

    </tbody>
  </table>
  )
}

export default TableData

