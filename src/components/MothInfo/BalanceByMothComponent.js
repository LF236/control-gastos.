import React, { useContext, useEffect } from 'react';
import { CostContext } from '../../context/CostContext';
import { filteredCosts } from '../../helpers/filteredCosts';
import '../../styles/components/blanceByMoth.scss';

const BalanceByMothComponent = () => {
    const { state, dispatch } = useContext( CostContext );

    useEffect( () => {        
        const { filteredList, income, spent } = filteredCosts( state.allCost, state.mothSelected );
        dispatch({
            type: 'setBalanceOfMoth',
            payload: {
                selectedCostByMoth: filteredList,
                income: income,
                spent: spent
            }
        });
    }, [ state.mothSelected, state.allCost ])
    
    return (
        <div className='container mt-4 p-4 container-balance shadow'>
            <h5 className='text-center font-weight-bold'>Balance del mes</h5>
            <p className='h1 font-weight-bold text-center mt-3'>${ state.selectedMoth.income - state.selectedMoth.spent }</p>
            <div className='container'>
                <div className='row flex-nowrap'>
                    <div className='col-sm border-right text-center income'>
                        <span className='h5'>Ingresos</span>
                        <br />
                        <span className='h2 font-weight-bold'>+${ state.selectedMoth.income }</span>
                    </div>
                    <div className='col-sm text-center cost'>
                        <span className='h5'>Gastos</span>
                        <br />
                        <span className='h2 font-weight-bold'>-${ state.selectedMoth.spent }</span>
                    </div>
                </div>                
            </div>

            <div className='container text-center mt-4 analytics'>
                <span className='text-secondary'>Ver analíticas</span> <br />
                <i className='fa-solid fa-chevron-down text-secondary'/>
            </div>
        </div>
    );
}

export default BalanceByMothComponent;