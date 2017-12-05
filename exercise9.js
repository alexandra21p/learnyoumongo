const mongo = require( 'mongodb' ).MongoClient;
const size = process.argv[2];
mongo.connect( `mongodb://localhost:27017/learnyoumongo`, ( err, db ) => {
    if ( err ) {
        console.log( err.message );
    }

    db.collection( 'prices' ).aggregate( [ { $match: { size: size } }, { $group: { _id: 'total', total: { $avg: '$price' } } } ] , ( err, result ) => {
        if ( err ) {
            console.log( err );
        }
        if ( result.length === 0 ) {
            throw new Error( 'no results.' );
        }
        const [ { total } ] = result;
        console.log( Number( total ).toFixed( 2 ) );
        db.close();
    } );
} );
