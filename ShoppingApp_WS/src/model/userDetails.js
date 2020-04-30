class userDetails {
    constructor ( obj ) {
        this.emailId = obj[0].emailId
        this.pid = parseInt( obj[0].pid );
        this.pName = obj[0].pName;
        this.pQuantity = obj[0].pQuantity;
        this.price = obj[0].price;
        this.orderDate = obj[0].orderDate;
        this.image = obj[0].image;
    }
}

module.exports = userDetails;