
export interface ISettingsState {
    rows: number;
    cols: number;
}

export const initialState: ISettingsState = {
    rows: 10, cols: 10
}

export enum ISettingsActionType {
    UPDATE_ROWS = 'update-rows',
    UPDATE_COLS = 'update-cols'
}

export interface ISettingsAction {
    type: ISettingsActionType;
    payload: any;
}

export const settingsReducer = (state: ISettingsState, action: ISettingsAction) => {
    switch (action.type) {
        case ISettingsActionType.UPDATE_ROWS:
            return { ...state, rows: action.payload };
        case ISettingsActionType.UPDATE_COLS:
            return { ...state, cols: action.payload };
        default:
            return state;
    }
}

//const settingsContext = createContext(useReducer(settingsReducer, initialState));

//export default settingsContext;