src/opencv.js: opencv/build/
	cp opencv/build/bin/opencv.js src/opencv.js

opencv/build/: opencv/platforms/js/build_js.py
	docker run --rm --workdir /opencv -v ${PWD}/opencv:/opencv "trzeci/emscripten:1.39.5-fastcomp" python platforms/js/build_js.py build