import { Outlet, Link, useLoaderData, Form, NavLink } from 'react-router-dom';
import plusIcon from '../../assets/plus.png';
import SearchIcon from '../../assets/magnifier.png';
import appLogo from '../../assets/service.png';
import { mockData } from '../../mockData';
import axios from 'axios';

export async function loader() {
  try {
    const response = await axios.get('http://localhost:3000/services');
    const services = response.data; // Extract data from the response
    return { services }; // Return the services data
  } catch (error) {
    console.error('🚀 ~ loader ~ error:', error); // Better use of console.error
    // Handle error (returning an empty object or a specific error structure might be useful)
    return { services: [] }; // Returning an empty array as a fallback
  }
}
export async function action() {
  const services = { name: 'Service', id: 4 };
  return { name: 'Service', id: 4 };
}
export default function Root() {
  const { services } = useLoaderData();

  return (
    <>
      <div className='flex h-full'>
        <div
          id='sidebar'
          className='w-[24vw] bg-gray-800 text-white pt-4 pl-5 pb-3 h-[100vh]'
        >
          <div className='flex justify-evenly items-center mb-1'>
            <h1 className='text-2xl font-bold '>Service Registree</h1>
            <Link to={`/`}>
              {' '}
              <img
                src={appLogo}
                alt=''
                className='w-10 h-10 mb-3 hover:scale-125 duration-300 ease-in-out transform'
              />
            </Link>
          </div>
          <div className='w-[95%] flex justify-between'>
            <form
              id='search-form'
              role='search'
              className='mb-4 w-[80%] relative flex'
            >
              <input
                id='q'
                aria-label='Search contacts'
                placeholder='Search Services...'
                type='search'
                name='q'
                className='w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-11 rounded-xl duration-300 ease-in-out transform hover:scale-105'
              />

              <img
                src={SearchIcon}
                className='w-8 h-8 cursor-pointer absolute left-1 top-1 duration-300 ease-in-out transform hover:scale-125'
                alt=''
              />
            </form>
            <Form method='post' className='w-[15%]'>
              <div className='w-full'>
                <img
                  src={plusIcon}
                  className='w-10 h-10 cursor-pointer duration-300 ease-in-out transform hover:scale-125'
                  alt=''
                />
              </div>
            </Form>
          </div>
          <nav className='mt-3'>
            {services.length ? (
              <ul className='mr-7 flex flex-col gap-2'>
                {services.map((item) => {
                  return (
                    <NavLink
                      to={`services/${item.id}`}
                      className={({ isActive, isPending }) => {
                        return isActive
                          ? 'text-white font-semibold transition duration-300 ease-in-out transform scale-110'
                          : isPending
                          ? 'text-blue-600 font-semibold transition duration-700 ease-in-out transform'
                          : '';
                      }}
                    >
                      <li className='mb-2 bg-slate-900 rounded-2xl p-3 hover:bg-black '>
                        {item.name}
                      </li>
                    </NavLink>
                  );
                })}
              </ul>
            ) : (
              <div className='text-white text-xl font-semibold'>
                No Services Available at the moment
              </div>
            )}
          </nav>
        </div>
        <div
          id='detail'
          className={
            navigation.state === 'loading'
              ? 'flex items-center justify-center h-[100vh]'
              : 'flex-1 p-6 bg-gray-100 h-[100vh]'
          }
        >
          {navigation.state === 'loading' ? (
            <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500'></div>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </>
  );
}
