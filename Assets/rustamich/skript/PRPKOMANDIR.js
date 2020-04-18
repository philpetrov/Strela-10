#pragma strict

var BORTSET = false;
var METKI = false;
var KONTROL = false; // КОНТРОЛЬ НА 1
var KONTROL1 = false; // КОНТРОЛЬ НА 2
var KONTROL2 = false; // КОНТРОЛЬ НА 3
var KONTROL3 = false; // КОНТРОЛЬ НА 4
var IARKOST = false; // КОНТРОЛЬ НА 4
var FOKUS = false; // КОНТРОЛЬ НА 4
var PODSVETSIGNALA = false; // КОНТРОЛЬ НА 4
var KONTROLOTKL = false; // КОНТРОЛЬ НА ОТКЛ
var CEKTORODIN = false; // КОНТРОЛЬ НА ОТКЛ
var CEKTORDVA = false; // КОНТРОЛЬ НА ОТКЛ
var CEKTORTRI = false; // КОНТРОЛЬ НА ОТКЛ
var CEKTORCHETIRE = false; // КОНТРОЛЬ НА ОТКЛ
var SHIRINA1 = false; // 
var SHIRINA2 = false; // 
var SHIRINA3 = false; // 
var SHIRINA4 = false; // 
var POLOGENIE1 = false; // 
var POLOGENIE2 = false; // 
var POLOGENIE3 = false; // 
var POLOGENIE4 = false; // 
var CEKTORODIN1 = false; // КОНТРОЛЬ НА ОТКЛ
var CEKTORDVA1 = false; // КОНТРОЛЬ НА ОТКЛ
var CEKTORTRI1 = false; // КОНТРОЛЬ НА ОТКЛ
var CEKTORCHETIRE1 = false; // КОНТРОЛЬ НА ОТКЛ
var METKI1 = false;
var BORTSET1 = false;

var BORTSETBOX : GameObject; // ТУМБЛЕР БОРТСЕТЬ
var TEXTVKLBORTSET : GameObject; //
var TEXTVKLBORTSET2 : GameObject; //
var SVETBORSET : GameObject; //

var TEXTPODOJDAT : GameObject; //
var TEXTPODOJDAT2 : GameObject; //
var TEXTLINII1 : GameObject; //
var TEXTLINII2 : GameObject; //
var TEXTLINII3 : GameObject; //
var TEXTKONTROL : GameObject; //
var TEXTKONTROL2 : GameObject; //
var KONTROLBOX : GameObject; // НА 1
var CameraKONTROL : GameObject; //
var SVETKONTROL : GameObject; // ВЕРТИКАЛЬНАЯ ВЕРХНЯЯ
var KONTROLBOX1 : GameObject; //  НА 2
var SVETKONTROL1 : GameObject; // ГОРИЗОНТ ПРАВАЯ
var KONTROLBOX2 : GameObject; // НА 3
var SVETKONTROL2 : GameObject; // ВЕРТ НИЖНЯЯ
var KONTROLBOX3 : GameObject; // НА 4
var SVETKONTROL3 : GameObject; // ГОРИЗОНТ ЛЕВАЯ
var SVETKONTROL4 : GameObject; // ГОРИЗОНТ ЛЕВАЯ более яркая

var TEXTFOKUS : GameObject; //
var TEXTFOKUS2 : GameObject; //
var IARKOSTBOX : GameObject; // ГОРИЗОНТ ЛЕВАЯ

var FOKUSBOX : GameObject; // ГОРИЗОНТ ЛЕВАЯ
var ZELENALEVA : GameObject; //
var NEZELENALEVA : GameObject; //

var TEXTPODSVETSIGNALA : GameObject; //
var TEXTPODSVETSIGNALA2 : GameObject; //
var TEXTPODSVETSIGNALA3 : GameObject; //
var PODSVETSIGNALABOX : GameObject; //
var TEXTKONTROLOTKL : GameObject; // ТЕКСТ КОНТРОЛЬ ОТКЛЮЧИТЬ
var TEXTKONTROLOTKL2 : GameObject; //
var KONTROLBOX4 : GameObject; // БОКС КОНТРОЛЬ ОКЛЮЧИТЬ

var METKIBOX : GameObject; // ТУМБЛЕР МЕТКИ
var TEXTMETKI : GameObject; //
var TEXTMETKI2 : GameObject; //
var TEXTMETKI3 : GameObject; //
var ZELENAVERH : GameObject; //
var NEZELENAVERH : GameObject; //
var ZELENAPRAV : GameObject; //
var NEZELENAPRAV : GameObject; //
var ZELENANIZ : GameObject; //
var NEZELENANIZ : GameObject; //
var SVETMETKI : GameObject; //

var TEXTSEKTOR : GameObject; //
var TEXTSEKTOR2 : GameObject; //
var TEXTSEKTOR3 : GameObject; //
var TEXTSEKTOR4 : GameObject; //
var CEKTORODINBOX : GameObject; //
var CEKTORDVABOX : GameObject; //
var CEKTORTRIBOX : GameObject; //
var CEKTORCHETIREBOX : GameObject; //
var SVETCEKTOR1 : GameObject; //
var SVETCEKTOR2 : GameObject; //
var SVETCEKTOR3 : GameObject; //
var SVETCEKTOR4 : GameObject; //

var TEXTSHIRINA1 : GameObject; //
var TEXTSHIRINA2 : GameObject; //
var TEXTSHIRINA3 : GameObject; //
var SHIRINABOX1 : GameObject; //
var SHIRINABOX2 : GameObject; //
var SHIRINABOX3 : GameObject; //
var SHIRINABOX4 : GameObject; //
var SVETSHIRINA1 : GameObject; //
var SVETSHIRINA2 : GameObject; //
var SVETSHIRINA3 : GameObject; //
var SVETSHIRINA4 : GameObject; //

var TEXTPOLOGENIE1 : GameObject; //
var TEXTPOLOGENIE2 : GameObject; //
var TEXTPOLOGENIE3 : GameObject; //
var POLOGENIEBOX1 : GameObject; //
var POLOGENIEBOX2 : GameObject; //
var POLOGENIEBOX3 : GameObject; //
var POLOGENIEBOX4 : GameObject; //
var SVETPOLOGENIE1 : GameObject; //
var SVETPOLOGENIE2 : GameObject; //
var SVETPOLOGENIE3 : GameObject; //
var SVETPOLOGENIE4 : GameObject; //

var CEKTORODINBOX1 : GameObject; //
var CEKTORDVABOX1 : GameObject; //
var CEKTORTRIBOX1 : GameObject; //
var CEKTORCHETIREBOX1 : GameObject; //
var METKIBOX1 : GameObject; // ТУМБЛЕР МЕТКИ
var TEXTVSEOTKL : GameObject; //
var TEXTVSEOTKL2 : GameObject; //

var TEXTVIKLBORTSET : GameObject; //
var TEXTVIKLBORTSET2 : GameObject; //
var BORTSETBOX1 : GameObject; // ТУМБЛЕР БОРТСЕТЬ

var PRAVARUKA : GameObject; // Левый локоть

var CameranaSectora : GameObject; // Камера на сектора




function OnMouseUp () {

    // 1 пункт проверки ПРП
    if (BORTSET == true) { // ЕСЛИ НАЖАЛ НА БОРТСЕТЬ
        BORTSETBOX.GetComponent.<Collider>().enabled =  false; // Деактивация коллайдера БОРТСЕТЬ
        PRAVARUKA.GetComponent.<Animation>().Play("ТУМБЛЕР ВВЕРХ1"); // Анимация рук       
        GetComponent.<Animation>().Play("ВКЛБОРТСЕТЬ 8"); //ПРОИГРЫВАНИЕ АНИМАЦИИ САМОГО ТУМБЛЕРА
        yield WaitForSeconds (0.53); // Задержка 0.53 сек
        var audioBORTSET: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioBORTSET.Play();//
        SVETBORSET.SetActive (true); // активация светодиод
        TEXTVKLBORTSET.SetActive (false); // Деактивация текста "ВКЛЮЧИТЬ БОРТСЕТЬ"
         
        TEXTPODOJDAT.SetActive (true); // Активация надписи "ПОДОЖДАТЬ 3 МИНУТЫ"
        TEXTPODOJDAT2.SetActive (true); // Активация надписи "ПОДОЖДАТЬ 3 МИНУТЫ 2"
        yield WaitForSeconds (10); // Задержка 30 сек
        TEXTPODOJDAT.SetActive (false); // Деактивация надписи "ПОДОЖДАТЬ 3 МИНУТЫ"
        TEXTPODOJDAT2.SetActive (false); // Активация надписи "ПОДОЖДАТЬ 3 МИНУТЫ 2"
        yield WaitForSeconds (0.3); // Задержка 0.3 сек
        TEXTKONTROL.SetActive (true); // Активация надписи "Установить КОНТРОЛЬ"
        TEXTKONTROL2.SetActive (true);        
        KONTROLBOX.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер КОНТРОЛЬ
    }



    // 2 пункт проверки ПРП
    if (KONTROL == true) { // ЕСЛИ НАЖАЛ НА КОНТРОЛЬ 1 РАЗ
        KONTROLBOX.GetComponent.<Collider>().enabled =  false; // Деактивация 1 коллайдера КОНТРОЛЬ
        CameraKONTROL.SetActive (true); // Включение камеры на КОНТРОЛЬ
        CameranaSectora.SetActive (true); //
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Отключить поворот головы на момент анимации
        PRAVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬКОНТРОЛЬ"); // Анимация рук К КОНТРОЛЬ
        yield WaitForSeconds (0.55); // Задержка
        GetComponent.<Animation>().Play("КОНТРОЛЬНА1"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ КОНТРОЛЬ НА 1
       
        var audioKONTROL: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioKONTROL.Play();// 
        TEXTKONTROL.SetActive (false); // ДЕАктивация надписи "Установить КОНТРОЛЬ"
        TEXTKONTROL2.SetActive (false); 
        TEXTLINII1.SetActive (true); // Активация надписи "ПРИ ЭТОМ НА ЭКРАНЕ 1Ж1-7 ПОЯВЛЯЮТСЯ ПРЯМЫЕ ЛИНИИ"
        TEXTLINII2.SetActive (true);
        TEXTLINII3.SetActive (true);
        SVETKONTROL.SetActive (true); // активация светодиод КОТОРЫЙ ПОДСВЕЧИВАЕТ ВЕРХНЮЮ ВЕРТИКАЛЬНУЮ
        KONTROLBOX1.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер КОНТРОЛЬ 2

    }

    if (KONTROL1 == true) { // ЕСЛИ НАЖАЛ НА КОНТРОЛЬ 2 РАЗ
        KONTROLBOX1.GetComponent.<Collider>().enabled =  false; // Деактивация 2 коллайдера КОНТРОЛЬ
        SVETKONTROL.SetActive (false); // ДЕАктивация светодиод КОТОРЫЙ ПОДСВЕЧИВАЕТ ВЕРХНЮЮ ВЕРТИКАЛЬНУЮ
        KONTROLBOX.GetComponent.<Animation>().Play("КОНТРОЛЬНА2"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ КОНТРОЛЬ НА 2
        var audioKONTROL1: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioKONTROL1.Play();// 
        SVETKONTROL1.SetActive (true); // активация светодиод КОТОРЫЙ ПОДСВЕЧИВАЕТ ГОРИЗОНТАЛЬНУЮ ПРАВУЮ
        KONTROLBOX2.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер КОНТРОЛЬ 3

    }

    if (KONTROL2 == true) { // ЕСЛИ НАЖАЛ НА КОНТРОЛЬ 3 РАЗ
        KONTROLBOX2.GetComponent.<Collider>().enabled =  false; // Деактивация 3 коллайдера КОНТРОЛЬ
        SVETKONTROL1.SetActive (false); // активация светодиод  ПОДСВЕЧИВАЕТ ГОРИЗОНТАЛЬНУЮ ПРАВУЮ
        KONTROLBOX.GetComponent.<Animation>().Play("КОНТРОЛЬНА3"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ КОНТРОЛЬ НА 3
        var audioKONTROL2: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioKONTROL2.Play();// 
        SVETKONTROL2.SetActive (true); // активация светодиод КОТОРЫЙ ПОДСВЕЧИВАЕТ ВЕРТИКАЛЬНУЮ НИЖНЮЮ
        KONTROLBOX3.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер КОНТРОЛЬ 4

    }

    if (KONTROL3 == true) { // ЕСЛИ НАЖАЛ НА КОНТРОЛЬ 4 РАЗ
        KONTROLBOX3.GetComponent.<Collider>().enabled =  false; // Деактивация 4 коллайдера КОНТРОЛЬ
        SVETKONTROL2.SetActive (false); // активация светодиод  КОТОРЫЙ ПОДСВЕЧИВАЕТ ВЕРТИКАЛЬНУЮ НИЖНЮЮ
        KONTROLBOX.GetComponent.<Animation>().Play("КОНТРОЛЬНА4"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ КОНТРОЛЬ НА 4
        var audioKONTROL3: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioKONTROL3.Play();// 
        SVETKONTROL3.SetActive (true); // активация светодиод КОТОРЫЙ ПОДСВЕЧИВАЕТ ГОРИЗОНТАЛЬНУЮ ЛЕВУЮ
        PRAVARUKA.GetComponent.<Animation>().Play("ОТКЛЮЧИТЬКОНТРОЛЬ"); // Анимация рук ОТ КОНТРОЛЬ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        IARKOSTBOX.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер ЯРКОСТЬ
        TEXTLINII1.SetActive (false); // ДЕАктивация надписи "ПРИ ЭТОМ НА ЭКРАНЕ 1Ж1-7 ПОЯВЛЯЮТСЯ ПРЯМЫЕ ЛИНИИ"
        TEXTLINII2.SetActive (false);
        TEXTLINII3.SetActive (false);
        TEXTFOKUS.SetActive (true); // Активация надписи С ПОМОЩЬЮ ЯРКОСТИ И ФОКУСА
        TEXTFOKUS2.SetActive (true);

    }


    if (IARKOST == true) { // ЕСЛИ НАЖАЛ НА КОНТРОЛЬ ЯРКОСТЬ
        IARKOSTBOX.GetComponent.<Collider>().enabled =  false; // Деактивация коллайдера ЯРКОСТЬ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Выключить поворот головы
        PRAVARUKA.GetComponent.<Animation>().Play("ФОКУС"); // Анимация рук ПОВОРОТ РУЧКИ В ПРАВО
        yield WaitForSeconds (0.50); // Задержка 0.3 сек
        IARKOSTBOX.GetComponent.<Animation>().Play("ЯРКОСТЬ"); //АНИМАЦИЯ ПОВОРОТА РУЧКИ ЯРКОСТЬ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        FOKUSBOX.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер ФОКУС
    }


    if (FOKUS == true) { // ЕСЛИ НАЖАЛ НА ФОКУС
        FOKUSBOX.GetComponent.<Collider>().enabled =  false; // Деактивация коллайдера ФОКУС
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Выключить поворот головы
        PRAVARUKA.GetComponent.<Animation>().Play("ФОКУС"); // Анимация рук ПОВОРОТ РУЧКИ В ПРАВО
        yield WaitForSeconds (0.50); // Задержка 0.3 сек
        FOKUSBOX.GetComponent.<Animation>().Play("РУЧКАФОКУС"); //АНИМАЦИЯ ПОВОРОТА РУЧКИ ФОКУС
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        PODSVETSIGNALABOX.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер ПОДСВЕТ СИГНАЛА
        NEZELENALEVA.SetActive (false); // ВЫКЛЮЧАЕМ ЛЕВУЮ ГОРИЗОНТАЛЬНУЮ ЛИНИЮ
        SVETKONTROL3.SetActive (false); // деактивация светодиод КОТОРЫЙ ПОДСВЕЧИВАЕТ ГОРИЗОНТАЛЬНУЮ ЛЕВУЮ
        ZELENALEVA.SetActive (true); // ВКЛЮЧАЕМ ЯРКУЮ ГОРИЗОНТАЛЬНУЮ ЛИНИЮ (СМОТРИТСЯ БОЛЕЕ ЯРКО)
        TEXTFOKUS.SetActive (false); // ДЕАктивация надписи "Установить КОНТРОЛЬ"
        TEXTFOKUS2.SetActive (false);
        TEXTPODSVETSIGNALA.SetActive (true); // Активация надписи С ПОМОЩЬЮ ПОДСВЕТСИГНАЛА...
        TEXTPODSVETSIGNALA2.SetActive (true);
        TEXTPODSVETSIGNALA3.SetActive (true);
    }

    if (PODSVETSIGNALA == true) { // ЕСЛИ НАЖАЛ НА ФОКУС
        PODSVETSIGNALABOX.GetComponent.<Collider>().enabled =  false; // Деактивация коллайдера ФОКУС
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Выключить поворот головы
        PRAVARUKA.GetComponent.<Animation>().Play("РУЧКАВЛЕВО"); // Анимация рук ПОВОРОТ РУЧКИ В ПРАВО
        yield WaitForSeconds (0.50); // Задержка 0.3 сек
        PODSVETSIGNALABOX.GetComponent.<Animation>().Play("ПОДСВЕТСИГНАЛА"); //АНИМАЦИЯ ПОВОРОТА РУЧКИ ФОКУС
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        ZELENALEVA.SetActive (false); // ВыКЛЮЧАЕМ ЯРКУЮ ГОРИЗОНТАЛЬНУЮ ЛИНИЮ (СМОТРИТСЯ БОЛЕЕ ЯРКО)
        NEZELENALEVA.SetActive (true); // ВКЛЮЧАЕМ ЛЕВУЮ ГОРИЗОНТАЛЬНУЮ ЛИНИЮ
        TEXTPODSVETSIGNALA.SetActive (false); // ДЕАктивация надписи С ПОМОЩЬЮ ПОДСВЕТСИГНАЛА...
        TEXTPODSVETSIGNALA2.SetActive (false);
        TEXTPODSVETSIGNALA3.SetActive (false);
        TEXTKONTROLOTKL.SetActive (true); // Активация надписи ОТКЛ КОНТРОЛЬ
        TEXTKONTROLOTKL2.SetActive (true);
        KONTROLBOX4.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер КОНТРОЛЬ ОТКЛ

    }

    if (KONTROLOTKL == true) { // ЕСЛИ НАЖАЛ НА КОНТРОЛЬ КОГДА ОТКЛЮЧАЕШЬ
        KONTROLBOX4.GetComponent.<Collider>().enabled =  false; // Деактивация коллайдера КОНТРОЛЬ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Выключить поворот головы
        PRAVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬКОНТРОЛЬ"); // Анимация рук К КОНТРОЛЬ
        yield WaitForSeconds (0.55); // Задержка
        KONTROLBOX.GetComponent.<Animation>().Play("КОНТРОЛЬНАОТКЛ"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ КОНТРОЛЬ НА ОТКЛ
        yield WaitForSeconds (0.55); // Задержка
        var audioKONTROL5: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioKONTROL5.Play();// 
        PRAVARUKA.GetComponent.<Animation>().Play("ОТКЛЮЧИТЬКОНТРОЛЬ"); // Анимация рук ОТ КОНТРОЛЬ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        METKIBOX.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер МЕТКИ
        CameraKONTROL.SetActive (false); // ВЫключение камеры на КОНТРОЛЬ
        TEXTKONTROLOTKL.SetActive (false); // Активация надписи ОТКЛ КОНТРОЛЬ
        TEXTKONTROLOTKL2.SetActive (false);
        TEXTMETKI.SetActive (true); // Активация надписи С ПОМОЩЬЮ ПОДСВЕТСИГНАЛА...
        TEXTMETKI2.SetActive (true);
        TEXTMETKI3.SetActive (true);
    }

    if (METKI == true) { // ЕСЛИ НАЖАЛ НА МЕТКИ
        METKIBOX.GetComponent.<Collider>().enabled =  false; // Активировать коллайдер МЕТКИ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Выключить поворот головы

        PRAVARUKA.GetComponent.<Animation>().Play("РУЧКАВЛЕВО"); // Анимация рук 
        GetComponent.<Animation>().Play("МЕТКИВКЛ"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ
        yield WaitForSeconds (0.55); // Задержка
        var audioMETKI2: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioMETKI2.Play();// 
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        SVETMETKI.SetActive (true); // активация светодиод КОТОРЫЙ ПОДСВЕЧИВАЕТ ВСЕ СЕКТОРА
        TEXTMETKI.SetActive (false); // деАктивация надписи "Установить Метки"
        TEXTMETKI2.SetActive (false);
        TEXTMETKI3.SetActive (false);
        TEXTSEKTOR.SetActive (true); // Активация надписи С ПОМОЩЬЮ ПОДСВЕТСИГНАЛА...
        TEXTSEKTOR2.SetActive (true);
        TEXTSEKTOR3.SetActive (true);
        TEXTSEKTOR4.SetActive (true);
        CEKTORODINBOX.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер МЕТКИ
        
    }

    if (CEKTORODIN == true) { // ЕСЛИ НАЖАЛ НА КОНТРОЛЬ 1 РАЗ
        CEKTORODINBOX.GetComponent.<Collider>().enabled =  false; // Деактивация 1 коллайдера КОНТРОЛЬ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Выключить поворот головы
        PRAVARUKA.GetComponent.<Animation>().Play("ТУМБЛЕР ВВЕРХ1"); // Анимация рук К КОНТРОЛЬ
        GetComponent.<Animation>().Play("СЕКТОР1"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ КОНТРОЛЬ НА 1  
        yield WaitForSeconds (0.53); // Задержка 0.53 сек
        var audioCEKTOR1: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioCEKTOR1.Play();// 
       // SVETMETKI.SetActive (false); // активация светодиод КОТОРЫЙ ПОДСВЕЧИВАЕТ ВСЕ СЕКТОРА
        SVETCEKTOR1.SetActive (true); // активация светодиод КОТОРЫЙ ПОДСВЕЧИВАЕТ ВЕРХНЮЮ ВЕРТИКАЛЬНУЮ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        CEKTORDVABOX.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер КОНТРОЛЬ 2
    }

    if (CEKTORDVA == true) { // ЕСЛИ НАЖАЛ НА КОНТРОЛЬ 1 РАЗ
        CEKTORDVABOX.GetComponent.<Collider>().enabled =  false; // Деактивация 1 коллайдера КОНТРОЛЬ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Выключить поворот головы
        PRAVARUKA.GetComponent.<Animation>().Play("ТУМБЛЕР ВВЕРХ1"); // Анимация рук К КОНТРОЛЬ
        GetComponent.<Animation>().Play("СЕКТОР2"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ КОНТРОЛЬ НА 1   
        yield WaitForSeconds (0.53); // Задержка 0.53 сек
        var audioCEKTOR2: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioCEKTOR2.Play();// 
        SVETCEKTOR2.SetActive (true); // активация светодиод КОТОРЫЙ ПОДСВЕЧИВАЕТ ВЕРХНЮЮ ВЕРТИКАЛЬНУЮ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        CEKTORTRIBOX.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер КОНТРОЛЬ 2
    }

    if (CEKTORTRI == true) { // ЕСЛИ НАЖАЛ НА КОНТРОЛЬ 1 РАЗ
        CEKTORTRIBOX.GetComponent.<Collider>().enabled =  false; // Деактивация 1 коллайдера КОНТРОЛЬ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Выключить поворот головы
        PRAVARUKA.GetComponent.<Animation>().Play("ТУМБЛЕР ВВЕРХ1"); // Анимация рук К КОНТРОЛЬ
        GetComponent.<Animation>().Play("СЕКТОР3"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ КОНТРОЛЬ НА 1    
        yield WaitForSeconds (0.53); // Задержка 0.53 сек
        var audioCEKTOR3: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioCEKTOR3.Play();// 
        SVETCEKTOR3.SetActive (true); // активация светодиод КОТОРЫЙ ПОДСВЕЧИВАЕТ ВЕРХНЮЮ ВЕРТИКАЛЬНУЮ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        CEKTORCHETIREBOX.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер КОНТРОЛЬ 2

    }
    
    if (CEKTORCHETIRE == true) { // ЕСЛИ НАЖАЛ НА КОНТРОЛЬ 1 РАЗ
        CEKTORCHETIREBOX.GetComponent.<Collider>().enabled =  false; // Деактивация 1 коллайдера КОНТРОЛЬ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Выключить поворот головы
        PRAVARUKA.GetComponent.<Animation>().Play("ТУМБЛЕР ВВЕРХ1"); // Анимация рук К КОНТРОЛЬ
        GetComponent.<Animation>().Play("СЕКТОР4"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ КОНТРОЛЬ НА 1 
        yield WaitForSeconds (0.53); // Задержка 0.53 сек
        var audioCEKTOR4: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioCEKTOR4.Play();// 
        SVETCEKTOR4.SetActive (true); // активация светодиод КОТОРЫЙ ПОДСВЕЧИВАЕТ ВЕРХНЮЮ ВЕРТИКАЛЬНУЮ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        TEXTSEKTOR.SetActive (false); // Активация надписи С ПОМОЩЬЮ ПОДСВЕТСИГНАЛА...
        TEXTSEKTOR2.SetActive (false);
        TEXTSEKTOR3.SetActive (false);
        TEXTSEKTOR4.SetActive (false);
        TEXTSHIRINA1.SetActive (true); // Активация надписи С ПОМОЩЬЮ ПОДСВЕТСИГНАЛА...
        TEXTSHIRINA2.SetActive (true);
        TEXTSHIRINA3.SetActive (true);
        SHIRINABOX1.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер КОНТРОЛЬ 2

    }

    if (SHIRINA1 == true) { // ЕСЛИ НАЖАЛ НА КОНТРОЛЬ 1 РАЗ
        SHIRINABOX1.GetComponent.<Collider>().enabled =  false; // Деактивация 1 коллайдера КОНТРОЛЬ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Выключить поворот головы
        PRAVARUKA.GetComponent.<Animation>().Play("РУЧКАВЛЕВО"); // Анимация рук К КОНТРОЛЬ
        GetComponent.<Animation>().Play("ШИРИНА1"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ КОНТРОЛЬ НА 1    
      //  var audioSHIRINA1: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
      //  audioSHIRINA1.Play();//
        yield WaitForSeconds (0.50); // Задержка
        SVETCEKTOR1.SetActive (false); // активация светодиод КОТОРЫЙ ПОДСВЕЧИВАЕТ ВЕРХНЮЮ ВЕРТИКАЛЬНУЮ
        SVETSHIRINA1.SetActive (true); //
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        SHIRINABOX2.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер
    }

    if (SHIRINA2 == true) { // ЕСЛИ НАЖАЛ НА КОНТРОЛЬ 1 РАЗ
        SHIRINABOX2.GetComponent.<Collider>().enabled =  false; // Деактивация 1 коллайдера КОНТРОЛЬ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Выключить поворот головы
        PRAVARUKA.GetComponent.<Animation>().Play("РУЧКАВЛЕВО"); // Анимация рук К КОНТРОЛЬ
        GetComponent.<Animation>().Play("ШИРИНА2"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ КОНТРОЛЬ НА 1    
      //  var audioSHIRINA2: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
      //  audioSHIRINA2.Play();// 
        yield WaitForSeconds (0.50); // Задержка
        SVETCEKTOR2.SetActive (false); // активация светодиод КОТОРЫЙ ПОДСВЕЧИВАЕТ ВЕРХНЮЮ ВЕРТИКАЛЬНУЮ
        SVETSHIRINA2.SetActive (true); //
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        SHIRINABOX3.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер
    }

    
    if (SHIRINA3 == true) { // ЕСЛИ НАЖАЛ НА КОНТРОЛЬ 1 РАЗ
        SHIRINABOX3.GetComponent.<Collider>().enabled =  false; // Деактивация 1 коллайдера КОНТРОЛЬ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Выключить поворот головы
        PRAVARUKA.GetComponent.<Animation>().Play("РУЧКАВЛЕВО"); // Анимация рук К КОНТРОЛЬ
        GetComponent.<Animation>().Play("ШИРИНА3"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ КОНТРОЛЬ НА 1    
      //  var audioSHIRINA3: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
      //  audioSHIRINA3.Play();//
        yield WaitForSeconds (0.50); // Задержка
        SVETCEKTOR3.SetActive (false); // активация светодиод КОТОРЫЙ ПОДСВЕЧИВАЕТ ВЕРХНЮЮ ВЕРТИКАЛЬНУЮ
        SVETSHIRINA3.SetActive (true); //
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        SHIRINABOX4.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер
    }

    if (SHIRINA4 == true) { // ЕСЛИ НАЖАЛ НА КОНТРОЛЬ 1 РАЗ
        SHIRINABOX4.GetComponent.<Collider>().enabled =  false; // Деактивация 1 коллайдера КОНТРОЛЬ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Выключить поворот головы
        PRAVARUKA.GetComponent.<Animation>().Play("РУЧКАВЛЕВО"); // Анимация рук К КОНТРОЛЬ
        GetComponent.<Animation>().Play("ШИРИНА4"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ КОНТРОЛЬ НА 1    
        //  var audioSHIRINA4: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        //  audioSHIRINA4.Play();//
        yield WaitForSeconds (0.50); // Задержка
        SVETCEKTOR4.SetActive (false); // активация светодиод КОТОРЫЙ ПОДСВЕЧИВАЕТ ВЕРХНЮЮ ВЕРТИКАЛЬНУЮ
        SVETSHIRINA4.SetActive (true); //
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        TEXTSHIRINA1.SetActive (false); // Активация надписи С ПОМОЩЬЮ ПОДСВЕТСИГНАЛА...
        TEXTSHIRINA2.SetActive (false);
        TEXTSHIRINA3.SetActive (false);
        TEXTPOLOGENIE1.SetActive (true); // Активация надписи С ПОМОЩЬЮ ПОДСВЕТСИГНАЛА...
        TEXTPOLOGENIE2.SetActive (true);
        TEXTPOLOGENIE3.SetActive (true);
        POLOGENIEBOX1.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер

    }

    if (POLOGENIE1 == true) { // ЕСЛИ НАЖАЛ НА КОНТРОЛЬ 1 РАЗ
        POLOGENIEBOX1.GetComponent.<Collider>().enabled =  false; // Деактивация 1 коллайдера КОНТРОЛЬ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Выключить поворот головы
        PRAVARUKA.GetComponent.<Animation>().Play("ФОКУС"); // Анимация рук К КОНТРОЛЬ
        GetComponent.<Animation>().Play("ПОЛОЖЕНИЕ1"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ КОНТРОЛЬ НА 1    
        //  var audioSHIRINA1: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        //  audioSHIRINA1.Play();//
        yield WaitForSeconds (0.50); // Задержка
        SVETSHIRINA1.SetActive (false); //
        SVETPOLOGENIE1.SetActive (true); //
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        POLOGENIEBOX2.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер

    }

    if (POLOGENIE2 == true) { // ЕСЛИ НАЖАЛ НА КОНТРОЛЬ 1 РАЗ
        POLOGENIEBOX2.GetComponent.<Collider>().enabled =  false; // Деактивация 1 коллайдера КОНТРОЛЬ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Выключить поворот головы
        PRAVARUKA.GetComponent.<Animation>().Play("РУЧКАВЛЕВО"); // Анимация рук К КОНТРОЛЬ
        GetComponent.<Animation>().Play("ПОЛОЖЕНИЕ2"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ КОНТРОЛЬ НА 1    
        //  var audioSHIRINA1: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        //  audioSHIRINA1.Play();//
        yield WaitForSeconds (0.50); // Задержка
        SVETSHIRINA2.SetActive (false); //
        SVETPOLOGENIE2.SetActive (true); //
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        POLOGENIEBOX3.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер
    }

    if (POLOGENIE3 == true) { // ЕСЛИ НАЖАЛ НА КОНТРОЛЬ 1 РАЗ
        POLOGENIEBOX3.GetComponent.<Collider>().enabled =  false; // Деактивация 1 коллайдера КОНТРОЛЬ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Выключить поворот головы
        PRAVARUKA.GetComponent.<Animation>().Play("ФОКУС"); // Анимация рук К КОНТРОЛЬ
        GetComponent.<Animation>().Play("ПОЛОЖЕНИЕ3"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ КОНТРОЛЬ НА 1    
        //  var audioSHIRINA1: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        //  audioSHIRINA1.Play();//
        yield WaitForSeconds (0.50); // Задержка
        SVETSHIRINA3.SetActive (false); //
        SVETPOLOGENIE3.SetActive (true); //
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        POLOGENIEBOX4.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер
    }

    if (POLOGENIE4 == true) { // ЕСЛИ НАЖАЛ НА КОНТРОЛЬ 1 РАЗ
        POLOGENIEBOX4.GetComponent.<Collider>().enabled =  false; // Деактивация 1 коллайдера КОНТРОЛЬ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Выключить поворот головы
        PRAVARUKA.GetComponent.<Animation>().Play("РУЧКАВЛЕВО"); // Анимация рук К КОНТРОЛЬ
        GetComponent.<Animation>().Play("ПОЛОЖЕНИЕ4"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ КОНТРОЛЬ НА 1    
        //  var audioSHIRINA1: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        //  audioSHIRINA1.Play();//
        yield WaitForSeconds (0.50); // Задержка
        SVETSHIRINA4.SetActive (false); //
        SVETPOLOGENIE4.SetActive (true); //
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        TEXTPOLOGENIE1.SetActive (false); // Активация надписи С ПОМОЩЬЮ ПОДСВЕТСИГНАЛА...
        TEXTPOLOGENIE2.SetActive (false);
        TEXTPOLOGENIE3.SetActive (false);
        TEXTVSEOTKL.SetActive (true); // Активация надписи С ПОМОЩЬЮ ПОДСВЕТСИГНАЛА...
        TEXTVSEOTKL2.SetActive (true);
        CEKTORCHETIREBOX1.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер КОНТРОЛЬ 2
    }

    if (CEKTORCHETIRE1 == true) { // ЕСЛИ НАЖАЛ НА КОНТРОЛЬ 1 РАЗ
        CEKTORCHETIREBOX1.GetComponent.<Collider>().enabled =  false; // Деактивация 1 коллайдера КОНТРОЛЬ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Выключить поворот головы
        PRAVARUKA.GetComponent.<Animation>().Play("ТУМБЛЕРВНИЗ"); // Анимация рук К КОНТРОЛЬ
        CEKTORCHETIREBOX.GetComponent.<Animation>().Play("СЕКТОР4ОТКЛ"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ КОНТРОЛЬ НА 1 
        yield WaitForSeconds (0.53); // Задержка 0.53 сек
        var audioCEKTOR4OTKL: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioCEKTOR4OTKL.Play();// 
        SVETPOLOGENIE4.SetActive (false); //
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        CEKTORTRIBOX1.GetComponent.<Collider>().enabled =  true;
    }

    if (CEKTORTRI1 == true) { // ЕСЛИ НАЖАЛ НА КОНТРОЛЬ 1 РАЗ
        CEKTORTRIBOX1.GetComponent.<Collider>().enabled =  false; // Деактивация 1 коллайдера КОНТРОЛЬ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Выключить поворот головы
        PRAVARUKA.GetComponent.<Animation>().Play("ТУМБЛЕРВНИЗ"); // Анимация рук К КОНТРОЛЬ
        CEKTORTRIBOX.GetComponent.<Animation>().Play("СЕКТОР3ОТКЛ"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ КОНТРОЛЬ НА 1 
        yield WaitForSeconds (0.53); // Задержка 0.53 сек
        var audioCEKTOR3OTKL: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioCEKTOR3OTKL.Play();// 
        SVETPOLOGENIE3.SetActive (false); //
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        CEKTORDVABOX1.GetComponent.<Collider>().enabled =  true;
    }

    if (CEKTORDVA1 == true) { // ЕСЛИ НАЖАЛ НА КОНТРОЛЬ 1 РАЗ
        CEKTORDVABOX1.GetComponent.<Collider>().enabled =  false; // Деактивация 1 коллайдера КОНТРОЛЬ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Выключить поворот головы
        PRAVARUKA.GetComponent.<Animation>().Play("ТУМБЛЕРВНИЗ"); // Анимация рук К КОНТРОЛЬ
        CEKTORDVABOX.GetComponent.<Animation>().Play("СЕКТОР2ОТКЛ"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ КОНТРОЛЬ НА 1 
        yield WaitForSeconds (0.53); // Задержка 0.53 сек
        var audioCEKTOR2OTKL: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioCEKTOR2OTKL.Play();// 
        SVETPOLOGENIE2.SetActive (false); //
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        CEKTORODINBOX1.GetComponent.<Collider>().enabled =  true;

    }


    if (CEKTORODIN1 == true) { // ЕСЛИ НАЖАЛ НА КОНТРОЛЬ 1 РАЗ
        CEKTORODINBOX1.GetComponent.<Collider>().enabled =  false; // Деактивация 1 коллайдера КОНТРОЛЬ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Выключить поворот головы
        PRAVARUKA.GetComponent.<Animation>().Play("ТУМБЛЕРВНИЗ"); // Анимация рук К КОНТРОЛЬ
        CEKTORODINBOX.GetComponent.<Animation>().Play("СЕКТОР1ОТКЛ"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ КОНТРОЛЬ НА 1 
        yield WaitForSeconds (0.53); // Задержка 0.53 сек
        var audioCEKTOR1OTKL: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioCEKTOR1OTKL.Play();// 
        SVETPOLOGENIE1.SetActive (false); //
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        METKIBOX1.GetComponent.<Collider>().enabled =  true;
     
  }

    if (METKI1 == true) { // ЕСЛИ НАЖАЛ НА МЕТКИ
        METKIBOX1.GetComponent.<Collider>().enabled =  false; // Активировать коллайдер МЕТКИ
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Выключить поворот головы
        PRAVARUKA.GetComponent.<Animation>().Play("ФОКУС"); // Анимация рук 
        METKIBOX.GetComponent.<Animation>().Play("МЕТКИВЫКЛ"); //АНИМАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ
        yield WaitForSeconds (0.55); // Задержка
        var audioMETKI: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioMETKI.Play();// 
        (GameObject.Find("Camera").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы
        SVETMETKI.SetActive (false); // активация светодиод КОТОРЫЙ ПОДСВЕЧИВАЕТ ВСЕ СЕКТОРА
        TEXTVSEOTKL.SetActive (false); // Активация надписи С ПОМОЩЬЮ ПОДСВЕТСИГНАЛА...
        TEXTVSEOTKL2.SetActive (false);
        TEXTVIKLBORTSET.SetActive (true); // Активация надписи С ПОМОЩЬЮ ПОДСВЕТСИГНАЛА...
        TEXTVIKLBORTSET2.SetActive (true);
        BORTSETBOX1.GetComponent.<Collider>().enabled =  true;
    }

    // 1 пункт проверки ПРП
    if (BORTSET1 == true) { // ЕСЛИ НАЖАЛ НА БОРТСЕТЬ
        BORTSETBOX1.GetComponent.<Collider>().enabled =  false; // Деактивация коллайдера БОРТСЕТЬ
        PRAVARUKA.GetComponent.<Animation>().Play("ТУМБЛЕРВНИЗ"); // Анимация рук       
        BORTSETBOX.GetComponent.<Animation>().Play("ВЫКЛБОРТСЕТЬ"); //ПРОИГРЫВАНИЕ АНИМАЦИИ САМОГО ТУМБЛЕРА
        yield WaitForSeconds (0.53); // Задержка 0.53 сек
        var audioBORTSETOTKL: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioBORTSETOTKL.Play();//
        SVETBORSET.SetActive (false); // активация светодиод
        TEXTVIKLBORTSET.SetActive (false); // Деактивация текста "ВКЛЮЧИТЬ БОРТСЕТЬ"
        TEXTVIKLBORTSET2.SetActive (false);    
        (GameObject.Find("Terrain").GetComponent("PRPkomanITOG") as MonoBehaviour).enabled = true; // включить итог
    }
}