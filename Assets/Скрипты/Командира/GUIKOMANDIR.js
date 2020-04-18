var style : GUIStyle;
var mySkin : GUISkin; // Переменная для настроек цветов и пр. в редакторе

function Update () {
    Cursor.lockState = CursorLockMode.None; //освободить курсор
}
function OnGUI() {
    // Связать скин, для использования
    GUI.skin = mySkin; 
    GUI.Box(Rect (Screen.width/2-960,Screen.height/2-540,1920,1080), "МЕНЮ");
    if (GUI.Button (Rect (Screen.width/2-90,Screen.height/2+75,180,30), "ВЫХОД")) { 
        Application.Quit();
    }

    if (GUI.Button (Rect (Screen.width/2-90,Screen.height/2-75,180,30), "ГЛАВНОЕ МЕНЮ")) { 
        Application.LoadLevel ("карта 4 выбор"); 
    }
    if (GUI.Button (Rect (Screen.width/2-90,Screen.height/2+25,180,30), "ПОВТОРИТЬ")) { 
        Application.LoadLevel(Application.loadedLevel); 
    }
    if (GUI.Button (Rect (Screen.width/2-90,Screen.height/2-25,180,30), "ВЫБОР ПРОВЕРКИ")) { 
        Application.LoadLevel ("Выбор проверки командира"); 
    }
}


//A - количество пикселей от левого края экрана к левому краю окна.
//B - количество пикселей от верхнего края экрана к верхнему краю окна.
//C - ширина окна.
//D - высота окна.
//    GUI.Label (Rect (Screen.width/2 - 100,Screen.height/2 - 80,200,140), "Здесь должна быть помощь ", style);