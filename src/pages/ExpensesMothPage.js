import React, { useEffect } from 'react';
import MonthNavBar from '../components/ui/MonthNavBar';
import BalanceByMothComponent from '../components/MothInfo/BalanceByMothComponent';
import ListExpesivesCmp from '../components/MothInfo/ListExpesivesCmp';
import { getAllListCostRequest } from '../services/getAllListCostRequest';

const ExpensesMothPage = () => {


    useEffect( () => {
        getAllListCostRequest().then( res => {
            console.log( res );
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