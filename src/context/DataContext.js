import axios from "axios";
import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    
    const [charData, setCharData] = useState([]);

    const url = "https://private-efd5e-mythologicalcharactersapi.apiary-mock.com/characters";

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(url);
            setCharData(response.data[0].Characters);
        };
        fetchData();
    }, []);

    const values = {charData, setCharData};

    return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataContext;

