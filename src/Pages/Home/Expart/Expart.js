import React from 'react';




const Expart = ({expert}) => {
    const{name, img, expertize} = expert;
    return (
        <div className="col-lg-4 col-md-6 col-6">
            <img className="w-50" src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger">{expertize}</h5>
        </div>
    );
};

export default Expart;