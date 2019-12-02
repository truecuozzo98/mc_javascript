//Ex3
$(function() { 
    $.ajax({
        method: 'post', url:"https://ewserver.di.unimi.it/mobicomp/mostri/ranking.php",
        data: JSON.stringify({session_id : 'zqfQaL0q6TKACDrP'}),
        dataType: 'json',
        success: function(result) {
            for(let x of result.ranking){
                let username

                console.log(x)
                if(x.username == null || x.username == undefined || x.username == ""){
                    username = "username non inserito"
                } else {
                    username = x.username
                }
                if(x.img == null || x.img == undefined || x.img == ""){
                    $("#players").append("<li>"+username+": "+x.xp+"; immagine del profilo non inserita</li>");
                } else {
                    $("#players").append("<li>"+username+": "+x.xp+" <img src='data:image/png;base64," + x.img + "' height='100' width='100'/></li>");
                }
                
                
                
            }
        },
        error: function(error) { 
            console.error(error);
        }
    }); 
});