all:
	node_modules/yate/yate blocks/detail/detail.yate > blocks/detail/detail.yate.js
	node_modules/yate/yate blocks/sidebar/sidebar.yate > blocks/sidebar/sidebar.yate.js
	node_modules/yate/yate blocks/header/header.yate > blocks/header/header.yate.js
	node_modules/yate/yate blocks/about/about.yate > blocks/about/about.yate.js
clean:
	rm blocks/detail/detail.yate.js
	rm blocks/sidebar/sidebar.yate.js
	rm blocks/header/header.yate.js
	rm blocks/about/about.yate.js
	rm blocks/detail/detail.yate.obj
	rm blocks/sidebar/sidebar.yate.obj
	rm blocks/header/header.yate.obj
	rm blocks/about/about.yate.obj


.PHONY: clean all