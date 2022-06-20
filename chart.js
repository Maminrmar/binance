console.clear();
js();
function js(){
    if(document.getElementsByClassName("not-fount-container").length==1){
        $(".not-fount-container").remove();
        document.writeln("<h1 class='not-fount-container' style='color:red;margin-top:350px;text-align:center;'>Token or coin not found!</h1>");
        return false;
    }
    
    var all = ["[name='header']", "[name='orderbook']", "[name='orderform']", "[name='trades']", "[name='market']", "[name='marketActivity']",".css-oaluk9", ".css-1bea9fq"];
    for (var i = 0; i< all.length; i++){
        try {
            $(all[i]).remove();
        } catch {
            console.warn(all[i]+" not found!");
        }
    }
    
    document.getElementsByClassName("css-nn0f52")[0].style.height = "800px";
    document.getElementsByClassName("css-nn0f52")[0].style.margin = "-60px 0px 0px 0px";
    document.getElementsByClassName("css-1moaar7")[0].style.width = "1024px";
    document.getElementsByClassName("css-1jx6fr9")[0].style.width = "1024px";
    document.getElementsByClassName("css-1moaar7")[0].style.height = "700px";
    document.getElementsByClassName("css-1moaar7")[0].style.margin = "0px 0px 0px -255px";
}