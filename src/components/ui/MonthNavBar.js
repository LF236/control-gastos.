import React, { useState, useEffect, createRef, useRef } from 'react';
import '../../styles/components/mothNavBar.scss';
const moths = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];
const MonthNavBar = () => {
    const [ activeMoth, setActiveMonth ] = useState( 'Enero' );
    const navContentRef = useRef( null );
    const dragConent = useRef( false );

    const handleChangeMoth = ( moth )  => {
        setActiveMonth( moth );
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
        // <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='nav-content' ref={ navContentRef }>
                <ul className='nav' >
                    { moths.map( ele => (
                        <li className='nav-item' key={ ele }>
                            <a 
                                className={ `nav-link ${ ( ele === activeMoth )&& 'active' }` }
                                href='#'
                                onClick={ () => handleChangeMoth( ele ) }
                            >
                                { ele }
                            </a>
                        </li>
                    ) ) }       
                </ul>
            </div>
        // </div>
    );
}

export default MonthNavBar;