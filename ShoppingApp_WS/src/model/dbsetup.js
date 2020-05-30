const collection = require( '../utilities/connection' );

const productDb=
[
    {
        "_id": "1001",
        "pName": "Asus Zenfone Max Pro M2",
        "pDescription": "An economical phone by Asus",
        "pRating": 3.5,
        "pCategory": "Electronics",
        "price": 14999,
        "color": "Black",
        "image": "./assets/mobile1.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Asus@Seller",
          "pDiscount": 0.2,
          "pQuantity": 661,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1002",
        "pName": "Redmi Note 6 Pro",
        "pDescription": "An economical phone by Xiaomi",
        "pRating": 4,
        "pCategory": "Electronics",
        "price": 13999,
        "color": "Black",
        "image": "./assets/mobile2.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Xiaomi@Seller",
          "pDiscount": 0.2,
          "pQuantity": 665,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1003",
        "pName": "Moto G7 Plus",
        "pDescription": "A prime phone by Moto",
        "pRating": 4,
        "pCategory": "Electronics",
        "price": 23599,
        "color": "Silver",
        "image": "./assets/mobile3.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Moto@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1004",
        "pName": "Lenovo Tab 2 A8-50",
        "pDescription": "A high end phone by Lenovo",
        "pRating": 4.5,
        "pCategory": "Electronics",
        "price": 19999,
        "color": "Blue",
        "image": "./assets/mobile4.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Lenovo@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1005",
        "pName": "iphone 8 plus",
        "pDescription": "A high end phone by apple",
        "pRating": 4.9,
        "pCategory": "Electronics",
        "price": 79999,
        "color": "Rose Gold",
        "image": "./assets/iphone.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Apple@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1006",
        "pName": "Adidas Running Men Lite",
        "pDescription": "Light weight running shoes by adidas",
        "pRating": 4,
        "pCategory": "Shoes",
        "price": 2599,
        "color": "Grey Blue",
        "image": "./assets/adidas.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Adidas@Seller",
          "pDiscount": 0.2,
          "pQuantity": 1,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1007",
        "pName": "Adidas Running Women Lite",
        "pDescription": "Light weight running shoes by adidas",
        "pRating": 4,
        "pCategory": "Shoes",
        "price": 2599,
        "color": "Pink",
        "image": "./assets/adidas3.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Adidas@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1008",
        "pName": "Adidas Running Men robust",
        "pDescription": "Robust running shoes by adidas",
        "pRating": 4,
        "pCategory": "Shoes",
        "price": 3599,
        "color": "Black",
        "image": "./assets/adidas2.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Adidas@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1009",
        "pName": "Reebok training shoes",
        "pDescription": "Light weight training shoes by Reebok",
        "pRating": 3,
        "pCategory": "Shoes",
        "price": 1599,
        "color": "Grey",
        "image": "./assets/reebok.jpeg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Reebok@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1010",
        "pName": "Nike Running Men Lite",
        "pDescription": "Light weight running shoes by Nike",
        "pRating": 4.6,
        "pCategory": "Shoes",
        "price": 6599,
        "color": "Green",
        "image": "./assets/nike.png",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Nike@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1011",
        "pName": "Luxury Bed by Zuari",
        "pDescription": "Sunmica finished zuari luxury bed",
        "pRating": 4,
        "pCategory": "Furniture",
        "price": 8999,
        "color": "Beige",
        "image": "./assets/bed.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Zuari@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1012",
        "pName": "Organised Cupboards by Zuari",
        "pDescription": "Sunmica finished zuari cupboards",
        "pRating": 4.3,
        "pCategory": "Furniture",
        "price": 6999,
        "color": "Coffee Brown",
        "image": "./assets/cupboard.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Zuari@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1013",
        "pName": "Dressing Table by Zuari",
        "pDescription": "Sunmica finished zuari Dressing table",
        "pRating": 4,
        "pCategory": "Furniture",
        "price": 8599,
        "color": "Beige",
        "image": "./assets/dressingtable.jpeg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Zuari@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1014",
        "pName": "Recliner sofa set by Grihshobha",
        "pDescription": "A luxurious and comfortable sofa set",
        "pRating": 4.8,
        "pCategory": "Furniture",
        "price": 12500,
        "color": "Dark grey",
        "image": "./assets/sofaset.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Grihshobha@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1015",
        "pName": "Dining table by @HOME",
        "pDescription": "Teak wood dining table with glass top",
        "pRating": 4.4,
        "pCategory": "Furniture",
        "price": 18999,
        "color": "caramel",
        "image": "./assets/diningtable.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "HOME@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1016",
        "pName": "Kurta Plazzo set ethnic for women",
        "pDescription": "Embroidery work kurta plazzo set",
        "pRating": 4,
        "pCategory": "Clothing",
        "price": 1499,
        "color": "Orange",
        "image": "./assets/ladiesethnic.jpeg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Ethnic@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1017",
        "pName": "Cotton silk saree by FabIndia",
        "pDescription": "Cotton silk hand woven sarees by Fabindia",
        "pRating": 4.8,
        "pCategory": "Clothing",
        "price": 5900,
        "color": "Red",
        "image": "./assets/saree.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "FabIndia@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1018",
        "pName": "Virat's Special for men ethnic",
        "pDescription": "Festive season special black woollen coat",
        "pRating": 4.8,
        "pCategory": "Clothing",
        "price": 1900,
        "color": "black",
        "image": "./assets/viratethnic.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "Ethnic@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1019",
        "pName": "US Polo T-shirt",
        "pDescription": "100 % pure cotton t shirt by US polo",
        "pRating": 4.8,
        "pCategory": "Clothing",
        "price": 3299,
        "color": "Orange",
        "image": "./assets/uspolo.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "USPolo@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      },
      {
        "_id": "1020",
        "pName": "UCB T-shirt",
        "pDescription": "100 % pure cotton t shirt by UCB",
        "pRating": 4.2,
        "pCategory": "Clothing",
        "price": 1900,
        "color": "Blue",
        "image": "./assets/ucb.jpg",
        "specification": "",
        "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
        "dateLastAvailable": "2017-09-17T00:00:00.000Z",
        "pSeller": {
          "sId": "UCB@Seller",
          "pDiscount": 0.2,
          "pQuantity": 666,
          "pShippingCharges": 150
        }
      }
]



exports.setupDb = () => {
    return collection.getProductCollection().then( ( product ) => {
        return product.deleteMany().then( () => {
            return product.insertMany( productDb ).then( () => {
                return collection.getRegisterCollection().then( ( reg ) => {
                  return reg.deleteMany().then( ( ) => { 
                    return reg.find().then( ( datas ) => {
                      if( datas ) return "Insertion Successful"
                      else{
                          let err = new Error( "Insertion failed" );
                          err.status = 400;
                          throw err;
                      }
                    } )
                  } )
                } )
              } )
        })
    } )
}