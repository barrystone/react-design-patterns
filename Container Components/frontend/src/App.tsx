import { useEffect, useState } from 'react';
import { usersInterface } from '../../_data/index';
import axios from 'axios';

function App() {
  const [user, setUser] = useState<usersInterface>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('api/current-user');
      setUser(res.data);
    };
    fetchData();
  }, []);

  return user ? (
    <div>
      <h1>CurrentUser:</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Hair color: {user.hairColor}</p>
      <p>Hobbies: </p>
      <ul>
        {user.hobbies.map((hobby, idx) => (
          <li key={idx}>{hobby}</li>
        ))}
      </ul>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default App;
