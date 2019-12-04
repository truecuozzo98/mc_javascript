class User{
    constructor(uid,picture){
        this._uid=uid;
        this._picture=picture;
    }
    get uid(){
        return this._uid;
    }
    set(newUid){
        this._uid=newUid;
    }
    get picture(){
        return this._picture;
    }
    set(newPicture){
        this._picture=newPicture;
    }
    print(){
        if(this._picture==undefined){
            console.log("NoProfilePicture");
        }else{
            console.log("WithProfilePicture");
        }
    }
}
class VipUser extends User{
    constructor(uid,picture,VipPoints){
        super(uid,picture);
        this.VipPoints=VipPoints;
     }
     print(){
         super.print();
         console.log(uid + "has this"+ this.VipPoints + "Points");
     }
}
class Model{
    constructor(users){
      this._users= new Array();
    }
    get users(){
        return this._users;
    }
    set users(newUsers){
        this._users=newUsers;
    }
    add(newUser){
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
        for (let x of this.users){
            if(userUid==x.uid){
                return x;
            }
        }
        return undefined;
    }
}

let user1= new User("Giorno","fehfhwe");
let user2 = new VipUser ("Bucciarati","fefgr",100000);
let user3=new User ("Pannacotta");

let a = new Model();
a.add(user1);
a.add(user2);
a.add(user3);
a.print();

let userUid = "Bucciarati";
console.log(a.checkIn(userUid));