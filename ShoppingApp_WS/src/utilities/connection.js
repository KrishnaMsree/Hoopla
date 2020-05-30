const{ Schema } = require( "mongoose" );
const Mongoose = require( "mongoose" )
Mongoose.Promise = global.Promise;
Mongoose.set( 'useCreateIndex', true )
const url = "mongodb://localhost:27017/Hoopla_DB";

const productSchema = Schema( {
    _id: { type: String, unique: true },
    pName: { type: String, unique: true } ,
    pDescription: String,
    pRating: Number,
    pCategory: String,
    price: Number,
    color: String,
    image: String,
    specification: String,
    dateFirstAvailable: String,
    dateLastAvailable: String,
    pSeller: {
      sId: String,
      pDiscount: Number,
      pQuantity: Number,
      pShippingCharges: Number
    }
}, { collection: "Product" } );

const sellerSchema = Schema( {
    _id: { type: String, unique: true },
    emailId: { type: String, unique: true },
    name: String,
    products: [
        {
        _id: { type: String, unique: true },
        pName: { type: String, unique: true } ,
        pDescription: String,
        pRating: Number,
        pCategory: String,
        price: Number,
        color: String,
        image: String,
        specification: String,
        dateFirstAvailable: String,
        dateLastAvailable: String,
        pSeller: {
        sId: String,
        pDiscount: Number,
        pQuantity: Number,
        pShippingCharges: Number
        }
        }
    ]
}, { collection: "Seller" } );

const CredentialSchema = Schema( {
    emailId: { type: String, unique: true },
    password: String
}, { collection: "Credential"} );

// const orderSchema = Schema( {
//         pid: Number,
//         pName: String,
//         pQuantity: Number,
//         price: Number,
//         OrderDate: Date
// } )

const userSchema = Schema( {
    emailId: { type: String, unique: true },
    // orders : {type:[orderSchema],default:[]},
    pid: Number,
    pName: String,
    pQuantity: Number,
    price: Number,
    orderDate: String,
    image: String
}, { collection: "User" } );

const registerSchema = Schema( {
    emailId: { type: String, unique: true },
    password: String,
    name: String,
    ctype: String,
    phoneNo: Number
}, { collection: "Register" } );

let collection = {};

collection.getUserCollection = () => {
    return Mongoose.connect( url, { useNewUrlParser: true } ).then( ( database ) => {
        return database.model( 'User', userSchema )
    } ).catch( (  ) => {
        let err = new Error( "Could not connect to Database" );
        err.status = 500;
        throw err;
    } )
}

collection.getRegisterCollection = () => {
    return Mongoose.connect( url, { useNewUrlParser: true } ).then( ( database ) => {
        return database.model( 'Register', registerSchema )
    } ).catch( (  ) => {
        let err = new Error( "Could not connect to Database" );
        err.status = 500;
        throw err;
    } )
}

collection.getProductCollection = () => {
    return Mongoose.connect( url, { useNewUrlParser: true } ).then( ( database ) => {
        return database.model( 'Product', productSchema )
    } ).catch( (  ) => {
        let err = new Error( "Could not connect to Database" );
        err.status = 500;
        throw err;
    } )
}

collection.getSellerCollection = () => {
    return Mongoose.connect( url, { useNewUrlParser: true } ).then( ( database ) => {
        return database.model( 'Seller', sellerSchema )
    } ).catch( (  ) => {
        let err = new Error( "Could not connect to Database" );
        err.status = 500;
        throw err;
    } )
}


// collection.getCredentialCollection = () => {
//     return Mongoose.connect( url, { useNewUrlParser: true } ).then( ( database ) => {
//         return database.model( 'Credential', CredentialSchema )
//     } ).catch( ( ) => {
//         let err = new Error( "Could not connect to Database" );
//         err.status = 500;
//         throw err;
//     } )
// }

module.exports = collection;