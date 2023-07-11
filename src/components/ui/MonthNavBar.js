import React, { useState, useEffect, createRef, useRef } from 'react';
import '../../styles/components/mothNavBar.scss';
const moths = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];
const MonthNavBar = () => {
    const [ activeMoth, setActiveMonth ] = useState( 'Enero' );
    const navContentRef = useRef( null );
    let dragConent = false;

    const handleChangeMoth = ( moth )  => {
        setActiveMonth( moth );
        console.log( navContentRef );
    }

    const drag = (e) => {
        if (!dragConent) return;
        console.log( navContentRef )
        if( navContentRef.current ) navContentRef.current.classList.add( 'dragging' );
        if( navContentRef.current ) navContentRef.current.scrollLeft -= e.movementX;
    };

    useEffect( () => {
        if( navContentRef.current ) {
            navContentRef.current.addEventListener( 'mousedown', () => {
                console.log( 'Mouse down' );
                dragConent = true;
                console.log( dragConent );
            });
            
            navContentRef.current.addEventListener( 'mousemove', drag);
            
            document.addEventListener( 'mouseup', () => {
                console.log( 'MOUSE UP' )
                dragConent = false;
                if( navContentRef.current ) navContentRef.current.classList.remove( 'dragging');
            });
        }
    }, [ navContentRef.current ] );

    return (
        <div className='nav-content' ref={ navContentRef }>
            <ul className='nav' >
                { moths.map( ele => (
                    <li className='nav-item'>
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
    );
}

export default MonthNavBar;