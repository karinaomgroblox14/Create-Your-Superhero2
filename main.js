var canvas= new fabric.Canvas("myCanvas");

if (keyPressed == '70'){
new_image('ironman_face.png');
console.log("f");
}

if (keyPressed == '66'){
    new_image('spiderman_body.png');
    console.log("b");
    }

    if (keyPressed == '76'){
        new_image('hulk_legs.png');
        console.log("l");
        }
        if (keyPressed == '82'){
            new_image('thor_right_hand.png');
            console.log("r");
            }
            if (keyPressed == '72'){
                new_image('captain_america_left_hand_png');
                console.log("r");
                }

                if(keyPressed == '38'){
                up();
                console.log("up");
                }

                if(keyPressed == '40'){
                    down();
                    console.log("down");
                    }
                
                    if(keyPressed == '37'){
                        left();
                        console.log("left");
                        }

                        if(keyPressed == '39'){
                            right();
                            console.log("right");
                            }