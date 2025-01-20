/* eslint-disable react/prop-types */
// import 'react'

// const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

//   const handleSuggestionClick = (suggestion) => {
//     if (activeField === 'pickup') {
//       setPickup(suggestion)
//     } else if (activeField === 'destination') {
//       setDestination(suggestion)
//     }
//     // setVehiclePanel(true)
//     // setPanelOpen(false)
//   }

//   return (
//     <div>
//       {/* Display fetched suggestions */}
//       {
//         suggestions.map((elem, idx) => (
//           <div key={idx} onClick={() => handleSuggestionClick(elem)} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
//             <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
//             <h4 className='font-medium'>{elem}</h4>
//           </div>
//         ))
//       }
//     </div>
//   )
// }

// export default LocationSearchPanel



import 'react'

const LocationSearchPanel = (props) => {
  console.log(props)


  // sample array for locations

  const locations = [
    "24B, Near Kapoor cafe, Sheriyans Coding School, Bhopal",
    "22D, Near Malhar cafe, Sheriyans Coding School, Bhopal",
    "23F, Near Sharma cafe, Sheriyans Coding School, Bhopal",
    "27K, Near Singhania cafe, Sheriyans Coding School, Bhopal",

  ]


  return (
    <div>
      {/* this is just sample data */}

      {
        locations.map(function (elem, idx) {
          return <div key={idx} onClick={() => {
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} className=' flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start' >

            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full ' ><i className="ri-map-pin-fill"></i></h2>

            <h4 className='font-medium' >{elem}</h4>

          </div>

        })
      }








    </div>
  )
}

export default LocationSearchPanel
