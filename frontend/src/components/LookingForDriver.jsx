/* eslint-disable react/prop-types */
// import 'react'

// const LookingForDriver = (props) => {
//     return (
//         <div>
//             <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
//                 props.setVehicleFound(false)
//             }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
//             <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver</h3>

//             <div className='flex gap-2 justify-between flex-col items-center'>
//                 <img className='h-20' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
//                 <div className='w-full mt-5'>
//                     <div className='flex items-center gap-5 p-3 border-b-2'>
//                         <i className="ri-map-pin-user-fill"></i>
//                         <div>
//                             <h3 className='text-lg font-medium'>Pickup Location</h3>
//                             <p className='text-sm font-medium -mt-1 text-gray-600'>{props.pickup}</p>
//                         </div>
//                     </div>
//                     <div className='flex items-center gap-5 p-3 border-b-2'>
//                         <i className="text-lg ri-map-pin-2-fill"></i>
//                         <div>
//                             <h3 className='text-lg font-medium'>Drop Location</h3>
//                             <p className='text-sm font-medium -mt-1 text-gray-600'>{props.destination}</p>
//                         </div>
//                     </div>
//                     <div className='flex items-center gap-5 p-3'>
//                         <i className="ri-currency-line"></i>
//                         <div>
//                             <h3 className='text-lg font-medium'>₹{props.fare[props.vehicleType]} </h3>
//                             <p className='text-sm font-medium -mt-1 text-gray-600'>By Cash</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default LookingForDriver































import React from 'react';

const LookingForDriver = (props) => {
    return (
        <div className="relative w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
            <h5
                className="p-1 text-center w-full absolute top-2 left-0 cursor-pointer"
                onClick={() => {
                    props.setVehicleFound(false);
                }}
            >
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className="text-2xl font-semibold mb-5 text-center">Looking for a Driver</h3>

            <div className="flex flex-col items-center gap-4">
                <img
                    className="h-20 object-cover rounded-full"
                    src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
                    alt="Driver Icon"
                />
                <div className="w-full">
                    <div className="flex items-center gap-4 p-3 border-b-2">
                        <i className="ri-map-pin-user-fill text-xl"></i>
                        <div>
                            <h3 className="text-lg font-medium">Pickup Location</h3>
                            <p className="text-sm font-medium -mt-1 text-gray-600">{props.pickup}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 border-b-2">
                        <i className="ri-map-pin-2-fill text-xl"></i>
                        <div>
                            <h3 className="text-lg font-medium">Drop Location</h3>
                            <p className="text-sm font-medium -mt-1 text-gray-600">{props.destination}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-3">
                        <i className="ri-currency-line text-xl"></i>
                        <div>
                            <h3 className="text-lg font-medium">₹{props.fare[props.vehicleType]}</h3>
                            <p className="text-sm font-medium -mt-1 text-gray-600">By Cash</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LookingForDriver;
