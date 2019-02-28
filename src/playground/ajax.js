
console.log("yayamtl");

$.ajax({
    headers: { 'X-Auth-Token': 'Y10438036596c447b8a48513ab80bc6b4' },
    url: "http://api.football-data.org/v2/matches?status='LIVE",
    dataType: 'json',
    type: 'GET',
  }).done(function(response) {
    // do something with the response, e.g. isolate the id of a linked resource   
    console.log(response);
  });

 