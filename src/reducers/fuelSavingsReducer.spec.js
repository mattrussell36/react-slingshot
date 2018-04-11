import {
  SAVE_FUEL_SAVINGS,
  CALCULATE_FUEL_SAVINGS
} from '../actions/fuelSavingsActions';
import reducer from './fuelSavingsReducer';
import {getFormattedDateTime} from '../utils/dates';

describe('Reducers::FuelSavings', () => {
  const getInitialState = () => {
    return {
      newMpg: '',
      tradeMpg: '',
      newPpg: '',
      tradePpg: '',
      milesDriven: '',
      milesDrivenTimeframe: 'week',
      displayResults: false,
      dateModified: null,
      necessaryDataIsProvidedToCalculateSavings: false,
      savings: {
        monthly: 0,
        annual: 0,
        threeYear: 0
      },
      isSaving: false,
    };
  };

  const getAppState = () => {
    return {
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
      },
      isSaving: false,
    };
  };
  const dateModified = getFormattedDateTime();

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle SAVE_FUEL_SAVINGS', () => {
    const action = { type: SAVE_FUEL_SAVINGS, dateModified, settings: getAppState() };
    const expected = Object.assign(getAppState(), { 
      dateModified,
      isSaving: true,
    });

    expect(reducer(getAppState(), action)).toEqual(expected);
  });

  it('should handle CALCULATE_FUEL_SAVINGS', () => {
    const action = { type: CALCULATE_FUEL_SAVINGS, dateModified, settings: getAppState(), fieldName: 'newMpg', value: 30 };

    const expectedMpg = 30;
    const expectedSavings = { monthly: '$43.33', annual: '$519.96', threeYear: '$1,559.88' };

    expect(reducer(getAppState(), action).newMpg).toEqual(expectedMpg);
    expect(reducer(getAppState(), action).savings).toEqual(expectedSavings);
  });
});
