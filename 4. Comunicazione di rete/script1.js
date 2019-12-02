//Ex1
$(function() { 
    $.ajax({
        method: 'post', url:"https://ewserver.di.unimi.it/mobicomp/mostri/ranking.php",
        data: JSON.stringify({session_id : 'zqfQaL0q6TKACDrP'}),
        dataType: 'json',
        success: function(result) {
            for(let x of result.ranking){
                if(x.username == null || x.username == undefined || x.username == ""){
                    $("#players").append("<li><b><i>username non inserito</i></b>: "+x.xp+"</li>");
                } else {
                    $("#players").append("<li>"+x.username+": "+x.xp+"</li>");
                }
            }
        },
        error: function(error) { 
            console.error(error);
        }
    }); 
});