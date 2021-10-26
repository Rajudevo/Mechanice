import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';





const Booking = () => {
   
    const{serviceId} = useParams();
    const [serviceDetail, setServiceDetail] = useState({})

    

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setServiceDetail(data));
    },[])
    
    return (
        <div>
            <h2>This is booking {serviceId}</h2>
           
            <h3>{serviceDetail.name}</h3>
            <h5> {serviceDetail.email}</h5>
           
           
        </div>
    );
};

export default Booking;