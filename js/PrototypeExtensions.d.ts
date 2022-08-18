interface Array<T> {
     min(fun: (x: T) => any): T;
     max(fun: (x: T) => any): T;
     sum(fun: (x: T) => number): number;
     sortBy(fun: (x: T, y:T) => number): Array<T>;
     groupBy<K>(fun: (x: T) => K): Map<K,Array<T>>;
     replaceContent(newContent: Array<T>):void;
     removeItem(item: T):void;
     distinct():Array<T>;
}