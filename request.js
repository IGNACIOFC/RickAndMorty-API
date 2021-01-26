$(document).ready(function() {


function displayEpisodes (episodeNumber){
    axios.get(`https://rickandmortyapi.com/api/episode/${episodeNumber}`).then(() => {
        console.log("hola")
    })
}    
const episodesSide = axios.get("https://rickandmortyapi.com/api/episode").then((data) => {
    data.data.results.forEach(episodeId => {
        let episodeNumber = episodeId.id;
        let episodeDiv = $(`<div class="episode-div" data-episode="${episodeNumber}"></div>`);
        
        episodeDiv.text(`Episode ${episodeNumber}`);
        episodeDiv.appendTo("aside");

        });

    }).then(()=> {
        
    }).then(()=>{
        console.log("adios");
    });



});