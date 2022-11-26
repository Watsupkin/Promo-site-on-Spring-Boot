window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let feedbackBtn = document.querySelectorAll('.feedback_btn'),
        cancelFormBtn = document.getElementById('cancel'),
        form = document.getElementById("myForm"),
        submitBtn = document.getElementById('submitBtn'),
        inputs = document.getElementsByTagName('input');

    cancelFormBtn.addEventListener('click', function (event) {
        event.preventDefault();
        form.style.display = "none";
        let inputs = document.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
            inputs[i].setAttribute('is-valid', '0');
            inputs[i].style.border = "2px solid #F1F1F1";
        }
        selected.style.border = 'none';
        textAreaForServBtn.value = '';
    });

    for (let i = 0; i < feedbackBtn.length; i++) {
        feedbackBtn[i].addEventListener('click', function () {
            document.getElementById("myForm").style.display = "block";
        });
    }

    document.getElementById("formForm").addEventListener("input", inputHandler);

    function inputHandler({ target }) {
        if (target.hasAttribute("data-reg")) {
            inputCheck(target);
        }
    }

    function inputCheck(el) {
        const inputValue = el.value;
        const inputReg = el.getAttribute("data-reg");
        const reg = new RegExp(inputReg);
        if (reg.test(inputValue)) {
            el.setAttribute("is-valid", "1");
            el.style.border = "2px solid rgb(0, 196, 0)";
        } else {
            el.setAttribute("is-valid", "0");
            el.style.border = "2px solid rgb(255, 0, 0)";
        }
    }

    const serviceProto = document.getElementById('322'),
        textAreaForServBtn = document.getElementById('servSelect');

    let selected;
    serviceProto.addEventListener('click', function (event) {
        let target = event.target;
        if (target.className != 'btnDesOfServ') {
            return;
        } else {
            highlight(target);
        }

    });

    function highlight(btn) {
        if (selected) {
            selected.style.border = 'none';
            textAreaForServBtn.value = '';
        }
        selected = btn;
        selected.style.border = "2px solid rgb(0, 196, 0)";
        textAreaForServBtn.value = selected.textContent;
        console.log(textAreaForServBtn.value);
    }

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
});