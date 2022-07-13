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

/*3.简单选择排序
*  每一轮都挑选出待排序数组中的最小的一个放入数组最前方*/
var sortArray = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let min = Infinity
        let minIndex
        for (let j = i; j < nums.length; j++){
            if (nums[j] < min){
                min = nums[j]
                minIndex = j
            }
        }
        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
    }
    return nums
}

/*4.插入排序
*   依次从无序数组中取出元素，放到有序数组的对应位置
*   根据从无序数组中取出的元素的大小确定其放在有序数组中的位置*/
var sortArray = function(nums) {
    for (let i = 1; i <nums.length; i++){
        let temp = nums[i]
        let j = i - 1
        for (; j >= 0; j--){
            if (temp >= nums[j]) break;
            nums[j + 1] = nums[j]
        }
        nums[j + 1] = temp
    }
    return nums
}
