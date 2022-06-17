var intersection = function(nums1, nums2) {
    let a = new Set(nums1)
    let b = new Set(nums2)
    let r = new Set([...a].filter(x => b.has(x)))
    return  r = [...r]
};

//哈希表方法
//将两个数组变为集合去掉重复元素，遍历元素较少的集合，验证其中每一个元素是否存在于另一个集合中
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    return set_intersection(set1, set2)
};

const set_intersection = function (set1, set2) {
    if (set1.size > set2.size) {
        return set_intersection(set2, set1)
    }
    let intersection = new Set()
    for (const i of set1) {
        if (set2.has(i)) {
            intersection.add(i)
        }
    }
    return [...intersection]
}

//排序双指针算法
//首先将两个数组进行升序排列，然后两个指针分别指向数组第一个元素。
//元素相等，则加入并且两个指针都移动。不相等则移动元素较小的那个指针，直到有一个指针指向空
var intersection = function(nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    let l1 = nums1.length, l2 = nums2.length
    let index1 = 0, index2 = 0
    let intersection = []
    while (index1 < l1 && index2 < l2) {
        let num1 = nums1[index1]
        let num2 = nums2[index2]
        if (num1 === num2) {
            if(!intersection.length || num1 !== intersection[intersection.length - 1]) {
                intersection.push(num1)
            }
            index1++
            index2++
        }else if (num1 < num2) {
            index1++
        }else if (num1 > num2) {
            index2++
        }
    }
    return [...intersection]
};