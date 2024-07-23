class Solution {
    public int solution(String myString, String pat) {
        String str = "";
        
        for(String i : myString.split("")) {
            if(i.equals("A"))
                str += "B";
            else 
                str += "A";
        }
        
        return str.contains(pat) ? 1 : 0;
    }
}