import * as React from 'react';
import { FC, useReducer, useContext, createContext } from 'react';
import { initialState, settingsReducer, ISettingsAction } from './settingsContext';

export const SettingsProvider: FC<{ reducer: typeof settingsReducer, initialState: typeof initialState }> = ({ children, reducer, initialState }) => {
    const t = useReducer(reducer, initialState);
    return <settingsContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </settingsContext.Provider>
}

const settingsContext = createContext<[{
    rows: any;
    cols: number;
} | {
    cols: any;
    rows: number;
}, React.Dispatch<ISettingsAction>]>([initialState, () => { }]);

export const useSettingsProvider = () => useContext(settingsContext);