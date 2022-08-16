class HashTable {
    constructor(size = 7) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let prime = 31;
        for (var i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * prime + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, val) {
        let index = this._hash(key);
        let data = [key, val];
        if (!this.keyMap[index]) this.keyMap[index] = [data];
        else this.keyMap[index].push(data);
        return this.keyMap;
    }

    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (var item of this.keyMap[index]) {
                if (item[0] === key) return item;
            }
        }
        return;
    }

    keys() {
        let result = [];
        for (var index of this.keyMap) {
            if (index) {
                for (var keyVal of index) {
                    result.push(keyVal[0]);
                }
            }
        }
        return result;
    }

    values() {
        let seen = {};
        let result = [];
        for (var index of this.keyMap) {
            if (index) {
                for (var keyVal of index) {
                    if (seen[keyVal[1]]) {
                        continue;
                    }
                    result.push(keyVal[1]);
                    seen[keyVal[1]] = keyVal[1];
                }
            }
        }
        return result;
    }

}

let hashTable = new HashTable();
hashTable.set('mandy', 'ren');
hashTable.set('bowen', 'jiang');
hashTable.set('dan', 'dan');
hashTable.set('cat', 'meow');
hashTable.set('star', 'war');
hashTable.set('cold', 'war');


