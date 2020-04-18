#pragma strict

function Update() {

   if (Input.GetKeyDown("escape")) {

        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = !(GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled;
        (GameObject.Find("Terrain").GetComponent("GUIKOMANDIR") as MonoBehaviour).enabled = !(GameObject.Find("Terrain").GetComponent("GUIKOMANDIR") as MonoBehaviour).enabled;
        (GameObject.Find("Правый палец").GetComponent("ПАЛЕЦ") as MonoBehaviour).enabled = !(GameObject.Find("Правый палец").GetComponent("ПАЛЕЦ") as MonoBehaviour).enabled;
        (GameObject.Find("Camera").GetComponent("Мыш центр 2") as MonoBehaviour).enabled = !(GameObject.Find("Camera").GetComponent("Мыш центр 2") as MonoBehaviour).enabled;
    }
}