import React, { useEffect , useState } from 'react';
import axios from 'axios';

  

function UserList  ()  {

    const [listOfUSer,setListOfUSer] = useState ([]);
 
    useEffect (  ()   => 
    {
        axios.get('https://jsonplaceholder.typicode.com/users').then((result) => {
            
            setListOfUSer(result.data)
        });
       
    } , [] ) ;


  return (
    <div>
    {listOfUSer.map((user)=> <p>{user.name}</p>  ) }
    </div>
  )

}

export default UserList