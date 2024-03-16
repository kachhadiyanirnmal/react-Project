import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "reactstrap";

export default function Product() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: 'https://fakestoreapi.com/products',
    })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("Error:", err);                                         
      });
  }, []);
  return (
    <div className="m-3">
      <Table striped>
        <thead>
          <tr>
            <th>sr.</th>
            <th>Image</th>
            <th className="text-center">Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(products) &&
            products.map((product, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <img style={{height:"50px"}} src={product.image} alt={product.title} />
                </td>
                <td className="text-center">{product.title}</td>
                <td color="danger">
                <Button color="danger">Show Product</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
