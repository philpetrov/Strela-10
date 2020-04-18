#pragma strict

function Start () {
    
}
function Update () {
    if(Input.GetKey (KeyCode.Mouse0)) {
        GetComponent.<Animation>().Play("ПАЛЕЦ"); // старт анимации
    }
}
