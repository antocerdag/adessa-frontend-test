$(document).ready(function() {
	catalogo.forEach(function(e){
		console.log(e);

		var img = e.imageURL;
		var name = e.name;
		var price = e.price;
		var currency = e.currency;
		var id = e.id;

		$(".row-products").append("<div class='col-md-2 '><div class='productbox'><div class='products'><img class='img-responsive' src='"+img+"'></div></div></div>")
	})
});