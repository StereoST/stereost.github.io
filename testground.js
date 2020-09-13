function changetext()
{
    let text = document.getElementById('text').value;
    if (text === '')
    {
        text = 'lol you entered nothing, what were you thinking';
    }
    //Change html element
    document.getElementById('variabletext').innerHTML = text
}

function changecolor(id)
{
    document.getElementById('variabletext').style.color = id
    document.getElementById('variabletext').style.fontweight = "bold";
}



