import { createContext, useContext, useEffect, useState } from 'react'
import { apiproducts } from '../js/config'

export const Productcontextapi = createContext();

function Productprovider({ children }) {

  const [childData, setChildData] = useState([]);
  const [menData, setMenData] = useState([]);
  const [womenData, setWomenData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => { 
    const fetchdata=async()=>{
        const childResponse = await apiproducts.get("/product.json");
        const menResponse = await apiproducts.get("/Men%20product.json");
        const womenResponse = await apiproducts.get("/WomenProduct.json");
        setChildData(childResponse.data);
        setMenData(menResponse.data);
        setWomenData(womenResponse.data);
        setLoading(false);
    }
    fetchdata();

  }, [childData,menData,womenData]);

  return (
    <Productcontextapi.Provider value={{childData,womenData,menData,loading}}>
      {children}
    </Productcontextapi.Provider>
  )
}

const useProduct = () => {
  const product = useContext(Productcontextapi);
  return product
}
export { useProduct }
export default Productprovider