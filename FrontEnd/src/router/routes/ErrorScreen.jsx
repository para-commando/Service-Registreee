import { useRouteError } from 'react-router-dom';

function ErrorScreen() {
  const error = useRouteError();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 to-gray-800 text-white p-6 animate-fadeIn'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold mb-4 animate-pulse'>Oops!</h1>
        <p className='text-xl mb-4'>Sorry, an unexpected error has occurred.</p>
        <p className='text-lg italic'>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <img
        src='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Disappointed%20Face.png'
        alt='Disappointed Face'
        // width='55'
        // height='55'
        className='self-center w-25 h-25'
      />
    </div>
  );
}

export default ErrorScreen;
