---
title: Решение частых проблем
description: ""
sidebar:
    order: 10
---

## 1 Проблема со шрифтами в MKVToolNix

В новых версиях MKVToolNix некорректно добавляются шрифты в матрешку, в следствии чего кодировщик их не видит. Должно быть как на скриншоте, выделено зеленым, тип MIME: "**application\x-truetype-font**".

Для решения этой проблемы заходим в настройки и ищем "Использовать устаревшие MIME-типы для вложений шрифтом" ставим галочку. Если у вас нет такого, значит у вас старая версия и всё работает правильно.

**![](https://lh6.googleusercontent.com/vDEUT-wsdXhIhk-RGeDMH5uEv_AWjoffHcP6Meh2Mxqa57NyVZkQIFTJuNsNGgXn8Wz3oR2dDxQ6Bk9UuF0KEDh9ZQbo_Gj-xIXPcfJ9RiCsN_R3vSSQC9DQZ5TKnhI4npz9e7rJDKL60YH7ccBumkI)**

**![](https://lh6.googleusercontent.com/9RTIlkxRQdrdF7MQmtXusU8jq944UBKqNw1g6474aXt699eRwl_BbkoLHeaPSNtZlM1q4rgJtcVUFqY2KoXhvbml3zMVI_yUcmi7ugfMdJGoat1nmpV7otihdK1IH1ijfx9PUN5oQyHh48zq2eNiiYc)**

## 2 **Проблема с задержкой**

Иногда можно столкнуться с задержкой японки от видео, в последствие чего ломается оформление и сабы при сборке живут своей жизнь.<img title="" src="https://lh6.googleusercontent.com/86_408j7Kl5yzbNmmZLtqHCSaF67Yish1TMUAKwAwx_i-dOX2KpmSRvoC9I4kG0MsE7JAFKdb80bvuqtsqTSOIRaYxGuXksqQiw00pZrJrIgcfzTGf7M7eNNa7wNRSz19QgkRPtv-PhTUi6dpzq2ZkA" alt="" width="299" data-align="center">

### 1 Простой способ

**![](https://lh3.googleusercontent.com/bLd6IDUXxE032AkFeI54jFNW2vfCdiIz8uSlSWtiz-kVPuY27xqqkGXTZqXq_cp4SE43zFQYGfWqmN6Xaeez7MkKymdr76aEw4d4-O_QXLb6X89gelSgqZB5cukTRv8MbQQjM_ymtbnFC70fU1yofh0)**

При сборке выделяем субтитры и надписи, в пункте с задержкой указываем задержку из mediainfo (в мс)

### 2 Геморный способ

1. Разбираем полностью матрешку, с помощью экстрактора.

2. В аудиоредакторе синхронизируем видео с аудио

3. Экспортируем аудио

4. Собираем матрешку с новой дорожкой




