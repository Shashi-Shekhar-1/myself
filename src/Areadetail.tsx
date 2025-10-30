// import React, { useState, useEffect } from "react";

// const Areadetail = ({ pincode }) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     if (pincode) {
//       fetch(`https://api.postalpincode.in/pincode/${pincode}`)
//         .then((res) => res.json())
//         .then((result) => {
//           console.log(result);
//           if (result[0].Status.toLowerCase() === "success") {
//             setData(result[0].PostOffice);
//           } else {
//             setData(null);
//           }
//         })
//         .catch(() => setData(null));
//     }
//   }, [pincode]);

//   if (!pincode) return <p>Enter a pincode to see Details.</p>;
//   if (!data) return <p> Invalid pincode...</p>;

//   return (
//     <div>
//       <h3>Post Offices under Pincode: {pincode}</h3>
//       {data.map((office, index) => (
//         <div
//           key={index}
//           style={{
//             border: "1px solid gray",
//             margin: "10px",
//             padding: "10px",
//             borderRadius: "10px",
//           }}
//         >
//           <p>
//             <strong>Area:</strong> {office.Name}
//           </p>
//           <p>
//             <strong>District:</strong> {office.District}
//           </p>
//           <p>
//             <strong>State:</strong> {office.State}
//           </p>
//           <p>
//             <strong>Country:</strong> {office.Country}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Areadetail;

import React, { useState, useEffect } from "react";

const Areadetail = ({ pincode }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (pincode) {
      fetch(https://api.postalpincode.in/pincode/${pincode})
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result[0].Status.toLowerCase() === "success") {
            setData(result[0].PostOffice);
            setError(false);
          } else {
            setData(null);
            setError(true);
          }
        })
        .catch(() => {
          setData(null);
          setError(true);
        });
    }
  }, [pincode]);

  if (!pincode) return <p>Enter a pincode to see details.</p>;
  if (error || !data) return <p>Invalid pincode...</p>;

  return (
    <div>
      <h3>Post Offices under Pincode: {pincode}</h3>
      {data.map((office, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <p>
            <strong>Area:</strong> {office.Name}
          </p>
          <p>
            <strong>District:</strong> {office.District}
          </p>
          <p>
            <strong>State:</strong> {office.State}
          </p>
          <p>
            <strong>Country:</strong> {office.Country}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Areadetail;
