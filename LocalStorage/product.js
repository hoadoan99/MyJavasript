/** @format */
function createProduct(
  valueImage,
  valueName,
  valuePrice,
  valueDiscount,
  valueLocation
) {
  // create object
  var product = new Object();
  //   create property
  product.image = valueImage;
  product.name = valueName;
  product.price = valuePrice;
  product.discount = valueDiscount;
  product.location = valueLocation;
  // create method

  product.priceDiscount = function () {
    var currentPrice = this.price * (1 - this.discount);
    return currentPrice;
  };
  product.toJson = function () {
    var json = JSON.stringify(this);
    return json;
  };
  product.fromJson = function (json) {
    var objectDetails = new Object();

    var objectParse = JSON.parse(json);

    var objectDetails = createProduct(
      objectParse.image,
      objectParse.name,
      objectParse.price,
      objectParse.discount,
      objectParse.location
    );
    return objectDetails;
  };
  return product;
}
