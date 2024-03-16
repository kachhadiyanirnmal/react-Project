// import React, { useEffect, useState } from "react";
// import axios from 'axios';

// export default function Productpage() {
// let [data,setdata] = useState({});
// let data = useParams()
//   useEffect(() => {
//     axios.get(`https://fakestoreapi.com/products/${data.Productid}`)
//       .then((res) => {
//         console.log("---------res---------", res.data);
//         setdata (res?.data);
//       })
//       .catch((err) => {
//         console.log("---------err---------", err);
//       });
//   }, []);

//   return (
//     <div className="d-flex justify-content-center">
//       <div>
//         <img src={data?.image} alt="" />
//       </div>
//     </div>
//   );
// }
