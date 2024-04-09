const ICONS = {
	// "account": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" class=\"\" width=\"16\" height=\"18\" viewBox=\"0 0 16 18\"><path data-name=\"Rounded Rectangle 803 copy\" class=\"cls-1\" d=\"M933.5,961H922.469v0a2.486,2.486,0,0,1-1.848-4.13c0.018-.026.026-0.052,0.046-0.077,1.374-1.7,4.476-2.79,6.833-2.79h1c2.357,0,5.459,1.089,6.833,2.79,0.02,0.025.028,0.051,0.046,0.077A2.475,2.475,0,0,1,936,958.5,2.5,2.5,0,0,1,933.5,961Zm0.5-2.533h0a1.509,1.509,0,0,0-.619-0.9A10.224,10.224,0,0,0,928.5,956h-1a10.224,10.224,0,0,0-4.872,1.566,1.5,1.5,0,0,0-.619.9h0c0,0.01,0,.024,0,0.033a0.5,0.5,0,0,0,.5.5h11a0.5,0.5,0,0,0,.5-0.5C934,958.491,934,958.477,934,958.467ZM928,953a5,5,0,1,1,5-5A5,5,0,0,1,928,953Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,928,945Z\" transform=\"translate(-920 -943)\" fill=\"#999999\"></path></svg>",
	"account": "<svg width=\"19\" height=\"22\" viewBox=\"0 0 19 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
		"<path d=\"M9.93189 9.90918C8.99243 9.90918 8.07406 9.6306 7.29293 9.10866C6.51179 8.58672 5.90298 7.84488 5.54346 6.97693C5.18394 6.10898 5.08988 5.15391 5.27316 4.2325C5.45644 3.31109 5.90883 2.46472 6.57313 1.80042C7.23743 1.13613 8.0838 0.683731 9.00521 0.500452C9.92662 0.317172 10.8817 0.411238 11.7496 0.770754C12.6176 1.13027 13.3594 1.73909 13.8814 2.52022C14.4033 3.30136 14.6819 4.21972 14.6819 5.15918C14.6819 6.41896 14.1814 7.62714 13.2906 8.51794C12.3998 9.40873 11.1917 9.90918 9.93189 9.90918ZM9.93189 2.30918C9.36821 2.30918 8.81719 2.47633 8.34851 2.78949C7.87983 3.10265 7.51454 3.54776 7.29883 4.06853C7.08312 4.5893 7.02668 5.16234 7.13665 5.71519C7.24662 6.26803 7.51805 6.77586 7.91663 7.17443C8.31521 7.57301 8.82303 7.84445 9.37588 7.95442C9.92872 8.06439 10.5018 8.00795 11.0225 7.79224C11.5433 7.57653 11.9884 7.21124 12.3016 6.74256C12.6147 6.27388 12.7819 5.72286 12.7819 5.15918C12.7819 4.40331 12.4816 3.67841 11.9471 3.14393C11.4127 2.60945 10.6878 2.30918 9.93189 2.30918Z\" fill=\"#666666\"/>\n" +
		"<path d=\"M18.05 22.0002H0.95C0.698044 22.0002 0.456408 21.9017 0.278249 21.7262C0.100089 21.5507 0 21.3128 0 21.0646V18.2578C0 16.2727 0.800712 14.3689 2.22599 12.9652C3.65126 11.5615 5.58435 10.7729 7.6 10.7729H11.4C13.4156 10.7729 15.3487 11.5615 16.774 12.9652C18.1993 14.3689 19 16.2727 19 18.2578V21.0646C19 21.3128 18.8999 21.5507 18.7218 21.7262C18.5436 21.9017 18.302 22.0002 18.05 22.0002ZM1.9 20.129H17.1V18.2578C17.1 16.769 16.4995 15.3411 15.4305 14.2884C14.3616 13.2356 12.9117 12.6442 11.4 12.6442H7.6C6.08827 12.6442 4.63845 13.2356 3.56949 14.2884C2.50053 15.3411 1.9 16.769 1.9 18.2578V20.129Z\" fill=\"#666666\"/>\n" +
		"</svg>",
	"arrow-down": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" width=\"5\" height=\"3\" viewBox=\"0 0 5 3\"><path class=\"cls-1\" d=\"M250,80h5l-2.5,3Z\" transform=\"translate(-250 -80)\"/></svg>",
	"arrow-left": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15.969\" height=\"12\" viewBox=\"0 0 15.969 12\"><defs><style>.cls-1{fill:#999;fill-rule:evenodd;}</style></defs><path data-name=\"Rounded Rectangle 982 copy\" class=\"cls-1\" d=\"M34,32H22.414l3.3,3.3A1,1,0,1,1,24.3,36.713l-4.978-4.978c-0.01-.01-0.024-0.012-0.034-0.022s-0.015-.041-0.03-0.058a0.974,0.974,0,0,1-.213-0.407,0.909,0.909,0,0,1-.024-0.123,0.982,0.982,0,0,1,.267-0.838c0.011-.011.025-0.014,0.036-0.024L24.3,25.287A1,1,0,0,1,25.713,26.7l-3.3,3.3H34A1,1,0,0,1,34,32Z\" transform=\"translate(-19.031 -25)\" fill=\"#666666\"></path></svg>",
	"arrow-up": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"5\" viewBox=\"0 0 8 5\"><path data-name=\"Rounded Rectangle 890 copy 2\" class=\"cls-1\" d=\"M517.778,610.8a0.721,0.721,0,0,1-1.016,0L514,607.769l-2.79,3.028a0.715,0.715,0,1,1-1.01-1.011l3.273-3.552c0.009-.009.012-0.021,0.021-0.03a0.723,0.723,0,0,1,1.017,0,0.022,0.022,0,0,1,0,0l3.265,3.577A0.712,0.712,0,0,1,517.778,610.8Z\" transform=\"translate(-510 -606)\" fill=\"#666666\"></path></svg>",
	"avatar": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" class=\"\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\"><path data-name=\"Ellipse 206 copy 4\" class=\"cls-1\" d=\"M909,961a9,9,0,1,1,9-9A9,9,0,0,1,909,961Zm2.571-2.5a6.825,6.825,0,0,0-5.126,0A6.825,6.825,0,0,0,911.571,958.5ZM909,945a6.973,6.973,0,0,0-4.556,12.275,8.787,8.787,0,0,1,9.114,0A6.973,6.973,0,0,0,909,945Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,909,955Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,909,949Z\" transform=\"translate(-900 -943)\" fill=\"#666666\"></path></svg>",
	"basket": "<svg width=\"27\" height=\"25\" viewBox=\"0 0 27 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
		"<g clip-path=\"url(#clip0_409_9)\">\n" +
		"<path d=\"M1.26001 1.57422H5.94003\" stroke=\"#666666\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/>\n" +
		"<path d=\"M5.93994 1.57422L9.89993 17.5001\" stroke=\"#666666\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/>\n" +
		"<path d=\"M10.6201 17.5H25.4701\" stroke=\"#666666\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/>\n" +
		"<path d=\"M12.42 23.7963C13.9112 23.7963 15.12 22.5527 15.12 21.0185C15.12 19.4844 13.9112 18.2407 12.42 18.2407C10.9288 18.2407 9.71997 19.4844 9.71997 21.0185C9.71997 22.5527 10.9288 23.7963 12.42 23.7963Z\" stroke=\"#666666\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/>\n" +
		"<path d=\"M22.7701 23.7963C24.2612 23.7963 25.4701 22.5527 25.4701 21.0185C25.4701 19.4844 24.2612 18.2407 22.7701 18.2407C21.2789 18.2407 20.0701 19.4844 20.0701 21.0185C20.0701 22.5527 21.2789 23.7963 22.7701 23.7963Z\" stroke=\"#666666\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/>\n" +
		"<path d=\"M23.1301 13.5186H10.1701C9.63006 13.5186 9.09006 13.1483 9.00006 12.5927L7.29006 6.38902C7.11006 5.55568 7.65005 4.81494 8.46005 4.81494H24.7501C25.5601 4.81494 26.1901 5.64827 25.9201 6.38902L24.2101 12.5927C24.2101 13.1483 23.7601 13.5186 23.1301 13.5186Z\" stroke=\"#666666\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/>\n" +
		"</g>\n" +
		"<defs>\n" +
		"<clipPath id=\"clip0_409_9\">\n" +
		"<rect width=\"27\" height=\"25\" fill=\"white\"/>\n" +
		"</clipPath>\n" +
		"</defs>\n" +
		"</svg>",
	// "basket": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" class=\"\" width=\"19\" height=\"16\" viewBox=\"0 0 19 16\"><path data-name=\"Ellipse 2 copy 9\" class=\"cls-1\" d=\"M956.047,952.005l-0.939,1.009-11.394-.008-0.952-1-0.953-6h-2.857a0.862,0.862,0,0,1-.952-1,1.025,1.025,0,0,1,1.164-1h2.327c0.3,0,.6.006,0.6,0.006a1.208,1.208,0,0,1,1.336.918L943.817,947h12.23L957,948v1Zm-11.916-3,0.349,2h10.007l0.593-2Zm1.863,5a3,3,0,1,1-3,3A3,3,0,0,1,945.994,954.005ZM946,958a1,1,0,1,0-1-1A1,1,0,0,0,946,958Zm7.011-4a3,3,0,1,1-3,3A3,3,0,0,1,953.011,954.005ZM953,958a1,1,0,1,0-1-1A1,1,0,0,0,953,958Z\" transform=\"translate(-938 -944)\" fill=\"#666666\"></path></svg>",
	"bonuses": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" data-name=\"Group 11 copy\" xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"><defs><style>.cls-1,.cls-2{fill:#307fdd;fill-rule:evenodd;}.cls-2{opacity:0.1;}</style></defs><path data-name=\"Rounded Rectangle 10 copy\" class=\"cls-1\" d=\"M1246,82V98a2,2,0,0,1-2,2h-32a2,2,0,0,1-2-2V82a2,2,0,0,1-2-2V73a2,2,0,0,1,2-2h5.82a6.492,6.492,0,0,1,4.68-11,8.494,8.494,0,0,1,7.5,4.5,8.494,8.494,0,0,1,7.5-4.5,6.492,6.492,0,0,1,4.68,11H1246a2,2,0,0,1,2,2v7A2,2,0,0,1,1246,82Zm-12,16h10V82h-10V98Zm-10,0h8V82h-5a1,1,0,0,1,0-2h5V73h-8V98Zm-14-18h9a1,1,0,0,1,0,2h-7V98h10V73h-12v7Zm17-11.5a6.5,6.5,0,0,0-6.5-6.5,4.5,4.5,0,0,0,0,9h6.5V68.5Zm13-2a4.5,4.5,0,0,0-4.5-4.5,6.5,6.5,0,0,0-6.5,6.5V71h6.5A4.5,4.5,0,0,0,1240,66.5Zm6,6.5h-12v7h12V73Z\" transform=\"translate(-1208 -60)\" fill=\"#d6810b\"></path><path class=\"cls-2\" d=\"M1244,80V98h-10V76h12v4h-2Zm-21,18h-8V80h-2V76h10V98Z\" transform=\"translate(-1208 -60)\" fill=\"#978D7F\"></path></svg>",
	"catalog": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"10\" viewBox=\"0 0 10 10\"><path data-name=\"Rounded Rectangle 969 copy 7\" class=\"cls-1\" d=\"M644,76a1,1,0,1,1-1,1A1,1,0,0,1,644,76Zm4,0a1,1,0,1,1-1,1A1,1,0,0,1,648,76Zm4,0a1,1,0,1,1-1,1A1,1,0,0,1,652,76Zm-8,4a1,1,0,1,1-1,1A1,1,0,0,1,644,80Zm4,0a1,1,0,1,1-1,1A1,1,0,0,1,648,80Zm4,0a1,1,0,1,1-1,1A1,1,0,0,1,652,80Zm-8,4a1,1,0,1,1-1,1A1,1,0,0,1,644,84Zm4,0a1,1,0,1,1-1,1A1,1,0,0,1,648,84Zm4,0a1,1,0,1,1-1,1A1,1,0,0,1,652,84Z\" transform=\"translate(-643 -76)\" fill=\"#666666\"></path></svg>",
	"check": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"8\" viewBox=\"0 0 11 8\">\n" +
		"  <defs>\n" +
		"    <style>\n" +
		"      .cls-1 {\n" +
		"        fill: #fff;\n" +
		"        fill-rule: evenodd;\n" +
		"      }\n" +
		"    </style>\n" +
		"  </defs>\n" +
		"  <path id=\"Rounded_Rectangle_1064\" data-name=\"Rounded Rectangle 1064\" class=\"cls-1\" d=\"M1408.83,622.835l-6.98,7v0.017a0.51,0.51,0,0,1-.36.144,0.421,0.421,0,0,1-.06-0.011,0.511,0.511,0,0,1-.3-0.133l-3.01-3.029a0.5,0.5,0,0,1,0-.7,0.522,0.522,0,0,1,.72,0l2.65,2.67,6.64-6.664a0.5,0.5,0,0,1,.7,0A0.5,0.5,0,0,1,1408.83,622.835Z\" transform=\"translate(-1398 -622)\"/>\n" +
		"</svg>",
	"close": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" class=\"svg svg-close\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\">\n" +
		"\t\t  <path data-name=\"Rounded Rectangle 568 copy 16\" d=\"M1009.4,953l5.32,5.315a0.987,0.987,0,0,1,0,1.4,1,1,0,0,1-1.41,0L1008,954.4l-5.32,5.315a0.991,0.991,0,0,1-1.4-1.4L1006.6,953l-5.32-5.315a0.991,0.991,0,0,1,1.4-1.4l5.32,5.315,5.31-5.315a1,1,0,0,1,1.41,0,0.987,0.987,0,0,1,0,1.4Z\" transform=\"translate(-1001 -946)\" fill=\"#999999\"></path>\n" +
		"\t\t</svg>",
	"delivery": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" data-name=\"Group 10 copy\" xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"><defs><style>.cls-1,.cls-2{fill:#307fdd;fill-rule:evenodd;}.cls-2{opacity:0.1;}</style></defs><path data-name=\"Ellipse 3 copy\" class=\"cls-1\" d=\"M707,96h-1.1a5,5,0,0,1-9.8,0H683.9a5,5,0,0,1-9.8,0H673a3,3,0,0,1-3-3V80a3,3,0,0,1,3-3h26.974c1.657,0,2.884,1.325,4.044,2.609L710,85.989V93A3,3,0,0,1,707,96Zm-6,2a3,3,0,1,0-3-3A3,3,0,0,0,701,98Zm-22,0a3,3,0,1,0-3-3A3,3,0,0,0,679,98Zm29-11h-9a2,2,0,0,1-2-2V82a1,1,0,0,1,2,0v3h7.51l-4.646-4.9A3.29,3.29,0,0,0,699.81,79H673a1,1,0,0,0-1,1V93a1,1,0,0,0,1,1h1.1a5,5,0,0,1,9.8,0h12.2a5,5,0,0,1,9.8,0H707a1,1,0,0,0,1-1V87Zm-17,1h-5a1,1,0,0,1,0-2h5A1,1,0,0,1,691,88Zm0-3H679a1,1,0,0,1,0-2h12A1,1,0,0,1,691,85ZM680.076,69.593a1,1,0,0,1,1.322-.5l3.45,1.546a2.454,2.454,0,0,1,2.568-.458l2.872-2.913A1,1,0,0,1,691.7,68.68L688.825,71.6a2.463,2.463,0,0,1,.175.9,2.5,2.5,0,0,1-5,0c0-.017,0-0.033,0-0.05l-3.426-1.535A1,1,0,0,1,680.076,69.593ZM686.5,73a0.5,0.5,0,1,0-.5-0.5A0.5,0.5,0,0,0,686.5,73Zm10.188,2a10.5,10.5,0,1,0-20.376,0h-2.061a12.5,12.5,0,1,1,24.5,0h-2.061Z\" transform=\"translate(-670 -60)\" fill=\"#d6810b\"></path><path class=\"cls-2\" d=\"M701,99a4,4,0,1,1,4-4A4,4,0,0,1,701,99ZM679.13,75a9.5,9.5,0,1,1,18.74,0H679.13ZM683,95a4,4,0,1,1-4-4A4,4,0,0,1,683,95Z\" transform=\"translate(-670 -60)\" fill=\"#978D7F\"></path></svg>",
	"discount-system": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" data-name=\"Group 9 copy\" xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"><defs><style>.cls-1,.cls-2{fill:#307fdd;fill-rule:evenodd;}.cls-2{opacity:0.1;}</style></defs><path data-name=\"Rounded Rectangle 24 copy\" class=\"cls-1\" d=\"M974,85h-1l-4,4h-1l-1-1V85h-2.1a11.879,11.879,0,0,0,.709-2H968l1,1v2.344L972.266,83H974a2,2,0,0,0,2-2V64a2,2,0,0,0-2-2H942a2,2,0,0,0-2,2V81a2,2,0,0,0,2,2h0.393a11.879,11.879,0,0,0,.709,2H942a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4V81A4,4,0,0,1,974,85Zm-33.9,7.159c0.01,0,.016-0.011.025-0.014l7.9-2.87c0-.093-0.028-0.181-0.028-0.275V86.7a8.976,8.976,0,0,1-2.954-5.8A1.483,1.483,0,0,1,944,79.5v-3a1.488,1.488,0,0,1,1-1.4V71a6,6,0,0,1,6-6h6a6,6,0,0,1,6,6v4.1a1.488,1.488,0,0,1,1,1.4v3a1.483,1.483,0,0,1-1.046,1.408A8.976,8.976,0,0,1,960,86.7V89c0,0.094-.023.182-0.028,0.275l7.9,2.87c0.009,0,.015.01,0.025,0.014A2.984,2.984,0,0,1,970,95v2a3,3,0,0,1-3,3H941a3,3,0,0,1-3-3V95A2.984,2.984,0,0,1,940.1,92.159ZM950,68V67.141A3.991,3.991,0,0,0,947,71h0a3.972,3.972,0,0,0,3.181-1.6A5.916,5.916,0,0,1,950,68Zm11,3a4,4,0,0,0-4-4h-5v1a4,4,0,0,0,4,4h3a3.959,3.959,0,0,0,2-.555V71Zm0,9V79a1,1,0,0,0,0-2V73.633A5.942,5.942,0,0,1,959,74h-3a5.992,5.992,0,0,1-4.946-2.609A5.92,5.92,0,0,1,947,73h0v4a1,1,0,0,0,0,2v1A7,7,0,0,0,961,80Zm-11,8.062V89a4,4,0,0,0,8,0V88.062A9,9,0,0,1,950,88.062ZM940,97h0a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V95a0.986,0.986,0,0,0-.788-0.957l0-.012-7.659-2.782a5.99,5.99,0,0,1-11.112,0l-7.659,2.782,0,0.012A0.986,0.986,0,0,0,940,95v2Zm18-18h-1a1,1,0,0,1,0-2h1A1,1,0,0,1,958,79Zm-1.716,2.307a1,1,0,1,1,1.43,1.39l0.01,0.01A5.617,5.617,0,0,1,953.973,84a5.424,5.424,0,0,1-3.677-1.28l0.007-.006a0.995,0.995,0,1,1,1.435-1.375l0,0A3.206,3.206,0,0,0,954,82a3.106,3.106,0,0,0,2.282-.695ZM951,79h-1a1,1,0,0,1,0-2h1A1,1,0,0,1,951,79Z\" transform=\"translate(-938 -60)\" fill=\"#d6810b\"></path><path data-name=\"Rounded Rectangle 30\" class=\"cls-2\" d=\"M977,80v3l-1,1h-3l-3,3h-1a2,2,0,0,1-2-2V67a2,2,0,0,1,2-2h7a2,2,0,0,1,2,2V80h-1Zm-8,14v3l-1,2H940l-1-1,13-5,1,1,2,2h3l4-3,2-1,3,1ZM956,73l-3-1-1-1-1-2V66h6l4,1,1,2v4h-6Z\" transform=\"translate(-938 -60)\" fill=\"#978D7F\"></path></svg>",
	"dislike": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><defs><style>.cls-1{fill:#333;fill-rule:evenodd;}</style></defs><path data-name=\"Shape 949 copy\" class=\"cls-1\" d=\"M1231.69,6368.98l2.51,0.34a2.858,2.858,0,0,1,2.11,2.25,2.11,2.11,0,0,1-.37,2.07,2.181,2.181,0,0,0,2.88-.48c0.59-.81-0.15-2.87-0.15-2.87s-0.49-.34.4-0.33c1.7,0.04,4.34.05,3.87-2.1-0.55-2.48-.61-3.09-1.02-4.5a1.563,1.563,0,0,0-1.68-1.32c-0.31,0-2.49-.09-4.53-0.01-1.02.04-1.84,0.95-2.3,0.96a13.829,13.829,0,0,1-1.72.01l-0.69.75v4.45Z\" transform=\"translate(-1231 -6362)\" fill=\"#D6D6D6\"></path></svg>",
	"filter": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"10\" viewBox=\"0 0 12 10\"><path data-name=\"Rectangle 636 copy 5\" class=\"cls-1\" d=\"M574.593,665.783L570,670.4V674l-2-1v-2.6l-4.6-4.614a0.94,0.94,0,0,1-.2-1.354,0.939,0.939,0,0,1,.105-0.16,0.969,0.969,0,0,1,.82-0.269h9.747a0.968,0.968,0,0,1,.82.269,0.94,0.94,0,0,1,.087.132A0.945,0.945,0,0,1,574.593,665.783Zm-8.164.216L569,668.581,571.571,666h-5.142Z\" transform=\"translate(-563 -664)\" fill=\"#666666\"></path></svg>",
	"instagram": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z\"/></svg>",
	"like": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11.94\" height=\"12.03\" viewBox=\"0 0 11.94 12.03\"><defs><style>.cls-1{fill:#333;fill-rule:evenodd;}</style></defs><path class=\"cls-1\" d=\"M1187.68,6367l2.5-.34a2.856,2.856,0,0,0,2.1-2.26,2.11,2.11,0,0,0-.37-2.07,2.157,2.157,0,0,1,2.87.48c0.59,0.81-.15,2.87-0.15,2.87s-0.48.35,0.4,0.33c1.69-.03,4.32-0.04,3.84,2.12-0.54,2.48-.6,3.1-1,4.51a1.578,1.578,0,0,1-1.68,1.32c-0.31,0-2.48.08-4.51,0.01-1.01-.04-1.82-0.95-2.28-0.96a10.368,10.368,0,0,0-1.72-.01l-0.68-.76v-4.45Z\" transform=\"translate(-1187 -6361.97)\" fill=\"#D6D6D6\"></path></svg>",
	"loading": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 300 300\" version=\"1.1\">\n" +
		"              <path d=\"M 150,0 a 150,150 0 0,1 106.066,256.066 l -35.355,-35.355 a -100,-100 0 0,0 -70.711,-170.711 z\" fill=\"#0000001a\">\n" +
		"                <animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"rotate\" from=\"0 150 150\" to=\"360 150 150\" begin=\"0s\" dur=\".8s\" fill=\"freeze\" repeatCount=\"indefinite\"/>\n" +
		"              </path>\n" +
		"            </svg>",
	"menu": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"12\" viewBox=\"0 0 16 12\"><path data-name=\"Rounded Rectangle 81 copy 4\" class=\"cls-1\" d=\"M872,958h-8a1,1,0,0,1-1-1h0a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1h0A1,1,0,0,1,872,958Zm6-5H864a1,1,0,0,1,0-2h14A1,1,0,0,1,878,953Zm0-5H864a1,1,0,0,1,0-2h14A1,1,0,0,1,878,948Z\" transform=\"translate(-863 -946)\" fill=\"#666666\"></path></svg>",
	"minus": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"1\" viewBox=\"0 0 11 1\"><rect width=\"11\" height=\"1\" rx=\"0.5\" ry=\"0.5\"></rect></svg>",
	"plus": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\"><path d=\"M1034.5,193H1030v4.5a0.5,0.5,0,0,1-1,0V193h-4.5a0.5,0.5,0,0,1,0-1h4.5v-4.5a0.5,0.5,0,0,1,1,0V192h4.5A0.5,0.5,0,0,1,1034.5,193Z\" transform=\"translate(-1024 -187)\"></path></svg>",
	"quality-guarantee": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" data-name=\"Group 12 copy\" xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"><defs><style>.cls-1,.cls-2{fill:#307fdd;fill-rule:evenodd;}.cls-2{opacity:0.1;}</style></defs><path class=\"cls-1\" d=\"M1501,70h4a1,1,0,0,1,0,2h-4A1,1,0,0,1,1501,70Zm0,4h4a1,1,0,0,1,0,2h-4A1,1,0,0,1,1501,74Zm0,8h4a1,1,0,0,1,0,2h-4A1,1,0,0,1,1501,82Zm0-4h4a1,1,0,0,1,0,2h-4A1,1,0,0,1,1501,78Zm15-7h-4V96.5a3.5,3.5,0,0,1-3.5,3.5,3.415,3.415,0,0,1-.5-0.05V100h-27V99.95a3.415,3.415,0,0,1-.5.05,3.5,3.5,0,0,1-3.5-3.5V92a1,1,0,0,1,2,0v4.5a1.5,1.5,0,0,0,1.5,1.5,1.472,1.472,0,0,0,.5-0.1V98h24.35a3.436,3.436,0,0,1-.35-1.5V93h-9a1,1,0,0,1,0-2h11v5.5a1.5,1.5,0,0,0,3,0v-33a3.436,3.436,0,0,1,.35-1.5H1487v0.1a1.472,1.472,0,0,0-.5-0.1,1.5,1.5,0,0,0-1.5,1.5V64a1,1,0,0,1-2,0V63.5a3.5,3.5,0,0,1,3.5-3.5,3.415,3.415,0,0,1,.5.05V60h26v0.05a3.415,3.415,0,0,1,.5-0.05,3.5,3.5,0,0,1,3.5,3.5V71h-1Zm-1-7.5a1.5,1.5,0,0,0-3,0V68h0v1h3V63.5ZM1497,77a9.989,9.989,0,0,1-4,7.988V92a0.964,0.964,0,0,1-.08.4,1,1,0,0,1-1.31.525l-4.6-1.852-4.62,1.852a1,1,0,0,1-1.31-.525A0.964,0.964,0,0,1,1481,92V84.988A10,10,0,1,1,1497,77Zm-14,13.54,3.61-1.446a0.982,0.982,0,0,1,.4-0.076,1,1,0,0,1,.41.076l3.58,1.442V86.162a9.969,9.969,0,0,1-8,0v4.378ZM1479,77a8,8,0,1,0,8-8A8,8,0,0,0,1479,77Zm14,0a6,6,0,1,1-6-6A6,6,0,0,1,1493,77Zm-10,0a4,4,0,1,0,4-4A4,4,0,0,0,1483,77Z\" transform=\"translate(-1477 -60)\" fill=\"#d6810b\"></path><path data-name=\"Rounded Rectangle 31\" class=\"cls-2\" d=\"M1508,99h-2V92h-3V65a3,3,0,0,1,3-3h5V96A3,3,0,0,1,1508,99Zm-19.5-17a3.5,3.5,0,1,1,3.5-3.5A3.5,3.5,0,0,1,1488.5,82ZM1503,97l1,1-25,1-1-1V95h25v2Z\" transform=\"translate(-1477 -60)\" fill=\"#978D7F\"></path></svg>",
	"review": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"20\" viewBox=\"0 0 19 20\"><path class=\"cls-1\" d=\"M1715,611h-6l-4,4h-1l-1-1v-3h-1a3,3,0,0,1-3-3V598a3,3,0,0,1,3-3h13a3,3,0,0,1,3,3v10A3,3,0,0,1,1715,611Zm1-13a1,1,0,0,0-1-1h-13a1,1,0,0,0-1,1v10a1,1,0,0,0,1,1h2a1,1,0,0,1,1,1v2.207l3.23-3.208H1715a1,1,0,0,0,1-1V598Zm-5,8a1.986,1.986,0,0,1-1.79-2.875l0.9-2.615a1.035,1.035,0,0,1,1.4-.424,1.047,1.047,0,0,1,.33,1.425l-0.21.6A1.994,1.994,0,0,1,1711,606Zm-5,0a2,2,0,0,1-2-2,1.981,1.981,0,0,1,.21-0.876l0.9-2.615a1.035,1.035,0,0,1,1.4-.424,1.047,1.047,0,0,1,.33,1.425l-0.21.6A1.994,1.994,0,0,1,1706,606Z\" transform=\"translate(-1699 -595)\" fill=\"#d6810b\"></path></svg>",
	// "search": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" class=\"\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\" aria-hidden=\"true\"><path class=\"cls-1\" d=\"M16.709,16.719a1,1,0,0,1-1.412,0l-3.256-3.287A7.475,7.475,0,1,1,15,7.5a7.433,7.433,0,0,1-1.549,4.518l3.258,3.289A1,1,0,0,1,16.709,16.719ZM7.5,2A5.5,5.5,0,1,0,13,7.5,5.5,5.5,0,0,0,7.5,2Z\" fill=\"#666666\"></path></svg>",
	"search": "<svg width=\"25\" height=\"25\" viewBox=\"0 0 25 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
		"<g clip-path=\"url(#clip0_411_2)\">\n" +
		"<path d=\"M22.7579 25C23.3567 25 23.9196 24.7674 24.343 24.3439C24.7669 23.9196 25 23.3567 25 22.7574C25 22.1591 24.7669 21.5954 24.343 21.1719L19.81 16.6389C19.3865 16.2154 18.8237 15.9819 18.2249 15.9819C17.626 15.9819 17.0628 16.2154 16.6388 16.638C15.7648 17.5133 15.7653 18.9364 16.6388 19.81L21.1719 24.3439C21.5958 24.7674 22.1591 25 22.7579 25ZM18.2249 16.891C18.5809 16.891 18.9156 17.0295 19.1672 17.2816L23.7003 21.8146C23.9524 22.0668 24.0909 22.4015 24.0909 22.7574C24.0909 23.1135 23.9524 23.449 23.7003 23.7011C23.1969 24.2045 22.3189 24.2045 21.8146 23.7003L17.2816 19.1673C16.7622 18.6479 16.7622 17.8019 17.282 17.2816C17.5337 17.0295 17.8684 16.891 18.2249 16.891Z\" fill=\"#666666\"/>\n" +
		"<path d=\"M16.5039 18.2228C16.5434 18.2228 16.5833 18.2175 16.6228 18.2069C16.78 18.1642 16.9025 18.0409 16.9438 17.8837C17.0055 17.6467 17.1196 17.4443 17.282 17.2809C17.4436 17.1202 17.6464 17.0066 17.8844 16.9436C18.0415 16.9018 18.1645 16.7793 18.2071 16.6222C18.2492 16.465 18.2044 16.2973 18.0894 16.1828L16.6353 14.7286C16.5447 14.6371 16.42 14.5883 16.2912 14.5954C16.163 14.6025 16.0431 14.6629 15.9619 14.7623C15.6037 15.2 15.2001 15.6039 14.762 15.9617C14.6626 16.0434 14.6022 16.1632 14.5956 16.2911C14.5894 16.4198 14.6373 16.5441 14.7283 16.6355L16.1825 18.0897C16.2686 18.1758 16.3849 18.2228 16.5039 18.2228ZM16.9824 16.3612C16.8581 16.442 16.7431 16.5343 16.6393 16.6382C16.5349 16.7429 16.4417 16.8583 16.3609 16.9818L15.7168 16.3381C15.9335 16.141 16.1408 15.9333 16.3383 15.7167L16.9824 16.3612Z\" fill=\"#666666\"/>\n" +
		"<mask id=\"path-3-inside-1_411_2\" fill=\"white\">\n" +
		"<path d=\"M9.39372 18.7873C14.5735 18.7873 18.7874 14.5731 18.7874 9.39357C18.7874 4.21383 14.5735 0 9.39372 0C4.21395 0 7.42521e-05 4.21383 7.42521e-05 9.39357C7.42521e-05 14.5731 4.21395 18.7873 9.39372 18.7873ZM9.39372 0.909087C14.0719 0.909087 17.8783 4.71542 17.8783 9.39357C17.8783 14.0715 14.0719 17.8782 9.39372 17.8782C4.71553 17.8782 0.909131 14.0715 0.909131 9.39357C0.909131 4.71542 4.71553 0.909087 9.39372 0.909087Z\"/>\n" +
		"</mask>\n" +
		"<path d=\"M9.39372 18.7873C14.5735 18.7873 18.7874 14.5731 18.7874 9.39357C18.7874 4.21383 14.5735 0 9.39372 0C4.21395 0 7.42521e-05 4.21383 7.42521e-05 9.39357C7.42521e-05 14.5731 4.21395 18.7873 9.39372 18.7873ZM9.39372 0.909087C14.0719 0.909087 17.8783 4.71542 17.8783 9.39357C17.8783 14.0715 14.0719 17.8782 9.39372 17.8782C4.71553 17.8782 0.909131 14.0715 0.909131 9.39357C0.909131 4.71542 4.71553 0.909087 9.39372 0.909087Z\" fill=\"#666666\"/>\n" +
		"<path d=\"M0.909131 9.39357L-25.0909 9.39357L0.909131 9.39357ZM9.39372 -7.21265C0.213077 -7.21265 -7.21265 0.214672 -7.21265 9.39357H44.7874C44.7874 28.9315 28.9339 44.7873 9.39372 44.7873V-7.21265ZM-7.21265 9.39357C-7.21265 18.5734 0.214271 26 9.39372 26V-26C28.9327 -26 44.7874 -10.1458 44.7874 9.39357L-7.21265 9.39357ZM9.39372 26C18.5731 26 26.0001 18.5735 26.0001 9.39357H-25.9999C-25.9999 -10.1458 -10.1452 -26 9.39372 -26V26ZM26.0001 9.39357C26.0001 0.214633 18.5743 -7.21265 9.39372 -7.21265V44.7873C-10.1464 44.7873 -25.9999 28.9315 -25.9999 9.39357H26.0001ZM9.39372 -25.0909C28.431 -25.0909 43.8783 -9.64422 43.8783 9.39357H-8.12174C-8.12174 19.0751 -0.287299 26.9091 9.39372 26.9091V-25.0909ZM43.8783 9.39357C43.8783 28.4298 28.4323 43.8782 9.39372 43.8782V-8.12175C-0.288601 -8.12175 -8.12174 -0.286867 -8.12174 9.39357H43.8783ZM9.39372 43.8782C-9.64481 43.8782 -25.0909 28.4299 -25.0909 9.39357H26.9091C26.9091 -0.286992 19.0759 -8.12175 9.39372 -8.12175V43.8782ZM-25.0909 9.39357C-25.0909 -9.64434 -9.64351 -25.0909 9.39372 -25.0909V26.9091C19.0746 26.9091 26.9091 19.0752 26.9091 9.39357L-25.0909 9.39357Z\" fill=\"#666666\" mask=\"url(#path-3-inside-1_411_2)\"/>\n" +
		"</g>\n" +
		"<defs>\n" +
		"<clipPath id=\"clip0_411_2\">\n" +
		"<rect width=\"25\" height=\"25\" fill=\"white\" transform=\"matrix(-1 0 0 1 25 0)\"/>\n" +
		"</clipPath>\n" +
		"</defs>\n" +
		"</svg>",
	"star-empty": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"13\" viewBox=\"0 0 15 13\"><rect class=\"sscls-1\" width=\"15\" height=\"13\" fill=\"#666666\" fill-opacity=\"0\"></rect><path data-name=\"Shape 921 copy 15\" class=\"sscls-2\" d=\"M1333.37,457.5l-4.21,2.408,0.11,0.346,2.07,4.745h-0.72l-4.12-3-4.09,3h-0.75l2.04-4.707,0.12-.395-4.19-2.4V457h5.12l1.53-5h0.38l1.57,5h5.14v0.5Z\" transform=\"translate(-1319 -452)\" fill=\"#DDDDDD\"></path></svg>",
	"star-fill": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"13\" viewBox=\"0 0 15 13\"><rect class=\"sscls-1\" width=\"15\" height=\"13\" fill=\"#666666\" fill-opacity=\"0\"></rect><path data-name=\"Shape 921 copy 15\" class=\"sscls-2\" d=\"M1333.37,457.5l-4.21,2.408,0.11,0.346,2.07,4.745h-0.72l-4.12-3-4.09,3h-0.75l2.04-4.707,0.12-.395-4.19-2.4V457h5.12l1.53-5h0.38l1.57,5h5.14v0.5Z\" transform=\"translate(-1319 -452)\" fill=\"#e6c553\"></path></svg>",
	"star-half-fill": "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"13\" viewBox=\"0 0 15 13\"><defs><linearGradient id=\"half-gradient\">\n" +
		"                                                        <stop offset=\"0%\" stop-color=\"#e6c553\"></stop>\n" +
		"                                                        <stop offset=\"50%\" stop-color=\"#e6c553\"></stop>\n" +
		"                                                        <stop offset=\"51%\" stop-color=\"#dddddd\"></stop>\n" +
		"                                                        <stop offset=\"100%\" stop-color=\"#dddddd\"></stop>\n" +
		"                                                    </linearGradient></defs><rect class=\"sscls-1\" width=\"15\" height=\"13\" fill=\"#666666\" fill-opacity=\"0\"></rect><path data-name=\"Shape 921 copy 15\" class=\"sscls-2\" d=\"M1333.37,457.5l-4.21,2.408,0.11,0.346,2.07,4.745h-0.72l-4.12-3-4.09,3h-0.75l2.04-4.707,0.12-.395-4.19-2.4V457h5.12l1.53-5h0.38l1.57,5h5.14v0.5Z\" transform=\"translate(-1319 -452)\" fill=\"url(&quot;#half-gradient&quot;)\"></path></svg>",
};

export default ICONS;
