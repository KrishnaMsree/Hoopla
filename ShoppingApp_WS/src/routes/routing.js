const express = require( 'express' );
const routing = express.Router();
const create = require( '../model/dbsetup' );
const credServ = require( '../service/users' );
const Login = require( '../model/LoginCred' );
const userDetails = require( '../model/userDetails' );
const registerDetails = require( '../model/registerDetails' );
// const validator = require('../utilities/validator')

// setup db mongoose db
routing.get( '/setupDb', ( req, res, next ) => {
    create.setupDb().then( ( data ) => {
        res.send( data )
    } ).catch( ( err ) => {
        next( err )
    } )
} )
// Login
routing.post( '/login', ( req, res, next ) => {
    const credObj = new Login( req.body ); 
    credServ.checkUser( credObj ).then( ( data )=>{
        res.json( {"message": "Welcome " + data.name} )
    } ).catch( ( err )=>{
        next( err );
    } )
} )

// For Products in category
routing.get( '/category/:categoryName',( req,res,next )=>{
    let cName=req.params.categoryName
    credServ.categoryProd( cName ).then( ( cData )=>{
        res.json( cData )
    } ).catch( ( err )=>{
        next( err );
    } )
} )
// For searching a product
routing.get( '/getProducts/:searchval', ( req, res, next ) => {
    credServ.search().then( ( data ) => {
        res.json( data )
    } ).catch( ( err ) => {
        next( err )
    } )
} )
// Get Orders
routing.get( '/getOrders/:emailId',( req,res,next )=>{
    credServ.getorders( req.params.emailId ).then( ( result )=>{
        res.json( result );
    } ).catch( ( err )=>next( err ) )
} )

// Insert Orders
routing.post( '/order',( req,res,next )=>{
    const userdetails = new userDetails( req.body ); 
    credServ.orders( userdetails ).then( ( result )=>{
        res.json( {"message": result + " ordered Successfully."} );
    } ).catch( ( err )=>next( err ) )
} )

// Remove Orders
routing.delete( '/removeOrder/:pid',( req,res,next )=>{
    credServ.removeOrders( req.params.pid ).then( ( result )=>{
        res.json( {"message": "Product with Id "+ result +" removed successfully from your cart."} );
    } ).catch( ( err )=>next( err ) )
} )

// Insert Register details
routing.post( '/register',( req,res,next )=>{
    const registerdetails = new registerDetails( req.body ); 
    credServ.register( registerdetails ).then( ( result )=>{
        res.json( {"message": result } );
    } ).catch( ( err )=>next( err ) )
} )

// For Specific product with prodId
routing.get( '/product/:prodId',( req,res,next )=>{
    let prodId=req.params.prodId
    credServ.specificProduct( prodId ).then( ( product )=>{
        res.json( product )
    } ).catch( ( err )=>{
        next( err );
    } )
} )

module.exports=routing;