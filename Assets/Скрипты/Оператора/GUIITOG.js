var welcomeLabel : GUIStyle;   //http://habrahabr.ru/post/113859/ для настроек
var b_display : boolean = true;// Для бокса
var mySkin : GUISkin; // Переменная для настроек цветов и пр. в редакторе

function Start () {

}

function Update() {
    var object = GameObject.Find("Camera (3)");
    var scriptMouse = object.GetComponent("SimpleMouseRotator");
    var GUI = GameObject.Find("Terrain");
    var GUIscript = GUI.GetComponent("GUIOPER");
    var PALEC = GameObject.Find("Bip001 L Finger12 (2)"); // Найти палец
    var scriptPALEC = PALEC.GetComponent("ПАЛЕЦ 2"); //найти скрипт пальца
    var CENTR = GameObject.Find("Camera (3)");
    var CENTRscript = CENTR.GetComponent("Мыш центр 2");

    scriptMouse.enabled = false; //застопорить мышь
    GUIscript.enabled = true; //включить GUI скрипт
    scriptPALEC.enabled = false;//включить/выключить нажатие пальца
    CENTRscript.enabled = false;

}

//Функиция окна
function OnGUI ( ) {
    if (b_display)//Показывает все
    {
        // Связать скин, для использования
        GUI.skin = mySkin; 
        //Задний фон кнопок
        GUI.backgroundColor = Color.white;
        // Окно с текстом
        GUI.Box (Rect (5,5,740,120), ""); 
        //Просто текст, без окна
        GUI.Label (Rect (20,40,700,200) , "Проверка проведена успешно.");      
        
        //A - количество пикселей от левого края экрана к левому краю окна.
        //B - количество пикселей от верхнего края экрана к верхнему краю окна.
        //C - ширина окна.
        //D - высота окна.

        //Кнопка "Далее"
       
    }
}