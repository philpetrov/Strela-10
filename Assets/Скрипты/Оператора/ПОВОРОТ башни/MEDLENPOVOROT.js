// Скрипт медленного вращения ПУ перед стопом
var angle : int;


function Start() {
    GetComponent("POVOROT").enabled = false; // Отключаем скрипт быстрого оповорота
    if (transform.localRotation.y > 0.4 && transform.localRotation.y < 0.8) {
        angle = 30;
    }
}

function Update () {
    if (Input.GetKey("right")) {
        angle += Input.GetAxis("Horizontal") * Time.deltaTime * 30;
        angle = Mathf.Clamp(angle, -3000, 3000);
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.up);
    }
}