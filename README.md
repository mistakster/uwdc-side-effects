# React. Возможны побочные эффекты

Типовая React-компонента создает дерево дочерних DOM-узлов в зависимости
от параметров, переданных компоненте, собственному состоянию компоненты
и родительскому контексту. А может ли компонента влиять на другую часть
DOM-дерева? Можно ли внутри компоненты использовать стороннюю библиотеку,
генерирующую UI? Как синхронизировать состояние React-приложения и
сторонних виджетов. Рассмотрим ответы на эти вопросы на примерах интеграции
с видеоплеером и географической картой, а также некоторые другие
полезные приемы.
