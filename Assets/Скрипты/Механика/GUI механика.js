//Окно с итогом для механика

var welcomeLabel : GUIStyle;   //http://habrahabr.ru/post/113859/ для настроек
var b_display : boolean = true;// Для бокса
var mySkin : GUISkin; // Переменная для настроек цветов и пр. в редакторе

function Start () {

}

function Update() {
    var object = GameObject.Find("Camera механик");
    var scriptMouse = object.GetComponent("SimpleMouseRotator");
    var PALEC = GameObject.Find("Правый палец"); // Найти палец
    var scriptPALEC = PALEC.GetComponent("ПАЛЕЦ"); //найти скрипт пальца
    scriptMouse.enabled = false; //застопорить мышь
    scriptPALEC.enabled = false;//включить/выключить нажатие пальца

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
        GUI.Label (Rect (20,40,700,200) , "Двигатель и питание запущены успешно.");      
      
        //A - количество пикселей от левого края экрана к левому краю окна.
        //B - количество пикселей от верхнего края экрана к верхнему краю окна.
        //C - ширина окна.
        //D - высота окна.

        //Кнопка "Далее"
        if (GUI.Button (Rect (530,90,180,30), "Далее")) { 
            b_display = false;// Перестает показывать все окна, текст и.т.п.
            Application.LoadLevel ("карта 4 выбор"); 

            var Daleezagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
            var Daleezagruzkascript = Daleezagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
            Daleezagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
        }
        if (GUI.Button (Rect (30,90,180,30), "Повторить")) { 
            b_display = false;// Перестает показывать все окна, текст и.т.п.
            Application.LoadLevel(Application.loadedLevel);

            var Povtoritzagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
            var Povtoritzagruzkascript = Povtoritzagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
            Povtoritzagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
        }
       
    }
}

