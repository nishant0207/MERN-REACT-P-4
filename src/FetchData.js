import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Style from './Style.css'

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/users');
        setData(response.data.users);
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const tableHeaders = [
    'Sno',
    'Profile Pic',
    'First Name',
    'Last Name',
    'Gender',
    'E-mail',
    'Username',
    'Domain',
    'IP',
    'University'
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='Body'>
      <h2>Dummy data</h2>
      <table>
        <thead>
          <tr>
            {tableHeaders.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img src={item.image} alt="Profile Pic" style={{ width: '50px', height: '50px' }} />
              </td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.gender}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>{item.domain}</td>
              <td>{item.ip}</td>
              <td>{item.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchData;
