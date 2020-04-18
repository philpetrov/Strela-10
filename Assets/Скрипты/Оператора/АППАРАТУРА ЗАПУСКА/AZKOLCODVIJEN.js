#pragma strict
public var moveSpeed : float;
public var newPos : Vector3;
public var minimumX : float;
public var maximumX : float;
public var minimumZ : float;
public var maximumZ : float;
static var VOBLASTI = false;

function Start () {
    newPos = gameObject.transform.localPosition;
}

function Update () {
    if (Input.GetKey("up")) {

        newPos.z -= Input.GetAxis ("Vertical") * 0.05 * Time.deltaTime;
        gameObject.transform.localPosition = newPos;
        newPos.z = Mathf.Clamp (newPos.z, minimumZ, maximumZ);
        VOBLASTI = true;
    }

    if (Input.GetKey("down")) {

        newPos.z -= Input.GetAxis ("Vertical") * 0.05 * Time.deltaTime;
        gameObject.transform.localPosition = newPos;
        newPos.z = Mathf.Clamp (newPos.z, minimumZ, maximumZ);
        VOBLASTI = true;
    }



    if (Input.GetKey("left")) {

        newPos.x += Input.GetAxis ("Horizontal") * 0.04 * Time.deltaTime;
        gameObject.transform.localPosition = newPos;
        newPos.x = Mathf.Clamp (newPos.x, minimumX, maximumX);
        VOBLASTI = true;
    }

    if (Input.GetKey("right")) {

        newPos.x += Input.GetAxis ("Horizontal") * 0.03 * Time.deltaTime;
        gameObject.transform.localPosition = newPos;
        newPos.x = Mathf.Clamp (newPos.x, minimumX, maximumX);
        VOBLASTI = true;

    }


}