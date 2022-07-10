/*洗牌算法
   数组长度为n，我们首先在0~n-1中随机挑选一个位置索引，将该位置的数和数组第一个位置的数交换
   接着从1~n-1中随机挑选一个位置索引，将该位置的数和数组第二个位置交换，依次类推，遍历数组即可

   类似洗牌一样
    1.我们有n张牌和n个空盒子，每个盒子只能放一张牌
    2.从牌中随机挑选一张放入第一个盒子
    3.从剩下的牌中又随机挑选一张放入第二个盒子
    4.循环往复直至所有牌都放完*/
Solution.prototype.shuffle = function() {
    const temp = this.nums.concat();//生成一个新的和原数组元素一样的数组
    for(let i=0;i<temp.length;i++){

        //生成一个0到1之间的随机数，让它乘以temp.length-i，效果就是在剩下的空位中随机挑选一个位置
        //这行代码是最关键的，它实现了从剩余的空位置中随机挑选一个位置的思想
        const idx = Math.floor(Math.random() * (temp.length-i)) + i;

        //将这个随机挑选的位置上填上temp中对应的数，并且放到未填空位的首部
        [temp[idx], temp[i]] = [temp[i], temp[idx]]
        /*const tmp = temp[idx];
        temp[idx] = temp[i];
        temp[i] = tmp;*/
    }
    return temp;
};
