import { 
    put, 
    takeLatest, 
    call 
} from 'redux-saga/effects';
import { 
    SAVE_FUEL_SAVINGS,
    SAVE_FUEL_SAVINGS_SUCCESS
} from '../actions/fuelSavingsActions';

export function save() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true)
        }, 1500);
    });
}

export function* saveFuelSavings() {
    try {
        yield call(save);
        yield put({
            type: SAVE_FUEL_SAVINGS_SUCCESS,
        });
    } catch(error) {
        console.error(error); // eslint-disable-line
    }
}

export default [
    takeLatest(SAVE_FUEL_SAVINGS, saveFuelSavings)
]