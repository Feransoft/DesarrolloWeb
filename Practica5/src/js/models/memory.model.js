function Memory(product = {}, frecuency = 0, capacity  = 0) {
    Product.call(this, product);
    this._frecuency = frecuency;
    this._capacity = capacity;
}

Memory.prototype = Object.create(Product.prototype);

Object.defineProperty(Memory.prototype, "frecuency", {
    get: function frecuency() {
        return this._frecuency;
    },
    set: function frecuency(frecuency) {
        if ( frecuency < 0 | !frecuency) {
            throw new Error('Memory : Must have a frecuency');
        }
        if (isNaN(frecuency)) {
            throw new Error("Memory : Mustn't be a string");
        }
        this._frecuency = frecuency;
    },
});

Object.defineProperty(Memory.prototype, "capacity", {
    get: function capacity() {
        return this._capacity;
    },
    set: function capacity(capacity) {
        if ( capacity < 0 | !capacity) {
            throw new Error('Memory : Must have a capacity');
        }
        if (isNaN(capacity)) {
            throw new Error("Memory : Mustn't be a string");
        }
        this._capacity = capacity;
    },
});

Memory.prototype.toString = function () {
    return "Memory";
}