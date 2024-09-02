import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';

function App() {
  const [data, setData] = useState({ projects: [], recommendations: [] ,skills: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const [projectsResponse, recommendationsResponse,skillsResponse] = await Promise.all([
          fetch('http://localhost:3001/projects'),
          fetch('http://localhost:3001/recommendations'),
          fetch('http://localhost:3001/skills')
        ]);

        
        if (!projectsResponse.ok || !recommendationsResponse.ok || !skillsResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        
        const projectsData = await projectsResponse.json();
        const recommendationsData = await recommendationsResponse.json();
        const skillsData = await skillsResponse.json();

      
        setData({
          projects: projectsData,
          recommendations: recommendationsData,
          skills: skillsData
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <HomePage data={data} />
    </>
  );
}

export default App;
