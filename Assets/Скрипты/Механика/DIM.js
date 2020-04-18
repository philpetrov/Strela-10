//ДЫМ ДВИЖЕНИЕ

function Start () {

}

function Update () {
    transform.Translate(Vector3.right * Time.deltaTime, Space.World);
}