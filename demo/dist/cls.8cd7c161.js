function e(e,i,n,t){Object.defineProperty(e,i,{get:n,set:t,enumerable:!0,configurable:!0})}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=i.parcelRequire50fb;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,i.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,i){t[e]=i},i.parcelRequire50fb=r),r.register("86Wyx",(function(e,i){!function(n,t){var r="function",o="undefined",a="object",s="string",u="model",c="name",l="type",f="vendor",p="version",d="architecture",b="console",w="mobile",v="tablet",m="smarttv",h="wearable",g="embedded",y="Amazon",x="Apple",k="ASUS",E="BlackBerry",O="Firefox",T="Google",S="Huawei",N="LG",j="Microsoft",A="Motorola",C="Opera",R="Samsung",P="Sony",L="Xiaomi",M="Zebra",_="Facebook",z=function(e){for(var i={},n=0;n<e.length;n++)i[e[n].toUpperCase()]=e[n];return i},q=function(e,i){return typeof e===s&&-1!==U(i).indexOf(U(e))},U=function(e){return e.toLowerCase()},D=function(e,i){if(typeof e===s)return e=e.replace(/^\s\s*/,"").replace(/\s\s*$/,""),typeof i===o?e:e.substring(0,255)},B=function(e,i){for(var n,o,s,u,c,l,f=0;f<i.length&&!c;){var p=i[f],d=i[f+1];for(n=o=0;n<p.length&&!c;)if(c=p[n++].exec(e))for(s=0;s<d.length;s++)l=c[++o],typeof(u=d[s])===a&&u.length>0?2===u.length?typeof u[1]==r?this[u[0]]=u[1].call(this,l):this[u[0]]=u[1]:3===u.length?typeof u[1]!==r||u[1].exec&&u[1].test?this[u[0]]=l?l.replace(u[1],u[2]):t:this[u[0]]=l?u[1].call(this,l,u[2]):t:4===u.length&&(this[u[0]]=l?u[3].call(this,l.replace(u[1],u[2])):t):this[u]=l||t;f+=2}},F=function(e,i){for(var n in i)if(typeof i[n]===a&&i[n].length>0){for(var r=0;r<i[n].length;r++)if(q(i[n][r],e))return"?"===n?t:n}else if(q(i[n],e))return"?"===n?t:n;return e},G={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},I={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[p,[c,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[p,[c,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[c,p],[/opios[\/ ]+([\w\.]+)/i],[p,[c,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[p,[c,C]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[c,p],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[p,[c,"UCBrowser"]],[/\bqbcore\/([\w\.]+)/i],[p,[c,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[p,[c,"WeChat"]],[/konqueror\/([\w\.]+)/i],[p,[c,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[p,[c,"IE"]],[/yabrowser\/([\w\.]+)/i],[p,[c,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[c,/(.+)/,"$1 Secure Browser"],p],[/\bfocus\/([\w\.]+)/i],[p,[c,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[p,[c,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[p,[c,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[p,[c,"Dolphin"]],[/coast\/([\w\.]+)/i],[p,[c,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[p,[c,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[p,[c,O]],[/\bqihu|(qi?ho?o?|360)browser/i],[[c,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[c,/(.+)/,"$1 Browser"],p],[/(comodo_dragon)\/([\w\.]+)/i],[[c,/_/g," "],p],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[c,p],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[c],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[c,_],p],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[c,p],[/\bgsa\/([\w\.]+) .*safari\//i],[p,[c,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[p,[c,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[c,"Chrome WebView"],p],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[p,[c,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[c,p],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[p,[c,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[p,c],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[c,[p,F,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[c,p],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[c,"Netscape"],p],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[p,[c,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[c,p]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[d,"amd64"]],[/(ia32(?=;))/i],[[d,U]],[/((?:i[346]|x)86)[;\)]/i],[[d,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[d,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[d,"armhf"]],[/windows (ce|mobile); ppc;/i],[[d,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[d,/ower/,"",U]],[/(sun4\w)[;\)]/i],[[d,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[d,U]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[u,[f,R],[l,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[u,[f,R],[l,w]],[/\((ip(?:hone|od)[\w ]*);/i],[u,[f,x],[l,w]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[u,[f,x],[l,v]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[u,[f,S],[l,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[u,[f,S],[l,w]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[u,/_/g," "],[f,L],[l,w]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[u,/_/g," "],[f,L],[l,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[u,[f,"OPPO"],[l,w]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[u,[f,"Vivo"],[l,w]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[u,[f,"Realme"],[l,w]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[u,[f,A],[l,w]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[u,[f,A],[l,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[u,[f,N],[l,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[u,[f,N],[l,w]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[u,[f,"Lenovo"],[l,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[u,/_/g," "],[f,"Nokia"],[l,w]],[/(pixel c)\b/i],[u,[f,T],[l,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[u,[f,T],[l,w]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[u,[f,P],[l,w]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[u,"Xperia Tablet"],[f,P],[l,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[u,[f,"OnePlus"],[l,w]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[u,[f,y],[l,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[u,/(.+)/g,"Fire Phone $1"],[f,y],[l,w]],[/(playbook);[-\w\),; ]+(rim)/i],[u,f,[l,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[u,[f,E],[l,w]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[u,[f,k],[l,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[u,[f,k],[l,w]],[/(nexus 9)/i],[u,[f,"HTC"],[l,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[f,[u,/_/g," "],[l,w]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[u,[f,"Acer"],[l,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[u,[f,"Meizu"],[l,w]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[u,[f,"Sharp"],[l,w]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[f,u,[l,w]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[f,u,[l,v]],[/(surface duo)/i],[u,[f,j],[l,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[u,[f,"Fairphone"],[l,w]],[/(u304aa)/i],[u,[f,"AT&T"],[l,w]],[/\bsie-(\w*)/i],[u,[f,"Siemens"],[l,w]],[/\b(rct\w+) b/i],[u,[f,"RCA"],[l,v]],[/\b(venue[\d ]{2,7}) b/i],[u,[f,"Dell"],[l,v]],[/\b(q(?:mv|ta)\w+) b/i],[u,[f,"Verizon"],[l,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[u,[f,"Barnes & Noble"],[l,v]],[/\b(tm\d{3}\w+) b/i],[u,[f,"NuVision"],[l,v]],[/\b(k88) b/i],[u,[f,"ZTE"],[l,v]],[/\b(nx\d{3}j) b/i],[u,[f,"ZTE"],[l,w]],[/\b(gen\d{3}) b.+49h/i],[u,[f,"Swiss"],[l,w]],[/\b(zur\d{3}) b/i],[u,[f,"Swiss"],[l,v]],[/\b((zeki)?tb.*\b) b/i],[u,[f,"Zeki"],[l,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[f,"Dragon Touch"],u,[l,v]],[/\b(ns-?\w{0,9}) b/i],[u,[f,"Insignia"],[l,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[u,[f,"NextBook"],[l,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[f,"Voice"],u,[l,w]],[/\b(lvtel\-)?(v1[12]) b/i],[[f,"LvTel"],u,[l,w]],[/\b(ph-1) /i],[u,[f,"Essential"],[l,w]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[u,[f,"Envizen"],[l,v]],[/\b(trio[-\w\. ]+) b/i],[u,[f,"MachSpeed"],[l,v]],[/\btu_(1491) b/i],[u,[f,"Rotor"],[l,v]],[/(shield[\w ]+) b/i],[u,[f,"Nvidia"],[l,v]],[/(sprint) (\w+)/i],[f,u,[l,w]],[/(kin\.[onetw]{3})/i],[[u,/\./g," "],[f,j],[l,w]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[u,[f,M],[l,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[u,[f,M],[l,w]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[f,u,[l,b]],[/droid.+; (shield) bui/i],[u,[f,"Nvidia"],[l,b]],[/(playstation [345portablevi]+)/i],[u,[f,P],[l,b]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[u,[f,j],[l,b]],[/smart-tv.+(samsung)/i],[f,[l,m]],[/hbbtv.+maple;(\d+)/i],[[u,/^/,"SmartTV"],[f,R],[l,m]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[f,N],[l,m]],[/(apple) ?tv/i],[f,[u,"Apple TV"],[l,m]],[/crkey/i],[[u,"Chromecast"],[f,T],[l,m]],[/droid.+aft(\w)( bui|\))/i],[u,[f,y],[l,m]],[/\(dtv[\);].+(aquos)/i],[u,[f,"Sharp"],[l,m]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[f,D],[u,D],[l,m]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[l,m]],[/((pebble))app/i],[f,u,[l,h]],[/droid.+; (glass) \d/i],[u,[f,T],[l,h]],[/droid.+; (wt63?0{2,3})\)/i],[u,[f,M],[l,h]],[/(quest( 2)?)/i],[u,[f,_],[l,h]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[f,[l,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[u,[l,w]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[u,[l,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[l,v]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[l,w]],[/(android[-\w\. ]{0,9});.+buil/i],[u,[f,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[p,[c,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[p,[c,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[c,p],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[p,c]],os:[[/microsoft (windows) (vista|xp)/i],[c,p],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[c,[p,F,G]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[c,"Windows"],[p,F,G]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[p,/_/g,"."],[c,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[c,"Mac OS"],[p,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[p,c],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[c,p],[/\(bb(10);/i],[p,[c,E]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[p,[c,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[p,[c,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[p,[c,"webOS"]],[/crkey\/([\d\.]+)/i],[p,[c,"Chromecast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[c,"Chromium OS"],p],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[c,p],[/(sunos) ?([\w\.\d]*)/i],[[c,"Solaris"],p],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[c,p]]},W=function(e,i){if(typeof e===a&&(i=e,e=t),!(this instanceof W))return new W(e,i).getResult();var r=e||(typeof n!==o&&n.navigator&&n.navigator.userAgent?n.navigator.userAgent:""),u=i?function(e,i){var n={};for(var t in e)i[t]&&i[t].length%2==0?n[t]=i[t].concat(e[t]):n[t]=e[t];return n}(I,i):I;return this.getBrowser=function(){var e,i={};return i.name=t,i.version=t,B.call(i,r,u.browser),i.major=typeof(e=i.version)===s?e.replace(/[^\d\.]/g,"").split(".")[0]:t,i},this.getCPU=function(){var e={};return e.architecture=t,B.call(e,r,u.cpu),e},this.getDevice=function(){var e={};return e.vendor=t,e.model=t,e.type=t,B.call(e,r,u.device),e},this.getEngine=function(){var e={};return e.name=t,e.version=t,B.call(e,r,u.engine),e},this.getOS=function(){var e={};return e.name=t,e.version=t,B.call(e,r,u.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=typeof e===s&&e.length>255?D(e,255):e,this},this.setUA(r),this};W.VERSION="1.0.2",W.BROWSER=z([c,p,"major"]),W.CPU=z([d]),W.DEVICE=z([u,f,l,b,w,m,v,h,g]),W.ENGINE=W.OS=z([c,p]),typeof i!==o?(e.exports&&(i=e.exports=W),i.UAParser=W):typeof define===r&&define.amd?define((function(){return W})):typeof n!==o&&(n.UAParser=W);var $=typeof n!==o&&(n.jQuery||n.Zepto);if($&&!$.ua){var V=new W;$.ua=V.getResult(),$.ua.get=function(){return V.getUA()},$.ua.set=function(e){V.setUA(e);var i=V.getResult();for(var n in i)$.ua[n]=i[n]}}}("object"==typeof window?window:this)}));var o={};e(o,"initializeAPI",(()=>j),(e=>j=e));var a={};e(a,"initializeTransports",(()=>l),(e=>l=e));var s,u,c=function(e,i,n){if(n||2===arguments.length)for(var t,r=0,o=i.length;r<o;r++)!t&&r in i||(t||(t=Array.prototype.slice.call(i,0,r)),t[r]=i[r]);return e.concat(t||Array.prototype.slice.call(i))};function l(e){var i=c([],e.transports,!0);return{add:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];i.push.apply(i,e)},execute:function(e){i.forEach((function(i){return i(e)}))},value:i}}!function(e){e.EXCEPTION="exception",e.LOG="log",e.MEASUREMENT="measurement",e.TRACE="trace"}(s||(s={}));var f=((u={})[s.EXCEPTION]="exceptions",u[s.LOG]="logs",u[s.MEASUREMENT]="measurements",u[s.TRACE]="traces",u);function p(){return(new Date).toISOString()}var d="undefined"==typeof window?i:window;function b(e,i){return typeof e===i}function w(e,i){return Object.prototype.toString.call(e)==="'[object ".concat(i,"]'")}function v(e,i){try{return e instanceof i}catch(e){return!1}}var m,h=function(e){return b(e,"undefined")},g=function(e){return!function(e){return b(e,"null")}(e)&&b(e,"object")},y=function(e){return b(e,"function")};!function(e){e.TRACE="trace",e.DEBUG="debug",e.INFO="info",e.LOG="log",e.WARN="warn",e.ERROR="error"}(m||(m={}));var x=m.LOG,k=[m.TRACE,m.DEBUG,m.INFO,m.LOG,m.WARN,m.ERROR],E=k.reduce((function(e,i){return e[i]=console[i],e}),{});var O={};e(O,"initializeMeasurements",(()=>S),(e=>S=e));var T=function(){return T=Object.assign||function(e){for(var i,n=1,t=arguments.length;n<t;n++)for(var r in i=arguments[n])Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);return e},T.apply(this,arguments)};function S(e,i){return{pushMeasurement:function(n){e.execute({type:s.MEASUREMENT,payload:T(T({},n),{timestamp:p()}),meta:i.value})}}}var N=function(){return N=Object.assign||function(e){for(var i,n=1,t=arguments.length;n<t;n++)for(var r in i=arguments[n])Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);return e},N.apply(this,arguments)};function j(e,i){return N(N(N(N({},function(e,i){return{pushException:function(n,t,r){void 0===t&&(t="Error"),void 0===r&&(r=[]);try{var o={meta:i.value,payload:{type:t,value:n,timestamp:p()},type:s.EXCEPTION};r.length>0&&(o.payload.stacktrace={frames:r}),e.execute(o)}catch(e){}}}}(e,i)),function(e,i){return{callOriginalConsoleMethod:function(e){for(var i=[],n=1;n<arguments.length;n++)i[n-1]=arguments[n];E[e].apply(console,i)},pushLog:function(n,t,r){void 0===t&&(t=x),void 0===r&&(r={});try{e.execute({type:s.LOG,payload:{message:n.map((function(e){try{return String(e)}catch(e){return""}})).join(" "),level:t,context:r,timestamp:p()},meta:i.value})}catch(e){}}}}(e,i)),O.initializeMeasurements(e,i)),function(e,i){return{pushSpan:function(n){e.execute({type:s.TRACE,payload:n,meta:i.value})}}}(e,i))}var A={};e(A,"initializeConfig",(()=>R),(e=>R=e));var C=function(){return C=Object.assign||function(e){for(var i,n=1,t=arguments.length;n<t;n++)for(var r in i=arguments[n])Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);return e},C.apply(this,arguments)};function R(e){return C({globalObjectKey:"grafanaJavaScriptAgent",metas:[],preventGlobalExposure:!1,transports:[]},e)}var P={};var L={};e(L,"default",(()=>_),(e=>_=e));var M=function(e,i,n){if(n||2===arguments.length)for(var t,r=0,o=i.length;r<o;r++)!t&&r in i||(t||(t=Array.prototype.slice.call(i,0,r)),t[r]=i[r]);return e.concat(t||Array.prototype.slice.call(i))};function _(e){var i=(void 0===e?{}:e).disabledLevels,n=[m.DEBUG,m.LOG];return function(){k.filter((function(e){return!(null!=i?i:n).includes(e)})).forEach((function(e){console[e]=function(){for(var i,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];try{P.api.pushLog(n,e)}catch(e){}finally{(i=P.api).callOriginalConsoleMethod.apply(i,M([e],n,!1))}}}))}}var z=/^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,q=/\((\S*)::(\d+)::(\d+)\)/,U="address at ".length,D=/^\s*at (?:((?:\[object object])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,B=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,F=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,G=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,I=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i,W=/Minified React error #\d+;/i,$=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;function V(e,i){var n=null==e?void 0:e.includes("safari-extension"),t=!n&&(null==e?void 0:e.includes("safari-web-extension"));return n||t?[(null==e?void 0:e.includes("@"))?e.split("@")[0]:e,n?"".concat("safari-extension",":").concat(i):"".concat("safari-web-extension",":").concat(i)]:[e,i]}function H(e,i,n,t){var r={filename:e||document.location.href,function:i||"?"};return void 0!==n&&(r.lineno=n),void 0!==t&&(r.colno=t),r}function X(e){var i=[];e.stacktrace?i=e.stacktrace.split("\n").filter((function(e,i){return i%2==0})):e.stack&&(i=e.stack.split("\n"));var n=i.reduce((function(i,n,t){var r,o,a,s,u,c,l,f;if(a=z.exec(n)){if(s=a[1],u=a[2],c=a[3],l=a[4],null==u?void 0:u.startsWith("eval"))(p=q.exec(u))&&(u=p[1],c=p[2],l=p[3]);s=(r=V(s,u=(null==u?void 0:u.startsWith("address at "))?u.substring(U):u))[0],u=r[1]}else if(a=D.exec(n))s=a[1],u=a[2],c=a[3],l=a[4];else if(a=B.exec(n)){var p;if(s=a[1],u=a[3],c=a[4],l=a[5],u&&u.includes(" > eval"))(p=F.exec(u))&&(s=s||"eval",u=p[1],c=p[2]);else 0===t&&!l&&(b(f=e.columnNumber,"number")&&!isNaN(f)||b(f,"bigint"))&&(l=String(e.columnNumber+1));s=(o=V(s,u))[0],u=o[1]}else(a=G.exec(n))?(u=a[2],s=a[3],c=a[1]):(a=I.exec(n))&&(u=a[6],s=a[3]||a[4],c=a[1],l=a[2]);return(u||s)&&i.push(H(u,s,c?Number(c):void 0,l?Number(l):void 0)),i}),[]);return e.framesToPop?n.slice(e.framesToPop):W.test(e.message)?n.slice(1):n}function J(e){var i,n,t,r,o=[];if(function(e){return w(e,"ErrorEvent")}(e)&&e.error)i=e.error.message,n=e.error.name,o=X(e.error);else if((t=function(e){return w(e,"DOMError")}(e))||function(e){return w(e,"DOMException")}(e)){var a=e.name,s=e.message;n=null!=a?a:t?"DOMError":"DOMException",i=s?"".concat(n,": ").concat(s):n}else!function(e){return!h(Error)&&v(e,Error)}(e)?(g(e)||(r=function(e){return!h(Event)&&v(e,Event)}(e)))&&(n=r?e.constructor.name:void 0,i="".concat("Non-Error exception captured with keys:"," ").concat(Object.keys(e))):(i=e.message,o=X(e));return[i,n,o]}function Z(){window.onerror=function(e,i,n,t,r){var o,a,s,u,c=[],l=function(e){return b(e,"string")}(e),f=H(i,"?",n,t);r||!l?(s=(o=J(null!=r?r:e))[0],u=o[1],0===(c=o[2]).length&&(c=[f])):l&&(a=function(e){var i,n,t=e.match($),r=null!==(i=null==t?void 0:t[1])&&void 0!==i?i:"Error";return[null!==(n=null==t?void 0:t[2])&&void 0!==n?n:e,r]}(e),s=a[0],u=a[1],c=[f]),s&&P.api.pushException(s,u,c)}}function K(){window.addEventListener("unhandledrejection",(function(e){var i,n,t,r,o,a=e;a.reason?a=e.reason:(null===(n=e.detail)||void 0===n?void 0:n.reason)&&(a=null===(t=e.detail)||void 0===t?void 0:t.reason),!function(e){return!g(e)&&!y(e)}(a)?(r=(i=J(a))[0],o=i[1]):(r="".concat("Non-Error promise rejection captured with value:"," ").concat(String(a)),o="UnhandledRejection"),r&&P.api.pushException(r,o)}))}var Q=function(){Z(),K()},Y=function(){P.api.pushLog(["A simple log from the tracing instrumentation package"])},ee={};e(ee,"default",(()=>Ne),(e=>Ne=e));var ie,ne,te,re,oe=function(e,i){return{name:e,value:void 0===i?-1:i,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},ae=function(e,i){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(i)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},se=function(e,i){var n=function n(t){"pagehide"!==t.type&&"hidden"!==document.visibilityState||(e(t),i&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},ue=function(e){addEventListener("pageshow",(function(i){i.persisted&&e(i)}),!0)},ce=function(e,i,n){var t;return function(r){i.value>=0&&(r||n)&&(i.delta=i.value-(t||0),(i.delta||void 0===t)&&(t=i.value,e(i)))}},le=-1,fe=function(){return"hidden"===document.visibilityState?0:1/0},pe=function(){se((function(e){var i=e.timeStamp;le=i}),!0)},de=function(){return le<0&&(le=fe(),pe(),ue((function(){setTimeout((function(){le=fe(),pe()}),0)}))),{get firstHiddenTime(){return le}}},be=function(e,i){var n,t=de(),r=oe("FCP"),o=function(e){"first-contentful-paint"===e.name&&(s&&s.disconnect(),e.startTime<t.firstHiddenTime&&(r.value=e.startTime,r.entries.push(e),n(!0)))},a=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],s=a?null:ae("paint",o);(a||s)&&(n=ce(e,r,i),a&&o(a),ue((function(t){r=oe("FCP"),n=ce(e,r,i),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-t.timeStamp,n(!0)}))}))})))},we=!1,ve=-1,me={passive:!0,capture:!0},he=new Date,ge=function(e,i){ie||(ie=i,ne=e,te=new Date,ke(removeEventListener),ye())},ye=function(){if(ne>=0&&ne<te-he){var e={entryType:"first-input",name:ie.type,target:ie.target,cancelable:ie.cancelable,startTime:ie.timeStamp,processingStart:ie.timeStamp+ne};re.forEach((function(i){i(e)})),re=[]}},xe=function(e){if(e.cancelable){var i=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?(n=i,t=e,r=function(){ge(n,t),a()},o=function(){a()},a=function(){removeEventListener("pointerup",r,me),removeEventListener("pointercancel",o,me)},addEventListener("pointerup",r,me),addEventListener("pointercancel",o,me)):ge(i,e)}var n,t,r,o,a},ke=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(i){return e(i,xe,me)}))},Ee={},Oe=function(e,i,n,t){return new(n||(n=Promise))((function(r,o){function a(e){try{u(t.next(e))}catch(e){o(e)}}function s(e){try{u(t.throw(e))}catch(e){o(e)}}function u(e){var i;e.done?r(e.value):(i=e.value,i instanceof n?i:new n((function(e){e(i)}))).then(a,s)}u((t=t.apply(e,i||[])).next())}))},Te=function(e,i){var n,t,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,t&&(r=2&o[0]?t.return:o[0]?t.throw||((r=t.return)&&r.call(t),0):t.next)&&!(r=r.call(t,o[1])).done)return r;switch(t=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,t=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=i.call(e,a)}catch(e){o=[6,e],t=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},Se={cls:function(e,i){we||(be((function(e){ve=e.value})),we=!0);var n,t=function(i){ve>-1&&e(i)},r=oe("CLS",0),o=0,a=[],s=function(e){if(!e.hadRecentInput){var i=a[0],t=a[a.length-1];o&&e.startTime-t.startTime<1e3&&e.startTime-i.startTime<5e3?(o+=e.value,a.push(e)):(o=e.value,a=[e]),o>r.value&&(r.value=o,r.entries=a,n())}},u=ae("layout-shift",s);u&&(n=ce(t,r,i),se((function(){u.takeRecords().map(s),n(!0)})),ue((function(){o=0,ve=-1,r=oe("CLS",0),n=ce(t,r,i)})))},fcp:be,fid:function(e,i){var n,t=de(),r=oe("FID"),o=function(e){e.startTime<t.firstHiddenTime&&(r.value=e.processingStart-e.startTime,r.entries.push(e),n(!0))},a=ae("first-input",o);n=ce(e,r,i),a&&se((function(){a.takeRecords().map(o),a.disconnect()}),!0),a&&ue((function(){var t;r=oe("FID"),n=ce(e,r,i),re=[],ne=-1,ie=null,ke(addEventListener),t=o,re.push(t),ye()}))},lcp:function(e,i){var n,t=de(),r=oe("LCP"),o=function(e){var i=e.startTime;i<t.firstHiddenTime&&(r.value=i,r.entries.push(e),n())},a=ae("largest-contentful-paint",o);if(a){n=ce(e,r,i);var s=function(){Ee[r.id]||(a.takeRecords().map(o),a.disconnect(),Ee[r.id]=!0,n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,s,{once:!0,capture:!0})})),se(s,!0),ue((function(t){r=oe("LCP"),n=ce(e,r,i),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-t.timeStamp,Ee[r.id]=!0,n(!0)}))}))}))}},ttfb:function(e){var i,n=oe("TTFB");i=function(){try{var i=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,i={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(i[n]=Math.max(e[n]-e.navigationStart,0));return i}();if(n.value=n.delta=i.responseStart,n.value<0||n.value>performance.now())return;n.entries=[i],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(i,0):addEventListener("load",(function(){return setTimeout(i,0)}))}},Ne=function(){return Oe(void 0,void 0,void 0,(function(){return Te(this,(function(e){return Object.entries(Se).forEach((function(e){var i=e[0];(0,e[1])((function(e){var n;P.api.pushMeasurement({type:"web-vitals",values:(n={},n[i]=e.value,n)})}))})),[2]}))}))},je=r("86Wyx"),Ae=function(){var e=new je.UAParser,i=e.getBrowser(),n=i.name,t=i.version,r=e.getOS(),o=r.name,a=r.version,s=navigator.userAgent.includes("Mobi"),u="unknown";return{browser:function(){return{name:null!=n?n:u,version:null!=t?t:u,os:"".concat(null!=o?o:u," ").concat(null!=a?a:u),mobile:s}}}},Ce=function(){return{page:function(){return{href:location.href}}}},Re={};e(Re,"default",(()=>qe),(e=>qe=e));var Pe=function(){return Pe=Object.assign||function(e){for(var i,n=1,t=arguments.length;n<t;n++)for(var r in i=arguments[n])Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);return e},Pe.apply(this,arguments)},Le=function(e,i,n,t){return new(n||(n=Promise))((function(r,o){function a(e){try{u(t.next(e))}catch(e){o(e)}}function s(e){try{u(t.throw(e))}catch(e){o(e)}}function u(e){var i;e.done?r(e.value):(i=e.value,i instanceof n?i:new n((function(e){e(i)}))).then(a,s)}u((t=t.apply(e,i||[])).next())}))},Me=function(e,i){var n,t,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,t&&(r=2&o[0]?t.return:o[0]?t.throw||((r=t.return)&&r.call(t),0):t.next)&&!(r=r.call(t,o[1])).done)return r;switch(t=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,t=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=i.call(e,a)}catch(e){o=[6,e],t=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},_e=function(e,i){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)i.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]])}return n},ze="[Grafana JavaScript Agent] ".concat("Failed sending payload to the receiver");function qe(e){var i=this;return function(n){return Le(i,void 0,void 0,(function(){var i,t,r,o,a,s,u;return Me(this,(function(c){switch(c.label){case 0:return c.trys.push([0,2,,3]),i=JSON.stringify(function(e){var i;return(i={})[f[e.type]]=[e.payload],i.meta=e.meta,i}(n)),t=e.url,r=e.debug,o=e.requestOptions,s=(a=null!=o?o:{}).headers,u=_e(a,["headers"]),[4,fetch(t,Pe({method:"POST",headers:Pe({"Content-Type":"application/json"},null!=s?s:{}),body:i,keepalive:!0},null!=u?u:{})).catch((function(){r&&P.api.callOriginalConsoleMethod(m.DEBUG,ze,JSON.parse(i))}))];case 1:return c.sent(),[3,3];case 2:return c.sent(),[3,3];case 3:return[2]}}))}))}}var Ue,De,Be,Fe;(Ue={instrumentations:[L.default(),Q,Y,ee.default],metas:[{app:{name:"my-app",version:"1.0.0",release:"foo123"}},Ae,Ce],transports:[L.default(),Re.default({url:"http://localhost:8080/collect",debug:!0,requestOptions:{headers:{"x-api-key":"my-api-key"}}})]},P.config=A.initializeConfig(Ue),P.metas=(De=P.config,Be=new Map,(Fe=function(e,i){Be.has(e)||Be.set(e,i)})("sdk",(function(){return{name:"@grafana/javascript-agent-core",version:"0.0.1"}})),De.metas.forEach((function(e){var i=y(e)?e():e;Object.entries(i).forEach((function(e){var i=e[0],n=e[1];Fe(i,n)}))})),{add:Fe,map:Be,remove:function(e){Be.delete(e)},get value(){return Object.fromEntries(Array.from(Be.entries()).map((function(e){var i=e[0],n=e[1];return[i,y(n)?n():n]})))}}),P.transports=a.initializeTransports(P.config),P.api=o.initializeAPI(P.transports,P.metas),P.config.preventGlobalExposure||Object.defineProperty(d,P.config.globalObjectKey,{value:P}),function(e){e.instrumentations.forEach((function(e){e()}))}(P.config),P).api.pushLog(["Manual event from initialized agent"]);
//# sourceMappingURL=cls.8cd7c161.js.map
