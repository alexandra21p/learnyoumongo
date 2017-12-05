const mongo = require( 'mongodb' ).MongoClient;
const dbName = process.argv[2];
const collectionName = process.argv[3];
const id = process.argv[4];


mongo.connect( `mongodb://localhost:27017/${dbName}`, ( err, db ) => {
    if ( err ) {
        console.log( err.message );
    }

    db.collection( collectionName ).remove( { _id: id }, ( err, result ) => {
        if ( err ) {
            console.log( err );
        }
        db.close();
    } );
} );
