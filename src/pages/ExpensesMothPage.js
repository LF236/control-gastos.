import React, { useEffect, useContext } from 'react';
import MonthNavBar from '../components/ui/MonthNavBar';
import BalanceByMothComponent from '../components/MothInfo/BalanceByMothComponent';
import ListExpesivesCmp from '../components/MothInfo/ListExpesivesCmp';
import { getAllListCostRequest } from '../services/getAllListCostRequest';
import { CostContext } from '../context/CostContext';
import CmpModal from '../components/ui/CmpModal';

const ExpensesMothPage = () => {
    const { dispatch, state } = useContext( CostContext );

    useEffect( () => {
        dispatch({
            type: 'startLoadingGetAllCost'
        });

        getAllListCostRequest().then( res => {
            dispatch({
                type: 'setAllListCosts',
                payload: res
            });
        } )
        .catch( err => {
            dispatch({
                type: 'setAllListCosts',
                payload: []
            });
        } )
        .finally( () => {
            dispatch({
                type: 'stopLoadingGetAllCost'
            });
        } )
    }, [] );

    if( state.isLoading ) {
        return <></>
    }

    return (
        <>
            <MonthNavBar />
            <BalanceByMothComponent />

            <div className='mt-4'>
                <ListExpesivesCmp />
            </div>       

            <CmpModal />     
        </>
    );
}

export default ExpensesMothPage;