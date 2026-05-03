const rawData = `
<question1>Java үшін жариялаған "бір рет жазу, кез-келген жерде іске қосу" қағидасы нені білдіреді?</question1>
<variantright>компиляцияланған Java бағдарламасын JVM бар кез-келген платформада іске қосуға болады</variantright>
<variant>Java бағдарламасын Java аудармашысы бар кез-келген платформадағы көздерден бастауға болады</variant>
<variant>Java бағдарламасын кез-келген платформа үшін орындалатын файлға компиляциялауға болады</variant>
<variant>Java бағдарламасы компиляцияланады, бірақ іске қосу әрекеті қатеге ұшырайды</variant>
<variant>бағдарлама компиляцияланады, іске қосылады, бірақ ештеңе жасамайды</variant>

<question2>Java виртуалды машинасы түсінетін екілік формат қалай аталады?</question2>
<variantright>Байт-код (байткод)</variantright>
<variant>аралық тіл (аралық тіл)</variant>
<variant>виртуалды код (виртуалды код)</variant>
<variant>дерексіз синтаксистік ағаш (дерексіз синтаксистік ағаш)</variant>
<variant>Java бағдарламасы</variant>

<question3>Бағдарлама сәтті құрастырылып, іске қосылатын негізгі main әдісінің жариялануын таңдаңыз:</question3>
<variantright>public static void main(String[] args)</variantright>
<variant>public static void main()</variant>
<variant>static void main(String[] args)</variant>
<variant>public void main(String[] args)</variant>
<variant>public static int main(String[] args)</variant>

<question4>Егер сіз негізгі main әдісін синтаксистік тұрғыдан дұрыс, бірақ JVM қолдамайтын модификаторлар, қайтарылатын мән және параметрлер тіркесімімен жарияласаңыз не болады?</question4>
<variantright>бағдарлама компиляцияланады, бірақ іске қосу әрекеті қатеге ұшырайды</variantright>
<variant>бағдарлама компиляцияланады, басталады, бірақ ештеңе жасамайды</variant>
<variant>Бағдарлама компиляцияланбайды</variant>
<variant>бағдарлама компиляцияланады және іске қосылады</variant>
<variant>бағдарлама қате жібереді</variant>

<question5>Екі класстан тұратын бағдарлама және әр класста кіру нүктесі - main әдісі жарияланды. Осыдан не шығады?</question5>
<variantright>бағдарлама компиляцияланады және іске қосылады</variantright>
<variant>бағдарлама компиляцияланбайды</variant>
<variant>Бағдарлама компиляцияланады, бірақ басталмайды</variant>
<variant>бағдарламадашексіз цикл орындалады</variant>
<variant>бағдарлама архиві ашылады</variant>

<question6>Осы бөлу әрекетін орындағаннан кейін x айнымалысында қандай мән болады? double x = 10 % 4;</question6>
<variantright>2</variantright>
<variant>2,5</variant>
<variant>3</variant>
<variant>4</variant>
<variant>5</variant>

<question7>Төмендегі түсініктемелерден JavaDoc түсініктемесін таңдаңыз.</question7>
<variantright>/** Is this a javadoc? */</variantright>
<variant>/// Is this a Javadoc</variant>
<variant>/*! Is this a javadoc? */</variant>
<variant>/* Is this a javadoc? */</variant>
<variant>// Is this a javadoc?</variant>

<question8>Осы бөлу әрекетін орындағаннан кейін x айнымалысында қандай мән болады? double x = 10 / 4;</question8>
<variantright>2</variantright>
<variant>2,5</variant>
<variant>3</variant>
<variant>4</variant>
<variant>5</variant>

<question9>Бұл кодта алдымен қандай операция орындалады? int x = 100 / 2 * 3;</question9>
<variantright>Бөлу</variantright>
<variant>Көбейту</variant>
<variant>бүтін санды бөлу</variant>
<variant>кері тәртіпте жасалатын операциялар</variant>
<variant>Қосу</variant>

<question10>Бинарлық операцияға қанша операнд қатысады?</question10>
<variantright>Екі</variantright>
<variant>Бір</variant>
<variant>Үш</variant>
<variant>Бірнеше</variant>
<variant>Бес</variant>

<question11>Бір операндпен орындалатын операциялар қалай аталады?</question11>
<variantright>Унарлы</variantright>
<variant>Бірлік</variant>
<variant>Бір</variant>
<variant>Екілік</variant>
<variant>Эквивалентті</variant>

<question12>Қалдықпен бөлу операциясы қандай белгінің көмегімен жүзеге асырылады?</question12>
<variantright>%</variantright>
<variant>/</variant>
<variant>:</variant>
<variant>//</variant>
<variant>-</variant>

<question13>Айнымалы мәнді бірлікке көбейтетін арттыру операторы қалай аталады?</question13>
<variantright>Инкремент</variantright>
<variant>Декремент</variant>
<variant>Эквивалент</variant>
<variant>Сумма</variant>
<variant>Процент</variant>

<question14>Бұл әрекетті орындау барысында алдымен не болады: x = y++;</question14>
<variantright>айнымалы y мәнін 1-ге ұлғайту</variantright>
<variant>z айнымалысына y мәнін тағайындау</variant>
<variant>айнымалы х мәнін 1-ге ұлғайту</variant>
<variant>айнымалы х мәнін у-ке қосу</variant>
<variant>айнымалы y мәнін 2-ге ұлғайту</variant>

<question15>Осы кодты орындау нәтижесінде а айнымалысында қандай мән болады? int a, b; b = 2; a = ++b;</question15>
<variantright>3</variantright>
<variant>2</variant>
<variant>қате шығады</variant>
<variant>2</variant>
<variant>4</variant>

<question16>Есептеу ретін анықтауға не мүмкіндік береді?</question16>
<variantright>дөңгелек жақшалар ()</variantright>
<variant>Фигурные скобки {}</variant>
<variant>Квадратные скобки []</variant>
<variant>Операция деления //</variant>
<variant>Знак процента %%</variant>

<question17>Бүтінсандық деректер типі</question17>
<variantright>byte, short, int, long</variantright>
<variant>float, double</variant>
<variant>float, double, long</variant>
<variant>char, string</variant>
<variant>byte, short, string, float</variant>

<question18>JRE дегеніміз не?</question18>
<variantright>java runtime environment</variantright>
<variant>java runtime exception</variant>
<variant>java runtime execution</variant>
<variant>java distributed kit</variant>
<variant>java run execution</variant>

<question19>For циклінің шартты өрнегінде қанша логикалық өрнек болуы мүмкін?</question19>
<variantright>тек біреу, бірақ ол күрделі болуы мүмкін</variantright>
<variant>үтірмен ажыратылған бірнеше өрнек</variant>
<variant>нүктелі үтірмен ажыратылған бірнеше өрнек</variant>
<variant>күрделі өрнектер болуы мүмкін емес</variant>
<variant>бір қарапайым өрнек</variant>

<question20>JDK дегеніміз не?</question20>
<variantright>java development kit</variantright>
<variant>java deployment kit</variant>
<variant>java demo kit</variant>
<variant>java distributed kit</variant>
<variant>java runtime environment</variant>

<question21>Генерацияланған .class файлдар үнсіз келісім бойынша қайда жазылады?</question21>
<variantright>.java файлдар орналасқан каталогта</variantright>
<variant>classes каталогы құрылады</variant>
<variant>арнайы  javacкаталогы құрылады</variant>
<variant>package каталогы құрылады</variant>
<variant>бағдарламаның түпкі каталогына</variant>

<question22>Компиляторды көрсету үшін қандай кілт қолданылады? Генерацияланған .class файлдар қайда жазылады?</question22>
<variantright>-d</variantright>
<variant>-cp</variant>
<variant>-sourcepath</variant>
<variant>-f</variant>
<variant>-javac</variant>

<question23>javac командасындағы -sourcepath кілттік сөзі не үшін қолданылады?</question23>
<variantright>компилятор бастапқы файлдардың иерархиясын іздейтін каталогтарды көрсету үшін</variantright>
<variant>компилятор компьютер жадында мұрағатталған файлдардың class иерархиясын іздейтін каталогтарды көрсету үшін</variant>
<variant>.class файлдары үнсіз келісім бойынша жазылады</variant>
<variant>үтірмен бөлінген бірнеше өрнектерді қолдану үшін</variant>
<variant>мұрағатталған файлдардың мекен-жайын көрсету үшін</variant>

<question24>Берілген тізімдердің қайсысында класс әдістеріне қол жеткізуді басқаратын спецификаторлардың ең толық тізімі бар?</question24>
<variantright>public, private, protected және үнсіз ену</variantright>
<variant>public, private, static</variant>
<variant>public, static, protected, private және үнсіз ену</variant>
<variant>public, private, protected</variant>
<variant>public, static, final, protected</variant>

<question25>Компиляторды командалық жолдан іске қосу үшін қандай команда қолданылады?</question25>
<variantright>javac</variantright>
<variant>java</variant>
<variant>package</variant>
<variant>public</variant>
<variant>static</variant>

<question26>Қандай шамадан тыс жүктелген әдіс қолданылатындығын не анықтайды - айнымалы түрі немесе объект түрі?</question26>
<variantright>айнымалы түрі</variantright>
<variant>объект түрі</variant>
<variant>файл түрі</variant>
<variant>файл мекен-жайы</variant>
<variant>айнымалы мәні</variant>

<question27>Егер ол суперкласспен бірдей пакетте орналасқан болса, ішкі класста қандай әдістерді қайта анықтауға болады?</question27>
<variantright>protected</variantright>
<variant>public</variant>
<variant>private</variant>
<variant>final</variant>
<variant>void</variant>

<question28>Интерфейсте мүмкін болатын жарияланымды көрсетіңіз:</question28>
<variantright>public static int START = 1;</variantright>
<variant>protected int START = 1;</variant>
<variant>final void go(int start);</variant>
<variant>transient int START = 1;</variant>
<variant>private int getArea();</variant>

<question29>Санау тұрақтыларын қалай салыстыруға болады?</question29>
<variantright>== операциясын қолдануға болады</variantright>
<variant>equals() әдісін қолдануға болады</variant>
<variant>тек сілтемелі типтермен</variant>
<variant>примитивті типтермен</variant>
<variant>сілтемелі және примитивті типтермен</variant>

<question30>Интерфейстегі әдістердің дұрыс жариялануының нұсқасын көрсетіңіз:</question30>
<variantright>boolean setFlag(Boolean[] test);</variantright>
<variant>public static void main(String[] args);</variant>
<variant>public void main(String[] args);</variant>
<variant>public float getVol(float x);</variant>
<variant>private int getArea();</variant>

<question31>instanceof операторын қандай айнымалылармен қолдануға болады?</question31>
<variantright>тек сілтемелі айнымалылармен</variantright>
<variant>тек примитивті айнымалылармен</variant>
<variant>сілтемелі және примитивті типтермен</variant>
<variant>бүтінсандық типтермен</variant>
<variant>жолдық және символдық типтермен</variant>

<question32>hashCode(), equals() және toString() әдістерінің ену модификаторлары?</question32>
<variantright>public</variantright>
<variant>protected</variant>
<variant>private</variant>
<variant>static</variant>
<variant>void</variant>

<question33>int[] a = new int[15]; Қай тұжырым жұрыс?</question33>
<variantright>a.length равно 15</variantright>
<variant>a[14] не определено</variant>
<variant>a[14] равно 0</variant>
<variant>a[0] равно null</variant>
<variant>a[0] равно 0</variant>

<question34>Java-ға бағдарлама қай әдіс арқылы жүктеледі?</question34>
<variantright>main әдісі</variantright>
<variant>кез-келген, жоба баптауында көрсетілген әдіс</variant>
<variant>бағдарламаны қосу компилияциялау арқылы орындалады</variant>
<variant>static әдісі</variant>
<variant>void әдісі</variant>

<question35>Келесі код нені шығарады? double x = 95 / 10;</question35>
<variantright>9.5</variantright>
<variant>9</variant>
<variant>10</variant>
<variant>90</variant>
<variant>95</variant>

<question36>Java қандай мақсаттарда қолданылады?</question36>
<variantright>қосымшаларды әзірлеу үшін</variantright>
<variant>логикалық өрнектер үшін</variant>
<variant>нейрондық желілер үшін</variant>
<variant>графиктер құру үшін</variant>
<variant>математикалық модельдеу үшін</variant>

<question37>Массивтің дұрыс жариялануы:</question37>
<variantright>int[] a = new int[] {1, 2, 3, 4, 5};</variantright>
<variant>int a = new int[] {1, 2, 3, 4, 5};</variant>
<variant>int[] a = new int {1, 2, 3, 4, 5};</variant>
<variant>int a[] = 1, 2, 3, 4, 5;</variant>
<variant>int[] a = int[] {1, 2, 3, 4, 5};</variant>

<question38>Әдіс аргументі дегеніміз не?</question38>
<variantright>әдіс жұмысына қатысу үшін әдіске берілетін мән немесе айнымалы</variantright>
<variant>әдістің нәтижесі жазылатын айнымалы</variant>
<variant>"return" кілт сөзінен кейін көрсетілген мән</variant>
<variant>әдіс жұмысына қатысатын кез келген айнымалы</variant>
<variant>әдіс денесінде жарияланған айнымалы немесе бағдарламада анықталған әдіс</variant>

<question39>Тернарнық оператор - бұл:</question39>
<variantright>? :</variantright>
<variant>&&</variant>
<variant>!</variant>
<variant>^</variant>
<variant>||</variant>

<question40>ОББ дегеніміз не?</question40>
<variantright>объектіге-бағытталған бағдарламалау-бұл бағдарламаны объектілер жиынтығы ретінде ұсынуға негізделген бағдарламалау әдістемесі, олардың әрқайсысы белгілі бір класстың данасы болып табылады, ал класстар мұрагерлік иерархиясын құрайды</variantright>
<variant>объектіге-бағытталған бағдарламалау-бұл жоғары деңгейлі ұғымдарды қолданатын және компьютердің жад ұяшықтарымен тікелей жұмыс істемейтін, Ассемблерден айырмашылығы бар бағдарламалаудың жиі қолданылатын кез-келген түрі</variant>
<variant>объектіге-бағытталған бағдарламалау-бұл әдемі түсінік. Егер сіз бұл туралы ойласаңыз, ол қосымша семантикалық жүктемені көтермейді, тек бағдарламашылар аббревиатураларды жақсы көреді, сондықтан олардың білім салалары өте жалғыз бағдарламашы сияқты күрделі көрінеді</variant>
<variant>объектіге-бағытталған бағдарламалау-бұл бағдарламалау түрі. Ойланып қарайтын болсақ, онда қосымша мағыналық жүктеме жоқ, тек бағдарламашылар қысқартылған сөздерді жақсы көреді, со арқылы олардың білім саласы күрделірек болып келеді</variant>
<variant>объектіге-бағытталған бағдарламалау-бұл жоғары деңгейлі деген түсінік қолданылатын, бағдарламалаудың кез-келген түрі</variant>

<question41>Код ішінде класс қалай жарияланады?</question41>
<variantright>class MyClass {}</variantright>
<variant>new class MyClass {}</variant>
<variant>select * from class MyClass {}</variant>
<variant>MyClass class {}</variant>
<variant>MyClass extends class {}</variant>

<question42>NEW операторы не үшін қолданылады?</question42>
<variantright>класс экземплярын құру үшін</variantright>
<variant>жаңа айнымалы құру үшін</variant>
<variant>жаңа класс жариялау үшін</variant>
<variant>бұл OLD операторының антагонисті</variant>
<variant>класс экземплярын жариялау үшін</variant>

<question43>Класстың static-әдісінің қарапайым класс әдісінен айырмашылығы:</question43>
<variantright>класстың әдеттегі әдісі класс объектісінің атынан жұмыс істейді, ал static-бүкіл класстың әдісі</variantright>
<variant>әдеттегі класс әдісінің мінез-құлқын мұрагер класста өзгертуге болады, ал статикалық әдіс мінезқұлқын өзгерту мүмкін емес</variant>
<variant>кәдімгі класс әдісін қайта анықтауға болады, ал статикалық әдіс мүмкін емес</variant>
<variant>статикалық-класс әдісін тек класс ішінде шақыруға болады, ал әдеттегі әдіс кодтың кез-келген бөлігінде шақырылады</variant>
<variant>static-класс әдісі алдында әдеттегі класс әдісін қайта анықтау керек</variant>

<question44>Қарапайым класс әдісін static-әдіс ішінде қалай шақыруға болады?</question44>
<variantright>болмайды, static-әдіс класс объектісімен жұмыс істемейді</variantright>
<variant>болады, оның алдында қарапайым класс әдісін қайта жүктеу керек</variant>
<variant>болады, оның алдында қарапайым класс әдісін қайта анықтау керек</variant>
<variant>болады, қосымша ешнәрсе жасаудың қажеті жоқ</variant>
<variant>класс экземпляры арқылы шақыру керек</variant>

<question45>«This»кілттік сөзі не үшін қолданылады?</question45>
<variantright>класстың ішіндегі ағымдағы класс объектісіне көрсеткіш</variantright>
<variant>класстың қайта анықталған әдісіне көрсеткіш</variant>
<variant>бұл кілт сөз емес</variant>
<variant>тұрақты әдіс ішіндегі әдеттегі әдісті шақыруға арналған кілт сөз</variant>
<variant>бұл кілт сөз</variant>

<question46>Айнымалы мәнін бір бірлікке арттыратын арттыру операторы қалай аталады?</question46>
<variantright>инкремент</variantright>
<variant>декремент</variant>
<variant>ондай оператор жоқ</variant>
<variant>амперсенд</variant>
<variant>шектеу</variant>

<question47>«public» кілттік сөзі не болып табылады?</question47>
<variantright>ену модификаторы</variantright>
<variant>литерал</variant>
<variant>оператор</variant>
<variant>деректер типі</variant>
<variant>айнымалы типі</variant>

<question48>Java бағдарламаларында шамадан тыс жүктеме класстың қандай компоненттеріне қолданылады?</question48>
<variantright>класс конструкторлары мен әдістеріне</variantright>
<variant>класс конструкторлары мен айнымалыларына</variant>
<variant>тек класс әдістеріне</variant>
<variant>тек класс конструкторларына</variant>
<variant>тек айнымалыларға</variant>

<question49>Дұрыс тұжырымды таңдаңыз:</question49>
<variantright>Мұрагер класста тек private final static модификаторларымен белгіленбеген жоғарғы класстың әдістері ғана қайта анықталуы мүмкін</variantright>
<variant>Мұрагер класста жоғарғы класстың кез-келген әдісі қайта анықталуы мүмкін</variant>
<variant>Мұрагер класста тек final static protected модификаторларымен белгіленбеген жоғарғы класстың әдістері ғана қайта анықталуы мүмкін</variant>
<variant>Мұрагер класста тек private модификаторымен белгіленбеген жоғарғы класстың әдістері ғана қайта анықталуы мүмкін</variant>
<variant>Мұрагер класста тек private static модификаторларымен жоғарғы класстың әдістері ғана қайта анықталуы мүмкін</variant>

<question50>Әдістердің қайсысы жоғарғы класстың қайта анықталған әдісі боып табылады public int[] inverse (int ar[], int siz)?</question50>
<variantright>public int[] inverse (int arr[], int arSiz</variantright>
<variant>public int inverse (int a, int</variant>
<variant>public int inverse (double a[], double siz</variant>
<variant>public int[] method (int ar[], int siz</variant>
<variant>protected int[] inverse (int arr[], int arSiz</variant>

<question51>Нұсқаулық пакет кластарын сақтау үшін қандай атаулар кеңістігін анықтайды: package mypackage.users.administrators.files;?</question51>
<variantright>mypackage.users.administrators.files</variantright>
<variant>files</variant>
<variant>mypackage.files</variant>
<variant>users.administrators.files</variant>
<variant>administrators.files</variant>

<question52>Компьютердің файлдық жүйесінде пакет иерархиясының бірнеше түбірлік каталогтары қандай ортада сақталады?</question52>
<variantright>CLASSPATH</variantright>
<variant>PACKAGEROOT</variant>
<variant>ROOT</variant>
<variant>CLASSROOT</variant>
<variant>PACKAGEPATH</variant>

<question53>А класы В класын newpack пакетінен алады. Бағдарлама фрагментінің 1 жолын қандай кодпен толықтыру қажет?</question53>
<variantright>import java.newpack.B;</variantright>
<variant>import java.newpack.A;</variant>
<variant>class A extends java.newpack.* {</variant>
<variant>class A extends java.newpack.B {</variant>
<variant>class A extends B.newpack.java {</variant>

<question54>Java-дағы ерекшеліктердің барлық түрлері қандай кіріктірілген класстың ішкі класстары болып табылады?</question54>
<variantright>Throwable</variantright>
<variant>Exception</variant>
<variant>RuntimeException</variant>
<variant>Error</variant>
<variant>Exceptions</variant>

<question55>Throws кілт сөзінен кейін қандай ерекшеліктер типі көрсетіледі?</question55>
<variantright>әдіс тудыратын, бірақ өңдемейтін ерекшеліктер типтері</variantright>
<variant>әдіс өңдейтін ерекшеліктер типтері</variant>
<variant>әдіс тудыратын және өңдейтін ерекше жағдайлар типтері</variant>
<variant>Виртуалды машина жасаған ерекшеліктер типтері</variant>
<variant>жоғарыда келтірілген мәлімдемелер дұрыс емес</variant>

<question56>Пайдаланушының бағдарламалары ұстап қалуы керек ерекше жағдайларды өңдеу үшін қандай класс қолданылады?</question56>
<variantright>Exception</variantright>
<variant>RuntimeException</variant>
<variant>Throwable</variant>
<variant>Error</variant>
<variant>Exceptions</variant>

<question57>А класында кейбір әдістер static модификаторымен жарияланады. Төмендегі мәлімдемелердің қайсысы дұрыс емес?</question57>
<variantright>бұл әдістерді тек А класының даналарымен шақыруға болады</variantright>
<variant>бұл әдістер тек басқа статикалық әдістерді тудыруы мүмкін</variant>
<variant>бұл әдістер тек статикалық деректерге жүгінуі керек</variant>
<variant>бұл әдістерді кез-келген А класының экзмеплярлары жасалғаннан кейін шақыруға болады</variant>
<variant>жоғарыда аталған барлық мәлімдемелер дұрыс</variant>

<question58>Қандай да бір пакет импортталды. Кодта қандай қолжетімділік модификаторы бар класстар қол жетімді болады?</question58>
<variantright>public</variantright>
<variant>ешқандай модификатормен белгіленбеген</variant>
<variant>кез-келген</variant>
<variant>private</variant>
<variant>protected</variant>

<question59>Java атқарушы жүйесі жұмыс уақытының ортасына қатысты қателерді көрсету үшін қай классты қолданады?</question59>
<variantright>RuntimeException</variantright>
<variant>Exception</variant>
<variant>Throwable</variant>
<variant>private</variant>
<variant>Exceptions</variant>

<question60>Қай мәлімдеме catch блогына қатысты дұрыс?</question60>
<variantright>catch блогында ол ұстай алатын ерекше жағдайлар үшін өңдегіш сипатталған</variantright>
<variant>бір try блогына тек бір catch блогы жауап бере алады</variant>
<variant>алдымен ерекшелік иерархиясының жоғарғы бөлігіне арналған catch блогы болуы керек</variant>
<variant>бірнеше catch блоктары бір-біріне салынуы керек</variant>
<variant>кірістірілген try-блокқа жауап беретін барлық catch блоктары иерархия бойынша ең жоғарғысынан тыс сипатталады</variant>

<question61>Берілген кодтың нәтижесі қандай? public static void main(String[] args) {int x =125121148; System.out.println(++x);}</question61>
<variantright>125121149</variantright>
<variant>125121148</variant>
<variant>компиляция кезіндегі қателік</variant>
<variant>орындалу кезіндегі қателік</variant>
<variant>559849847</variant>

<question62>Берілген кодтың нәтижесі қандай? public static void main(String[] args) {double a = 5; System.out.println(a/2);}</question62>
<variantright>2.5</variantright>
<variant>unhandled exception</variant>
<variant>2</variant>
<variant>1</variant>
<variant>5</variant>

<question63>Берілген кодтың нәтижесі қандай? public static void main(String[] args) {double a = 5; System.out.println(a%2);}</question63>
<variantright>1</variantright>
<variant>2.5</variant>
<variant>2</variant>
<variant>5</variant>
<variant>unhandled exception</variant>

<question64>Кодтың берілген фрагменті жұмысының нәтижесі қандай болады?  for (;;) { }</question64>
<variantright>шексіз цикл</variantright>
<variant>орындалу кезеңіндегі қателік</variant>
<variant>код ешқашан орындалмайды</variant>
<variant>компиляция кезеңіндегі қателік</variant>
<variant>unhandled exception</variant>

<question65>Берілген кодтың нәтижесі қандай? public static void main(String[] args) { System.out.println(1.0/0);}</question65>
<variantright>Infinity</variantright>
<variant>код орындауға жіберілмейді</variant>
<variant>ArithmeticException: / by zero</variant>
<variant>NAN</variant>
<variant>unhandled exception</variant>

<question66>Төмендегілердің қайсысы қарапайым деректер типі болып табылады?</question66>
<variantright>int, char</variantright>
<variant>String</variant>
<variant>Boolean</variant>
<variant>int[]</variant>
<variant>integer</variant>

<question67>Берілген кодтың нәтижесі қандай? public static void main(String[] args) {String text = new String("Hello"); String test2 = new String("hello"); System.out.println(test==test2);}</question67>
<variantright>false</variantright>
<variant>ull</variant>
<variant>Hello</variant>
<variant>true</variant>
<variant>0</variant>

<question68>Берілген кодтың нәтижесі қандай? public static void main(String[] args) {int sum = 0; for (int i = 1; i <= 3; sum += i++); System.out.println(sum);}</question68>
<variantright>6</variantright>
<variant>5</variant>
<variant>3</variant>
<variant>compile error</variant>
<variant>false</variant>

<question69>Берілген кодтың нәтижесі қандай? public static void main(String[] args) {String[] array = new String[3];  System.out.println(array[2]);}</question69>
<variantright>null</variantright>
<variant>1</variant>
<variant>0</variant>
<variant>2</variant>
<variant>ArrayIndexOutOfBoundsException</variant>

<question70>Берілген кодтың нәтижесі қандай? public static void main(String[] args) {int a = 5; System.out.println(a + "2");}</question70>
<variantright>52</variantright>
<variant>7</variant>
<variant>5+2</variant>
<variant>8</variant>
<variant>unhandled exception</variant>

<question71>Берілген кодтың нәтижесі қандай? public static void main(String[] args) {String s = "Hello"; System.out.println(s + (5 + 4));}</question71>
<variantright>Hello9</variantright>
<variant>Hello 5 4</variant>
<variant>Hello 54</variant>
<variant>Hello9</variant>
<variant>unhandled exception</variant>

<question72>Берілген кодтың нәтижесі қандай? public static void main(String[] args) {double a = 5;  System.out.println(int(a/2));}</question72>
<variantright>2</variantright>
<variant>2.5</variant>
<variant>1</variant>
<variant>unhandled exception</variant>
<variant>5</variant>

<question73>Берілген кодтың нәтижесі қандай? public static void main(String[] args) {int[] array = new int[]{15, 5, -8, -6, 0, 7};   System.out.println(array[array.length - 1]);}</question73>
<variantright>5</variantright>
<variant>6</variant>
<variant>7</variant>
<variant>0</variant>
<variant>4</variant>

<question74>Айнымалы барлық жерде көрінуі үшін қандай қолжетімділік модификаторын қолдану керек?</question74>
<variantright>public</variantright>
<variant>private</variant>
<variant>default</variant>
<variant>protected</variant>
<variant>static</variant>

<question75>Java-да бағдарламаны іске қосудың қандай әдісі бар?</question75>
<variantright>кез-келген класстың  main әдісінен</variantright>
<variant>алдымен, класста не жазылды және оның ішінде қандай әдіс бар сол арқылы</variant>
<variant>бағдарламаны іске қосу компиляция арқылы жүргізіледі</variant>
<variant>кез-келген, оны жоба баптауларында беруге болады</variant>
<variant>негізгі әдіс жоқ</variant>

<question76>Берілген кодтың қатесін табыңыз: int a, b; System.out.print("Введите первое число: "); Scanner num = new Scanner(System.in); a = num.nextFloat();</question76>
<variantright>nextFloat орнына nextInt қолдану қажет</variantright>
<variant>қате жоқ</variant>
<variant>System.in орнына System.out қолдану қажет</variant>
<variant>int a, b – жеке жазу керек</variant>
<variant>a мен bжеке жазылу қажет</variant>

<question77>Функция неше параметр қабылдай алады?</question77>
<variantright>шексіз</variantright>
<variant>1 ден артық емес</variant>
<variant>3 тен артық емес</variant>
<variant>25 тен артық емес</variant>
<variant>2 ден артық емес</variant>

<question78>Қай қатарда шығару дұрыс жазылған?</question78>
<variantright>System.out.print("Hello World!");</variantright>
<variant>System.out.println = "Hello World!";</variant>
<variant>print("Hello World!");</variant>
<variant>System.out("Hello World!");</variant>
<variant>System.print("Hello World!");</variant>

<question79>Қарапайым айнымалы қай жерде дұрыс құрылған?</question79>
<variantright>float x = 23.3;</variantright>
<variant>bool isDone = true;</variant>
<variant>char str = 'ab';</variant>
<variant>int[] a;</variant>
<variant>byte x = 100000;</variant>

<question80>Пайдаланушыдан мәліметті алуға жауапты класс қайсы?</question80>
<variantright>Scanner</variantright>
<variant>Out</variant>
<variant>Line</variant>
<variant>System</variant>
<variant>Get</variant>

<question81>Дұрыс жарияланған массивті көрсетіңіз:</question81>
<variantright>int[] a = new int[] {1, 2, 3, 4, 5};</variantright>
<variant>int[] a = int[] {1, 2, 3, 4, 5};</variant>
<variant>int a[] = 1, 2, 3, 4, 5;</variant>
<variant>int[] a = new int {1, 2, 3, 4, 5};</variant>
<variant>int a = new int[] {1, 2, 3, 4, 5};</variant>

<question82>Берілген кодтың нәтижесі қандай? public static void main(String[] args) {byte x = 127;x += 2; System.out.println(x);}</question82>
<variantright>129</variantright>
<variant>-127</variant>
<variant>runtime error</variant>
<variant>compile error</variant>
<variant>458</variant>

<question83>Массивтің соңғы элементінің индексі қалай көрсетіледі?</question83>
<variantright>array.length-1;</variantright>
<variant>array.length;</variant>
<variant>array.size;</variant>
<variant>array.size-1;</variant>
<variant>array</variant>

<question84>Берілген кодтың нәтижесі қандай? public static void main(String[] args) {int[] array = new int[3]; System.out.println(array[2]);}</question84>
<variantright>0</variantright>
<variant>2</variant>
<variant>1</variant>
<variant>BoundsException</variant>
<variant>null</variant>

<question85>Айнымалы тек ағымдағы класста көрінуі үшін, қандай қолжетімділік модификаторын қолдану қажет?</question85>
<variantright>private</variantright>
<variant>protected</variant>
<variant>public</variant>
<variant>default</variant>
<variant>void</variant>

<question86>Келесілердің қайсысы көпшілікке қолжетімділік модификаторына қатысты?</question86>
<variantright>жалпыға қолжетімді деп жарияланған айнымалылар, әдістер мен конструкторлар кез-келген классқа қолжетімді болуы мүмкін</variantright>
<variant>жалпыға қолжетімді деп жарияланған айнымалылар, әдістер мен конструкторлар сол пакеттегі кез-келген классқа қолжетімді болуы мүмкін</variant>
<variant>суперклассқа жалпыға қолжетімді деп жарияланған айнымалылар, әдістер мен конструкторлар тек оның ішкі класына қолжетімді болуы мүмкін</variant>
<variant>тек оның ішкі класына қолжетімді болуы мүмкін</variant>
<variant>сол пакеттегі және ішкі классқа орналасқан кез-келген классқа қолжетімді болуы мүмкін</variant>

<question87>Үнсіз келісім бойынша int айнымалысының мәні қандай?</question87>
<variantright>0</variantright>
<variant>0,0</variant>
<variant>анықталмаған</variant>
<variant>1</variant>
<variant>3</variant>

<question88>Жолдық айнымалы (String) үшін үнсіз келісім бойынша қандай мән беріледі?</question88>
<variantright>null</variantright>
<variant>‘’</variant>
<variant>“”</variant>
<variant>1</variant>
<variant>0</variant>

<question89>Төмендегілердің қайсысы қорғалған қолжетімділік модификаторына қатысты орындалады?</question89>
<variantright>қорғалған деп жарияланған айнымалылар, әдістер мен конструкторлар сол пакеттегі кез-келген классқа қолжетімді болуы мүмкін</variantright>
<variant>суперкласспен қорғалған деп жарияланған айнымалылар, әдістер мен конструкторлар тек оның еншілес класына қолжетімді</variant>
<variant>қорғалған деп жарияланған айнымалылар, әдістер мен конструкторлар кез-келген классқа қолжетімді</variant>
<variant>айнымалыларды класста қолдануға болмайды</variant>
<variant>айнымалыларды әдіске қолдануға болмайды</variant>

<question90>Java тілінде «Hello World» сөзін шығаруға арналған дұрыс жазылған синтаксисті көрсетіңіз?</question90>
<variantright>System.out.println("Hello World");</variantright>
<variant>Console.WriteLine("Hello World");</variant>
<variant>echo("Hello World");</variant>
<variant>print ("Hello World");</variant>
<variant>WriteLine("Hello World");</variant>

<question91>Java кодына КОММЕНТАРИЙ қалай қойылады?</question91>
<variantright>// Бұл комментарий</variantright>
<variant>/* Бұл комментарий</variant>
<variant>## Бұл комментарий</variant>
<variant># Бұл комментарий</variant>
<variant>** Бұл комментарий</variant>

<question92>Қалқымалы үтірмен 2.8 айнымалысын қалай жазуға болады?</question92>
<variantright>float x = 2.8f;</variantright>
<variant>byte x = 2.8f</variant>
<variant>int x = 2.8f;</variant>
<variant>x = 2.8f;</variant>
<variant>char=2;</variant>

<question93>Жолдың ұзындығын анықтау үшін қандай әдіс қолданылады?</question93>
<variantright>length()</variantright>
<variant>len()</variant>
<variant>getSize()</variant>
<variant>getLength()</variant>
<variant>get()</variant>

<question94>Жолды бас әріптерге ауыстыру үшін қандай әдіс қолданылады?</question94>
<variantright>toUpperCase()</variantright>
<variant>tuc()upper</variant>
<variant>Case()</variant>
<variant>touppercase()</variant>
<variant>toup()</variant>

<question95>Java-да әдіс қалай шақырылады?</question95>
<variantright>methodName();</variantright>
<variant>methodName[];</variant>
<variant>methodName;</variant>
<variant>(methodName);</variant>
<variant>(methodName);</variant>

<question96>Байттық айнымалы өлшемі қандай?</question96>
<variantright>8 bit</variantright>
<variant>32 bit</variant>
<variant>64 bit</variant>
<variant>48 bit</variant>
<variant>68 bit</variant>

<question97>Ағымдағы ағын() дегеніміз не?</question97>
<variantright>бұл ағымдағы ағынға сілтеме алу үшін қолданылатын жалпыға қолжетімді статикалық ағын әдісі</variantright>
<variant>бұл ағындардың санын алу үшін қолданылатын ағын данасының әдісі</variant>
<variant>бұл ағымдағы ағынға сілтеме алу үшін қолданылатын объектінің ашық статикалық әдісі</variant>
<variant>бұл ағындардың санын алу үшін қолданылатын объект данасының әдісі</variant>
<variant>ағымдағы ағынға сілтеме алу үшін пайдаланылады</variant>

<question98>Экземпляр айнымалысы деген не?</question98>
<variantright>бұл класс ішіндегі айнымалылар, бірақ кез-келген әдіспен тыс</variantright>
<variant>бұл әдістер, конструкторлар немесе блоктар ішінде анықталған айнымалылар</variant>
<variant>бұл класс ішіндегі статикалық айнымалылар, бірақ кез-келген әдіспен тыс</variant>
<variant>бұл объект данасының әдісі</variant>
<variant>бұл объектінің ашық статикалық әдісі</variant>

<question99>Инкапсуляция дегеніміз не?</question99>
<variantright>Инкапсуляция - жалпыға қолжетімді әдістер арқылы өрістерге қолжеткізуге мүмкіндік беретін әдіс</variantright>
<variant>Инкапсуляция - бұл объектінің көптеген формаларды қабылдау қабілеті</variant>
<variant>Инкапсуляция - бір типтегі әртүрлі әдістерді анықтау әдісі немесе блоктар ішінде анықталған айнымалылар</variant>
<variant>Инкапсуляция – бұл көптеген формалар</variant>
<variant>Инкапсуляция - анықтау әдісі</variant>

<question100>JIT-компилятор дегеніміз не?</question100>
<variantright>JIT компьютерлік бағдарламалардың өнімділігін арттырады</variantright>
<variant>қосымшаларды әзірлеуге арналған фреймворк</variant>
<variant>Java-бағдарламаларды орындайтын  Java виртуалды машинасын іске қосу</variant>
<variant>виртуалды машинаны іске қосу</variant>
<variant>Java-бағдарлама орындайтын қосымшаларды әзірлеуге арналған фреймворк</variant>

<question101>Аталған құрылымдардың қайсысында белгілі бір класс әдісін шақыру бар екенін көрсетіңіз?</question101>
<variantright>s.square(5, 12);</variantright>
<variant>s.square = 55;</variant>
<variant>int sq = s.square;</variant>
<variant>println(s.square);</variant>
<variant>int s.square;</variant>

<question102>Аталған класс тақырыптарының қайсысы мүмкін болады?</question102>
<variantright>final class A {</variantright>
<variant>class A extends B, C {</variant>
<variant>abstract final class A {</variant>
<variant>abstract final class A implements B {</variant>
<variant>implements final class A {</variant>

<question103>Аталған класс тақырыптарының қайсысы мүмкін болады?</question103>
<variantright>class A implements B, C {</variantright>
<variant>implements final class A {</variant>
<variant>class A extends B, C {</variant>
<variant>abstract final class A {</variant>
<variant>abstract final class A implements B {</variant>

<question104>Java бағдарламасында қандай әдістер шамадан тыс жүктелген?</question104>
<variantright>бір атауы бар, бірақ бір типтегі параметрлердің саны әртүрлі әдістер</variantright>
<variant>Әртүрлі атаулары бар, бірақ саны мен параметрлері бірдей әдістер</variant>
<variant>бір атауы және бір типті параметрлердің саны бірдей әдістер</variant>
<variant>әртүрлі атаулары бар, бірақ параметрлері сәйкес болып келетін әдістер</variant>
<variant>жоғарыда көрсетілген әдістер емес</variant>

<question105>Аталған класс тақырыптарының қайсысы мүмкін емес?</question105>
<variantright>abstract final class A extends B</variantright>
<variant>final class A implements B, C</variant>
<variant>class A implements B</variant>
<variant>abstract class A implements B, C</variant>
<variant>final class A</variant>

<question106>Аталған құрылымдардың қайсысында белгілі бір класс әдісін шақыру бар екенін көрсетіңіз?</question106>
<variantright>double r = Math.sqrt(s/Math.PI);</variantright>
<variant>double l = 2 * Math.PI * r;</variant>
<variant>double s = Math.PI * r * r;</variant>
<variant>double r = l / (2 * Math.PI);</variant>
<variant>ни в одном из вышеперечисленных</variant>

<question107>Java атқарушы жүйесі жұмыс уақытының ортасына қатысты қателерді көрсету үшін қай классты қолданады?</question107>
<variantright>Error</variantright>
<variant>Exception</variant>
<variant>Throwable</variant>
<variant>private</variant>
<variant>Exceptions</variant>

<question108>Java бағдарламаларында класс әдістері тақырыптарының қайсысы жарамсыз?</question108>
<variantright>protected final Method (int a, float w)</variantright>
<variant>public void method (int a, float w)</variant>
<variant>private Method (int a, float w)</variant>
<variant>public void method ()</variant>
<variant>protected int method ()</variant>

<question109>Компиляторға жасалған class файлдарын қайда жазу керектігін көрсету үшін қандай кілт қолданылады?</question109>
<variantright>-d</variantright>
<variant>-cp</variant>
<variant>-sourcepath</variant>
<variant>-cpp</variant>
<variant>-com</variant>

<question110>Java қосымшасын командалық жолдан іске қосу үшін қандай команда қолданылады?</question110>
<variantright>javac</variantright>
<variant>java</variant>
<variant>com</variant>
<variant>run</variant>
<variant>play</variant>

<question111>Төмендегілердің қайсысы белгілі бір типтегі барлық объектілерге ортақ айнымалылар мен әдістерді анықтайтын үлгі ретінде қарастырылады?</question111>
<variantright>класс</variantright>
<variant>объект</variant>
<variant>метод</variant>
<variant>литерал</variant>
<variant>форма</variant>

<question112>Санау тұрақтыларын қалай салыстыруға болады?</question112>
<variantright>equals() әдісін қолдану арқылы</variantright>
<variant>main() әдісін қолдану арқылы</variant>
<variant>meth()әдісін қолдану арқылы</variant>
<variant>setab()әдісін қолдану арқылы</variant>
<variant>get()әдісін қолдану арқылы</variant>

<question113>Бүтін санды деректердің типтері:</question113>
<variantright>byte, short, int, long</variantright>
<variant>float и double</variant>
<variant>float, double, long</variant>
<variant>char, string</variant>
<variant>byte, short, string, float</variant>

<question114>Нақты сандармен жұмыс істеуде қолданылатын типтер:</question114>
<variantright>float, double</variantright>
<variant>float, double</variant>
<variant>float, double, long</variant>
<variant>char, string</variant>
<variant>byte, short, string, float</variant>

<question115>Бір өлшемді массивті жариялау синтаксисі:</question115>
<variantright>тип[] имя=new тип[размер];</variantright>
<variant>nums=new int[20];</variant>
<variant>тип[][] имя=new тип[размер_1][размер_2];</variant>
<variant>тип[][] имя=new тип[размер];</variant>
<variant>тип[] имя=new тип[размер_1][размер_2];</variant>

<question116>Екі өлшемді массивті жариялау синтаксисі:</question116>
<variantright>тип[][] имя=new тип[размер_1][размер_2];</variantright>
<variant>тип[] имя=new тип[размер];</variant>
<variant>nums=new int[20];</variant>
<variant>тип[][] имя=new тип[размер];</variant>
<variant>тип[] имя=new тип[размер_1][размер_2];</variant>

<question117>Объект құру кезінде автоматты түрде шақырылатын әдіс:</question117>
<variantright>конструктор</variantright>
<variant>деструктор</variant>
<variant>идентификатор</variant>
<variant>модификатор</variant>
<variant>поток</variant>

<question118>Енгізу ағынын сипаттайтын байт ағынының абстрактілі класы:</question118>
<variantright>InputStream</variantright>
<variant>OutputStream</variant>
<variant>PrintStream</variant>
<variant>FileInputStream</variant>
<variant>FileOutputStream</variant>

<question119>Шығару ағынын сипаттайтын байт ағынының абстрактілі класы:</question119>
<variantright>OutputStream</variantright>
<variant>InputStream</variant>
<variant>PrintStream</variant>
<variant>FileInputStream</variant>
<variant>FileOutputStream</variant>

<question120>print() және println() әдістерін қолдайтын шығарудың байттық ағынына жататын класс:</question120>
<variantright>PrintStream</variantright>
<variant>InputStream</variant>
<variant>OutputStream</variant>
<variant>FileInputStream</variant>
<variant>FileOutputStream</variant>

<question121>Scanner класының nextLine() әдісі:</question121>
<variantright>мәтіндік жолды оқу</variantright>
<variant>бір сөзді оқу</variant>
<variant>бүтін санды оқу</variant>
<variant>нақты санды оқу</variant>
<variant>бос жолды оқу</variant>

<question122>Scanner класының next() әдісі:</question122>
<variantright>бір сөзді оқу</variantright>
<variant>мәтіндік жолды оқу</variant>
<variant>бүтін санды оқу</variant>
<variant>нақты санды оқу</variant>
<variant>бос жолды оқу</variant>

<question123>Scanner класының nextInt() әдісі:</question123>
<variantright>бүтін санды оқу</variantright>
<variant>мәтіндік жолды оқу</variant>
<variant>бір сөзді оқу</variant>
<variant>нақты санды оқу</variant>
<variant>бос жолды оқу</variant>

<question124>Scanner класының nextDouble() әдісі:</question124>
<variantright>нақты санды оқу</variantright>
<variant>мәтіндік жолды оқу</variant>
<variant>бүтін санды оқу</variant>
<variant>бір сөзді оқу</variant>
<variant>бос жолды оқу</variant>

<question125>Графикалық интерфейсті құру үшін қолданылатын кітапхана:</question125>
<variantright>AWT және Swing</variantright>
<variant>JDK және JRE</variant>
<variant>Scanner</variant>
<variant>javax</variant>
<variant>GUI және IDE</variant>

<question126>AWT кітапханасын қолдану үшін қосылатын пакет:</question126>
<variantright>java.awt</variantright>
<variant>Scanner</variant>
<variant>javax.swing (библиотека Swing)</variant>
<variant>javax</variant>
<variant>javaс</variant>

<question127>ActionEvent оқиғасының класы келесі компоненттер класында пайда болады:</question127>
<variantright>Button, List және TextField</variantright>
<variant>Checkbox, Choice және List</variant>
<variant>TextComponent, TextArea және TextField</variant>
<variant>Dialog, FileDialog, Frame және Window</variant>
<variant>барлық компоненттерде</variant>

<question128>AdjustmentEvent оқиғасының класы келесі компоненттер класында пайда болады:</question128>
<variantright>Scrollbar</variantright>
<variant>Checkbox, Choice және List</variant>
<variant>TextComponent, TextArea және TextField</variant>
<variant>Dialog, FileDialog, Frame және Window</variant>
<variant>барлық компоненттерде</variant>

<question129>ComponentEvent оқиғасының класы пайда болады:</question129>
<variantright>барлық компоненттерде</variantright>
<variant>Checkbox, Choice және List</variant>
<variant>TextComponent, TextArea және TextField</variant>
<variant>Dialog, FileDialog, Frame және Window</variant>
<variant>Frame, Panel, ScrollPane және Window</variant>

<question130>ItemEvent оқиғасының класы келесі компоненттер класында пайда болады:</question130>
<variantright>Checkbox, Choice және List</variantright>
<variant>Button, List және TextField</variant>
<variant>TextComponent, TextArea және TextField</variant>
<variant>Dialog, FileDialog, Frame және Window</variant>
<variant>барлық компоненттерде</variant>

<question131>TextEvent оқиғасының класы келесі компоненттер класында пайда болады:</question131>
<variantright>TextComponent, TextArea және TextField</variantright>
<variant>Checkbox, Choice и List</variant>
<variant>Button, List және TextField</variant>
<variant>Container, Dialog, FileDialog, Frame, Panel, ScrollPane және Window</variant>
<variant>Dialog, FileDialog, Frame және Window</variant>

<question132>ContainerEvent оқиғасының класы келесі компоненттер класында пайда болады:</question132>
<variantright>Container, Dialog, Frame, Panel, ScrollPane и Window</variantright>
<variant>TextComponent, TextArea, Button, List, Scrollbar және TextField</variant>
<variant>Button, List және TextField</variant>
<variant>TextComponent, TextArea және TextField</variant>
<variant>Dialog, FileDialog, Frame және Window</variant>

<question133>FocusEvent оқиғасының класы пайда болады:</question133>
<variantright>барлық компоненттерде</variantright>
<variant>Button, List және TextField</variant>
<variant>TextComponent, TextArea және TextField</variant>
<variant>Dialog, FileDialog, Frame және Window</variant>
<variant>Checkbox, Choice және List</variant>

<question134>InputEvent оқиғасының класы пайда болады:</question134>
<variantright>компоненттердің енгізу операциясында</variantright>
<variant>негізгі компоненттерде</variant>
<variant>TextComponent, TextArea және TextField</variant>
<variant>Dialog, FileDialog, Frame және Window</variant>
<variant>Checkbox, Choice және List</variant>

<question135>PaintEvent оқиғасының класы пайда болады:</question135>
<variantright>негізгі компоненттерде</variantright>
<variant>Button, List және TextField</variant>
<variant>TextComponent, TextArea және TextField</variant>
<variant>Dialog, FileDialog, Frame және Window</variant>
<variant>Checkbox, Choice және List</variant>

<question136>WindowEvent оқиғасының класы келесі компоненттер класында пайда болады:</question136>
<variantright>Dialog, FileDialog, Frame және Window</variantright>
<variant>Button, List және TextField</variant>
<variant>TextComponent, TextArea және TextField</variant>
<variant>Dialog, FileDialog, Frame және Window</variant>
<variant>Checkbox, Choice және List</variant>

<question137>KeyEvent оқиғасының класы пайда болады:</question137>
<variantright>барлық компоненттерде</variantright>
<variant>Button, List және TextField</variant>
<variant>TextComponent, TextArea және TextField</variant>
<variant>Dialog, FileDialog, Frame және Window</variant>
<variant>Checkbox, Choice және List</variant>

<question138>MouseEvent оқиғасының класы пайда болады:</question138>
<variantright>барлық компоненттерде</variantright>
<variant>Button, List және TextField</variant>
<variant>TextComponent, TextArea және TextField</variant>
<variant>Dialog, FileDialog, Frame және Window</variant>
<variant>Checkbox, Choice және List</variant>

<question139>Java –да қолданылатын оқиғаларды өңдеудің ортақ схемасы:</question139>
<variantright>табыстау схемасы</variantright>
<variant>реляционды схема</variant>
<variant>кеңейтілімді схема</variant>
<variant>интеллектуалды схема</variant>
<variant>жалпыланған схема</variant>

<question140>Құрылатын терезе өлшемі берілетін команда:</question140>
<variantright>setSize(x,y)</variantright>
<variant>setTitle()</variant>
<variant>setDefault()</variant>
<variant>setLocation(a,b)</variant>
<variant>setDefault()</variant>

<question141>Экрандағы терезенің орны берілетін команда:</question141>
<variantright>setLocation()</variantright>
<variant>setTitle()</variant>
<variant>setVisible()</variant>
<variant>setSize()</variant>
<variant>setDefault()</variant>

<question142>AWT</question142>
<variantright>Abstract Window Toolkit</variantright>
<variant>Abstract Window Task</variant>
<variant>Area Window Toolkit</variant>
<variant>Arial Window Toolkit</variant>
<variant>Abstract Win Toolkit</variant>

<question143>Барлық индентификаторлар басталады:</question143>
<variantright>әріптен (A дан Z ке дейін немесе a дан z ке дейін), валюта символынан ($) немесе төменгі сызықтан (_)</variantright>
<variant>әріптен (A дан Z ке дейін немесе a дан z ке дейін), решетка символынан (#) немесе төменгі сызықтан (_)</variant>
<variant>әріптен (A дан Z ке дейін немесе a дан z ке дейін)</variant>
<variant>валюта символынан ($) немес сұрақ белгісінен (?)</variant>
<variant>решетка символынан (#)немесе төменгі сызықтан (_)</variant>

<question144>Құрылған терезе атауын беру командасы:</question144>
<variantright>setTitle()</variantright>
<variant>setLocation()</variant>
<variant>setVisible()</variant>
<variant>setSize()</variant>
<variant>setDefault()</variant>

<question145>Терезе орнын беру командасы:</question145>
<variantright>setLocation()</variantright>
<variant>setTitle()</variant>
<variant>setVisible()</variant>
<variant>setSize()</variant>
<variant>setDefault()</variant>

<question146>Құжаттық ақпаратқа арналған көпжолдық комментарий:</question146>
<variantright>/** комментарий */</variantright>
<variant>/* комментарий */</variant>
<variant>//комментарий</variant>
<variant>/комментарий/</variant>
<variant>{коментарий}</variant>

<question147>Көпжолдық комментарий:</question147>
<variantright>/*комментарий */</variantright>
<variant>/**комментарий */</variant>
<variant>//комментарий</variant>
<variant>/комментарий/</variant>
<variant>{коментарий}</variant>

<question148>Біржолдық комментарий:</question148>
<variantright>//комментарий</variantright>
<variant>/**комментарий */</variant>
<variant>/*комментарий */</variant>
<variant>/комментарий/</variant>
<variant>{коментарий}</variant>

<question149>Толық шартты нұсқаулықты шақыру синтаксисі if():</question149>
<variantright>if (шарт){инструкция_1} else {инструкция_2}</variantright>
<variant>if (шарт){инструкция_1} else {инструкция_1}</variant>
<variant>(шарт){инструкция_1}</variant>
<variant>if (шарт){инструкция_1} if {инструкция_1}</variant>
<variant>if else {инструкция_1}</variant>

<question150>for() циклдық операторын шақыру синтаксисі:</question150>
<variantright>for(инициализация; шарт; итерация){// цикл денесі}</variantright>
<variant>while (шарт){// цикл командасы }</variant>
<variant>do{// цикл командасы }while(шарт);</variant>
<variant>continue()</variant>
<variant>if (шарт) {инструкция_1} else {инструкция_2}</variant>

<question151>while() инструкциясын шақыру синтаксисі:</question151>
<variantright>while(шарт){// цикл командасы }</variantright>
<variant>for(инициализация; шарт; итерация){// цикл денесі}</variant>
<variant>do{// цикл командасы}while(шарт);</variant>
<variant>continue()</variant>
<variant>if (шарт) {инструкция_1} else {инструкция_2}</variant>

<question152>do-while() инструкциясын шақыру синтаксисі:</question152>
<variantright>do{// цикл командасы } while(шарт);</variantright>
<variant>for(инициализация; шарт; итерация){// цикл денесі}</variant>
<variant>for(инициализация; шарт; итерация){// цикл денесі}</variant>
<variant>continue()</variant>
<variant>if (шарт) {инструкция_1} else {инструкция_2}</variant>

<question153>Ағымдағы циклды аяқтау үшін цикл нұсқаулығында қолданылады:</question153>
<variantright>continue()</variantright>
<variant>while (условие){// команды цикла}</variant>
<variant>do{// команды цикла}while(условие);</variant>
<variant>for(инициализация; условие; итерация){//тело цикла}</variant>
<variant>if (условие) {инструкции_1} else {инструкции_2}</variant>

<question154>Java тілінде класс дегеніміз не?</question154>
<variantright>Java тіліндегі объектіге бағытталған бағдарламалаудың негізгі элементі</variantright>
<variant>бағдарламаның күрделілік деңгейі.</variant>
<variant>Барлық операторлар оларды пайдаланудың күрделілігінебайланысты класстарға бөлінеді</variant>
<variant>мүмкін болатын айнымалы атаулардың бірі</variant>
<variant>мұндай ұғым тек C++ тілінде, Java-да мұндай ұғым жоқ</variant>

<question155>Кодта класс қалай жарияланады?</question155>
<variantright>class MyClass {}</variantright>
<variant>new class MyClass {}</variant>
<variant>select * from class MyClass {}</variant>
<variant>MyClass extends class {}</variant>
<variant>MyClass class {}</variant>

<question156>Кілттік сөз extends нені білдіреді?</question156>
<variantright>бұл класс басқасынан мұра болып табылады</variantright>
<variant>бұл оның қасиеттерін кеңейтетін қосымша класс модулі</variant>
<variant>екі класс бірдей жұмыс істейді</variant>
<variant>бұл бағдарламаның ең үлкен класы</variant>
<variant>бұл оның қасиеттерін кеңейтетін класс</variant>

<question157>Java-да әдісті шамадан тыс жүктеу нені білдіреді (overload)?</question157>
<variantright>бірдей атаумен, бірақ әртүрлі параметрлер жиынтығымен бірнеше әдістер</variantright>
<variant>сыртқы классқа қатысты класс әдісінің мінез-құлқының өзгеруі</variant>
<variant>ішкі классқа қатысты класс әдісінің мінез-құлқының өзгеруі</variant>
<variant>бірдей әдіспен, әртүрлі параметрлер жиынтығымен бірнеше түрлі класстар</variant>
<variant>бірдей атауы бар, бірақ әртүрлі параметрлер жиынтығы бар әдіс</variant>

<question158>Java-да әдісті қайта анықтау нені білдіреді (override)?</question158>
<variantright>сыртқы классқа қатысты класс әдісінің мінез-құлқының өзгеруі</variantright>
<variant>бірдей атаумен, бірақ әртүрлі параметрлер жиынтығымен бірнеше әдістер</variant>
<variant>ішкі классқа қатысты класс әдісінің мінез-құлқының өзгеруі</variant>
<variant>бірдей әдіспен, әртүрлі параметрлер жиынтығымен бірнеше түрлі класстар</variant>
<variant>бірдей атауы бар, бірақ әртүрлі параметрлер жиынтығы бар әдіс</variant>

<question159>Төменде жарияланған әдіс нені қайтарады: public static int getAmount()?</question159>
<variantright>бүтін санды қайтарады</variantright>
<variant>анық емес, әдіс кодын қарау керек</variant>
<variant>static-класс өрісін қайтарады</variant>
<variant>осы класс объектісіне сілтемені қайтарады</variant>
<variant>static-класс әдісін қайтарады</variant>

<question160>JDK қандай ОЖ үшін қолжетімді?</question160>
<variantright>Windows, Linux, Mac OS және Solaris</variantright>
<variant>Windows және Linux</variant>
<variant>Windows, Linux және Mac OS</variant>
<variant>Windows, Mac OS және Solaris</variant>
<variant>Windows, Mac OS, Unix және Solaris</variant>

<question161>NetBeans Profiler қандай міндеттерді атқаруға көмектеседі?</question161>
<variantright>жадтағы кедергілерді іздеу және жұмыс жылдамдығын оңтайландыру</variantright>
<variant>модульдік Swing-қосымшаларды әзірлеу</variant>
<variant>интерфейстерді визуалды дамыту</variant>
<variant>осы класс объектісіне сілтемені қайтарады</variant>
<variant>static-класс әдісін қайтарады</variant>

<question162>Java-да ең үлкен әзірлеушілер қауымдастығын дамыту үшін қандай IDE бар?</question162>
<variantright>Eclipse</variantright>
<variant>IntelliJ IDEA</variant>
<variant>NetBeans</variant>
<variant>Codenvy</variant>
<variant>Codenvy</variant>

<question163>Android Studio негізінде қандай әзірлеу ортасы жатыр?</question163>
<variantright>IntelliJ IDEA</variantright>
<variant>Eclipse</variant>
<variant>Codenvy</variant>
<variant>Codenvy</variant>
<variant>Codenvy</variant>

<question164>«public» кілттік сөзі не болып табылады?</question164>
<variantright>ену модификаторы</variantright>
<variant>литерал</variant>
<variant>меншіктеу операторы</variant>
<variant>объект әдісі</variant>
<variant>объект класы</variant>

<question165>Java-да жасалған қосымшаларды құрайтын негізгі блоктар қалай аталады?</question165>
<variantright>Класстар</variantright>
<variant>Әдістер</variant>
<variant>Объектілер</variant>
<variant>Литералдар</variant>
<variant>Модификатор</variant>

<question166>«class» кілттік сөзінен кейін не жазылады?</question166>
<variantright>класс атауы</variantright>
<variant>ену модификаторы</variant>
<variant>деректер типі</variant>
<variant>литерал</variant>
<variant>объект әдісі</variant>

<question167>Класс атауы неден басталады?</question167>
<variantright>әріптен</variantright>
<variant>кез-келген символдан</variant>
<variant>цифрдан</variant>
<variant># символынан</variant>
<variant>$ символынан</variant>

<question168>Java виртуалды машинасы өз жұмысын бастайтын әдіс қалай аталады?</question168>
<variantright>main()</variantright>
<variant>start()</variant>
<variant>go()</variant>
<variant>get()</variant>
<variant>set()</variant>

<question169>Java-да фигуралы жақшалар {} не үшін қолданылады?</question169>
<variantright>бағдарлама блоктарын ажырату үшін</variantright>
<variant>циклдер мен шарттарды қалыптастыру үшін ғана</variant>
<variant>тек класс блогын құру үшін</variant>
<variant>циклдік операторды орындау үшін</variant>
<variant>басқа блокқа өту үшін</variant>

<question170>Әдіс параметрлері басқаша қалай аталады?</question170>
<variantright>Аргументтер</variantright>
<variant>Мәндер</variant>
<variant>Литералдар</variant>
<variant>Класстар</variant>
<variant>Объектілер</variant>

<question171>System.out.println() экранға шақырылған кезде не шығады?</question171>
<variantright>бос қатар</variantright>
<variant>ешнәрсе</variant>
<variant>Java нұсқасы</variant>
<variant>Комментарий</variant>
<variant>леп белгісі</variant>

<question172>Java тілінде тұрақтыны жариялау үшін қандай кілттік сөз қолданылады?</question172>
<variantright>final</variantright>
<variant>const</variant>
<variant>finally</variant>
<variant>main</variant>
<variant>start</variant>

<question173>Кодта тұрақтыға мәнді қанша рет тағайындауға болады?</question173>
<variantright>тек бір рет</variantright>
<variant>екі рет</variant>
<variant>шексіз рет</variant>
<variant>үш рет</variant>
<variant>қолданған сайын</variant>

<question174>Тұрақтыға қатысты қандай келісім бар?</question174>
<variantright>тұрақты атауын бас әріптен бастау ұсынылады</variantright>
<variant>тұрақты атауын $ - дан бастау ұсынылады</variant>
<variant>тұрақты атауы бас әріптермен жақсы жазылады</variant>
<variant>тұрақты атауын #-дан бастау ұсынылады</variant>
<variant>тұрақты атауын { -дан бастау ұсынылады</variant>

<question175>Мәндердің қайсысын тұрақты деп жариялаған дұрыс?</question175>
<variantright>Pi санын</variantright>
<variant>шоттағы соманы</variant>
<variant>жылдамдық</variant>
<variant>уақыт</variant>
<variant>қалдық</variant>

<question176>OББ негізін құрайтын үш негізгі қағида:</question176>
<variantright>инкапсуляция, полиморфизм және мұрагерлік</variantright>
<variant>инкапсуляция, полиморфизм және делегирлеу</variant>
<variant>әдіс, полиморфизм және делегирлеу</variant>
<variant>әдіс, класс және делегирлеу</variant>
<variant>инкапсуляция, әдіс және мұрагерлік</variant>

<question177>Java-да бағдарламаны іске қосудың қандай әдісі бар?</question177>
<variantright>кез келген класста main әдісімен</variantright>
<variant>бағдарламаны іске қосу жобаны құрастыру арқылы жүзеге асырылады, негізгі әдіс жоқ</variant>
<variant>кез келген, оны жоба параметрлерінде орнатуға болады</variant>
<variant>бірінші жазылған класстан және оның ішіндегі әдістен бастап</variant>
<variant>бірінші және әдіс жазылған кластан бастап</variant>

<question178>Массивтің дұрыс жариялануы:</question178>
<variantright>int[] a = new int[] {1, 2, 3, 4, 5};</variantright>
<variant>int a[] = 1, 2, 3, 4, 5;</variant>
<variant>int[] a = int[] {1, 2, 3, 4, 5};</variant>
<variant>int[] a = new int {1, 2, 3, 4, 5};</variant>
<variant>int a = new int[] {1, 2, 3, 4, 5};</variant>

<question179>Массив элементтеріне ортақ не бар?</question179>
<variantright>ондағы деректер типі</variantright>
<variant>өлшемдері</variant>
<variant>жадтан орын алатын адрестері</variant>
<variant>әрқайсының атаулары</variant>
<variant>жадтағы орны</variant>

<question180>Көп өлшемді массив элементіне мәннің дұрыс тағайындалуы:</question180>
<variantright>a[0][0] = 1;</variantright>
<variant>a[0, 0] = 1;</variant>
<variant>a(0)(0) = 1;</variant>
<variant>a{0}{0} = 1;</variant>
<variant>a[0 0] = 1;</variant>

<question181>Шығарудың дұрыс жазылуы?</question181>
<variantright>System.out.print("Hello World!");</variantright>
<variant>System.out("Hello World!");</variant>
<variant>System.print("Hello World!");</variant>
<variant>print("Hello World!");</variant>
<variant>System.out.print = "Hello World!";</variant>

<question182>Әрбір файл аталуы керек:</question182>
<variantright>ондағы класс атауымен</variantright>
<variant>кез-келген атаумен</variant>
<variant>ондағы әдіс атауымен</variant>
<variant>пакет атауымен</variant>
<variant>бірінші кітахана атауымен</variant>

<question183>Осы бөлу әрекетін орындағаннан кейін x айнымалысында қандай мән болады? double x = 12 / 4;</question183>
<variantright>3.0</variantright>
<variant>2,5</variant>
<variant>2</variant>
<variant>4</variant>
<variant>5</variant>

<question184>Бұл кодта алдымен қандай операция орындалады? int x = 30 / 5 * 3;</question184>
<variantright>бөлу</variantright>
<variant>көбейту</variant>
<variant>бүтінсанды бөлу</variant>
<variant>кері ретпен</variant>
<variant>қосу</variant>

<question185>Унарлық операцияға қанша операнд қатысады?</question185>
<variantright>бір</variantright>
<variant>екі</variant>
<variant>үш</variant>
<variant>бірнеше</variant>
<variant>бес</variant>

<question186>А класы В интерфейсінің әдістерін толығымен жүзеге асырмайды, оны қалай анықтау керек?</question186>
<variantright>abstract-класс ретінде</variantright>
<variant>final-класс ретінде</variant>
<variant>ішкі класс ретінде</variant>
<variant>private-класс ретінде</variant>
<variant>интерфейс ретінде</variant>

<question187>AWT және Swing кітапханаларын пайдалану үшін қосылатын пакет:</question187>
<variantright>javax.swing (кітапхана Swing), java.awt и java.awt.event (кітапхана AWT)</variantright>
<variant>Scanner</variant>
<variant>java.awt.event (кітапхана AWT), import mypack.subpack.MyClass, java.lang</variant>
<variant>interface One{ void setOne(int n);}</variant>
<variant>public void setOne(int n){number=n;}</variant>

<question188>Массивтің бірінші элементіне қай жерде мән дұрыс тағайындалған?</question188>
<variantright>a[0][0] = 1;</variantright>
<variant>a[0, 0] = 1;</variant>
<variant>a(0)(0) = 1;</variant>
<variant>a{0}{0} = 1;</variant>
<variant>a[0 0] = 1;</variant>

<question189>Шығару қай жерде дұрыс жазылған?</question189>
<variantright>System.out.print("Java программирование");</variantright>
<variant>System.out("Java программирование");</variant>
<variant>System.print("Java программирование");</variant>
<variant>print("Java программирование ");</variant>
<variant>System.out.print = "Java программирование";</variant>

<question190>Мәтінмен жұмыс істеуде қолданылатын Java-класстар:</question190>
<variantright>String және StringBuffer</variantright>
<variant>InputStream және OutputStream</variant>
<variant>FileInputStream және FileOutputStream</variant>
<variant>Scanner</variant>
<variant>Read және Write</variant>

<question191>JFrame класының панельді көрсетуге арналған әдісі:</question191>
<variantright>getContentPane</variantright>
<variant>setSize</variant>
<variant>setVisible</variant>
<variant>main</variant>
<variant>getComponentCount</variant>

<question192>Құрамына өзге элементтер кіретін элемент:</question192>
<variantright>Контейнер</variantright>
<variant>Конструктор</variant>
<variant>Әдіс</variant>
<variant>Класс</variant>
<variant>Панель</variant>

<question193>removeAll() қызметі:</question193>
<variantright>контейнердегі барлық элементтерді жояды</variantright>
<variant>контейнерден компонент элементін алып тастайды</variant>
<variant>контейнерге компонент элементін қосады</variant>
<variant>контейнердегі элементтер санын қайтарады</variant>
<variant>басқа элементтерді қамтиды</variant>

<question194>Дұрыс жазылған идентификатор?</question194>
<variantright>int</variantright>
<variant>2int</variant>
<variant>- int#</variant>
<variant>#int</variant>
<variant>_#int</variant>

<question195>&& операторы нені білдіреді?</question195>
<variantright>Логикалық «Және» (AND)</variantright>
<variant>Биттік «Немесе» (OR)</variant>
<variant>Биттер санынан солға ығысу</variant>
<variant>Таңбасыз оңға биттік жылжу</variant>
<variant>«Немесе» жоққа шығады (XOR)</variant>

<question196>|| операторы нені білдіреді?</question196>
<variantright>Логикалық «Немесе» (OR)</variantright>
<variant>Логикалық «Және» (AND)</variant>
<variant>Биттер санынан солға ығысу</variant>
<variant>Таңбасыз оңға биттік жылжу</variant>
<variant>«Немесе» жоққа шығады (XOR)</variant>

<question197><< операторы нені білдіреді?</question197>
<variantright>Биттер санынан солға ығысу</variantright>
<variant>Логикалық «Және» (AND)</variant>
<variant>Логикалық «Немесе» (OR)</variant>
<variant>Таңбасыз оңға биттік жылжу</variant>
<variant>«Немесе» жоққа шығады (XOR)</variant>

<question198>>> операторы нені білдіреді?</question198>
<variantright>Оңға биттік жылжу</variantright>
<variant>Логикалық «Және» (AND)</variant>
<variant>Логикалық «Немесе» (OR)</variant>
<variant>Биттер санынан солға ығысу</variant>
<variant>«Немесе» жоққа шығады (XOR)</variant>

<question199>java.applet пакетінің міндеті?</question199>
<variantright>Аплеттерді құруға қажетті кластар</variantright>
<variant>Abstract Windows Toolkit графикалық пайдаланушы интерфейсі</variant>
<variant>AWT үшін түстер кеңістігі</variant>
<variant>Программалар ішінде және арасында деректерді тасымалдау</variant>
<variant>drag-and-drop технологиясын қолдау</variant>

<question200>java.awt пакеті не үшін қажет?</question200>
<variantright>Abstract Windows Toolkit -тің графикалық пайдаланушы интерфейсі</variantright>
<variant>Аплеттерді құруға қажетті кластар</variant>
<variant>AWT үшін түстер кеңістігі</variant>
<variant>Программа ішінде және программалар арасында деректерді тасымалдау</variant>
<variant>drag-and-drop технологиясын қолдау</variant>

<question201>Бүтін тұрақтының өлшемi:</question201>
<variantright>2 байт</variantright>
<variant>4 байт</variant>
<variant>1 байт</variant>
<variant>8 байт</variant>
<variant>7 байт</variant>

<question202>float типті тұрақтының өлшемi:</question202>
<variantright>4 байт</variantright>
<variant>2 байт</variant>
<variant>1 байт</variant>
<variant>5 байт</variant>
<variant>8 байт</variant>

<question203>double типті тұрақтының өлшемi:</question203>
<variantright>8 байт</variantright>
<variant>6 байт</variant>
<variant>4 байт</variant>
<variant>1 байт</variant>
<variant>7 байт</variant>

<question204>\\b басқару тізбегі нені білдіреді?</question204>
<variantright>Бір символ артқа қайтару</variantright>
<variant>Қоңырау</variant>
<variant>Жаңа бетке ауыстыру</variant>
<variant>Жаңа жолға ауысу</variant>
<variant>Жолдың басына қайтару</variant>

<question205>\\f басқару тізбегі нені білдіреді?</question205>
<variantright>Жаңа бетке ауысу</variantright>
<variant>Бір символ артқа қайтару</variant>
<variant>Қоңырау</variant>
<variant>Жаңа жолға ауыстыру</variant>
<variant>Жолдың басына қайтару</variant>

<question206>\\n басқару тізбегі нені білдіреді?</question206>
<variantright>Жаңа жолға ауыстыру</variantright>
<variant>Бір символ артқа қайтару</variant>
<variant>Жаңа бетке ауыстыру</variant>
<variant>Қоңырау</variant>
<variant>Жолдың басына қайтару</variant>

<question207>\\r басқару тізбегі нені білдіреді?</question207>
<variantright>Жолдың басына қайтару</variantright>
<variant>Бір символ артқа қайтару</variant>
<variant>Жаңа бетке ауыстыру</variant>
<variant>Жаңа жолға ауыстыру</variant>
<variant>Қоңырау</variant>

<question208>\\t басқару тізбегі нені білдіреді?</question208>
<variantright>Көлденең табуляция</variantright>
<variant>Вертикальді табуляция</variant>
<variant>Тырнақша</variant>
<variant>Қос тырнақша</variant>
<variant>Ирек жақша</variant>

<question209>\\\\v басқару тізбегі нені білдіреді?</question209>
<variantright>Вертикальді табуляция</variantright>
<variant>Көлденең табуляция</variant>
<variant>Тырнақша</variant>
<variant>Қос тырнақша</variant>
<variant>Ирек жақша</variant>

<question210>\\’ басқару тізбегі нені білдіреді?</question210>
<variantright>Тырнақша</variantright>
<variant>Көлденең табуляция</variant>
<variant>Вертикальді табуляция</variant>
<variant>Қос тырнақша</variant>
<variant>Ирек жақша</variant>

<question211>\\"? басқару тізбегі нені білдіреді?</question211>
<variantright>Қос тырнақша</variantright>
<variant>Көлденең табуляция</variant>
<variant>Тырнақша</variant>
<variant>Вертикальді табуляция</variant>
<variant>Кері қиғаш сызық</variant>

<question212>\\\\ басқару тізбегі нені білдіреді?</question212>
<variantright>Кері қиғаш сызық</variantright>
<variant>Көлденең табуляция</variant>
<variant>Тырнақша</variant>
<variant>Вертикальді табуляция</variant>
<variant>Қос тырнақша</variant>

<question213>\\u басқару тізбегі нені білдіреді?</question213>
<variantright>Unicode символын кодтау</variantright>
<variant>Көлденең табуляция</variant>
<variant>Қос тырнақша</variant>
<variant>Вертикальді табуляция</variant>
<variant>Кері қиғаш сызық</variant>

<question214>Егер m=20 болса, m+=5 операциясының мәні неге тең?</question214>
<variantright>25</variantright>
<variant>15</variant>
<variant>20</variant>
<variant>100</variant>
<variant>5</variant>

<question215>Егер n=10 болса, n*=3 операциясының мәні неге тең?</question215>
<variantright>30</variantright>
<variant>13</variant>
<variant>7</variant>
<variant>1000</variant>
<variant>10</variant>

<question216>Егер n=15 болса, n/=3 операциясының мәні неге тең?</question216>
<variantright>5</variantright>
<variant>45</variant>
<variant>18</variant>
<variant>56</variant>
<variant>12</variant>

<question217>Егер n=20 болса, n-=4 операциясының мәні неге тең?</question217>
<variantright>16</variantright>
<variant>24</variant>
<variant>80</variant>
<variant>65</variant>
<variant>4</variant>

<question218>Егер х=10; у=5; болса, (х>у)? х : у өрнегінің мәні неге тең?</question218>
<variantright>10</variantright>
<variant>5</variant>
<variant>50</variant>
<variant>15</variant>
<variant>25</variant>

<question219>Java-да символ дегеніміз:</question219>
<variantright>Юникод кестесінің таңбаларындағы индекстер</variantright>
<variant>таңбалар индекстері</variant>
<variant>индекстер, көрсеткіштер және операторлар</variant>
<variant>таңба кестесі</variant>
<variant>таңба кестесінің массиві</variant>

<question220>Java-да жолдық литерлер дегеніміз-</question220>
<variantright>("") тырнақшадағы еркін текст</variantright>
<variant>() жақшадағы еркін текст</variant>
<variant>{} фигуралы жақшадағы еркін текст</variant>
<variant>Еркін текст</variant>
<variant>Апострофтағы еркін текст</variant>

<question221>byte типі – бұл:</question221>
<variantright>Белгілі 8-биттік тип</variantright>
<variant>Белгілі 9-биттік тип</variant>
<variant>Белгілі 10-биттік тип</variant>
<variant>Белгілі 12-биттік тип</variant>
<variant>Белгілі 14-биттік тип</variant>

<question222>byte типінің мәндер диапазоны?</question222>
<variantright>-128 - 127</variantright>
<variant>-130 - 131</variant>
<variant>-140 - 141</variant>
<variant>-150 - 151</variant>
<variant>-145 - 146</variant>

<question223>short типі -бұл?</question223>
<variantright>16-биттік тип</variantright>
<variant>18-биттік тип</variant>
<variant>19-биттік тип</variant>
<variant>20-биттік тип</variant>
<variant>21-биттік тип</variant>

<question224>short типінің диапазоны?</question224>
<variantright>-32768 - 32767</variantright>
<variant>-30000 - 32767</variant>
<variant>-32000 - 32767</variant>
<variant>-31005 - 32767</variant>
<variant>-32555 - 32767</variant>

<question225>int типі-бұл:</question225>
<variantright>32-биттік бүтін сан таңбасымен</variantright>
<variant>42-биттік бүтін сан таңбасымен</variant>
<variant>52-биттік бүтін сан таңбасымен</variant>
<variant>62-биттік бүтін сан таңбасымен</variant>
<variant>22-биттік бүтін сан таңбасымен</variant>

<question226>long типі-бұл:</question226>
<variantright>64-биттік сан таңбасымен</variantright>
<variant>32-биттік сан таңбасымен</variant>
<variant>22-биттік сан таңбасымен</variant>
<variant>62-биттік сан таңбасымен</variant>
<variant>52-биттік сан таңбасымен</variant>

<question227>Java тілінде char типінің разряды?</question227>
<variantright>16 бит</variantright>
<variant>18 бит</variant>
<variant>20 бит</variant>
<variant>22 бит</variant>
<variant>24 бит</variant>

<question228>Java тілінде boolean типі не үшін қолданылады?</question228>
<variantright>Логикалық мәнді сақтау үшін</variantright>
<variant>Символды сақтау үшін</variant>
<variant>Санды сақтау үшін</variant>
<variant>Типті сақтау үшін</variant>
<variant>Мәнді сақтау үшін</variant>

<question229>Массивті хабарлау үшін қандай жақша қолданады?</question229>
<variantright>Квадратты жақша</variantright>
<variant>Фигуралы жақша</variant>
<variant>Дөңгелек жақша</variant>
<variant>Тырнақша</variant>
<variant>Қолданбайды</variant>

<question230>Бір өлшемді массивті көрсетіңіз?</question230>
<variantright>int month_days [];</variantright>
<variant>month_days = new int [12]</variant>
<variant>int month_days [][];</variant>
<variant>int month_days [][][];</variant>
<variant>month_days = new int</variant>

<question231>Екі өлшемді массивті көрсетіңіз?</question231>
<variantright>int month_days [][];</variantright>
<variant>month_days = new int [12]</variant>
<variant>int month_days [];</variant>
<variant>int month_days [][][];</variant>
<variant>month_days = new int</variant>

<question232>double типті екі өлшемді массивті көрсетіңіз:</question232>
<variantright>double matrix [][] = new double [4][4];</variantright>
<variant>double matrix [] = new double [4];</variant>
<variant>double matrix [] = new double [4][4];</variant>
<variant>double matrix [][] = new double [4];</variant>
<variant>int matrix [][] = int double [4][4];</variant>

<question233>Java-да объектіге бағытталған бағдарламалаудың базалық элементі:</question233>
<variantright>Класс</variantright>
<variant>Әдіс</variant>
<variant>Объект</variant>
<variant>Тип</variant>
<variant>Файл</variant>

<question234>Массивке жадтан орын дайындайтын оператор?</question234>
<variantright>Арнайы new операторы</variantright>
<variant>IOException, if операторы</variant>
<variant>then операторы</variant>
<variant>else операторы</variant>
<variant>Еркін текст</variant>

<question235>Java-да объектіге-бағытталған тәсілдеменің екінші фундаменталды қасиеті:</question235>
<variantright>Мұрагерлік</variantright>
<variant>Инкапсуляция</variant>
<variant>Объект</variant>
<variant>Әдіс</variant>
<variant>Еркін Текст</variant>

<question236>Java-да объектіге-бағытталған тәсілдеменің бірінші фундаменталды қасиеті:</question236>
<variantright>Инкапсуляция</variantright>
<variant>Мұрагерлік</variant>
<variant>Объект</variant>
<variant>Әдіс</variant>
<variant>Еркін Текст</variant>

<question237>Java-да объектіге-бағытталған тәсілдеменің үшінші фундаменталды қасиеті:</question237>
<variantright>Полиморфизм</variantright>
<variant>Инкапсуляция</variant>
<variant>Объект</variant>
<variant>Әдіс</variant>
<variant>Еркін Текст</variant>

<question238>Ақпаратты консольға шығаруға арналған әдіс:</question238>
<variantright>println()</variantright>
<variant>Buffered</variant>
<variant>import</variant>
<variant>read()</variant>
<variant>Line()</variant>

<question239>Объектіге-бағытталған бағдарламалау тілдерін көрсетіңіз:</question239>
<variantright>C++, Visual Basic, Java</variantright>
<variant>Pascal, Delphi, Project</variant>
<variant>Basic, Net Beans, HTML</variant>
<variant>Pascal, Basic</variant>
<variant>RationalRose</variant>

<question240>Кезектеп орналастыру менеджері:</question240>
<variantright>FlowLayout</variantright>
<variant>BorderLayout</variant>
<variant>GridLayout</variant>
<variant>BoxLayout</variant>
<variant>Layout</variant>

<question241>Кестелеп орналастыру менеджері:</question241>
<variantright>GridLayout</variantright>
<variant>FlowLayout</variant>
<variant>BorderLayout</variant>
<variant>BoxLayout</variant>
<variant>Layout</variant>

<question242>Шекаралық орналастыру менеджері:</question242>
<variantright>BorderLayout</variantright>
<variant>FlowLayout</variant>
<variant>GridLayout</variant>
<variant>BoxLayout</variant>
<variant>Layout</variant>

<question243>Блоктық орналастыру менеджері:</question243>
<variantright>BoxLayout</variantright>
<variant>FlowLayout</variant>
<variant>GridLayout</variant>
<variant>BorderLayout</variant>
<variant>Layout</variant>

<question244>Панелдің шегі мына әдіспен орналастырады:</question244>
<variantright>setBorder</variantright>
<variant>setSize</variant>
<variant>getContentPane</variant>
<variant>setVisible</variant>
<variant>getComponentCount</variant>

<question245>Қандай класс бейнені анықтайды?</question245>
<variantright>ImageIcon</variantright>
<variant>Color</variant>
<variant>JFrame</variant>
<variant>JPanel</variant>
<variant>FlowLayout</variant>

<question246>Бағдарламаның орындалу нәтижесі: int a[10]={2,4,5,7,8,6,3,12,19,9}; main() { int i, max=2; for(i=0;i<10;i+=2) if (a[i]>max) max=a[i]; System.out.printlnf («%d», max); }</question246>
<variantright>19</variantright>
<variant>12</variant>
<variant>9</variant>
<variant>8</variant>
<variant>6</variant>

<question247>Бағдарламаның орындалу нәтижесі: int a[10]={-1,2,-3,-4,-5,6,7,9,-10,11}; main() {int i, p=1; for(i=0;i<9;i+=2) if (a[i]<0) p*= a[i]; count<<«p=«<<p;}</question247>
<variantright>p=-15</variantright>
<variant>p=150</variant>
<variant>125</variant>
<variant>15</variant>
<variant>375</variant>

<question248>Есепті шешуге арналған дұрыс нұсқаны таңдаңыз y = ln(5x) + tg(x^3):</question248>
<variantright>y = Math.log(Math.abs(5* x)) + Math.tan(Math.pow(x,3));</variantright>
<variant>y = ln(abs(5x) + pow(tg(x),3)));</variant>
<variant>y = Math.log(abs(5* x)) + Math.tan( pow(3,x));</variant>
<variant>y = ln(abs(5* x)) + tan( pow(x,3));</variant>
<variant>y = Math.log(Math.abs(5* x)) + Math.tg(pow(x,3));</variant>

<question249>Есепті шешуге арналған дұрыс нұсқаны таңдаңыз a = (sqrt(|x-1|) - |y|^(1/3)) / b:</question249>
<variantright>a = (Math.sqrt(Math.abs(x-1)) - Math.pow(Math.abs(y),1.0/3)) / b;</variantright>
<variant>a = (Math.sqrt(abs(x-1)) - Math.sqrt(abs(y)))/ pow(</variant>
<variant>a = Math.(sqrt(abs(x-1)) - Math.pow(abs(y),1/3))/ sqr(</variant>
<variant>a = sqrt(abs(x-1)) - pow(abs(y),1/3)/(1+ pow(x,2)/2 + pow(y,2)/4);</variant>
<variant>a = Math.sqr(abs(x-1)) - Math.pow(abs(y),1/3)/(Math.pow(b,2));</variant>

<question250>Есепті шешуге арналған дұрыс нұсқаны таңдаңыз y = (e^(3x) + 7)^(1/4):</question250>
<variantright>y = Math.pow(Math.exp(3*x)+7, 1.0/4);</variantright>
<variant>y = Math.pow(exp(3*x)+7, 1/4));</variant>
<variant>y = pow(exp(3*x)+7);</variant>
<variant>y = Math.pow(exp(3*x)+7);</variant>
<variant>y = Math.pow(Math.exp(3*x)+7);</variant>

<question251>Есепті шешуге арналған дұрыс нұсқаны таңдаңыз y = cos(x^5) + ln(3x+7):</question251>
<variantright>y=Math.cos(Math.pow(x,5))+ Math.log(Math.abs(3*x+7));</variantright>
<variant>y= Math.pow(cos(5,x))+log(abs(3*x+7));</variant>
<variant>y= Math.cos(pow(5,x))+ Math.log(abc(3*x+7));</variant>
<variant>y= Math. cos(pow(x,5))+ Math.ln(abs(3*x+7));</variant>
<variant>y= Math.pow(cos(x,5))+ln(Math.abs(3*x+7));</variant>

<question252>Есепті шешуге арналған дұрыс нұсқаны таңдаңыз y = ln(5x) + x^5 * sin^3(x):</question252>
<variantright>y= Math.log(5*x)+ Math.pow(x,5)* Math.pow(Math.sin(x),3);</variantright>
<variant>y= Math.ln(5*x)+ Math.pow(x,5)pow(Math.sin(x),3);</variant>
<variant>y= Math.log(5*x)+ Math.pow(x,5)* Math.sin(pow(x,3));</variant>
<variant>y= Math.log(5*x)+ Math.pow(5,x)*sin(Math.pow(x,3));</variant>
<variant>y= Math.ln(5*x)+ Math.pow(x,5)pow(Math.sin(x),3);</variant>

<question253>Есепті шешуге арналған дұрыс нұсқаны таңдаңыз y = x^5 * sin^3(x) + tg(x^4):</question253>
<variantright>y= Math.pow(x,5)* Math.pow(Math.sin(x),3)+ Math.tan(Math.pow(x,4));</variantright>
<variant>y= Math.pow(x,5)pow(Math.sin(x),3)+ Math.tan(pow(x,4));</variant>
<variant>y= Math.pow(x,5)* Math.sin(pow(x,3))+tg(pow(x,4));</variant>
<variant>y= Math.pow(5,x)*sin(Math.pow(x,3))+tan(Math.pow(x,4));</variant>
<variant>y= Math.pow(x,5)pow(Math.sin(x),3)+tg(Math.pow(4,x));</variant>

<question254>Есепті шешуге арналған дұрыс нұсқаны таңдаңыз y = tg(sin(πx)):</question254>
<variantright>y= Math.tan(Math.sin(Math.PI*x));</variantright>
<variant>y= Math.tan(Math.sin(PI*x));</variant>
<variant>y=tg(Math.sin(Math.PI*x));</variant>
<variant>y= Math.tg(sin(PI*x));</variant>
<variant>y= Math.tg(Math.sin(Math.PI*x));</variant>

<question255>Есепті шешуге арналған дұрыс нұсқаны таңдаңыз y = x^7 + (e^(2x+3))^(1/3):</question255>
<variantright>y= Math.pow(x,7)+ Math.exp((2*x+3),1/3);</variantright>
<variant>y= Math.pow(7,x)+exp(2*x+3),3);</variant>
<variant>y= pow(7,x)+ Math.exp((2*x+3)/3);</variant>
<variant>y= Math.pow(x,7)+ Math.exp(2*x+3),1/3);</variant>
<variant>y= Math.pow(x,7)+exp((2*x+3),1/3);</variant>

<question256>Есепті шешуге арналған дұрыс нұсқаны таңдаңыз y = (x^5+1.7)^(1/7) + cos(x^3):</question256>
<variantright>y= Math.pow(Math.pow(x,5)+1.7,1/7)+ Math.cos(Math.pow(x,3));</variantright>
<variant>y= Math.pow(pow(x,5)+1.7,1/7)+ Math.cos(pow(x,3));</variant>
<variant>y= Math.pow(pow(x,5)+1.7,1/7)+ pow(cos(3),x);</variant>
<variant>y= Math.pow Math. (pow(x,5)+1.7,1/7)+ Math.pow(cos(x),3);</variant>
<variant>y= Math.pow(pow(x,5)+1.7,1/7)+cos(Math.pow(3,x));</variant>

<question257>Есепті шешуге арналған дұрыс нұсқаны таңдаңыз y = cos(x^3) + ln(x^4) + sin(πx):</question257>
<variantright>y= Math.cos(Math.pow(x,3))+ Math.log(Math.pow(x,4))+ Math.sin(Math.PI*x);</variantright>
<variant>y= Math.cos(pow(x,3))+ Math.ln(pow(x,4))+ Math.sin(PIx);</variant>
<variant>y= Math.pow(cos(3),x)+log(Math.pow(4,x))+ Math.sin(PI*x);</variant>
<variant>y= Math. pow(cos(x),3)+ Math.ln(pow(x,4))+ Math.sin(PI*x);</variant>
<variant>y= Math.cos(pow(3,x))+ Math.log(pow(4,x)) + Math.sin(PIx);</variant>

<question258>%с форматының спецификаторы:</question258>
<variantright>Символ</variantright>
<variant>Бүтiн</variant>
<variant>Танбасыз бүтiн</variant>
<variant>Жол</variant>
<variant>Нақты сан</variant>

<question259>%d форматының спецификаторы:</question259>
<variantright>Бүтін ондық сан</variantright>
<variant>Символ, символдардың сипаттамасы</variant>
<variant>Қатар</variant>
<variant>Нақты сан</variant>
<variant>Жол</variant>

<question260>%е форматының спецификаторы:</question260>
<variantright>ғылыми жазбадағы ондық сан</variantright>
<variant>символ немесе бүтін ондық сан</variant>
<variant>Қатар</variant>
<variant>Нақты сан</variant>
<variant>Жол</variant>

<question261>%f форматының спецификаторы:</question261>
<variantright>қалқымалы үтірмен ондық сан</variantright>
<variant>ғылыми жазбадағы ондық сан</variant>
<variant>Қатар</variant>
<variant>Нақты сан</variant>
<variant>Жол</variant>

<question262>%о форматының спецификаторы:</question262>
<variantright>8-дік сан</variantright>
<variant>символ</variant>
<variant>16-лық сан</variant>
<variant>10-дық сан</variant>
<variant>6-лық сан</variant>

<question263>%s форматының спецификаторы:</question263>
<variantright>Символдар қатары</variantright>
<variant>Символ</variant>
<variant>Бүтін сан</variant>
<variant>Бөлшек сан</variant>
<variant>х..хе+х түріндегі жолдық сан</variant>

<question264>%x форматының спецификаторы:</question264>
<variantright>16-лық сан</variantright>
<variant>символ</variant>
<variant>6-лық сан</variant>
<variant>8-дік сан</variant>
<variant>10-дық сан</variant>

<question265>Массивте char типті барлық жолды қайтарады:</question265>
<variantright>toCharArray</variantright>
<variant>toChar</variant>
<variant>Char</variant>
<variant>CharArray</variant>
<variant>to</variant>

<question266>Жолдың көрсетілген бөлігін қайтарады:</question266>
<variantright>str.substring(int {, int })</variantright>
<variant>str.charAt(int a)</variant>
<variant>str.length()</variant>
<variant>str.indexOf(String str2)</variant>
<variant>str.substring(int begin)</variant>

<question267>Жолға ішкі жолды қайтаратын әдіс?</question267>
<variantright>str.indexOf(String str2)</variantright>
<variant>str.substring(int begin)</variant>
<variant>str.substring(int begin, int end)</variant>
<variant>str.charAt(int a)</variant>
<variant>str.length()</variant>

<question268>Қатар ұзындығын қайтаратын әдіс?</question268>
<variantright>str.length()әдісі</variantright>
<variant>str.charAt(int a) әдісі</variant>
<variant>str.substring(int begin, int end) әдісі</variant>
<variant>str.indexOf(String str2) әдісі</variant>
<variant>str.charAt әдісі</variant>

<question269>Қандай әдіс арқылы екі қатардың бірдей екендігін анықтауға болады?</question269>
<variantright>equals әдісі</variantright>
<variant>regionMatches әдісі</variant>
<variant>startsWith әдісі</variant>
<variant>endsWith әдісі</variant>
<variant>switch операторы</variant>

<question270>Бір жолдың ішкі жолын басқа жолдың ішкі жолымен салыстыру үшін қандай әдіс қолданылады?</question270>
<variantright>regionMatches әдісі</variantright>
<variant>equals әдісі</variant>
<variant>startsWith әдісі</variant>
<variant>endsWith әдісі</variant>
<variant>switch операторы</variant>

<question271>Қай әдіс жолдың көрсетілген префикстен басталатынын тексереді?</question271>
<variantright>startsWith әдісі</variantright>
<variant>regionMatches әдісі</variant>
<variant>equals әдісі</variant>
<variant>endsWith әдісі</variant>
<variant>switch операторы</variant>

<question272>Жолдың соңы параметрінің сәйкестігін қай әдіс тексереді?</question272>
<variantright>endsWith әдісі</variantright>
<variant>regionMatches әдісі</variant>
<variant>startsWith әдісі</variant>
<variant>equals әдісі</variant>
<variant>switch операторы</variant>

<question273>String классының compareTo әдісі не үшін қолданылады?</question273>
<variantright>Екі қатардың қайсысы қысқа екенін анықтау үшін</variantright>
<variant>Екі қатардың бірдей екенін анықтау үшін</variant>
<variant>Қатар соңын параметрлер бойынша тексеру үшін</variant>
<variant>Қатар фрагментпен басталғанын тексеру үшін</variant>
<variant>switch операторы</variant>

<question274>Жолдарды қосуға арналған әдіс?</question274>
<variantright>concat</variantright>
<variant>replace</variant>
<variant>trim</variant>
<variant>substring</variant>
<variant>switch</variant>

<question275>next() әдісі:</question275>
<variantright>бірінші пробелге дейінгі енгізілген жолды оқиды</variantright>
<variant>барлық енгізілген жолды оқиды</variant>
<variant>енгізілген int санын оқиды</variant>
<variant>boolean мәнін оқиды</variant>
<variant>бірінші пробелге дейінгі енгізілген byte санын оқиды</variant>

<question276>nextLine()әдісі:</question276>
<variantright>барлық енгізілген жолды оқиды</variantright>
<variant>бірінші пробелге дейінгі енгізілген жолды оқиды</variant>
<variant>енгізілген int санын оқиды</variant>
<variant>boolean мәнін оқиды</variant>
<variant>бірінші пробелге дейінгі енгізілген byte санын оқиды</variant>

<question277>nextInt() әдісі:</question277>
<variantright>енгізілген int санын оқиды</variantright>
<variant>барлық енгізілген жолды оқиды</variant>
<variant>бірінші пробелге дейінгі енгізілген жолды оқиды</variant>
<variant>boolean мәнін оқиды</variant>
<variant>бірінші пробелге дейінгі енгізілген byte санын оқиды</variant>

<question278>nextDouble( )әдісі:</question278>
<variantright>енгізілген double санын оқиды</variantright>
<variant>барлық енгізілген жолды оқиды</variant>
<variant>енгізілген int санын оқиды</variant>
<variant>boolean мәнін оқиды</variant>
<variant>бірінші пробелге дейінгі енгізілген byte санын оқиды</variant>

<question279>nextBoolean() әдісі:</question279>
<variantright>boolean мәнін оқиды</variantright>
<variant>барлық енгізілген жолды оқиды</variant>
<variant>енгізілген int санын оқиды</variant>
<variant>енгізілген double санын оқиды</variant>
<variant>бірінші пробелге дейінгі енгізілген byte санын оқиды</variant>

<question280>nextByte() әдісі:</question280>
<variantright>енгізілген byte санын оқиды</variantright>
<variant>барлық енгізілген жолды оқиды</variant>
<variant>енгізілген int санын оқиды</variant>
<variant>енгізілген double санын оқиды</variant>
<variant>бірінші пробелге дейінгі енгізілген byte санын оқиды</variant>

<question281>nextFloat() әдісі:</question281>
<variantright>енгізілген float санын оқиды</variantright>
<variant>барлық енгізілген жолды оқиды</variant>
<variant>енгізілген int санын оқиды</variant>
<variant>енгізілген double санын оқиды</variant>
<variant>бірінші пробелге дейінгі енгізілген byte санын оқиды</variant>

<question282>nextShort() әдісі:</question282>
<variantright>енгізілген қысқа санды оқиды</variantright>
<variant>барлық енгізілген жолды оқиды</variant>
<variant>енгізілген int санын оқиды</variant>
<variant>енгізілген double санын оқиды</variant>
<variant>бірінші пробелге дейінгі енгізілген byte санын оқиды</variant>

<question283>JFrame () конструкторы не құрады?</question283>
<variantright>Бос терезе</variantright>
<variant>Панель</variant>
<variant>Терезе тақырыбымен</variant>
<variant>Класс</variant>
<variant>Элемент</variant>

<question284>JFrame класы қайда сипатталған?</question284>
<variantright>Swing кітапханасында</variantright>
<variant>Байттық ағында</variant>
<variant>Символдық ағында</variant>
<variant>AWT кітапханасында</variant>
<variant>SWT кітапханасында</variant>

<question285>BufferedReader -да қандай әдiс символдарды оқу үшiн қолданылады?</question285>
<variantright>read</variantright>
<variant>write</variant>
<variant>printwriter</variant>
<variant>inputstreamreader</variant>
<variant>outputstream</variant>

<question286>Клавиатурадан жолдарды оқуға қандай әдіс қолданылады?</question286>
<variantright>readLine</variantright>
<variant>read</variant>
<variant>write</variant>
<variant>printwriter</variant>
<variant>inputStream</variant>

<question287>Консольдан оқу үшін не қолданылады?</question287>
<variantright>BufferedReader</variantright>
<variant>BufferedInputStream</variant>
<variant>BufferedOutputStream</variant>
<variant>PrintStream</variant>
<variant>InputStream</variant>

<question288>Қай класс бірнеше конструкторды анықтайды?</question288>
<variantright>PrintWriter</variantright>
<variant>OutputStream</variant>
<variant>InputStream</variant>
<variant>Buffered Reader</variant>
<variant>Buffered Writer</variant>

<question289>Java-да енгізу-шығару ненің көмегімен іске асырылады?</question289>
<variantright>Ағындар</variantright>
<variant>Пакеттер</variant>
<variant>Символдар</variant>
<variant>Айнымалылар</variant>
<variant>Кластар</variant>

<question290>Байттық ағындар:</question290>
<variantright>RandomAccessFile</variantright>
<variant>PrintWriter</variant>
<variant>LineNumberReader</variant>
<variant>Writer</variant>
<variant>PipedWriter</variant>

<question291>Файлға жазу үшін қолданылады:</question291>
<variantright>write</variantright>
<variant>read</variant>
<variant>main</variant>
<variant>this</variant>
<variant>close</variant>

<question292>Java –ның негізгі элементі:</question292>
<variantright>кластар</variantright>
<variant>айнымалылар</variant>
<variant>типтер</variant>
<variant>символдар</variant>
<variant>тұрақтылар</variant>

<question293>Объект құрайтын шаблон қалай аталады?</question293>
<variantright>класс</variantright>
<variant>идетификатор</variant>
<variant>әдіс</variant>
<variant>тип</variant>
<variant>айнымалы</variant>

<question294>Java класстар иерархиясының басында не орналасады?</question294>
<variantright>обьект</variantright>
<variant>класс</variant>
<variant>әдіс</variant>
<variant>айнымалы</variant>
<variant>символ</variant>

<question295>Есеп шешудің дұрыс нұсқауын таңдаңыз: егер a <= b және c < 3, онда a меншіктейді (c+b):</question295>
<variantright>if (a<=b && c<3) a=c+b;</variantright>
<variant>if ((a<=b) /& c<3) a=c+b;</variant>
<variant>if (a<=b) &\ (c<3) a=c+b;</variant>
<variant>if (a<=b !! c<3) a=c+b;</variant>
<variant>if (a<=b & c<3) a=c+b;</variant>

<question296>Шартты оператордың дұрыс сипаттамасын көрсетіңіз: a және b берілген, олардың кішісін жарты қосындымен, ал үлкенін екеуінің екі есе көбейтіндісімен орындау керек:</question296>
<variantright>if (a<b) a=(a+b)/2; b=2*a*b;</variantright>
<variant>if (a<b) {a=(a+b)/2; b=2*a*b;}</variant>
<variant>if a<b a1=a+b/2; b1=2*a*b;</variant>
<variant>if a<b {a=(a+b)/2; b=2*a*b;}</variant>
<variant>if (a<b) a1=(a+b)/2; b1=2*a*b;</variant>

<question297>Шартты оператордың дұрыс сипаттамасын көрсетіңіз: екі санның қосындысы бірден кіші болса, онда арифметикалық ортасын, кері жағдайда оның геометриялық ортасын табыңыз:</question297>
<variantright>if (x+y<1) s=(x+y)/2; else s=Math. pow(x*y,2);</variantright>
<variant>if (x+y>1) s=(x+y)/2; else s=sqr(x*y);</variant>
<variant>if (x+y>1) s=x+y/2; else s=Math. pow(x*y,2);</variant>
<variant>if (x+y<1) s=(x+y)/2 else s=Math. pow(x*y);</variant>
<variant>if (x+y<1) s=x+y/2 else s=Math. pow(x*y,2);</variant>

<question298>Σ(x+k*y) өрнегін WHILE бойынша шешудің дұрыс нұсқасын таңдаңыз (k=1-ден n-ге):</question298>
<variantright>k=1; while (k<=n) { z=x+k*y; k++; }</variantright>
<variant>k=1; while (k<n) { z=x+k*y; k++;}</variant>
<variant>k=1; while (k<=n) { z=x+y; }</variant>
<variant>k=1; while (k<n) z=x+k*y;</variant>
<variant>k=1; while (k<=n) z=x+k*y; k++;</variant>

<question299>Σ(i*x+1) өрнегін WHILE бойынша шешудің дұрыс нұсқасын таңдаңыз (i=1-ден n-ге):</question299>
<variantright>i=1; while (i<=n) { s+=i*x+1; i++; }</variantright>
<variant>i=1; while (i<n) { s+=ix+1; i++; }</variant>
<variant>i=1; while i<=n s+=i*x+1; i++;</variant>
<variant>while (i<=n) s+=i*x+1; i++;</variant>
<variant>i=1; while (i<=n) { s+=i*x+1;i--; }</variant>

<question300>Бағдарламаның орындалу нәтижесі: int a[8]={1,2,3,4,5,-2,6,16}; main() { int i, p=1; for(i=0;i<8;i++)  if (a[i] % 2 != 0) p*=a[i]; System.out.printlnf («%d», p); }</question300>
<variantright>15</variantright>
<variant>216</variant>
<variant>16</variant>
<variant>256</variant>
<variant>360</variant>
`;

let questions = [];
let currentSet = [];
let currentIndex = 0;
let score = 0;

function parseData() {
    const qBlocks = rawData.split(/<question\d+>/).filter(item => item.trim() !== "");
    questions = qBlocks.map(block => {
        const qText = block.split(/<\/question\d+>/)[0].trim();
        const rightAnswer = block.match(/<variantright>([\s\S]*?)<\/variantright>/)[1].trim();
        const wrongAnswers = [...block.matchAll(/<variant>([\s\S]*?)<\/variant>/g)].map(m => m[1].trim());
        return {
            question: qText,
            options: [rightAnswer, ...wrongAnswers],
            correct: rightAnswer
        };
    });
}

function initQuiz(start, end) {
    parseData();
    currentSet = questions.slice(start, end).sort(() => Math.random() - 0.5);
    currentIndex = 0;
    score = 0;
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const data = currentSet[currentIndex];
    document.getElementById('q-text').innerText = data.question;
    document.getElementById('progress-text').innerText = `Сұрақ: ${currentIndex + 1}/${currentSet.length}`;
    document.getElementById('bar-fill').style.width = `${((currentIndex + 1) / currentSet.length) * 100}%`;
    const optionsContainer = document.getElementById('options-list');
    optionsContainer.innerHTML = '';
    optionsContainer.style.pointerEvents = 'none'; // Басуды өшіру
    optionsContainer.style.opacity = '0.6'; // Визуалды түрде көрсету
    setTimeout(() => {
        optionsContainer.style.pointerEvents = 'auto';
        optionsContainer.style.opacity = '1';
    }, 200);
    const shuffledOptions = [...data.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach(opt => {
        const div = document.createElement('div');
        div.className = 'option-item';
        div.innerText = opt;
        div.onclick = () => checkAnswer(div, opt, data.correct);
        optionsContainer.appendChild(div);
    });
    
    document.getElementById('next-btn').classList.add('hidden');
}

function checkAnswer(element, selected, correct) {
    const allOptions = document.querySelectorAll('.option-item');
    allOptions.forEach(el => el.style.pointerEvents = 'none');
    if (selected === correct) {
        element.classList.add('correct');
        score++;
    } else {
        element.classList.add('wrong');
        allOptions.forEach(el => {
            if (el.innerText === correct) el.classList.add('correct');
        });
    }
    document.getElementById('next-btn').classList.remove('hidden');
}

function loadNextQuestion() {
    currentIndex++;
    if (currentIndex < currentSet.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('final-score').innerText = `${score}/${currentSet.length}`;
}

function restartQuiz() {
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('home-screen').classList.remove('hidden');
}
