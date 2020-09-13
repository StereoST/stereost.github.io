function descrip(show)
{
    switch (show) {
    case 'office':
        document.getElementById("description").innerHTML = 
        'The Office is an American mockumentary sitcom television series that depicts the everyday work lives of office employees in the Scranton, Pennsylvania branch of the fictional Dunder Mifflin Paper Company. It aired on NBC from March 24, 2005, to May 16, 2013, lasting a total of nine seasons.<br>\
        <p style="text-align:center"><iframe width="420" height="315"\
        src="https://www.youtube.com/embed/umDr0mPuyQc">\
        </iframe></p>';
        break;
    case 'wolf':
        document.getElementById("description").innerHTML = 
        'Spice and Wolf\'s story revolves around Kraft Lawrence, a 25-year-old traveling merchant who peddles various goods from town to town to make a living in a stylized, fictional world, with a historical setting with European influences. <br>\
        <p style="text-align:center"><iframe width="560" height="315" \
        src="https://www.youtube.com/embed/MN_WgwEmRaw" \
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>\
        </iframe><p>';
        break;
    case 'theboys':
        document.getElementById("description").innerHTML = 'The Boys is an American superhero web television series developed by Eric Kripke for Prime Video. Based on the comic book of the same name by Garth Ennis and Darick Robertson, it follows the eponymous team of vigilantes as they combat superpowered individuals who abuse their abilities.\
        <p style="text-align:center"><iframe width="560" height="315" src="https://www.youtube.com/embed/HK0qxKsMPzQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p> ';
        break;
    case 'randc':
        document.getElementById("description").innerHTML = 'An animated series on adult-swim about the infinite adventures of Rick, a genius alcoholic and careless scientist, with his grandson Morty, a 14 year-old anxious boy who is not so smart. Together, they explore the infinite universes; causing mayhem and running into trouble.\
        <p style="text-align:center"><iframe width="560" height="315" src="https://www.youtube.com/embed/8RxDVdP2TZ8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>';
        break;
    }
}
//on change of the select dropdown, do something
function changedescrip(selected)
{
    let show = selected;
    //this is the keyword of what caused this event, in this case, select drop down 
    descrip(show);
}




