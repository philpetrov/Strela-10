//Окно с текстом "Загрузка..." после нажатия для загрузки сцены

var welcomeLabel : GUIStyle;   //http://habrahabr.ru/post/113859/ для настроек
var b_display : boolean = true;// Для бокса
var mySkin : GUISkin; // Переменная для настроек цветов и пр. в редакторе


//Функиция окна
function OnGUI() {
    if (b_display)//Показывает все
    {
        // Связать скин, для использования
        GUI.skin = mySkin;
        //Задний фон кнопок
        GUI.backgroundColor = Color.white;
        // Окно с текстом
        GUI.Box(Rect (Screen.width/2-90,Screen.height/2-25,180,50), "");
        
        //Просто текст, без окна
        GUI.Label(Rect(Screen.width/2-35,Screen.height/2-12, 700, 200), "Загрузка...");

        //A - количество пикселей от левого края экрана к левому краю окна.
        //B - количество пикселей от верхнего края экрана к верхнему краю окна.
        //C - ширина окна.
        //D - высота окна.

        //Кнопка "Далее"

    }
}