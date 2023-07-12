export const getAllListCostRequest = () => {
    return new Promise( async ( resolve, reject ) => {
        try {
            const response = await fetch( 'http://localhost:3004/costs' );
            const data = await response.json();
            console.log( data );
            resolve( data );
        }
        catch( err ) {
            reject( [] );
        }
    } );
}