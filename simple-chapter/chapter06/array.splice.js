/**
 * Array.prototype.splice
 * splice() 方法通过删除现有元素或添加新元素来更改一个数组的内容；该方法返回包含删除元素的数组
 * array.splice(start [, deleteCount [, item1 [, item2 [, ...]]]]);
 * - start 制定修改的位置，从 0 开始计数；超出长度则从数据末尾开始添加内容
 * - deleteCount 整数，表示要移除的数组元素的个数
 * - item 要添加进去的元素，从start位置开始；不指定则只删除数组元素
 *
 *  注意：splice() 方法在 ECMAScript3 中加入
 */
let months = ['Jan', 'March', 'April', 'June'];

let out = months.splice(1, 0, 'Feb');
console.log('====months====' + months);
console.log('====type of out====' + Object.prototype.toString.call(out));
console.log('====out.length=====' + out.length);


let books = ['Java', 'Android', 'Vue', 'React'];

// 从第2位开始删除0个元素，插入'Angular'
let removed = books.splice(2, 0, 'Angular');
console.log('=======books======' + books);
console.log('======removed.length======' + removed.length);

// 从第3位开始删除1个元素
removed = books.splice(3, 1);
console.log('=======books2======' + books);
console.log('======removed2======' + removed);

// 从第2位删除1个元素，然后插入'Inferno'
removed = books.splice(2, 1, 'Inferno');
console.log('=======books3======' + books);
console.log('======removed3======' + removed);

// 从第0位开始删除2个元素，然后插入 'Nerv','Preact', 'dva.js'
removed = books.splice(0, 2, 'Preact', 'Nerv', 'dva.js');
console.log('=======books4======' + books);
console.log('======removed4======' + removed);

// 从第2位开始伤处所有元素
removed = books.splice(2);
console.log('=======books5======' + books);
console.log('======removed5======' + removed);