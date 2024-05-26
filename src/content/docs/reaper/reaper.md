---
title: Reaper
description: ""
sidebar:
    order: 4
---

## 1 РАБОТА С ЭФФЕКТАМИ (im4x)

Для начала надо понимать что последовательность FX-плагинов очень важна на любом этапе сведения. В данном гайде я буду делить плагины на 2 категории, чтобы было проще понять. FX, Плагин, FX-плагин - тут это синонимы.

К первой категории относятся плагины обработки - эквалайзер, компрессор, диэссор и тд. те плагины которыми мы делаем наш вокальный трек законченным. Сюда же относятся плагины групповой обработки.

Ко второй категории относятся плагины эффектов, это могут быть те же самые эквалайзеры и компрессоры, но с другой задачей и другими настройками, ревербераторы, дилеи, фланжеры, стереорасширители и прочие. Те плагины которыми мы делаем эффекты.

<span style='color:red'>Важно!</span> Плагины эффектов должны быть строго после плагинов обработки. 

Ниже рассмотрим несколько способов этого добиться.

**![](https://lh6.googleusercontent.com/ZUAbroI5soeQkozzkhZWj3V7nflOBZg-vpBGdL_L6OsOJC374Q1KlLZeNEu886avEkIcz9DApPfV__nZiWeoAnsC0jBzXUjgRAdSHPvhYCo1XBeRd2IHrY-whJFlokjiJUGXuMXDvVWIng9OqgOmWFQ)

### 1 СПОСОБ - Использование [скрипта](https://drive.google.com/file/d/1ST0Vh9WjS0rswKnknvyedOVp5rptf62h/view?usp=sharing)

**![](https://lh4.googleusercontent.com/JcJ1KDLR55UTfrvgwD5Mx4_MA4DsbvJpW9W_huNMmpz-0ul0OyKIPiEBPeFJWldoiUMa9BaHJiXfho_y8eok97xIyBm-6kSh_GltxwIit34QcBo3ggrK0rw7HnwSM7INW-CjQNjYV8XzGssnHdqL43E)**

Скрипт нажатием одной клавиши применит обработку трека для выделенных айтемов (срендерит каждый айтем с обработкой которая есть на этом треке), перенесет обработанные айтемы на выбранный трек, и замутит оригинальные айтемы. Удобно тем, что не надо рендерить весть трек, и если вы изменили обработку вокала, или получили фикс на фразу в этом месте, просто удаляете айтем из FX-трека и заново запускаете скрипт для нужного айтема. “Минус” в том, что каждый айтем после скрипта это отдельный файлик в папке проекта, и таких файлов может быть сотни, хотя вес этих файлов вообще незначительный.

### 2 СПОСОБ - Freeze Track

**![](https://lh3.googleusercontent.com/v_K6dxySUj0pOYhmhvgTwrO638FIwxMtsLAhEfSnQGmwxWhA5gMbooqyOV5hkp1a3w81FFt9wxnY9YUs7i-8jr41Wsa9oKLS1_9psCTrAuxViJ3hOwi_vI5gY13WthF7SdnpLmVjMnH88A5Jjkb8wUM)**

В окне FX кликаем правой кнопкой мыши по пустому пространству и выбираем Freeze track > Freeze track to mono, up to last non-offline FX

Запустится процесс рендера этого трека, в итоге трек будет выглядеть так:

**![](https://lh4.googleusercontent.com/RXDW5yVyBgRLBcliB1uhRUklwLDZ9e3eeVfr9NAriJsKEwFfdmYCvdvNE7F-z1DGQ3j0bBGtQpS0rgN6T0QafRk7j3XCnu1rv0I8dkE-ohczuukgQLjYoME8uxes7Vk39LCEAjw73vLX8wLeUgtkBTk)**

Чтобы можно было двигать фрагменты (айтемы) надо нажать на замок.

После этого вырезаем фрагменты на которых должен быть эффект, и переносим их на трек с эффектами.

**![](https://lh5.googleusercontent.com/v-6LqFktTsGbgtallbF_c4PUEbnqnqclL8DVb7EOM5Ny72bhumS1HOXFLAOpO3uC1vq_Fh1_FFiYO-ckjzaarwhtsjbfifiXnLu5FNZ7zXg1Gw0sfGytG93XhhupxEBHiRjLmqz9zmA-uEBtqd7HfDU)**

Мы можем сделать Unfreeze trac, и вернуть все как было, но айтемы которые мы перенесли на треки с эффектами остануться, и их нужно удалять вручную.

**![](https://lh4.googleusercontent.com/sBAgpp2HjEwxKX0VBfVhcwW4mS8Oheknhcgneww_kki6RMJkCc3wG5HKX_pa2Xb52Zdo6l7GRUCwdcm4bO6LvzZM95lOkk4tmprfAHMastnDmQhXVpy_vp64U-4NsEh2oav81er53ipFMOvDjZNxICY)**

Этот способ подходит для больших, нагруженных проектов, где все фиксы стоят на своих местах или их нет, и обработка финальная, т.е. точно не будет меняться в будущем. Только при таких условиях мы можем спокойно фризить все вокальные треки и раскидывать их по трекам с эффектами.

### **3 СПОСОБ - Обработка вокальных треков в том же проекте с последующим рендером по отдельности**
Суть проста: делим проект на 2 зоны. Первая отвечает за всю обработку (в т.ч. групповую).
Втоая зона - за эффекты и сведение с оригиналом.

![](../../../assets/reaper/reaper1.png)

Сводим вокал, выравниваем громкость, рендерим отдельными треками через мастер, затем добавляем эти треки во вторую "зону" и сводим уже с оригиналом.
![](../../../assets/reaper/reaper2.png)

Плюсы в меньшей нагрузке на процессор, удобство работы с эффектами и громкостью отдельных айтемов.
Минус в том что придется рендерить несколько дорог, затем еще весь микс. Фиксы придется рендерить тоже отдельно (если вставляете их в самом конце). Однако это всё компенсируется прессетами рендера.
:::tip
**Рекомендую пользоваться 1 или 3 способом**
:::

----

## **2 ТАЙМИНГ(im4x)**

Сейчас, говоря “тайминг” имеют ввиду “укладку” или “монтаж” реплик; проставление меток на оговорки, пропуски, и эффекты. Выписывание фиксов.

### 1 Субтитры

Чтобы субтитры отображались в Рипере их нужно экспортировать в .srt формат.

Для этого открываем субтитры в AegiSub > Файл > Экспорт субтитров > Экспорт > Указываем Имя файла и Тип файла SubRip (.srt) > Сохранить

<img title="" src="https://lh4.googleusercontent.com/Ki87ddcaDZWAYqRd2Ru9XIGlsAobLytKhSOuk3ILueGaq7TofUfistaf-KvMkhbdtgCw4cAj3UFmIhGaDpXtbhsyKYI72iQmeF-JWFtyqNCnj3Y5lt1rW8Gzq8Y2xespj8vdY97tCdb-FwtKDG4YaL0" alt="" width="232"><img title="" src="https://lh5.googleusercontent.com/0Or90zLI3Vo-Aps0XTopPMhfbu06GYSBXoAzqXQdZssU0pszR0v8_DoEJD9JT2O9JouMHPplfUHMXn5x0KibBwDPuO9QiENEPPVDLOiyox5TUZwHCg67wPOrogPyHSfeoCHEv7ru86QBaq9jIWFx1hc" alt="" data-align="inline" width="335">

Далее, в Рипере Extensions > Notes > Замочек > Import > Выбираем .srt файл > Открыть > Замочек

**![](https://lh6.googleusercontent.com/J6Ag9uTibPi70YwO2JP1l4GgPLfsAPH9YRcW3uVuSe8KFnsE0xKruAtTcUYnX_mR0raJOIqlwBNK2FHDyEskeL3L34iWWLXY4aka3CpHjrddmdxnhB2WRe_vzkFpGlPekD_UP2RqKsPXCgERCzzmcns)**

**![](https://lh5.googleusercontent.com/ZJxZd3d_tOjOxUm27THO2FH_tLFz6Nd4Sm7A_EXgz8QQkf4BK_J6FVX5DDXe0toLWrvjLOiy3qKakasHlDShlLI7q5NUDxVe90BvzG26jb_mmOzU2n6wsb68sT73uO5FA0VF2ly8pQeqrTnNQxrvWSo)**

**<span style="color:red">Внимание!</span> В Рипере есть особенность, он не отображает первую строку субтитров. Чтобы это исправить, перед импортом откройте .srt файл в AegiSub и добавьте строку с любым текстом в самом начале. Сохраните, затем импортируйте в Рипер.**

    **![](https://lh5.googleusercontent.com/zC4RYaIcbih8oFfMava20S3c1t5hNjy4p6RYhS-_Vv6mO3BQ4jHWQpxQ2KPnJRAS7QWF_1rx7cj5d8FdiLes_xXEUABaUqy3IypxK4y7FgGhnqjI2PexOQLS01NB6T7gR0Glxft8HpMxky8ARIao8fc)**

**![](https://lh3.googleusercontent.com/9RdgDUcY32xyfQAAaOCgjXHMfF7VIuIvS7mQssfG6WTnTgYvQ0tgZa7xboqWCcS8DlCzZO6sDAuH6UY7moLbIZj2OSlc3X6YUSnVScS89eiaCJ-16W8JAzRk-IOJJhG5qlXa2A_nsjCBo04O4J06xPY)**

### **2 Укладка**

Чтобы ускорить тайминг, рекомендую сделать бинд для действия I**tem: Auto trim/split items (remove silence)...** Теперь одной кнопкой мы убираем пустоту и шум между фразами сразу для всех выделенных треков. Рекомендуемые настройки ниже.

**<img src="https://lh5.googleusercontent.com/jR0ddrf_5sE5VgBLE7YTmy2yRRdF6uHsUowGDTaUrgEzARRSqL_ivTtBGbdvkn-eWfC-uLAx4MWrRCV5Jw5lYirydPjUDIVP6VweIXZXgG0LBadiIpZRKc8ZP5yrbFiGfNKMEulAkVr5J1nrbgurVxM" title="" alt="" width="405">**

Выделяем айтемы > нажимаем на кнопку на которую сделали бинд > настраиваем (настройки сохранятся) > нажимаем **Process**

**![](https://lh3.googleusercontent.com/nWQvgSYKJe5OghEPVL16-NZbYg3OnN2IrH9cHWjCVWHfH63GVNmqW5DTKJVFwG-65x_yiCJhvGf8WT4MxSd7THbyO2PODrOC2XeWG404ZFol3fXJ87ie5p6GLDuuVAFFmurRjtBpolTfD5lRNg90448)**

**<span style='color:red'>Внимание!</span> Громкие щелчки, хлопки, и фразы в моменте где записан шум нужно удалять вручную, либо на этапе чистки.**

## 3 ПОЛЕЗНЫЕ СКРИПТЫ

### 1 Фаст покраска региона ([скачать](https://drive.google.com/file/d/1Fm5_oJpvCK1s3wQ58Ln_6pxwT-yME13J/view?usp=sharing))

**![](https://lh4.googleusercontent.com/FisyK0enSTFpglfURyCxkB54axITLX9ygDuQYxyg8xqQCFJl0ETviqUaW-QvnuK1Fql65MrIpY55dZQ1ItB7AD8WBdvWb1vbEWQkqAvEVpxKe41t361yzjqfIQ3PmoLkW-xUsAxujze18SzMzM5_FDY)**

### **2 Изменить громкость айтема под курсором**

![](https://lh3.googleusercontent.com/47IEJbGVM1VIgFWp0Q_WZJWxYj_TSTaNnEyZApVoknTRN7YLLagGvq0bPBFw7ePaPoJZBU8APYpWwlTuYarFqoOQyhFZqKJ8fSDIzz8gVLUi5RVIF2Hd8TG-uag8QkB2JbPatLXDx6gaqYestKqaDwg)

**Установка**: 

1. Скачать **Reapack**

2. В поиске найти и установить “**Change volume for item under mouse cursor**”

3. Заходим в **Actions - Show action list**

4. Находим наш скрипт 

5. Заходим в **Edit action** и меняем этот параметр на “**1 db**”

6. Биндим на удобные вам клавиши

![](https://lh4.googleusercontent.com/KCAKJjUh-aoGsC6Lt9P6q6FDldHJ3PuUaZefqLU1PLj29SY8TjbP3R7tXhopyPiBHDq6-HvQ9fLZhsc3v63s_x5C3NAvYZ0oBExwMhZk7t5bQuZq2eQXPz7ghdw1vSwwBwg3r_-2GOgOuKzUl905hBI)

### 3 Таймер в видео плеере ([скачать](https://pastebin.com/rpZ599Dx))

![](https://lh4.googleusercontent.com/xf-1wRTtCqXEOYtT0L6ytg27ffYTlNGzbzlRzCk2aWrJIfwIHtL0kcmQ4HYfkwa3DpenqxlRz3oYGQa4L51e4UkrzKlA1p7vDWXLakH8MSLI5tHV-uARP9KsFa_P6tknBMpncMb8gMqFgbw3KkZEBtA)

Добавляем на дорожку с видео плагин Video Processor (встроенный в Рипер) и вставляем в него [следующий код](https://pastebin.com/rpZ599Dx)

**![](https://lh3.googleusercontent.com/LGU9R0rdLV81vV5oBieFgFA1Rc_r0CtbNWqYjlYRGgrh77M6kbCzqez7Jx2nfNQoOIl5s3pL9pFm4XFk8GUVNUvh87hPsLGCGARV6MftqKrBfl-F0qt5hzEzPfkbveQQdtllo_VQIy6sXDI9N_0csn4)**
