import { Form, useLoaderData, redirect, useNavigate } from 'react-router-dom';
import { updateService } from './Services';
export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  await updateService(updates, params.serviceId);
  return redirect(`/services/${params.serviceId}/`);
}

function EditService() {
  const { service } = useLoaderData();
  const navigate = useNavigate(); // Get the navigate function from React Router

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-indigo-950'>
      <h1 className='font-semibold text-5xl text-white mb-10'>Edit Service</h1>
      <Form
        method='post'
        id='contact-form'
        className='w-[30vw] mx-auto p-6 bg-white shadow-md rounded-lg'
      >
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Service Name
          </label>
          <input
            placeholder='Service Name'
            aria-label='Service name'
            type='text'
            name='name'
            defaultValue={service?.name}
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Service Description
          </label>
          <input
            type='text'
            name='description' // Changed to remove space in the name attribute
            placeholder='This is a description of the service'
            defaultValue={service?.description}
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Service Address
          </label>
          <input
            placeholder='Service address'
            aria-label='Service address'
            type='text'
            name='address'
            defaultValue=''
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Service Contact
          </label>
          <input
            placeholder='Service Contact'
            aria-label='Service Contact'
            type='text'
            name='contact'
            defaultValue=''
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='flex justify-end space-x-3'>
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Save Changes
          </button>
          <button
            type='button'
            className='bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500'
            onClick={() => {
              navigate(`/services/${service.id}`);
            }}
          >
            Discard Changes
          </button>
        </div>
      </Form>
    </div>
  );
}

export default EditService;
