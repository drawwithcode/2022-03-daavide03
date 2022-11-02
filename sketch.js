var apiword = "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=100000&maxCorpusCount=-1&minDictionaryCount=10&maxDictionaryCount=-1&minLength=2&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
var url1 ="https://api.wordnik.com/v4/word.json/"
var url2 ="/definitions?limit=3&includeRelated=false&useCanonical=true&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
var apidef;
var apidog ="https://dog.ceo/api/breeds/image/random"
var data2 = [];

function preload(){
  loadJSON(apiword, gotWord);
  loadJSON(apidog, gotDog);
}

function setup() {
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER)
  createCanvas (windowWidth,windowHeight);
  background("black");
}

function gotWord(data1) {
  console.log(data1);
  randomWord = data1["word"];
  console.log(randomWord);
  var apidef = url1 + data1["word"] + url2;
  loadJSON(apidef, gotDefinition);
}

function gotDefinition(data2) {
  for (i=0; i<data2.length; i++) {
  console.log(data2[i].text);
}
definizione = data2[0].text;
  // console.log(definition);
}

function gotDog(dogimage) {
  console.log(dogimage);
  foto = loadImage(dogimage["message"]);
}

function draw(){

  if (keyIsPressed === true) {
    (redraw());
  } else {
    fill(255);
  }
  fill("white");
  rect (windowWidth/2,windowHeight/2,500,700)
  image (foto,windowWidth/2,windowHeight/2 - 50,400,400)
  fill("black");
  textSize(50);
  text(randomWord,windowWidth/2,100,1000);
  textSize(25);
  fill("black");
  text(definizione,windowWidth/2,600,300);
  fill("red");
  textSize(15);
  text("Refresh the page to randomly generate a new dog",windowWidth/2,850);

}