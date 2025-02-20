function RandomNumbers(count, sum) {
    let numbers = [];
    let functionSum = sum;

    for (let i = 0; i < count; i++) {
        let num;
        if (i === count - 1) {
            num = functionSum;
        } else {
            num = Math.floor(Math.random() * (functionSum - (count - i - 1))) + 1;
            functionSum -= num;
        }

        numbers.push(num);
    }

    return numbers;
}

function displayText() {
    var inputText = document.getElementById("input").value;
    let str = "";
    let count = Math.floor(Math.random() * (inputText.length) + 1);
    let sum = inputText.length;
    let numbers = RandomNumbers(count, sum);
    var displayTextArea = document.getElementById("displayTextArea");
    let j = 0;
    numbers.forEach(element => {
        str += "{";
        for (let i = 0; i < element ; i++) {
            str += " " + inputText[j] + " ";
            j++ ;
        }
        str += "}";
    });
    displayTextArea.value = `اعداد تصادفی که مجموع‌شان برابر با ${sum} است: ${numbers.join(", ")}`;
    displayTextArea.style.display = "block";
    setTimeout(function () {
        displayTextArea.style.opacity = 1;
        typeText(displayTextArea.value + "\n" + "عدد تصادفی تولیدی = " + count + "\n" + "افراز مجموعه شما به صورت " + "\n" + str + "\n" + ":)", displayTextArea);
    }, 10);
}
function typeText(text, element) {
    element.value = "";
    let i = 0;
    function typingEffect() {
        if (i < text.length) {
            element.value += text.charAt(i);
            i++;
            adjustHeight(element);
            setTimeout(typingEffect, 50);
        }
    }
    typingEffect();
}

function adjustHeight(element) {
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
}




