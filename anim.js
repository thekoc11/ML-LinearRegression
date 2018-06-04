window.onload = function() {
	//Content

	var points = [trace1.x, trace1.y];
	

	function computeError(b, m, points) {
		var totalError = 0.0;

		for (var i =0; i<= points.length; i++) {
			var x = points[0][i],
			    y = points[1][i];

			    totalError += (y - (m * x + b)) ** 2;

			    console.log("totalError:", totalError);

		}
		return totalError/points.length;
	}

	function StepGradient(b_current, m_current, points, learningRate){
		var b_gradient = 0.0,
			m_gradient = 0.0,
			N = float(points.length);

			for (var i = 0; i < points.length; i++) {
				var x = points[i, 0];
		}

	}
	update();

	function update() {

		computeError(0.0, 0.0, points);
		//content

		requestAnimationFrame(update);
	}
}