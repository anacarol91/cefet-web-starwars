// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado

$.ajax({
  url: 'https://swapi.co/api/films/',
  method: 'GET',      // opcional: 'GET' é o valor padrão
  success: function(resposta) {

    let filmes = resposta.results;
    window.localStorage.setItem('filmes', filmes);
    console.dir(filmes); 

    for(filme of filmes){
    	console.dir(filme.title); 
    	$( "ul" ).append("<li data-episode-url=\"" + filme.url + "\">" + filme.title + "</li>");

    	$("li").click(function() {
    		console.dir(filme.opening_crawl); 
    		$("pre").text(filme.opening_crawl);
    	});
    }
  }  
});

