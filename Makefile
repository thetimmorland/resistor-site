src/opencv.js: opencv/build/opencv.js
	cp opencv/build/opencv.js src/opencv.js

opencv/build/opencv.js: opencv/platforms/js/build_js.py
	docker run --rm --workdir /code -v ${PWD}/opencv:/code "trzeci/emscripten:latest" python platforms/js/build_js.py build