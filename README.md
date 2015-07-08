#Верстка сайта 1С Развитие
## Шаблонизатор
Использую шаблонизатор [Jinja](http://jinja.pocoo.org/). Он Питонячий. Его PHP аналог [TWIG](http://twig.sensiolabs.org/)  
*Здесь юзаю в оснвном циклы и инклюды*  
Шаблоны хранятся в папке [templates](https://github.com/WishMaster2310/evolution/tree/master/templates)  
Пример:

```
<div class="b-sitemenu__wrapper">
	<div class="b-sitemenu__close">
		<i class="b-icon b-icon__close j-menuToggle"></i>
	</div>	
	<div class="b-sitemenu__inner">
		<ul class="b-sitemenu">
			{% for menu in base.sitemenu  %}
				<li class="b-sitemenu__item {% if menu.mod %}b-sitemenu__item_{{ menu.mod }}{% endif %}">
					<a href="{{ menu.url }}">{{ menu.name }}</a>
				</li>
			{% endfor %}
		</ul>
	</div>
</div>
```
Данные для циклов хранятся в JSON файлике [_base.json](https://github.com/WishMaster2310/evolution/blob/master/fixture/__base.json)

Можно и **без шаблонов** =). Экспортированная статика лежит в папке [export_for_preview](https://github.com/WishMaster2310/evolution/tree/master/export_for_preview)
## CSS Стили
Я использую в качестве CSS препроцессора [LESS](http://lesscss.org/)  
По этому **не надо вносить изменения в файлик [style.css](https://github.com/WishMaster2310/evolution/blob/master/static/css/style.css) руками!!!**
Если нужно что то дописать/подправить/изменить лучше делать это через LESS файлы. Или переписать стиль в файлике style_dev.css (котрый для этого и создан)


Вот такой инпут в каждой форме:

```
    <input type="hidden" name="reqid" class="b-form__helper" value="Заявка на расчет">
```
просто отправляет текстовую метку, идентифицирующую фору, с которой была отправлена заявка