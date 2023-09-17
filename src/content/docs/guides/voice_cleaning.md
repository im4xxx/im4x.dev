# **Чистка звука**

## 1 Вариант от Alkhorus’a

Рассмотрим "чистку" стандартными средствами аудишна. Помимо Audition можно использовать IZotope RX, SoundForge, WaveLab и т.д.

1. Первоначально эквалайзером срезаем всё ниже ~60Hz.

<img title="" src="file:///C:/Users/shxro/AppData/Roaming/marktext/images/2023-09-18-00-40-03-image.png" alt="" width="573" data-align="center">



2. Затем ищем чистый фрагмент шума (синий прямоугольник). Пример грязного шума, который не очень подходит для сканирования в красном прямоугольнике.

<img title="" src="file:///C:/Users/shxro/AppData/Roaming/marktext/images/2023-09-18-00-41-19-image.png" alt="" data-align="center" width="623">

Выбираем плагин для чистки шума. В Аудишне это Noise Reduction, так же есть аналогичные IZotope RX De-noise и Waves x-noise.

![](C:\Users\shxro\AppData\Roaming\marktext\images\2023-09-18-00-43-58-image.png)



Выделяем и сканируем чистый фрагмент шума, затем выделяет дорогу целиком и применяем.

![](C:\Users\shxro\AppData\Roaming\marktext\images\2023-09-18-00-44-29-image.png)



Чтобы не испортить звук шумоподавление выставляем процентов 80.

![](C:\Users\shxro\AppData\Roaming\marktext\images\2023-09-18-00-45-09-image.png)



3.  Затем ищем самый тихий фрагмент реплики, воспроизводим его и смотрим по измерителю уровня примерный его уровень
громкости.

![](C:\Users\shxro\AppData\Roaming\marktext\images\2023-09-18-00-51-46-image.png)



По этому значению будем отстраивать threshold в компрессоре.

![](C:\Users\shxro\AppData\Roaming\marktext\images\2023-09-18-00-52-46-image.png)



Примерные настройки компрессора Ratio где-то 6:1, атака 1-2 мс, релиз 100-150 мс, threshold подбирали ранее, для данного случая примерно -27дБ.



Одновременно с компрессором, если это возможно, можно использовать gate. Его значение threshold ставим примерно -50дБ, обычно ниже полезной информации нет, но на всякий случай нужно проверять, не обрезались ли окончания у реплик, если обрезались, то threshold нужно ставить ниже.

![](C:\Users\shxro\AppData\Roaming\marktext\images\2023-09-18-00-54-07-image.png)



После применения компрессора нужно восстановить громкость дороги до значения примерно -12...-18 дБ

![](C:\Users\shxro\AppData\Roaming\marktext\images\2023-09-18-00-55-16-image.png)



Обязательно нужно переслушивать результат, если дорога будет сильно пережата, "комната" сильно вылазит, или ещё какие деффекты из-за компрессии вылезли, то нужно смягчить его параметры (уменьшить threshold или ratio).

![](C:\Users\shxro\AppData\Roaming\marktext\images\2023-09-18-00-55-52-image.png)



 4. После можно применить deesser для ослабления чрезмерно свистящих звуком. Диэссеры все выглядят по-разному, но принцип работы один: сначала находите свистящие звуки, можно на слух, можно по спектру, настраиваете плагин на свистящие частоты, затем на слух (зациклив воспроизведение реплики через плагин) подбираете значение threshold так, чтобы "эски" не били по ушам и войсер не стал шепелявить.

![](C:\Users\shxro\AppData\Roaming\marktext\images\2023-09-18-00-56-46-image.png)

<img src="file:///C:/Users/shxro/AppData/Roaming/marktext/images/2023-09-18-00-56-55-image.png" title="" alt="" data-align="left">



## 2 Вариант от Im4x’a



Скачать
пресет для RX 9: [anilib RX9.xml](https://drive.google.com/file/d/11n1f730djho8za37r8A3K_HaRYNNZOS8/view?usp=sharing) (хз будет ли работать в других версиях)

<img src="file:///C:/Users/shxro/AppData/Roaming/marktext/images/2023-09-18-00-57-35-image.png" title="" alt="" data-align="center">



Данная цепочка позволит ускорить чистку дорог перед загрузкой их в рипер, нужно только настроить Spectral De-noise для каждой дороги отдельно.

Spectral De-Noise - Основной инструмент при чистке.

Первым делом нужно найти запись шума, обычно его оставляют в самом начале, опенинге, или в конце. Бывает и так что шум не записали, в таком случае ищем его между фраз.

На рисунках ниже <span style="color:green">зеленым</span> выделен фрагмент “чистого” шума, который используем для анализа. <span style="color:red">Красным</span> выделен грязный шум, его стоит избегать.

<img src="file:///C:/Users/shxro/AppData/Roaming/marktext/images/2023-09-18-01-02-16-image.png" title="" alt="" data-align="center">

<img src="file:///C:/Users/shxro/AppData/Roaming/marktext/images/2023-09-18-01-02-23-image.png" title="" alt="" data-align="center">



**Ниже представлен порядок действий при чистке шума:**

1)Выбираем **Spectral De-noise** из списка нашей цепи.

2)Выделяем фрагмент “чистого” шума.

3)Нажимаем кнопку **Learn**.

4)Выстраиваем <span style="color:blue">синюю</span> кривую так чтобы <span style="color:yellow">желтая</span> была относительно прямой и под отметкой 120dB.

<img src="file:///C:/Users/shxro/AppData/Roaming/marktext/images/2023-09-18-01-04-13-image.png" title="" alt="" data-align="center">



Параметр Reduction отвечает за степень подавления, его настраиваем
под пункт 4.

**Quality** - чем выше, тем лучше, однако если на максимальном качестве процесс занимает слишком много времени, то можно понизить.



Далее выделяем всю дорогу (для этого нужно отделить зум, и щелкнуть 2 раза по
области) и нажимаем **Render**.

![](C:\Users\shxro\AppData\Roaming\marktext\images\2023-09-18-01-06-02-image.png)



После рендера получаем относительно чистую дорогу без шума, кликов и сибилянтов.
Эквализацию и компрессию делаем в рипере.

Сохраняем в WAV **Ctrl+S** или экспортируем во FLAC **Ctrl+E** для экономии места. Рипер
очень хорошо работает с FLAC, рекомендую использовать его.

<img src="file:///C:/Users/shxro/AppData/Roaming/marktext/images/2023-09-18-01-07-00-image.png" title="" alt="" data-align="center">

<img src="file:///C:/Users/shxro/AppData/Roaming/marktext/images/2023-09-18-01-07-08-image.png" title="" alt="" data-align="center">
