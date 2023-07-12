import React from 'react';
import '../../styles/components/listExpensives.scss';
const ListExpesivesCmp = () => {
    return (
        <div className='container mt-4 p-0 list-container'>
            <span className='font-weight-bold'>Hoy - 6 Dic</span>
            <ul className='list-group p-0 mt-2'>
                <li className='list-group-item mb-2 d-flex justify-content-between align-items-center list-item'>
                    <div className='list-item-left'>
                        <i className='fa fa-stop shadow complete-true' aria-hidden='true' />
                        <span>Netflix</span>                    
                    </div>
                    
                    <div>
                        <span className='mr-2'>-97.63</span>
                        <i className='fa fa-angle-down' aria-hidden='true'></i>
                    </div>
                </li>
                <li className='list-group-item mb-2 d-flex justify-content-between align-items-center list-item'>
                    <div className='list-item-left'>
                        <i className="fa fa-circle shadow complete-false" aria-hidden="true" />
                        <span>Dapibus ac facilisis in</span>
                    </div>
                    
                    <div>
                        <span className='mr-2'>-97.63</span>
                        <i className='fa fa-angle-down' aria-hidden='true'/>
                    </div>
                </li>
                <li className='list-group-item mb-2 d-flex justify-content-between align-items-center'>
                    Morbi leo risus
                    <div>
                        <span className='mr-2'>-97.63</span>
                        <i className='fa fa-angle-down' aria-hidden='true'/>
                    </div>
                </li>
                <li className='list-group-item mb-2 d-flex justify-content-between align-items-center'>
                    Porta ac consectetur ac
                    <div>
                        <span className='mr-2'>-97.63</span>
                        <i className='fa fa-angle-down' aria-hidden='true'/>
                    </div>
                </li>
                <li className='list-group-item mb-2 d-flex justify-content-between align-items-center'>
                    Vestibulum at eros
                    <div>
                        <span className='mr-2'>-97.63</span>
                        <i className='fa fa-angle-down' aria-hidden='true'/>
                    </div>
                </li>
            </ul>

            <span className='font-weight-bold'>Ayer - 5 Dic</span>
            <ul className='list-group mt-2'>
                <li className='list-group-item mb-2 d-flex justify-content-between align-items-center'>
                    Cras justo odio
                    <div>
                        <span className='mr-2'>-97.63</span>
                        <i className='fa fa-angle-down' aria-hidden='true'/>
                    </div>
                </li>
                <li className='list-group-item mb-2 d-flex justify-content-between align-items-center'>
                    Dapibus ac facilisis in
                    <div>
                        <span className='mr-2'>-97.63</span>
                        <i className='fa fa-angle-down' aria-hidden='true'/>
                    </div>
                </li>
                <li className='list-group-item mb-2 d-flex justify-content-between align-items-center'>
                    Morbi leo risus
                    <div>
                        <span className='mr-2'>-97.63</span>
                        <i className='fa fa-angle-down' aria-hidden='true'/>
                    </div>
                </li>
                <li className='list-group-item mb-2 d-flex justify-content-between align-items-center'>
                    Porta ac consectetur ac
                    <div>
                        <span className='mr-2'>-97.63</span>
                        <i className='fa fa-angle-down' aria-hidden='true'/>
                    </div>
                </li>
                <li className='list-group-item mb-2 d-flex justify-content-between align-items-center'>
                    Vestibulum at eros
                    <div>
                        <span className='mr-2'>-97.63</span>
                        <i className='fa fa-angle-down' aria-hidden='true'/>
                    </div>
                </li>
            </ul>

            <span className='font-weight-bold'>Antier - 4 Dic</span>
            <ul className='list-group mt-2'>
                <li className='list-group-item mb-2 d-flex justify-content-between align-items-center'>
                    Cras justo odio
                    <div>
                        <span className='mr-2'>-97.63</span>
                        <i className='fa fa-angle-down' aria-hidden='true'/>
                    </div>
                </li>
                <li className='list-group-item mb-2 d-flex justify-content-between align-items-center'>
                    Dapibus ac facilisis in
                    <div>
                        <span className='mr-2'>-97.63</span>
                        <i className='fa fa-angle-down' aria-hidden='true'/>
                    </div>
                </li>
                <li className='list-group-item mb-2 d-flex justify-content-between align-items-center'>
                    Morbi leo risus
                    <div>
                        <span className='mr-2'>-97.63</span>
                        <i className='fa fa-angle-down' aria-hidden='true'/>
                    </div>
                </li>
                <li className='list-group-item mb-2 d-flex justify-content-between align-items-center'>
                    Porta ac consectetur ac
                    <div>
                        <span className='mr-2'>-97.63</span>
                        <i className='fa fa-angle-down' aria-hidden='true'/>
                    </div>
                </li>
                <li className='list-group-item mb-2 d-flex justify-content-between align-items-center'>
                    Vestibulum at eros
                    <div>
                        <span className='mr-2'>-97.63</span>
                        <i className='fa fa-angle-down' aria-hidden='true'/>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ListExpesivesCmp;