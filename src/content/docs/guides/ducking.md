---
title: Дакинг
description: ""
sidebar:
    order: 7
    badge:
        text: New
        variant: tip
---



---

Дакинг, если по простому - это уменьшение громкости оригинальной (в нашем случае японской) аудио-дороги в момент звучания русской озвучки.

Есть несколько вариаций дакинга, простые и более продвинутые. Рассмотрим их.

---



## **1 Классический (im4x)**

В простом дакинге используется компрессор с функцией сайдчейна.

**![](https://lh6.googleusercontent.com/onjddvawSfqrhPzZg7EVLZMXNboadd5XYqEV00wuFpEulWFilhb3jaE1lUBNWdBTKplwqQzg1ZzKjhZmCXqWhXdKFM_9_FnXimxNLtSuMooxrA6Yf6E0sE1CbUEpUm8iRZMVb3D1b4v9GbRHmhAxK0s)**

**![](https://lh5.googleusercontent.com/joCWPlbtpb0iD5bV_8ZEeqsZYDPnAwT6z2eov67kqeJZ4BYCTt25QicmR_iQOLDPj13dJmHL8xGRsJJXZ6RAgbcDoNNQIGhswGMdkSMZrdzGJ_6g1M9okckC_Lf9xVdFSiywy3z7bJ2cyT8QT9v076A)**

Для начала нужно сделать посыл из папки с озвучкой на дорогу с оригиналом в каналы 3/4 (это и есть сайдчейн) как на гифке.

<img title="" src="https://lh5.googleusercontent.com/ZtCD2ngLzpnLtVuQNbA8raLYaaH8-5HkzhDz6ejr2j_09D29NU0xNpWe9jJV7hTNE9P9L0y6xquGk2llMbjJNUqC-oSgs6sfSgS6ZNCxPtUwIIAt3Zrs3KoEvRCWfE8QMMffWv7_cnrT5nn3aVPSCDU" alt="" data-align="center">



На трек с оригиналом добавляем добавляем компрессор, в данном случае стандартный ReaComp, настраиваем как на скрине и слушаем результат. Предполагается что вы уже знаете за что отвечает каждый параметр компрессора.

Можно пойти дальше и использовать FabFilter Pro-C2 вместо стандартного.

<img src="https://lh4.googleusercontent.com/4bZVJcmqMQVG3yT61_kHpDh6WYMslULxuKkhFuW_a8n1tMqPZ6PsJKJDn37AH8qNZZ799liW2AqqC7Oj_jpcHE3VLiUIdQPBDWMFyI0jVMfzHctSMj4Y5iwnE1Wtt2wR9DYASCEpNxoFpELfQ-QltS8" title="" alt="" data-align="center">



Тут настройки чуть другие, обязательно выключаем AUTOGAIN и выбираем стиль Vocal,

в панеле SIDE CHAIN выбираем Ext, остальные параметры настраиваем на слух.

Мы можем чуть улучшить результат выкрутив ползунок STEREO LINK вправо (на скрине ниже), таким образом глушиться будет только Mid часть оригинала, а звуки и музыка по сторонам не будут. Мы как-бы впихиваем нашу озвучку в центр микса, а не поверх. <span style="color:red">Однако! </span>в моментах с широкими по панораме эффектами, например реверберация, это не будет работать нормально, и нужно будет автоматизацией возвращать этот параметр в исходное положение. (пример ниже)

<img title="" src="https://lh3.googleusercontent.com/1pHywJ7jm_x9Rpnyw_rLdwkOgyEI9zvMvdK5FYjN714wiUgdbfck0kv78TWiMGzUtyLQKGmL31rIBvI09v-9l4AdQZhdxb9VWgJ4gppjB7B8NUk6N2k9se8uJLuOAvaOh00eFJ6PfGtVQSkqx0QNY8s" alt="" data-align="inline"><img title="" src="https://lh5.googleusercontent.com/CDf247IuGEjos3DVuyTrrN0BUwvs4pdiB55iMaYeaYBL1lq6oC3klSCwnme8K-2ETVbArbc-vfgpP0CEixs5JMVkgZr6FsAV64GWX_O8_cQPZALKBYeLiTVXoPEMuFJJCVTWtdR9cBthkXy0ZBdhf-0" alt="" data-align="inline" width="371">

**![](https://lh3.googleusercontent.com/Yp0tWlVv2TsKdVhJmEE7AW_NuoAWA5HA2ilvxK22NjvPbuNWzYAPMrEqy6LRzvzRzRefN-FOF3JuawUe7LL0-xl-ABxuvvlcdK8BC4a2JT8LiA0BGtFPGokRLXaxHGq2qme9A3nm2SfPdUX5WGukUuc)**

![](https://lh5.googleusercontent.com/kJYqTNh4TziORJlifrKkdzmDQgVyDvLYOfMQICfDiVeMl5ypuP9MMTJXSgJ9fx16zIs7KclgQuxXx6Ay-gNJgEip-BNTWqwEuX80871oI6kyTUIGR6-lhgWbel8UaXvnaFYptqzt9Qx_-2Tafllg2tI)

<span style="color:red">Важно!! </span> 

Не нужно сильно глушить оригинал, он должен быть слышен за русской озвучкой, но и не должен перебивать ее, найдите баланс.



## **С нейронкой UVR (im4x)**



Системные требования:

ОС - Windows 10/11

Видеокарта - Nvidia минимум 4гб видеопамяти

Память - 16 гб

Диск - желательно ССД и файл подкачки добавить

Проц - Чем современнее - тем лучше. Если ЦП достаточно мощный, то и без видеокарты от зеленых можно обойтись, просто сильно дольше по времени будет.

1. Скачать и ознакомиться подробнее можно тут [GitHub - Anjok07/ultimatevocalremovergui: GUI for a Vocal Remover that uses Deep Neural Networks.](https://github.com/Anjok07/ultimatevocalremovergui)

2. Устанавливаем как предлагает установщик, ничего не меняем, иначе могут быть проблемы с работой.

3. Запускаем программу и сразу переходим в настройки (1) затем Download Center (2) Выбираем **VR Arch** и модель как на скрине (3), загружаем (4)



![](https://lh4.googleusercontent.com/1rkW5CoET_GcfBLALVIuyLzR37jgYR03iAKl84gSA45tjvzLMXZM5gLM9bw-vYu2ngZd5IcrKinGdrPmGurtNU9ygPtRGLgIX_-9VYqyc18rjE2zUDLI0Wk7oj8FxegHGxgcH2EBzhOOUXbqHkk2o6o)

После многократного тестирования различных моделей, пришел к выводу, что на данный момент модель 8_HP2-UVR работает лучше остальных, в будущем возможно что то поменяется.



### НАСТРОЙКА

(1) Выбираем исходный файл который нужно разделить. Должен быть в стерео или моно. Поддерживаются наверное все форматы, можно сразу указывать равку .mkv. (Можно выбрать сразу несколько файлов)

(2) Выбираем папку куда сохранить результат, обычно та же самая папка.

(3) В каком формате будет вывод WAV или FLAC - по желанию.

(4) Если видеокарта Nvidia то ставим галочку, если другая - убираем.

(5) Выбираем лучшую модель **8_HP2-UVR**

(6) Запуск процесса, тут понятно.



![](https://lh4.googleusercontent.com/OX5NN4WIMkbjrnlLVuM4y0ljTJDJqhqIcPw0tFkpVXFZI95ZEf_g76AxYHyoQSxPqCt1WmtMIuBi_rVljTZshrc4IfYK9bIvFCluYs4RCFIorrWEbKED3Gz_flA8ihqWVNFHZIgbj-Qqf3XWLXIbQFc)

**![](https://lh3.googleusercontent.com/tZ4SPumy9_7OvRHbPFiIokOX9UK2mzO3tJqT2uAWZLqxh7xkj2BneTHmwX2DxMGIOmMRz1YTo6W2Wk1Gwa5xIx6UnTG3MHu9Rncdl2G2WSr9abV39XD7-qBotZ_r18YJcGrT0qFNqM7eJb0bUsIp0L0)**

**Чем мощнее видеокарта тем быстрее процесс.**

В настройках, во вкладке Additional Settings, можно выбрать битность аудио, если звук в BDRip 24 бита, желательно выбрать это в настройках, можно и для всех релизов делать 24 бита.

**![](https://lh3.googleusercontent.com/yIy4HEJuaZqo0DILw6QCSHm03kHmZugTOck1rr8fUYlQibTZOX7QkEfUcDBH38pt3EkxCcPYr81dNiqKmu86t4r6p4egzOxDReUjNTKpXeRYWjYbKKnNQII6PaKzI_tO-BL3e80zAcgea_MjiUnZ3Pw)**

Для продолжительных аудио файлов, фильмов например, возможно придется предварительно нарезать аудио на несколько частей, или иметь овер много ОЗУ + видеопамяти, иначе процесс будет крашиться из-за недостатка ресурсов.



### ВОКАЛ





В рабочей станции теперь вместо одного файла равки добавляем 3 файла - видео, инструментал, вокал.

(1) Инструментальный трек никак не трогаем на данном этапе.

(2) На треке с вокалом делаем сайдчейн компрессию, так же как и при обычном дакинге. (о моих настройках компрессии чуть позже)

(3) Алгоритмы естественно не идеальны, и поэтому очень часто в вокальный трек попадают различные эффекты (на скрине выделено <span style="color:orange">оранжевым</span> цветом). Чтобы дакинг не срабатывал в такие моменты, и не глушил эти эффекты, я привык автоматизацией отключать плагин (выделено <span style="color:green">зеленым </span>). Это конечно не обязательно, но так лучше звучит.

**![](https://lh3.googleusercontent.com/RDtI8NCVydJX1yeYagDNGJ5GTWF3zMQE16jceo51avpsdCkV46-f8ygQdN_gcuo0u5wNQJgK_uzujkHQOBGS6C9luNqIr_H0dAufoQ6piDjjz6QhGo1NufX2v4rz9Q5R95UG9uuZRIPSJZ8jTFTuGxE)**

Более удачные примеры отключения дакинга:

**![](https://lh3.googleusercontent.com/ZVJsv7tUri5PmoDG3tm7IsrlI6VswhLCyp-sz0Msyiuffw45PN0SmYcviuzq3KijTx52B9aXeGoAU1DNueccX4E34kFC6t7aMSh3ut9k95IV6Ypvo01LTZFsgdbERKKKQ3MCiYksOd37IuactbvsYTM)**

**<img src="https://lh3.googleusercontent.com/Qu9GH94Ld9QN-zwT82VInzT5Wogj3hVXILm4X6l6r5McmKO59VvgSh6zerd6P2IEawmDG5u_Ixml3D4kMkeGvjEqkXp-E2a8vhqRD_jARduVrrPjzhAXZuBf3tsAi4Ba3RL5UqJI74ubdm9_3BaAw5U" title="" alt="" width="573">

**![](https://lh5.googleusercontent.com/GmSStMaajwIbztxkPR6C7a3tclxCWz9U_2EBF_Rutin5RkVbxv2VL95313OzKAc59lG1eDrBOMGOsC9Wxwz7jfwWcrIxDUVUxnQRfzvsn30aqExPZkoiPm0-ze_JofrY-RBn0o1IWO7GXh4UgnZktjg)**



### **ИНСТРУМЕНТАЛ**

По ходу тайминга прислушиваемся к инструменталу. Т.к. давим мы только оригинальный вокал, то на инструментале, среди музыки и эффектов, иногда отчетливо будут проскакивать звуки из вокала. Чаще всего это резкие согласные звуки (К, Б, П, Т, С, Ц и прочие) оттого что они резкие, они хорошо привлекают к себе внимание. Отмечаем такие места маркерами, солируем инструментальный трек чтобы лучше разобрать есть ли косяк или нет.

![](https://lh6.googleusercontent.com/kq799y5HvweWItUuMZ9bCeSoe_Y8BExDRUfZt3uLxJUjzPT4rh37BzXXychqT0L4rwD5oiFaemHJ-yHsMS2xGeYXiuVBuCCYsdBCUFurw28vfcNpsFo5r2R7loubNjVZeIjKOr1LvSU7VCHwozyJoEY)![](https://lh6.googleusercontent.com/rmypGCucYDhlzTSY3aZBU-ckbVkdW-b-5yAoQSaQuX1KBKE0kmx1OUJdoiVz808m2gBnKhzst66mSNmYVRGI4hsdUcVj6YGpO1w11g0bDh34AIY658XKuJb5GySs0qh3xavL8XjoZIK-BtmNYGHpI3w)

![](https://lh4.googleusercontent.com/mRvE8PF8s6nh6-PxdKx4Ek86FMa_veS7Wmtf2xEOspQdiUv5hxlZX3Ibij0wrnXv8RLfRATPyo9OfzElpSid1GM7NniCOU-rdqhZtIOMYEttoeerlT6M6IPwMLT0_l3oD3dwpKAl-zvIYOX8gXUP888)

**![](https://lh6.googleusercontent.com/79uTmzTZiFfzyrB46gKsEloIHG0jfYm2anrr7AD47xd6_JjZCLxoksN8zhUZy22Q3yb--e8j-OeVIlvDirZ_UjwEFd0niKT02f26CZTCIDdTQ4-kFsW--6oGaZuyE6upCE1_70dIt1PykBwDvRZtd5U)**

Если в оригинале вокал сильно низкий, часть этих низов может попасть в инструментал. Звучит как низкий бубнеж в котором едва-ли можно что-то разобрать

![](https://lh4.googleusercontent.com/Y6MGW5MBx2Bq_llKg4KBpP3b81fRX3u_Nt5BcK1hb0YPvCFZyb3nx7460uXKxqBECuEgHEAccMGTNjyPUe3JPdzyrJADOsMh8VcWyMgX9cI9wIR32Ic92-rmCuv2a3nKJzLpcIYSBb7sf0ycgENxA-I)

Фиксится это разными способами, для меня самый удобный - редактирование спектра в iZotope RX.

![](https://lh5.googleusercontent.com/hcz_QosZ8plHSkKJx0_0FZAsHe_NNBTf0DLEdXNktZ1st5b2yHycJHm02lCBbxCXPk3EE031g6sGgqA3kGQZq7zlkrun9BApnIK9lRH7TnZ4ayr45drct4O6G5iYVFRcjftG0IDq2uFWe3hkUmbIwCQ)

В RX находим нужные фрагменты

![](https://lh6.googleusercontent.com/1OF3uTI3foRhAxLlOmYkGafyhzAKAc2I52h5gRj4Kh9pL7PaHVH72PBWZw8gkoltuGGEtNfAYtsgEVAQDQQjvsi3y7yMbZ41gmFNGl25sjmIJytg-xJY-0TIm8kb10wsFD8x_CP7IXIFl_dcVYb5IG0)

В нижней части ставим галочку на Instant process, режим Attenuate и нужный режим выделения.

**![](https://lh4.googleusercontent.com/1_myGFTnMlWxeL5Q5XBXl1hmETO5XwfqKgui9oIc6OZhsectww-khu71ncw-SpUHmPlJ_h53ZMZ2E5f6Rg6VqbJ184rZX6acJZ1FvnT9eNko6XvN0RShKnLK7TRdVbstGBa7wMbVbwUPoG56Mg5yY8E)**

Выделяем фрагмент

**<img src="https://lh6.googleusercontent.com/0MMtN6xK7Wffi6dFsOUMLRroQvesFUNicNII1cGP498CjV4nH_KHhURCZi60Xa1_f7jvG1wLvNmTDGyHZxxEIDW7WWbkZ3Vq4JDT7jk9H4dSvEekVm2nv0OsvIbSKg8z7En-IlZIeMaXFS0us3C7it4" title="" alt="" width="233">**

**Лишний звук испарился 👍**

**![](https://lh5.googleusercontent.com/q_w0fb-qXeuyzVPpbjcy4WPlQXk6l368k7CV_VtOzFuaYBDzhlHspAqrbUkKPKbJtMCw0M1f5I4G4dMjv0ncbwclO4u9_5icEBetyP4lYm_HHD_ur8Ju-xVH1HWzFFjBPPEJIxhNCzYYwuvvsPF0yag)**

Повторяем процедуру для оставшихся артефактов

**![](https://lh3.googleusercontent.com/wHVPW4c3V1-6A18IS1lTH12uOMMRRY3uY11rKeBcufyPTkXo1ro6yLYUTmRzX47eM8E2sIp8uuDEtqWgMLTrjtYnz3aQenN6Fs9uns_tDQOMe8OxUeL1znKp2myPjRBXr_n8fbWXS_SFrc7JTLCspdM)**

**![](https://lh3.googleusercontent.com/DuIqm1HbyZCAIsgo1VWi1IJUBgu4YuBbyxR61IZ8sRpMPvCHSFhJQKkn3elscAwdN6eBAk2tR9ue4VlbICHWOwu_5HDLSS-AN03AIAs00717p5rTu_ExEyNkxVn4urIKVoFRaB7XPnKy1t8fa45Z28E)**

Иногда одного выделения может не хватить, повторяем процедуру несколько раз, добиваясь приемлемого звучания в этом месте.

Выделять нужно только те частоты, в которых находятся артефакты, а не все подряд.

**![](https://lh6.googleusercontent.com/BuirIl5PLtMmrS5OPYQ4O3U2w2V6TyRw2gCJH7VNfORJBJpGOuCnWxjcV-UmFT-6whET_1zkMyFvfiB2WNFYkXde3uLXhsFda5fJm3e-rYElOUDUoRmoCnTJGKrSFvlQLFO0WXLTTj6SGwIlz2t_IHM)**

По окончании всех манипуляций, сохраняем и перезаписываем файл

**![](https://lh4.googleusercontent.com/bqelKqg6GHuvRvknGmZQBhQiPCtcpIKEgjEPMBofoGazdfD4uGRBWMZoqiDYWwdMiROPJ_xx1p_4tj_KYS1QfaRzWmQ7GX79RliY9urapiis-KkfKlmd28a-6CNarnZfHYk3Ju4PmtQLK8Fuqw2qHsk)**

Если работаете в рипере, он подхватит новый файл и перестроит пики.

**До:**

**![](https://lh5.googleusercontent.com/R1wHyfOZUtrRPVGsYGacOTLfQxZRYH7ku25dxF5N8X_NPSHyconVvpU4nK4nzBMdQ-w03jtfq1Xc53RtklXOxN-JEotfJ1OihdTcU2Y-J_cRvHzL9KTvt0ePqRlHfExJ9e3Rjkug9XOMdkesJO_wKq8)**

**После:**

**![](https://lh3.googleusercontent.com/FhC0I77thj-ulU2d3SC0Bx3_8RDJ8qib1HrpENiJAcxXeQlsMfM-XHgZo8M6vpDU6hO9tHTqGM_52_8hQL8gE3wZPVVUdHBrmsrUwj9kJKw8vQvFQg0GCE78edjnAVS2A-_lrzV2zjyTo0nLpqK6Ac4)**

**Слушаем результат в полном миксе, и, удостоверившись что все хорошо, рендерим и собираем серию. Вы великолепны 🥳👍**



### Мои настройки компрессора:



за уровень подавления отвечает Range - чем больше уровень, тем сильнее подавление.

Оптимальные значения на мой слух от 10 до 12 дб

**![](https://lh6.googleusercontent.com/BXVhNYIKOn9a4auD0dmCD7UbQbVx-apBzOkEinxo7goHux5QM8N-o9wvbuJGxQSfe6_3nVmFjMAWNKNq_YjDoCv8Q_ltp_IvawGSmGYWtPupn4ULnKxqJJ1unBAiVIHUIsIWG3KK9CjcqRtFnQhJo4k)**


