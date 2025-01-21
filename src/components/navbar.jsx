import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav style={{ backgroundColor: '#333', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src="https://avatars.githubusercontent.com/u/97293503?s=400&u=b29af97ae17d0e2e9949ba065e9a24b13e56f63a&v=4" alt="Nolan Grossi" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
      <span style={{ color: '#fff', fontSize: '1.5em' }}>Nolan Grossi</span>
    </div>
    <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'space-around', flexGrow: 1 }}>
      <li>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', padding: '10px 20px', display: 'block', borderRadius: '5px', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.target.style.backgroundColor = '#555'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>About Me</Link>
      </li>
      <li>
        <Link to="/portfolio" style={{ color: '#fff', textDecoration: 'none', padding: '10px 20px', display: 'block', borderRadius: '5px', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.target.style.backgroundColor = '#555'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>Portfolio</Link>
      </li>
      <li>
        <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', padding: '10px 20px', display: 'block', borderRadius: '5px', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.target.style.backgroundColor = '#555'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>Contact Me</Link>
      </li>
      <li>
        <Link to="/resume" style={{ color: '#fff', textDecoration: 'none', padding: '10px 20px', display: 'block', borderRadius: '5px', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.target.style.backgroundColor = '#555'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>Resume</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;