#pragma strict


function Update () {
    transform.Rotate(Vector3.left * Time.deltaTime*10, Space.World); // поворот по оси
}