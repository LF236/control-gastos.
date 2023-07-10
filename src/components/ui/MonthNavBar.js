import React from 'react';
import '../../styles/components/mothNavBar.scss';
const moths = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];
const MonthNavBar = () => {
    

    return (
        <div className='nav-content'>
            <ul className='nav justify-content-center'>
                { moths.map( ele => (
                    <li className="nav-item">
                        <a className="nav-link active " href="#">{ ele }</a>
                    </li>
                ) ) }       

                {/* <li className="nav-item especial">
                    <a className="nav-link active" href="#">{ 'especial' }</a>
                </li>          */}
{/* 
                <li className="nav-item">
                    <a className="nav-link active" href="#">1</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link active" href="#">2</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link active" href="#">3</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link active" href="#">4</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link active" href="#">5</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link active" href="#">6</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link active" href="#">7</a>
                </li>

                <li className="nav-item especial">
                    <a className="nav-link active" href="#">8</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link active" href="#">9</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link active" href="#">10</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link active" href="#">11</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link active " href="#">12</a>
                </li> */}


            </ul>
        </div>
    );
}

export default MonthNavBar;