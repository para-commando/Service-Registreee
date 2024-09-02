import React from 'react';
import { Form, useLoaderData, redirect, useNavigate } from 'react-router-dom';
import appLogo from '../../assets/service.png';
import axios from 'axios';

export async function createServiceApiCall(payload) {
  try {
    const response = await axios.post(
      `http://localhost:3000/services`,
      payload
    );
    const service = response.data; // Extract data from the response
    return { service }; // Return the services data
  } catch (error) {
    console.error('🚀 ~ loader ~ error:', error);
    throw new Error('Data creating process failed');
  }
}

export async function updateService(payload, serviceId) {
  try {
    const response = await axios.patch(
      `http://localhost:3000/services/${serviceId}`,
      payload
    );
    const service = response.data; // Extract data from the response
    return { service }; // Return the services data
  } catch (error) {
    debugger
    console.error('🚀 ~ loader ~ error:', error);
    throw new Error('Data updating process failed');
  }
}

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
  const navigate = useNavigate(); // Get the navigate function from React Router

  const { service } = useLoaderData();
  const handleDelete = async (serviceId) => {
    if (!confirm('Are you sure you want to delete this service?')) {
      return;
    }
    try {
      await axios.delete(`http://localhost:3000/services/${serviceId}`);
      // Refresh the current route to update the list of services
      navigate('.', { replace: true });

      // Then redirect to the home page
      navigate('/');
    } catch (error) {
      console.error('🚀 ~ loader ~ error:', error);
      throw new Error('Data deletion process failed');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-orange-600 to-gray-200 w-full'>
      <div className='bg-white rounded-lg p-3 w-[30vw]   mx-auto my-8'>
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
            <p className='text-gray-600 mb-4'>Description: {service?.description}</p>
          )}

          {service?.address && (
            <p className='text-gray-600 mb-4'>Address: {service?.address}</p>
          )}
          {service?.contact && (
            <p className='text-gray-600 mb-4'>Contact: {service?.contact}</p>
          )}
          <div className='flex justify-evenly items-center'>
            <button
              className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition hover:scale-105 font-semibold'
              onClick={() => {
                navigate(`/services/${service.id}/edit`);
              }}
            >
              Edit Service
            </button>
            <button
              className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 font-semibold'
              onClick={() => handleDelete(service.id)}
            >
              Delete Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
