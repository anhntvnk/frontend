(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{bec4cb069061681fff68:function(t,e,o){"use strict";var r=o("8af190b70a6bc55c6f1b"),n=o("e7bef42b0fb0f143cb30"),a=o.n(n),l=function(t,e){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)};function i(t,e){function o(){this.constructor=t}l(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}var s=function(){return(s=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};function u(t,e,o,r){return new(o||(o=Promise))(function(n,a){function l(t){try{s(r.next(t))}catch(t){a(t)}}function i(t){try{s(r.throw(t))}catch(t){a(t)}}function s(t){t.done?n(t.value):new o(function(e){e(t.value)}).then(l,i)}s((r=r.apply(t,e||[])).next())})}function c(t,e){var o,r,n,a,l={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(o)throw new TypeError("Generator is already executing.");for(;l;)try{if(o=1,r&&(n=2&a[0]?r.return:a[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,a[1])).done)return n;switch(r=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,r=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(n=(n=l.trys).length>0&&n[n.length-1])&&(6===a[0]||2===a[0])){l=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){l.label=a[1];break}if(6===a[0]&&l.label<n[1]){l.label=n[1],n=a;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(a);break}n[2]&&l.ops.pop(),l.trys.pop();continue}a=e.call(t,l)}catch(t){a=[6,t],r=0}finally{o=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}var p={graph_id:null,legend_toggle:!1,graphID:null,options:{colors:null},data:null,rows:null,columns:null,diffdata:null,chartEvents:null,legendToggle:!1,chartActions:null,getChartWrapper:function(t,e){},getChartEditor:null,className:"",style:{},formatters:null,spreadSheetUrl:null,spreadSheetQueryParameters:{headers:1,gid:1},rootProps:{},chartWrapperParams:{},controls:null,render:null,toolbarItems:null,toolbarID:null},h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handleGoogleChartsLoaderScriptLoaded=function(t){var o=e.props,r=o.chartVersion,n=o.chartPackages,a=o.chartLanguage,l=o.mapsApiKey,i=o.onLoad;t.charts.load(r||"current",{packages:n||["corechart","controls"],language:a||"en",mapsApiKey:l}),t.charts.setOnLoadCallback(function(){i(t)})},e}return i(e,t),e.prototype.shouldComponentUpdate=function(t){return t.chartPackages===this.props.chartPackages},e.prototype.render=function(){var t=this,e=this.props.onError;return Object(r.createElement)(a.a,{url:"https://www.gstatic.com/charts/loader.js",onError:e,onLoad:function(){var e=window;e.google&&t.handleGoogleChartsLoaderScriptLoaded(e.google)}})},e}(r.Component),g=0,d=function(){return"reactgooglegraph-"+(g+=1)},f=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],m=function(t,e,o){return void 0===o&&(o={}),u(void 0,void 0,void 0,function(){return c(this,function(r){return[2,new Promise(function(r,n){var a=o.headers?"headers="+o.headers:"headers=0",l=o.query?"&tq="+encodeURIComponent(o.query):"",i=o.gid?"&gid="+o.gid:"",s=o.sheet?"&sheet="+o.sheet:"",u=o.access_token?"&access_token="+o.access_token:"",c=e+"/gviz/tq?"+(""+a+i+s+l+u);new t.visualization.Query(c).send(function(t){t.isError()?n("Error in query:  "+t.getMessage()+" "+t.getDetailedMessage()):r(t.getDataTable())})})]})})},v=Object(r.createContext)(p),C=v.Provider,b=v.Consumer,y=function(t){var e=t.children,o=t.value;return Object(r.createElement)(C,{value:o},e)},w=function(t){var e=t.render;return Object(r.createElement)(b,null,function(t){return e(t)})},D="#CCCCCC",E=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={hiddenColumns:[]},e.listenToLegendToggle=function(){var t=e.props,o=t.google,r=t.googleChartWrapper;o.visualization.events.addListener(r,"select",function(){var t=r.getChart().getSelection(),o=r.getDataTable();if(0!==t.length&&null===t[0].row&&null!==o){var n=t[0].column,a=e.getColumnID(o,n);e.state.hiddenColumns.includes(a)?e.setState(function(t){return s({},t,{hiddenColumns:t.hiddenColumns.filter(function(t){return t!==a}).slice()})}):e.setState(function(t){return s({},t,{hiddenColumns:t.hiddenColumns.concat([a])})})}})},e.applyFormatters=function(t,o){for(var r=e.props.google,n=0,a=o;n<a.length;n++){var l=a[n];switch(l.type){case"ArrowFormat":(i=new r.visualization.ArrowFormat(l.options)).format(t,l.column);break;case"BarFormat":(i=new r.visualization.BarFormat(l.options)).format(t,l.column);break;case"ColorFormat":for(var i=new r.visualization.ColorFormat(l.options),s=0,u=l.ranges;s<u.length;s++){var c=u[s];i.addRange.apply(i,c)}i.format(t,l.column);break;case"DateFormat":(i=new r.visualization.DateFormat(l.options)).format(t,l.column);break;case"NumberFormat":(i=new r.visualization.NumberFormat(l.options)).format(t,l.column);break;case"PatternFormat":(i=new r.visualization.PatternFormat(l.options)).format(t,l.column)}}},e.getColumnID=function(t,e){return t.getColumnId(e)||t.getColumnLabel(e)},e.draw=function(t){var o=t.data,r=t.diffdata,n=t.rows,a=t.columns,l=t.options,i=t.legend_toggle,s=t.legendToggle,p=t.chartType,h=t.formatters,g=t.spreadSheetUrl,d=t.spreadSheetQueryParameters;return u(e,void 0,void 0,function(){var t,e,u,f,v,C,b,y,w,D,E,T,O,z;return c(this,function(c){switch(c.label){case 0:return t=this.props,e=t.google,u=t.googleChartWrapper,v=null,null!==r&&(C=e.visualization.arrayToDataTable(r.old),b=e.visualization.arrayToDataTable(r.new),v=e.visualization[p].prototype.computeDiff(C,b)),null===o?[3,1]:(f=Array.isArray(o)?e.visualization.arrayToDataTable(o):new e.visualization.DataTable(o),[3,5]);case 1:return null===n||null===a?[3,2]:(f=e.visualization.arrayToDataTable([a].concat(n)),[3,5]);case 2:return null===g?[3,4]:[4,m(e,g,d)];case 3:return f=c.sent(),[3,5];case 4:f=e.visualization.arrayToDataTable([]),c.label=5;case 5:for(y=f.getNumberOfColumns(),w=0;w<y;w+=1)D=this.getColumnID(f,w),this.state.hiddenColumns.includes(D)&&(E=f.getColumnLabel(w),T=f.getColumnId(w),O=f.getColumnType(w),f.removeColumn(w),f.addColumn({label:E,id:T,type:O}));return z=u.getChart(),"Timeline"===u.getChartType()&&z&&z.clearChart(),u.setChartType(p),u.setOptions(l),u.setDataTable(f),u.draw(),null!==this.props.googleChartDashboard&&this.props.googleChartDashboard.draw(f),null!==v&&(u.setDataTable(v),u.draw()),null!==h&&(this.applyFormatters(f,h),u.setDataTable(f),u.draw()),!0!==s&&!0!==i||this.grayOutHiddenColumns({options:l}),[2]}})})},e.grayOutHiddenColumns=function(t){var o=t.options,r=e.props.googleChartWrapper,n=r.getDataTable();if(null!==n){var a=n.getNumberOfColumns();if(!1!==e.state.hiddenColumns.length>0){var l=Array.from({length:a-1}).map(function(t,r){var a=e.getColumnID(n,r+1);return e.state.hiddenColumns.includes(a)?D:"undefined"!==typeof o.colors&&null!==o.colors?o.colors[r]:f[r]});r.setOptions(s({},o,{colors:l})),r.draw()}}},e.onResize=function(){e.props.googleChartWrapper.draw()},e}return i(e,t),e.prototype.componentDidMount=function(){this.draw(this.props),window.addEventListener("resize",this.onResize),(this.props.legend_toggle||this.props.legendToggle)&&this.listenToLegendToggle()},e.prototype.componentWillUnmount=function(){var t=this.props,e=t.google,o=t.googleChartWrapper;window.removeEventListener("resize",this.onResize),e.visualization.events.removeAllListeners(o),"Timeline"===o.getChartType()&&o.getChart()&&o.getChart().clearChart()},e.prototype.componentDidUpdate=function(){this.draw(this.props)},e.prototype.render=function(){return null},e}(r.Component),T=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.componentDidMount=function(){},e.prototype.componentWillUnmount=function(){},e.prototype.shouldComponentUpdate=function(){return!1},e.prototype.render=function(){var t=this.props,e=t.google,o=t.googleChartWrapper,n=t.googleChartDashboard;return Object(r.createElement)(w,{render:function(t){return Object(r.createElement)(E,s({},t,{google:e,googleChartWrapper:o,googleChartDashboard:n}))}})},e}(r.Component),O=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.shouldComponentUpdate=function(){return!1},e.prototype.listenToEvents=function(t){var e=this,o=t.chartEvents,r=t.google,n=t.googleChartWrapper;if(null!==o){r.visualization.events.removeAllListeners(n);for(var a=function(t){var o=t.eventName,a=t.callback;r.visualization.events.addListener(n,o,function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];a({chartWrapper:n,props:e.props,google:r,eventArgs:t})})},l=0,i=o;l<i.length;l++){a(i[l])}}},e.prototype.render=function(){var t=this,e=this.props,o=e.google,n=e.googleChartWrapper;return Object(r.createElement)(w,{render:function(e){return t.listenToEvents({chartEvents:e.chartEvents||null,google:o,googleChartWrapper:n}),null}})},e}(r.Component),z=0,W=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={googleChartWrapper:null,googleChartDashboard:null,googleChartControls:null,googleChartEditor:null,isReady:!1},e.graphID=null,e.dashboard_ref=Object(r.createRef)(),e.toolbar_ref=Object(r.createRef)(),e.getGraphID=function(){var t,o=e.props,r=o.graphID,n=o.graph_id;return t=null===r&&null===n?null===e.graphID?d():e.graphID:null!==r&&null===n?r:null!==n&&null===r?n:r,e.graphID=t,e.graphID},e.getControlID=function(t,e){return z+=1,"undefined"===typeof t?"googlechart-control-"+e+"-"+z:t},e.addControls=function(t,o){var r=e.props,n=r.google,a=r.controls,l=null===a?null:a.map(function(t,o){var r=t.controlID,a=t.controlType,l=t.options,i=t.controlWrapperParams,u=e.getControlID(r,o);return{controlProp:t,control:new n.visualization.ControlWrapper(s({containerId:u,controlType:a,options:l},i))}});if(null===l)return null;o.bind(l.map(function(t){return t.control}),t);for(var i=function(o){for(var r=o.control,a=o.controlProp.controlEvents,l=function(o){var a=o.callback,l=o.eventName;n.visualization.events.removeListener(r,l,a),n.visualization.events.addListener(r,l,function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];a({chartWrapper:t,controlWrapper:r,props:e.props,google:n,eventArgs:o})})},i=0,s=void 0===a?[]:a;i<s.length;i++){l(s[i])}},u=0,c=l;u<c.length;u++){i(c[u])}return l},e.renderChart=function(){var t=e.props,o=t.width,n=t.height,a=t.options,l=t.style,i=t.className,u=t.rootProps,c=t.google,p=s({height:n||a&&a.height,width:o||a&&a.width},l);return Object(r.createElement)("div",s({id:e.getGraphID(),style:p,className:i},u),e.state.isReady&&null!==e.state.googleChartWrapper?Object(r.createElement)(r.Fragment,null,Object(r.createElement)(T,{googleChartWrapper:e.state.googleChartWrapper,google:c,googleChartDashboard:e.state.googleChartDashboard}),Object(r.createElement)(O,{googleChartWrapper:e.state.googleChartWrapper,google:c})):null)},e.renderControl=function(t){return void 0===t&&(t=function(t){t.control,t.controlProp;return!0}),e.state.isReady&&null!==e.state.googleChartControls?Object(r.createElement)(r.Fragment,null,e.state.googleChartControls.filter(function(e){var o=e.controlProp,r=e.control;return t({control:r,controlProp:o})}).map(function(t){var e=t.control;t.controlProp;return Object(r.createElement)("div",{key:e.getContainerId(),id:e.getContainerId()})})):null},e.renderToolBar=function(){return null===e.props.toolbarItems?null:Object(r.createElement)("div",{ref:e.toolbar_ref})},e}return i(e,t),e.prototype.componentDidMount=function(){var t=this.props,e=t.options,o=t.google,r=t.chartType,n=t.chartWrapperParams,a=t.toolbarItems,l=t.getChartEditor,i=t.getChartWrapper,u=s({chartType:r,options:e,containerId:this.getGraphID()},n),c=new o.visualization.ChartWrapper(u);c.setOptions(e),i(c,o);var p=new o.visualization.Dashboard(this.dashboard_ref),h=this.addControls(c,p);null!==a&&o.visualization.drawToolbar(this.toolbar_ref.current,a);var g=null;null!==l&&l({chartEditor:g=new o.visualization.ChartEditor,chartWrapper:c,google:o}),this.setState({googleChartEditor:g,googleChartControls:h,googleChartDashboard:p,googleChartWrapper:c,isReady:!0})},e.prototype.componentDidUpdate=function(){if(null!==this.state.googleChartWrapper&&null!==this.state.googleChartDashboard&&null!==this.state.googleChartControls)for(var t=this.props.controls,e=0;e<t.length;e+=1){var o=t[e],r=o.controlType,n=o.options,a=o.controlWrapperParams;a&&"state"in a&&this.state.googleChartControls[e].control.setState(a.state),this.state.googleChartControls[e].control.setOptions(n),this.state.googleChartControls[e].control.setControlType(r)}},e.prototype.shouldComponentUpdate=function(t,e){return this.state.isReady!==e.isReady||t.controls!==this.props.controls},e.prototype.render=function(){var t=this.props,e=t.width,o=t.height,n=t.options,a=t.style,l=s({height:o||n&&n.height,width:e||n&&n.width},a);return null!==this.props.render?Object(r.createElement)("div",{ref:this.dashboard_ref,style:l},Object(r.createElement)("div",{ref:this.toolbar_ref,id:"toolbar"}),this.props.render({renderChart:this.renderChart,renderControl:this.renderControl,renderToolbar:this.renderToolBar})):Object(r.createElement)("div",{ref:this.dashboard_ref,style:l},this.renderControl(function(t){return"bottom"!==t.controlProp.controlPosition}),this.renderChart(),this.renderControl(function(t){return"bottom"===t.controlProp.controlPosition}),this.renderToolBar())},e}(r.Component),I=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._isMounted=!1,e.state={loadingStatus:"loading",google:null},e.onLoad=function(t){if(e.isFullyLoaded(t))e.onSuccess(t);else var o=setInterval(function(){var t=window.google;e._isMounted?t&&e.isFullyLoaded(t)&&(clearInterval(o),e.onSuccess(t)):clearInterval(o)},1e3)},e.onSuccess=function(t){e.setState({loadingStatus:"ready",google:t})},e.onError=function(){e.setState({loadingStatus:"errored"})},e}return i(e,t),e.prototype.render=function(){var t=this.props,e=t.chartLanguage,o=t.chartPackages,n=t.chartVersion,a=t.mapsApiKey,l=t.loader,i=t.errorElement;return Object(r.createElement)(y,{value:this.props},"ready"===this.state.loadingStatus&&null!==this.state.google?Object(r.createElement)(W,s({},this.props,{google:this.state.google})):"errored"===this.state.loadingStatus&&i?i:l,Object(r.createElement)(h,s({},{chartLanguage:e,chartPackages:o,chartVersion:n,mapsApiKey:a},{onLoad:this.onLoad,onError:this.onError})))},e.prototype.componentDidMount=function(){this._isMounted=!0},e.prototype.componentWillUnmount=function(){this._isMounted=!1},e.prototype.isFullyLoaded=function(t){var e=this.props,o=e.controls,r=e.toolbarItems,n=e.getChartEditor;return t&&t.visualization&&t.visualization.ChartWrapper&&t.visualization.Dashboard&&(!o||t.visualization.ChartWrapper)&&(!n||t.visualization.ChartEditor)&&(!r||t.visualization.drawToolbar)},e.defaultProps=p,e}(r.Component);e.a=I}}]);