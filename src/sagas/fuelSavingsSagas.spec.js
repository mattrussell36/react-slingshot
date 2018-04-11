import { call, put } from 'redux-saga/effects';
import { saveFuelSavings, save } from './fuelSavingsSagas';
import { SAVE_FUEL_SAVINGS_SUCCESS } from '../actions/fuelSavingsActions';

describe('Sagas::FuelSavings', () => {
    const gen = saveFuelSavings();
    
    it('should save', () => {
        expect(gen.next().value).toEqual(call(save));
        expect(gen.next().value).toEqual(put({ type: SAVE_FUEL_SAVINGS_SUCCESS }));
    })
});
