$(document).ready(function() {
	catalogo.forEach(function(e){
		console.log(e);

		var img = e.imageURL;
		var name = e.name;
		var price = e.price;
		var currency = e.currency;
		var id = e.id;
		//Coloco toda la información de los productos dentro de un div
		$(".row-products").append("<div class='col-md-2 center-align'><div class='productbox justify-content-center'><div class='products'><img class='img-responsive' src='"+img+"'></div><p class='productinfo text-center'>"+name+"</p><p class='price text-center'>"+currency +price+"</p><a class='btnadd'><button type='button' class='btn btn-success'>Add to car</button></a></div>")

		$(".btnadd").click(function() {
		/* Act on the event */
			$(".carproducts").append("<div class='col-md-2 center-align'><div class='productbox justify-content-center'><div class='products'><img class='img-responsive' src='"+img+"'></div><p class='productinfo text-center'>"+name+"</p><p class='price text-center'>"+currency +price+"</p><a class='btnadd'><button type='button' class='btn btn-success'>Add to car</button></a></div>")
		});
	})


});