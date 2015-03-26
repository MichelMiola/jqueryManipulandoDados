var umaPropaganda = function(){

	var propagandas = [
						"O que acha de comprar uma motocicleta?",
               			"O que acha de comprar uma lancha?",
               			"O que acha de comprar uma bicicleta?",
			            "O que acha de comprar uma carro?"
					];

	var posicao = Math.floor(propagandas.length * Math.random());
	var texto = propagandas[posicao];

	var tr = $('<tr>').addClass('propaganda').append($('<td>'));
	tr.find('td').attr('colspan', 6).text(texto);
	return tr;

}

var atualizaDados = function(){
            var carrinhos = $(".carrinho");
            carrinhos.each( function(){
                var carrinho = $(this);
                var items = carrinho.find(".item-total:visible");
                var total = 0;
                for(var i=0; i < items.length; i++) {
                        var conteudo = $(items[i]).text();
                         var preco = parseFloat(conteudo);
                       total += preco;
                }
                carrinho.find(".valor-total").text(total);
                carrinho.find(".quantidade-de-itens").text(items.length);
            });

};

var undo = function(){

	var carrinho = $(this).closest('.carrinho');
	console.log(carrinho);
	$(carrinho).find('tr:visible').removeClass('recuperado');
	$(carrinho).find('tr:hidden').addClass('recuperado').show();
	atualizaDados();
}

var removeItem = function(event){

	event.preventDefault();	

	var element = $(this);
	element.closest("tr").hide();	
	atualizaDados();

}

var daDestaque = function(){
	$(this).find(".remove-item").fadeIn();
	$(this).addClass('hovering');
}

var tiraDestaque = function(){
	$(this).find(".remove-item").fadeOut();
	$(this).removeClass('hovering');
}

var alternaPropaganda = function(event){
    event.preventDefault();            
   $(".propaganda").fadeToggle();
   $(".alterna-propaganda").toggle();

}

$('.remove-item').click(removeItem);
$('.undo').click(undo);
atualizaDados();

$('.carrinho').each(function(i){
	$(this).find("tr:nth-child(3n)").each(function(){
		umaPropaganda().insertAfter($(this));
	});	

});

$('tbody tr').hover(daDestaque, tiraDestaque);

$('.alterna-propaganda').click(alternaPropaganda);
