import { Form, useLoaderData, redirect } from 'react-router-dom';
import { updateService } from './Services';
export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  await updateService(updates, params.serviceId);
  return redirect(`/services/${params.serviceId}/`);
}

function EditService() {
  const { service } = useLoaderData();

  return (
    <Form
      method='post'
      id='contact-form'
      className='max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg'
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

      <div className='flex justify-end space-x-3'>
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          Save
        </button>
        <button
          type='button'
          className='bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500'
        >
          Cancel
        </button>
      </div>
    </Form>
  );
}

export default EditService;
