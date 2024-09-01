import React from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import appLogo from '../../assets/service.png';
import axios from 'axios';

export async function loader({ params }) {
  try {
    const response = await axios.get(
      `http://localhost:3000/services/${params.serviceId}`
    );
    const service = response.data; // Extract data from the response
    return { service }; // Return the services data
  } catch (error) {
    console.error('🚀 ~ loader ~ error:', error); // Better use of console.error
    // Handle error (returning an empty object or a specific error structure might be useful)
    return { service: {} }; // Returning an empty array as a fallback
  }
}

function Services() {
  const { service } = useLoaderData();

  return (
    <div className='bg-white shadow-md rounded-lg p-3 max-w-md mx-auto my-8'>
      <div className='text-center mb-6'>
        <img
          className='w-32 h-32 mx-auto rounded-full border-4 border-blue-500 p-1 duration-300 ease-in-out transform hover:scale-105'
          src={service?.image || appLogo}
          alt={`${service?.name} Service`}
        />
      </div>

      <div className='text-center'>
        <h1 className='text-2xl font-bold mb-2 text-gray-800'>
          {service?.name || <i>No Service Name</i>}
        </h1>

        {service?.description && (
          <p className='text-gray-600 mb-4'>{service?.description}</p>
        )}

        <div className='flex justify-evenly items-center'>
          <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition hover:scale-105 font-semibold'>
            Edit Service
          </button>
          <button
            className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 font-semibold'
            onClick={() => {
              if (!confirm('Are you sure you want to delete this service?')) {
                return;
              }
              // Delete action here
            }}
          >
            Delete Service
          </button>
          <button className='bg-[#d8cdaf] text-black border-2 py-2 px-4 rounded hover:bg-[#c7b98e] transition duration-300 ease-in-out transform hover:scale-105 font-semibold'>
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
