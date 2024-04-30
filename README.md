## Deploy:https://skypro-music-blade.netlify.app/
## Приемочное тестирование.

1. **Работа модального окна авторизации пользователя**

- Стартовый экран - экран "Войти".
  Пользователю предлагается ввести почту и пароль, если он уже зарегистрирован, и нажать "Войти". Если пользователь еще не зарегистрирован, ему необходимо нажать "Зарегистрироваться".После заполнения данных
  и нажатия на кнопку “Войти” пользователь попадает на главный экран - “Треки”.

2.  **Работа модального окна регистрации пользователя**

- На экране регистрации пользователь придумывает почту
  и пароль, а также повторяет пароль. После этого он нажимает “Зарегистрироваться”.После регистрации пользователь снова попадает на стартовый экран “Войти”, где вводит логин
  и пароль заново.

3.  **Работа главной страницы - экран "Треки"**

- Здесь отображаются все имеющиеся треки и подборки.Изначально нижний плеер скрыт. Он показывается, только когда пользователь нажимает на любой из треков. При перезагрузке страницы плеер тоже скрыт.В списке треков фиолетовой точкой отображается текущий трек.
  Если текущий трек воспроизводится, то точка “пульсирует”.
- Клик по пустому сердечку добавляет трек в Мои треки.
  Клик по залитому сердечку - убирает трек со страницы Мои треки.

4.  **Фильтрация треков**

- Пользователь вводит название трека в строке “Поиск”, и происходит их фильтрация по названию. Это значит, что, если пользователь ввел "tro", ему выдаст трек с названием "Elektro" и все треки, в названиях которых есть строка tro: "Troelf", "FooTroBar"
- Пользователь может искать треки по исполнителю и жанру.
  При нажатии на любую из подборок, пользователь переходит на страницу с нужной подборкой.
  В ней отображаются все треки, которые в нее входят.
  Поиск по исполнителю

- При нажатии на “исполнителю” пользователь видит выпадающее меню, в котором показываются только первые пять элементов (остальные нужно скроллить)

Пользователь может выбрать несколько исполнителей одновременно.
Поиск по жанру

- При нажатии на “жанру” пользователь видит выпадающее меню, в котором показываются только первые пять элементов (остальные нужно скроллить)

Пользователь может выбрать несколько жанров одновременно.

5.  **Подборки треков**

- В каждой подборке отображается список треков, которые в нее входят

Поиск по исполнителю, жанру,
не осуществляется.

6.  **Работа плеера**

- Изначально нижний плеер скрыт. Он показывается, только когда пользователь нажимает на любой из треков. При перезагрузке страницы плеер тоже скрыт
- Кнопки управления запускают проигрывание следующего/предыдущего трека на странице. Если вы отфильтровали треки, то в таком порядке и следует переключение.
- При включенном повторе проигрывание трека зацикливается.
- При нажатии на shuffle, треки на странице в рандомном порядке миксуются. Эту опцию можно включить и выключить. При каждом новом включении, треки миксуются заново
- Меняется громкость трека.

7.  **Левое боковое меню**

- При нажатии на бургер, левое меню показывается или скрывается.
- Логотип и “Главное” ведут
  на страницу "Треки"
- “Выйти” разголинивает пользователя. При разлогине показывается экран входа.
  в приложение.
- “Мои треки” Ведет на страницу ,
  в которой собрана подборка треков, добавленных в избранное.
