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
