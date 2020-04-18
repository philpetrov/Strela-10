    
    function Update() {


        if (Input.GetKeyDown("escape"))
        { 
            (GameObject.Find("Terrain").GetComponent("GUIOPER") as MonoBehaviour).enabled = !(GameObject.Find("Terrain").GetComponent("GUIOPER") as MonoBehaviour).enabled;

        }

    
}