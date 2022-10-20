import { useEffect, useState } from 'react';
import axios from 'axios';

//codigo viejo
// const useGetProducts = (API) => {
//   //se trajo de producList.jsx
//   const [products, setProducts] = useState([]);
//
//   useEffect(() => {
//     getData();
//   }, []);
//
//   const getData = async () => {
//     const response = await axios.get(API);
//     setProducts(response.data);
//     console.log(response);
//   };
//   return products;
//   //se trajo de productList
// };

// codigo nuevo
const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      setProducts(response.data);
    }

    fetchData();
  }, [API]);
  return products;
};

export default useGetProducts;
