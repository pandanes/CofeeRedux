//ACTIONS TYPE OR ACTION CREATOR
export const MAIN_ACTIONS = Object.freeze({
  TAMBAH_QTY: `../../views/main/tambahQty`,
  KURANG_QTY: `../../views/main/kurangQty`,
  HITUNG_TOTAL: `../../views/main/hitungTotal`,
  HITUNG_DISCOUNT: `../../views/main/hitungDiscount`,
  HITUNG_TOTALPRICE: `../../views/main/hitungTotalprice`,
})

//ACTIONS
export const mainActions = Object.freeze({
  tambahQty: () => ({ type: MAIN_ACTIONS.TAMBAH_QTY }),
  kurangQty: () => ({ type: MAIN_ACTIONS.KURANG_QTY }),
  hitungTotal: () => ({ type: MAIN_ACTIONS.HITUNG_TOTAL }),
  hitungDiscount: () => ({ type: MAIN_ACTIONS.HITUNG_DISCOUNT }),
  hitungTotalPrice: () => ({ type: MAIN_ACTIONS.HITUNG_TOTALPRICE }),
})

/**
 * Reducer
 */

const initState = {
    qty: 0,
    price: 10,
    total: 0,
    discount: 0.1,
    totalPrice: 0,
    newDiscount: 0
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case MAIN_ACTIONS.TAMBAH_QTY:
      return { ...state, qty: state.qty + 1,
        total: state.price * (state.qty + 1),
        discount: 0.1 * state.price * (state.qty + 1),
        }
    case MAIN_ACTIONS.HITUNG_TOTALPRICE:
      return { ...state,
        totalPrice: state.total - state.discount
        }
    case MAIN_ACTIONS.KURANG_QTY:
      return { ...state, qty: state.qty - 1 }
    default:
      return state
  }
}

export default reducer
