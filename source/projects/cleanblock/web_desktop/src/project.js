require=function e(t,o,a){function n(i,r){if(!o[i]){if(!t[i]){var s="function"==typeof require&&require;if(!r&&s)return s(i,!0);if(c)return c(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var h=o[i]={exports:{}};t[i][0].call(h.exports,function(e){var o=t[i][1][e];return n(o?o:e)},h,h.exports,e,t,o,a)}return o[i].exports}for(var c="function"==typeof require&&require,i=0;i<a.length;i++)n(a[i]);return n}({ActiveSelfFalse:[function(e,t,o){"use strict";cc._RFpush(t,"04aeaYWSL1A+6kVaGsqubNM","ActiveSelfFalse"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){},activeSelfFalse:function(){this.node.active=!1}}),cc._RFpop()},{}],AudioControl:[function(e,t,o){"use strict";cc._RFpush(t,"05ad9P7ev1PabcGK/tvVHXc","AudioControl"),cc.Class({"extends":cc.Component,properties:{musicClip:{"default":null,url:cc.AudioClip},mergeClip:{"default":null,url:cc.AudioClip},resetClip:{"default":null,url:cc.AudioClip}},onLoad:function(){cc.game.addPersistRootNode(this.node),this._musicHadPlayed=!1;var e=cc.sys.localStorage.getItem("audioEnable");null==e&&(e="true"),this._audioEnable="true"==e,console.log("onLoad  "+e+"  "+this._audioEnable),this._audioEnable&&(cc.audioEngine.playMusic(this.musicClip,!0),this._musicHadPlayed=!0)},playEffect:function(e){if(0!=this._audioEnable)switch(e){case"reset":cc.audioEngine.playEffect(this.resetClip,!1);break;case"merge":cc.audioEngine.playEffect(this.mergeClip,!1)}},setAudioEnable:function(e){cc.sys.localStorage.setItem("audioEnable",e),e?(this._musicHadPlayed?cc.audioEngine.resumeMusic():cc.audioEngine.playMusic(this.musicClip,!0),this._musicHadPlayed=!0):cc.audioEngine.pauseMusic(),this._audioEnable=e},getAudioEnable:function(){return this._audioEnable}}),cc._RFpop()},{}],Base64:[function(e,t,o){"use strict";cc._RFpush(t,"55567whlvNDvrbO6cagKUuM","Base64");var a={_keyStr:"0123456789+/=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",encode:function(e){var t,o,n,c,i,r,s,l="",h=0;for(e=a._utf8_encode(e);h<e.length;)t=e.charCodeAt(h++),o=e.charCodeAt(h++),n=e.charCodeAt(h++),c=t>>2,i=(3&t)<<4|o>>4,r=(15&o)<<2|n>>6,s=63&n,isNaN(o)?r=s=64:isNaN(n)&&(s=64),l=l+this._keyStr.charAt(c)+this._keyStr.charAt(i)+this._keyStr.charAt(r)+this._keyStr.charAt(s);return l},decode:function(e){var t,o,n,c,i,r,s,l="",h=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");h<e.length;)c=this._keyStr.indexOf(e.charAt(h++)),i=this._keyStr.indexOf(e.charAt(h++)),r=this._keyStr.indexOf(e.charAt(h++)),s=this._keyStr.indexOf(e.charAt(h++)),t=c<<2|i>>4,o=(15&i)<<4|r>>2,n=(3&r)<<6|s,l+=String.fromCharCode(t),64!=r&&(l+=String.fromCharCode(o)),64!=s&&(l+=String.fromCharCode(n));return l=a._utf8_decode(l)},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",o=0;o<e.length;o++){var a=e.charCodeAt(o);a<128?t+=String.fromCharCode(a):a>127&&a<2048?(t+=String.fromCharCode(a>>6|192),t+=String.fromCharCode(63&a|128)):(t+=String.fromCharCode(a>>12|224),t+=String.fromCharCode(a>>6&63|128),t+=String.fromCharCode(63&a|128))}return t},_utf8_decode:function(e){for(var t="",o=0,a=0,n=0;o<e.length;)if(a=e.charCodeAt(o),a<128)t+=String.fromCharCode(a),o++;else if(a>191&&a<224)n=e.charCodeAt(o+1),t+=String.fromCharCode((31&a)<<6|63&n),o+=2;else{n=e.charCodeAt(o+1);var c=e.charCodeAt(o+2);t+=String.fromCharCode((15&a)<<12|(63&n)<<6|63&c),o+=3}return t}};t.exports=a,cc._RFpop()},{}],Block:[function(e,t,o){"use strict";cc._RFpush(t,"fb319SGJo1Mj571GMDmh6hQ","Block"),cc.Class({"extends":cc.Component,properties:{frameList:{"default":[],type:cc.SpriteFrame}},onLoad:function(){this._row=0,this._col=0,this._num=-1},setAttribute:function(e,t,o){if(this._row=e,this._col=t,this._num!=o){this._num=o;var a=this.getComponent(cc.Sprite);a.spriteFrame=this.frameList[o-1]}}}),cc._RFpop()},{}],CoverView:[function(e,t,o){"use strict";cc._RFpush(t,"78817C2kJxEr4ayt03T4Sf1","CoverView"),cc.Class({"extends":cc.Component,properties:{horizontal:{"default":!0},distance:{"default":0,type:cc.Float},disscale:{"default":0,type:cc.Float},content:cc.Node,_cardArray:[cc.Node],_offsetPosition:cc.p(0,0),selCallBacks:{"default":[],type:cc.Component.EventHandler}},onLoad:function(){this.initData(),this.initListener()},initData:function(){},initListener:function(){this.node.on(cc.Node.EventType.TOUCH_START,this._onTouchBegan,this,!0),this.node.on(cc.Node.EventType.TOUCH_MOVE,this._onTouchMoved,this,!0),this.node.on(cc.Node.EventType.TOUCH_END,this._onTouchEnded,this,!0),this.node.on(cc.Node.EventType.TOUCH_CANCEL,this._onTouchCancelled,this,!0)},_onTouchBegan:function(e){var t=e.touch;if(this.content){this.content.stopAllActions();for(var o=0;o<this._cardArray.length;o++)this._cardArray[o].stopAllActions();this._handlePressLogic(t)}this._touchMoved=!1},_onTouchMoved:function(e){var t=e.touch;this.content&&this._handleMoveLogic(t);var o=cc.pSub(t.getStartLocation(),t.getLocation());if(cc.pLength(o)>7){this._touchMoved=!0;var a=e.target.getComponent(cc.Button);a&&a._onTouchCancel()}e.stopPropagation()},_onTouchEnded:function(e){var t=e.touch;this.content&&this._handleReleaseLogic(t),this._touchMoved&&e.stopPropagation()},_onTouchCancelled:function(e){var t=e.touch;this.content&&this._handleReleaseLogic(t)},_handlePressLogic:function(){},_handleMoveLogic:function(e){var t=e.getDelta();this._processDeltaMove(t)},_processDeltaMove:function(e){this._scrollChildren(e)},_handleReleaseLogic:function(e){var t=e.getDelta();this._endMoveScaleCards(t)},_scrollChildren:function(e){1==this.horizontal?e.y=0:e.x=0,this._moveContent(e),this._scaleCards(e)},_moveContent:function(e){var t=cc.pAdd(this.content.getPosition(),e);this.content.setPosition(t)},_scaleCards:function(e){for(var t=(this.content.getPosition(),this.content.parent.convertToWorldSpaceAR(cc.p(0,0))),o=0;o<this._cardArray.length;o++){var a=this._cardArray[o],n=a.convertToWorldSpaceAR(cc.p(0,0)),c=0;c=this.horizontal?Math.abs(n.x-t.x):Math.abs(n.y-t.y);var i=1-c/this.distance*this.disscale,r=1e3-.1*c;a.setScale(i),a.setLocalZOrder(r)}},_endMoveScaleCards:function(e){for(var t=Number.MAX_VALUE,o=this.content.parent.convertToWorldSpaceAR(cc.p(0,0)),a=null,n=0;n<this._cardArray.length;n++){var c=this._cardArray[n],i=c.convertToWorldSpaceAR(cc.p(0,0)),r=this.horizontal?o.x-i.x:o.y-i.y;Math.abs(r)<Math.abs(t)&&(t=r,a=c)}for(var n=0;n<this._cardArray.length;n++){var c=this._cardArray[n],i=c.convertToWorldSpaceAR(cc.p(0,0)),r=this.horizontal?o.x-i.x:o.y-i.y,s=1-Math.abs(r-t)/this.distance*this.disscale;c.runAction(cc.scaleTo(.2,s));var l=1e3-.1*r;c.setLocalZOrder(l)}var h=this.horizontal?cc.p(t,0):cc.p(0,t),u=cc.sequence(cc.moveBy(.2,h),cc.callFunc(function(){null!=this.selCallBacks&&cc.Component.EventHandler.emitEvents(this.selCallBacks,a)}.bind(this)));this.content.runAction(u)},addCard:function(e){var t=this._cardArray.length,o=this._offsetPosition.x,a=this._offsetPosition.y;this.horizontal?o+=this.distance*t:a+=this.distance*t;var n=1-this.disscale*t;e.position=cc.p(o,a),e.setScale(n),this._cardArray[t]=e,e.parent=this.content},startMiddleIndex:function(e){var t=this._cardArray.length;if(!(e<0||e>t-1)){var o=cc.pAdd(this._offsetPosition,cc.p(0,-this.distance*e));this.horizontal&&(o=cc.pAdd(this._offsetPosition,cc.p(-this.distance*e,0))),this._setOffsetPosition(o)}},_setOffsetPosition:function(e){this.offsetPosition=e;for(var t=0;t<this._cardArray.length;t++){var o=cc.p(0,0);o=this.horizontal?cc.pAdd(e,cc.p(this.distance*t,0)):cc.pAdd(e,cc.p(0,this.distance*t)),this._cardArray[t].position=o}this._scaleCards(cc.p(0,0))}}),cc._RFpop()},{}],FishStyple:[function(e,t,o){"use strict";cc._RFpush(t,"9775fTQzHlE5qsEDe5KmjiP","FishStyple"),cc.Class({"extends":cc.Component,properties:{objsTempArr:[cc.Prefab],objsParentArr:[cc.Node]},onLoad:function(){this._maxObjsNumArr=[3,2,2,3,4,5],this._intervalArr=[0,0,0,0,0,0],this._standIntervalArr=[6,7,9,2,2,2],this._standAniSpeedArr=[.2,.22,.24,.65,.7,.8],this._waitTimeArr=[0,0,0,0,0,0],this._poolArray=[new cc.NodePool,new cc.NodePool,new cc.NodePool,new cc.NodePool,new cc.NodePool,new cc.NodePool],this.schedule(this.generateFish1,0),this.schedule(this.generateFish2,0),this.schedule(this.generateFish3,0),this.schedule(this.generateBubble1,0),this.schedule(this.generateBubble2,0),this.schedule(this.generateBubble3,0)},generateFish1:function(e){this.generateObj(e,0,"fish")},generateFish2:function(e){this.generateObj(e,1,"fish")},generateFish3:function(e){this.generateObj(e,2,"fish")},generateBubble1:function(e){this.generateObj(e,3,"bubble")},generateBubble2:function(e){this.generateObj(e,4,"bubble")},generateBubble3:function(e){this.generateObj(e,5,"bubble")},generateObj:function(e,t,o){var a=this.objsParentArr[t].children,n=a.length;if(this._waitTimeArr[t]>this._intervalArr[t])if(n==this._maxObjsNumArr[t])for(var c=0;c<n;c++){var i=a[c],r=i.getChildByName("aniNode"),s=r.getComponent(cc.Animation),l=s.getAnimationState(s.aniname);if(null==l){this._poolArray[t].put(i);break}if(0==l.isPlaying){this._poolArray[t].put(i);break}}else if(n<this._maxObjsNumArr[t]){var i=null;i=this._poolArray[t].size()>0?this._poolArray[t].get():cc.instantiate(this.objsTempArr[t]),i.parent=this.objsParentArr[t],this.randomObjData(i,t,o);var h=2*Math.random()-1;this._intervalArr[t]=this._standIntervalArr[t]+h,this._waitTimeArr[t]=0}else this._waitTimeArr[t]=0;this._waitTimeArr[t]+=e},randomObjData:function(e,t,o){var a=e.getChildByName("aniNode"),n=a.getComponent(cc.Animation);if("fish"==o){var c=1e3*Math.random()-630;e.position=cc.p(0,c);var i="leftToRight";Math.random()>.5&&(i="rightToLeft"),n.play(i),n.aniname=i;var r=this._standAniSpeedArr[t]+(.1*Math.random()-.05);n.currentClip.speed=r}else{var s=940*Math.random()-470;e.position=cc.p(s,0);var i="bottomToUp";n.play(i),n.aniname=i;var r=this._standAniSpeedArr[t]+(.5*Math.random()-.25);n.currentClip.speed=r}e.opacity=0,e.runAction(cc.fadeIn(0))}}),cc._RFpop()},{}],GameBoard:[function(e,t,o){"use strict";cc._RFpush(t,"feefbBDgTlFLoivrtyd0I+j","GameBoard");var a=e("g_gameDataManager");cc.Class({"extends":cc.Component,properties:{touchBoard:{"default":null,type:e("TouchBoard")},blockTemp:{"default":null,type:cc.Prefab},blockBoard:{"default":null,type:cc.Sprite},overLayer:{"default":null,type:e("OverLayer")},itemLayerNode:{"default":null,type:cc.Node}},onLoad:function(){console.log("onLoad"),this.initData(),this.initView(),this.initListener()},initData:function(){this.blockArray=[],this.fallBlockArray=[],this.isBlockMoving=!1,this._popingBlock=!1},initView:function(){this.offsetX=-240,this.offsetY=-395,this.disSpace=96;var t=a.getLevel(),o=a.blockArrays[t],n=a.numArrays[t],c=a.getLevelPage();if(c>=1&&(Math.random()>.5&&this.swapNumArray(n,0,1),c>=2&&(Math.random()>.5&&this.swapNumArray(n,0,2),Math.random()>.5&&this.swapNumArray(n,1,2))),void 0!=o){for(var i=0;i<8;i++){this.blockArray[i]=[];for(var r=0;r<6;r++){var s=null,l=o[i][r];if(0!=l){var h=cc.instantiate(this.blockTemp);h.parent=this.node.getChildByName("BlockBoard"),h.setPosition(cc.p(this.offsetX+r*this.disSpace,this.offsetY+i*this.disSpace));var u=e("Block");s=h.getComponent(u),s.setAttribute(i,r,l)}this.blockArray[i][r]=s}}for(i=8;i<10;i++){this.blockArray[i]=[];for(var r=0;r<6;r++)this.blockArray[i][r]=null}this.touchBoard.initNextBlocks(n,c+1)}},swapNumArray:function(e,t,o){var a=e[2*t],n=e[2*t+1];e[2*t]=e[2*o],e[2*t+1]=e[2*o+1],e[2*o]=a,e[2*o+1]=n},initListener:function(){this.blockBoard.node.on(cc.Node.EventType.TOUCH_END,function(e){var t=e.touch.getStartLocation(),o=e.touch.getLocation(),a=t.y-o.y;a>.01*cc.winSize.height&&this.fallBlocksFast()},this),this.blockBoard.node.on(cc.Node.EventType.TOUCH_CANCEL,function(e){var t=e.touch.getStartLocation(),o=e.touch.getLocation(),a=t.y-o.y;a>.01*cc.winSize.height&&this.fallBlocksFast()},this)},placeBoard:function(e){var t=e.blockArray[0],o=e.blockArray[1],a=this.blockBoard.node.getContentSize(),n=t.node.getContentSize(),c=e.blockNodes.convertToWorldSpaceAR(cc.p(0,0)),i=this.blockBoard.node.convertToNodeSpace(c);if(console.log(i.toString()),i.x<0||i.y<0||i.x>a.width||i.y>a.height+.5*n.height)return!1;this.fallBlockArray=[t,o],t.node.y>o.node.y&&(this.fallBlockArray=[o,t]);for(var r=0;r<this.fallBlockArray.length;r++){var s=this.fallBlockArray[r],l=this.getInNodePos(s),h=this.getRowColByPos(l),u=this.canPlaceBlock(h);if(0==u)return this.fallBlockArray=[],!1}for(var r=0;r<this.fallBlockArray.length;r++){var s=this.fallBlockArray[r],l=this.getInNodePos(s),h=this.getRowColByPos(l);s.node.removeFromParent(),s.node.parent=this.blockBoard.node,s.node.position=this.getPosByRowCol(h),s.setAttribute(h.x,h.y,s._num)}return this._dropingBlock=!0,this.schedule(this.fallblocks,1,1e3,.3,!1),!0},fallblocks:function(e){1!=this._popingBlock&&(this.moveBlocks(),console.log("moveBlocks"),0==this.getHaveBlockToFall()&&(console.log("getHaveBlockToFall"),this.unschedule(this.fallblocks),this.scheduleOnce(function(){this.moveBlocks(),this.startPopBlocks()}.bind(this),.3)))},fallBlocksFast:function(){if(1!=this._popingBlock){var e=this.fallBlockArray.length;if(e>0){for(var t=0;t<this.fallBlockArray.length;t++){var o=this.fallBlockArray[t];this.blockArray[o._row][o._col]=o}this.updateBlockArray(0),this.unschedule(this.fallblocks),this.scheduleOnce(function(){this.startPopBlocks()}.bind(this),.3)}}},moveBlocks:function(){for(var e=0;e<this.fallBlockArray.length;e++){var t=this.fallBlockArray[e],o=t._row-1;o<0||null!=this.blockArray[o][t._col]?this.blockArray[t._row][t._col]=t:(t.node.y-=this.disSpace,t._row=o)}},startPopBlocks:function(){this._dropingBlock=!1,this.fallBlockArray=[],0==this._popingBlock&&(this._popingBlock=!0,this.popBlocks())},getHaveBlockToFall:function(){for(var e=!1,t=0;t<this.fallBlockArray.length;t++){var o=this.fallBlockArray[t],a=o._row-1;if(!(a<0||null!=this.blockArray[a][o._col])){if(1==t){var n=this.fallBlockArray[0];if(o._col==n._col&&a==n._row)continue}e=!0;break}}return e},popBlocks:function(){for(var e=0;e<10;e++)for(var t=0;t<6;t++){var o=this.getChain(this.blockArray[e][t]);if(o.length>=4)return void this.popChain(o)}this._popingBlock=!1,this.touchBoard.activeRotateBoards(!0),0==this.touchBoard.rotateBlockArray.length&&this.scheduleOnce(function(){this.node.active=!1,this.itemLayerNode.active=!1,this.overLayer.node.active=!0;var e=this.getRemainBlockNum(),t=0;0==e?t=3:e<2?t=2:e<4&&(t=1),this.overLayer.setStarNum(t)}.bind(this),.3)},getRemainBlockNum:function(){for(var e=0,t=0;t<10;t++)for(var o=0;o<6;o++)null!=this.blockArray[t][o]&&(e+=1);return e},popChain:function(t){for(var o=0;o<t.length;o++){var a=t[o];this.blockArray[a._row][a._col]=null,a.node.removeFromParent();var n=cc.find("AudioControl");n.getComponent(e("AudioControl")).playEffect("merge")}var c=this.updateBlockArray(.2)+.2;this.scheduleOnce(function(){this.popBlocks()},c)},updateBlockArray:function(e){for(var t=0,o=0;o<6;o++)for(var a=0;a<10;a++){var n=this.blockArray[a][o];if(null!=n){var c=this.getFirstRow_isNull_inOneCol(o);if(c>=0&&a>c){var i=this.getPosByRowCol({x:c,y:o});if(n.setAttribute(c,o,n._num),e>.001){var r=(a-c)*e;t=Math.max(r,t),n.node.runAction(cc.moveTo(r,i))}else n.node.position=i;this.blockArray[c][o]=n,this.blockArray[a][o]=null}}}return t},getFirstRow_isNull_inOneCol:function(e){for(var t=0;t<10;t++)if(null==this.blockArray[t][e])return t;return-1},isBlocksMoving:function(){return this._popingBlock||this._dropingBlock},getChain:function(e){var t=[];if(null==e)return t;for(var o=[],a=[[0,-1],[-1,0],[0,1],[1,0]],n=0;n<10;n++){o[n]=[];for(var c=0;c<6;c++)o[n][c]=!1}var i=0;for(t[t.length]=e,o[e._row][e._col]=!0;i<t.length;)for(var e=t[i++],n=0;n<a.length;n++){var r=e._row+a[n][0],s=e._col+a[n][1];if(0==this.isOutBoard(r,s)&&0==o[r][s]){var l=this.blockArray[r][s];o[r][s]=!0,null!=l&&l._num==e._num&&(t[t.length]=l)}}return t},isOutBoard:function(e,t){return e<0||e>=10||t<0||t>=6},getInNodePos:function(e){var t=e.node.convertToWorldSpaceAR(cc.p(0,0));return this.blockBoard.node.convertToNodeSpace(t)},getRowColByPos:function(e){var t=e.x/this.disSpace,o=e.y/this.disSpace,a=parseInt(t<0?-1:t),n=parseInt(o<0?-1:o);return{x:n,y:a}},getPosByRowCol:function(e){var t=cc.p(this.offsetX+e.y*this.disSpace,this.offsetY+e.x*this.disSpace);return t},getAimRowCol:function(e){for(var t=0;t<e.x;t++)if(null!=this.blockArray[t][e.y]&&null!=this.blockArray[t+1][e.y])return{x:t+1,y:e.y};return{x:0,y:0}},canPlaceBlock:function(e){return 0==this.isOutBoard(e.x,e.y)&&null==this.blockArray[e.x][e.y]}}),cc._RFpop()},{AudioControl:"AudioControl",Block:"Block",OverLayer:"OverLayer",TouchBoard:"TouchBoard",g_gameDataManager:"g_gameDataManager"}],HomeLayer:[function(e,t,o){"use strict";cc._RFpush(t,"770e08OjW5KYqeJaAQvCEZL","HomeLayer");e("g_gameDataManager");cc.Class({"extends":cc.Component,properties:{styles:cc.Node,gameTitle:cc.Sprite,titleSpriteFrameEn:cc.SpriteFrame},onLoad:function(){cc.game.addPersistRootNode(this.styles),this.styles.setLocalZOrder(-1),cc.director.setDisplayStats(!0);var e=cc.sys.language;"en"==e&&(this.gameTitle.spriteFrame=this.titleSpriteFrameEn),console.log("onLoad")},levelPageCallBack:function(){cc.director.loadScene("LevelPageScene")}}),cc._RFpop()},{g_gameDataManager:"g_gameDataManager"}],ItemLayer:[function(e,t,o){"use strict";cc._RFpush(t,"81c35gfSONGX68P6JunIKos","ItemLayer");e("g_gameDataManager");cc.Class({"extends":cc.Component,properties:{btnArray:[cc.Node],itemNodes:cc.Node,btnPause:cc.Sprite,btnMusic:cc.Sprite,gameLayer:cc.Node,helpLayer:cc.Node,btn_helpClose:cc.Node,frameList:{"default":[],type:cc.SpriteFrame}},onLoad:function(){this.itemNodes.active=!1,this.isShowItems=!1;var e=this.btn_helpClose.position;this.btn_helpClose.position=cc.p(.48*cc.winSize.width,e.y)},pauseCallBack:function(t){var o=this.isShowItems?0:1;if(this.btnPause.spriteFrame=this.frameList[o],this.itemNodes.active=!this.isShowItems,1==this.itemNodes.active){for(var a=594,n=0,c=-110,i=this.itemNodes.children,r=0;r<i.length;r++){var s=i[r],l=cc.p(298,a+(r+1)*c);s.setScale(n),s.position=cc.p(298,a),s.runAction(cc.scaleTo(.2,1)),s.runAction(cc.moveTo(.2,l))}var h=cc.find("AudioControl"),u=h.getComponent(e("AudioControl")).getAudioEnable(),d=u?2:3;this.btnMusic.spriteFrame=this.frameList[d]}this.isShowItems=!this.isShowItems},restartCallBack:function(){console.log("restartCallBack"),cc.director.loadScene("GameScene")},homeCallBack:function(){console.log("homeCallBack"),cc.director.loadScene("LevelSelectScene")},musicCallBack:function(){console.log("musicCallBack");var t=cc.find("AudioControl").getComponent(e("AudioControl")),o=t.getAudioEnable();t.setAudioEnable(!o),o=!o;var a=o?2:3;this.btnMusic.spriteFrame=this.frameList[a]},rateCallBack:function(){console.log("rateCallBack")},helpCallBack:function(){this.helpLayer.active=!0,this.gameLayer.active=!1,this.node.active=!1},helpCloseCallBack:function(){console.log("helpCloseCallBack"),this.helpLayer.active=!1,this.gameLayer.active=!0,this.node.active=!0}}),cc._RFpop()},{AudioControl:"AudioControl",g_gameDataManager:"g_gameDataManager"}],LabelLocalized:[function(e,t,o){"use strict";cc._RFpush(t,"e4f88adp3hERoJ48DZ2PSAl","LabelLocalized");var a=e("i18n");cc.Class({"extends":cc.Label,properties:{textKey:{"default":"TEXT_KEY",multiline:!0,tooltip:"Enter i18n key here",notify:function(){this._sgNode&&(this._sgNode.setString(this.string),this._updateNodeSize())}},string:{override:!0,tooltip:"Here shows the localized string of Text Key",get:function(){return a.t(this.textKey)},set:function(e){this.textKey=e,cc.warn("Please set label text key in Text Key property.")}}}}),cc._RFpop()},{i18n:"i18n"}],LevelNode:[function(e,t,o){"use strict";cc._RFpush(t,"69646AC0/lG1ID0bLoiAXH0","LevelNode");var a=e("g_gameDataManager");cc.Class({"extends":cc.Component,properties:{levelLabel:cc.Label,starArray:{"default":[],type:cc.Sprite},starframeList:{"default":[],type:cc.SpriteFrame},blockTemp:{"default":null,type:cc.Prefab},blockBoard:cc.Node},onLoad:function(){this._level=0},initData:function(e,t,o){this._level=e,this.levelLabel.string=this._level+1;for(var n=a.getLevelStarNum(e),c=0;c<3;c++)this.starArray[c].getComponent(cc.Sprite).spriteFrame=this.starframeList[c<n?0:1]},clickCallBack:function(){console.log(this._level),a.setLevel(this._level),cc.director.loadScene("GameScene")},swapNumArray:function(e,t){var o=this._numArray[2*e],a=this._numArray[2*e+1];this._numArray[2*e]=this._numArray[2*t],this._numArray[2*e+1]=this._numArray[2*t+1],this._numArray[2*t]=o,this._numArray[2*t+1]=a}}),cc._RFpop()},{g_gameDataManager:"g_gameDataManager"}],LevelPageNode:[function(e,t,o){"use strict";cc._RFpush(t,"2e7d6OJFptPAqO1+CKXM7/e","LevelPageNode");var a=e("g_gameDataManager");cc.Class({"extends":cc.Component,properties:{pageNum:{"default":1,type:cc.Integer},frameList:{"default":[],type:cc.SpriteFrame},starLabel:cc.Label,unlockSp:cc.Node,iconSp:cc.Sprite},onLoad:function(){},setPageNum:function(e){this.iconSp.spriteFrame=this.frameList[e];var t=a.getPageStar(e);this.starLabel.string=t+" /75";var o=a.isPageUnLock(e);this.unlockSp.active=!o}}),cc._RFpop()},{g_gameDataManager:"g_gameDataManager"}],LevelScene:[function(e,t,o){"use strict";cc._RFpush(t,"38ce6dkhYRNwYz8YvP4lxoH","LevelScene");var a=e("g_gameDataManager"),n=e("Base64");cc.Class({"extends":cc.Component,properties:{levelNodePf:{"default":null,type:cc.Prefab},starNumLabel:cc.Label,levelBg:cc.Sprite},onLoad:function(){this.loadLevelJson();var e=a.getLevelPage();this.starNumLabel.string=a.getPageStar(e)+"/100",cc.loader.loadRes("img/pageBg"+e,cc.SpriteFrame,function(e,t){return e?void cc.error(e.message||e):void(this.levelBg.spriteFrame=t)}.bind(this))},loadLevelJson:function(){var e=this._loadCallBack.bind(this);cc.loader.loadRes("data/levelpage"+(a.getLevelPage()+1),e)},_loadCallBack:function(t,o){if(t)return void console.log("Error url ["+t+"]");o=n.decode(o),a.blockArrays=[],a.numArrays=[];var c=25*a.getLevelPage(),i=JSON.parse(o);this.offsetX=-284,this.offsetY=450,this.disSpaceX=142,this.disSpaceY=210;for(var r=0;r<5;r++)for(var s=0;s<5;s++){var l=c+5*r+s,h=cc.instantiate(this.levelNodePf);h.parent=this.node;var u=cc.p(this.offsetX+s*this.disSpaceX,this.offsetY-r*this.disSpaceY);h.setPosition(u);for(var d=e("LevelNode"),p=h.getComponent(d),f=i["level"+(l+1)],g=[],v=0;v<8;v++){var _=f[v].split(",");g[v]=[];for(var m=0;m<6;m++){var y=parseInt(_[m]);g[v][m]=y}}for(var k=f[8].split(","),m=0;m<6;m++)k[m]=parseInt(k[m]);p.initData(l,g,k),a.blockArrays[l]=g,a.numArrays[l]=k}},backCallBack:function(){cc.director.loadScene("LevelPageScene")}}),cc._RFpop()},{Base64:"Base64",LevelNode:"LevelNode",g_gameDataManager:"g_gameDataManager"}],OverLayer:[function(e,t,o){"use strict";cc._RFpush(t,"5f0e70i6HZHBYt6DI7No1kj","OverLayer");var a=e("g_gameDataManager");cc.Class({"extends":cc.Component,properties:{overLabel:cc.Label,startLabel:cc.Label,btn_next:cc.Node,btn_info:cc.Node,unLockLabelTip:cc.Node,unlockNameLabel:e("LabelLocalized")},onLoad:function(){var e=cc.sys.language;"en"==e&&(this.unLockLabelTip.position=cc.p(-123,-520),this.unlockNameLabel.node.position=cc.p(334,0))},setStarNum:function(e){if(e<1)this.overLabel.textKey="Failure",this.btn_next.active=!1,this.btn_info.active=!0;else{var t=a.getLevel(),o=a.getLevelStarNum(t),n=e-o;if(n>0){var c=a.getLevelPage(),i=a.getPageStar(c),r=i+n;a.setLevelStarNum(t,e),a.setPageStar(c,r);for(var s=0;s<4;s++){var l=a.isPageUnLock(s);if(0==l){var h=a.canPageUnlock(s);if(1==h){console.log(s+"-----"),a.setPageUnlock(s,!0),this.showUnLockTip(s);break}}}}}this.startLabel.string="x"+e},restartCallBack:function(){console.log("restartCallBack"),cc.director.loadScene("GameScene")},homeCallBack:function(){console.log("homeCallBack"),cc.director.loadScene("LevelSelectScene")},nextCallBack:function(){console.log("nextCallBack");var e=a.getLevel();(e+1)%25==0?cc.director.loadScene("LevelPageScene"):(a.setLevel(e+1),cc.director.loadScene("GameScene"))},infoCallBack:function(){console.log("infoCallBack")},showUnLockTip:function(e){this.unLockLabelTip.active=!0,this.unlockNameLabel.textKey="PuKe_LvName_"+e}}),cc._RFpop()},{LabelLocalized:"LabelLocalized",g_gameDataManager:"g_gameDataManager"}],PageNode:[function(e,t,o){"use strict";cc._RFpush(t,"90e78iqF7VN0o1fyF7ZrM84","PageNode");var a=e("g_gameDataManager");cc.Class({"extends":cc.Component,properties:{levelPageNodeTmp:{"default":null,type:cc.Prefab},coverView:{"default":null,type:e("CoverView")},unLockLabelTip:cc.Label,unlockNameLabel:cc.Label,starNumLabel:cc.Label},onLoad:function(){this.selCardIndex=0;for(var t=0;t<4;t++){var o=cc.instantiate(this.levelPageNodeTmp);o.tag=t,this.coverView.addCard(o),this.coverView.startMiddleIndex(this.selCardIndex);var n=new cc.Component.EventHandler;n.target=this.node,n.component=this.__proto__.__classname__,n.handler="levelPageCallBack",o.getComponent(cc.Button).clickEvents.push(n),o.getComponent(e("LevelPageNode")).setPageNum(t)}this.starNumLabel.string=a.getTotalStar()+"/300";var c=cc.sys.language;"en"==c&&(this.unlockNameLabel.node.position=cc.p(75,0))},levelPageCallBack:function(e){var t=e.target.tag;if(t==this.selCardIndex){console.log("levelPageCallBack");var o=a.isPageUnLock(t);if(1==o)a.setLevelPage(t),cc.director.loadScene("LevelSelectScene"),e.target.active=!1;else{this.unLockLabelTip.node.active=!0;var n=this.unLockLabelTip.node.getComponent(cc.Animation);n.play("unlockPage"),this.unlockNameLabel.string=""+a.getPageUnlockNeedStar(t)}}},selCradCallBack:function(e){this.selCardIndex=e.tag}}),cc._RFpop()},{CoverView:"CoverView",LevelPageNode:"LevelPageNode",g_gameDataManager:"g_gameDataManager"}],RemoveSelf:[function(e,t,o){"use strict";cc._RFpush(t,"ab669J28H1GN6lGtFxXgzcg","RemoveSelf"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){},removeSelf:function(){this.node.parent=null}}),cc._RFpop()},{}],RotateBlock:[function(e,t,o){"use strict";cc._RFpush(t,"95af0ZZVahBqKEBwlBEQwCJ","RotateBlock"),cc.Class({"extends":cc.Component,properties:{blockArray:{"default":[],type:e("Block")},rotateSp:{"default":null,type:cc.Sprite},blockNodes:{"default":null,type:cc.Node}},_selBoardCallBack:null,_putBoardCallBack:null,onLoad:function(){this.initData(),this.addListener(),this.rotateSp.node.runAction(cc.repeatForever(cc.rotateBy(5,360)))},initData:function(){this._canRotateBoard=!0,this._rotateStep=0,this._blockPosArray=[[cc.p(0,48),cc.p(0,-48)],[cc.p(48,0),cc.p(-48,0)],[cc.p(0,-48),cc.p(0,48)],[cc.p(-48,0),cc.p(48,0)]],this.gameBoard=cc.find("Canvas/GameLayer/GameBoard").getComponent(e("GameBoard"))},setCanRotateBoard:function(e){this._canRotateBoard=e,this.rotateSp.node.active=e,this.rotateSp.setVisible(e)},addListener:function(){this.node.on(cc.Node.EventType.TOUCH_START,function(e){this._canRespondseEvent=this.rotateSp.node.active,0!=this._canRespondseEvent&&(this._hasMove=!1)},this),this.node.on(cc.Node.EventType.TOUCH_MOVE,function(e){if(0!=this._canRespondseEvent)if(0==this._hasMove){var t=e.touch.getStartLocation(),o=e.touch.getLocation(),a=cc.pDistance(t,o);a>7&&(this._hasMove=!0,this.rotateSp.setVisible(!1),this._selBoardCallBack&&this._selBoardCallBack(this))}else{var n=e.touch.getDelta();this.blockNodes.x+=n.x,this.blockNodes.y+=n.y}},this),this.node.on(cc.Node.EventType.TOUCH_END,function(e){0!=this._canRespondseEvent&&(0==this._hasMove?this.rotateBlockes():this._putBoardCallBack&&this._putBoardCallBack(this),this.blockNodes.position=cc.p(0,0))},this),this.node.on(cc.Node.EventType.TOUCH_CANCEL,function(e){0!=this._canRespondseEvent&&(this._putBoardCallBack&&this._putBoardCallBack(this),this.blockNodes.position=cc.p(0,0))},this)},rotateBlockes:function(){this._rotateStep++,this._rotateStep=4==this._rotateStep?0:this._rotateStep,this.blockArray[0].node.setPosition(this._blockPosArray[this._rotateStep][0]),this.blockArray[1].node.setPosition(this._blockPosArray[this._rotateStep][1])},activeRotateBlock:function(e){this._canRotateBoard&&(this.rotateSp.node.active=e,this.rotateSp.setVisible(e))}}),cc._RFpop()},{Block:"Block",GameBoard:"GameBoard"}],SmallBlock:[function(e,t,o){"use strict";cc._RFpush(t,"340f5H3QDJCjph58xawJL4c","SmallBlock"),cc.Class({"extends":cc.Component,properties:{frameList:{"default":[],type:cc.SpriteFrame}},onLoad:function(){},setSpriteFrameNum:function(e){var t=this.getComponent(cc.Sprite);t.spriteFrame=this.frameList[e-1]}}),cc._RFpop()},{}],TouchBoard:[function(e,t,o){"use strict";cc._RFpush(t,"e7cdbBTiNJLp5b1BxnqiNna","TouchBoard"),cc.Class({"extends":cc.Component,properties:function(){return{rotateBlockArray:{"default":[],type:e("RotateBlock")},blockPrefab:{"default":null,type:cc.Prefab},gameBoard:{"default":null,type:e("GameBoard")}}},_selBorad:null,onLoad:function(){this._canRotateNum=1},initNextBlocks:function(t,o){this._canRotateNum=o;for(var a=0;a<3;a++)for(var n=-232,a=0;a<3;a++){var c=cc.instantiate(this.blockPrefab);c.parent=this.node,c.tag=a,c.position=cc.p(n*(1-a),0);var i=c.getComponent(e("RotateBlock"));i._putBoardCallBack=this.putBoard.bind(this),i._selBoardCallBack=this.selBoard.bind(this),i.blockArray[0].setAttribute(-1,-1,t[2*a]),i.blockArray[1].setAttribute(-1,-1,t[2*a+1]),i.setCanRotateBoard(a+1<=o),this.rotateBlockArray[a]=i}},selBoard:function(e){console.log("selBoard"),this._selBorad=e,this.activeRotateBoards(!1)},putBoard:function(t){var o=this.gameBoard.placeBoard(t);if(0==o){console.log("can not place"),this.activeRotateBoards(!0);var a=cc.find("AudioControl");a.getComponent(e("AudioControl")).playEffect("reset")}else console.log("place ok"),this.rotateBlockArray.splice(t.node.tag,1),t.node.runAction(cc.removeSelf()),this.activeRotateBoards(!1)},activeRotateBoards:function(e){console.log("activeRotateBoards"+this.rotateBlockArray.length);for(var t=0;t<this.rotateBlockArray.length;t++){var o=this.rotateBlockArray[t];t+1<=this._canRotateNum&&o.setCanRotateBoard(!0),o.activeRotateBlock(e),o.node.tag=t}}}),cc._RFpop()},{AudioControl:"AudioControl",GameBoard:"GameBoard",RotateBlock:"RotateBlock"}],WaveEvent:[function(e,t,o){"use strict";cc._RFpush(t,"20ced5ldMNEsaQrb9jSm0Rp","WaveEvent"),cc.Class({"extends":cc.Component,properties:{waveArray:[cc.Node]},onLoad:function(){},moveLeftCallBack:function(e){console.log("moveLeftEnd");for(var t=0;t<this.waveArray.length;t++)this.waveArray[t].name==e&&(this.waveArray[t].position.x=1287)}}),cc._RFpop()},{}],en:[function(e,t,o){"use strict";cc._RFpush(t,"920c5VLzJxKjYCAoIUwUHym","en"),t.exports={UnlockNeedStar:"unlock need       starts",UnlockTip:"Congratulate on unlock",PuKe_LvName_1:" [Poker Heart] ",PuKe_LvName_2:" [Poker Flower]",PuKe_LvName_3:" [Poker Blade]]",Victory:"Victory!",Failure:"Failure!",Help:"Help",Rule:"[Rule]",Help_Msg:"Touch for rotating the pukes position\n\nDrag the puke to gameboard\n\nFour same pokes connect  will be pop\n\nMore [op pukes, more gain stars"},cc._RFpop()},{}],g_gameDataManager:[function(e,t,o){"use strict";cc._RFpush(t,"925fcAh/uZARqyMAP4NhbDM","g_gameDataManager");var a={initData:function(){this._levelPage=0,this._levelNum=0,this.blockArrays=[],this.numArrays=[]},printStorageDetail:function(){console.log("printStorageDetail");for(var e=cc.sys.localStorage,t=0;t<e.length;t++)console.log(e.key(t)+" : "+e.getItem(e.key(t)))},getLevelPage:function(){return this._levelPage},setLevelPage:function(e){this._levelPage=e},getLevel:function(){return this._levelNum},setLevel:function(e){this._levelNum=e},getLevelStarNum:function(e){var t=cc.sys.localStorage.getItem("levelStar"+e);return null==t&&(t=0),parseInt(t)},setLevelStarNum:function(e,t){cc.sys.localStorage.setItem("levelStar"+e,t);var o=cc.sys.localStorage.getItem("levelStar"+e);null==o&&(o=0)},getPageStar:function(e){var t=cc.sys.localStorage.getItem("pageStar"+e);return null==t&&(t=0),parseInt(t)},setPageStar:function(e,t){cc.sys.localStorage.setItem("pageStar"+e,t)},getTotalStar:function(){for(var e=0,t=0;t<4;t++)e+=this.getPageStar(t);return e},isPageUnLock:function(e){var t=cc.sys.localStorage.getItem("unlockPage_"+e);return 0==e&&(t=!0),Boolean(t)},setPageUnlock:function(e,t){cc.sys.localStorage.setItem("unlockPage_"+e,t)},canPageUnlock:function(e){var t=this.getTotalStar();return t>=this.getPageUnlockNeedStar(e)},getPageUnlockNeedStar:function(e){return 0==e?0:1==e?70:2==e?145:3==e?223:0;
}};a.initData(),t.exports=a,cc._RFpop()},{}],i18n:[function(e,t,o){"use strict";cc._RFpush(t,"93789C/shtIL6entYsZPjee","i18n");var a=e("polyglot"),n=cc.sys.language;"zh"!==n&&(n="en");var c=e(n),i=new a({phrases:c,allowMissing:!0});t.exports={init:function(t){n=t,c=e(n),i.replace(c)},t:function(e,t){return i.t(e,t)}},cc._RFpop()},{polyglot:"polyglot"}],polyglot:[function(e,t,o){(function(e){"use strict";cc._RFpush(t,"69decSgpRlE1rzEKp0RzG3V","polyglot"),function(e,a){"function"==typeof define&&define.amd?define([],function(){return a(e)}):"object"==typeof o?t.exports=a(e):e.Polyglot=a(e)}("undefined"!=typeof e?e:this,function(e){function t(e){e=e||{},this.phrases={},this.extend(e.phrases||{}),this.currentLocale=e.locale||"en",this.allowMissing=!!e.allowMissing,this.warn=e.warn||s}function o(e){var t,o,a,n={};for(t in e)if(e.hasOwnProperty(t)){o=e[t];for(a in o)n[o[a]]=t}return n}function a(e){return h.call(e,f,"")}function n(e,t,o){var n,c,r;return null!=o&&e?(c=e.split(u),r=c[i(t,o)]||c[0],n=a(r)):n=e,n}function c(e){var t=o(p);return t[e]||t.en}function i(e,t){return d[c(e)](t)}function r(e,t){for(var o in t)if("_"!==o&&t.hasOwnProperty(o)){var a=t[o];"string"==typeof a&&(a=h.call(t[o],g,v)),e=h.call(e,new RegExp("%\\{"+o+"\\}","g"),a)}return e}function s(t){e.console&&e.console.warn&&e.console.warn("WARNING: "+t)}function l(e){var t={};for(var o in e)t[o]=e[o];return t}var h=String.prototype.replace;t.VERSION="1.0.0",t.prototype.locale=function(e){return e&&(this.currentLocale=e),this.currentLocale},t.prototype.extend=function(e,t){var o;for(var a in e)e.hasOwnProperty(a)&&(o=e[a],t&&(a=t+"."+a),"object"==typeof o?this.extend(o,a):this.phrases[a]=o)},t.prototype.unset=function(e,t){var o;if("string"==typeof e)delete this.phrases[e];else for(var a in e)e.hasOwnProperty(a)&&(o=e[a],t&&(a=t+"."+a),"object"==typeof o?this.unset(o,a):delete this.phrases[a])},t.prototype.clear=function(){this.phrases={}},t.prototype.replace=function(e){this.clear(),this.extend(e)},t.prototype.t=function(e,t){var o,a;return t=null==t?{}:t,"number"==typeof t&&(t={smart_count:t}),"string"==typeof this.phrases[e]?o=this.phrases[e]:"string"==typeof t._?o=t._:this.allowMissing?o=e:(this.warn('Missing translation for key: "'+e+'"'),a=e),"string"==typeof o&&(t=l(t),a=n(o,this.currentLocale,t.smart_count),a=r(a,t)),a},t.prototype.has=function(e){return e in this.phrases};var u="||||",d={chinese:function(e){return 0},german:function(e){return 1!==e?1:0},french:function(e){return e>1?1:0},russian:function(e){return e%10===1&&e%100!==11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},czech:function(e){return 1===e?0:e>=2&&e<=4?1:2},polish:function(e){return 1===e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},icelandic:function(e){return e%10!==1||e%100===11?1:0}},p={chinese:["fa","id","ja","ko","lo","ms","th","tr","zh"],german:["da","de","en","es","fi","el","he","hu","it","nl","no","pt","sv"],french:["fr","tl","pt-br"],russian:["hr","ru"],czech:["cs","sk"],polish:["pl"],icelandic:["is"]},f=/^\s+|\s+$/g,g=/\$/g,v="$$$$";return t}),cc._RFpop()}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],zh:[function(e,t,o){"use strict";cc._RFpush(t,"87f1fs0gohHDIfNg4aePXbt","zh"),t.exports={UnlockNeedStar:"解锁需要       颗星星",UnlockTip:"恭喜你解锁",PuKe_LvName_1:" [扑克之心]",PuKe_LvName_2:" [扑克之花]",PuKe_LvName_3:" [扑克之刃]",Victory:"胜利!",Failure:"失败!",Help:"帮助",Rule:"[规则]",Help_Msg:"点击旋转调整扑克位置\n\n拖放扑克到棋盘中\n\n四个相同的扑克相连时将会被消除\n\n消除的越多，获得星星就越多"},cc._RFpop()},{}]},{},["ActiveSelfFalse","AudioControl","WaveEvent","LevelPageNode","SmallBlock","LevelScene","Base64","OverLayer","LevelNode","polyglot","HomeLayer","CoverView","ItemLayer","zh","PageNode","en","g_gameDataManager","i18n","RotateBlock","FishStyple","RemoveSelf","LabelLocalized","TouchBoard","Block","GameBoard"]);