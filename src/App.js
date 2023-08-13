import { useState } from 'react';

import FilterUser from './components/FilterUser';

function App() {
  

  return (
    <div className="App">
       <FilterUser />
    </div>
  );
}

export default App; 


/*
                        FİLTER_APP  
-{address?.zipcode}
-*****useRef
-******fetch apı
- const [cloneUsers, setCloneUsers] = useState(null);
  const [users, setUsers] = useState(null);
   useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/users')
       .then((res) => res.json())
       .then((data) => {
        setUsers(data);
        setCloneUsers(data);
      })
      .catch((err) => alert('Daha sonra tekrar deneyin'));
  }, []); 
- const handleSearch = () => {
    const query = inputRef.current.value.toLowerCase();
    const filtredUser = cloneUsers.filter((user) =>
      user.name.toLowerCase().includes(query)
    );
    setUsers(filtredUser);
  };
- <input type="text" ref={inputRef} onChange={handleSearch} />
  <button onClick={handleSearch}>Ara</button>
- <ul>
        {users === null && <p>Loading...</p>}
        {users && users.map((user) => <ListElement user={user} />)}
  </ul>
                        
  */
