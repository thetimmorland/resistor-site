src/opencv.js: opencv/build/opencv.js
	cp opencv/build/opencv.js src/opencv.js

opencv/build/opencv.js: opencv/platforms/js/build_js.py
	docker run --rm --workdir /opencv -v ${PWD}/opencv:/opencv "trzeci/emscripten:1.39.5-fastcomp" python platforms/js/build_js.py build