var palec : GameObject;

function Start () {
    
}

function Update () {
    if (Input.GetKey (KeyCode.Mouse0)) {
        palec = GameObject.Find("нажимающий палец внизу (АОЗ)"); // Прикрепить
        palec.GetComponent.<Animation>().Play("ПАЛЕЦ 2"); //
    }
}