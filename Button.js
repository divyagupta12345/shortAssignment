import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      
      <button>
        <Link to="/PageButton">Get More information</Link>
      </button>
    </div>
  );
}

export default Home;



