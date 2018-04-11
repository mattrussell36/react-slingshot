import {getFormattedDateTime} from '../utils/dates';

export const SAVE_FUEL_SAVINGS = 'SAVE_FUEL_SAVINGS';
export const SAVE_FUEL_SAVINGS_SUCCESS = 'SAVE_FUEL_SAVINGS_SUCCESS';
export const CALCULATE_FUEL_SAVINGS = 'CALCULATE_FUEL_SAVINGS';

// example of a thunk using the redux-thunk middleware
export function saveFuelSavings(settings) {
  return {
    type: SAVE_FUEL_SAVINGS,
    dateModified: getFormattedDateTime(),
    settings,
  }
}

export function calculateFuelSavings(settings, fieldName, value) {
  return {
    type: CALCULATE_FUEL_SAVINGS,
    dateModified: getFormattedDateTime(),
    settings,
    fieldName,
    value
  };
}
