# evolution
Верстка сайта 1С Развитие
## Шаблонизатор
Использую шаблонизатор [Jinja](http://jinja.pocoo.org/). Он Питонячий. Его PHP аналог [TWIG](http://twig.sensiolabs.org/)  
*Здесь юзаю в оснвном циклы и инклюды*  
Шаблоны хранятся в папке [templates](https://github.com/WishMaster2310/evolution/tree/master/templates)  
Пример:

```
<div class="b-clients">
	{% for client in base.clients %}
		<div class="b-clients__item b-clients__item_{{ loop.index }} j-modal"  data-target="#modalForm4" >
			<div class="b-clients__item-inner">
				<img src="{{ base.STATIC_URL }}img/{{ client.img_hover }}" alt="" class="b-clients__item-img_hover">
				<img src="{{ base.STATIC_URL }}img/{{ client.img }}"  alt="" class="b-clients__item-img">
			</div>
		</div>
	{% endfor %}
</div>
```
Данные для циклов хранятся в JSON файлике [_base.json](https://github.com/WishMaster2310/evolution/blob/master/fixture/__base.json)

Можно и **без шаблонов** =). Экспортированная статика лежит в папке [export_for_preview](https://github.com/WishMaster2310/evolution/tree/master/export_for_preview)
## CSS Стили
Я использую в качестве прпроцессора [LESS](http://lesscss.org/)  
По этому **не надо вносить изменения в файлик [style.css](https://github.com/WishMaster2310/evolution/blob/master/static/css/style.css) руками!!!**
Если нужно что то дописать/подправить/изменить лучше делать это через LESS файлы. Или переписать стиль в файлике style_dev.css (котрый для этого и создан)

