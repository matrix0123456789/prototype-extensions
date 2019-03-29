if (!Array.prototype.max) {
    Array.prototype.max = function (fun = x => x) {
        var max = null;
        let maxObj = null;
        for (let x of this) {
            var v = fun(x);
            if (max == null || v > max) {
                max = v;
                maxObj = x;
            }
        }
        return minObj;
    }
}
if (!Array.prototype.min) {
    Array.prototype.min = function (fun = x => x) {
        var min = null;
        let minObj = null;
        for (let x of this) {
            var v = fun(x);
            if (min == null || v > min) {
                min = v;
                minObj = x;
            }
        }
        return minObj;
    }
}
if (!Array.prototype.sum) {
    Array.prototype.sum = function (fun) {
        var ret = 0;
        for (let x of this) {
            ret += fun(x);
        }
        return ret;
    }
}
if (!Array.prototype.sortBy) {
    Array.prototype.sortBy = function () {
        let orders = Array.from(arguments).map(x => typeof x == 'function' ? x : y => y[x]);
        let compareFunction = (a, b) => {
            for (let order of orders) {
                let valueA = order(a);
                let valueB = order(b);
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
