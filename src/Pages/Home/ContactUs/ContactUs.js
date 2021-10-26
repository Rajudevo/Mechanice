import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" class="form-label">Write details</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
<br />
  <input type="submit" value="Submit" />
</div>
            
        </div>
        
    );
};

export default ContactUs;