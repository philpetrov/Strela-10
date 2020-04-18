


 


function Update() {
    var object = GameObject.Find("Camera ПЕРЕВОД"); //Найти камеру
    var scriptMouse = object.GetComponent ("SimpleMouseRotator"); //Найти скрипт вращения персонажа на камере

    if (Input.GetKeyDown("escape"))
    {
        scriptMouse.enabled = !scriptMouse.enabled; // Откоючить/включить вращение игрока
    }

}

