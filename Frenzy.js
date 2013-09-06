function addFrenzyClick() {
    var FrenzyClick = document.createElement('div');
    FrenzyClick.id = 'FrenzyClick';
    FrenzyClick.innerHTML = '<p>Frenzy Time!</p>';
	FrenzyClick.onclick = function(){Game.frenzy=Game.fps*6;
Game.frenzyPower=666;
Game.recalculateGains=1;};
	document.body.appendChild(FrenzyClick);
	}
function styling(){
var FrenzyClickstyle = document.styleSheets[0];
FrenzyClickstyle.addRule('#FrenzyClick','width:300px;height:44px;background-color:rgba(255,255,255,1);z-index:1000;position:fixed;top:31px;right:18px;box-shadow:inset 0 0 5px #000;margin:0px;padding:0px;');
FrenzyClickstyle.addRule('#FrenzyClick:hover', 'cursor:pointer; font-size: 24px;');
FrenzyClickstyle.addRule('#FrenzyClick p', 'margin:0px;padding:0px;line-height:44px;color:#000;text-align:center;font-size: 20px;');
//FrenzyClickstyle.addRule('#FrenzyClick', 'background-image: -ms-linear-gradient(bottom, #BA2323 30%, #E03E3E 65%);background-image: -moz-linear-gradient(bottom, #BA2323 30%, #E03E3E 65%);background-image: -o-linear-gradient(bottom, #BA2323 30%, #E03E3E 65%);background-image: linear-gradient(bottom, #BA2323 30%, #E03E3E 65%);background-image: -webkit-linear-gradient(bottom, #BA2323 30%, #E03E3E 65%);');
 
}

Startup = setInterval(function() {
addFrenzyClick();
styling();
clearInterval(Startup);
}, 10);

