function openSurvey() {
    document.getElementById('survey').style.display = "block";
}

function formSwitch(e){
    if(e.keyCode === 13){
        inputInForm[inputCounter].style.bottom = "200%";
        var x = inputText[inputCounter].value;
        //console.log(x);
        inputInForm[inputCounter + 1].style.bottom = "calc(50% - 50px)";
        inputCounter ++
    }
}

function formSwitchCheck(e){
    if(e.keyCode === 13){
        document.getElementById('survey').submit();
        document.getElementById('survey').style.display = "none";
        //console.log(inputText[0].value, inputText[1].value, inputText[2].value);
    }
}
