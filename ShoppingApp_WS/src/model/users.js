const dbModel = require( '../utilities/connection' );

const credDb = {}

credDb.checkUser = ( loginCredObj ) => {
    return dbModel.getRegisterCollection().then( ( model ) => {
            return model.findOne( { emailId: loginCredObj.emailId } ).then( ( userData ) => {
            if( userData!=null ) {  
                return userData; 
            }
            else{
                return null;
            }

        } )
    } )
}

credDb.getProductDetails=()=>{
    return dbModel.getProductCollection().then( ( model )=>{
        return model.find().then( ( result )=>{
            if( result.length ){return result}
            else return null;
        } )
    } )
}

credDb.getorders=( user )=>{
    return dbModel.getUserCollection().then( ( model )=>{
            return model.find( {emailId: user},{_id: 0} ).then( ( result )=>{
                if( result.length ){return result}
                else return null;
            } )
    } )
}

credDb.orders=( user )=>{
    return dbModel.getProductCollection().then((data) => {
        return data.updateOne({pName:user.pName},{$inc:{"pSeller.pQuantity":-1}}).then(()=>{
            return dbModel.getUserCollection().then( ( model )=>{
                    return model.create( user ).then( ( insertedData ) => {
                        if( insertedData ) {
                            return insertedData.pName
                        } else{
                            return null;
                        }
                     })
                } )
            })
    } )
}

credDb.removeOrders=( pid )=>{
    return dbModel.getUserCollection().then( ( model )=>{
            return model.deleteOne( {pid: pid} ).then( ( deletedData ) => {
                if( deletedData.deletedCount ) {
                    return pid
                } else{
                    return null;
                }

            })
    } )
}

credDb.register=( user )=>{
    return dbModel.getRegisterCollection().then( ( model )=>{
        return model.countDocuments({emailId:user.emailId}).then( (data) => {
            if( data > 0){
                return "found"
            }
            else{
                return model.create(user).then( ( insertedData ) => {
                    if(insertedData){
                        return insertedData.name
                    }
                    else{
                        return null
                    }
                } )
                
            }
        })
    })
}

credDb.categoryProd = ( category ) =>{
    return dbModel.getProductCollection().then( ( data )=>{
        return data.find( {pCategory: category} ).then( ( catData )=>{
            if( catData==null ){
                return null
            } else{
                return catData;
            }
        } )
    } )
}

credDb.specificProduct = ( prodId ) =>{
    return dbModel.getProductCollection().then( ( data )=>{
        return data.findOne( {_id: prodId} ).then( ( prod )=>{
            if( prod==null ){
                return null
            } else{
                return prod;
            }
        } )
    } )

}
module.exports=credDb;