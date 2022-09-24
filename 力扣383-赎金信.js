var canConstruct = function(ransomNote, magazine) {
    let record = new Array(26).fill(0)
    let base = 'a'.charCodeAt()
    for(const x of magazine){
        record[x.charCodeAt() - base]++
    }
    for (const y of ransomNote){
        let index = y.charCodeAt() - base
        if(!record[index]) return false
        record[index]--
    }
    return true
};