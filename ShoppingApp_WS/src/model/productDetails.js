class productDetails {
    constructor ( obj ) {
        this.emailId = obj.userEmail;
        this.pName = obj.pName;
        this.pDescription = obj.pDesc;
        this.pRating = obj.pRating;
        this.pCategory = obj.pCategory;
        this.price = obj.price;
        this.color = obj.color;
        this.image = obj.image;
        this.specification = obj.specification;
        this.dateFirstAvailable = obj.firstDate;
        this.dateLastAvailable = obj.lastDate;
        this.sId = obj.sId;
        this.pDiscount = obj.pDiscount;
        this.pQuantity = obj.pQuantity;
        this.pShippingCharges = obj.pShippingCharges
    }
}

module.exports = productDetails;