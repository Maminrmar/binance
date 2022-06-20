console.clear();
js();
function js(){
    if(document.getElementsByClassName("not-fount-container").length==1){
        $(".not-fount-container").remove();
        document.writeln("<h1 class='not-fount-container' style='color:red;margin-top:350px;text-align:center;'>Token or coin not found!</h1>");
        return false;
    }
    $("[data-testid='buyModeButton']").click();
    $(".css-ybbx55").click();
    try {
        $(".css-tnppit > div:nth-child(6)").click();
    } catch {
        try {
            $(".css-tnppit > div:nth-child(5)").click();
        } catch {
            try {
                $(".css-tnppit > div:nth-child(4)").click();
            } catch {
                try {
                    $(".css-tnppit > div:nth-child(3)").click();
                } catch {
                    try {
                        $(".css-tnppit > div:nth-child(2)").click();
                    } catch {
                        $(".css-tnppit > div:nth-child(1)").click();
                    }
                }
            }
        }
    }
        
    $(".css-ybbx55").click();
    $(".css-ybbx55").click();
    var all = ["[name='header']", "[name='chart']", "[name='orderform']", "[name='trades']", "[name='market']", "[name='marketActivity']",".css-oaluk9", ".css-1bea9fq"];
    for (var i = 0; i< all.length; i++){
        try {
            $(all[i]).remove();
        } catch {
            console.warn(all[i]+" not found!");
        }
    }
    
    document.getElementsByClassName("css-nn0f52")[0].style.height = "800px";
    document.getElementsByClassName("css-nn0f52")[0].style.margin = "-60px 0px 0px 0px";
    document.getElementsByClassName("css-17dieqd")[0].style.width = "1024px";
    document.getElementsByClassName("css-1jx6fr9")[0].style.width = "1024px";
    document.getElementsByClassName("css-17dieqd")[0].style.height = "700px";
}