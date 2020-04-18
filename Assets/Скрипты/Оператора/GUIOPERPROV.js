var style : GUIStyle;
var mySkin : GUISkin; // Переменная для настроек цветов и пр. в редакторе

function Update () {
    Cursor.lockState = CursorLockMode.None; //освободить курсор
}
function OnGUI() {
    // Связать скин, для использования
    GUI.skin = mySkin; 
    GUI.Box(Rect (Screen.width/2-150,Screen.height/2-140,300,280), "МЕНЮ");
    if (GUI.Button (Rect (Screen.width/2-90,Screen.height/2+75,180,30), "ВЫХОД")) { 
        Application.Quit();
    }
    if (GUI.Button (Rect (Screen.width/2-90,Screen.height/2+25,180,30), "Повторить")) { 
        Application.LoadLevel ("кабина оператора редактировать 23"); 
    }
    if (GUI.Button (Rect (Screen.width/2-90,Screen.height/2-25,180,30), "В главное меню")) { 
        Application.LoadLevel ("карта 3 выбор"); 
    }
    if (GUI.Button (Rect (Screen.width/2-90,Screen.height/2-75,180,30), "Выбор проверки")) { 
        Application.LoadLevel ("выбор проверки оператора"); 
    }
}


//A - количество пикселей от левого края экрана к левому краю окна.
//B - количество пикселей от верхнего края экрана к верхнему краю окна.
//C - ширина окна.
//D - высота окна.
//    GUI.Label (Rect (Screen.width/2 - 100,Screen.height/2 - 80,200,140), "Здесь должна быть помощь ", style);