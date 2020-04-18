function Update() {

    
    var GUI = GameObject.Find("Terrain");
    var GUIscript = GUI.GetComponent("GUIOPER");

    if (Input.GetKeyDown("escape") && AOZKNOPKI.NIZcamera == true) {
        GUIscript.enabled = !GUIscript.enabled;//включить GUI скрипт
        b_display = false;// Перестает показывать все окна, текст и.т.п.
        var object = GameObject.Find("Camera (3) снизу");
        var scriptMouse = object.GetComponent("SimpleMouseRotator");
        var PALEC = GameObject.Find("нажимающий палец внизу (АОЗ)"); // Найти палец
        var scriptPALEC = PALEC.GetComponent("ПАЛЕЦ АОЗ внизу"); //найти скрипт пальца
        var CENTR = GameObject.Find("Camera (3) снизу");
        var CENTRscript = CENTR.GetComponent("Мыш центр 2");


        scriptMouse.enabled = !scriptMouse.enabled; //застопорить мышь
        //scriptPALEC.enabled = !scriptPALEC.enabled;//включить/выключить нажатие пальца - путаница
        CENTRscript.enabled = !CENTRscript.enabled;
        scriptPALEC.enabled = !scriptPALEC.enabled;
    }

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

    if (Input.GetKey("return")) {
        GUIscript.enabled = false;//включить GUI скрипт
        b_display = false;// Перестает показывать все окна, текст и.т.п.
        var object3 = GameObject.Find("Camera (3) снизу");
        var scriptMouse3 = object3.GetComponent("SimpleMouseRotator");
        var PALEC3 = GameObject.Find("нажимающий палец внизу (АОЗ)"); // Найти палец
        var scriptPALEC3 = PALEC3.GetComponent("ПАЛЕЦ 2"); //найти скрипт пальца
        var CENTR3 = GameObject.Find("Camera (3) снизу");
        var CENTRscript3 = CENTR3.GetComponent("Мыш центр 2");


        scriptMouse3.enabled = false; //застопорить мышь
        //scriptPALEC.enabled = !scriptPALEC.enabled;//включить/выключить нажатие пальца - путаница
        CENTRscript3.enabled = false;
        scriptPALEC3.enabled = false;
    }

    if (Input.GetKey("return") && scriptMouse1.enabled && CENTRscript1.enabled) {
        
    }
}