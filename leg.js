var trace1 = {
  x: [32.50234527, 53.42680403, 61.53035803,47.47563963,59.81320787,55.14218841,52.21179669,39.29956669,48.10504169,52.55001444,45.41973014,54.35163488,44.1640495,58.16847072,56.72720806,48.95588857,44.68719623,60.29732685,45.61864377,38.81681754,66.18981661,65.41605175,47.48120861,41.57564262,51.84518691,59.37082201,57.31000344,63.61556125,46.73761941,50.55676015,52.22399609,35.56783005,42.43647694,58.16454011,57.50444762,45.44053073,61.89622268,33.09383174,36.43600951,37.67565486,44.55560838,43.31828263,50.07314563,43.87061265,62.99748075,32.66904376,40.16689901,53.57507753,33.86421497,64.70713867,38.11982403,44.50253806,40.59953838,41.72067636,51.08863468,55.0780959,41.37772653,62.49469743,49.20388754,41.10268519,41.18201611,50.18638949,52.37844622,50.13548549,33.64470601,39.55790122,56.13038882,57.36205213,60.26921439,35.67809389,31.588117,53.66093226,46.68222865,43.10782022,70.34607562,44.49285588,57.5045333,36.93007661,55.80573336,38.95476907,56.9012147,56.86890066,34.3331247,59.04974121,57.78822399,54.28232871,51.0887199, 50.28283635, 44.21174175, 38.00548801, 32.94047994, 53.69163957, 68.76573427, 46.2309665, 68.31936082, 50.03017434, 49.23976534, 50.03957594, 48.14985889, 25.12848465],
  y: [31.70700585,
68.77759598,
62.5623823,
71.54663223,
87.23092513,
78.21151827,
79.64197305,
59.17148932,
75.3312423,
71.30087989,
55.16567715,
82.47884676,
62.00892325,
75.39287043,
81.43619216,
60.72360244,
82.89250373,
97.37989686,
48.84715332,
56.87721319,
83.87856466,
118.5912173,
57.25181946,
51.39174408,
75.38065167,
74.76556403,
95.45505292,
95.22936602,
79.05240617,
83.43207142,
63.35879032,
41.4128853,
76.61734128,
96.76956643,
74.08413012,
66.58814441,
77.76848242,
50.71958891,
62.12457082,
60.81024665,
52.68298337,
58.56982472,
82.90598149,
61.4247098,
115.2441528,
45.57058882,
54.0840548,
87.99445276,
52.72549438,
93.57611869,
80.16627545,
65.10171157,
65.56230126,
65.28088692,
73.43464155,
71.13972786,
79.10282968,
86.52053844,
84.74269781,
59.35885025,
61.68403752,
69.84760416,
86.09829121,
59.10883927,
69.89968164,
44.86249071,
85.49806778,
95.53668685,
70.25193442,
52.72173496,
50.39267014,
63.64239878,
72.24725107,
57.81251298,
104.2571016,
86.64202032,
91.486778,
55.23166089,
79.55043668,
44.84712424,
80.20752314,
83.14274979,
55.72348926,
77.63418251,
99.05141484,
79.12064627,
69.58889785,
69.51050331,
73.68756432,
61.36690454,
67.17065577,
85.66820315,
114.8538712,
90.12357207,
97.91982104,
81.53699078,
72.11183247,
85.23200734,
66.22495789,
53.45439421],
  mode: 'markers'
};

var trace2 = {
  x: [2, 3, 4, 5],
  y: [16, 5, 11, 10],
  mode: 'lines',

  setX : function (X){
  	this.x = X;
  },

  calcY : function(m, b){
  	this.y.length = 0;
  	for (var i = 0; i < this.x.length; i++) {
  		this.y.push(m*this.x[i] + b);
  	}
  },

  getX : function(){
  	return this.x;
  }
  getY : function() {
  	return this.y;
  }
};

// var trace3 = {
//   x: [1, 2, 3, 4],
//   y: [12, 9, 15, 12],
//   mode: 'lines+markers'
// };

var data = [ trace1];

var layout = {};

var div = document.getElementById("myDiv");

Plotly.newPlot(div, data, layout);