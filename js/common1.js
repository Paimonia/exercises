var text = "Абырвалг";
var vowels = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];

function getVowels(text) {
  var textVowels = "";

  for (var i = 0; i < text.length; i++) {
    var letter = text[i].toLowerCase();
    if (vowels.includes(letter)) {
      textVowels += letter;
    }
  }

  return textVowels;
}

console.log(getVowels(text));
