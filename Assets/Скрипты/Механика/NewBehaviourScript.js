#pragma strict
 // Cкрипт следования объекта за мышкой
public var cursorObject : Transform;
public var distance : float = 1.5;
 
//function Start() 
//{
 //   Screen.showCursor = false;  
//}
 
function Update() 
{
    ObjectFollowCursor();
}
 
function ObjectFollowCursor() 
{
    var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
    var point : Vector3 = ray.origin + (ray.direction * distance);
    //Debug.Log( "World point " + point );
     
    cursorObject.position = point;
}