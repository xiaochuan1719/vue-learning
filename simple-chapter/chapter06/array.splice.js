/**
 * Array.prototype.splice
 * splice() 方法通过删除现有元素或添加新元素来更改一个数组的内容；该方法返回包含删除元素的数组
 * array.splice(start [, deleteCount [, item1 [, item2 [, ...]]]]);
 * - start 制定修改的位置，从 0 开始计数；超出长度则从数据末尾开始添加内容
 * - deleteCount 整数，表示要移除的数组元素的个数
 */
let months = ['Jan', 'March', 'April', 'June'];

let out = months.splice(1, 0, 'Feb');
console.log('====out=====' + typeof out + '=====' + out);
console.log('====months====' + months);

// 从第2位开始删除0个元素，插入'HHH'
out = months.splice(2, 0, 'HHH');
console.log('===out2===' + out);
console.log('====months=====' + months);