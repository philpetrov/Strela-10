#pragma strict

var goTarget : GameObject;
var maxDegreesPerSecond : float = 30.0;
private var qTo : Quaternion;
 
function Start () {
    qTo = goTarget.transform.localRotation;
}
 
function Update () {
    var v3T = goTarget.transform.position - transform.position;
    var v3Aim : Vector3;
    v3Aim.x = 0.0;
    v3Aim.y = v3T.y;
    v3T.y = 0.0;
    v3Aim.z = v3T.magnitude;
    qTo = Quaternion.LookRotation(v3Aim, Vector3.up);
    transform.localRotation = Quaternion.RotateTowards(transform.localRotation, qTo, maxDegreesPerSecond * Time.deltaTime);
}