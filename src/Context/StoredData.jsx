import { useState, createContext, useContext, useEffect } from "react";
import { API_URL } from "../constants/Constants";
import axios from 'axios';

const DataContext = createContext();

const StoredData = ({children}) => {

    // Login
    const [ isLoggedIn, setisLoggedIn ] = useState(false);

    const handleLogin = (user) => {
        setisLoggedIn(true);
        setUser(user);
    }

    const handleLogout = () => {
        setisLoggedIn(false);
        setUser('');
        setUserHeaders('');
        // setMessages([]);
    }
    //User Login

    const [ user, setUser ] = useState('');
    const [ userHeaders, setUserHeaders ] = useState('')

    const setLoginUser = (user) => {
        setUser(user);
    } 

    const handleHeaders = (header) => {
        const updatedHeader = {
            'access-token': header['access-token'],
            uid: header.uid,
            expiry: header.expiry,
            client: header.client,
        }
        setUserHeaders(updatedHeader)
    }


    return (
        <DataContext.Provider value={
            {isLoggedIn, handleLogin, handleLogout, 
            handleHeaders, setLoginUser,userHeaders, user}
            }>
            {children}
        </DataContext.Provider>
    )
};

export const useData = () => {
    const data = useContext(DataContext)

    // return data || { handleHeaders: ()=> {}, handleLogin: ()=> {}}
    return data
}

export default StoredData