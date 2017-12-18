function HardDisk(product = {}, capacity = 0, cannon = 0) {
    Product.call(this, product);
    this._capacity = capacity;
    this._cannon = cannon;
}

HardDisk.prototype = Object.create(Product.prototype);

Object.defineProperty(HardDisk.prototype, "capacity", {
    get: function capacity() {
        return this._capacity;
    },

    set: function capacity(capacity) {
        if ( capacity < 0 | !capacity) {
            throw new Error('HardDisk : Must have a capacity');
        }
        if (isNaN(capacity)) {
            throw new Error("HardDisk : Mustn't be a string");
        }

        this._capacity = capacity;
    },
});

Object.defineProperty(HardDisk.prototype, "cannon", {
    get: function cannon() {
        return this._cannon;
    },
    set: function cannon(cannon) {
        if ( cannon < 0 | !cannon) {
            throw new Error('HardDisk : Must have a cannon');
        }
        if (isNaN(cannon)) {
            throw new Error("HardDisk : Mustn't be a string");
        }
        this._cannon = cannon;
    },
});

HardDisk.prototype.getTotalPrice = function (){
    return this.price + this.calculateIVA() + this.cannon;
}

HardDisk.prototype.toString = function () {
    return "Hard Disk";
}