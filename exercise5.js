const mongo = require( 'mongodb' ).MongoClient;
const firstName = process.argv[2];
const lastName = process.argv[3];


mongo.connect( 'mongodb://localhost:27017/learnyoumongo', ( err, db ) => {
    if ( err ) {
        console.log( err.message );
    }
    const docs = db.collection( 'docs' );
    const object = { firstName: firstName, lastName: lastName };
    docs.insert( object, ( err, result ) => {
        if ( err ) {
            console.log( err );
        }
        console.log( JSON.stringify( object ) );
        db.close();
    } );
} );
