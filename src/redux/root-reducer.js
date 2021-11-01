import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key : 'root',
    storage,
    whitelist: ['user']
}

const roorReduser =  combineReducers({
    user: userReducer
});

export default persistReducer(persistConfig, roorReduser);

