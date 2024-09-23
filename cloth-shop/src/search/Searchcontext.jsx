import { createContext, useContext, useEffect, useState } from 'react';
import { useProduct } from '../productcontext.jsx/Productcontext.jsx';
//******************************************************************************************* */
export const Searchcontextapi = createContext();
//******************************************************************************************* */
function Searchprovider({ children }) {
  const [searchItem, setSearchItem] = useState("");
  const { menData, womenData, childData } = useProduct();
  const [searchResult, setSearchResult] = useState([]);

  //********************************handle change search input*******************************************/
  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };

//***************************************** filter data*******************************************/ 
  useEffect(() => {
    const alldata = [...childData, ...womenData, ...menData]; 
    const search_params = ['name', 'gender', 'color', 'color2', 'size', 'price']; //select search key
    const result = alldata.filter((data) =>
      search_params.some((param) => {
        if (data[param])
          return data[param].toString().toLowerCase().includes(searchItem.toLowerCase());
        return false;
      })
    );
    setSearchResult(result);
  }, [menData, womenData, childData]);

  return (
    <Searchcontextapi.Provider value={{ searchItem, setSearchItem, searchResult, handleChange }}>
      {children}
    </Searchcontextapi.Provider>
  );
}

const useSearch = () => {
  return useContext(Searchcontextapi);
};

export { useSearch };
export default Searchprovider;