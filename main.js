function Palindrome() {
        var word = document.getElementById("word_input").value;
    console.log(word);
        var reverse1 =word.reverse();
    console.log(reverse1)
    if (reverse1 == word) {
        document.getElementById("result").innerHTML = word + " Is a palindrome"
    } else {
        document.getElementById("result").innerHTML = word + " Is not a palindrome"
    }
}
