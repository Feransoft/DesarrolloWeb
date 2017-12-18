function Cpu(product = {}, frecuency = 0) {
    Product.call(this, product);
    this._frecuency = frecuency;
}

Cpu.prototype = Object.create(Product.prototype);

Object.defineProperty(Cpu.prototype, "frecuency", {
    get: function frecuency() {
        return this._frecuency;
    },

    set: function frecuency(frecuency) {
        if(!frecuency | frecuency < 0){
            throw new Error("CPU: Mustn't be empty");
        }
        if(isNaN(frecuency)){
            throw new Error("CPU: Mustn't be a string");
        }
        this._frecuency = frecuency;
    },
});

Cpu.prototype.toString = function () {
    return "CPU";
}
