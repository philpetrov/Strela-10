var palec : GameObject;

function Start () {
    
}

function Update () {
    if (Input.GetKey (KeyCode.Mouse0)) {
        palec = GameObject.Find("Bip001 L Finger12 (2)"); // Прикрепить
        palec.GetComponent.<Animation>().Play("ПАЛЕЦ 2"); //
    }
}