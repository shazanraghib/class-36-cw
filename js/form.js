class Form{
    constructor(){}
    display(){
        var title=createElement("h2");
        title.html("car racing");
        title.position(130,0);
        var input=createInput("name");
        var button=createButton("play");
        var greeting=createElement("h3");
        input.position(160,130);
        button.position(250,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount+=1;
            player.updateName(name);
            player.updateCount(playerCount);
            greeting.html("hello "+name);
            greeting.position(130,150);
        })
    }
}