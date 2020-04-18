function Update() {


    var GUI = GameObject.Find("Camera (3) снизу");
    var GUIscript = GUI.GetComponent("GUIOPERAOZNIZ");



    if (Input.GetKeyDown("escape") && AOZKNOPKI.NIZcamera == true) {
        GUIscript.enabled = !GUIscript.enabled;//включить GUI скрипт
        b_display = false;// Перестает показывать все окна, текст и.т.п.
        var object1 = GameObject.Find("Camera (3) снизу");
        var scriptMouse1 = object1.GetComponent("SimpleMouseRotator");
        var PALEC1 = GameObject.Find("нажимающий палец внизу (АОЗ)"); // Найти палец
        var scriptPALEC1 = PALEC1.GetComponent("ПАЛЕЦ АОЗ внизу"); //найти скрипт пальца
        var CENTR1 = GameObject.Find("Camera (3) снизу");
        var CENTRscript1 = CENTR1.GetComponent("Мыш центр 2");


        scriptMouse1.enabled = !scriptMouse1.enabled; //застопорить мышь
        //scriptPALEC.enabled = !scriptPALEC.enabled;//включить/выключить нажатие пальца - путаница
        CENTRscript1.enabled = !CENTRscript1.enabled;
        scriptPALEC1.enabled = !scriptPALEC1.enabled;
    }

    if (Input.GetKey("return") || AOZKNOPKI.VERXcamera == true) { //  или что то
        GUIscript.enabled = false;//выключить GUI скрипт
        b_display = false;// Перестает показывать все окна, текст и.т.п.
        var object2 = GameObject.Find("Camera (3) снизу");
        var scriptMouse2 = object2.GetComponent("SimpleMouseRotator");
        var PALEC2 = GameObject.Find("нажимающий палец внизу (АОЗ)"); // Найти палец
        var scriptPALEC2 = PALEC2.GetComponent("ПАЛЕЦ АОЗ внизу"); //найти скрипт пальца
        var CENTR2 = GameObject.Find("Camera (3) снизу");
        var CENTRscript2 = CENTR2.GetComponent("Мыш центр 2");


        scriptMouse2.enabled = true; //застопорить мышь
        //scriptPALEC.enabled = !scriptPALEC.enabled;//включить/выключить нажатие пальца - путаница
        CENTRscript2.enabled = true;
        scriptPALEC2.enabled = true;
    }

}