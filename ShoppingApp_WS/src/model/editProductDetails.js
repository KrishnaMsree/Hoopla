class editProductDetails {
    constructor ( obj ) {
        this.emailId = obj.userEmail;
        this._id = obj.pId;
        this.price = obj.price;
        this.color = obj.color;
        this.pDiscount = obj.pDiscount;
        this.pQuantity = obj.pQuantity;
        this.pShippingCharges = obj.pShippingCharges
    }
}

module.exports = editProductDetails;