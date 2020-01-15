import {
  FETCH_CHARTDATA_START,
  FETCH_CHARTDATA_SUCCESS,
  FETCH_CHARTDATA_FAILURE,
  TOGGLE_VIEW_SWITCH
} from "../actions";

const initialState = {
  chartData: [],
  cryptoData: {
    exchange: "coinbase",
    trading_pair: "btc_usd",
    timeFrame: "Day"
  },

  gettingCryptoData: false,
  gettingCryptoDataError: null,
  comparativeView: false
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARTDATA_START:
      return {
        ...state,
        gettingCryptoData: true,
        gettingCryptoDataError: ""
      };
    case FETCH_CHARTDATA_SUCCESS:
      return {
        ...state,
        gettingCryptoData: false,
        chartData: action.payload,
        gettingCryptoDataError: ""
      };
    case FETCH_CHARTDATA_FAILURE:
      return {
        ...state,
        gettingCryptoData: false,
        gettingCryptoDataError: action.payload
      };
    case TOGGLE_VIEW_SWITCH:
      return {
        ...state,
        comparativeView: action.payload
      }
    default:
      return state;
  }
};