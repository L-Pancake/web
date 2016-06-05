/**
 * Created by pancake on 2016/3/31 0031.
 */
function headColor(){
    if(!document.getElementsByClassName||!document.getElementsByTagName)return false;
    if(!document.getElementsByClassName("OurEDA_link"))return false;

    var OurEDA_link=document.getElementsByClassName("OurEDA_link");
    var a=OurEDA_link[0].getElementsByTagName("a");
    var img=OurEDA_link[0].getElementsByTagName("img");
    a[0].onmouseover=function(){
        var src=img[0].getAttribute("src");
        var temp=(src.substring(0,src.length-4))+"红.png";
        img[0].setAttribute("src",temp);
    }
    a[0].onmouseout=function(){
        var src=img[0].getAttribute("src");
        var temp=(src.substring(0,src.length-5))+".png";
        img[0].setAttribute("src",temp);
    }
    a[1].onmouseover=function(){
        var src=img[1].getAttribute("src");
        var temp=(src.substring(0,src.length-4))+"红.png";
        img[1].setAttribute("src",temp);
    }
    a[1].onmouseout=function(){
        var src=img[1].getAttribute("src");
        var temp=(src.substring(0,src.length-5))+".png";
        img[1].setAttribute("src",temp);
    }
    a[2].onmouseover=function(){
        var src=img[2].getAttribute("src");
        var temp=(src.substring(0,src.length-4))+"红.png";
        img[2].setAttribute("src",temp);
    }
    a[2].onmouseout=function(){
        var src=img[2].getAttribute("src");
        var temp=(src.substring(0,src.length-5))+".png";
        img[2].setAttribute("src",temp);
    }
    a[3].onmouseover=function(){
        var src=img[3].getAttribute("src");
        var temp=(src.substring(0,src.length-4))+"红.png";
        img[3].setAttribute("src",temp);
    }
    a[3].onmouseout=function(){
        var src=img[3].getAttribute("src");
        var temp=(src.substring(0,src.length-5))+".png";
        img[3].setAttribute("src",temp);
    }
}
addLoadEvent(headColor);