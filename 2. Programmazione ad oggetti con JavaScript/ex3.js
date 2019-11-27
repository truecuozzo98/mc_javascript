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

class VipUser extends User {
    constructor(uid, picture, vipPoints) {
        super(uid, picture,);
        this.vipPoints = vipPoints;
    }

    print() {
        super.print();
        console.log(uid + " has " + this.vipPoints + "VipPoints");
    };
} 

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

let user1 = new User("Andrea", "fhdyhj");
let user2 = new VipUser("Bruno", undefined , 264);
let user3 = new User("Antonio", "jhgkh");
let user4 = new User("Marco", );
let user5 = new VipUser("Luigi", "jdfsnk", 420);

let a = new Model();
a.add(user1);
a.add(user2);
a.add(user3);
a.add(user4);
a.add(user5);

//a.print();

let userUid = "Luigi";
console.log(a.checkIn(userUid));