if (!Array.prototype.max) {
    Array.prototype.max = function (fun = x => x) {
        let value = null;
        let object = null;
        for (let item of this) {
            const itemValue = fun(item);
            if (typeof itemValue === 'number' && !isNaN(itemValue) && (value == null || itemValue > value)) {
                value = itemValue;
                object = item;
            }
        }
        return object;
    }
}
if (!Array.prototype.min) {
    Array.prototype.min = function (fun = x => x) {
        let value = null;
        let object = null;
        for (let item of this) {
            const itemValue = fun(item);
            if (typeof itemValue === 'number' && !isNaN(itemValue) && (value == null || itemValue < value)) {
                value = itemValue;
                object = item;
            }
        }
        return object;
    }
}
if (!Array.prototype.sum) {
    Array.prototype.sum = function (fun = x => x) {
        return this.reduce((sum, item) => sum + Number(fun(item)), 0);
    }
}
if (!Array.prototype.sortBy) {
    Array.prototype.sortBy = function (...args) {
        const orders = args.map(x => typeof x == 'function' ? x : y => y[x]);
        const compareFunction = (a, b) => {
            for (const order of orders) {
                const valueA = order(a);
                const valueB = order(b);
                if (valueA > valueB)
                    return 1;
                else if (valueA < valueB)
                    return -1;
            }
            return 0;
        };
        return this.sort(compareFunction);
    }
}
if (!Array.prototype.groupBy) {
    Array.prototype.groupBy = function (fun = x => x) {
        const ret = new Map();
        for (const value of this) {
            const key = fun(value);
            if (ret.has(key))
                ret.get(key).push(value);
            else
                ret.set(key, [value]);
        }
        return ret;
    }
}
if (!Array.prototype.replaceContent) {
    Array.prototype.replaceContent = function (newContent) {
        this.splice(0, this.length);
        for (let item of newContent) {
            this.push(item);
        }
    }
}
if (!Array.prototype.removeItem) {
    Array.prototype.removeItem = function (item) {
        for (let i = 0; i < this.length;) {
            if (this[i] === item || (Number.isNaN(this[i]) && Number.isNaN(item)))
                this.splice(i, 1);
            else
                i++;
        }
    }
}