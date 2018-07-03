function Machine(power) {
    let enable = false;
    this.enabled = function() {
        enable=true;
    };
    this.disabled = function() {
        enable=false;
    };
    this.power = power;
}

const coffeMachine = new Machine(100);
console.log(coffeMachine)