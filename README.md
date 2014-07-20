# Calendula
Особенный календарь на JavaScript

![Calendula](https://raw.githubusercontent.com/hcodes/calendula/master/examples/theme.default.png)

Возможности:
+ эргономичный дизайн от [Артёма Горбунова](http://artgorbunov.ru/bb/soviet/20070628/);
+ анимация с помощью CSS;
+ поддержка тач-устройств;
+ отсутствие зависимостей от сторонних библиотек;
+ отложенная инициализация;
+ темы: `default`, `black`, `ios` и `metro`;
+ подсветка праздничных дней: `ru`, `tr` и `uk`;
+ локализация: `be`, `de`, `en`, `es`, `fr`, `it`, `pl`, `ru`, `tr` и `uk`.

Поддержка в браузерах:
+ Internet Explorer 9 и выше;
+ Mozilla Firefox 4 и выше;
+ Google Chrome 6 и выше;
+ Safari 6 и выше.

## Подключение
  ```HTML
<link rel="stylesheet" type="text/css" href="build/calendula.all.css" />
<script src="build/calendula.all.js"></script>
  ```
  
Для подключения только нужной локали и темы:
  ```HTML
<link rel="stylesheet" type="text/css" href="build/calendula.base.css" />
<link rel="stylesheet" type="text/css" href="build/calendula.ios.css" />
<script src="build/calendula.base.js"></script>
<script src="build/calendula.en.js"></script>
  ```

Или воспользуйтесь [инструментом для сборки](http://hcodes.github.io/calendula/).

## API
TODO

## События
### open
Открытие календаря.
  ```JavaScript
sc.on('open', function(e) {
  //...
});
  ```
  
  
### close
Закрытие календаря.
  ```JavaScript
sc.on('close', function(e) {
  //...
});
  ```

### select
Выбор даты.
  ```JavaScript
sc.on('select', function(e, data) {
  console.log(data.day, data.month, data.year);
});
  ```


## Примеры
+ [Расширенный](http://hcodes.github.io/calendula/examples/api.html)
+ [Простой](http://hcodes.github.io/calendula/examples/simple.html)
+ [Моя тема](http://hcodes.github.io/calendula/examples/my_theme.html)

## Пересборка
[Сборка на сайте](http://hcodes.github.io/calendula/)

Ручная сборка:
  ```
npm i
gulp
  ```

## Лицензия
The MIT License (MIT)

Copyright (c) 2013-2014 Денис Селезнев <hcodes@yandex.ru>

Данная лицензия разрешает лицам, получившим копию данного программного обеспечения и сопутствующей документации (в дальнейшем именуемыми «Программное Обеспечение»), безвозмездно использовать Программное Обеспечение без ограничений, включая неограниченное право на использование, копирование, изменение, добавление, публикацию, распространение, сублицензирование и/или продажу копий Программного Обеспечения, также как и лицам, которым предоставляется данное Программное Обеспечение, при соблюдении следующих условий:

Указанное выше уведомление об авторском праве и данные условия должны быть включены во все копии или значимые части данного Программного Обеспечения.

ДАННОЕ ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ ПРЕДОСТАВЛЯЕТСЯ «КАК ЕСТЬ», БЕЗ КАКИХ-ЛИБО ГАРАНТИЙ, ЯВНО ВЫРАЖЕННЫХ ИЛИ ПОДРАЗУМЕВАЕМЫХ, ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ ГАРАНТИЯМИ ТОВАРНОЙ ПРИГОДНОСТИ, СООТВЕТСТВИЯ ПО ЕГО КОНКРЕТНОМУ НАЗНАЧЕНИЮ И ОТСУТСТВИЯ НАРУШЕНИЙ ПРАВ. НИ В КАКОМ СЛУЧАЕ АВТОРЫ ИЛИ ПРАВООБЛАДАТЕЛИ НЕ НЕСУТ ОТВЕТСТВЕННОСТИ ПО ИСКАМ О ВОЗМЕЩЕНИИ УЩЕРБА, УБЫТКОВ ИЛИ ДРУГИХ ТРЕБОВАНИЙ ПО ДЕЙСТВУЮЩИМ КОНТРАКТАМ, ДЕЛИКТАМ ИЛИ ИНОМУ, ВОЗНИКШИМ ИЗ, ИМЕЮЩИМ ПРИЧИНОЙ ИЛИ СВЯЗАННЫМ С ПРОГРАММНЫМ ОБЕСПЕЧЕНИЕМ ИЛИ ИСПОЛЬЗОВАНИЕМ ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ ИЛИ ИНЫМИ ДЕЙСТВИЯМИ С ПРОГРАММНЫМ ОБЕСПЕЧЕНИЕМ.
