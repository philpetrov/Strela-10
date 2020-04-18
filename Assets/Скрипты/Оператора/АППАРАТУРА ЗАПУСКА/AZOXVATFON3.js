var target : Transform; //define the target to follow/look at
var distance = 0; //the distance between the camera and target
var height = 0.0; //the height between the camera and target
var thisTransform : Transform; //КОЛЬЦО


function Update()
{
    transform.position = Vector3.Lerp(transform.position, target.TransformPoint(0, height, -distance), Time.deltaTime/100); //tween (lerp) between two points with time and damping
    //Ограничения
    thisTransform.localPosition.z = Mathf.Clamp (thisTransform.localPosition.z, -0.03, 0.03);
    thisTransform.localPosition.y = Mathf.Clamp (thisTransform.localPosition.y, -0.01185167, -0.01185172);
    thisTransform.localPosition.x = Mathf.Clamp (thisTransform.localPosition.x, -0.025, 0.025);

}