var clicking = false;
var golden = false;
function AutoClick() {
	clicking = !clicking;
	if(clicking == true){
		Autoclicker = setInterval(function(){
			Game.ClickCookie();
		},1);
		Game.Notify('Cheat','AutoClicker enabled',[3,5],6);
	}else{
		clearInterval(Autoclicker);
		Game.Notify('Cheat','AutoClicker disabled',[3,5],6);
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
		Game.Notify('Gold!' ,'AutoGolden enabled',[3,5],6);
		}else{
			clearInterval(GoldenClicker);
			Game.Notify('Lead!' ,'AutoGolden disabled',[3,5],6);
		}
}
function superfrenzy(){
	Game.frenzy=Game.fps*120;
	Game.frenzyPower=1000000;
	Game.recalculateGains=1;
	Game.Notify('.....','Those darn Cheaters',[3,5],6);
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
    MenuButton.innerHTML = 'Cheats';
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
	
	var SuperFrenzy = document.createElement('div');
	SuperFrenzy.id = 'Superfrenzy';
	SuperFrenzy.onclick = function(){superfrenzy();};
	document.getElementById('game').appendChild(SuperFrenzy);
}
function addCookieMonster(){
	var CookieMonster = document.createElement('img');
	CookieMonster.id = 'Cookiemonster';
	document.body.appendChild(CookieMonster);
	document.getElementById('Cookiemonster').src = 'http://i.imgur.com/mapEKNh.png';
}
function styling(){
var FrenzyClickstyle = document.styleSheets[0];
FrenzyClickstyle.addRule('#FrenzyClick','width:300px;height:44px;background-color:white;z-index:1000;position:fixed;top:31px;right:18px;box-shadow:inset 0 0 5px #000;margin:0px;padding:0px;');
FrenzyClickstyle.addRule('#FrenzyClick:hover', 'cursor:pointer; font-size: 24px;');
FrenzyClickstyle.addRule('#FrenzyClick p', 'margin:0px;padding:0px;line-height:44px;color:#000;text-align:center;font-size: 20px;');
FrenzyClickstyle.addRule('#MenuButton','padding:14px 16px 10px 0px;top:0px;right:-16px;z-index:3000;');
FrenzyClickstyle.addRule('#Menu','height:96px;position:absolute;width:100%;top:0px;background-color:white;z-index:2000;box-shadow:inset 0 0 5px #000;overflow-x:hidden;');
FrenzyClickstyle.addRule('#AutoClick','height:86px;width:30%;margin-left:1%;margin-top:5px;');
FrenzyClickstyle.addRule('#AutoGolden','height:86px;width:30%;margin-left:1%;margin-top:5px;');
FrenzyClickstyle.addRule('#Superfrenzy','z-index:100000000000000;position:absolute;left:0px;bottom:0px;width:74px;height:22px;margin:8px;');
FrenzyClickstyle.addRule('#Superfrenzy:hover','cursor:text');
FrenzyClickstyle.addRule('#Cookiemonster','z-index:200000000000000;position:absolute;overflow-x:hidden;overflow-y:hidden;width:100%;height:100%;display:none;');
}



Startup = setInterval(function() {
	addFrenzyClick();
	addCookieMonster();
	styling();
	clearInterval(Startup);
}, 1);

checkCookies = setInterval(function(){
	if(Game.cookies%1000000000000000 == 0 && Game.cookies >= 1000000000000000){
		document.getElementById('Cookiemonster').style.display = 'block';
		setTimeout("document.getElementById('Cookiemonster').style.display = 'none'",2000);
		
	}	
}, 1);
