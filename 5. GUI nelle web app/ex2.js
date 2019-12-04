$(function() { 
    $.ajax({
        method: 'post', url:"https://ewserver.di.unimi.it/mobicomp/mostri/getprofile.php",
        data: JSON.stringify({session_id : 'zqfQaL0q6TKACDrP'}),
        dataType: 'json',
        success: function(result) {
            console.log(result);
            
            if(result.username == null){
                $("#username").html("username non definito");
            } else {
                $("#username").html(result.username);
            }
            if(result.img != null){
                $("#propic").attr("src","data:image/png;base64," + result.img);
            }
            
            

            $("#lp").html(result.lp);
            $("#xp").html(result.xp);

        },
        error: function(error) { 
            console.error(error);
        }
    }); 
});