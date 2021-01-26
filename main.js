$(document).ready(function() {

    const url = 'https://rickandmortyapi.com/api/';
    axios.get("https://rickandmortyapi.com/api/episode").then((data) => {
        data.data.results.forEach(episodeId => {
            let episodeNumber = episodeId.id;
            let episodeDiv = $(`<div class="episode-div" data-episode="${episodeNumber}"></div>`);
            
            episodeDiv.text(`Episode ${episodeNumber}`);
            episodeDiv.appendTo("aside");

            });

        $(".episode-div").click(function getEpisodes(){

            const dataValue = $(this).attr("data-episode");
            
            axios.get(`https://rickandmortyapi.com/api/episode/${dataValue}`).then((data) => {
                //console.log(data.data)
                let episodeName = data.data.name;
                let episodeDate = data.data.air_date;
                let episodeSeason = data.data.episode;
                axios.all([
                    data.data.characters.forEach(character => {
                        
                        axios.get(character).then((data) => {
                            //console.log(data.data);
                            let characterImage = data.data.image;
                            let characterName = data.data.name;
                            let characterSpecies = data.data.species;
                            let characterStatus = data.data.status;
                            let characterDiv = $(`<div class="character-div">
                                <img src="${characterImage}" class="character-img">
                                <h2>${characterName}</h2>
                                <p>${characterSpecies} | ${characterStatus} </p>
                                </div>`);

                            characterDiv.appendTo(".characters");
                            
                        });
                        
                    })
                ]);
                setTimeout(function(){
                    $(".characterDiv").click(function(){
                        console.log("hola");
                    })
                }, 1000);
                $("main")
                .html(`<div class="title-episode"><h1>${episodeName}</h1>
                 <p>${episodeDate} | ${episodeSeason}</p></div>
                 <div class="characters"></div>`);
                
                
                
                

            })

            
        });
    });

    



    

    const getCharacters = function (characterUrl) {
        axios.get(characterUrl);
    };
    

});