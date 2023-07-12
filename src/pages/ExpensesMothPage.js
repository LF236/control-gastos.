import React from 'react';
import MonthNavBar from '../components/ui/MonthNavBar';
import BalanceByMothComponent from '../components/MothInfo/BalanceByMothComponent';
import ListExpesivesCmp from '../components/MothInfo/ListExpesivesCmp';

const ExpensesMothPage = () => {
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