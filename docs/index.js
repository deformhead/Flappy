var _0x5c73=["16px Courier New","textBaseline","top","fillStyle","#6b717d","fillText","/ Theatre","#d7dae0","$ preloading assets...","preloading","$ preloading completed","$ loading main scene...","setup loading scene","state","load","destroy main scene","world","systems","-------","#a8c0b0","fillRect","width","setup main scene","World","System","position","box","move","bind","loop","gravity","Entity","forEach","components","name","length","add","get","remove","has","push","entities","splice","indexOf","animate","frames","elapsed","delta","framerate","frame","pow","parts","drawImage","current","speed","abs","start main scene","Box","Loop","Images","cloud","Move","Position","height","Gravity","Theatre","expose","sharp","Canvas","theatre","appendChild","container","element","scene","scenes","preload","type","undefined","scope","restart","createElement","canvas","getContext","-moz-crisp-edges","style","-webkit-crisp-edges","imageRendering","crisp-edges","pixelated","imageSmoothingEnabled","setAttribute","now","dataset","content","src","onload","sound","source","oncanplaythrough","all","then","exports","call","defineProperty","toStringTag","__esModule","object","create","string","prototype","hasOwnProperty","assets","body","datasets","sounds","images","bird","main","image","pipe","tree","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAgCAYAAADtwH1UAAACUklEQVRoge2aP27bMBSHPxaePWRK/wwdjKLIUDCdtAQwMgk9QdGhyBFyhB4hx+gRPAUGsnhKiAxBUXjo4DZFW3TIBdzBfq5EUZZIqyJQ85ssU+JPxHu/B4okJBL7jGp746HWQQLfjQl6bl/0HwX1muiMwXK5dDY8Pj4uXY9GzwGYz7+4H7A4HZ8ogMv19f3NjdeL7Yt+ckBklO0AibzWRwAYc1e64eLiQ+n+8/PV9Ww6Kf2fjXOgkAnTK6A5E/dNPzkgMhsH1EXejvjHySrSs8mMYnumM6dAUybYtbZAL/pCrPEnB0Rm0BR5ibgvEnmpjdk4l1qq4G/GnY5PALicXjlnF1Jjs9ydYaH6QqzxC8kBkRnIj64i74tkvj2LsJGM8nVCW2KNPzkgMurN2XsArs1tqy88OwN9ZwNU15+cs43K8+t+bSd0oF96D1+H7aqfHBAZdah1qxos1NViyYS2vHwxUgCfPs+3Zt7bPC9d182KfPVf61cK4MevnwAsFvdBFSBUX74LkgMis5kFzcwqgnU1TNor/1s1UKjrZ9O+nhcPD4Zq3Y/TCfaXZ9f6Ql0Nt8dtO3BX/eSAyKj87B1QXfVri0ReMqMtUoOvzS0Aw4MhAA+/H7zeI1T/2dMnCmDx9ZvXd0hX+jL+5IDIKMde505OaKKQKQqcq6K96oue7QCp/W0zO1Q/OSAylf2AAkGZ2ITWRwrAmDtg675AL/pNq7H/Wj85IDK1e8IOfDNk65mjur3ZvvW36PWinxwQmcaTcaEnwoRdT6b97/rJAYlEIiJ/AHlYilt2swfHAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAABgCAYAAABsS6soAAADj0lEQVR4nO3dTXLiMBAGUDHFAbLMcu5/KpYsuUFmkWICjg3GRlbL/d4yleLPXdLntmSXAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAuEPrD8A+nS7nZ//yNfOlHtbo34/PmS8Dv/1p/QEAWpEAWeWNSe9Vd7UrCbKEBAikJQHykgeJr1bSe0YSZDEJEEhLAmSWkeTXKvFNkQR5mQQIpDU7Ac642jfKTLwPN8c/WvIbmpUEl9bzXOq+DxIgkNavBFh7Bb+ZsS8d9P6mHEr5qbcNr17rRXZEAgTS+j9bbTDTmxk71FHvb2iqv73V91DvHZAAgbSOI3+rNUNeX/dQyk+yMDNSyV29le0T7PD9CUgCBNI61l4PNUISZEu99S7ZkAQIpHXbA2zaI5EEga1JgEBax9K+R+JqGdCEBAikNbYOsCm9QPbo2WoL9d6GBAikdThdzq17gEP2UAbS8V7gXqj3hiRAIK2IA+BXkTYiOhRX6mtQ7w1FHAABNhF+ADxdztWf38C0vx+fw76UJMhuhB8AAWqJPADqjQQykgShe5EHQICqwu0EoRut7rTMDrza13/X2cfwfSVAIK3ICdCVxoBmPGeX16Sq8wVPn7y7X+jVGxLhVykSIJBYxARobyQZpKrzFc8dH/7fWxOhBAikFTEBllL2PyOSluS3zsNE+OrvKQECaYVNgLAzkl8dq54pJAECaUVKgKnWQxFOrZ0tqZLfiBA7habWrUqAQFqREiAdSLADZHgmsjTBZE9+ITzrRUqAQFqREuCqqzlsLkRv591G9jqvqkfJb1sPzlBG61UCBNKKlADvTI3ke51RW90fba4Evb87e62zRGadoUiAQFoRE+DUyF3rvmBNvNqruLFq7+OrNlzR34qec11b3Tl80etLgEBah9Pl3OuMHnLmnkpkKxLflFXrzBb09KLVSajj3+uZSG3RzyAkQCCtnhNgNHMTSdW9plfDRFIhgfLNOsEZbuovVL1JgEBaEuD+PEskjncMu94rPKPHHKIOJUAgrYjrAHuxtPcTcj0Um+tq7/uKnUCh61ECBNJ6lAC3npnWzhS9fV5yGq3TjvZa76ruJUAgrUcJcOuRfm2C29XMFFjUnlUvx7+Xz5mCBAikdSxxZ/SruTNm9O/Rm6nfXYLhkVY7ohaRAIG0jiXISPwGe/kefJPo9y3E8ZUAgbR66AGSk0RPdRIgkNY/PJ/0pRDNGsUAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAgCAYAAADtwH1UAAABIElEQVRoge2ZMQ7CMAxFXdRDcIyOGRlzBI7IETIyduRGZWhdKVbcRAz5Kv1vgThUFfr5VmwP92laBMuwfS4iIvM7ZZvzZ87Wr7TuP2Msxvfn0vpciCFbF96rQN5/s1HSl1G/WOUtehLCFA7j3okpnAAidACc0dvwTrJF495+Qy68NHQAGAoAhgKAoQBgKAAYCgCGAoBx6wBb8bbGbf2gnO3+7/0Pi1f/tEIHgNkdEB7x6HeXpdYBUDyH15xPB4AZxenHaw5szXE/5Hjbj0eRzUM6ZoJFhA6A496CFG/yo3Fda7dTOVsXFDUPoQPAVOuA2n3YOuFf6DUPoQPAUAAwFAAMBQBDAcBQADAUAEy1Er4qveYhdAAYOmADNQ+hA8B8AZHqljFFasjuAAAAAElFTkSuQmCC","loading","destroy","render","setup","start","update","log","destroy loading scene","redirect","context","size","font"];!function(x,c){!function(c){for(;--c;)x.push(x.shift())}(++c)}(_0x5c73,237);var _0xc073=function(x,c){return _0x5c73[x-=0]};!function(x){var c={};function t(e){if(c[e])return c[e][_0xc073("0x0")];var n=c[e]={i:e,l:!1,exports:{}};return x[e][_0xc073("0x1")](n[_0xc073("0x0")],n,n[_0xc073("0x0")],t),n.l=!0,n[_0xc073("0x0")]}t.m=x,t.c=c,t.d=function(x,c,e){t.o(x,c)||Object[_0xc073("0x2")](x,c,{enumerable:!0,get:e})},t.r=function(x){"undefined"!=typeof Symbol&&Symbol[_0xc073("0x3")]&&Object.defineProperty(x,Symbol[_0xc073("0x3")],{value:"Module"}),Object[_0xc073("0x2")](x,_0xc073("0x4"),{value:!0})},t.t=function(x,c){if(1&c&&(x=t(x)),8&c)return x;if(4&c&&typeof x===_0xc073("0x5")&&x&&x[_0xc073("0x4")])return x;var e=Object[_0xc073("0x6")](null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:x}),2&c&&typeof x!=_0xc073("0x7"))for(var n in x)t.d(e,n,function(c){return x[c]}.bind(null,n));return e},t.n=function(x){var c=x&&x[_0xc073("0x4")]?function(){return x.default}:function(){return x};return t.d(c,"a",c),c},t.o=function(x,c){return Object[_0xc073("0x8")][_0xc073("0x9")][_0xc073("0x1")](x,c)},t.p="",t(t.s=0)}([function(x,c,t){"use strict";t.r(c);var e=t(1),n=t(9);new(t(36).Theatre)({assets:e[_0xc073("0xa")],container:document[_0xc073("0xb")],expose:!0,framerate:60,scenes:n,sharp:!0,size:{width:320,height:288}})},function(x,c,t){"use strict";t.r(c),t.d(c,_0xc073("0xa"),function(){return s});var e=t(2),n=t(3),i=t(8);const s=[...e[_0xc073("0xc")],...n.images,...i[_0xc073("0xd")]]},function(x,c,t){"use strict";t.r(c),t.d(c,_0xc073("0xc"),function(){return e});const e=[]},function(x,c,t){"use strict";t.r(c),t.d(c,_0xc073("0xe"),function(){return e});const e=[{name:_0xc073("0xf"),scope:_0xc073("0x10"),source:t(4),type:_0xc073("0x11")},{name:"cloud",scope:_0xc073("0x10"),source:t(5),type:_0xc073("0x11")},{name:_0xc073("0x12"),scope:_0xc073("0x10"),source:t(6),type:_0xc073("0x11")},{name:_0xc073("0x13"),scope:_0xc073("0x10"),source:t(7),type:_0xc073("0x11")}]},function(x,c){x[_0xc073("0x0")]=_0xc073("0x14")},function(x,c){x[_0xc073("0x0")]=_0xc073("0x15")},function(x,c){x[_0xc073("0x0")]=_0xc073("0x16")},function(x,c){x[_0xc073("0x0")]="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAABACAYAAABr564eAAADO0lEQVR4nO3bwXHbMBAFUCjjIlKGjy4hR5fhElxCSkgZOaYEdeVcQseGRREkAQLSvnfJjC1RyxW1+ELolAAAAACAe3bqXcDonl9f8h+9LTzlU09///xVtR6gnm+9CwDoRQJc8CEBLiW/3NXejpIMLyTcIr3rv9W6c0vnMVq9k7X9H/U8JEAgrG4JsHQF6b1y7EiAc4bYI9ywtznpUv+V62XouucU9P/iZ/MG6s4N1fecBAiEdXgCXLGCDLECNkiAk1GS1NbzOqXUvu6K9U66JpKAyXtyyPWylgQIhHVYAqywkvdeAWsnwIkkdcW9JPDayXtyYN03cb2sJQECYT3kP9h6f1XuyoTfupJMzzul9L/OvStJrfOtpXb/GyS//Di7vkV07P/F+m+g/1X6Pjmw/xc/v5Mr/dqkdC5IgEBYp4r/y/N+zIXfV72fbmsCbJiM1prrV+3+D7WHqf+77dpTi9L/vC/5eUuAQFin59eXfE+hyV88VDzu3PGvOmBPbK9b6//c61yk//q/oHX/c28pSYBAYB8TYLPX+PdvqwS46m8RPxhl5WtN/8v07lMr+v/Zp+NLgEBYX+4DbKDVSlN63Kr3Td0g/S/Tu0+ttNrjr61L/yVAIKwjEuAoRl35otD/vvT/AgkQCMsABMIyAIGwDEAgLAMQCMsABMIyAIGwDEAgLAMQCMsABMIyAIGwDEAgLAMQCMsABMIyAIGwDEAgLAMQCMsABMIyAIGwDEAgLAMQCMsABMIyAIGwDEAgLAMQCMsABMIyAIGwhh2A5z/ndP5z7l0GcMeGHYAArZ2+Pz6+pZTS04+n3rWklNJs6hulvtxUb2l9ax8PkbX+vEiAQFgPrQ5ce3JvPV7p8/bW2yoJ5om41flvVev4oyfj3vX1fv2j5dd9q8+XBAiE9b4HOKm1kufWJp1Sc8ctraNWwip9funjl/rROjkuqbVXW3vPt9U3j9zR3xSWXr/1+71WrW9Uc2p97iVAIKwvCXDJ1sRya1ol1tqWksDS40vtPd+1dS49P9fq7oFa/VxbX63r6+i7E/a+D1uvi9L3KX+cBAiEtToBch9q7dVxWWkyOcrePbNSo5xvKQkQCOsvsX93X3l/vBIAAAAASUVORK5CYII="},function(x,c,t){"use strict";t.r(c),t.d(c,_0xc073("0xd"),function(){return e});const e=[]},function(x,c,t){"use strict";t.r(c);var e=t(10);t.d(c,_0xc073("0x17"),function(){return e});var n=t(16);t.d(c,_0xc073("0x10"),function(){return n})},function(x,c,t){"use strict";t.r(c);var e=t(11);t.d(c,_0xc073("0x18"),function(){return e[_0xc073("0x18")]});var n=t(12);t.d(c,_0xc073("0x19"),function(){return n[_0xc073("0x19")]});var i=t(13);t.d(c,_0xc073("0x1a"),function(){return i.setup});var s=t(14);t.d(c,"start",function(){return s[_0xc073("0x1b")]});var r=t(15);t.d(c,_0xc073("0x1c"),function(){return r[_0xc073("0x1c")]})},function(x,c,t){"use strict";function e(){console[_0xc073("0x1d")](_0xc073("0x1e")),console.log("-------"),delete this.state[_0xc073("0x1f")]}t.r(c),t.d(c,_0xc073("0x18"),function(){return e})},function(x,c,t){"use strict";function e(){this[_0xc073("0x20")].fillStyle="#181a1f",this[_0xc073("0x20")].fillRect(0,0,this[_0xc073("0x21")].width,this.size.height),this.context[_0xc073("0x22")]=_0xc073("0x23"),this[_0xc073("0x20")].textAlign=_0xc073("0x1b"),this[_0xc073("0x20")][_0xc073("0x24")]=_0xc073("0x25"),this[_0xc073("0x20")][_0xc073("0x26")]=_0xc073("0x27"),this[_0xc073("0x20")][_0xc073("0x28")](_0xc073("0x29"),8,8),this[_0xc073("0x20")].fillStyle=_0xc073("0x2a"),this[_0xc073("0x20")][_0xc073("0x28")](_0xc073("0x2b"),8,32),!1===this[_0xc073("0x2c")]&&(this.context[_0xc073("0x28")](_0xc073("0x2d"),8,56),this.context.fillText(_0xc073("0x2e"),8,80))}t.r(c),t.d(c,"render",function(){return e})},function(x,c,t){"use strict";function e(){console.log(_0xc073("0x2f"))}t.r(c),t.d(c,_0xc073("0x1a"),function(){return e})},function(x,c,t){"use strict";function e(){console[_0xc073("0x1d")]("start loading scene"),this[_0xc073("0x30")][_0xc073("0x1f")]=!1}t.r(c),t.d(c,_0xc073("0x1b"),function(){return e})},function(x,c,t){"use strict";function e(){!1===this.preloading&&!1===this[_0xc073("0x30")][_0xc073("0x1f")]&&(setTimeout(()=>{this[_0xc073("0x31")]("main")},800),this.state[_0xc073("0x1f")]=!0)}t.r(c),t.d(c,_0xc073("0x1c"),function(){return e})},function(x,c,t){"use strict";t.r(c);var e=t(17);t.d(c,"destroy",function(){return e.destroy});var n=t(18);t.d(c,_0xc073("0x19"),function(){return n.render});var i=t(19);t.d(c,"setup",function(){return i[_0xc073("0x1a")]});var s=t(27);t.d(c,_0xc073("0x1b"),function(){return s[_0xc073("0x1b")]});var r=t(35);t.d(c,_0xc073("0x1c"),function(){return r.update})},function(x,c,t){"use strict";function e(){console[_0xc073("0x1d")](_0xc073("0x32")),delete this[_0xc073("0x33")],delete this[_0xc073("0x34")],console.log(_0xc073("0x35"))}t.r(c),t.d(c,_0xc073("0x18"),function(){return e})},function(x,c,t){"use strict";function e(){this.context[_0xc073("0x26")]=_0xc073("0x36"),this.context[_0xc073("0x37")](0,0,this[_0xc073("0x21")][_0xc073("0x38")],this.size.height),this.systems[_0xc073("0xe")].update.call(this,this[_0xc073("0x33")].entities)}t.r(c),t.d(c,"render",function(){return e})},function(x,c,t){"use strict";t.r(c),t.d(c,_0xc073("0x1a"),function(){return i});var e=t(20),n=t(21);function i(){console.log(_0xc073("0x39")),this.world=new(e[_0xc073("0x3a")]),this[_0xc073("0x34")]={images:new(e[_0xc073("0x3b")])(["box","images",_0xc073("0x3c")],n[_0xc073("0xe")].bind(this)),animate:new(e[_0xc073("0x3b")])([_0xc073("0xe")],n.animate.bind(this)),move:new e.System(["move",_0xc073("0x3d"),_0xc073("0x3c")],n[_0xc073("0x3e")][_0xc073("0x3f")](this)),loop:new e.System([_0xc073("0x40"),_0xc073("0x3d"),_0xc073("0x3c")],n[_0xc073("0x40")][_0xc073("0x3f")](this)),gravity:new(e[_0xc073("0x3b")])([_0xc073("0x41"),_0xc073("0x3d"),_0xc073("0x3c")],n[_0xc073("0x41")].bind(this))}}},function(x,c,t){"use strict";function e(x,c){this.components={},this[_0xc073("0x45")]=x,this[_0xc073("0x47")]=function(x){x[_0xc073("0x43")](x=>{this[_0xc073("0x44")][x[_0xc073("0x45")]]=x})},this[_0xc073("0x48")]=function(x){return this[_0xc073("0x44")][x]},this.has=function(x){for(let c=0,t=x[_0xc073("0x46")];c<t;c+=1){const t=x[c];if(!1===this[_0xc073("0x44")].hasOwnProperty(t))return!1}return!0},this[_0xc073("0x49")]=function(x){for(let c=0,t=x[_0xc073("0x46")];c<t;c+=1){const t=x[c];!0===this.components.hasOwnProperty(t)&&delete this[_0xc073("0x44")][t]}},this[_0xc073("0x47")](c)}function n(x,c){this.update=function(t){t.forEach(t=>{!0===t[_0xc073("0x4a")](x)&&c(t)})}}function i(){this.entities=[],this[_0xc073("0x47")]=function(x){this.entities[_0xc073("0x4b")](x)},this[_0xc073("0x48")]=function(x){for(let c=0,t=this[_0xc073("0x4c")][_0xc073("0x46")];c<t;c+=1){const t=this.entities[c];if(t[_0xc073("0x45")]===x)return t}},this[_0xc073("0x49")]=function(x){this.entities[_0xc073("0x4d")](this.entities[_0xc073("0x4e")](x),1)}}t.r(c),t.d(c,_0xc073("0x3a"),function(){return i}),t.d(c,_0xc073("0x42"),function(){return e}),t.d(c,_0xc073("0x3b"),function(){return n})},function(x,c,t){"use strict";t.r(c);var e=t(22);t.d(c,"animate",function(){return e[_0xc073("0x4f")]});var n=t(23);t.d(c,_0xc073("0x41"),function(){return n.gravity});var i=t(24);t.d(c,"images",function(){return i[_0xc073("0xe")]});var s=t(25);t.d(c,_0xc073("0x40"),function(){return s[_0xc073("0x40")]});var r=t(26);t.d(c,_0xc073("0x3e"),function(){return r[_0xc073("0x3e")]})},function(x,c,t){"use strict";function e(x){x[_0xc073("0x48")](_0xc073("0xe")).parts[_0xc073("0x43")](x=>{if(x[_0xc073("0x50")][_0xc073("0x46")]>1){x[_0xc073("0x51")]+=this[_0xc073("0x52")][_0xc073("0x1c")];const c=1e3/x[_0xc073("0x53")];for(;x[_0xc073("0x51")]>=c;)x[_0xc073("0x51")]-=c,x[_0xc073("0x54")]=x[_0xc073("0x54")]===x.frames[_0xc073("0x46")]-1?0:x[_0xc073("0x54")]+1,x.current=x[_0xc073("0x50")][x[_0xc073("0x54")]]}})}t.r(c),t.d(c,_0xc073("0x4f"),function(){return e})},function(x,c,t){"use strict";function e(x){const c=x[_0xc073("0x48")](_0xc073("0x3c")),t=x.get("gravity");t[_0xc073("0x51")]+=this[_0xc073("0x52")][_0xc073("0x1c")],c.y+=4.905*Math[_0xc073("0x55")](t[_0xc073("0x51")]/1e3,2)}t.r(c),t.d(c,_0xc073("0x41"),function(){return e})},function(x,c,t){"use strict";function e(x){const c=x[_0xc073("0x48")](_0xc073("0xe")),t=x[_0xc073("0x48")]("position");c[_0xc073("0x56")][_0xc073("0x43")](x=>{this[_0xc073("0x20")][_0xc073("0x57")](x.image,x[_0xc073("0x58")][0]*x[_0xc073("0x21")][0],x[_0xc073("0x58")][1]*x[_0xc073("0x21")][1],x[_0xc073("0x21")][0],x[_0xc073("0x21")][1],x[_0xc073("0x3c")][0]+t.x,x[_0xc073("0x3c")][1]+t.y,x[_0xc073("0x21")][0],x[_0xc073("0x21")][1])})}t.r(c),t.d(c,"images",function(){return e})},function(x,c,t){"use strict";function e(x){const c=x[_0xc073("0x48")](_0xc073("0x3d")),t=x[_0xc073("0x48")](_0xc073("0x3c"));if(c[_0xc073("0x38")]>=this[_0xc073("0x21")][_0xc073("0x38")])for(;t.x+c[_0xc073("0x38")]/2<=0;)t.x+=c[_0xc073("0x38")]/2}t.r(c),t.d(c,_0xc073("0x40"),function(){return e})},function(x,c,t){"use strict";function e(x){x.get(_0xc073("0x3d"));const c=x.get(_0xc073("0x3e")),t=x[_0xc073("0x48")](_0xc073("0x3c"));for(c[_0xc073("0x51")]+=this[_0xc073("0x52")][_0xc073("0x1c")];c[_0xc073("0x51")]>=1e3/Math.abs(c[_0xc073("0x59")]);)t.x+=c[_0xc073("0x59")]/Math[_0xc073("0x5a")](c[_0xc073("0x59")]),c[_0xc073("0x51")]-=1e3/Math.abs(c.speed)}t.r(c),t.d(c,"move",function(){return e})},function(x,c,t){"use strict";t.r(c),t.d(c,"start",function(){return i});var e=t(20),n=t(28);function i(){console[_0xc073("0x1d")](_0xc073("0x5b")),this[_0xc073("0x33")][_0xc073("0x47")](new(e[_0xc073("0x42")])(_0xc073("0x13"),[new(n[_0xc073("0x5c")])(640,64),new n.Position(0,224),new n.Move(-64),new(n[_0xc073("0x5d")]),new(n[_0xc073("0x5e")])([{image:this.assets[_0xc073("0xe")][_0xc073("0x10")][_0xc073("0x13")],position:[0,0],size:[320,64],frames:[[0,0]]},{image:this.assets[_0xc073("0xe")][_0xc073("0x10")][_0xc073("0x13")],position:[320,0],size:[320,64],frames:[[0,0]]}])])),this[_0xc073("0x33")].add(new(e[_0xc073("0x42")])(_0xc073("0x5f"),[new(n[_0xc073("0x5c")])(640,96),new n.Position(0,32),new(n[_0xc073("0x60")])(-16),new(n[_0xc073("0x5d")]),new(n[_0xc073("0x5e")])([{image:this.assets.images[_0xc073("0x10")][_0xc073("0x5f")],position:[0,0],size:[320,96],frames:[[0,0]]},{image:this[_0xc073("0xa")][_0xc073("0xe")].main[_0xc073("0x5f")],position:[320,0],size:[320,96],frames:[[0,0]]}])])),this.world[_0xc073("0x47")](new(e[_0xc073("0x42")])(_0xc073("0x12"),[new(n[_0xc073("0x5c")])(32,320),new(n[_0xc073("0x61")])(320,0),new(n[_0xc073("0x60")])(-128),new(n[_0xc073("0x5e")])([{image:this[_0xc073("0xa")][_0xc073("0xe")][_0xc073("0x10")][_0xc073("0x12")],position:[0,0],size:[32,32],frames:[[1,0]]},{image:this[_0xc073("0xa")][_0xc073("0xe")][_0xc073("0x10")].pipe,position:[0,32],size:[32,32],frames:[[1,0]]},{image:this.assets[_0xc073("0xe")][_0xc073("0x10")].pipe,position:[0,64],size:[32,32],frames:[[2,0]]},{image:this[_0xc073("0xa")][_0xc073("0xe")].main[_0xc073("0x12")],position:[0,160],size:[32,32],frames:[[0,0]]},{image:this[_0xc073("0xa")].images[_0xc073("0x10")].pipe,position:[0,192],size:[32,32],frames:[[1,0]]},{image:this[_0xc073("0xa")].images.main.pipe,position:[0,224],size:[32,32],frames:[[1,0]]},{image:this[_0xc073("0xa")].images.main.pipe,position:[0,256],size:[32,32],frames:[[1,0]]}])])),this[_0xc073("0x33")][_0xc073("0x47")](new e.Entity(_0xc073("0xf"),[new n.Box(32,32),new(n[_0xc073("0x61")])(32,this[_0xc073("0x21")][_0xc073("0x62")]/2-16),new(n[_0xc073("0x63")]),new(n[_0xc073("0x5e")])([{image:this[_0xc073("0xa")][_0xc073("0xe")][_0xc073("0x10")][_0xc073("0xf")],position:[0,0],size:[32,32],frames:[[0,0],[1,0],[2,0]],framerate:16}])]))}},function(x,c,t){"use strict";t.r(c);var e=t(29);t.d(c,_0xc073("0x5c"),function(){return e.Box});var n=t(30);t.d(c,"Gravity",function(){return n[_0xc073("0x63")]});var i=t(31);t.d(c,_0xc073("0x5e"),function(){return i[_0xc073("0x5e")]});var s=t(32);t.d(c,_0xc073("0x5d"),function(){return s[_0xc073("0x5d")]});var r=t(33);t.d(c,"Move",function(){return r.Move});var _=t(34);t.d(c,"Position",function(){return _[_0xc073("0x61")]})},function(x,c,t){"use strict";function e(x,c){this[_0xc073("0x45")]="box",this[_0xc073("0x38")]=x,this[_0xc073("0x62")]=c}t.r(c),t.d(c,_0xc073("0x5c"),function(){return e})},function(x,c,t){"use strict";function e(){this.name=_0xc073("0x41"),this.elapsed=0}t.r(c),t.d(c,_0xc073("0x63"),function(){return e})},function(x,c,t){"use strict";function e(x){this.name="images",this[_0xc073("0x56")]=x,this.parts[_0xc073("0x43")](x=>{x[_0xc073("0x53")]=x[_0xc073("0x53")]||8,x[_0xc073("0x54")]=0,x[_0xc073("0x58")]=x.frames[x[_0xc073("0x54")]],x[_0xc073("0x51")]=0})}t.r(c),t.d(c,"Images",function(){return e})},function(x,c,t){"use strict";function e(){this.name=_0xc073("0x40")}t.r(c),t.d(c,_0xc073("0x5d"),function(){return e})},function(x,c,t){"use strict";function e(x){this[_0xc073("0x45")]=_0xc073("0x3e"),this[_0xc073("0x59")]=x,this.elapsed=0}t.r(c),t.d(c,_0xc073("0x60"),function(){return e})},function(x,c,t){"use strict";function e(x,c){this[_0xc073("0x45")]=_0xc073("0x3c"),this.x=x,this.y=c}t.r(c),t.d(c,_0xc073("0x61"),function(){return e})},function(x,c,t){"use strict";function e(){this.systems[_0xc073("0x4f")].update[_0xc073("0x1")](this,this[_0xc073("0x33")][_0xc073("0x4c")]),this[_0xc073("0x34")][_0xc073("0x41")][_0xc073("0x1c")][_0xc073("0x1")](this,this[_0xc073("0x33")].entities),this[_0xc073("0x34")][_0xc073("0x3e")][_0xc073("0x1c")].call(this,this[_0xc073("0x33")].entities),this[_0xc073("0x34")].loop[_0xc073("0x1c")][_0xc073("0x1")](this,this[_0xc073("0x33")][_0xc073("0x4c")])}t.r(c),t.d(c,_0xc073("0x1c"),function(){return e})},function(x,c,t){"use strict";t.r(c),t.d(c,_0xc073("0x64"),function(){return s});var e=t(37),n=t(38),i=t(39);function s(x){const{assets:c,container:t,scenes:s,size:r}=x,_=x[_0xc073("0x65")]||!1,o=x[_0xc073("0x53")]||60,u=x[_0xc073("0x66")]||!1;let a=null,A=!1;this[_0xc073("0x2c")]=!1,this.scenes=s,this.size=r,this[_0xc073("0x30")]={},this.version="0.10.0",this[_0xc073("0x31")]=function(x){a=x},this[_0xc073("0x72")]=function(){A=!0},function(){const x=new(e[_0xc073("0x67")])("2d",_0xc073("0x68"),r[_0xc073("0x38")],r[_0xc073("0x62")]);!0===u&&x[_0xc073("0x66")](),t[_0xc073("0x69")](x.element),this[_0xc073("0x6a")]=t,this[_0xc073("0x20")]=x[_0xc073("0x20")],this.element=x[_0xc073("0x6b")],this.assets={},this.delta={},this.delta[_0xc073("0x19")]=0,this[_0xc073("0x52")][_0xc073("0x1c")]=0,this[_0xc073("0x6c")]=this[_0xc073("0x6d")][_0xc073("0x17")],this[_0xc073("0x6c")][_0xc073("0x1a")][_0xc073("0x1")](this),this[_0xc073("0x6c")].start[_0xc073("0x1")](this);const s=new n.Loop(o);s.update(x=>(this[_0xc073("0x52")][_0xc073("0x1c")]=x,this[_0xc073("0x6c")][_0xc073("0x1c")][_0xc073("0x1")](this),!0===A?(this.scene[_0xc073("0x1b")][_0xc073("0x1")](this),void(A=!1)):null!==a?(this[_0xc073("0x6c")][_0xc073("0x18")][_0xc073("0x1")](this),this[_0xc073("0x6c")]=this[_0xc073("0x6d")][a],this[_0xc073("0x6c")][_0xc073("0x1a")][_0xc073("0x1")](this),this[_0xc073("0x6c")].start.call(this),void(a=null)):void 0)),s[_0xc073("0x19")](x=>{this[_0xc073("0x52")].render=x,this[_0xc073("0x6c")][_0xc073("0x19")][_0xc073("0x1")](this)}),Object(i[_0xc073("0x6e")])(c,x=>{x[_0xc073("0x43")](x=>{typeof this[_0xc073("0xa")][x[_0xc073("0x6f")]+"s"]===_0xc073("0x70")&&(this[_0xc073("0xa")][x.type+"s"]={}),typeof this[_0xc073("0xa")][x.type+"s"][x.scope]===_0xc073("0x70")&&(this[_0xc073("0xa")][x[_0xc073("0x6f")]+"s"][x[_0xc073("0x71")]]={}),this[_0xc073("0xa")][x.type+"s"][x[_0xc073("0x71")]][x.name]=x.content}),this[_0xc073("0x2c")]=!1}),this.preloading=!0}[_0xc073("0x1")](this,x),!0===_&&(window[_0xc073("0x68")]=this)}},function(x,c,t){"use strict";function e(x,c,t,e){const n=document[_0xc073("0x73")](_0xc073("0x74")),i=n[_0xc073("0x75")](x);n.setAttribute("id",c),n[_0xc073("0x7d")]("height",e),n[_0xc073("0x7d")]("width",t),this.context=i,this.element=n,this[_0xc073("0x66")]=function(){this[_0xc073("0x6b")].style.imageRendering=_0xc073("0x76"),this[_0xc073("0x6b")][_0xc073("0x77")].imageRendering=_0xc073("0x78"),this[_0xc073("0x6b")][_0xc073("0x77")][_0xc073("0x79")]=_0xc073("0x7a"),this[_0xc073("0x6b")][_0xc073("0x77")][_0xc073("0x79")]=_0xc073("0x7b"),this.context[_0xc073("0x7c")]=!1}}t.r(c),t.d(c,_0xc073("0x67"),function(){return e})},function(x,c,t){"use strict";function e(x){const c=1e3/x;let t=0,e=!1,n=null,i=null;this.render=function(x){const c=Date[_0xc073("0x7e")]();!1!==e&&x(c-n),requestAnimationFrame(this.render[_0xc073("0x3f")](this,x)),e=!0,n=c},this[_0xc073("0x1c")]=function(x){const e=Date.now();for(null!==i&&(t+=e-i);t>=c;)t-=c,x(c);setTimeout(this.update[_0xc073("0x3f")](this,x),c),i=e}}t.r(c),t.d(c,_0xc073("0x5d"),function(){return e})},function(x,c,t){"use strict";function e(x,c){let t=[];x[_0xc073("0x43")](function(x){const c=new Promise(function(c,t){if(x.type===_0xc073("0x7f")&&(x[_0xc073("0x80")]=x.source,c(x)),"image"===x[_0xc073("0x6f")]){const t=new Image;t[_0xc073("0x81")]=x.source,t[_0xc073("0x82")]=function(){x.content=t,c(x)}}else if(x[_0xc073("0x6f")]===_0xc073("0x83")){const t=new Audio(x[_0xc073("0x84")]);t[_0xc073("0x85")]=function(){x.content=t,c(x)}}});t.push(c)}),Promise[_0xc073("0x86")](t)[_0xc073("0x87")](c)}t.r(c),t.d(c,"preload",function(){return e})}]);