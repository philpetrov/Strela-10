// Кнопка ВЫХОД у расчета

var style : GUIStyle;
var mySkin : GUISkin; // Переменная для настроек цветов и пр. в редакторе

function Update () {
    Cursor.lockState = CursorLockMode.None; //освободить курсор
}
function OnGUI() {
    // Связать скин, для использования
    GUI.skin = mySkin; 
    GUI.Box (Rect (1000,5,220,50), ""); 
    if (GUI.Button (Rect (1020,15,180,30), "ВЫХОД")) { 
        Application.Quit();
    }

}