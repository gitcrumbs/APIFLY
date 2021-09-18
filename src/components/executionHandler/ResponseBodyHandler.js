import React from 'react';


const ResponseBodyHandler = () => {
    return (

        <div className="container-sm" id="ResponseBodyHandle">

            <div className="input-group">

                <span className="input-group-text">Response Body</span>
                
                <div className="form-control" disabled={true} aria-label="With textarea">
                <pre>Hello Ashwani</pre>
                </div>
              
            </div>


        </div>
    );
};


export default ResponseBodyHandler;

