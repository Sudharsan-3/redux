import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToys } from './features/toys/toySlice';

function App() {
  const dispatch = useDispatch();
  const { toys, loading, error } = useSelector((state) => state.toys);

  useEffect(() => {
    dispatch(fetchToys());
  }, [dispatch]);

  return (
    <div>
      <h1>🧸 Toy List</h1>
      {loading && <p>Loading toys...</p>}
      {error && <p>{error}</p>}
      <ul>
        {toys.map((toy) => (
          <li key={toy.id}>{toy.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
