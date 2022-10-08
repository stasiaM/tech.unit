
var links = document.getElementsByClassName('btnserv-1');

for(let i=0; i<links.length;i++){
    links[i].on ("mouseover,")=function(){
        var images=document.getElementsByClassName('images');
        var too=images[i];
        too.style.opacity="1";
        too.style.visibility="visible"
    }

    links[i].onmouseout=function(){
        var images=document.getElementsByClassName('images');
        var too=images[i];
        too.style.opacity="1";
        too.style.visibility="hidden"
    }
}
