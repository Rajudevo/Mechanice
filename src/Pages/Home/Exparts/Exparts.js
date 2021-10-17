import React from 'react';
import expart1 from '../../../Images/Experts/expart1.jpg'
import expart2 from '../../../Images/Experts/expart2.jpg'
import expart3 from '../../../Images/Experts/expart3.jpg'
import expart4 from '../../../Images/Experts/expart4.jpg'
import expart5 from '../../../Images/Experts/expart5.jpg'
import Expart from '../Expart/Expart';

const experts = [
    {
        img: expart1,
        name: 'Sarwan k',
        expertize: 'Machine'
    },

    {
        img: expart2,
        name: 'Sarwan k',
        expertize: 'Machine'
    },

    {
        img: expart3,
        name: 'Sarwan k',
        expertize: 'Machine'
    },

    {
        img: expart4,
        name: 'Sarwan k',
        expertize: 'Machine'
    },

    {
        img: expart5,
        name: 'Sarwan k',
        expertize: 'Machine'
    },
]
const Exparts = () => {
    return (
        <div className="container">
            <h2 className="text-primary mt-5">our exparts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expart
                        key ={expert.name}
                        expert ={expert}
                    
                    ></Expart>)
                    
                }

            </div>
        </div>
    );
};

export default Exparts;