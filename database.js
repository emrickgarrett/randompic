
var words = new Array();
words[0] = "Ace";
words[1] = "Test";
words[2] = "Dingus";
words[3] = "Help";
words[4] = "Snake";
words[5] = "Blood";
words[6] = "Donate";
words[7] = "Hagrid";
words[8] = "Panera";

exports.getWord = function(){
	var randomNum = Math.floor((Math.random()*words.length));

	return words[randomNum];
}

exports.putWord = function(word){
	words[words.length] = word;
	//console.log(word);
}
