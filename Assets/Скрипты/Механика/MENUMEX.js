
function Update() {
    var object = GameObject.Find("Camera механик");
    var scriptMouse = object.GetComponent("SimpleMouseRotator");
    var GUI = GameObject.Find("Terrain");
    var GUIscript = GUI.GetComponent("GUIMEX");
    var PALEC = GameObject.Find("Правый палец"); // Найти палец
    var scriptPALEC = PALEC.GetComponent("ПАЛЕЦ"); //найти скрипт пальца
    var CENTR = GameObject.Find("SOLDAT");
    var CENTRscript = CENTR.GetComponent("Мыш центр 2");

    if (Input.GetKeyDown("escape")) {
        scriptMouse.enabled = !scriptMouse.enabled; //застопорить мышь
        GUIscript.enabled = !GUIscript.enabled;//включить GUI скрипт
        scriptPALEC.enabled = !scriptPALEC.enabled;//включить/выключить нажатие пальца
        CENTRscript.enabled = !CENTRscript.enabled;
    }

}