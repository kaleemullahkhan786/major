const a0_0x5d8d19=a0_0x1ecb;function a0_0x3bec(){const _0x133835=['Exiting...','Roulette:\x20+','Stars:\x20','response','headers','holdCoins','userInfo','resetDurovChoices','durovPayloadUrl','streak','summary','Unable\x20to\x20authenticate\x20account\x20','\x0a1.\x20TYPE\x201\x20FOR\x20ADD\x20DUROV\x20CHOICE','Error\x20resetting\x20Durov\x20choices:\x20','colors','Hold\x20Coins:\x20Already\x20Done!','4500272GLwIMv','Streak:\x20','handleDurovTask','7364007Etxqcd','performCheckIn','isArray','push','rating','stringify','correct','/user-visits/visit/','\x0aTotal\x20balance\x20for\x20all\x20accounts:\x20','setZone','18anAVjA','createInterface','tasks','2.\x20TYPE\x202\x20FOR\x20RESET\x20DUROV\x20CHOICES','/roulette/','date','70xuWFxF','post','\x20coins\x20held','1490IaolHI','Total\x20coins\x20held\x20in\x201\x20minute:\x20','main','spinRoulette','processAccount','luxon','catch','Invalid\x20durov.json\x20format.\x20Resetting\x20to\x20empty\x20array.','./durov.json','stdout','2493249SOTEjo','Durov\x20puzzle\x20Already\x20Done!','472624tVODwI','Invalid\x20choice.\x20Please\x20try\x20again.','utf8','https://major.glados.app/api','Check-in:\x20Success\x20(Day\x20','Error\x20reading\x20Durov\x20payload:\x20','completed','filter','Invalid\x20input!\x20Please\x20enter\x20exactly\x204\x20numbers\x20separated\x20by\x20commas.','bold','exit','11274nrdUUD','get','4.\x20TYPE\x204\x20TO\x20EXIT','split','cyan','some','Roulette:\x20Already\x20Done!','totalBalance','length','7338NdNpck','data','find','Error\x20during\x20holding\x20coins:\x20','\x20days','Bearer\x20','Hold\x20Coins:\x20Game\x20already\x20completed\x20for\x20this\x20account','rating_award','N/A','/bonuses/coins/','yellow','baseUrl','startTasks','swipeCoin','Durov\x20choices\x20added\x20successfully!','error','visit','red','\x20|\x20','All\x20Durov\x20choices\x20reset\x20successfully','durov','map','success','3.\x20TYPE\x203\x20FOR\x20START','readFile','now','trim','user','/users/','Swipe\x20Coin:\x20Failed\x20to\x20initiate','apiRequest','writeFile','warning','question','roulette','406WfBtMl','Swipe\x20Coin:\x20+','\x20stars','\x20(comma-separated,\x20e.g.,\x207,4,12,5):','Enter\x20Durov\x20puzzle\x20choices\x20for\x20','durov.json\x20not\x20found\x20or\x20unreadable.\x20Initializing\x20a\x20new\x20one.','promises','endpoints','getDurovPayload','1149472RWcLWd','message','application/json,\x20text/plain,\x20*/*','blue','is_increased','log','data.txt','Mozilla/5.0','\x20coins','/durov/','Invalid\x20input!\x20Please\x20enter\x20only\x20numeric\x20values.','access_token','info','Enter\x20your\x20choice:\x20','Error\x20in\x20API\x20request:\x20','Authorization','stdin','close'];a0_0x3bec=function(){return _0x133835;};return a0_0x3bec();}(function(_0xa83332,_0x3c4517){const _0x2ba6ec=a0_0x1ecb,_0xf6acaa=_0xa83332();while(!![]){try{const _0x383217=parseInt(_0x2ba6ec(0x1da))/0x1+-parseInt(_0x2ba6ec(0x18d))/0x2*(-parseInt(_0x2ba6ec(0x1e5))/0x3)+-parseInt(_0x2ba6ec(0x1b8))/0x4+parseInt(_0x2ba6ec(0x1ce))/0x5*(-parseInt(_0x2ba6ec(0x16a))/0x6)+-parseInt(_0x2ba6ec(0x1bb))/0x7+parseInt(_0x2ba6ec(0x196))/0x8*(parseInt(_0x2ba6ec(0x1c5))/0x9)+parseInt(_0x2ba6ec(0x1cb))/0xa*(parseInt(_0x2ba6ec(0x1d8))/0xb);if(_0x383217===_0x3c4517)break;else _0xf6acaa['push'](_0xf6acaa['shift']());}catch(_0x322960){_0xf6acaa['push'](_0xf6acaa['shift']());}}}(a0_0x3bec,0x8aa94));const fs=require('fs')[a0_0x5d8d19(0x193)],axios=require('axios'),colors=require(a0_0x5d8d19(0x1b6)),{DateTime}=require(a0_0x5d8d19(0x1d3)),readline=require('readline'),banner='\x1b[33m\x0a███╗\x20\x20\x20███╗\x20█████╗\x20\x20\x20\x20\x20\x20██╗\x20██████╗\x20██████╗\x0a████╗\x20████║██╔══██╗\x20\x20\x20\x20\x20██║██╔═══██╗██╔══██╗\x0a██╔████╔██║███████║\x20\x20\x20\x20\x20██║██║\x20\x20\x20██║██████╔╝\x0a██║╚██╔╝██║██╔══██║██\x20\x20\x20██║██║\x20\x20\x20██║██╔══██╗\x0a██║\x20╚═╝\x20██║██║\x20\x20██║╚█████╔╝╚██████╔╝██║\x20\x20██║\x0a╚═╝\x20\x20\x20\x20\x20╚═╝╚═╝\x20\x20╚═╝\x20╚════╝\x20\x20╚═════╝\x20╚═╝\x20\x20╚═╝\x0a\x0a\x20\x20\x20\x20Auto\x20Claim\x20Bot\x20For\x20Major\x20-\x20@kaleemullahkhan\x0a\x20\x20\x20\x20Author\x20\x20:\x20Airdop\x20script\x20\x20:\x20Thanks\x20to\x20@kaleemullahkhan\x0a\x20\x20\x20\x20Github\x20\x20:\x20https://github.com/kaleemullahkhan786\x0a\x1b[0m';function a0_0x1ecb(_0x3799ce,_0x3bd875){const _0x3bec71=a0_0x3bec();return a0_0x1ecb=function(_0x1ecb6d,_0x1cb859){_0x1ecb6d=_0x1ecb6d-0x162;let _0x312a70=_0x3bec71[_0x1ecb6d];return _0x312a70;},a0_0x1ecb(_0x3799ce,_0x3bd875);}class Major{constructor(){const _0x3eb1a2=a0_0x5d8d19;this['baseUrl']=_0x3eb1a2(0x1dd),this[_0x3eb1a2(0x194)]={'auth':this['baseUrl']+'/auth/tg/','userInfo':this['baseUrl']+_0x3eb1a2(0x186),'streak':this[_0x3eb1a2(0x175)]+'/user-visits/streak/','visit':this['baseUrl']+_0x3eb1a2(0x1c2),'roulette':this[_0x3eb1a2(0x175)]+_0x3eb1a2(0x1c9),'holdCoins':this[_0x3eb1a2(0x175)]+_0x3eb1a2(0x173),'tasks':this[_0x3eb1a2(0x175)]+'/tasks/','swipeCoin':this[_0x3eb1a2(0x175)]+'/swipe_coin/','durov':this[_0x3eb1a2(0x175)]+_0x3eb1a2(0x19f)},this[_0x3eb1a2(0x168)]=0x0,this[_0x3eb1a2(0x1b0)]=_0x3eb1a2(0x1d6),this[_0x3eb1a2(0x1b2)]={'totalAccounts':0x0,'totalBalance':0x0};}[a0_0x5d8d19(0x1ac)](_0x4b50fa=null){const _0x1c2fca=a0_0x5d8d19,_0x4f510a={'Accept':_0x1c2fca(0x198),'Content-Type':'application/json','User-Agent':_0x1c2fca(0x19d)};return _0x4b50fa&&(_0x4f510a[_0x1c2fca(0x1a5)]=_0x1c2fca(0x16f)+_0x4b50fa),_0x4f510a;}['log'](_0x21f5bc,_0x428325='info'){const _0x5d4887=a0_0x5d8d19,_0x3882d4={'acc':colors[_0x5d4887(0x165)],'info':colors['bold'][_0x5d4887(0x199)],'success':colors[_0x5d4887(0x1e3)]['green'],'warning':colors[_0x5d4887(0x1e3)][_0x5d4887(0x174)],'error':colors[_0x5d4887(0x1e3)][_0x5d4887(0x17b)]};console[_0x5d4887(0x19b)](_0x3882d4[_0x428325](_0x21f5bc));}async[a0_0x5d8d19(0x188)](_0x3b70bf,_0x18f8da,_0x27b103=null,_0x50557b=null){const _0x4f6ce0=a0_0x5d8d19;try{const _0x1a8c68={'method':_0x3b70bf,'url':_0x18f8da,'headers':this[_0x4f6ce0(0x1ac)](_0x50557b),..._0x27b103&&{'data':_0x27b103}},_0x29e45d=await axios(_0x1a8c68);return _0x29e45d['data'];}catch(_0x48e0b5){if(_0x48e0b5[_0x4f6ce0(0x1ab)]&&_0x48e0b5[_0x4f6ce0(0x1ab)][_0x4f6ce0(0x16b)])return _0x48e0b5[_0x4f6ce0(0x1ab)]['data'];return this[_0x4f6ce0(0x19b)](_0x4f6ce0(0x1a4)+_0x48e0b5['message'],'error'),null;}}async[a0_0x5d8d19(0x195)](){const _0x3b7e9b=a0_0x5d8d19;try{let _0x12bb70;try{const _0x238085=await fs[_0x3b7e9b(0x182)](this[_0x3b7e9b(0x1b0)],_0x3b7e9b(0x1dc));_0x12bb70=JSON['parse'](_0x238085),!Array[_0x3b7e9b(0x1bd)](_0x12bb70)&&(this['log'](_0x3b7e9b(0x1d5),'warning'),_0x12bb70=[]);}catch(_0x5dd271){this[_0x3b7e9b(0x19b)](_0x3b7e9b(0x192),_0x3b7e9b(0x18a)),_0x12bb70=[];}const _0x1c1048=DateTime[_0x3b7e9b(0x183)]()[_0x3b7e9b(0x1c4)]('system')['toFormat']('dd/MM/yyyy'),_0x36e79a=_0x12bb70[_0x3b7e9b(0x16c)](_0x33d931=>_0x33d931[_0x3b7e9b(0x1ca)]===_0x1c1048);if(_0x36e79a)return _0x36e79a;const _0x4ff231=readline[_0x3b7e9b(0x1c6)]({'input':process['stdin'],'output':process[_0x3b7e9b(0x1d7)]});console[_0x3b7e9b(0x19b)](_0x3b7e9b(0x191)+_0x1c1048+_0x3b7e9b(0x190));const _0x4ee135=await new Promise(_0x15d07e=>{_0x4ff231['question']('',_0x260596=>{const _0x21a009=a0_0x1ecb;_0x4ff231[_0x21a009(0x1a7)]();const _0x3f9bb1=_0x260596[_0x21a009(0x164)](',')[_0x21a009(0x1e1)](_0x271254=>_0x271254[_0x21a009(0x184)]()!=='');if(_0x3f9bb1[_0x21a009(0x169)]!==0x4)return console[_0x21a009(0x19b)](_0x21a009(0x1e2)),_0x15d07e(null);const _0x4dcec3=_0x3f9bb1[_0x21a009(0x17f)](Number);if(_0x4dcec3[_0x21a009(0x166)](isNaN))return console[_0x21a009(0x19b)](_0x21a009(0x1a0)),_0x15d07e(null);_0x15d07e(_0x4dcec3);});});if(!_0x4ee135)return null;const _0x850d24={'date':_0x1c1048,'tasks':[{'choice_1':_0x4ee135[0x0],'choice_2':_0x4ee135[0x1],'choice_3':_0x4ee135[0x2],'choice_4':_0x4ee135[0x3]}]};return _0x12bb70[_0x3b7e9b(0x1be)](_0x850d24),await fs['writeFile'](this[_0x3b7e9b(0x1b0)],JSON[_0x3b7e9b(0x1c0)](_0x12bb70,null,0x2)),this[_0x3b7e9b(0x19b)](_0x3b7e9b(0x178),_0x3b7e9b(0x180)),_0x850d24;}catch(_0x102280){return this[_0x3b7e9b(0x19b)](_0x3b7e9b(0x1df)+_0x102280[_0x3b7e9b(0x197)],_0x3b7e9b(0x179)),null;}}async[a0_0x5d8d19(0x1ba)](_0x2eef75){const _0x59f8dd=a0_0x5d8d19,_0x29c345=await this[_0x59f8dd(0x195)]();if(!_0x29c345){this[_0x59f8dd(0x19b)]('No\x20Durov\x20payload\x20for\x20today',_0x59f8dd(0x18a));return;}const _0x24c0aa=_0x29c345[_0x59f8dd(0x1c7)][0x0],_0x105e0e=await this[_0x59f8dd(0x188)](_0x59f8dd(0x1cc),this[_0x59f8dd(0x194)][_0x59f8dd(0x17e)],_0x24c0aa,_0x2eef75);_0x105e0e&&_0x105e0e[_0x59f8dd(0x1c1)]?this[_0x59f8dd(0x19b)]('Durov\x20puzzle\x20search\x20successful',_0x59f8dd(0x180)):this['log'](_0x59f8dd(0x1d9),_0x59f8dd(0x18a));}async[a0_0x5d8d19(0x1af)](){const _0x4a5342=a0_0x5d8d19;try{await fs[_0x4a5342(0x189)](this['durovPayloadUrl'],'[]'),this[_0x4a5342(0x19b)](_0x4a5342(0x17d),_0x4a5342(0x180));}catch(_0x13dbc8){this[_0x4a5342(0x19b)](_0x4a5342(0x1b5)+_0x13dbc8[_0x4a5342(0x197)],_0x4a5342(0x179));}}async[a0_0x5d8d19(0x1bc)](_0xde3993){const _0x4280f5=a0_0x5d8d19,_0x453e5c=await this[_0x4280f5(0x188)](_0x4280f5(0x1cc),this[_0x4280f5(0x194)][_0x4280f5(0x17a)],{},_0xde3993);_0x453e5c&&_0x453e5c[_0x4280f5(0x19a)]?this[_0x4280f5(0x19b)](_0x4280f5(0x1de)+_0x453e5c[_0x4280f5(0x1b1)]+')','success'):this['log']('Check-in:\x20Already\x20done\x20or\x20failed','warning');}async['spinRoulette'](_0x181751){const _0x574c9f=a0_0x5d8d19,_0x2c9f76=await this['apiRequest'](_0x574c9f(0x1cc),this[_0x574c9f(0x194)][_0x574c9f(0x18c)],{},_0x181751);_0x2c9f76&&_0x2c9f76['rating_award']>0x0?(this[_0x574c9f(0x168)]+=_0x2c9f76['rating_award'],this[_0x574c9f(0x19b)](_0x574c9f(0x1a9)+_0x2c9f76[_0x574c9f(0x171)]+'\x20stars',_0x574c9f(0x180))):this[_0x574c9f(0x19b)](_0x574c9f(0x167),_0x574c9f(0x18a));}async['holdCoins'](_0xae1f3f){const _0x4b97c0=a0_0x5d8d19;try{const _0x123683=await this['apiRequest'](_0x4b97c0(0x162),this[_0x4b97c0(0x194)][_0x4b97c0(0x1ad)],null,_0xae1f3f);if(_0x123683&&_0x123683[_0x4b97c0(0x1e0)]){this[_0x4b97c0(0x19b)](_0x4b97c0(0x170),'warning');return;}let _0x109a63=0x0;const _0x244f02=0xea60,_0x5254bb=0x2710,_0x80ddd6=0x393,_0x55a997=Date['now']();while(Date['now']()-_0x55a997<_0x244f02){const _0x1a680c=await this[_0x4b97c0(0x188)](_0x4b97c0(0x1cc),this[_0x4b97c0(0x194)][_0x4b97c0(0x1ad)],{'coins':_0x80ddd6},_0xae1f3f);if(_0x1a680c&&_0x1a680c[_0x4b97c0(0x180)])_0x109a63+=_0x80ddd6,this[_0x4b97c0(0x19b)]('Hold\x20Coins:\x20+'+_0x80ddd6+_0x4b97c0(0x1cd),_0x4b97c0(0x180));else{this['log'](_0x4b97c0(0x1b7),'warning');break;}await new Promise(_0x5600bc=>setTimeout(_0x5600bc,_0x5254bb));}this[_0x4b97c0(0x19b)](_0x4b97c0(0x1cf)+_0x109a63,_0x4b97c0(0x180));}catch(_0x30eded){this[_0x4b97c0(0x19b)](_0x4b97c0(0x16d)+_0x30eded[_0x4b97c0(0x197)],'error');}}async[a0_0x5d8d19(0x177)](_0x1e4250){const _0x162166=a0_0x5d8d19,_0x5b1d6d=await this[_0x162166(0x188)](_0x162166(0x162),this[_0x162166(0x194)][_0x162166(0x177)],null,_0x1e4250);if(_0x5b1d6d[_0x162166(0x180)]){const _0x10976f=0xbb8,_0x3a72c0=await this['apiRequest'](_0x162166(0x1cc),this[_0x162166(0x194)][_0x162166(0x177)],{'coins':_0x10976f},_0x1e4250);_0x3a72c0&&_0x3a72c0[_0x162166(0x180)]?this[_0x162166(0x19b)](_0x162166(0x18e)+_0x10976f+_0x162166(0x19e),_0x162166(0x180)):this[_0x162166(0x19b)]('Swipe\x20Coin:\x20Failed',_0x162166(0x179));}else this[_0x162166(0x19b)](_0x162166(0x187),_0x162166(0x179));}async[a0_0x5d8d19(0x1d2)](_0x58485b,_0x4c435a){const _0x11866b=a0_0x5d8d19,_0x40589b=await this[_0x11866b(0x188)](_0x11866b(0x1cc),this[_0x11866b(0x194)]['auth'],{'init_data':_0x58485b});if(!_0x40589b||!_0x40589b[_0x11866b(0x1a1)]||!_0x40589b[_0x11866b(0x185)]){this['log'](_0x11866b(0x1b3)+(_0x4c435a+0x1),_0x11866b(0x179));return;}const {access_token:_0x2de09c,user:_0x430e33}=_0x40589b,_0x248fdf=await this[_0x11866b(0x188)](_0x11866b(0x162),''+this[_0x11866b(0x194)][_0x11866b(0x1ae)]+_0x430e33['id']+'/',null,_0x2de09c),_0x51409e=await this[_0x11866b(0x188)](_0x11866b(0x162),this['endpoints'][_0x11866b(0x1b1)],null,_0x2de09c);this['log']('\x0a[\x20Account\x20'+(_0x4c435a+0x1)+_0x11866b(0x17c)+_0x430e33['first_name']+'\x20]','acc'),this[_0x11866b(0x19b)](_0x11866b(0x1aa)+(_0x248fdf?_0x248fdf[_0x11866b(0x1bf)]:_0x11866b(0x172)),_0x11866b(0x1a2)),this[_0x11866b(0x19b)](_0x11866b(0x1b9)+(_0x51409e?_0x51409e[_0x11866b(0x1b1)]:_0x11866b(0x172))+_0x11866b(0x16e),'info'),await this['performCheckIn'](_0x2de09c),await this[_0x11866b(0x1d1)](_0x2de09c),await this[_0x11866b(0x1ad)](_0x2de09c),await this[_0x11866b(0x177)](_0x2de09c),await this[_0x11866b(0x1ba)](_0x2de09c);}async[a0_0x5d8d19(0x176)](){const _0x1f0be3=a0_0x5d8d19,_0x482f5a=await fs[_0x1f0be3(0x182)](_0x1f0be3(0x19c),_0x1f0be3(0x1dc)),_0x342dde=_0x482f5a[_0x1f0be3(0x164)]('\x0a')['filter'](Boolean);this[_0x1f0be3(0x168)]=0x0;for(let _0x4dd9f1=0x0;_0x4dd9f1<_0x342dde[_0x1f0be3(0x169)];_0x4dd9f1++){const _0x2587c8=_0x342dde[_0x4dd9f1]['trim']();await this['processAccount'](_0x2587c8,_0x4dd9f1);}this[_0x1f0be3(0x19b)](_0x1f0be3(0x1c3)+this[_0x1f0be3(0x168)]+_0x1f0be3(0x18f),_0x1f0be3(0x180));}async[a0_0x5d8d19(0x1d0)](){const _0x112b06=a0_0x5d8d19;console[_0x112b06(0x19b)](banner);const _0x553184=readline['createInterface']({'input':process[_0x112b06(0x1a6)],'output':process['stdout']});while(!![]){console[_0x112b06(0x19b)](_0x112b06(0x1b4)),console[_0x112b06(0x19b)](_0x112b06(0x1c8)),console[_0x112b06(0x19b)](_0x112b06(0x181)),console[_0x112b06(0x19b)](_0x112b06(0x163));const _0x220e79=await new Promise(_0x4e2759=>{const _0x545ec2=_0x112b06;_0x553184[_0x545ec2(0x18b)](_0x545ec2(0x1a3),_0x4e2759);});switch(_0x220e79['trim']()){case'1':await this[_0x112b06(0x195)]();break;case'2':await this[_0x112b06(0x1af)]();break;case'3':await this[_0x112b06(0x176)]();break;case'4':console[_0x112b06(0x19b)](_0x112b06(0x1a8)),_0x553184['close']();return;default:console[_0x112b06(0x19b)](_0x112b06(0x1db));}}}}if(require[a0_0x5d8d19(0x1d0)]===module){const major=new Major();major[a0_0x5d8d19(0x1d0)]()[a0_0x5d8d19(0x1d4)](_0xcc9ac2=>{const _0x43bde2=a0_0x5d8d19;console[_0x43bde2(0x179)](_0xcc9ac2),process[_0x43bde2(0x1e4)](0x1);});}