import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import reducers from './reducers/index';

const persistedReducer = persistReducer({
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: hardSet,
}, reducers)

const store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };