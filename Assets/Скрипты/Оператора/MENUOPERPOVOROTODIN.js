 #pragma strict

function Update() {



    if (Input.GetKeyDown("escape")) {
        

        (GameObject.Find("Camera (2)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = !(GameObject.Find("Camera (2)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled;
        (GameObject.Find("Terrain").GetComponent("GUIOPER") as MonoBehaviour).enabled = !(GameObject.Find("Terrain").GetComponent("GUIOPER") as MonoBehaviour).enabled;
        (GameObject.Find("Bip001 R Finger12 (2)").GetComponent("ПАЛЕЦ") as MonoBehaviour).enabled = !(GameObject.Find("Bip001 R Finger12 (2)").GetComponent("ПАЛЕЦ") as MonoBehaviour).enabled;
        (GameObject.Find("Camera (2)").GetComponent("Мыш центр 2") as MonoBehaviour).enabled = !(GameObject.Find("Camera (2)").GetComponent("Мыш центр 2") as MonoBehaviour).enabled;
    }

}