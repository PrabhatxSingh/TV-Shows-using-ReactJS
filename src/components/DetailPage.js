import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './CSS/DetailPage.css';

function DetailPage() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, [id]);

  return (
    <div className="detail-page-container">
      <div className="detail-img">
        {data.image ? <img src={data.image.medium} alt={data.name} /> : null}
      </div>
      <div className="detail-page">
        <h2>{data.name}</h2>
        <p dangerouslySetInnerHTML={{ __html: data.summary }}></p>
        <div className='link'>
        <Link  to={`/detail/${id}/booking`}><button><h3>Book Show</h3></button></Link>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
