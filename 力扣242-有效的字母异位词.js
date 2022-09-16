var isAnagram = function(s, t) {
    //长度不同，必定不是异位词
    if(s.length !== t.length) return false;
    const resSet = new Array(26).fill(0);
    const base = "a".charCodeAt();
    for(const i of s) {
        //字母a存到索引为0的位置，出现一次该索引位置上元素+1
        resSet[i.charCodeAt() - base]++;
    }
    for(const i of t) {
        //有未记录的元素，直接判断不是异位词
        if(!resSet[i.charCodeAt() - base]) return false;
        resSet[i.charCodeAt() - base]--;
    }
    //完成上述过程则判断为异位词
    return true;
};
