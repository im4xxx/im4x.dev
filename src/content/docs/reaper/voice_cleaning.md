---
title: Чистка Звука
description: ""
sidebar:
    order: 2
---
## 1 Вариант от Alkhorus’a

Рассмотрим "чистку" стандартными средствами аудишна. Помимо Audition можно использовать IZotope RX, SoundForge, WaveLab и т.д.

1.Первоначально эквалайзером срезаем всё ниже ~60Hz.

**![](https://lh3.googleusercontent.com/ibC-OfLdh7c6DWYNUs0Hqc6tTjVuZIiZV2HOL357hierr0CEL91FaoneEuii2oBb910UaGNofLBYG-Kyj_OpvxtmEJGUzrdhXw-SdUB22J_jyZf0svSpU-kpgWwFUOypftxHgw67PDfXnzrnxIIcD10)**

2. Затем ищем чистый фрагмент шума (синий прямоугольник). Пример грязного шума, который не очень подходит для сканирования в красном прямоугольнике.

**![](https://lh5.googleusercontent.com/hvGNqHar2uhrOQHyv0SHVOwg_eomPHTpZsPAPe85TP3PeiPhYGZRrqt2MY2aewY2CnrkLhYHC0v10tlciRk2tk5xt0aKUN1eNedesq5OH8P6N3KNXw_SN3TnBOVdgA6B0VPOiiS1JH7rLW1pwhBzToY)**

Выбираем плагин для чистки шума. В Аудишне это Noise Reduction, так же есть аналогичные IZotope RX De-noise и Waves x-noise.

**![](https://lh6.googleusercontent.com/bBG5DJem34sj9Sp6QpVwXva2AUMdJXard5okRPX04tqZNUoihSJ_FYXlXegzPXhDZP3hZ2YLHq6BvYswGKtYqK1F0zPddrjIcdlzPRJ4mPltFf4VD-89YO78352mR9h9Os3k2fBOAlbE2NG_InYx9Vw)**

Выделяем и сканируем чистый фрагмент шума, затем выделяет дорогу целиком и применяем.

**![](https://lh4.googleusercontent.com/k0gHNWFQHaPK1SUn0MF-7gpSFwDfsVsTam1-W3LBcAodTFsBc3SKBybM_d1fhsYG84jWYL55UMlvb-a2e9h0cuC8dUnFBC6RVmnmNqGMVwCLqgkcbzIU1C3Lrr-_l9h4alA6oBsSVZ2w-SHFfnHwb0Y)**

Чтобы не испортить звук шумоподавление выставляем процентов 80.

**![](https://lh6.googleusercontent.com/JW8ypDIoz5z2RUv5eXnjfSnd4tlTGU9A8a19obaYWX-fTjHIZBjcHlgNXjHlt3TZDSouFnTZpLTCxcu4bQwRtJCpEyfaTElNZmxy-Qme8TDb-ACVKKM72-kuwqkWt1e_j5wuy3-CG70FlnfEbEFBgBw)**

3.  Затем ищем самый тихий фрагмент реплики, воспроизводим его и смотрим по измерителю уровня примерный его уровень
громкости.

**![](https://lh4.googleusercontent.com/Z46lqKfNOGjQVdD0k404bprtijwci_UId0BRF1FDFO1ijGaaTRH5fLRLuQZrBYAknYNoUYxLbgrS_5muKT4iUMkKw3M0aQKnTRze3178oehxn3cGwGDpbM1_Q8_HE9c72viSlNnQmloX3sT9eYO8H1s)**

По этому значению будем отстраивать threshold в компрессоре.

**![](https://lh4.googleusercontent.com/kzjNOFK8QwOgt1Kxhnu7tun2goQCPiCLzfB5aXuXOiMGwnIspEHaPtiaMbw_WuHsmNINGbslfiDRxrJACkyrAsdDGAEGk88cr28aH5HlZ92IOuQfYYCAyk-RuXoYFqQ1Xw3fQTNuzhMao34ZkexX69I)**

Примерные настройки компрессора Ratio где-то 6:1, атака 1-2 мс, релиз 100-150 мс, threshold подбирали ранее, для данного случая примерно -27дБ.

Одновременно с компрессором, если это возможно, можно использовать gate. Его значение threshold ставим примерно -50дБ, обычно ниже полезной информации нет, но на всякий случай нужно проверять, не обрезались ли окончания у реплик, если обрезались, то threshold нужно ставить ниже.

**![](https://lh4.googleusercontent.com/_arH_5B-K5Vqp46OolAZDGlRtxYiyebpcOzrHpeZ-haVYr6MRJomHqyknWGIfDeEOa0uWccfckT7uTJWJut4jRl7yN_fCe99-bAx8ltWR1UUIIx7wOGnn-T5FfVNSbakWDt5VD8ZQ7pJZdp7MDwgLpY)**

После применения компрессора нужно восстановить громкость дороги до значения примерно -12...-18 дБ

**![](https://lh6.googleusercontent.com/5galEP9TP6LiIiTYing7XYynkGddDFRMpXuWSjcX5RCwfk4W4RdsV5N3C0hlboxyN3Cd3pnRgmoZOj3vMCo4Hn0is3_qAG5bSiRpvDvL4w1N9jxBbKXpDNF6JViYi5VzhegZ0HlIFO5sMZiBXzG023Q)**

Обязательно нужно переслушивать результат, если дорога будет сильно пережата, "комната" сильно вылазит, или ещё какие деффекты из-за компрессии вылезли, то нужно смягчить его параметры (уменьшить threshold или ratio).

**![](https://lh3.googleusercontent.com/e68dkYmH75rpJarcODhe10IxsmiAP_nPS6mf2yNV_Oyd8OZ51BuC5ABE2LYVnezyaBd8zEFNffUuQY3k0-U0dWn_48ylYBgqwSCZaAnSGVYeiG3oPsk1DwX3PUsZ5fKL2hIAa-aqFqDVS6ZEhZ_z_dw)**

 4. После можно применить deesser для ослабления чрезмерно свистящих звуком. Диэссеры все выглядят по-разному, но принцип работы один: сначала находите свистящие звуки, можно на слух, можно по спектру, настраиваете плагин на свистящие частоты, затем на слух (зациклив воспроизведение реплики через плагин) подбираете значение threshold так, чтобы "эски" не били по ушам и войсер не стал шепелявить.

**![](https://lh3.googleusercontent.com/yQYcsWbCC4pE7z9WbJ8-Odh1CE_WPkyD1lTVxEHVn6kgVvtl5Moirb3AfpA2mTcjC7_7aVyEW-dUYEbHyES1Ec5jJyJZz-mumdNqWs1zcLQCOqRrl_gWnMdbSfChikQT-SzS_80SNhDZV3WSVkBkeN4)**

**![](https://lh4.googleusercontent.com/nTckGc_DGuMFr5XQSTRsKjciEJuQS-FNhcFAiPdO2LravxgXHPCt13vz368WbU4CSTbvKPedeOMrVEuTiFTkxYSWrP05Uz1Taxlskzbzc5Q5y4y5gavA0B0LU-l4uMmEMw330p91XcdStoPYeSrm6N0)**

## 2 Вариант от Im4x’a

Скачать
пресет для RX 9: [anilib RX9.xml](https://drive.google.com/file/d/11n1f730djho8za37r8A3K_HaRYNNZOS8/view?usp=sharing) (хз будет ли работать в других версиях)

**![](https://lh4.googleusercontent.com/CsxSMs-koWNSnCdGgD4RtplRP7AXWGyl74EIgZzqfCBrEV6iA1YDfxDTKzrt_8c5VzOyxe-qyAhXT7z2OjCeyRlEX5bsLCrTpntI0KxyrfZaEZ5xztpxaZyfq8aG0RnLQavMN7_REi5A5wIn8MmcnYc)**

Данная цепочка позволит ускорить чистку дорог перед загрузкой их в рипер, нужно только настроить Spectral De-noise для каждой дороги отдельно.

Spectral De-Noise - Основной инструмент при чистке.

Первым делом нужно найти запись шума, обычно его оставляют в самом начале, опенинге, или в конце. Бывает и так что шум не записали, в таком случае ищем его между фраз.

На рисунках ниже <span style="color:green">зеленым</span> выделен фрагмент “чистого” шума, который используем для анализа. <span style="color:red">Красным</span> выделен грязный шум, его стоит избегать.

**![](https://lh5.googleusercontent.com/_NyL97J_6bRGdEHXS8Ocdtj5gZSmXK4pzloeWjUN3-skH0oXvzPq0GK3GTJY7ziTRIjtfxmwbL6t24tEP9Q0PF2HJRrwFdJz1TzTUI9Y3DqUWFhMNZ-XG7nSPZX2SzbB2OKN9rDTGl36LQfVVIqu83g)**

**![](https://lh3.googleusercontent.com/WMkqISNSEIP_GnxkauIYvJV5OC5Bt9FDIDca9zCOblNlHqFfhTPncrmXfrOw0VtjZQEBf0vbQuiPba1m2D8kgULMu-zoN5_k6FzXyMiJICaS7-tjzk8iz2HGAFTZkRnQ5gzxADYquFy5DtzoPNJNstQ)**

**Ниже представлен порядок действий при чистке шума:**

1)Выбираем **Spectral De-noise** из списка нашей цепи.

2)Выделяем фрагмент “чистого” шума.

3)Нажимаем кнопку **Learn**.

4)Выстраиваем <span style="color:blue">синюю</span> кривую так чтобы <span style="color:yellow">желтая</span> была относительно прямой и под отметкой 120dB.

**![](https://lh3.googleusercontent.com/gv8HJ1feerYTr1soejaSIb6gxOTvFc68S6QaJwx-HXhbd-WerirwXi7TonIPfjyNlAPooQuHBYgghdSrMRnSdgvCOj-97dzaDtk-rV79D35Gv08NnnP9eX05h67xsb_amy8VqqAL2PhMRczUIOj_alw)**

Параметр Reduction отвечает за степень подавления, его настраиваем
под пункт 4.

**Quality** - чем выше, тем лучше, однако если на максимальном качестве процесс занимает слишком много времени, то можно понизить.

Далее выделяем всю дорогу (для этого нужно отделить зум, и щелкнуть 2 раза по
области) и нажимаем **Render**.

**![](https://lh5.googleusercontent.com/Cb8arQuUmn9eI4Oh4GxX6jVQ4BmYUCgwfCKVr0UP09geEDRGqAEBmXgpkaB1gJdO7wJBORhW-x75wcF9NrIWBgAmI_tiLhGf_6AOLidAAY5q4en4OwT2fSEA10tsIHzbQjjke-fkJL0yh-A-xxb9dJM)**

После рендера получаем относительно чистую дорогу без шума, кликов и сибилянтов.
Эквализацию и компрессию делаем в рипере.

Сохраняем в WAV **Ctrl+S** или экспортируем во FLAC **Ctrl+E** для экономии места. Рипер
очень хорошо работает с FLAC, рекомендую использовать его.

**<img src="https://lh6.googleusercontent.com/hlZLExAE2YjSxxf1G0_5rI_bgPRIUf8mI0d0njHNin6PNqIqKsjxupMvPZ3wkDQZGGBfnFWtI0JBCWDPl9G553V1uubWiuMHxN7o7N2ZPTLqnsAK5YoSbhW5bOZDWzEdUSO1WVItUe62eUjYvsFJpY0" title="" alt="" data-align="center">
**

