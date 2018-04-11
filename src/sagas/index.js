import { all } from 'redux-saga/effects';
import fuelSavingsSagas from './fuelSavingsSagas';

export default function* rootSaga() {
    yield all([
        ...fuelSavingsSagas
    ])
}