if (self.CavalryLogger) { CavalryLogger.start_js(["R9g0l"]); }

__d('CompositeDraftDecorator',['immutable'],(function a(b,c,d,e,f,g){'use strict';var h=c('immutable').List,i='.';function j(m){this.$CompositeDraftDecorator1=m.slice();}j.prototype.getDecorations=function(m,n){var o=Array(m.getText().length).fill(null);this.$CompositeDraftDecorator1.forEach(function(p,q){var r=0,s=p.strategy,t=function u(v,w){if(k(o,v,w)){l(o,v,w,q+i+r);r++;}};s(m,t,n);});return h(o);};j.prototype.getComponentForKey=function(m){var n=parseInt(m.split(i)[0],10);return this.$CompositeDraftDecorator1[n].component;};j.prototype.getPropsForKey=function(m){var n=parseInt(m.split(i)[0],10);return this.$CompositeDraftDecorator1[n].props;};function k(m,n,o){for(var p=n;p<o;p++)if(m[p]!=null)return false;return true;}function l(m,n,o,p){for(var q=n;q<o;q++)m[q]=p;}f.exports=j;}),null);
__d('EmoticonSpan.react',['cx','DraftEntity','EmojiImageURL','EmoticonsList','React','SupportedFBEmoji'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){var l=this.props.size,m=c('DraftEntity').get(this.props.entityKey).getData(),n=c('EmoticonsList').emoji[m.type],o=c('SupportedFBEmoji')[n]?c('EmojiImageURL').getFBEmojiURL(n,l):c('EmojiImageURL').getFBEmojiExtendedURL(n,l);return (c('React').createElement('span',{className:"_3gl1 _5zz4",style:{backgroundImage:'url('+o+')',backgroundSize:l+'px '+l+'px',height:l+'px',width:l+'px'}},c('React').createElement('span',{className:"_ncl"},this.props.children)));};function k(){i.apply(this,arguments);}k.defaultProps={size:16};f.exports=k;}),null);
__d('HashtagSpan.react',['cx','React'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return (c('React').createElement('span',babelHelpers['extends']({},this.props,{'data-offset-key':this.props.offsetKey,className:"_5zk7",spellCheck:false}),this.props.children));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('MentionSpan.react',['cx','React'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return (c('React').createElement('span',babelHelpers['extends']({},this.props,{'data-offset-key':this.props.offsetKey,className:"_247o",spellCheck:false}),this.props.children));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('WeakMentionSpan.react',['cx','React'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return (c('React').createElement('span',{'data-offset-key':this.props.offsetKey,className:"_whq",spellCheck:false},this.props.children));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('getEntityMatcher',['DraftEntity'],(function a(b,c,d,e,f,g){var h=c('DraftEntity').get;function i(j,k){var l=k||h;return function(m,n){m.findEntityRanges(function(o){var p=o.getEntity();return typeof p==='string'&&j(l(p));},n);};}f.exports=i;}),null);
__d('getHashtagMatches',['getHashtagRegex'],(function a(b,c,d,e,f,g){var h=c('getHashtagRegex')();function i(j,k){var l=j.getText(),m,n,o,p;while((m=h.exec(l))!==null){n=m.index+m[1].length;o=m[2];p=m[3];k(n,n+o.length+p.length);}}f.exports=i;}),null);
__d('getMentionsInputDecorator',['CompositeDraftDecorator','EmoticonSpan.react','HashtagSpan.react','MentionSpan.react','WeakMentionSpan.react','getEntityMatcher','getHashtagMatches'],(function a(b,c,d,e,f,g){var h;function i(){if(!h){var j=[{strategy:c('getEntityMatcher')(function(k){var l=k.getData();return k.getType()==='MENTION'&&l&&l.isWeak;}),component:c('WeakMentionSpan.react')},{strategy:c('getEntityMatcher')(function(k){return k.getType()==='MENTION';}),component:c('MentionSpan.react')},{strategy:c('getEntityMatcher')(function(k){return k.getType()==='EMOTICON';}),component:c('EmoticonSpan.react')},{strategy:c('getHashtagMatches'),component:c('HashtagSpan.react')}];h=new (c('CompositeDraftDecorator'))(j);}return h;}f.exports=i;}),null);
__d('Alignment',['invariant','DOMVector','Style','containsNode'],(function a(b,c,d,e,f,g,h){function i(k,l,m){'use strict';this.$Anchor1=l;this.$Anchor2=m;this.$Anchor3=k;}i.prototype.getElement=function(){'use strict';return this.$Anchor3;};i.prototype.getX=function(){'use strict';return this.$Anchor1;};i.prototype.getY=function(){'use strict';return this.$Anchor2;};i.prototype.isCorner=function(){'use strict';return ((this.$Anchor1===i.LEFT||this.$Anchor1===i.RIGHT)&&(this.$Anchor2===i.TOP||this.$Anchor2===i.BOTTOM));};i.prototype.getPosition=function(k){'use strict';return c('DOMVector').getElementPosition(this.$Anchor3,k).add(this.getX()*this.$Anchor3.offsetWidth,this.getY()*this.$Anchor3.offsetHeight);};Object.assign(i,{LEFT:0,CENTER:.5,RIGHT:1,TOP:0,MIDDLE:.5,BOTTOM:1});function j(k,l,m){'use strict';this.$Alignment1=k;this.$Alignment2=l;this.$Alignment3=m;c('containsNode')(k.getElement(),l.getElement())||h(0);k.isCorner()||h(0);}j.prototype.align=function(){'use strict';j.$Alignment4(this.$Alignment1,function(){return j.measure(this.$Alignment2,this.$Alignment3);}.bind(this));};j.$Alignment4=function(k,l){'use strict';var m=k.getElement();c('Style').apply(m,{left:k.getX()===i.LEFT?'0':'',right:k.getX()===i.RIGHT?'0':'',top:k.getY()===i.TOP?'0':'',bottom:k.getY()===i.BOTTOM?'0':''});var n=l();if(k.getX()===i.LEFT){c('Style').set(m,'left',n.x+'px');}else if(k.getX()===i.RIGHT)c('Style').set(m,'right',-n.x+'px');if(k.getY()===i.TOP){c('Style').set(m,'top',n.y+'px');}else if(k.getY()===i.BOTTOM)c('Style').set(m,'bottom',-n.y+'px');};j.position=function(k,l){'use strict';j.$Alignment4(k,function(){var m=c('DOMVector').getElementPosition(k.getElement());return l.convertTo('document').sub(m);});};j.measure=function(k,l){'use strict';var m=k.getPosition('document'),n=l.getPosition('document');return n.sub(m);};j.Anchor=i;f.exports=j;}),null);
__d('SingleSelectorBase',['csx','cx','invariant','ArbiterMixin','Alignment','BehaviorsMixin','Button','CSS','DOM','DOMQuery','Event','Layer','LayerBounds','Locale','Rect','ParameterizedPopover','PopoverMenu','Scroll','SelectableMenuUtils','Style','getOverlayZIndex','mixin','throttle'],(function a(b,c,d,e,f,g,h,i,j){var k,l,m=c('Alignment').Anchor,n=c('Locale').isRTL()?m.RIGHT:m.LEFT,o={},p=16;k=babelHelpers.inherits(q,c('mixin')(c('ArbiterMixin'),c('BehaviorsMixin')));l=k&&k.prototype;function q(s,t,u,v){'use strict';l.constructor.call(this);this.$SingleSelectorBase1=s;this.$SingleSelectorBase2=null;this.$SingleSelectorBase3=o;this.$SingleSelectorBase4=c('DOM').create('div',{});this.$SingleSelectorBase5=new (c('Layer'))({classNames:["_5xew"]},this.$SingleSelectorBase4);this.$SingleSelectorBase6=new (c('ParameterizedPopover'))(s.parentNode,s,[],babelHelpers['extends']({},u,{layer:this.$SingleSelectorBase5}));this.$SingleSelectorBase6.subscribe('show',this.$SingleSelectorBase7.bind(this));this.$SingleSelectorBase6.subscribe('hide',this.$SingleSelectorBase8.bind(this));this.$SingleSelectorBase9=new (c('PopoverMenu'))(this.$SingleSelectorBase6,s,t,[]);this.setMenu(t);if(v&&v.behaviors)this.enableBehaviors(v.behaviors);}q.prototype.$SingleSelectorBase7=function(){'use strict';this.$SingleSelectorBase10();this.$SingleSelectorBase11();c('CSS').conditionClass(this.$SingleSelectorBase5.getRoot(),"_5xex",this.$SingleSelectorBase12());c('Style').set(this.$SingleSelectorBase5.getRoot(),'min-width',this.$SingleSelectorBase1.offsetWidth+p+'px');var s=c('DOM').scry(this.$SingleSelectorBase4,'div.uiScrollableAreaWrap')[0];if(s){var t=c('Alignment').measure(new m(this.$SingleSelectorBase13(),n,m.MIDDLE),new m(this.$SingleSelectorBase2.getRoot(),n,m.MIDDLE));c('Scroll').setTop(s,c('Scroll').getTop(s)-t.y);}this.align();this.getMenu().focusAnItem();if(!this.$SingleSelectorBase14)this.$SingleSelectorBase14=c('Event').listen(window,'resize',c('throttle')(this.align.bind(this)));this.inform('show');};q.prototype.$SingleSelectorBase8=function(){'use strict';if(this.$SingleSelectorBase14){this.$SingleSelectorBase14.remove();this.$SingleSelectorBase14=null;}this.inform('hide');};q.prototype.$SingleSelectorBase15=function(s,t){'use strict';this.$SingleSelectorBase16=null;if(!this.$SingleSelectorBase17)this.inform('change',t);};q.prototype.isShown=function(){'use strict';return this.$SingleSelectorBase6.isShown();};q.prototype.setValue=function(s){'use strict';if(this.isShown()){this.$SingleSelectorBase18(s,false);}else{this.$SingleSelectorBase3=s;this.$SingleSelectorBase19=false;}};q.prototype.setValueWithoutChange=function(s){'use strict';if(this.isShown()){this.$SingleSelectorBase18(s,true);}else{this.$SingleSelectorBase3=s;this.$SingleSelectorBase19=true;}};q.prototype.$SingleSelectorBase11=function(){'use strict';if(this.$SingleSelectorBase3!==o){this.$SingleSelectorBase18(this.$SingleSelectorBase3,this.$SingleSelectorBase19);this.$SingleSelectorBase3=o;}};q.prototype.$SingleSelectorBase18=function(s,t){'use strict';this.$SingleSelectorBase17=t;this.$SingleSelectorBase2.setValue(s);this.$SingleSelectorBase17=null;};q.prototype.getValue=function(){'use strict';return this.getSelectedItem().getValue();};q.prototype.getLayer=function(){'use strict';return this.$SingleSelectorBase5;};q.prototype.getButton=function(){'use strict';return this.$SingleSelectorBase1;};q.prototype.setMenu=function(s){'use strict';if(this.isShown()){this.$SingleSelectorBase20(s);}else this.$SingleSelectorBase21=s;};q.prototype.$SingleSelectorBase10=function(){'use strict';if(this.$SingleSelectorBase21){this.$SingleSelectorBase20(this.$SingleSelectorBase21);this.$SingleSelectorBase21=null;}};q.prototype.$SingleSelectorBase20=function(s){'use strict';if(s!==this.$SingleSelectorBase2){this.$SingleSelectorBase2=s;if(this.$SingleSelectorBase22)this.$SingleSelectorBase22.unsubscribe();this.$SingleSelectorBase22=this.$SingleSelectorBase2.subscribe('change',this.$SingleSelectorBase15.bind(this));c('DOM').setContent(this.$SingleSelectorBase4,s.getRoot());this.$SingleSelectorBase9.setMenu(s);this.$SingleSelectorBase16=null;}};q.prototype.getMenu=function(){'use strict';return this.$SingleSelectorBase21||this.$SingleSelectorBase2;};q.prototype.enable=function(){'use strict';c('Button').setEnabled(this.$SingleSelectorBase1,true);this.$SingleSelectorBase6.enable();};q.prototype.disable=function(){'use strict';c('Button').setEnabled(this.$SingleSelectorBase1,false);this.$SingleSelectorBase6.disable();};q.prototype.$SingleSelectorBase12=function(){'use strict';return (c('Style').isFixed(this.$SingleSelectorBase1)&&!c('Style').isFixed(this.$SingleSelectorBase5.getRoot().parentNode));};q.prototype.align=function(){'use strict';if(!this.$SingleSelectorBase16)this.$SingleSelectorBase16=this.getAlignment();this.$SingleSelectorBase16.align();var s=c('Rect').getElementBounds(this.$SingleSelectorBase2.getRoot()),t=c('LayerBounds').getViewportRectForContext(this.$SingleSelectorBase1),u=s.t-t.t,v=t.b-s.b,w=s.l-t.l,x=t.r-s.r,y=this.$SingleSelectorBase5.getRoot();if(u<10){r(y,'top',-u+10);}else if(v<10)r(y,'top',v-10);if(w<10){r(y,'left',-w+10);}else if(x<10)r(y,'left',x-10);var z=c('getOverlayZIndex')(this.$SingleSelectorBase1,this.$SingleSelectorBase5.getInsertParent());c('Style').set(this.$SingleSelectorBase5.getRoot(),'z-index',z>200?z:'');};q.prototype.getAlignment=function(){'use strict';return new (c('Alignment'))(new m(this.$SingleSelectorBase5.getRoot(),m.TOP,m.LEFT),new m(this.$SingleSelectorBase13(),n,m.MIDDLE),new m(this.$SingleSelectorBase23(),n,m.MIDDLE));};q.prototype.$SingleSelectorBase23=function(){'use strict';return c('DOMQuery').find(this.$SingleSelectorBase1,"._55pe");};q.prototype.getSelectedItem=function(){'use strict';var s=null;if(this.$SingleSelectorBase3!==o){this.getMenu().forEachItem(function(t){if(t.getValue()===this.$SingleSelectorBase3){s===null||j(0);s=t;}}.bind(this));}else this.getMenu().forEachItem(function(t){if(c('SelectableMenuUtils').isSelected(t)){s===null||j(0);s=t;}});s!==null||j(0);return s;};q.prototype.$SingleSelectorBase13=function(){'use strict';return c('DOMQuery').find(this.getSelectedItem().getRoot(),"._54nh");};q.prototype.destroy=function(){'use strict';this.$SingleSelectorBase2&&this.$SingleSelectorBase2.destroy();this.$SingleSelectorBase6.destroy();this.$SingleSelectorBase5.destroy();};function r(s,t,u){c('Style').set(s,t,c('Style').getFloat(s,t)+u+'px');}f.exports=q;}),null);
__d('XUISingleSelectorButton.react',['ix','Image.react','React','XUIPopoverButton.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return (c('React').createElement(c('XUIPopoverButton.react'),babelHelpers['extends']({},this.props,{chevron:c('React').createElement(c('Image.react'),{src:h("101343")})})));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('XUISingleSelector.react',['InlineBlock.react','React','ReactDOM','ReactSelectorUtils','ReactXUIMenu','SingleSelectorBase','SubscriptionsHandler','XUISingleSelectorButton.react','areEqual','cloneWithProps_DEPRECATED'],(function a(b,c,d,e,f,g){var h,i,j=c('React').PropTypes,k=c('ReactXUIMenu').SelectableMenu,l=c('ReactXUIMenu').SelectableItem;h=babelHelpers.inherits(m,c('React').Component);i=h&&h.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=i.constructor).call.apply(n,[this].concat(q)),this.$XUISingleSelector1=null,this.$XUISingleSelector2=null,this.$XUISingleSelector3=null,this.flattenMenuItems=function(){return c('React').Children.toArray(this.props.children).filter(function(s){return s;});}.bind(this),this.processMenuItems=function(){return c('ReactSelectorUtils').processMenuItems(this.flattenMenuItems(),this.getValue());}.bind(this),this.setMenuValue=function(s){this.$XUISingleSelector2.setValueWithoutChange(s);}.bind(this),this.getValue=function(){return this.props.value!==undefined?this.props.value:this.state.value;}.bind(this),this.onChange=function(s,t){if(this.props.value===undefined){this.setState({value:t.value});}else this.setMenuValue(this.props.value);if(this.props.onChange)this.props.onChange(t);}.bind(this),this.$XUISingleSelector4=function(){var s=c('React').createElement(k,{className:this.props.menuClassName,maxheight:this.props.maxheight},this.processMenuItems().items);return new s.type(s.props);}.bind(this),this.state={value:this.props.value!==undefined?this.props.value:this.props.defaultValue!==undefined?this.props.defaultValue:this.flattenMenuItems()[0].props.value},o;}m.prototype.componentWillReceiveProps=function(){'use strict';if(this.props.value!==undefined)this.setState({value:this.props.value});};m.prototype.componentDidMount=function(){'use strict';var n=c('ReactDOM').findDOMNode(this.refs.button);this.$XUISingleSelector2=new (c('SingleSelectorBase'))(n,this.$XUISingleSelector4(),{disabled:this.props.disabled},{behaviors:this.props.behaviors});this.$XUISingleSelector3=new (c('SubscriptionsHandler'))();this.$XUISingleSelector3.addSubscriptions(this.$XUISingleSelector2.subscribe('change',this.onChange));if(this.props.onShow)this.$XUISingleSelector3.addSubscriptions(this.$XUISingleSelector2.subscribe('show',this.props.onShow));if(this.props.onHide)this.$XUISingleSelector3.addSubscriptions(this.$XUISingleSelector2.subscribe('hide',this.props.onHide));};m.prototype.componentDidUpdate=function(n){'use strict';if(!c('areEqual')(n.children,this.props.children))this.$XUISingleSelector2.setMenu(this.$XUISingleSelector4());if(n.disabled!==this.props.disabled)if(!this.props.disabled){this.$XUISingleSelector2.enable();}else this.$XUISingleSelector2.disable();this.setMenuValue(this.getValue());};m.prototype.componentWillUnmount=function(){'use strict';this.$XUISingleSelector2.destroy();if(this.$XUISingleSelector3){this.$XUISingleSelector3.release();this.$XUISingleSelector3=null;}};m.prototype.render=function(){'use strict';var n=this.processMenuItems().selectedItem,o;if(n.props.icon)o=c('cloneWithProps_DEPRECATED')(n.props.icon,{});var p={ref:'button',label:n.props.label||n.props.children,image:o},q=void 0;if(this.props.customButton){q=c('React').cloneElement(this.props.customButton,p);}else q=c('React').createElement(c('XUISingleSelectorButton.react'),babelHelpers['extends']({},p,{disabled:this.props.disabled,size:this.props.size,suppressed:this.props.suppressed,maxwidth:this.props.maxwidth}));return (c('React').createElement(c('InlineBlock.react'),babelHelpers['extends']({},this.props,{alignv:'middle'}),c('React').createElement('input',{type:'hidden',autoComplete:'off',name:this.props.name,value:n.props.value}),q));};m.propTypes={name:j.string,maxheight:j.number,maxwidth:j.number,menuClassName:j.string,defaultValue:j.any,disabled:j.bool,size:j.oneOf(['small','medium','large','xlarge','xxlarge']),suppressed:j.bool,value:j.any,onChange:j.func,onShow:j.func,onHide:j.func,behaviors:j.array,customButton:j.element};m.defaultProps={disabled:false,size:'medium'};m.Option=l;f.exports=m;}),null);
__d('AtSignMentionsStrategy',['DocumentMentionsRegex'],(function a(b,c,d,e,f,g){var h=c('DocumentMentionsRegex').PUNCTUATION,i=['@','\\uff20'].join(''),j='[^'+i+h+'\\s]',k='(?:'+'\\.[ |$]|'+' |'+'['+h+']|'+')',l=new RegExp('(?:^|\\s|\\()('+'['+i+']'+'((?:'+j+k+'){0,20})'+')$'),m={name:'AtSignMentionsStrategy',findMentionableString:function n(o){var p=l.exec(o);if(p!==null){var q=p[2];if(q.length)return {matchingString:q,leadOffset:p[1].length};}return null;}};f.exports=m;}),null);
__d('FilteredSearchSource',['AbstractSearchSource'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('AbstractSearchSource'));i=h&&h.prototype;function j(k,l){'use strict';i.constructor.call(this);this.$FilteredSearchSource1=k;this.$FilteredSearchSource2=l;}j.prototype.bootstrapImpl=function(k){'use strict';this.$FilteredSearchSource2.bootstrap(k);};j.prototype.searchImpl=function(k,l,m){'use strict';var n=function(o,p){o=this.$FilteredSearchSource3(o,p);l(o,p);}.bind(this);this.$FilteredSearchSource2.search(k,n,m);};j.prototype.$FilteredSearchSource3=function(k,l){'use strict';var m=this.$FilteredSearchSource1;return k.filter(function(n){return m(n,l);});};f.exports=j;}),null);
__d('filterCapitalizedNames',['TokenizeUtil'],(function a(b,c,d,e,f,g){function h(l,m){return i(l)&&(m.length>=5||j(l,m));}function i(l){var m=l.getAuxiliaryData()||k;return !m.disableAutosuggest&&!!(l.getType()==='user'||m.connectedPage);}function j(l,m){return c('TokenizeUtil').isExactMatch(m,l.getTitle());}var k={};f.exports=h;}),null);
__d("XDeveloperDocumentationController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/docs\/{?path1}\/{?path2}\/{?path3}\/{?path4}\/{?path5}\/{?path6}\/",{path:{type:"String"},version:{type:"String"},preview:{type:"Exists",defaultValue:false},revisionid:{type:"Int"},locale:{type:"String"},path1:{type:"String"},path2:{type:"String"},path3:{type:"String"},path4:{type:"String"},path5:{type:"String"},path6:{type:"String"}});}),null);