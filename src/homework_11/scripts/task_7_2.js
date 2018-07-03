function Machine() {
    this.enable = false;
    this.enabled = function() {
        this.enable=true;
    };
    this.disabled = function() {
        this.enable=false;
    };
}

function Fridge(power) {
    Machine.call(this);
    let food = [];
    this.addFood = function (...args) {
        if (this.enable === false){
            console.log('холодильник выключен');
        }else if (args.length > power/100){
            console.log('Слишком много еды');
            } else {
            console.log('Еда добавлена');
            food.push(...args);

        }
    };
    this.getFood = function () {
        return food.slice()
    }
}

const fridge = new Fridge(200);
fridge.enabled();
fridge.addFood('котлета');
fridge.addFood('курица', 'торт', 'кукуруза', 'перец', 'морковка', 'лук');
fridge.addFood('курица', 'торт');
fridge.getFood();

