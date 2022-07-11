/*本题是一个很好的学习排序算法的例子
* 1.快速排序（又称分区排序）
*   随机选取一个基准数，然后遍历数组中的其他数
*   将大于该基准数的数放到基准数右边，小于的放到左边
*   形成左右两个子数组，再对子数组重复上述步骤*/

var sortArray = function(nums) {
    if( nums.length <= 1 ) return nums
    let left = []
    let right = []
    let pivotIndex  = Math.floor(nums.length / 2)
    let pivotValue =  nums.splice(pivotIndex,1)[0]
    for(let i = 0; i < nums.length; i++ ){
        if(nums[i] > pivotValue){
            right.push(nums[i])
        }else{
            left.push(nums[i])
        }
    }
    return sortArray(left).concat(pivotValue,sortArray(right))
};
//该排序方法会不断开辟新的空间来存储分类后的数组，当对空间复杂度有要求的时候最好让数组进行原地排序（交换顺序）

/*2.冒泡排序
*   思想是两两比较数组中的数据，前一个数据大于后一个则交换二者的位置
*   这样遍历一次数组之后数组中最大的数据就被移动到了数组末尾
*
* 特点是时间复杂度高但是空间复杂度低*/
var sortArray = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++){
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
            }
        }
    }
    return nums
};
