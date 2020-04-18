var welcomeLabel : GUIStyle;   //http://habrahabr.ru/post/113859/ для настроек
var b_display : boolean = true;// Для бокса
var mySkin : GUISkin; // Переменная для настроек цветов и пр. в редакторе
static var POVOROTactive = false;

function Start() {
    POVOROTactive = true;

}
function OnGUI() {
    if (b_display)//Показывает все
    {
        // Связать скин, для использования
        GUI.skin = mySkin;
        //Задний фон кнопок
        GUI.backgroundColor = Color.white;
        // Окно с текстом
        GUI.Box(Rect(5, 5, 740, 120), "");
        //Просто текст, без окна
        GUI.Label(Rect(20, 40, 700, 200), "Машина находится в боевом положении.");

        //A - количество пикселей от левого края экрана к левому краю окна.
        //B - количество пикселей от верхнего края экрана к верхнему краю окна.
        //C - ширина окна.
        //D - высота окна.

        //Кнопка "ПРОДОЛЖИТЬ"
        if (GUI.Button (Rect (530,80,180,30), "ПРОДОЛЖИТЬ")) { 
            b_display = false;// Перестает показывать все окна, текст и.т.п.
            var object = GameObject.Find("Camera (2)");
            var scriptMouse = object.GetComponent("SimpleMouseRotator");
            var PALEC = GameObject.Find("Bip001 R Finger12 (2)"); // Найти палец
            var scriptPALEC = PALEC.GetComponent("ПАЛЕЦ"); //найти скрипт пальца
            var CENTR = GameObject.Find("Camera (2)");
            var CENTRscript = CENTR.GetComponent("Мыш центр 2");
            var POVOROT = GameObject.Find("ПОВОРОТ");
            var POVOROTscript = POVOROT.GetComponent("POVOROT");
            var VRASHENIEstrelki = GameObject.Find("Стрелка local"); // Найти стрелку азимута
            var VRASHENIEstrelkiSCRIPT = VRASHENIEstrelki.GetComponent("Вращение стрелки азимута"); //Скрипт стрелки
            var VRASHENIEpushki = GameObject.Find("ракеты 2");
            var VRASHENIEpushkiSCRIPT = VRASHENIEpushki.GetComponent("PUSHKA"); //Скрипт пушки

            scriptMouse.enabled = true; //застопорить мышь
            scriptPALEC.enabled = true;//включить нажатие пальца
            CENTRscript.enabled = true;
            POVOROTscript.enabled = true;
            VRASHENIEstrelkiSCRIPT.enabled = true;//Включить вращение стрелки на момент подсказки.
            VRASHENIEpushkiSCRIPT.enabled = true;
        }


    }
}