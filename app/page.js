'use client'
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=' flex justify-center flex-col  mt-[3rem]'>
     <p className='text-2xl mb-7'>The list of all the ledgers</p>
      <table className='border-2'>
        <thead>
          <tr>
            <th style={{ padding: '1rem' }}>#</th>
            <th style={{ padding: '1rem' }}>Title</th>
            <th style={{ padding: '1rem' }}>Body</th>
            <th style={{ padding: '1rem' }}>UserId</th>
            <th style={{ padding: '1rem' }}>Id</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'rgb(50, 50, 50)' : 'rgb(0, 0, 0)' }}>
              <td className='text-white' style={{ padding: '1rem' }}>{index}</td>
              <td className='text-white' style={{ padding: '1rem' }}>{d.title}</td>
              <td className='text-white' style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', padding: '1rem' }}>{d.body}</td>
              <td className='text-white' style={{ padding: '1rem' }}>{d.userId}</td>
              <td className='text-white' style={{ padding: '1rem' }}>{d.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
