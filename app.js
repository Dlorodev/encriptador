function hideResultBefore() {
    document.getElementById('result-before').style.display = "none";
    document.getElementById('result-after').style.display = "flex";
}


//encrypt function
function encrypt() {
    let textarea1 = document.getElementById('textarea1');
    let textToEncrypt = textarea1.value;
    let textArray = [];
    let textEncrypted = "";

    for (let i = 0; i < textToEncrypt.length; i++) {
        textArray.push(textToEncrypt[i]);
    }

    for (let j = 0; j < textArray.length; j++) {
        if (textArray[j] == "e") {
            textArray[j] = "enter";
        } else if (textArray[j] == "i") {
            textArray[j] = "imes";
        } else if (textArray[j] == "a") {
            textArray[j] = "ai";
        } else if (textArray[j] == "o") {
            textArray[j] = "ober";
        } else if (textArray[j] == "u") {
            textArray[j] = "ufat";
        }
    }

    textEncrypted = textArray.join("");
    document.getElementById('textarea2').value = textEncrypted;
}