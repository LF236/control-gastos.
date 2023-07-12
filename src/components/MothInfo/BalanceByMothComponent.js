import React from 'react';
import '../../styles/components/blanceByMoth.scss';
const BalanceByMothComponent = () => {
    return (
        <div className='container mt-4 p-4 container-balance shadow'>
            <h5 className='text-center font-weight-bold'>Balance del mes</h5>
            <p className='h1 font-weight-bold text-center mt-3'>$1070.50</p>
            <div className='container'>
                <div className='row flex-nowrap'>
                    <div class='col-sm border-right text-center income'>
                        <span className='h5'>Ingresos</span>
                        <br />
                        <span className='h2 font-weight-bold'>+$478.32</span>
                    </div>
                    <div class='col-sm text-center cost'>
                        <span className='h5'>Gastos</span>
                        <br />
                        <span className='h2 font-weight-bold'>-$1452.50</span>
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