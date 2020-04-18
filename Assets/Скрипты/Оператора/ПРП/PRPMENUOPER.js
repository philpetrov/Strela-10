function Update() {


    if (Input.GetKeyDown("escape"))
    {

        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = !(GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled;
        (GameObject.Find("Terrain").GetComponent("GUIOPER") as MonoBehaviour).enabled = !(GameObject.Find("Terrain").GetComponent("GUIOPER") as MonoBehaviour).enabled;
        (GameObject.Find("Bip001 L Finger12 (2)").GetComponent("ПАЛЕЦ 2") as MonoBehaviour).enabled = !(GameObject.Find("Bip001 L Finger12 (2)").GetComponent("ПАЛЕЦ 2") as MonoBehaviour).enabled;
        (GameObject.Find("Camera (3)").GetComponent("Мыш центр 2") as MonoBehaviour).enabled = !(GameObject.Find("Camera (3)").GetComponent("Мыш центр 2") as MonoBehaviour).enabled;
    }




}