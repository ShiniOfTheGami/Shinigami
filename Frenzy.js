var clicking = false;
var golden = false;
function AutoClick() {
	clicking = !clicking;
	if(clicking == true){
		Autoclicker = setInterval(function(){
			Game.ClickCookie();
		},1);
		Game.Popup('AutoClicker enabled');
	}else{
		clearInterval(Autoclicker);
		Game.Popup('AutoClicker disabled');
	}

}
function AutoGolden(){
	golden = !golden; 
	if(golden == true){
		GoldenClicker = setInterval(function() {
			if (Game.goldenCookie.life > 0){ 
				Game.goldenCookie.click();
			};
		}, 100);
		Game.Popup('AutoGolden enabled');
		}else{
			clearInterval(GoldenClicker);
			Game.Popup('AutoGolden disabled');
		}
}
function addFrenzyClick() {
    var FrenzyClick = document.createElement('div');
    FrenzyClick.id = 'FrenzyClick';
    FrenzyClick.innerHTML = '<p>Frenzy Time!</p>';
	FrenzyClick.onclick = function(){
	Game.frenzy=Game.fps*66;
	Game.frenzyPower=666;
	Game.recalculateGains=1;
	};
	document.body.appendChild(FrenzyClick);
	var MenuButton = document.createElement('div');
    MenuButton.id = 'MenuButton';
    MenuButton.innerHTML = '<p>Cheats</p>';
	MenuButton.onclick = function(){
		if(document.getElementById('Menu').style.display == 'block'){
			document.getElementById('Menu').style.display = 'none';
		}else{
			document.getElementById('Menu').style.display = 'block';
		};
	}	
	document.getElementById('comments').appendChild(MenuButton);
	document.getElementById("MenuButton").className = "button";
	var Menu = document.createElement('div');
	Menu.id = 'Menu';
	Menu.style.cssText = 'display:none';
	Menu.innerHTML = '<button id="AutoClick" type="button" onclick="AutoClick();">AutoClick</button><button id="AutoGolden" type="button" onclick="AutoGolden();">AutoGolden</button>';
	document.getElementById('sectionMiddle').appendChild(Menu);
}
function styling(){
var FrenzyClickstyle = document.styleSheets[0];
FrenzyClickstyle.addRule('#FrenzyClick','width:300px;height:44px;background-color:white;z-index:1000;position:fixed;top:31px;right:18px;box-shadow:inset 0 0 5px #000;margin:0px;padding:0px;');
FrenzyClickstyle.addRule('#FrenzyClick:hover', 'cursor:pointer; font-size: 24px;');
FrenzyClickstyle.addRule('#FrenzyClick p', 'margin:0px;padding:0px;line-height:44px;color:#000;text-align:center;font-size: 20px;');
FrenzyClickstyle.addRule('#MenuButton','padding:14px 16px 10px 0px;top:0px;right:-16px;z-index:3000;');
//FrenzyClickstyle.addRule('#MenuButton p','margin:0px;padding:0px;line-height:32px;color:#000;text-align:center;font-size: 20px;box-shadow:inset 0 0 5px #000;');
FrenzyClickstyle.addRule('#Menu','height:96px;position:absolute;width:100%;top:0px;background-color:white;z-index:2000;box-shadow:inset 0 0 5px #000;overflow-x:hidden;');
FrenzyClickstyle.addRule('#AutoClick','height:86px;width:30%;margin-left:1%;margin-top:5px;');
FrenzyClickstyle.addRule('#AutoGolden','height:86px;width:30%;margin-left:1%;margin-top:5px;');
}

Startup = setInterval(function() {
addFrenzyClick();
styling();
clearInterval(Startup);
}, 10);
