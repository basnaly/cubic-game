
const CSS_RESET = {
    "font-weigth": "unset",
    "display": "flex",
    "pointer-events": "unset"
}

const CSS_FONT = {
    "font-weigth": "bold",
    "pointer-events": "none"
}

const DOT = "⚫️"

const CSS_GRID = {
    "display": "grid",
    "grid-template-rows": "1fr 1fr 1fr",
    "grid-template-columns": "1fr 1fr 1fr",
}

const transformToDots = (number) => {
    let arr = [];
    switch(number) {
        case 6: arr = [DOT, "", DOT, DOT, "", DOT, DOT, "", DOT]; break;
        case 5: arr = [DOT, "", DOT, "", DOT, "", DOT, "", DOT]; break;
        case 4: arr = [DOT, "", DOT, "", "", "", DOT, "", DOT]; break;
        case 3: arr = [DOT, "", "", "", DOT, "", "", "", DOT]; break;
        case 2: arr = ["", "", DOT, "", "", "", DOT, "", ""]; break;
        case 1: arr = ["", "", "", "", DOT, "", "", "", ""]; break;
    }
    return arr.map(el => $("<div></div>").html(el));
}

const onClick = (cube) => {
    let number1 = Math.round(Math.random() * 5 + 1);
    let number2 = Math.round(Math.random() * 5 + 1);

    const result = () => {
        if(number1 === number2){
            $(".text").html("You won!");
        } else {
          $(".text").html("You lost!");
      }
    }
    
    let pressed = ".box2";
    let another = ".box1";

    if (cube === 1) {
        pressed = ".box1";
        another = ".box2";
    }
    $(pressed).addClass("animate__animated animate__flipInY");
    $(pressed).html(transformToDots(number1)).css({...CSS_FONT, ...CSS_GRID});

    setTimeout(() => {
        $(another).addClass("animate__animated animate__flipInY");
        $(another).html(transformToDots(number2)).css({...CSS_FONT, ...CSS_GRID});
        
        setTimeout(result, 500);
            
        setTimeout(resetGame, 1500);

    }, 1000);  
}

const resetGame = () => {
    $(".box1").html("Click on me!")
              .css(CSS_RESET)
              .removeClass("animate__animated animate__flipInY");
    $(".text").html("Playing...");
    
    $(".box2").html("Or on me!")
              .css(CSS_RESET)
              .removeClass("animate__animated animate__flipInY");
}


