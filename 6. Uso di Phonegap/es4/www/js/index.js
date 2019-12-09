var session_id = 'zqfQaL0q6TKACDrP';

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        $(function() { 
            $.ajax({
                method: 'post', url:"https://ewserver.di.unimi.it/mobicomp/mostri/getmap.php",
                data: JSON.stringify({session_id : session_id}),
                dataType: 'json',
                success: function(result) {
                    console.log(result);
                    for(let x of result.mapobjects){
                        console.log(x)
                        let id = "<td>" + x.id + "</td>";
                        let lat = "<td>" + x.lat + "</td>";
                        let lon = "<td>" + x.lon + "</td>";
                        let name = "<td>" + x.name + "</td>";
                        let size = "<td>" + x.size + "</td>";
                        let type = "<td>" + x.type + "</td>";
                        $("#rows").append("<tr>"+id+lat+lon+name+size+type+"</tr>");
                    }
                    
                    app.row_click();
                },
                error: function(error) { 
                    console.error(error);
                }
            }); 
        });
    },

    row_click: function(){
        $("tr").click(function() {
            let target_id = $(this).find('td:first').text();
            let type = $(this).find('td:last').text();
            console.log (target_id, type);
            app.getprofile(target_id, type);
        });
    },

    getprofile: function(target_id, type){
        $(function() { 
            $.ajax({
                method: 'post', url:"https://ewserver.di.unimi.it/mobicomp/mostri/getprofile.php",
                data: JSON.stringify({session_id : session_id}),
                dataType: 'json',
                success: function(result) {
                    return app.fighteat(target_id, type, result.lp, result.xp);
                },
                error: function(error) { 
                    console.error(error);
                }
            }); 
        });
    },

    fighteat: function(target_id, type, old_lp, old_xp){
        $(function() { 
            $.ajax({
                method: 'post', url:"https://ewserver.di.unimi.it/mobicomp/mostri/fighteat.php",
                data: JSON.stringify({session_id : session_id, target_id:target_id}),
                dataType: 'json',
                success: function(result) {
                    console.log(result);

                    if(type == "CA"){
                        alert("Recuperi "+(result.lp - old_lp)+" life points!\n\nOra hai "+result.lp+" life points e "+result.xp+" xp");
                    } else {
                        if(result.died){
                            alert("GAME OVER! Il mostro ti ha sconfitto");
                        } else {
                            //alert("Ora hai "+result.lp+" life points e "+result.xp+" xp");
                            alert("Hai sconfitto il mostro!\n\nPrima del combattimento avevi "+old_lp+" life points e "+old_xp+" xp\n\nOra hai "+result.lp+" life points e "+result.xp+" xp");
                        }
                    }
                    
                },
                error: function(error) { 
                    console.error(error);
                }
            }); 
        });
    }
};
