import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchToys,
  sortAscending,
  sortDescending,
  clearSort,
} from './features/toys/toySlice';

function App() {
  const dispatch = useDispatch();
  const { toys, loading, error, sortType } = useSelector((state) => state.toys);

  useEffect(() => {
    dispatch(fetchToys());
  }, [dispatch]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>🧸 Toy List</h1>
      <div style={{ marginBottom: '10px' }}>
        <button
          onClick={() => dispatch(sortAscending())}
          style={{
            background: sortType === 'asc' ? 'lightgreen' : 'white',
            marginRight: '10px',
          }}
        >
          Sort ⬆️ Ascending
        </button>
        <button
          onClick={() => dispatch(sortDescending())}
          style={{
            background: sortType === 'desc' ? 'lightgreen' : 'white',
            marginRight: '10px',
          }}
        >
          Sort ⬇️ Descending
        </button>
        <button
          onClick={() => dispatch(clearSort())}
          style={{
            background: sortType === 'none' ? 'lightgreen' : 'white',
          }}
        >
          Clear Sort
        </button>
      </div>
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

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchToys } from './features/toys/toySlice';

// function App() {
//   const dispatch = useDispatch();
//   const { toys, loading, error } = useSelector((state) => state.toys);

//   useEffect(() => {
//     dispatch(fetchToys());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>🧸 Toy List</h1>
//       {loading && <p>Loading toys...</p>}
//       {error && <p>{error}</p>}
//       <ul>
//         {toys.map((toy) => (
//           <li key={toy.id}>{toy.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
