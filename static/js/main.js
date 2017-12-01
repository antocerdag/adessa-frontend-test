$(document).ready(function() {
	catalogo.forEach(function(e){
		var img = e.imageURL;
		var name = e.name;
		var price = e.price;
		var currency = e.currency;
		var id = e.id;
		//Coloco toda la información de los productos dentro de un div
		$(".row-products").append("<div class='col-md-2 center-align'><div class='productbox justify-content-center'><div class='products'><img class='img-responsive' src='"+img+"'></div><p class='productinfo text-center'>"+name+"</p><p class='price text-center'>"+currency +price+"</p><a class='btnadd'><button type='button' class='btn btn-success'>Add to car</button></a></div>")

		$(".btnadd").click(function() {
		//al hacer click en el boton agregar, agrega a la lista del carro el producto
			
			var product = $(this).parent();
			$(".rowcar").append(product);
			$(".btn-success").parent().html("<a class='btnremove'><button type='button' class='btn btn-light'>Remove</button></a>"); //INTENTO CAMBIAR TEXTO DE BOTÓN

			$(".btn").click(function(event) {
			
			var item= $(this).parent();
         	$(item).remove();
         	console.log("Removed");
			});
		});

	})


});