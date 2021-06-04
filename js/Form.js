class Form{
    constructor(){}
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(200,30);

        var input = createInput("Name");
        input.position(200,160);

        var button = createButton("Play");
        button.position(250,250);
        
        var greeting = createElement("h3");
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html(" hello " + name);
            greeting.position(200,160);
        })
    }
}