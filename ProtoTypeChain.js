var Phone = function(){};
Phone.prototype = {
    getOwner : function(){
        console.log('Owner is', this.owner);
    }
};

var SmartPhone = function(owner){
    this.owner = owner
};

SmartPhone.prototype = new Phone();
SmartPhone.prototype.tap = function(){
    console.log('tap!')
};

var myPhone = new SmartPhone('igarashi');
myPhone.getOwner();
myPhone.tap();

var otherPhone = new SmartPhone('tarama');
otherPhone.getOwner();
otherPhone.tap();