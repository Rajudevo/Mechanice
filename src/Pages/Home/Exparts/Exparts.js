import React from 'react';
import expart1 from '../../../Images/Experts/expart1.png'
import expart2 from '../../../Images/Experts/expart2.png'
import expart3 from '../../../Images/Experts/expart3.png'
import expart4 from '../../../Images/Experts/expart4.png'
import expart5 from '../../../Images/Experts/expart5.png'
import expart6 from '../../../Images/Experts/expart6.png'
import Expart from '../Expart/Expart';



const experts = [
    {
        img: expart1,
        name: 'Rock D',
        expertize: 'Back trainer'
    },

    {
        img: expart2,
        name: 'Batista',
        expertize: 'Shoulder trainer '
    },

    {
        img: expart3,
        name: 'Ester K',
        expertize: 'Chest trainer  '
    },

    {
        img: expart4,
        name: 'Arbind ',
        expertize: 'Bicep trainer'
    },

    {
        img: expart5,
        name: 'Sarwan k',
        expertize: 'Lower body trainer'
    },

    {
        img: expart6,
        name: 'Kuraz L',
        expertize: 'Main trainer'
    }
]
const Exparts = () => {
    return (
        <div id="experts" className="container">
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