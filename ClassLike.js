let Phone = function(name){
    this.setName(name);
};

Phone.prototype = {
    setName : function(name){
        this.name = name;
    },
    getName : function(){
        return 'type is ' + this.name 
    },
}

let smartPhone = new Phone('smart phone');
console.log(smartPhone.getName());

class Phone{
    constructor(name){
        this.name = name;
    }
    set name(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    getName(){
        console.log('type is ' + this.name);
    }   
}

let smartPhone = new Phone('smart phone');
smartPhone.getName();