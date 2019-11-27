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

let user1 = new User("Andrea", "jkfdh");
let user2 = new User("Bruno", );

user1.print();
user2.print();

/*(new User("Andrea", false)).print();
(new User("Bruno", true)).print();*/
