import React, { useState, useEffect, useContext, useRef } from 'react';
import { CostContext } from '../../context/CostContext';
import { months } from '../../assets/months';
import '../../styles/components/mothNavBar.scss';

const MonthNavBar = () => {
    const { state, dispatch } = useContext( CostContext );
    const { mothSelected } = state;
    const navContentRef = useRef( null );
    const dragConent = useRef( false );

    const handleChangeMoth = ( moth )  => {
        dispatch( {
            type: 'changeMoth',
            payload: moth
        } );
    }

    const drag = (e) => {
        if( !dragConent.current ) return;
        if( navContentRef.current ) navContentRef.current.classList.add( 'dragging' );
        if( navContentRef.current ) navContentRef.current.scrollLeft -= e.movementX;
    };

    useEffect( () => {
        if( navContentRef.current ) {
            navContentRef.current.addEventListener( 'mousedown', () => {
                dragConent.current = true;
            });
            
            navContentRef.current.addEventListener( 'mousemove', drag);
            
            document.addEventListener( 'mouseup', () => {
                dragConent.current = false;
                if( navContentRef.current ) navContentRef.current.classList.remove( 'dragging');
            });
        }
    }, [ navContentRef.current ] );

    return (
        <div className='nav-content' ref={ navContentRef }>
            <ul className='nav' >
                { months.map( ele => (
                    <li className='nav-item' key={ ele } onClick={ () => handleChangeMoth( ele ) }>
                        <a 
                            className={ `nav-link ${ ( ele === mothSelected )&& 'active' }` }
                            href='#'
                            
                        >
                            { ele }
                        </a>
                    </li>
                ) ) }       
            </ul>
        </div>
    );
}

export default MonthNavBar;