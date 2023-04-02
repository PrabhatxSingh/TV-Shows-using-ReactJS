import React, { useState, useEffect } from 'react';
import './CSS/ApiComponent.css';
import { Link } from "react-router-dom";

function ApiComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="ApiComponent">
      {data.map(item => (
        item.show.image && (
        <div key={item.show.id} className="ApiComponent-item">
            <Link to={`/detail/${item.show.id}`}>
              <img src={item.show.image.medium} alt={item.show.name} />
            </Link>
            <h2>{item.show.name}</h2>
            <p>{item.show.genres[0]}</p>
          </div>
        )
      ))}
      
    </div>
  );
}

export default ApiComponent;
