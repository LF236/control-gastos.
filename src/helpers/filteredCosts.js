import { months } from '../assets/months';

export const filteredCosts = ( allList, month ) => {
    const number_moth = months.indexOf( month );
    const filteredList = allList.filter( ele => new Date( ele.fecha ).getMonth() === number_moth );    
    const income = filteredList.filter( ele => ele.tipo === 'income' ).reduce( ( acumulator, currentValue ) => acumulator + currentValue.price, 0 );
    const spent = filteredList.filter( ele => ele.tipo === 'spent' ).reduce( ( acumulator, currentValue ) => acumulator + currentValue.price, 0 );
    return {
        filteredList,
        income,
        spent
    }
}
