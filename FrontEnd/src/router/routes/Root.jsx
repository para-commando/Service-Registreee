import {
  Outlet,
  Link,
  useLoaderData,
  Form,
  NavLink,
  useNavigate,
  useSubmit,
} from 'react-router-dom';
import { matchSorter } from 'match-sorter';
import plusIcon from '../../assets/plus.png';
import SearchIcon from '../../assets/magnifier.png';
import appLogo from '../../assets/service.png';

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export async function loader({ request }) {
  try {
    const url = new URL(request.url);
    const q = url.searchParams.get('q') ? url.searchParams.get('q').trim() : '';
    const response = await axios.get('http://localhost:3000/services');

    let services = response.data;
    if (q.length > 0) {
      services = matchSorter(response.data, q, {
        keys: [
          { threshold: matchSorter.rankings.WORD_STARTS_WITH, key: 'name' },
        ],
      });
    }

    return { services }; // Return the services data
  } catch (error) {
    // Handle error (returning an empty object or a specific error structure might be useful)
    return { services: [] }; // Returning an empty array as a fallback
  }
}

export default function Root() {
  const { services, q = '' } = useLoaderData();
  const navigate = useNavigate(); // Get the navigate function from React Router
  const [inputValue, setInputValue] = useState(q || '');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    submit(event.currentTarget.form);
  };
  const submit = useSubmit();
  return (
    <>
      <div className='flex h-full'>
        <div
          id='sidebar'
          className='w-[24vw] bg-gray-800 text-white pt-4 pl-5 pb-3 h-[100vh]'
        >
          <div className='flex justify-evenly items-center mb-1'>
            <h1 className='text-2xl font-bold '>Service Registree</h1>
            <Link to={`/login`}>
              {' '}
              <img
                src={appLogo}
                alt=''
                className='w-10 h-10 mb-3 hover:scale-125 duration-300 ease-in-out transform'
              />
            </Link>
          </div>
          <div className='w-[95%] flex justify-between'>
            <Form
              id='search-form'
              role='search'
              className='mb-4 w-[80%] relative flex'
            >
              <input
                id='q'
                aria-label='Search services'
                placeholder='Search Services...'
                type='search'
                name='q'
                value={inputValue}
                className='w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-11 rounded-xl duration-300 ease-in-out transform hover:scale-105'
                onChange={handleInputChange}
              />

              <img
                src={SearchIcon}
                className='w-8 h-8 cursor-pointer absolute left-1 top-1 duration-300 ease-in-out transform hover:scale-125'
                alt='Search icon'
              />
            </Form>
            <div className='w-[15%]'>
              <img
                src={plusIcon}
                className='w-10 h-10 cursor-pointer duration-300 ease-in-out transform hover:scale-125'
                alt=''
                onClick={() => {
                  navigate(`/home/services/create`);
                }}
              />
            </div>
          </div>
          {errorMessage && (
            <div className='text-red-500 text-sm mt-1'>{errorMessage}</div>
          )}

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
              : 'flex-1 bg-gray-100 h-[100vh]'
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
