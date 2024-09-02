import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';

function App() {
  const [data, setData] = useState({ projects: [], recommendations: [] ,skills: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <HomePage data={data} />
    </>
  );
}

export default App;
