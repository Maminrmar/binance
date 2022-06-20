var timeframe = "Time";  // Time 1m 3m 15m 30m 15m 1h 2h 4h 6h 8h 12h 1d 3d 1w 1M
js();
function js(){
    if(document.getElementsByClassName("not-fount-container").length==1){
        $(".not-fount-container").remove();
        document.writeln("<h1 class='not-fount-container' style='color:red;margin-top:350px;text-align:center;'>Token or coin not found!</h1>");
        return false;
    }  
    try{
        document.getElementById(timeframe).click();
    } catch {
        document.getElementById("1h").click();
    }
}
