import 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>

    
    <div className='bg-cover bg-center bg-[url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1340,w_1072/v1684852612/assets/ba/4947c1-b862-400e-9f00-668f4926a4a2/original/Ride-with-Uber.png)] h-screen pt-8  flex justify-between flex-col w-full' >
      <img className='w-16 ml-8' src='https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n'alt='uber logo' />
      <div className='bg-white pb-7 py-4 px-4' >
        <h2 className='text-3xl font-bold' >Get Started with Uber</h2>
        <Link to={'/login'} className='flex justify-center items-center  w-full bg-black text-white py-3 mt-5 rounded' >Continue</Link>
      </div>
    </div>


    </div>
  )
}

export default Start