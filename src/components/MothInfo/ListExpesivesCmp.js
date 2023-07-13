import React, { useContext, useEffect, useState } from 'react';
import { CostContext } from '../../context/CostContext';
import { groupByDay, parseDate, sortListOfDates } from '../../helpers/filteredByMoth';
import '../../styles/components/listExpensives.scss';

const calculateIcon = ( status ) => {
    switch( status ) {
        case 'not_check':
            return <i className='far fa-circle incomplete'/>;
        case 'check_false':
            return <i className='fa fa-circle complete-false' aria-hidden='true' />;
        case 'check_true':
            return <i className='fa fa-stop complete-true' aria-hidden='true' />;
        default:
            return <></>;
    }
}

const generateId = ( item ) => {    
    return `${ item.name }_${ item.price }`.replace(/\s+/g, '');
}

const ListExpesivesCmp = () => {
    const [ listGroupedByDay, setListGroupedByDay ] = useState( {} );
    const [ idCollapse, setIdCollapse ] = useState( null );

    const { state, dispatch } = useContext( CostContext );

    useEffect( () => {
        setListGroupedByDay( {} );
        const grouped = groupByDay( state.selectedMoth.selectedCostByMoth );
        setListGroupedByDay( grouped );        
    }, [ state.selectedMoth.selectedCostByMoth ]);
    
    const handleOpenModal = () => {
        dispatch({
            type: 'openModal'
        })
    }

    const handleToggleCollapse = ( id ) => {       
        if( id == idCollapse )  {
            setIdCollapse( null );
        } else {
            setIdCollapse( id );
        }
    }


    return (
        <div className='container mt-4 p-0 list-container'>
            { sortListOfDates( Object.keys( listGroupedByDay ) ).reverse().map( key => (
                <div key={ key }>
                    <span className='font-weight-bold'>{ parseDate( key ) }</span>
                    <ul className='list-group p-0 mt-2'>
                        { listGroupedByDay[ key ].map( itemGroup => (
                            <>
                            <li className='list-group-item mb-2 d-flex justify-content-between align-items-center list-item' key={ `${ itemGroup.nombre }_${ itemGroup.price }` }>
                                <div className='list-item-left'>
                                    { calculateIcon( itemGroup.estado ) }
                                    <span>{ itemGroup.nombre }</span>                    
                                </div>
                                
                                <div className='list-item-right'>
                                    <span className={ `mr-2 ${ itemGroup.tipo === 'income' ? 'more' : 'less' }` }>{ `${ itemGroup.tipo === 'income' ? '+ ' : '- ' } $${ itemGroup.price }` }</span>
                                    <i 
                                        className={ `fa fa-angle-${ generateId( itemGroup ) == idCollapse ? 'up' : 'down' } }` } 
                                        onClick={ () => handleToggleCollapse( generateId( itemGroup ) ) }
                                    />                                    
                                </div>
                            </li>
                            
                            <div className={ `collapse mb-3 ${ generateId( itemGroup ) == idCollapse ? 'show' : '' }` }>
                                <div className='card card-body'>
                                    <div className='container'>
                                        <div className='row flex-nowrap'>
                                            <div className='col-sm border-right text-center'>
                                                <span className='h5'>Cantidad:</span>
                                                <span className='font-weight-bold number'> { itemGroup.price }</span>
                                            </div>

                                            <div className='col-sm text-center border-right'>
                                                <span className='h5'>Tipo:</span>
                                                <span className='font-weight-bold number'> { itemGroup.tipo == 'income' ? 'Ingreso' : 'Gasto' }</span>
                                            </div>

                                            <div className='col-sm text-center'>
                                                <span className='h5'>Fecha:</span>
                                                <span className='font-weight-bold number'> { new Date( itemGroup.fecha ).toLocaleDateString() }</span>
                                            </div>
                                        </div>                
                                    </div>
                                </div>
                            </div>

                            </>
                        ) ) }
                    </ul>
                </div>
            ) ) }

            <div className='fixed-bottom button-add-movement-content' onClick={ handleOpenModal }>
                <a className='btn btn-primary btn-lg btn-block font-weight-bold' href='#' role='button'>
                    Agregar Movimiento
                </a>                
            </div>
        </div>
    );
}

export default ListExpesivesCmp;