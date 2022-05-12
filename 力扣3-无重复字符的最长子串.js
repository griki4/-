//采用滑动窗口的方式
//两个指针分别指向窗口的左边界和右边界
const lengthOfLongestSubstring = function (s) {
    //一个记录字符串是否出现过的数据结构
    const set = new Set()
    const n = s.length
    //右指针，初始值为-1，代表最开始还未移动
    let r = -1, answer = 0 //子串
    //遍历字符串
    for (let i = 0;i < n;i++) {
        //指针移动，删除窗口最左边的元素
        if (i !== 0) {
            set.delete(s.charAt(i-1))
        }

        //右指针移动
        while (r + 1 < n && !set.has(s.charAt(r + 1)) ) {
            set.add(s.charAt(r + 1))
            r++
        }
        answer = Math.max(answer, r - i +1)
    }
    return answer
};

const Longest = function (s) {
    let l = s.length//字符串长度，用于进行字符串的遍历
    let set = new Set()//Set类型数据，可以使用它判断是否含有相同的字符
    let rk = 0,ans = 0//最开始让右指针为0，表示此时右指针还未开始移动。此时最大无重复字符子串的长度为0
    for (let i = 0; i < l; i++) {
        if (i !== 0) {//i代表左指针，左指针每移动一次就要删除一个位于最左边的字符
            set.delete(s.charAt(i - 1))
        }
        while (rk < l && !set.has(s.charAt(rk))) {
            set.add(s.charAt(rk))
            rk++
        }//右指针移动。左指针移动一次，右指针开始移动，每移动一次检查set中是否含有指针所指的元素
        //无就添加，并且继续移动
        //有则停止移动，指针移动到重复的字符的下一个字符
        //下一次左指针移动后，右指针就从原来重复字符的下一位开始移动
        ans = Math.max(ans, r - i + 1)//每次移动左指针前都选出最长的子串

    }
}