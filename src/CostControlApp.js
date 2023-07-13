import React, { useState, useReducer } from 'react';
import ExpensesMothPage from './pages/ExpensesMothPage';
import './styles/styles.scss';
import { CostContext } from './context/CostContext';
import monthReducer from './reducers/mothReducer';
const init = () => {
    return {
        mothSelected: 'Enero',
        allCost: [],
        isLoading: true,
        selectedMoth: {
            selectedCostByMoth: [],
            income: 0,
            spent: 0
        }
    }
}

const CostControlApp = () => {
    const [ state, dispatch ] = useReducer( monthReducer, {}, init );

    return (
        <CostContext.Provider value={{ state, dispatch }}>
            <div>
                <ExpensesMothPage />
            </div>
        </CostContext.Provider>
    );
}

export default CostControlApp;