import { useEffect, useState, useRef } from 'react';
import ListElement from './ListElement';
import "./filter.css"
const FilterUser = () => {
  
  const [cloneUsers, setCloneUsers] = useState(null);
  
  const [users, setUsers] = useState(null);

 
  const inputRef = useRef();

  
  useEffect(() => {
  
    fetch('https://jsonplaceholder.typicode.com/users')
      
      .then((res) => res.json())
    
      .then((data) => {
        setUsers(data);
        setCloneUsers(data);
      })
    
      .catch((err) => alert('Daha sonra tekrar deneyin'));
  }, []);

  
  const handleSearch = () => {
    
    const query = inputRef.current.value.toLowerCase();

    
    const filtredUser = cloneUsers.filter((user) =>
      user.name.toLowerCase().includes(query)
    );

    
    setUsers(filtredUser);
  };

  return (
    <div>
      <h1>Kullanıcılar</h1>
      <div className='form'>
      <input type="text" ref={inputRef} onChange={handleSearch} />
      <button onClick={handleSearch}>Ara</button>
      </div>
      <ul>
        
        {users === null && <p>Loading...</p>}

       
        {users && users.map((user) => <ListElement user={user} />)}
      </ul>
    </div>
  );
};

export default FilterUser;