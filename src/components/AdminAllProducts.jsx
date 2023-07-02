import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/AdminAllProducts.css";

const AdminAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsDetail();
  }, []);

  const productsDetail = async () => {
    let result = await fetch("https://new-folder-eosin.vercel.app/admin/products");
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    console.log(id);
    let result = await fetch(
      `https://new-folder-eosin.vercel.app/admin/product/delete/${id}`,{
        method: "Delete",
        headers : { 
          'Content-Type': 'application/json',
         }
      })

      alert('Product deleted Successfully')
      productsDetail();
  };

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th className="product-sno">S.NO</th>
            <th className="product-width">Name</th>
            <th className="product-width">Price</th>
            <th className="product-width">Brand</th>
            <th className="product-width">Category</th>
            <th className="product-id">ID</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
              <td>{item._id}</td>
              <td>
                <button onClick={() => deleteProduct(item._id)}>Delete</button>{" "}
               <Link to={"/admin/product/update/"+item._id }> <button>edit</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AdminAllProducts;
