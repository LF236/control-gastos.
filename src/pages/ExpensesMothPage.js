import React, { useEffect, useContext } from 'react';
import MonthNavBar from '../components/ui/MonthNavBar';
import BalanceByMothComponent from '../components/MothInfo/BalanceByMothComponent';
import ListExpesivesCmp from '../components/MothInfo/ListExpesivesCmp';
import { getAllListCostRequest } from '../services/getAllListCostRequest';
import { CostContext } from '../context/CostContext';

const ExpensesMothPage = () => {
    const { dispatch } = useContext( CostContext );

    useEffect( () => {
        dispatch({
            type: 'startLoadingGetAllCost'
        });

        getAllListCostRequest().then( res => {
            dispatch({
                type: 'setAllListCosts',
                payload: res
            });
        } ).finally( () => {
            dispatch({
                type: 'stopLoadingGetAllCost'
            });
        } )
    }, [] );

    return (
        <>
            <MonthNavBar />
            <BalanceByMothComponent />

            <div className='mt-4'>
                <ListExpesivesCmp />
            </div>
        </>
    );
}

export default ExpensesMothPage;