﻿#pragma strict

function Update() {


    if (Input.GetKeyDown("escape"))
    {

        (GameObject.Find("Camera ПЕРЕВОД").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = !(GameObject.Find("Camera ПЕРЕВОД").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled;
        (GameObject.Find("Terrain").GetComponent("GUIOPER") as MonoBehaviour).enabled = !(GameObject.Find("Terrain").GetComponent("GUIOPER") as MonoBehaviour).enabled;
        (GameObject.Find("Bip001 R Finger12").GetComponent("ПАЛЕЦ") as MonoBehaviour).enabled = !(GameObject.Find("Bip001 R Finger12").GetComponent("ПАЛЕЦ") as MonoBehaviour).enabled;
        (GameObject.Find("Camera ПЕРЕВОД").GetComponent("Мыш центр 2") as MonoBehaviour).enabled = !(GameObject.Find("Camera ПЕРЕВОД").GetComponent("Мыш центр 2") as MonoBehaviour).enabled;
    }

}

