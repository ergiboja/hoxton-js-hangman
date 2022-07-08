import './style.css'


let wordList = [
  {
      word: "python",
      characters: ["y","o"],
      mistakes: 4
      
  },
  {
      word: "glock",
      characters: ["g", "k"],
      mistakes: 4
  },
  {
      word: "aim",
      characters: ["i"],
      mistakes: 2
      
  },
  {
      word: "processor",
      characters: ["p","c","r"],
      mistakes: 4
  },
  {
      word: "motherboard",
      characters: ["m","r","d"],
      mistakes: 4
      
  },
  {
      word: "ebay",
      characters: ["b","y"],
      mistakes: 2
    
  },
  {
      word: "gaming",
      characters: ["g","i","g"],
      mistakes: 4
      
  },
  {
      word: "coding",
      characters: ["c","i","g"],
      mistakes: 4
     
  },
  {
      word: "matrix",
      characters: ["m","t","x"],
      mistakes: 4
      
  },
  {
      word: "bugs",
      characters: ["b","s"],
      mistakes: 3
     
  },
  {
      word: "avatar",
      characters: ["a","t","r"],
      mistakes: 4
  
  },
  {
      word: "gif",
      characters: ["i"],
      mistakes: 2
     
  },
  {
      word: "mental",
      characters: ["n","l"],
      mistakes: 4
    
  },
  {
      word: "map",
      characters: ["a"],
      mistakes: 2
     
  },
  {
      word: "island",
      characters: ["i","l","d"],
      mistakes: 4
      
  },
  {
      word: "hockey",
      characters: ["h","c","k"],
      mistakes: 4
     
  },
  {
      word: "chess",
      characters: ["s","s"],
      mistakes: 3
      
  },
  {
      word: "viber",
      characters: ["i","b"],
      mistakes: 3
     
  },
  {
      word: "github",
      characters: ["t","h","b"],
      mistakes: 3
 
  },
  {
      word: "png",
      characters: ["n"],
      mistakes: 2
     
  },
  {
      word: "silver",
      characters: ["l","v"],
      mistakes: 3
     
  },
  {
      word: "mobile",
      characters: ["m","b","e"],
      mistakes: 3
     
  },
  {
      word: "gpu",
      characters: ["p"],
      mistakes: 2
     
  },
  {
      word: "java",
      characters: ["j","a"],
      mistakes: 2
  },
  {
      word: "google",
      characters: ["o","o"],
      mistakes: 3
    
  },
  {
      word: "venice",
      characters: ["n","i"],
      mistakes: 3
      
  },
  {
      word: "excel",
      characters: ["e","x"],
      mistakes: 3
     
  },
  {
      word: "mysql",
      characters: ["s","q"],
      mistakes: 3
     
  },
  {
      word: "albania",
      characters: ["a","l"],
      mistakes: 3
      
  },
  {
      word: "flute",
      characters: ["f","t"],
      mistakes: 3
     
  },
  {
      word: "crypto",
      characters: ["y","t"],
      mistakes: 3
      
  },
  {
      word: "tesla",
      characters: ["t","a"],
      mistakes: 3
     
  },
  {
      word: "mars",
      characters: ["a","s"],
      mistakes: 2
     
  },
  {
      word: "proxy",
      characters: ["x","y"],
      mistakes: 3
     
  },
  {
      word: "email",
      characters: ["m","l"],
      mistakes: 3
     
  },
  {
      word: "html",
      characters: ["t","l"],
      mistakes: 2
      
  },
  {
      word: "air",
      characters: ["i"],
      mistakes: 2
     
  },
  {
      word: "idea",
      characters: ["i","a"],
      mistakes: 2
      
  },
  {
      word: "server",
      characters: ["r","v"],
      mistakes: 3
     
  },
  {
      word: "svg",
      characters: ["v"],
      mistakes: 2
      
  },
  {
      word: "jpeg",
      characters: ["p","g"],
      mistakes: 3
  },
  {
      word: "search",
      characters: ["s","r","h"],
      mistakes: 3
    
  },
  {
      word: "key",
      characters: ["y"],
      mistakes: 2
      },
  {
      word: "egypt",
      characters: ["g","y"],
      mistakes: 3
  },
  {
      word: "joker",
      characters: ["j","k"],
      mistakes: 3
  },
  {
      word: "dubai",
      characters: ["d","a"],
      mistakes: 3
     
  },
  {
      word: "photo",
      characters: ["o","t"],
      mistakes: 3
  },
  {
      word: "nile",
      characters: ["l","e"],
      mistakes: 3
  },
  {
      word: "rain",
      characters: ["r","n"],
      mistakes: 3

  },
]


const inputs = document.querySelector('.input');
let resetBtn = document.querySelector(".buton");
let mistakes = document.querySelector(".guess span");


function randomWord(){
  let randomObject = wordList[Math.floor(Math.random() * wordList.length)];
  let word = randomObject.word;
  mistakes.innerText = randomObject.mistakes
  console.log(word)
  console.log(word.length)
 

  for(let i = 0; i<word.length; i++){
    let containerEL = document.querySelector("#input")
  
let inputEl = document.createElement('input')
inputEl.className = "inpt"
inputEl.type = "text"
inputEl.maxLength = "1"
containerEL.append(inputEl)
 
}
  

}
// function wordbtn(){ let containerEL = document.querySelector("#input")
// containerEL.textContent = ''
// let inputEl = document.createElement('input')
// inputEl.className = "inpt"
// inputEl.type = "text"
// containerEL.append(inputEl)
// }
// wordbtn()
randomWord()
function reload() {
  reload = location.reload();
}

resetBtn.addEventListener("click",reload,false);