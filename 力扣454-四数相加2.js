var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let map = new Map()
    //遍历两个数组，找到和的所有值和出现次数
    nums1.forEach(x => {
        nums2.forEach(y => {
            map.set(x + y, (map.get(x + y) || 0) + 1)
        })
    })
    let count = 0
    for (let m of nums3){
        for (let n of nums4){
            if(map.get(- m - n)){
                count += map.get(- m - n)
                //count应该加上和出现的次数，而不是找到和之后+1，因为相同的和可能由数组不同位置的元素组成，视为不同的情况
            }
        }
    }
    return count
};