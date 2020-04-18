 #pragma strict

  function Update() {


      if (Input.GetKeyDown("escape"))
      {

          (GameObject.Find("Camera (3) снизу").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = !(GameObject.Find("Camera (3) снизу").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled;
          (GameObject.Find("Terrain").GetComponent("GUIOPER") as MonoBehaviour).enabled = !(GameObject.Find("Terrain").GetComponent("GUIOPER") as MonoBehaviour).enabled;
          (GameObject.Find("нажимающий палец внизу (АОЗ)").GetComponent("ПАЛЕЦ АОЗ внизу") as MonoBehaviour).enabled = !(GameObject.Find("нажимающий палец внизу (АОЗ)").GetComponent("ПАЛЕЦ АОЗ внизу") as MonoBehaviour).enabled;
          (GameObject.Find("Camera (3) снизу").GetComponent("Мыш центр 2") as MonoBehaviour).enabled = !(GameObject.Find("Camera (3) снизу").GetComponent("Мыш центр 2") as MonoBehaviour).enabled;
      }

    
  }