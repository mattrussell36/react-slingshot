import {
  SAVE_FUEL_SAVINGS,
  CALCULATE_FUEL_SAVINGS,
  saveFuelSavings,
  calculateFuelSavings
} from './fuelSavingsActions';

import MockDate from 'mockdate';

import {getFormattedDateTime} from '../utils/dates';

describe('Actions', () => {
  let dateModified;
  beforeAll(() => {
    MockDate.set(new Date());
    dateModified = getFormattedDateTime();
  });
  afterAll(() => MockDate.reset());

  const appState = {
    newMpg: 20,
    tradeMpg: 10,
    newPpg: 1.50,
    tradePpg: 1.50,
    milesDriven: 100,
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  };

  it('should create an action to save fuel savings', () => {
    const actual = saveFuelSavings(appState);
    const expected = {
      type: SAVE_FUEL_SAVINGS,
      dateModified,
      settings: appState
    };

    expect(actual).toEqual(expected);
  });

  it('should create an action to calculate fuel savings', () => {
    const fieldName = 'newMpg';
    const value = 100;
    const actual = calculateFuelSavings(appState, fieldName, value);
    const expected = {
      type: CALCULATE_FUEL_SAVINGS,
      dateModified,
      settings: appState,
      fieldName,
      value
    };

    expect(actual).toEqual(expected);
  });
});
