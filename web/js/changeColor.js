/**
 * Created by pancake on 2016/4/2 0002.
 */
function changeColor(){
    if(!document.getElementsByClassName||!document.getElementsByTagName)return false;
    if(!document.getElementsByClassName("page3_value"))return false;
    var page3_value=document.getElementsByClassName("page3_value");
    var page3_value_div=page3_value[0].getElementsByTagName("div");
    page3_value_div_img=page3_value_div[0].getElementsByTagName("img");
    page3_value_div_h1=page3_value_div[0].getElementsByTagName("h1");
    page3_value_div_p=page3_value_div[0].getElementsByTagName("p");

    page3_value_div[0].onmouseover=function(){
        page3_value_div[0].style.backgroundColor="#5E2271";
        src= page3_value_div_img[0].getAttribute("src");
        var temp=(src.substring(0,src.length-4))+"2.png";
        page3_value_div_img[0].setAttribute("src",temp);
        page3_value_div_img[0].style.height="70px";
        page3_value_div_img[0].style.left="200px";
        page3_value_div_img[0].style.top="25px";
        page3_value_div_h1[0].style.color="#fff";
        page3_value_div_p[0].style.color="#fff";
        page3_value_div_h1[0].style.top="60px";
        page3_value_div_h1[0].style.left="60px";
        page3_value_div_p[0].style.top="80px";
        page3_value_div_p[0].style.left="62px";
        moveElement("one_img",127,25,17);
        moveElement("one_h1",60,100,17);
        moveElement("one_p",60,150,20);
    }
    page3_value_div[0].onmouseout=function(){
        page3_value_div[0].style.backgroundColor="inherit";
        src= page3_value_div_img[0].getAttribute("src");
        var temp=(src.substring(0,src.length-5))+".png";
        page3_value_div_img[0].setAttribute("src",temp);
        page3_value_div_img[0].style.height="60px";
        page3_value_div_h1[0].style.color="#000";
        page3_value_div_p[0].style.color="#000";
        moveElement("one_img",132,25,17);
        moveElement("one_h1",60,80,20);
        moveElement("one_p",60,120,17);
    }



    var page3_value_UI=document.getElementsByClassName("page3_value_UI");
    page3_value_UI_img=page3_value_UI[0].getElementsByTagName("img");
    page3_value_UI_h1=page3_value_UI[0].getElementsByTagName("h1");
    page3_value_UI_p=page3_value_UI[0].getElementsByTagName("p");

    page3_value_UI[0].onmouseover=function(){
        page3_value_UI[0].style.backgroundColor="#5E2271";
        src= page3_value_UI_img[0].getAttribute("src");
        var temp=(src.substring(0,src.length-4))+"2.png";
        page3_value_UI_img[0].setAttribute("src",temp);
        page3_value_UI_img[0].style.height="70px";
        page3_value_UI_img[0].style.left="200px";
        page3_value_UI_img[0].style.top="25px";
        page3_value_UI_h1[0].style.color="#fff";
        page3_value_UI_p[0].style.color="#fff";
        page3_value_UI_h1[0].style.top="60px";
        page3_value_UI_h1[0].style.left="60px";
        page3_value_UI_p[0].style.top="80px";
        page3_value_UI_p[0].style.left="62px";
        moveElement("tow_img",127,25,17);
        moveElement("tow_h1",60,100,17);
        moveElement("tow_p",60,150,20);
    }
    page3_value_UI[0].onmouseout=function(){
        page3_value_UI[0].style.backgroundColor="inherit";
        src= page3_value_UI_img[0].getAttribute("src");
        var temp=(src.substring(0,src.length-5))+".png";
        page3_value_UI_img[0].setAttribute("src",temp);
        page3_value_UI_img[0].style.height="60px";
        page3_value_UI_h1[0].style.color="#000";
        page3_value_UI_p[0].style.color="#000";
        moveElement("tow_img",132,25,17);
        moveElement("tow_h1",60,80,20);
        moveElement("tow_p",60,120,17);
    }



    var page3_value_Web=document.getElementsByClassName("page3_value_Web");
    page3_value_Web_img=page3_value_Web[0].getElementsByTagName("img");
    page3_value_Web_h1=page3_value_Web[0].getElementsByTagName("h1");
    page3_value_Web_p=page3_value_Web[0].getElementsByTagName("p");

    page3_value_Web[0].onmouseover=function(){
        page3_value_Web[0].style.backgroundColor="#5E2271";
        src=page3_value_Web_img[0].getAttribute("src");
        var temp=(src.substring(0,src.length-4))+"2.png";
        page3_value_Web_img[0].setAttribute("src",temp);
        page3_value_Web_img[0].style.height="70px";
        page3_value_Web_img[0].style.left="200px";
        page3_value_Web_img[0].style.top="25px";
        page3_value_Web_h1[0].style.color="#fff";
        page3_value_Web_p[0].style.color="#fff";
        page3_value_Web_h1[0].style.top="60px";
        page3_value_Web_h1[0].style.left="60px";
        page3_value_Web_p[0].style.top="80px";
        page3_value_Web_p[0].style.left="62px";
        moveElement("three_img",127,25,17);
        moveElement("three_h1",60,100,17);
        moveElement("three_p",60,150,20);
    }
    page3_value_Web[0].onmouseout=function(){
        page3_value_Web[0].style.backgroundColor="inherit";
        src= page3_value_Web_img[0].getAttribute("src");
        var temp=(src.substring(0,src.length-5))+".png";
        page3_value_Web_img[0].setAttribute("src",temp);
        page3_value_Web_img[0].style.height="60px";
        page3_value_Web_h1[0].style.color="#000";
        page3_value_Web_p[0].style.color="#000";
        moveElement("three_img",132,25,17);
        moveElement("three_h1",60,80,20);
        moveElement("three_p",60,120,17);
    }




    var page3_value_Ios=document.getElementsByClassName("page3_value_Ios");
    page3_value_Ios_img=page3_value_Ios[0].getElementsByTagName("img");
    page3_value_Ios_h1=page3_value_Ios[0].getElementsByTagName("h1");
    page3_value_Ios_p=page3_value_Ios[0].getElementsByTagName("p");

    page3_value_Ios[0].onmouseover=function(){
        page3_value_Ios[0].style.backgroundColor="#5E2271";
        src=page3_value_Ios_img[0].getAttribute("src");
        var temp=(src.substring(0,src.length-4))+"2.png";
        page3_value_Ios_img[0].setAttribute("src",temp);
        page3_value_Ios_img[0].style.height="70px";
        page3_value_Ios_img[0].style.left="200px";
        page3_value_Ios_img[0].style.top="25px";
        page3_value_Ios_h1[0].style.color="#fff";
        page3_value_Ios_p[0].style.color="#fff";
        page3_value_Ios_h1[0].style.top="60px";
        page3_value_Ios_h1[0].style.left="60px";
        page3_value_Ios_p[0].style.top="80px";
        page3_value_Ios_p[0].style.left="62px";
        moveElement("four_img",127,25,17);
        moveElement("four_h1",60,100,17);
        moveElement("four_p",60,150,20);
    }
    page3_value_Ios[0].onmouseout=function(){
        page3_value_Ios[0].style.backgroundColor="inherit";
        src= page3_value_Ios_img[0].getAttribute("src");
        var temp=(src.substring(0,src.length-5))+".png";
        page3_value_Ios_img[0].setAttribute("src",temp);
        page3_value_Ios_img[0].style.height="60px";
        page3_value_Ios_h1[0].style.color="#000";
        page3_value_Ios_p[0].style.color="#000";
        moveElement("four_img",132,25,17);
        moveElement("four_h1",60,80,20);
        moveElement("four_p",60,120,17);
    }




    var page3_value_Android=document.getElementsByClassName("page3_value_Android");
    page3_value_Android_img=page3_value_Android[0].getElementsByTagName("img");
    page3_value_Android_h1=page3_value_Android[0].getElementsByTagName("h1");
    page3_value_Android_p=page3_value_Android[0].getElementsByTagName("p");

    page3_value_Android[0].onmouseover=function(){
        page3_value_Android[0].style.backgroundColor="#5E2271";
        src=page3_value_Android_img[0].getAttribute("src");
        var temp=(src.substring(0,src.length-4))+"2.png";
        page3_value_Android_img[0].setAttribute("src",temp);
        page3_value_Android_img[0].style.height="70px";
        page3_value_Android_img[0].style.left="200px";
        page3_value_Android_img[0].style.top="25px";
        page3_value_Android_h1[0].style.color="#fff";
        page3_value_Android_p[0].style.color="#fff";
        page3_value_Android_h1[0].style.top="60px";
        page3_value_Android_h1[0].style.left="60px";
        page3_value_Android_p[0].style.top="80px";
        page3_value_Android_p[0].style.left="62px";
        moveElement("five_img",127,25,17);
        moveElement("five_h1",60,100,17);
        moveElement("five_p",60,150,20);
    }
    page3_value_Android[0].onmouseout=function(){
        page3_value_Android[0].style.backgroundColor="inherit";
        src= page3_value_Android_img[0].getAttribute("src");
        var temp=(src.substring(0,src.length-5))+".png";
        page3_value_Android_img[0].setAttribute("src",temp);
        page3_value_Android_img[0].style.height="60px";
        page3_value_Android_h1[0].style.color="#000";
        page3_value_Android_p[0].style.color="#000";
        moveElement("five_img",132,25,17);
        moveElement("five_h1",60,80,20);
        moveElement("five_p",60,120,17);
    }


    var page3_value_window=document.getElementsByClassName("page3_value_window");
    page3_value_window_img=page3_value_window[0].getElementsByTagName("img");
    page3_value_window_h1=page3_value_window[0].getElementsByTagName("h1");
    page3_value_window_p=page3_value_window[0].getElementsByTagName("p");

    page3_value_window[0].onmouseover=function(){
        page3_value_window[0].style.backgroundColor="#5E2271";
        src=page3_value_window_img[0].getAttribute("src");
        var temp=(src.substring(0,src.length-4))+"2.png";
        page3_value_window_img[0].setAttribute("src",temp);
        page3_value_window_img[0].style.height="70px";
        page3_value_window_img[0].style.left="200px";
        page3_value_window_img[0].style.top="25px";
        page3_value_window_h1[0].style.color="#fff";
        page3_value_window_p[0].style.color="#fff";
        page3_value_window_h1[0].style.top="60px";
        page3_value_window_h1[0].style.left="60px";
        page3_value_window_p[0].style.top="80px";
        page3_value_window_p[0].style.left="62px";
        moveElement("six_img",127,25,17);
        moveElement("six_h1",60,100,17);
        moveElement("six_p",60,150,20);
    }
    page3_value_window[0].onmouseout=function(){
        page3_value_window[0].style.backgroundColor="inherit";
        src= page3_value_window_img[0].getAttribute("src");
        var temp=(src.substring(0,src.length-5))+".png";
        page3_value_window_img[0].setAttribute("src",temp);
        page3_value_window_img[0].style.height="60px";
        page3_value_window_h1[0].style.color="#000";
        page3_value_window_p[0].style.color="#000";
        moveElement("six_img",132,25,17);
        moveElement("six_h1",60,80,20);
        moveElement("six_p",60,120,17);
    }
}
addLoadEvent(changeColor);