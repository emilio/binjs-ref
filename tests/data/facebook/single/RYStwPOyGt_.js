if (self.CavalryLogger) { CavalryLogger.start_js(["t9dSU"]); }

__d('EmojiInputDecorator',['EmojiRenderer','immutable'],(function a(b,c,d,e,f,g){'use strict';var h=c('immutable').List,i='.',j='emoji';function k(l,m,n){this.$EmojiInputDecorator1=l;this.$EmojiInputDecorator2=m;this.$EmojiInputDecorator3=n;}k.prototype.getDecorations=function(l,m){var n=this.$EmojiInputDecorator2?this.$EmojiInputDecorator2.getDecorations(l,m).toArray():Array(l.getText().length).fill(null),o=0;c('EmojiRenderer').parse(l.getText()).forEach(function(p){var q=p.offset,r=q+p.length,s=true;for(var t=q;t<r;t++)if(n[t]!=null){s=false;break;}if(s){for(var u=q;u<r;u++)n[u]=j+i+o;o++;}});return h(n);};k.prototype.getComponentForKey=function(l){if(!this.$EmojiInputDecorator2||l.split(i)[0]===j)return this.$EmojiInputDecorator1;return this.$EmojiInputDecorator2.getComponentForKey(l);};k.prototype.getPropsForKey=function(l){if(!this.$EmojiInputDecorator2||l.split(i)[0]===j)return this.$EmojiInputDecorator3;return this.$EmojiInputDecorator2.getPropsForKey(l);};f.exports=k;}),null);
__d('keyCommandBackspaceEmoji',['EditorState','EmojiRenderer','UnicodeUtils','moveSelectionBackward','removeTextWithStrategy'],(function a(b,c,d,e,f,g){var h=function i(j){var k=c('removeTextWithStrategy')(j,function(m){var n=m.getSelection(),o=n.getAnchorOffset(),p=m.getCurrentContent().getBlockForKey(n.getAnchorKey()).getText(),q=p[o-1],r=null;if(q){var s=c('EmojiRenderer').parse(p);for(var t=0;t<s.length;t++)if(s[t].offset<=o&&s[t].offset+s[t].length>=o){r=s[t].length;break;}if(!r)r=c('UnicodeUtils').getUTF16Length(q,0);}return c('moveSelectionBackward')(m,r||1);},'backward');if(k===j.getCurrentContent())return null;var l=j.getSelection();return c('EditorState').push(j,k.set('selectionBefore',l),l.isCollapsed()?'backspace-character':'remove-range');};f.exports=h;}),null);
__d('keyCommandDeleteEmoji',['EditorState','EmojiRenderer','UnicodeUtils','moveSelectionForward','removeTextWithStrategy'],(function a(b,c,d,e,f,g){var h=function i(j){var k=c('removeTextWithStrategy')(j,function(m){var n=m.getSelection(),o=n.getAnchorOffset(),p=m.getCurrentContent().getBlockForKey(n.getAnchorKey()).getText(),q=p[o],r=null;if(q){var s=c('EmojiRenderer').parse(p);for(var t=0;t<s.length;t++)if(s[t].offset<=o&&s[t].offset+s[t].length>=o){r=s[t].length;break;}if(!r)r=c('UnicodeUtils').getUTF16Length(q,0);}return c('moveSelectionForward')(m,r||1);},'forward');if(k===j.getCurrentContent())return null;var l=j.getSelection();return c('EditorState').push(j,k.set('selectionBefore',l),l.isCollapsed()?'delete-character':'remove-range');};f.exports=h;}),null);
__d('addEmojiInput',['EditorState','EmojiInputDecorator','EmojiSpan.react','React','keyCommandBackspaceEmoji','keyCommandDeleteEmoji'],(function a(b,c,d,e,f,g){'use strict';var h=function(i){return function(){var j,k;j=babelHelpers.inherits(l,c('React').Component);k=j&&j.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=k.constructor).call.apply(m,[this].concat(p)),this.$_class1=function(r){var s=null;switch(r){case 'backspace':s=c('keyCommandBackspaceEmoji')(this.props.editorState);break;case 'delete':s=c('keyCommandDeleteEmoji')(this.props.editorState);break;}if(s){this.props.onChange(s);return 'handled';}return 'not-handled';}.bind(this),n;}l.prototype.blur=function(){'use strict';var m=this.refs.component;m&&typeof m.blur==='function'&&m.blur();};l.prototype.click=function(){'use strict';var m=this.refs.component;m&&typeof m.click==='function'&&m.click();};l.prototype.focus=function(){'use strict';var m=this.refs.component;m&&typeof m.focus==='function'&&m.focus();};l.prototype.render=function(){'use strict';var m=this.props.editorState,n=m.getDecorator();if(!(n instanceof c('EmojiInputDecorator')))m=c('EditorState').set(this.props.editorState,{decorator:new (c('EmojiInputDecorator'))(c('EmojiSpan.react'),n,{size:16})});return (c('React').createElement(i,babelHelpers['extends']({},this.props,{editorState:m,handleKeyCommand:this.$_class1,ref:'component'})));};return l;}();}.bind(this);f.exports=h;}),null);
__d('EventHandlerUtils',['DataStore'],(function a(b,c,d,e,f,g){var h={introspect:function i(j){var k=[],l=j;do{var m=c('DataStore').get(l,'Event.listeners');if(m)k.unshift({elementRef:l,handlers:m});l=l.parentNode;}while(l!=null);return k;}};f.exports=h;}),null);
__d('ModalLayerBugNub',['DOM','ModalLayer'],(function a(b,c,d,e,f,g){var h=false,i={init:function j(k){if(h)return;h=true;c('ModalLayer').subscribe('show',function(l,m){c('DOM').appendContent(m.getLayerContentRoot(),k);});c('ModalLayer').subscribe('hide',function(l,m){c('DOM').remove(k);});}};f.exports=i;}),null);
__d('MouseEventAccumulator.react',['React'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;function j(){var k,l;for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];return l=(k=i.constructor).call.apply(k,[this].concat(n)),this.state={hover:false,clicked:false},l;}j.prototype.render=function(){var k=this.props,l=k.render,m=babelHelpers.objectWithoutProperties(k,['render']);return (c('React').createElement('span',babelHelpers['extends']({},m,{onMouseEnter:function(){return this.setState({hover:true});}.bind(this),onMouseLeave:function(){return this.setState({hover:false});}.bind(this),onClick:function(){return this.setState({clicked:true});}.bind(this)}),l(this.state)));};f.exports=j;}),null);
__d("XBrowserPreRenderLoggingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/logging\/prerender\/",{href:{type:"String",required:true},page_id:{type:"String",required:true},script_path:{type:"String",required:true},session_name:{type:"String"},visibility_state:{type:"String",required:true}});}),null);
__d('ReportPreRender',['ScriptPath','XBrowserPreRenderLoggingController','pageID'],(function a(b,c,d,e,f,g){var h=null,i=null;if(document.visibilityState){h='visibilitychange';i='visibilityState';}else if(document.webkitVisibilityState){h='webkitvisibilitychange';i='webkitVisibilityState';}function j(){var k=document[i];if(k=='visible')document.removeEventListener(h,j);var l=c('XBrowserPreRenderLoggingController').getURIBuilder().setString('href',window.location.href).setString('page_id',c('pageID')).setString('script_path',c('ScriptPath').getScriptPath()).setString('visibility_state',k).setString('session_name',window.name);new Image().src=l.getURI();}if(i&&document[i]=='prerender'){j();document.addEventListener(h,j);}f.exports={};}),null);