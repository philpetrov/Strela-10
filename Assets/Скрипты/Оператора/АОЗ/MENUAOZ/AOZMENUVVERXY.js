function Update() {

    
    var GUI = GameObject.Find("Camera (3)");
    var GUIscript = GUI.GetComponent("GUIOPERAOZVERX");

   

    if (Input.GetKeyDown("escape") && AOZKNOPKI.VERXcamera == true) {
        GUIscript.enabled = !GUIscript.enabled;//включить GUI скрипт
        b_display = false;// Перестает показывать все окна, текст и.т.п.
        var object1 = GameObject.Find("Camera (3)");
        var scriptMouse1 = object1.GetComponent("SimpleMouseRotator");
        var PALEC1 = GameObject.Find("Bip001 L Finger12 (2)"); // Найти палец
        var scriptPALEC1 = PALEC1.GetComponent("ПАЛЕЦ 2"); //найти скрипт пальца
        var CENTR1 = GameObject.Find("Camera (3)");
        var CENTRscript1 = CENTR1.GetComponent("Мыш центр 2");


        scriptMouse1.enabled = !scriptMouse1.enabled; //застопорить мышь
        //scriptPALEC.enabled = !scriptPALEC.enabled;//включить/выключить нажатие пальца - путаница
        CENTRscript1.enabled = !CENTRscript1.enabled;
        scriptPALEC1.enabled = !scriptPALEC1.enabled;
    }

    if (Input.GetKey("return") || AOZKNOPKI.NIZcamera == true) { //  или что то
        GUIscript.enabled = false;//выключить GUI скрипт
        b_display = false;// Перестает показывать все окна, текст и.т.п.
        var object2 = GameObject.Find("Camera (3)");
        var scriptMouse2 = object2.GetComponent("SimpleMouseRotator");
        var PALEC2 = GameObject.Find("Bip001 L Finger12 (2)"); // Найти палец
        var scriptPALEC2 = PALEC2.GetComponent("ПАЛЕЦ 2"); //найти скрипт пальца
        var CENTR2 = GameObject.Find("Camera (3)");
        var CENTRscript2 = CENTR2.GetComponent("Мыш центр 2");


        scriptMouse2.enabled = true; //растопорить мышь
        //scriptPALEC.enabled = !scriptPALEC.enabled;//включить/выключить нажатие пальца - путаница
        CENTRscript2.enabled = true; // мышь в центр
        scriptPALEC2.enabled = true;
    }

}