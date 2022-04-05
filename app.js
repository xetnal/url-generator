let pronoun = ['the','our','my', 'this', 'that'];
let adj = ['great', 'big', 'evil', 'glorious', 'mature'];
let noun = ['jogger','racoon', 'dragon', 'rat', 'cat'];
let domain = ['.com', '.cl', '.org', '.us', '.dev']
const urlGenerator = () => {
    
    for(p of pronoun) {
        for (a of adj){
            for (n of noun){
                for (d of domain) {
                    console.log(p + a + n + d)                   
                }
                
            }
        }       
    }
}
urlGenerator();