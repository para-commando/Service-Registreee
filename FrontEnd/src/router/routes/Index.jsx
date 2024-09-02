export default function Index() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white'>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-md text-center text-gray-800'>
        <h1 className='text-3xl font-bold mb-4 text-indigo-600'>
          Welcome to Service Registree Admin portal
        </h1>
        <p className='text-lg mb-6'>
          Easily manage and register your services with our intuitive platform.
        </p>
        <a
          href='/services/create'
          className='inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out'
        >
          Add Service
        </a>
        <br />
        
      </div>
    </div>
  );
}
