//Скрипт сброса статичных
function Start() {
   
    //Из кнопок
    AZKNOPKI.SLEJENIEkolco = false; // Для движения кольца
    AZKNOPKI.SLEJENIEkolco2 = false; // Для движения кольца (проверка ФОНА 2)
    AZKNOPKI.SLEJENIEkolco3 = false; // Для движения кольца (проверка ФОНА 3)
    AZKNOPKI.TextProdoljitOTKL = false; // Для отключения текста ПРОДОЛЖИТЬ из визира
    AZKNOPKI.UgolNIZ = false; // Для загорания низ при определенном угле
    AZKNOPKI.UgolNIZ2 = false; // Для загорания низ при определенном угле (2Ой заход в ВИЗИР)
    AZKNOPKI.UgolNIZ3 = false; // Для загорания низ при определенном угле (3ий заход в ВИЗИР)
    AZKNOPKI.UgolNIZ4 = false; // Для загорания низ при определенном угле (4ый заход в ВИЗИР)
    AZKNOPKI.SBROSenter1 = false; //Для того чтобы сбросить статичную TextProdoljit1
    AZKNOPKI.vishelizVIZIRA1 = false; // Вышел из ВИЗИРА 1 раз
    AZKNOPKI.vishelizVIZIRA2 = false; // Вышел из ВИЗИРА 2 раз
    AZKNOPKI.vishelizVIZIRA3 = false; // Вышел из ВИЗИРА 3 раз
    AZKNOPKI.vishelizVIZIRA4 = false; // Вышел из ВИЗИРА 4 раз
    AZKNOPKI.KOLCOsovmestilos = false; // Кольцо совместилось
    AZKNOPKI.zashelvVIZIRkolcosovmesh = false; // Чтобы в Update отключить меню
    AZKNOPKI.zashelvVIZIRvertolet1 = false; //Сигнал для вертолета зашел в визир ФОН 1
    AZKNOPKI.zashelvVIZIRvertolet2FON = false; //Сигнал для вертолета зашел в визир ФОН 2
    AZKNOPKI.zashelvVIZIRvertolet3FON = false; //Сигнал для вертолета зашел в визир ФОН 3

    //GUIPODSKAZKA
    AZGUIPODSKAZKA.POVOROTactive = false;

    //AZPUSHKA.
    AZPUSHKA.TextProdoljit = false;
    AZPUSHKA.PRODOLJIT2 = false; //Чтобы выйти из визира во второй раз
    AZPUSHKA.PRODOLJIT3 = false; //Чтобы выйти из визира в третий раз (режим ФОН 2)
    AZPUSHKA.PRODOLJIT4 = false; //Чтобы выйти из визира в третий раз (режим ФОН 3)
    AZPUSHKA.PushkavOblastiFON1 = false; //Статичная (пушка в области для появления самолета)
    AZPUSHKA.PushkavOblastiFON2 = false; //Статичная (пушка в области для появления самолета ФОН 2)
    AZPUSHKA.PushkavOblastiFON3 = false; //Статичная (пушка в области для появления самолета ФОН 3)

    //Сигнал
    AZSIGNAL.SIGNAL = false;
    AZSIGNAL.SIGNAL2 = false; // (режим ФОН 2)
    AZSIGNAL.SIGNAL3 = false; // (режим ФОН 3)

    //AZKOLCODVIJEN
    AZKOLCODVIJEN.VOBLASTI = false;

    //AZPOVOROT
    AZPOVOROT.POVOROTvOblastiFON1vert1 = false; // Для появления вертолета 1 при определенном угле (ФОН 1)
    AZPOVOROT.POVOROTvOblastiFON1vert2 = false; // Для появления вертолета 2 при определенном угле (ФОН 1)
    AZPOVOROT.POVOROTvOblastiFON2vert1 = false; // Для появления вертолета 1 при определенном угле (ФОН 2)
    AZPOVOROT.POVOROTvOblastiFON2vert2 = false; // Для появления вертолета 2 при определенном угле (ФОН 2)
    AZPOVOROT.POVOROTvOblastiFON3vert1 = false; // Для появления вертолета 1 при определенном угле (ФОН 3)
    AZPOVOROT.POVOROTvOblastiFON3vert2 = false; // Для появления вертолета 2 при определенном угле (ФОН 3)
    AZPOVOROT.SignalOdin = false;
    AZPOVOROT.SignalDva = false;
    AZPOVOROT.SignalTri = false;

    //AZVERTOLET3FON3
    AZVERTOLET3FON3.alreadyVERTOLET2FON3 = false; // Статичная для функции тайм
    AZVERTOLET3FON3.dvijenieVPRAVO2FON3 = false;

    //AZVERTOLETFON3
    AZVERTOLETFON3.alreadyVERTOLETFON3 = false; // Статичная для функции тайм
    AZVERTOLETFON3.dvijenieVPRAVOFON3 = false;

    //AZVERTOLET2FON2
    AZVERTOLET2FON2.alreadyVERTOLET2FON2 = false; // Статичная для функции тайм
    AZVERTOLET2FON2.dvijenieVPRAVO2FON2 = false;

    //AZVERTOLETFON2
    AZVERTOLETFON2.alreadyVERTOLETFON2 = false; // Статичная для функции тайм
    AZVERTOLETFON2.dvijenieVPRAVOFON2 = false;

    //AZVERTOLET2
    AZVERTOLET2.alreadyVERTOLET2 = false; // Статичная для функции тайм
    AZVERTOLET2.dvijenieVPRAVO2 = false;

    //AZVERTOLET
    AZVERTOLET.alreadyVERTOLET = false; // Статичная для функции тайм
    AZVERTOLET.dvijenieVPRAVO = false;
}
