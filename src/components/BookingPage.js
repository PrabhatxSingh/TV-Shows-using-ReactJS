import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CSS/BookingPage.css';

function BookingPage() {
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
    <div className="booking-page">
      <div className="booking-page-container">
      {data.image ? <img src={data.image.medium} alt={data.name} /> : null}
        <div className="booking-page-info">
        <h2>{data.name}</h2>
        <p dangerouslySetInnerHTML={{ __html: data.summary }}></p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="tickets">Number of Tickets:</label>
              <input type="number" id="tickets" />
            </div>
            <button type="submit">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
