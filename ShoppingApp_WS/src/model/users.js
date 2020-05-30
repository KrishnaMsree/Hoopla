const dbModel = require( '../utilities/connection' );

const credDb = {}

credDb.generateId = () => {
    return dbModel.getProductCollection().then((model) => {
        return model.find({},{_id:1}).sort({_id:-1}).limit(1).then((id) => {
            // let bId = Math.max(...ids);
            let ids= parseInt(id[0]._id) + 1;
            let b = ids.toString()
            return b;
        })
    })
}

credDb.generateSellerId = () => {
    return dbModel.getSellerCollection().then((model) => {
        return model.countDocuments().then((count) => {
            var id;
            if(count>0){
                id = count + 1;
            }
            else{
                id = 1;
            }
            return id.toString()
        })
    })
}


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
                    if(user.ctype == 'seller'){
                        return dbModel.getSellerCollection().then( ( Sellermodel )=>{
                            return credDb.generateSellerId().then((id)=>{
                                return Sellermodel.updateOne({_id:id},{$set:{emailId:user.emailId,name:user.name}},{upsert:true}).then((data)=>{
                                    if(data.n){
                                        return insertedData.name
                                    }
                                    else{
                                        return null
                                    }
                                })
                        })
                        
                    } )
                }
                else{
                    if(insertedData){
                        return insertedData.name
                    }
                    else{
                        return null
                    }
                }
                    
            })
            }
        })
    })
}

credDb.getSellerProducts=( user )=>{
    return dbModel.getSellerCollection().then( ( model )=>{
            return model.find( {emailId: user},{products:1,_id:0} ).then( ( result )=>{
                if( result.length ){return result}
                else return null;
            } )
    } )
}

credDb.getRegisterDetails=( user )=>{
    return dbModel.getRegisterCollection().then( ( model )=>{
            return model.find( {emailId: user} ).then( ( result )=>{
                if( result.length ){return result}
                else return null;
            } )
    } )
}

credDb.addProduct=( user )=>{
    return dbModel.getProductCollection().then( ( model )=>{
        return credDb.generateId().then((id)=>{
            return model.updateOne({_id:id},{$set:{pName:user.pName,pDescription:user.pDescription,pRating:user.pRating,
            pCategory:user.pCategory,price:user.price,color:user.color,image:user.image,specification:user.specification,
            dateFirstAvailable:user.dateFirstAvailable,dateLastAvailable:user.dateLastAvailable,'pSeller.sId':user.sId,
            'pSeller.pDiscount':user.pDiscount,'pSeller.pQuantity':user.pQuantity,'pSeller.pShippingCharges':user.pShippingCharges}},{upsert:true}).then((data)=>{
                return model.find({_id:id}).then((datas)=>{
                    return dbModel.getSellerCollection().then((sellermodel)=>{
                        return sellermodel.updateOne({emailId:user.emailId},{$push:{products:datas}}).then((updatedData)=>{
                            if(data.n && updatedData.nModified){
                                return user.pName;
                            }
                            else{
                                return null;
                            }
                        })
                    })
                }) 
            })
        }) 
    })
}

credDb.editProduct=( user )=>{
    return dbModel.getProductCollection().then( ( model )=>{
        return model.updateOne({_id:user._id},{$set:{price:user.price,color:user.color,'pSeller.pDiscount':user.pDiscount,
        'pSeller.pQuantity':user.pQuantity,'pSeller.pShippingCharges':user.pShippingCharges}}).then((data)=>{
            return model.find({_id:user._id}).then((datas)=>{
                return dbModel.getSellerCollection().then((sellermodel)=>{
                    return sellermodel.update({},{$pull:{"products":{_id:user._id}}},{multi:true}).then((updatedData)=>{
                        return sellermodel.updateOne({emailId:user.emailId},{$push:{products:datas}}).then((pushedData)=>{
                            if(data.nModified && updatedData.nModified && pushedData.nModified){
                                return user._id;
                            }
                            else{
                                return null;
                            }
                        })
                        
                    })
                })
            })
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