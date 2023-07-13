import { months } from '../assets/months';

export const groupByDay = ( allList ) => {
    return allList.reduce( ( aculumator, currentValue ) => {
        const dateSplitted = currentValue.fecha.split( 'T' )[ 0 ];
        if( !aculumator[ dateSplitted ]  ) {
            aculumator[ dateSplitted ] = [];
        }
        aculumator[ dateSplitted ].push( currentValue );
        return aculumator;
    }, {} );
}

export const sortListOfDates = ( dates = [] ) => {
    return dates.sort( ( a, b ) => {
        var dateA = new Date( a );
        var dateB = new Date( b );
        return dateA - dateB;
    } )
}

export const parseDate = ( date = '' ) => {
    const dateSplitted = date.split( '-' );
    return `${ dateSplitted[ 2 ] } - ${ months[ parseInt( dateSplitted[ 1 ] - 1 ) ] }.`;
}