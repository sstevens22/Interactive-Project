import React, { useState } from 'react';

const initialState = {
    zodiacsign: 'aries'
    //add other constant like sign in
}

export const Context = React.createContext();

const Store = ({children}) => {
const [state, setState] = useState(initialState)
return(
    <Context.Provider value={[state, setState]}>
        {children}
        </Context.Provider>
)
}

export default Store;