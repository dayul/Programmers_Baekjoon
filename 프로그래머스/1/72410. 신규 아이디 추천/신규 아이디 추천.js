function solution(new_id) {
    var answer = '';
    
    // 1, 2, 3 단계
    new_id = new_id.toLowerCase().replace(/[^a-z0-9-_.]/g, '');
    new_id = new_id.replace(/\.{2,}/g, '.');
    
    // 4단계
    new_id = new_id.replace(/^\.|\.$/, '');
    
    // 5단계
    // new_id = new_id | 'a';
    if (new_id === "") new_id = "a";
    
    // 6단계
    new_id = new_id.length >= 16 ? new_id.slice(0, 15) : new_id;
    new_id = new_id.replace(/\.$/, '');
    
    // 7단계
    while(new_id.length <= 2) {
        new_id += new_id[new_id.length - 1];
    }
    
    answer = new_id;
    return answer;
}