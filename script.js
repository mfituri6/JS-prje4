let message = document.querySelector('#message');

let counter = document.querySelector('#counter');


message.onkeyup = function() {
    counter.textContent = 100 - this.value.length;
if (counter.textContent < 0) {
    counter.style.color = "red";
} else {
    counter.style.color = "black";
} 
};

