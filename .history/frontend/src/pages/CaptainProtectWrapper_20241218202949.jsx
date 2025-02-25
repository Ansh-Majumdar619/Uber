import { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CapatainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectWrapper = ({
  // eslint-disable-next-line react/prop-types
  children
}) => {

  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const { setCaptain } = useContext(CaptainDataContext)
  const [isLoading, setIsLoading] = useState(true)




  useEffect(() => {
    if (!token) {
      navigate('/captain-login')
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      if (response.status === 200) {
        setCaptain(response.data.captain)
        setIsLoading(false)
      }
    })
      .catch(() => {

        localStorage.removeItem('token')
        navigate('/captain-login')
      })
  }, [token])



  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }



  return (
    <>
      {children}
    </>
  )
}

export default CaptainProtectWrapper