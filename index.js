const zips = {
  41005: ["Burlington", 15.873672298508962],
  41021: ["Hebron", 7.7267004948510305],
  41022: ["Florence", 15.974114313287583],
  41042: ["Florence", 9.977057703440288],
  41048: ["Hebron", 11.382490726718146],
  41080: ["Petersburg", 18.8695413891963],
  41091: ["Union", 15.746424565753788],
  41092: ["Verona", 19.61927578749058],
  41094: ["Walton", 15.123704858321922],
  41001: ["Alexandria", 10.630906461336654],
  41007: ["California", 14.95184198664033],
  41059: ["Melbourne", 8.698020908467598],
  41071: ["Newport", 1.4575162335110772],
  41072: ["Newport", 10.075189282757316],
  41073: ["Bellevue", 1.9142016020706134],
  41074: ["Dayton", 2.6332647113729704],
  41075: ["Fort Thomas", 1.9830597650236244],
  41076: ["Newport", 4.295394128214063],
  41085: ["Silver Grove", 6.00950511162472],
  41099: ["Newport", 10.075189282757316],
  41011: ["Covington", 1.765425433126691],
  41012: ["Covington", 9.203665924593944],
  41014: ["Covington", 1.4650892732237417],
  41015: ["Latonia", 3.7723981905343305],
  41016: ["Covington", 3.32079605098466],
  41017: ["Ft Mitchell", 4.91636952378424],
  41018: ["Erlanger", 7.480515727148389],
  41019: ["Covington", 9.203665924593944],
  41025: ["Erlanger", 7.705092597887923],
  41051: ["Independence", 10.193134270060536],
  41053: ["Kenton", 14.418844044613834],
  41063: ["Morning View", 16.33837669710646],
  45001: ["Addyston", 12.593425416498846],
  45002: ["Cleves", 15.470660006741742],
  45030: ["Harrison", 20.258758908325742],
  45033: ["Hooven", 16.28623666489287],
  45041: ["Miamitown", 15.061259655301834],
  45051: ["Mount Saint Joseph", 8.405800721057659],
  45052: ["North Bend", 13.883774354439884],
  45111: ["Camp Dennison", 13.549666874751795],
  45174: ["Terrace Park", 11.252096983296562],
  45201: ["Cincinnati", 6.808704365222512],
  45202: ["Cincinnati", 2.273202606048973],
  45203: ["Cincinnati", 2.9427659849883874],
  45204: ["Cincinnati", 4.674435131085485],
  45205: ["Cincinnati", 5.2345216998558115],
  45206: ["Cincinnati", 3.52791663581268],
  45207: ["Cincinnati", 4.5150244198661404],
  45208: ["Cincinnati", 5.054859974300489],
  45209: ["Cincinnati", 6.175259032710434],
  45211: ["Cincinnati", 7.834867188909986],
  45212: ["Cincinnati", 6.408291849431843],
  45213: ["Cincinnati", 8.088084634442572],
  45214: ["Cincinnati", 4.588603327552906],
  45215: ["Cincinnati", 11.09609062796123],
  45216: ["Cincinnati", 8.587307950268691],
  45217: ["Cincinnati", 6.237423388869712],
  45218: ["Cincinnati", 13.258260639058088],
  45219: ["Cincinnati", 3.7591927869289665],
  45220: ["Cincinnati", 4.96772932788404],
  45221: ["Cincinnati", 6.808704365222512],
  45222: ["Cincinnati", 6.808704365222512],
  45223: ["Cincinnati", 7.198087199205046],
  45224: ["Cincinnati", 8.72113923974778],
  45225: ["Cincinnati", 5.873841695867106],
  45226: ["Cincinnati", 4.228032384971748],
  45227: ["Cincinnati", 7.745940658417864],
  45229: ["Cincinnati", 5.046817869467406],
  45230: ["Cincinnati", 6.0955603446952615],
  45231: ["Cincinnati", 11.819300703114937],
  45232: ["Cincinnati", 7.711045148047949],
  45233: ["Cincinnati", 9.475169318472625],
  45234: ["Cincinnati", 6.808704365222512],
  45235: ["Cincinnati", 6.808704365222512],
  45236: ["Cincinnati", 10.543045857094537],
  45237: ["Cincinnati", 7.914536525287373],
  45238: ["Cincinnati", 6.939680187609205],
  45239: ["Cincinnati", 10.1298086892258],
  45240: ["Cincinnati", 14.592798056257111],
  45241: ["Cincinnati", 13.656121679307551],
  45242: ["Cincinnati", 13.96755156918569],
  45243: ["Cincinnati", 10.794968444081801],
  45244: ["Cincinnati", 7.996257258884439],
  45246: ["Cincinnati", 14.374224133347512],
  45247: ["Cincinnati", 12.936456483750069],
  45248: ["Cincinnati", 11.176273861678235],
  45249: ["Cincinnati", 15.817177912550836],
  45250: ["Cincinnati", 6.808704365222512],
  45251: ["Cincinnati", 14.468309386821312],
  45252: ["Cincinnati", 15.148384779108808],
  45253: ["Cincinnati", 6.808704365222512],
  45254: ["Cincinnati", 6.808704365222512],
  45255: ["Cincinnati", 8.124332209503097],
  45258: ["Cincinnati", 6.808704365222512],
  45262: ["Cincinnati", 6.808704365222512],
  45263: ["Cincinnati", 6.808704365222512],
  45264: ["Cincinnati", 6.808704365222512],
  45267: ["Cincinnati", 6.808704365222512],
  45268: ["Cincinnati", 6.808704365222512],
  45269: ["Cincinnati", 6.808704365222512],
  45270: ["Cincinnati", 6.808704365222512],
  45271: ["Cincinnati", 6.808704365222512],
  45273: ["Cincinnati", 6.808704365222512],
  45274: ["Cincinnati", 6.808704365222512],
  45277: ["Cincinnati", 6.808704365222512],
  45280: ["Cincinnati", 6.189009192580021],
  45296: ["Cincinnati", 6.808704365222512],
  45298: ["Cincinnati", 6.808704365222512],
  45299: ["Cincinnati", 12.901909245480663],
  45999: ["Cincinnati", 6.808704365222512],
};

function getPrice(event) {
  event.preventDefault();
  try {
    const zip = document.getElementById("zip-input").value;
    let price = Math.floor(80 + zips[zip][1] * 1.5);
    if (zips[zip][0] == "Cincinnati") {
      price += 10;
    }
    document.getElementById("price").innerText = `$${price}`;
    document.getElementById("message").innerText = "";
  } catch (e) {
    document.getElementById("price").innerText = "$ N/A";
    document.getElementById("message").innerText =
      "zip code not found, call/text for pricing";
  }
}
document.getElementById("zip-form").addEventListener("submit", getPrice);
