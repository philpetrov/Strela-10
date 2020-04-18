#pragma strict

var goTarget : GameObject;
var maxDegreesPerSecond : float = 30.0;
private var qTo : Quaternion;
 
function Start () {
    qTo = goTarget.transform.localRotation;
}
 
function Update () {
    var v3T = goTarget.transform.position - transform.position;
    v3T.y = transform.position.y;
    qTo = Quaternion.LookRotation(v3T, Vector3.up);        
    transform.rotation = Quaternion.RotateTowards(transform.rotation, qTo, maxDegreesPerSecond * Time.deltaTime);
}