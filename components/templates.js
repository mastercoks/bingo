const cardTemplate = (player, numbersDrawn) => {
  let html = `<table class="card ${player.color}" cellpadding=4 cellspacing=4>`;
  html += `<thead><tr><th class="table-title" colspan="3">Número: <b>${player.id}</b></th></tr></thead>`;
  for (let i = 0; i <= player.numbers.length; i++) {
    html += (i % 3 == 0) ? '<tr>' : '';
    if (i == player.numbers.length/2) {
      html += '<th class="blank"></th>'
    } else {
      let index = i < player.numbers.length/2 ? i : i-1;
      let find = numbersDrawn.find((element) => {
        return element == player.numbers[index];
      });
      html += '<th';
      html += find ? ' class="mark"' : ''; 
      html += `>${player.numbers[index]}</th>`;
      
    }
    html += (i % 3 == 2) ? '</tr>' : ''; 
  }
  html += '</table>';
  return html;
}

const numbersDrawnTemplate = (numbers, length) => {
  let html = '';
  for (let i = 1; i <= length; i++) {
    const find = numbers.find((element) => {
      return element == i;
    });
    const classe = find ? 'mark' : '';
    html += `<div class="number-drawn ${classe}">${i}</div>`
  }
  return html;
}

const rankingTemplate = (players) => {
  let html = '';
  let playersAux = [];
  Object.assign(playersAux, players);
  playersAux.sort((a, b) => {
    if (a.score < b.score) return 1;
    if (a.score > b.score) return -1;
    return 0;
  });
  for (const player of playersAux) {
    html += rankingItemTemplate(player);
  }
  return html;
}

const rankingItemTemplate = (player) => 
  `<tr><th class="left">${player.name}</th><th>${player.id}</th><th>${player.score}</th></tr>`

const infoSVG = () => 
  `<svg class="ldi-hcp9qw" width="130px"  height="130px"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background: none;"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="transform-origin: 50px 50px 0px;" xml:space="preserve"><g style="transform-origin: 50px 50px 0px;"><g style="transform-origin: 50px 50px 0px; transform: scale(1);"><g style="transform-origin: 50px 50px 0px;"><g><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="22.8311" y1="31.4257" x2="68.3311" y2="79.4257" class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0s; animation-direction: normal;"><stop offset="0" style="stop-color: rgb(160, 200, 215); transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0.105263s; animation-direction: normal;" stop-color="rgb(160, 200, 215)" class="ld ldt-bounce-in"></stop><stop offset="1" style="stop-color: rgb(118, 164, 189); transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0.210526s; animation-direction: normal;" stop-color="rgb(118, 164, 189)" class="ld ldt-bounce-in"></stop></linearGradient><g class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0.315789s; animation-direction: normal;"><circle cx="50" cy="50" r="40" style="fill:url(#SVGID_2_)" stroke="black" stroke-width="3.1"/></g><g style="transform-origin: 50px 50px 0px;"><g><g class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0.421053s; animation-direction: normal;"><path stroke="black" stroke-width="3.1" style="fill:#fff" d="M54.435,71.5h-8.87C44.701,71.5,44,70.799,44,69.935v-20.87c0-0.864,0.701-1.565,1.565-1.565h8.87 c0.864,0,1.565,0.701,1.565,1.565v20.87C56,70.799,55.299,71.5,54.435,71.5z" fill="rgb(255, 255, 255)"></path></g><g class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0.526316s; animation-direction: normal;"><path stroke="black" stroke-width="3.1" style="fill:#fff" d="M50,28L50,28c-4.004,0-7.25,3.246-7.25,7.25v0c0,4.004,3.246,7.25,7.25,7.25h0 c4.004,0,7.25-3.246,7.25-7.25v0C57.25,31.246,54.004,28,50,28z" fill="rgb(255, 255, 255)"></path></g></g></g><g class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0.631579s; animation-direction: normal;"><path style="opacity: 0.1; fill: rgb(0, 0, 0);" d="M77.639,21.103c0.011,0.603,0.04,1.201,0.04,1.808c0,27.323-11.319,51.604-28.865,67.069 c1.135,0.033,2.28,0.022,3.437-0.042c20.27-1.115,36.693-17.624,37.699-37.9C90.553,39.864,85.703,28.818,77.639,21.103z" fill="rgb(0, 0, 0)"></path></g><g class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0.736842s; animation-direction: normal;"><path style="fill:none;stroke:#fff;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d=" M17.676,38.688c-0.192,0.583-0.373,1.177-0.542,1.781" stroke="rgb(255, 255, 255)"></path></g><g class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0.842105s; animation-direction: normal;"><path style="fill:none;stroke:#fff;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d=" M29.237,22.583c-3.656,2.599-6.62,5.91-8.857,9.908" stroke="rgb(255, 255, 255)"></path></g><metadata xmlns:d="https://loading.io/stock/" class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0.947368s; animation-direction: normal;">
  <d:name class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 1.05263s; animation-direction: normal;">message</d:name>
  <d:tags class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 1.15789s; animation-direction: normal;">message,sns,msg,texting,information,communication,mention,hint,notify</d:tags>
  <d:license class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 1.26316s; animation-direction: normal;">cc-by</d:license>
  <d:slug class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 1.36842s; animation-direction: normal;">hcp9qw</d:slug>
  </metadata></g></g></g></g><style type="text/css" class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 1.47368s; animation-direction: normal;">@keyframes ldt-bounce-in {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    5% {
      -webkit-transform: scale(0.0846);
      transform: scale(0.0846);
    }
    6% {
      -webkit-transform: scale(0.191);
      transform: scale(0.191);
    }
    7% {
      -webkit-transform: scale(0.3255);
      transform: scale(0.3255);
    }
    8% {
      -webkit-transform: scale(0.4804);
      transform: scale(0.4804);
    }
    9% {
      -webkit-transform: scale(0.646);
      transform: scale(0.646);
    }
    10% {
      -webkit-transform: scale(0.8116);
      transform: scale(0.8116);
    }
    11% {
      -webkit-transform: scale(0.9665);
      transform: scale(0.9665);
    }
    12% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    13% {
      -webkit-transform: scale(1.2069);
      transform: scale(1.2069);
    }
    14% {
      -webkit-transform: scale(1.2796);
      transform: scale(1.2796);
    }
    19% {
      -webkit-transform: scale(1.1558);
      transform: scale(1.1558);
    }
    20% {
      -webkit-transform: scale(1.07);
      transform: scale(1.07);
    }
    21% {
      -webkit-transform: scale(0.9823);
      transform: scale(0.9823);
    }
    22% {
      -webkit-transform: scale(0.901);
      transform: scale(0.901);
    }
    23% {
      -webkit-transform: scale(0.8328);
      transform: scale(0.8328);
    }
    25% {
      -webkit-transform: scale(0.7551);
      transform: scale(0.7551);
    }
    29% {
      -webkit-transform: scale(0.8516);
      transform: scale(0.8516);
    }
    31% {
      -webkit-transform: scale(0.973);
      transform: scale(0.973);
    }
    33% {
      -webkit-transform: scale(1.0857);
      transform: scale(1.0857);
    }
    35% {
      -webkit-transform: scale(1.1538);
      transform: scale(1.1538);
    }
    40% {
      -webkit-transform: scale(1.0771);
      transform: scale(1.0771);
    }
    42% {
      -webkit-transform: scale(0.9954);
      transform: scale(0.9954);
    }
    45% {
      -webkit-transform: scale(0.9057);
      transform: scale(0.9057);
    }
    52% {
      -webkit-transform: scale(0.9908);
      transform: scale(0.9908);
    }
    56% {
      -webkit-transform: scale(1.0623);
      transform: scale(1.0623);
    }
    64% {
      -webkit-transform: scale(0.9845);
      transform: scale(0.9845);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @-webkit-keyframes ldt-bounce-in {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    5% {
      -webkit-transform: scale(0.0846);
      transform: scale(0.0846);
    }
    6% {
      -webkit-transform: scale(0.191);
      transform: scale(0.191);
    }
    7% {
      -webkit-transform: scale(0.3255);
      transform: scale(0.3255);
    }
    8% {
      -webkit-transform: scale(0.4804);
      transform: scale(0.4804);
    }
    9% {
      -webkit-transform: scale(0.646);
      transform: scale(0.646);
    }
    10% {
      -webkit-transform: scale(0.8116);
      transform: scale(0.8116);
    }
    11% {
      -webkit-transform: scale(0.9665);
      transform: scale(0.9665);
    }
    12% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    13% {
      -webkit-transform: scale(1.2069);
      transform: scale(1.2069);
    }
    14% {
      -webkit-transform: scale(1.2796);
      transform: scale(1.2796);
    }
    19% {
      -webkit-transform: scale(1.1558);
      transform: scale(1.1558);
    }
    20% {
      -webkit-transform: scale(1.07);
      transform: scale(1.07);
    }
    21% {
      -webkit-transform: scale(0.9823);
      transform: scale(0.9823);
    }
    22% {
      -webkit-transform: scale(0.901);
      transform: scale(0.901);
    }
    23% {
      -webkit-transform: scale(0.8328);
      transform: scale(0.8328);
    }
    25% {
      -webkit-transform: scale(0.7551);
      transform: scale(0.7551);
    }
    29% {
      -webkit-transform: scale(0.8516);
      transform: scale(0.8516);
    }
    31% {
      -webkit-transform: scale(0.973);
      transform: scale(0.973);
    }
    33% {
      -webkit-transform: scale(1.0857);
      transform: scale(1.0857);
    }
    35% {
      -webkit-transform: scale(1.1538);
      transform: scale(1.1538);
    }
    40% {
      -webkit-transform: scale(1.0771);
      transform: scale(1.0771);
    }
    42% {
      -webkit-transform: scale(0.9954);
      transform: scale(0.9954);
    }
    45% {
      -webkit-transform: scale(0.9057);
      transform: scale(0.9057);
    }
    52% {
      -webkit-transform: scale(0.9908);
      transform: scale(0.9908);
    }
    56% {
      -webkit-transform: scale(1.0623);
      transform: scale(1.0623);
    }
    64% {
      -webkit-transform: scale(0.9845);
      transform: scale(0.9845);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  .ldt-bounce-in {
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-animation: ldt-bounce-in 1s ease-out forwards;
    animation: ldt-bounce-in 1s ease-out forwards;
  }
  </style></svg></svg>`;

const trophySVG = () =>
 `<svg class="ldi-d4apaa" width="130px" height="130px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><!--?xml version="1.0" encoding="utf-8"?--><!--Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)--><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="transform-origin: 50px 50px 0px;" xml:space="preserve"><g style="transform-origin: 50px 50px 0px;"><g style="transform-origin: 50px 50px 0px; transform: scale(1);"><g style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0s; animation-direction: normal;" class=""><g><style type="text/css" class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0s; animation-direction: normal;">.st0{fill:#f4e6c8;stroke:#323232;stroke-linejoin:round}.st0,.st1,.st2,.st3{stroke-width:3.5;stroke-miterlimit:10}.st1{stroke-linejoin:round;fill:#f3e4c7;stroke:#323232}.st2,.st3{fill:#d65a62;stroke:#000101}.st3{fill:#fff;stroke:#323232}.st4{fill:#e0e0e0;stroke:#000101;stroke-width:6}.st4,.st5,.st6{stroke-miterlimit:10}.st5{stroke-linecap:round;fill:none;stroke:#000101;stroke-width:5}.st6{fill:#e15c64;stroke:#323232;stroke-width:3.5}.st7{fill:#e6e6e6}.st8{fill:#e0e0e0}.st9{fill:#f7b26a}.st10,.st11,.st12{fill:#e6e6e6;stroke:#323232;stroke-width:3.5;stroke-miterlimit:10}.st11,.st12{fill:#b3b4b4}.st12{fill:#f7b26a}.st13{opacity:.2}.st14{fill:#e15c64}.st15{fill:#f47e5f}.st16{fill:#849b87}.st17,.st18,.st19{fill:#f47e5f;stroke:#323232;stroke-width:3.5;stroke-miterlimit:10}.st18,.st19{stroke-linejoin:round}.st19{fill:url(#SVGID_1_);stroke-width:7}.st20{fill:#666}.st21{fill:#323232}.st22{fill:#656666}.st23,.st24{fill:#f7b26a;stroke:#323232;stroke-width:3.5;stroke-linejoin:round;stroke-miterlimit:10}.st24{fill:#e15c64}.st25{fill:#fff}.st26,.st27{stroke-linejoin:round}.st26{fill:url(#SVGID_2_);stroke-width:3.5;stroke-miterlimit:10;stroke:#fff}.st27{opacity:.2;stroke:#000}.st27,.st28,.st29,.st30{stroke-width:3.5;stroke-miterlimit:10}.st28{fill:none;stroke-linecap:round;stroke:#fff}.st29,.st30{stroke:#323232}.st29{stroke-linejoin:round;fill:url(#SVGID_3_)}.st30{fill:url(#SVGID_4_)}.st30,.st31,.st32{stroke-linejoin:round}.st31{stroke:#323232;stroke-width:3.5;stroke-miterlimit:10;fill:#e0e0e0}.st32{fill:url(#SVGID_5_)}.st32,.st33{stroke:#323232;stroke-width:3.5;stroke-miterlimit:10}.st33,.st34{fill:none;stroke-linejoin:round}.st34,.st35,.st36{stroke:#323232;stroke-width:3.5;stroke-linecap:round;stroke-miterlimit:10}.st35{stroke-linejoin:round;fill:#f7b26a}.st36{fill:none}.st37{fill:#acbd81}.st38{fill:#f4e6c8}.st39{fill:#acbd81;stroke:#323232}.st39,.st40,.st41,.st42,.st43{stroke-width:3.5;stroke-miterlimit:10}.st40{opacity:.2;stroke:#000}.st41,.st42,.st43{fill:#f4e6c8;stroke:#323232}.st42,.st43{fill:none;stroke:#666}.st43{stroke:#849b87;stroke-width:8}.st44,.st45,.st46,.st47,.st48{fill:url(#SVGID_6_);stroke:#323232;stroke-width:3.5;stroke-miterlimit:10}.st45,.st46,.st47,.st48{fill:none;stroke:#fff}.st46,.st47,.st48{fill:url(#SVGID_7_);stroke:#323232}.st47,.st48{fill:url(#SVGID_8_);stroke-linejoin:round}.st48{fill:url(#SVGID_9_)}.st49,.st50,.st51{fill:none;stroke:#849b87;stroke-width:4;stroke-miterlimit:10}.st50,.st51{fill:url(#SVGID_10_);stroke:#323232;stroke-width:3.5}.st51{fill:none}.st52,.st53{stroke:#fff;stroke-width:3.5;stroke-linecap:round}.st52{stroke-miterlimit:10;fill:url(#SVGID_11_)}.st53{fill:url(#SVGID_12_)}.st53,.st54,.st55{stroke-miterlimit:10}.st54{stroke-linejoin:round;fill:#acbd81;stroke:#323232;stroke-width:3.5}.st55{fill:none;stroke:#fff;stroke-width:6}.st56,.st57,.st58,.st59,.st60{stroke-width:3.5;stroke-miterlimit:10}.st56{stroke-linecap:round;fill:#f7b26a;stroke:#fff}.st57,.st58,.st59,.st60{fill:#f4e6c8;stroke:#e15c64}.st58,.st59,.st60{fill:none}.st59,.st60{stroke:#fff;stroke-width:8}.st60{fill:url(#SVGID_13_);stroke:#323232;stroke-width:3.5}.st61{fill:#000101}.st62{fill:url(#SVGID_14_)}.st63{fill:#4a3826}.st64{fill:none;stroke:#4a3826;stroke-width:5;stroke-linecap:round;stroke-miterlimit:10}.st65{fill:url(#SVGID_15_)}.st66{fill:url(#SVGID_16_)}.st67{fill:url(#SVGID_17_)}.st68{fill:url(#SVGID_18_)}.st69{fill:url(#SVGID_19_)}.st70,.st71{fill:none;stroke-width:5}.st70{stroke-miterlimit:10;stroke:#4a3826}.st71{stroke:#000}.st71,.st72,.st73,.st74{stroke-miterlimit:10}.st72{stroke-linejoin:round;fill:#e0e0e0;stroke:#000101;stroke-width:6}.st73,.st74{fill:#000101;stroke:#000;stroke-width:5;stroke-linecap:round}.st74{fill:#a0c8d7}.st75{fill:url(#SVGID_20_)}.st76{fill:url(#SVGID_21_)}.st77{fill:url(#SVGID_22_)}.st78{fill:url(#SVGID_23_)}.st79{fill:url(#SVGID_24_)}.st80{fill:#000101;stroke:#4a3826;stroke-width:5;stroke-linecap:round;stroke-miterlimit:10}.st81{fill:url(#SVGID_25_)}.st82{fill:#a0c8d7}.st83{fill:#9ec4d2}.st84{fill:#f0ae6b}.st85,.st86{fill:#d65a62;stroke:#323232;stroke-width:3.5;stroke-miterlimit:10}.st86{fill:#323232;stroke:#000101;stroke-width:6;stroke-linejoin:round}.st87{fill:#d65a62}.st88{fill:#493727}.st89{fill:url(#SVGID_26_)}.st90{fill:#d65a62;stroke:#323232;stroke-width:3.5;stroke-linejoin:round;stroke-miterlimit:10}.st91{fill:#f3e4c7}.st92{fill:#f0ae6b;stroke:#323232;stroke-width:3.5;stroke-linejoin:round;stroke-miterlimit:10}.st93{fill:#66503a}</style><g style="transform-origin: 50px 50px 0px;"><g><g class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0.0833333s; animation-direction: normal;"><path class="st12" d="M71.41,54.5h-5.727c-1.657,0-3-1.343-3-3s1.343-3,3-3h5.727c7.247,0,13.594-5.146,15.093-12.237 c0.281-1.333-0.049-2.705-0.908-3.764s-2.132-1.666-3.495-1.666H65.683c-1.657,0-3-1.343-3-3s1.343-3,3-3H82.1 c3.18,0,6.152,1.417,8.156,3.887c2.003,2.471,2.774,5.672,2.117,8.783C90.292,47.352,81.476,54.5,71.41,54.5z" fill="rgb(247, 178, 106)" stroke="rgb(50, 50, 50)" style="fill: rgb(247, 178, 106); stroke: rgb(50, 50, 50);"></path></g></g></g><g style="transform-origin: 50px 50px 0px;"><g class="st13"><g class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0.166667s; animation-direction: normal;"><path d="M71.41,53.5h-5.727c-1.657,0-3-1.343-3-3s1.343-3,3-3h5.727c7.247,0,13.594-5.146,15.093-12.237 c0.281-1.333-0.049-2.705-0.908-3.764s-2.132-1.666-3.495-1.666H65.683c-1.657,0-3-1.343-3-3s1.343-3,3-3H82.1 c3.18,0,6.152,1.417,8.156,3.887c2.003,2.471,2.774,5.672,2.117,8.783C90.292,46.352,81.476,53.5,71.41,53.5z" fill="rgb(0, 0, 0)" style="fill: rgb(0, 0, 0);"></path></g></g></g><g style="transform-origin: 50px 50px 0px;"><g><g class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0.25s; animation-direction: normal;"><path class="st12" d="M50.333,60c0,0,14.833,10.82,14.833,24.167H35.5C35.5,70.82,50.333,60,50.333,60z" fill="rgb(247, 178, 106)" stroke="rgb(50, 50, 50)" style="fill: rgb(247, 178, 106); stroke: rgb(50, 50, 50);"></path></g></g></g><g class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0.333333s; animation-direction: normal;"><path class="st13" d="M55.32,83.167h9.846C65.167,69.82,50.333,59,50.333,59s-1.783,1.302-4.112,3.556 C49.968,67.435,54.388,74.785,55.32,83.167z" fill="rgb(0, 0, 0)" style="fill: rgb(0, 0, 0);"></path></g><g style="transform-origin: 50px 50px 0px;"><g><g class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0.416667s; animation-direction: normal;"><path class="st12" d="M34.317,54.5H28.59c-10.066,0-18.882-7.148-20.963-16.997C6.97,34.392,7.741,31.19,9.744,28.72 c2.003-2.47,4.976-3.887,8.156-3.887h16.417c1.657,0,3,1.343,3,3s-1.343,3-3,3H17.9c-1.363,0-2.637,0.607-3.495,1.666 s-1.189,2.431-0.908,3.764C14.996,43.354,21.343,48.5,28.59,48.5h5.727c1.657,0,3,1.343,3,3S35.974,54.5,34.317,54.5z" fill="rgb(247, 178, 106)" stroke="rgb(50, 50, 50)" style="fill: rgb(247, 178, 106); stroke: rgb(50, 50, 50);"></path></g></g></g><g class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0.5s; animation-direction: normal;"><path class="st12" d="M50,66.167c16.384,0,29.667-21.64,29.667-48.333H20.333C20.333,44.527,33.616,66.167,50,66.167z" fill="rgb(247, 178, 106)" stroke="rgb(50, 50, 50)" style="fill: rgb(247, 178, 106); stroke: rgb(50, 50, 50);"></path></g><g class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0.583333s; animation-direction: normal;"><path class="st3" d="M50.719,27.675l3.242,6.568c0.117,0.237,0.342,0.401,0.604,0.439l7.249,1.053 c0.658,0.096,0.92,0.904,0.444,1.367l-5.245,5.113c-0.189,0.184-0.275,0.45-0.231,0.71l1.238,7.219 c0.112,0.655-0.575,1.154-1.163,0.845l-6.483-3.409c-0.234-0.123-0.513-0.123-0.746,0l-6.483,3.409 c-0.588,0.309-1.276-0.19-1.163-0.845l1.238-7.219c0.045-0.26-0.042-0.525-0.231-0.71l-5.245-5.113 c-0.476-0.464-0.213-1.272,0.444-1.367l7.249-1.053c0.261-0.038,0.487-0.202,0.604-0.439l3.242-6.568 C49.575,27.079,50.425,27.079,50.719,27.675z" stroke="rgb(50, 50, 50)" fill="rgb(255, 255, 255)" style="stroke: rgb(50, 50, 50); fill: rgb(255, 255, 255);"></path></g><g class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0.666667s; animation-direction: normal;"><path class="st56" d="M27.829,35.411c0.065,0.218,0.13,0.435,0.197,0.651" fill="rgb(247, 178, 106)" stroke="rgb(255, 255, 255)" style="fill: rgb(247, 178, 106); stroke: rgb(255, 255, 255);"></path></g><g class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0.75s; animation-direction: normal;"><path class="st56" d="M25.401,22.903c0.237,2.327,0.578,4.594,1.017,6.788" fill="rgb(247, 178, 106)" stroke="rgb(255, 255, 255)" style="fill: rgb(247, 178, 106); stroke: rgb(255, 255, 255);"></path></g><g class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0.833333s; animation-direction: normal;"><path class="st13" d="M65.042,16.833c-1.286,23.562-12.945,42.251-27.49,43.872c3.786,2.856,8.001,4.461,12.448,4.461 c16.384,0,29.667-21.64,29.667-48.333H65.042z" fill="rgb(0, 0, 0)" style="fill: rgb(0, 0, 0);"></path></g><metadata xmlns:d="https://loading.io/stock/" class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 0.916667s; animation-direction: normal;">
  <d:name class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 1s; animation-direction: normal;">trophy</d:name>
  <d:tags class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 1.08333s; animation-direction: normal;">trophy,bowl,best,first,winner,success,prize,award</d:tags>
  <d:license class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 1.16667s; animation-direction: normal;">cc-by</d:license>
  <d:slug class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 1.25s; animation-direction: normal;">d4apaa</d:slug>
  </metadata></g></g></g></g><style type="text/css" class="ld ldt-bounce-in" style="transform-origin: 50px 50px 0px; animation-duration: 2s; animation-delay: 1.33333s; animation-direction: normal;">@keyframes ldt-bounce-in {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    5% {
      -webkit-transform: scale(0.0846);
      transform: scale(0.0846);
    }
    6% {
      -webkit-transform: scale(0.191);
      transform: scale(0.191);
    }
    7% {
      -webkit-transform: scale(0.3255);
      transform: scale(0.3255);
    }
    8% {
      -webkit-transform: scale(0.4804);
      transform: scale(0.4804);
    }
    9% {
      -webkit-transform: scale(0.646);
      transform: scale(0.646);
    }
    10% {
      -webkit-transform: scale(0.8116);
      transform: scale(0.8116);
    }
    11% {
      -webkit-transform: scale(0.9665);
      transform: scale(0.9665);
    }
    12% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    13% {
      -webkit-transform: scale(1.2069);
      transform: scale(1.2069);
    }
    14% {
      -webkit-transform: scale(1.2796);
      transform: scale(1.2796);
    }
    19% {
      -webkit-transform: scale(1.1558);
      transform: scale(1.1558);
    }
    20% {
      -webkit-transform: scale(1.07);
      transform: scale(1.07);
    }
    21% {
      -webkit-transform: scale(0.9823);
      transform: scale(0.9823);
    }
    22% {
      -webkit-transform: scale(0.901);
      transform: scale(0.901);
    }
    23% {
      -webkit-transform: scale(0.8328);
      transform: scale(0.8328);
    }
    25% {
      -webkit-transform: scale(0.7551);
      transform: scale(0.7551);
    }
    29% {
      -webkit-transform: scale(0.8516);
      transform: scale(0.8516);
    }
    31% {
      -webkit-transform: scale(0.973);
      transform: scale(0.973);
    }
    33% {
      -webkit-transform: scale(1.0857);
      transform: scale(1.0857);
    }
    35% {
      -webkit-transform: scale(1.1538);
      transform: scale(1.1538);
    }
    40% {
      -webkit-transform: scale(1.0771);
      transform: scale(1.0771);
    }
    42% {
      -webkit-transform: scale(0.9954);
      transform: scale(0.9954);
    }
    45% {
      -webkit-transform: scale(0.9057);
      transform: scale(0.9057);
    }
    52% {
      -webkit-transform: scale(0.9908);
      transform: scale(0.9908);
    }
    56% {
      -webkit-transform: scale(1.0623);
      transform: scale(1.0623);
    }
    64% {
      -webkit-transform: scale(0.9845);
      transform: scale(0.9845);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @-webkit-keyframes ldt-bounce-in {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    5% {
      -webkit-transform: scale(0.0846);
      transform: scale(0.0846);
    }
    6% {
      -webkit-transform: scale(0.191);
      transform: scale(0.191);
    }
    7% {
      -webkit-transform: scale(0.3255);
      transform: scale(0.3255);
    }
    8% {
      -webkit-transform: scale(0.4804);
      transform: scale(0.4804);
    }
    9% {
      -webkit-transform: scale(0.646);
      transform: scale(0.646);
    }
    10% {
      -webkit-transform: scale(0.8116);
      transform: scale(0.8116);
    }
    11% {
      -webkit-transform: scale(0.9665);
      transform: scale(0.9665);
    }
    12% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    13% {
      -webkit-transform: scale(1.2069);
      transform: scale(1.2069);
    }
    14% {
      -webkit-transform: scale(1.2796);
      transform: scale(1.2796);
    }
    19% {
      -webkit-transform: scale(1.1558);
      transform: scale(1.1558);
    }
    20% {
      -webkit-transform: scale(1.07);
      transform: scale(1.07);
    }
    21% {
      -webkit-transform: scale(0.9823);
      transform: scale(0.9823);
    }
    22% {
      -webkit-transform: scale(0.901);
      transform: scale(0.901);
    }
    23% {
      -webkit-transform: scale(0.8328);
      transform: scale(0.8328);
    }
    25% {
      -webkit-transform: scale(0.7551);
      transform: scale(0.7551);
    }
    29% {
      -webkit-transform: scale(0.8516);
      transform: scale(0.8516);
    }
    31% {
      -webkit-transform: scale(0.973);
      transform: scale(0.973);
    }
    33% {
      -webkit-transform: scale(1.0857);
      transform: scale(1.0857);
    }
    35% {
      -webkit-transform: scale(1.1538);
      transform: scale(1.1538);
    }
    40% {
      -webkit-transform: scale(1.0771);
      transform: scale(1.0771);
    }
    42% {
      -webkit-transform: scale(0.9954);
      transform: scale(0.9954);
    }
    45% {
      -webkit-transform: scale(0.9057);
      transform: scale(0.9057);
    }
    52% {
      -webkit-transform: scale(0.9908);
      transform: scale(0.9908);
    }
    56% {
      -webkit-transform: scale(1.0623);
      transform: scale(1.0623);
    }
    64% {
      -webkit-transform: scale(0.9845);
      transform: scale(0.9845);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  .ldt-bounce-in {
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-animation: ldt-bounce-in 1s ease-out forwards;
    animation: ldt-bounce-in 1s ease-out forwards;
  }
  </style></svg></svg>`


export { cardTemplate, numbersDrawnTemplate, rankingTemplate, rankingItemTemplate, infoSVG, trophySVG };