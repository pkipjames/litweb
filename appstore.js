var appArray=[
{name:"iOS Emulator",icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuyb2tRjS8m3zgWIoxjsEjOB6jXXkrBBDtVlrN0BgvDAOgThcL:https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/IOS_logo.svg/300px-IOS_logo.svg.png",url:"https://appetize.io/embed/standalone_05tnrmc2uh5vzuhq911b2z1qrg?device=ipadair2&scale=75&orientation=landscape&osVersion=12.1&deviceColor=black",
description:"iOS Emulator Application"},
{name:"Android Emulator",icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahGOtHJtxGGD1nXogE03vOaxArAP7PpuSog6IhHwLdfBEytZuBQ:https://cnet4.cbsistatic.com/img/QJcTT2ab-sYWwOGrxJc0MXSt3UI%3D/2011/10/27/a66dfbb7-fdc7-11e2-8c7c-d4ae52e62bcc/android-wallpaper5_2560x1600_1.jpg",
url:"https://appetize.io/embed/standalone_05tnrmc2uh5vzuhq911b2z1qrg?device=nexus9&scale=75&orientation=landscape&osVersion=9.0&deviceColor=black",
description:"Android Emulator Application"},
  {name:"Photobarcelona",url:"http://elizabethcastro.com/html6ed/examples/styles-handheld/handheld-adjust.html",
   description:"Photos Of Barcelona"}


];

function runAppStore(){try{
var container=document.querySelector("#appStoreIcons");


appArray.forEach(function (item){
  var icon=item.icon||"placeholderapp.png";
container.appendChild(elt("div",null,
elt("img",{height:100,alt:"icon",src:icon}),
                          elt("p",null,item.name),
elt("p",null,item.description,elt("button",{onclick:function (){installApp(item.name,item.url,item.icon);}},"Install Application"))));

                      });}catch(err){alert(err);}

}
