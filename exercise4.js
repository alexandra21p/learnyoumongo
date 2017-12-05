const mongo = require( 'mongodb' ).MongoClient;
const age = parseInt( process.argv[2], 10 );

mongo.connect( 'mongodb://localhost:27017/learnyoumongo', ( err, db ) => {
    if ( err ) {
        console.log( err.message );
    }
    const parrotsCollection = db.collection( 'parrots' );
    parrotsCollection.find( { age: { $gt: age } }, { name: 1, age: 1, _id: 0 } ).toArray( ( err, documents ) => {
        if ( err ) {
            console.log( err.message );
        }
        console.log( documents );
        db.close();
    } );
} );
