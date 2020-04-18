public 
var welcomeLabel : GUIStyle;   //http://habrahabr.ru/post/113859/ для настроек
var b_display : boolean = true;// Для бокса
var mySkin : GUISkin; // Переменная для настроек цветов и пр. в редакторе



//Функиция окна
function OnGUI ( ) {
    if (b_display)//Показывает все
    {
        // Связать скин, для использования
        GUI.skin = mySkin; 
        //Задний фон кнопок
        GUI.backgroundColor = Color.white;
        // Окно с текстом
        GUI.Box (Rect (5,5,740,150), "Согласно Строевому уставу:"); 
        //Просто текст, без окна
        GUI.Label (Rect (20,40,700,200) , "Для заводки моторов подаётся команда (сигнал): 'ЗАВОДИ'.");      
        GUI.Label (Rect (390,115,700,200) , "Расчет на местах: "); 
        //A - количество пикселей от левого края экрана к левому краю окна.
        //B - количество пикселей от верхнего края экрана к верхнему краю окна.
        //C - ширина окна.
        //D - высота окна.

        //Кнопка "ЗАВОДИ"
        if (GUI.Button (Rect (530,110,180,30), "ЗАВОДИ")) { 
            Application.LoadLevel ("Запуск двигателя (обучающий)"); 
            b_display = false;// Перестает показывать все окна, текст и.т.п.

            var ZAVODIzagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
            var ZAVODIzagruzkascript = ZAVODIzagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
            ZAVODIzagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
        }
        //Кнопка "ПРОПУСТИТЬ"
        if (GUI.Button (Rect (30,110,180,30), "ПРОПУСТИТЬ")) { 
            b_display = false;// Перестает показывать все окна, текст и.т.п.
            Application.LoadLevel ("Главное меню"); 

            var PROPUSTITzagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
            var PROPUSTITzagruzkascript = PROPUSTITzagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
            PROPUSTITzagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
        }
       
    }
}
