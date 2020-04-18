public var gunPrefab : Transform;
 var gun : Transform;
 
 
 
 
function Start () {
    gun = Instantiate(gunPrefab,transform.position,transform.rotation);
    gun.parent = transform;
 
}
 
 
 
function Update () {
 
    var temp : Vector3;
    temp.x = Input.GetAxis("Mouse Y") * (-1) ;
    temp.y = Input.GetAxis("Mouse X") ;
    temp.z = transform.rotation.z;
 
 
 
   
 
    if((temp.x > 0 && gun.localRotation.x > 0.1) || (temp.x < 0 && gun.localRotation.x < (-0.1)))
    {
        temp.x = 0;
    }
    if((temp.y > 0 && gun.localRotation.y  > 0.15) || (temp.y < 0 && gun.localRotation.y < (-0.15)))
    {
        temp.y = 0;
    }
}