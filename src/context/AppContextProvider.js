import { createContext, useState } from "react";
import { useQuery } from "react-query";
import { getPublicGists } from "../services/gistService";
export const AppContext = createContext();

export const AppContextProvider = (props) =>{
    const { isLoading, error, data:gists } = useQuery('gistData', () => getPublicGists(),[]);    
    const [filteredData, setFilteredData] = useState([]);
    const [showFilteredData, setShowFilterData] = useState(false);

    return(
        <AppContext.Provider
          value={{
            gists:showFilteredData ? filteredData: gists?.data ?? [],
            error:error,
            isLoading:isLoading,
            getGistById: (id) => gists?.data?.filter(gist => gist.id === id),
            FilterGistsByName: (event) => {
              // function to filter the data by username
              if(event.target.value){
                setShowFilterData(true);
                const searchText = event.target.value?.toLowerCase();
                const newData = gists?.data?.filter(gist => gist?.owner?.login?.toLowerCase().includes(searchText));
                setFilteredData(newData);
              }else{
                setShowFilterData(false);
                setFilteredData([]);
              }
            }
          }}
        >
        {props.children}
        </AppContext.Provider>
    )
}