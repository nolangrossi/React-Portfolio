import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/nolangrossi/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error('Error fetching repos:', error));
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>My GitHub Repositories</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {repos.map(repo => (
          <li key={repo.id} style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
            <h2 style={{ margin: '0 0 10px 0', color: '#007BFF' }}>{repo.name}</h2>
            <p style={{ margin: '0 0 10px 0', color: '#555' }}>{repo.description}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'none' }}>View Repository</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;