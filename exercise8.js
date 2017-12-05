const mongo = require( 'mongodb' ).MongoClient;
const age = parseInt( process.argv[2], 10 );

mongo.connect( `mongodb://localhost:27017/learnyoumongo`, ( err, db ) => {
    if ( err ) {
        console.log( err.message );
    }

    db.collection( 'parrots' ).count( { age: { $gt: age } }, ( err, result ) => {
        if ( err ) {
            console.log( err );
        }
        console.log( result );
        db.close();
    } );
} );
