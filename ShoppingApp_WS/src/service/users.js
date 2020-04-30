const db = require( '../model/users' );

let credService = {}

credService.checkUser = ( CredObj ) => {
    return db.checkUser( CredObj ).then( ( data ) => {
        if( data === null ) {
            let err = new Error( "No User Found with this username" );
            err.status = 404;
            throw err;
        } else if( data.password!=CredObj.password ) {
            let err =new Error( "Wrong Password" );
            err.status = 401;
            throw err;
        } else{
            return data
        }
    } )
}

credService.getorders=( user )=>{
    return db.getorders( user ).then( ( result )=>{
        if( result!=null ){
            return result
        } else{
            let err = new Error( "You haven't ordered anything yet!" );
            err.status=404;
            throw err;
        }
    } )
}

credService.orders=( user )=>{
        return db.orders( user ).then( ( result )=>{
        if( result!=null ){
            return result
        } else{
            let err = new Error( "You haven't ordered anything yet!" );
            err.status=404;
            throw err;
        }
    } )
}

credService.removeOrders=( pid )=>{
    return db.removeOrders( pid ).then( ( result )=>{
    if( result!=null ){
        return result
    } else{
        let err = new Error( "Something went wrong!!! Please try again..." );
        err.status=404;
        throw err;
    }
} )
}

credService.register=( user )=>{
    return db.register( user ).then( ( result )=>{
    if(result == "found"){
        let err = new Error( "User already exists" );
        err.status=404;
        throw err; 
    } 
    else if(result == user.name ){
        return result + " registered successfully"
    }
    else{
        let err = new Error( "Something went wrong!! Please try again" );
        err.status=404;
        throw err;
    }
} )
}

credService.search=()=>{
    return db.getProductDetails().then( ( dataRec )=>{
        if( dataRec.length==0 ){
            let err = new Error( "No Category found with the given name" );
            err.status = 404;
            throw err;
        } else{
            return dataRec
        }
    } )
}

// credService.search=(search)=>{
//     return db.getProductDetails().then((r)=>{
//         result=[];
//         for(i=0;i<result.length;i++){
//             if(r[i].pName.match(search) || r[i].pDescription.match(search) || r[i].pCategory.match(search)|| r[i].pCategory.match(search)){
//                 result.push(r[i])
//             }
//             if(result.length==0){
//                 if(search.length!=0){
//                     let err = new Error("No matching items found with "+search);
//                     err.status=404;
//                     throw err;
//             }else{
//                 let err = new Error("The search could not be empty");
//                 err.status=404;
//                 throw err;
//             }
//             }else{
//                 return result;
//         }
//         }
//     })
// }


credService.categoryProd = ( category )=>{
    return db.categoryProd( category ).then( ( dataRec )=>{
        if( dataRec.length==0 ){
            let err = new Error( "No Category found with the given name" );
            err.status = 404;
            throw err;
        } else{
            return dataRec
        }
    } )
}

credService.specificProduct = ( prodId )=>{
    return db.specificProduct( prodId ).then( ( prodData )=>{
        if( prodData==null ){
            let err = new Error( "No Product found" );
            err.status = 404;
            throw err;
        } else{
            return prodData;
        }
    } )
}



module.exports=credService;