class User {
    constructor(uid, picture) {
        this._uid = uid;
        this._picture = picture; 
    };

    get uid(){
        return this._uid;
    }
    
    set uid(newUid){
        this._uid = newUid;
    }

    get picture(){
        return this._picture;
    }

    set picture(newPicture){
        this._picture = newPicture;
    }

    print() { 
        if(this.picture == undefined){
            console.log(this.uid +" NoProfilePicture");
        } else {
            console.log(this.uid +" WithProfilePicture");
        }
    }; 
}

let user1 = new User("Andrea", "fhdyhj");
let user2 = new User("Bruno", );
let user3 = new User("Antonio", "jhgkh");
let user4 = new User("Marco", );
let user5 = new User("Luigi", );

class Model{
    constructor(){
        this._users = new Array();
    }

    get users(){
        return this._users;
    }

    set users(newUsers){
        this._users = newUsers;
    }

    add(newUser) {
        this._users.push(newUser);
    }

    get(i){
        return this.users[i];
    }

    print(){
        for(let x of this.users){
            console.log(x);
        }
    }

    checkIn(userUid){
        for(let x of this.users){
            if(userUid==x.uid){
                return x;
            }
        }
        return undefined;
    }
}

let a = new Model();
a.add(user1);
a.add(user2);
a.add(user3);
a.add(user4);
a.add(user5);

//console.log(a.users);

$(function() {
    //ex 1
    $("#button").click(function(){
        for(let x of a.users){
            $("#user_list").append("<li>"+x.uid+"</li>");
        } 
    });

    //ex 2
    $("#button2").click(function(){
        $("#user_list").empty();

        let arr = check_substring(a.users, $("#search").val());

        for(let x of arr){
            $("#user_list").append("<li>"+x+"</li>");
        } 
    });
    
    //es 3
    $("#search").keyup(function(){
        $("#user_list").empty();

        if($("#search").val() != ""){
            let arr = check_substring(a.users, $("#search").val());

            for(let x of arr){
                $("#user_list").append("<li>"+x+"</li>");
            } 
        }
    });
});

function check_substring(names, string){
    let result = new Array();
    for(let name of names){
        let flag = true;
        for(let i=0 ; i<string.length ; i++){
            if(name.uid.charAt(i)!=string.charAt(i)){
                flag = false;
                break;
            }
        }
        if(flag){
            result.push(name.uid);
        }
    }
    return result;
}

//console.log(check_substring(a.users, "Ant"));