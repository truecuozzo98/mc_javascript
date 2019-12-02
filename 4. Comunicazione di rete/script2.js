//Ex2
$(function() { 
    $.ajax({
        method: 'post', url:"https://ewserver.di.unimi.it/mobicomp/mostri/getimage.php",
        data: JSON.stringify({session_id : 'zqfQaL0q6TKACDrP', target_id : '13'}),
        dataType: 'json',
        success: function(result) {
            console.log(result.img)
            $("#image").html("<img src='data:image/png;base64," + result.img +"' />");    
        },
        error: function(error) { 
            console.error(error);
        }
    }); 
});