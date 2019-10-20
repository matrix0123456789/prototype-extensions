require('../js/PrototypeExtensions');
const fc = require('fast-check');
const assert = require('assert');

function equal(a, b) {
    a === b || (isNaN(a) && isNaN(b));
}

// Properties
describe('Array', () => {
    describe('min', () => {

        it('sample test', () => {
            assert.equal([].min(), null);
            assert.equal([5, 3, 2, 1].min(), 1);
            assert.equal([5, 3, 2, 1].min(x => -x), 5);
        });
        describe('property based', () => {
            it('integers', () => {
                fc.assert(fc.property(fc.array(fc.integer()), arr => {
                    let result = arr.min();
                    if (arr.length === 0)
                        return result === null
                    else
                        return typeof result == 'number' && Number.isInteger(result) && arr.includes(result);
                }));
            });
            it('double', () => {
                fc.assert(fc.property(fc.array(fc.double()), arr => {
                    let result = arr.min();
                    if (arr.length === 0)
                        return result === null;
                    else
                        return typeof result == 'number' && arr.includes(result);
                }));
            });
            it('random', () => {
                fc.assert(fc.property(fc.array(fc.anything()), arr => {
                    let result = arr.min();
                    return result === null || (typeof result == 'number' && arr.includes(result));
                }));
                fc.assert(fc.property(fc.array(fc.anything()), arr => {
                    let result = arr.min(x => Math.random());
                    if (arr.length === 0)
                        return result === null;
                    else
                        return arr.includes(result);
                }));
            });
            it('equal', () => {
                fc.assert(fc.property(fc.array(fc.anything()), arr => {
                    let result = arr.min(x => 1);
                    if (arr.length > 0)
                        return equal(result, arr[0]);
                }));
                fc.assert(fc.property(fc.array(fc.anything()), arr => {
                    let result = arr.min(x => null);
                    return result === null;
                }));
                fc.assert(fc.property(fc.array(fc.anything()), arr => {
                    let result = arr.min(x => NaN);
                    return result === null;
                }));
            });
        });

    });
    describe('max', () => {

        it('sample test', () => {
            assert.equal([].max(), null);
            assert.equal([5, 3, 2, 1].max(), 5);
            assert.equal([5, 3, 2, 1].max(x => -x), 1);
        });
        describe('property based', () => {
            it('integers', () => {
                fc.assert(fc.property(fc.array(fc.integer()), arr => {
                    let result = arr.max();
                    if (arr.length === 0)
                        return result === null
                    else
                        return typeof result == 'number' && Number.isInteger(result) && arr.includes(result);
                }));
            });
            it('double', () => {
                fc.assert(fc.property(fc.array(fc.double()), arr => {
                    let result = arr.max();
                    if (arr.length === 0)
                        return result === null;
                    else
                        return typeof result == 'number' && arr.includes(result);
                }));
            });
            it('random', () => {
                fc.assert(fc.property(fc.array(fc.anything()), arr => {
                    let result = arr.max();
                    return result === null || (typeof result == 'number' && arr.includes(result));
                }));
                fc.assert(fc.property(fc.array(fc.anything()), arr => {
                    let result = arr.max(x => Math.random());
                    if (arr.length === 0)
                        return result === null;
                    else
                        return arr.includes(result);
                }));
            });
            it('equal', () => {
                fc.assert(fc.property(fc.array(fc.anything()), arr => {
                    let result = arr.max(x => 1);
                    if (arr.length > 0)
                        return equal(result, arr[0]);
                }));
                fc.assert(fc.property(fc.array(fc.anything()), arr => {
                    let result = arr.max(x => null);
                    return result === null;
                }));
                fc.assert(fc.property(fc.array(fc.anything()), arr => {
                    let result = arr.max(x => NaN);
                    return result === null;
                }));
            });
        });

    });
    describe('sum', () => {

        it('sample test', () => {
            assert.equal([].sum(), 0);
            assert.equal([5, 3, 2, 1].sum(), 11);
            assert.equal([5, 3, 2, 1].sum(x => -x), -11);
        });
        describe('property based', () => {
            it('integers', () => {
                fc.assert(fc.property(fc.array(fc.integer()), arr => {
                    let result = arr.sum();
                    return typeof result == 'number' && Number.isInteger(result);
                }));
            });
            it('double', () => {
                fc.assert(fc.property(fc.array(fc.anything()), arr => {
                    let result = arr.sum();
                    return typeof result == 'number';
                }));
            });
            it('random', () => {
                fc.assert(fc.property(fc.array(fc.anything()), fc.context(), (arr, ctx) => {
                    let result = arr.sum(x => Math.random());
                    return Number.isFinite(result);
                }));
            });
            it('equal', () => {
                fc.assert(fc.property(fc.array(fc.anything()), fc.context(), (arr, ctx) => {
                    let result = arr.sum(x => 1);
                    return result === arr.length;
                }));
            });
        });
    });
    describe('groupBy', () => {

        it('sample test', () => {
            assert.deepEqual([].groupBy(), new Map());
            assert.deepEqual([1, 2].groupBy(), new Map([[1, [1]], [2, [2]]]));
            const test = [
                {group: 1, name: 'A'},
                {group: 1, name: 'B'},
                {group: 1, name: 'C'},
                {group: 2, name: 'D'},
            ];
            assert.deepEqual(test.groupBy(x => x.group), new Map([[1, [test[0], test[1], test[2]]], [2, [test[3]]]]));
        });
        describe('property based', () => {
            it('random', () => {
                fc.assert(fc.property(fc.array(fc.anything()), arr => {
                    let result = arr.groupBy(x => x);
                    return result instanceof Map && Array.from(result).length <= arr.length && Array.from(result).flatMap(x => x[1]).length === arr.length && !Array.from(result).some(x => !(x[1] instanceof Array));
                }));
            });
            it('integer', () => {
                fc.assert(fc.property(fc.array(fc.integer()), arr => {
                    let result = arr.groupBy(x => x);
                    let allResulted = Array.from(result).flatMap(x => x[1]);
                    return !arr.some(x => !allResulted.includes(x)) && !allResulted.some(x => !arr.includes(x))
                }));
            });
        });
    });
});

