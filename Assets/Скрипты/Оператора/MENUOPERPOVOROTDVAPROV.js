﻿
function Update() {
    var object = GameObject.Find("Camera (3)");
    var scriptMouse = object.GetComponent("SimpleMouseRotator");
    var GUI = GameObject.Find("Terrain");
    var GUIscript = GUI.GetComponent("GUIOPERPROV");
    var PALEC = GameObject.Find("Bip001 L Finger12 (2)"); // Найти палец
    var scriptPALEC = PALEC.GetComponent("ПАЛЕЦ 2"); //найти скрипт пальца
    var CENTR = GameObject.Find("Camera (3)");
    var CENTRscript = CENTR.GetComponent("Мыш центр 2");


    if (Input.GetKeyDown("escape")) {
        scriptMouse.enabled = !scriptMouse.enabled; //застопорить мышь
        GUIscript.enabled = !GUIscript.enabled;//включить GUI скрипт
        scriptPALEC.enabled = !scriptPALEC.enabled;//включить/выключить нажатие пальца
        CENTRscript.enabled = !CENTRscript.enabled;
    }

}