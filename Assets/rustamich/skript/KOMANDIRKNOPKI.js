var BORTSET = false;








function Start () {

}

function Update () {

}


function OnMouseUp () {

    // 1 пункт проверки НРЗ
    if (BORTSET == true) { 
        GetComponent.<Animation>().Play("вкл БОРТСЕТЬ");
        var audioBORTSET: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioBORTSET.Play();// 
    }
}