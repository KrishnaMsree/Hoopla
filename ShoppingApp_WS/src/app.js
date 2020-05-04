const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const router = require( './routes/routing' );
const myErrorLogger = require( './utilities/errorlogger' );
const myRequestLogger = require( './utilities/requestlogger' );
const cors = require( "cors" )
const app = express();

app.use( cors() )
app.use( bodyParser.json() );

app.use( myRequestLogger );
app.use( '/', router );
app.use( myErrorLogger );


app.listen( 2000 );
console.log( "Hoopla Server listening in port 2000" );


module.exports = app;