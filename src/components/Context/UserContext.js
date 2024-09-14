import { createContext , useState } from "react";

export let userContext = createContext();

export default function UserContectProvider(props){

const [UserToken, setUserToken] = useState(null);

    return <userContext.Provider  value={{UserToken , setUserToken}}>
 {props.children}
    </userContext.Provider>
}

