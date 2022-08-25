/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magazineMap={};
    magazine.split('').forEach((char)=>{
        if(magazineMap[char]==undefined) {
            magazineMap[char]=1;
            return;
        }
        magazineMap[char]+=1;
    });
    ransomNote=ransomNote.split('');
    for(let i=0; i<ransomNote.length; i++){
        let char=ransomNote[i];
        if([undefined,0].indexOf(magazineMap[char])>-1) return false;
        magazineMap[char]-=1;
    }
    return true;
};