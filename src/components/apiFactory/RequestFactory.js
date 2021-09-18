
import React, { useState } from 'react';
import './RequestFactoryStyler.css'

const RequestFactory = () => {

  const [Response, setResponse] = React.useState([]);

  const getPost = () => {
    const result = fetch('https://jsonplaceholder.typicode.com/posts',
      {

        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }

      }).then(res => res.json())
      .then(result => {
        setResponse([result]);
      })
  }



  return (
    <div id="from-controller">
      <div id="responseBody_Container">        
        {Response.map((resp) => {
          return <pre >{JSON.stringify(resp, null, 2)}</pre>
        })}
      </div>

    </div>
  )
};

export default RequestFactory;



