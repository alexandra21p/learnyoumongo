const mongo = require( 'mongodb' ).MongoClient;
const dbName = process.argv[2];

mongo.connect( `mongodb://localhost:27017/${dbName}`, ( err, db ) => {
    if ( err ) {
        console.log( err.message );
    }

    db.collection( 'users' ).update(
        { username: "tinatime" },
        { $set: { age: 40 } },
        ( err, result ) => {
            if ( err ) {
                console.log( err );
            }
            db.close();
        }
    );
} );
