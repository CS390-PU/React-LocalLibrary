import React, { useState, useEffect } from 'react';
import { FaBook, FaUserAlt, FaTags, FaCopy } from 'react-icons/fa'; // Importing icons
import './Home.css';

const Home = () => {
  const [stats, setStats] = useState({
    bookCount: 0,
    bookInstanceCount: 0,
    availableCopies: 0,
    authorCount: 0,
    genreCount: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch stats from the backend
        const response = await fetch(
          'https://shiny-disco-pqwv7qr64jqc97v-3000.app.github.dev/counts'
        );
        const data = await response.json();
        setStats(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats(); // Call the function on component mount
  }, []); // Empty dependency array ensures this runs only once, on mount

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to LocalLibrary</h1>
      <p className="home-description">
        A very basic library management system built as a tutorial example.
      </p>

      <div className="stats">
        <div className="stat-item">
          <FaBook size={50} color="#3498db" /> {/* Icon for Books */}
          <h3>Books</h3>
          <p>{stats.bookCount}</p>
        </div>
        <div className="stat-item">
          <FaCopy size={50} color="#e67e22" /> {/* Icon for Copies */}
          <h3>Copies</h3>
          <p>{stats.bookInstanceCount}</p>
        </div>
        <div className="stat-item">
          <FaCopy size={50} color="#27ae60" /> {/* Icon for Available Copies */}
          <h3>Available Copies</h3>
          <p>{stats.availableCopies}</p>
        </div>
        <div className="stat-item">
          <FaUserAlt size={50} color="#9b59b6" /> {/* Icon for Authors */}
          <h3>Authors</h3>
          <p>{stats.authorCount}</p>
        </div>
        <div className="stat-item">
          <FaTags size={50} color="#f39c12" /> {/* Icon for Genres */}
          <h3>Genres</h3>
          <p>{stats.genreCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
