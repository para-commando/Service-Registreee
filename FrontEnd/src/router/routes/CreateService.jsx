import { Form, redirect, useNavigate } from 'react-router-dom';
import { createServiceApiCall } from './Services';
import { useState } from 'react';
export async function action({ request }) {
   
  const formData = await request.formData();
  const cratePayload = Object.fromEntries(formData);
  cratePayload.is_active = true;
  const { service } = await createServiceApiCall(cratePayload);

  return redirect(`/home/services/${service.id}`);
}
function CreateService() {
  const navigate = useNavigate(); // Get the navigate function from React Router
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    contact: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (formData.name.trim() === '') {
      errors.name = 'Service Name is required';
    }
    if (formData.description.trim() === '') {
      errors.description = 'Service Description is required';
    }
    if (formData.address.trim() === '') {
      errors.address = 'Service Address is required';
    }
    if (formData.contact.trim() === '') {
      errors.contact = 'Service Contact is required';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Proceed with form submission logic here
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-400 to-blue-900'>
      <h1 className='font-semibold text-5xl mb-10 text-white'>Add Service</h1>
      <Form
      method="post"
      id="contact-form"
      className="w-[30vw] mx-auto p-6 bg-white shadow-md rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Service Name
        </label>
        <input
          placeholder="Service Name"
          aria-label="Service name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full p-2 border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Service Description
        </label>
        <input
          type="text"
          name="description"
          placeholder="This is a description of the service"
          value={formData.description}
          onChange={handleChange}
          className={`w-full p-2 border ${
            errors.description ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.description && (
          <p className="text-red-500 text-xs mt-1">{errors.description}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Service Address
        </label>
        <input
          placeholder="Service Address"
          aria-label="Service address"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className={`w-full p-2 border ${
            errors.address ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.address && (
          <p className="text-red-500 text-xs mt-1">{errors.address}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Service Contact
        </label>
        <input
          placeholder="Service Contact"
          aria-label="Service contact"
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className={`w-full p-2 border ${
            errors.contact ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.contact && (
          <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
        )}
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
        <button
          type="button"
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={() => {
            navigate('/home');
          }}
        >
          Discard
        </button>
      </div>
    </Form>
    </div>
  );
}

export default CreateService;
