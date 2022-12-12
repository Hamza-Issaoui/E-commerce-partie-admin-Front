import React from 'react'

const ListCat = ({item,index}) => {
  return (
    <div>
        <tr id="trow_1">
                  <td class="text-center">{index}</td>
                  <td>
                    {item.name}
                  </td>
                 
                  <td>{item.description}</td>
                 
                 
                </tr>
    </div>
  )
}

export default ListCat