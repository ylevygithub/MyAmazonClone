import React, {createContext, useContext,
    useReducer } from 'react'

// Preapares the DataLayer
export const StateContext = createContext()

// Wrap our app and provide the Data Layer
const StateProvider = ({ reducer, initialState, children }) => (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
                {children}
        </StateContext.Provider>
)

export default StateProvider;
// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
