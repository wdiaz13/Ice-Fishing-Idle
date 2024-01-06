$(document).ready(function(){
    var fish = 0;
    var line = 10;
    var money = 0;
    var fishPlus = 1;
    var autoDropperPlus = 0;
    var autoDropperPrice = 100;
    var linePrice = 50;
    var fishPrice = 1;
    var menu;

    //game loop (refreshes every 1000ms)
    setInterval(function(){
        fish += autoDropperPlus;
        changeInventory();
        changeMarket();
    }, 1000);

    //drop line function
    $("#drop").click(function(){
        fish += fishPlus;
        changeInventory();
        changeMarket();
    });

    //buy & sell functions
    $("#sell1").click(function(){
        fish--;
        money += fishPrice;
        changeInventory();
        changeMarket();
    });

    $("#sell10").click(function(){
        money += fishPrice * 10;
        fish-=10;
        changeInventory();
        changeMarket();
    });

    $("#sell100").click(function(){
        money += fishPrice * 100;
        fish-=100;
        changeInventory();
        changeMarket();
    });

    $("#sellAll").click(function(){
        money += fishPrice * fish;
        fish = 0;
        changeInventory();
        changeMarket();
    });

    $("#autoDropper").click(function(){
        money -= autoDropperPrice;
        autoDropperPlus++;
        changeInventory();
        changeMarket();
    });

    $("#buyLine").click(function(){
        money -= linePrice;
        line = line + 10;
        changeInventory();
        changeMarket();
    });

    //go to Marketplace
    $("#visit").click(function(){
        menu = switchMenu("marketplace");
        changeMarket();
    });

    //return 
    $("#return").click(function(){
        menu = switchMenu("main");
    });

    //change inventory function
    function changeInventory(){
        $("#money").html("Money: $" + money);

        if(fish == 1){
            $("#fish").html("You own a single fish. ")
        }else{
            $("#fish").html("You own " + fish + " fish. ")
        }

        if(line > 10){
            $("#line").html("Line Length: " + line + "'")
        }else{
            $("#line").html("Line Length: 10'")
        }

    }

    //change market function
    function changeMarket(){
        if(fish > 0){
            $("#sellAll").css("display", "block");
        }else{
            $("#sellAll").css("display", "none");
        }
        if(fish >= 1){
            $("#sell1").css("display", "block");
        }else{
            $("#sell1").css("display", "none");
        }
        if(fish >= 10){
            $("#sell10").css("display", "block");
        }else{
            $("#sell10").css("display", "none");
        }
        if(fish >= 100){
            $("#sell100").css("display", "block");
        }else{
            $("#sell100").css("display", "none");
        }

        if(money >= autoDropperPrice){
            $("#autoDropper").css("display", "block");
        }else{
            $("#autoDropper").css("display", "none");
        }

        if(money >= linePrice){
            $("#buyLine").css("display", "block");
        }else{
            $("#buyLine").css("display", "none");
        }
    }
    
    function switchMenu(menu){
        $(".menus").children().css("display", "none");
        $("." + menu).css("display", "block");
        return menu;
    }
});