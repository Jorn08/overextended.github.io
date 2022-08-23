"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6781],{9613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(v,l(l({ref:t},c),{},{components:n})):r.createElement(v,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7640:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(9496),a=n(1626),o="tabItem_zeWL";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},866:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(5443),a=n(9496),o=n(1626),l=n(4252),i=n(1135),u=n(9162),s=n(3946),c="tabList_gs2P",p="tabItem_Ugfh";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,v=e.values,f=e.groupId,y=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),x=(0,i.l)(h,(function(e,t){return e.value===t.value}));if(x.length>0)throw new Error('Docusaurus error: Duplicate values "'+x.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,u.U)(),N=g.tabGroupChoices,_=g.setTabGroupChoices,w=(0,a.useState)(k),I=w[0],O=w[1],T=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var C=N[f];null!=C&&C!==I&&h.some((function(e){return e.value===C}))&&O(C)}var S=function(e){var t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==I&&(E(t),O(r),null!=f&&_(f,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=T.indexOf(e.currentTarget)+1;n=null!=(r=T[a])?r:T[0];break;case"ArrowLeft":var o,l=T.indexOf(e.currentTarget)-1;n=null!=(o=T[l])?o:T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},y)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return T.push(e)},onKeyDown:P,onFocus:S,onClick:S},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(b.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function m(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},8039:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(5443),a=n(3010),o=(n(9496),n(9613)),l=n(866),i=n(7640),u=["components"],s={},c="ESX",p={unversionedId:"ox_inventory/Getting Started/esx",id:"ox_inventory/Getting Started/esx",title:"ESX",description:"Compatibility",source:"@site/docs/ox_inventory/Getting Started/esx.md",sourceDirName:"ox_inventory/Getting Started",slug:"/ox_inventory/Getting Started/esx",permalink:"/docs/ox_inventory/Getting Started/esx",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Getting Started/esx.md",tags:[],version:"current",lastUpdatedAt:1661298920,formattedLastUpdatedAt:"8/23/2022",frontMatter:{},sidebar:"ox_inventory",previous:{title:"Common Issues",permalink:"/docs/ox_inventory/Getting Started/issues"},next:{title:"QBCore",permalink:"/docs/ox_inventory/Getting Started/qb"}},d={},m=[{value:"Compatibility",id:"compatibility",level:2},{value:"Installation",id:"installation",level:2},{value:"Optional optimisation",id:"optional-optimisation",level:2}],v={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"esx"},"ESX"),(0,o.kt)("h2",{id:"compatibility"},"Compatibility"),(0,o.kt)("p",null,"Ox Inventory is a complete replacement for existing item, inventory, and weapon systems; it is inherently incompatible with ESX and any resources that rely on default behaviour."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Loadouts do not exist and weapons are treated as items."),(0,o.kt)("li",{parentName:"ul"},"Standard shops and stashes (i.e. esx_shops, esx_weaponshop, and esx_policejob)."),(0,o.kt)("li",{parentName:"ul"},"Resources that alter the default esx inventory or provide a ui (i.e. esx_trunkinventory, esx_inventoryhud).")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use a compatible version of ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/esx-framework/esx-legacy"},"ESX Legacy")," (1.6.0+)."),(0,o.kt)("li",{parentName:"ul"},"Modify your ",(0,o.kt)("inlineCode",{parentName:"li"},"server.cfg"),", starting ox_inventory immediately after es_extended.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"start oxmysql\nstart ox_lib\nstart es_extended\nstart qtarget\nstart ox_inventory\n")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"fresh",label:"Clean install",default:!0,mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Execute the query inside ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/overextended/ox_inventory/blob/main/setup/install.sql"},"install.sql")," to create the ox_inventory database table."))),(0,o.kt)(i.Z,{value:"convert_esx",label:"Convert ESX",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Execute the query inside ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/overextended/ox_inventory/blob/main/setup/install.sql"},"install.sql")," to create the ox_inventory database table."),(0,o.kt)("li",{parentName:"ul"},"Open ",(0,o.kt)("inlineCode",{parentName:"li"},"fxmanifest.lua")," and uncomment ",(0,o.kt)("inlineCode",{parentName:"li"},"server_script 'setup/convert.lua'"),"."),(0,o.kt)("li",{parentName:"ul"},"Start the server and type ",(0,o.kt)("inlineCode",{parentName:"li"},"convertinventory linden")," into the server console."),(0,o.kt)("li",{parentName:"ul"},"Disable ",(0,o.kt)("inlineCode",{parentName:"li"},"setup/convert.lua")," and restart the server."))),(0,o.kt)(i.Z,{value:"convert_linden",label:"Upgrade from Linden Inventory",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Execute the query inside ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/overextended/ox_inventory/blob/main/setup/upgrade.sql"},"upgrade.sql"),"."),(0,o.kt)("li",{parentName:"ul"},"Open ",(0,o.kt)("inlineCode",{parentName:"li"},"fxmanifest.lua")," and uncomment ",(0,o.kt)("inlineCode",{parentName:"li"},"server_script 'setup/convert.lua'"),"."),(0,o.kt)("li",{parentName:"ul"},"Start the server and type ",(0,o.kt)("inlineCode",{parentName:"li"},"convertinventory linden")," into the server console."),(0,o.kt)("li",{parentName:"ul"},"Disable ",(0,o.kt)("inlineCode",{parentName:"li"},"setup/convert.lua")," and restart the server.")))),(0,o.kt)("h2",{id:"optional-optimisation"},"Optional optimisation"),(0,o.kt)("p",null,"All item related functions from xPlayer, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"xPlayer.getInventoryItem"),", have been modified for compatibility purposes; however they are considered deprecated."),(0,o.kt)("p",null,"The reasoning is fairly simple - there's now additional function references and overhead to consider. Fortunately, the new Inventory functions can be used directly and offer a great deal of improvements over the old ones."),(0,o.kt)("p",null,"You should read through the functions section for further information, but the following should give you a decent idea."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"esx",label:"ESX",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"if xPlayer.getInventoryItem('acetone').count > 2 and xPlayer.getInventoryItem('antifreeze').count > 4 and xPlayer.getInventoryItem('sudo').count > 9 then\n    xPlayer.removeInventoryItem(\"acetone\", 3)\n    xPlayer.removeInventoryItem(\"antifreeze\", 5)\n    xPlayer.removeInventoryItem(\"sudo\", 10)\nend\n"))),(0,o.kt)(i.Z,{value:"inventory",label:"Inventory",mdxType:"TabItem"},(0,o.kt)("p",null,"Add the following code somewhere in your resource to cache the exports metatable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local ox_inventory = exports.ox_inventory\n")),(0,o.kt)("p",null,"You will be able to reference any functions exposed through the export."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local items = ox_inventory:Search(source, 'count', {'acetone', 'antifreeze', 'sudo'})\nif items and items.acetone > 2 and items.antifreeze > 4 and items.sudo > 9 then\n    ox_inventory:RemoveItem(source, 'acetone', 3)\n    ox_inventory:RemoveItem(source, 'antifreeze', 5)\n    ox_inventory:RemoveItem(source, 'sudo', 10)\nend\n")))))}f.isMDXComponent=!0}}]);