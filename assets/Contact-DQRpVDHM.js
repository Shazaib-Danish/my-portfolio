import{c as tr,r as kr,j as C}from"./index-C-MFE5J_.js";import{C as me}from"./check-circle-CgrVWLFt.js";import{M as xc}from"./mail-BfIHzbzP.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=tr("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=tr("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=tr("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=tr("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),Lc=()=>{};var Oi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Fc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],c=n[e++],h=n[e++],d=((i&7)<<18|(o&63)<<12|(c&63)<<6|h&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],c=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|c&63)}}return t.join("")},Mo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],c=i+1<n.length,h=c?n[i+1]:0,d=i+2<n.length,f=d?n[i+2]:0,A=o>>2,T=(o&3)<<4|h>>4;let b=(h&15)<<2|f>>6,V=f&63;d||(V=64,c||(b=64)),r.push(e[A],e[T],e[b],e[V])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Oo(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Fc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],h=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const T=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||h==null||f==null||T==null)throw new jc;const b=o<<2|h>>4;if(r.push(b),f!==64){const V=h<<4&240|f>>2;if(r.push(V),T!==64){const N=f<<6&192|T;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class jc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uc=function(n){const t=Oo(n);return Mo.encodeByteArray(t,!0)},jn=function(n){return Uc(n).replace(/\./g,"")},Bc=function(n){try{return Mo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=()=>$c().__FIREBASE_DEFAULTS__,zc=()=>{if(typeof process>"u"||typeof Oi>"u")return;const n=Oi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Hc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Bc(n[1]);return t&&JSON.parse(t)},os=()=>{try{return Lc()||qc()||zc()||Hc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Gc=n=>{var t,e;return(e=(t=os())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},Wc=n=>{const t=Gc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Lo=()=>{var n;return(n=os())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Qc(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[jn(JSON.stringify(e)),jn(JSON.stringify(c)),""].join(".")}const Ge={};function Jc(){const n={prod:[],emulator:[]};for(const t of Object.keys(Ge))Ge[t]?n.emulator.push(t):n.prod.push(t);return n}function Yc(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Mi=!1;function Zc(n,t){if(typeof window>"u"||typeof document>"u"||!as(window.location.host)||Ge[n]===t||Ge[n]||Mi)return;Ge[n]=t;function e(b){return`__firebase__banner__${b}`}const r="__firebase__banner",o=Jc().prod.length>0;function c(){const b=document.getElementById(r);b&&b.remove()}function h(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function d(b,V){b.setAttribute("width","24"),b.setAttribute("id",V),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function f(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{Mi=!0,c()},b}function A(b,V){b.setAttribute("id",V),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function T(){const b=Yc(r),V=e("text"),N=document.getElementById(V)||document.createElement("span"),O=e("learnmore"),k=document.getElementById(O)||document.createElement("a"),K=e("preprendIcon"),$=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const Q=b.element;h(Q),A(k,O);const lt=f();d($,K),Q.append($,N,k,lt),document.body.appendChild(Q)}o?(N.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",V)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function el(){var t;const n=(t=os())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nl(){return!el()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rl(){try{return typeof indexedDB=="object"}catch{return!1}}function sl(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il="FirebaseError";class be extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=il,Object.setPrototypeOf(this,be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fo.prototype.create)}}class Fo{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],c=o?ol(o,r):"Error",h=`${this.serviceName}: ${c} (${i}).`;return new be(i,h,r)}}function ol(n,t){return n.replace(al,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const al=/\{\$([^}]+)}/g;function Un(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],c=t[i];if(Li(o)&&Li(c)){if(!Un(o,c))return!1}else if(o!==c)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Li(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n){return n&&n._delegate?n._delegate:n}class Ze{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Kc;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ul(t))try{this.getOrInitializeService({instanceIdentifier:ee})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=ee){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ee){return this.instances.has(t)}getOptions(t=ee){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);r===h&&c.resolve(i)}return i}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ll(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ee){return this.component?this.component.multipleInstances?t:ee:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ll(n){return n===ee?void 0:n}function ul(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new cl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const dl={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},fl=U.INFO,ml={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},pl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=ml[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class jo{constructor(t){this.name=t,this._logLevel=fl,this._logHandler=pl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const gl=(n,t)=>t.some(e=>n instanceof e);let Fi,ji;function _l(){return Fi||(Fi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yl(){return ji||(ji=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uo=new WeakMap,qr=new WeakMap,Bo=new WeakMap,Or=new WeakMap,cs=new WeakMap;function El(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",c)},o=()=>{e($t(n.result)),i()},c=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",c)});return t.then(e=>{e instanceof IDBCursor&&Uo.set(e,n)}).catch(()=>{}),cs.set(t,n),t}function Tl(n){if(qr.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",c),n.removeEventListener("abort",c)},o=()=>{e(),i()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",c),n.addEventListener("abort",c)});qr.set(n,t)}let zr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return qr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Bo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return $t(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function vl(n){zr=n(zr)}function Il(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Mr(this),t,...e);return Bo.set(r,t.sort?t.sort():[t]),$t(r)}:yl().includes(n)?function(...t){return n.apply(Mr(this),t),$t(Uo.get(this))}:function(...t){return $t(n.apply(Mr(this),t))}}function Al(n){return typeof n=="function"?Il(n):(n instanceof IDBTransaction&&Tl(n),gl(n,_l())?new Proxy(n,zr):n)}function $t(n){if(n instanceof IDBRequest)return El(n);if(Or.has(n))return Or.get(n);const t=Al(n);return t!==n&&(Or.set(n,t),cs.set(t,n)),t}const Mr=n=>cs.get(n);function wl(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const c=indexedDB.open(n,t),h=$t(c);return r&&c.addEventListener("upgradeneeded",d=>{r($t(c.result),d.oldVersion,d.newVersion,$t(c.transaction),d)}),e&&c.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),h.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),h}const bl=["get","getKey","getAll","getAllKeys","count"],Rl=["put","add","delete","clear"],Lr=new Map;function Ui(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Lr.get(t))return Lr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Rl.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bl.includes(e)))return;const o=async function(c,...h){const d=this.transaction(c,i?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(h.shift())),(await Promise.all([f[e](...h),i&&d.done]))[0]};return Lr.set(t,o),o}vl(n=>({...n,get:(t,e,r)=>Ui(t,e)||n.get(t,e,r),has:(t,e)=>!!Ui(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Cl(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Cl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Hr="@firebase/app",Bi="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new jo("@firebase/app"),Pl="@firebase/app-compat",Vl="@firebase/analytics-compat",Dl="@firebase/analytics",xl="@firebase/app-check-compat",Nl="@firebase/app-check",kl="@firebase/auth",Ol="@firebase/auth-compat",Ml="@firebase/database",Ll="@firebase/data-connect",Fl="@firebase/database-compat",jl="@firebase/functions",Ul="@firebase/functions-compat",Bl="@firebase/installations",$l="@firebase/installations-compat",ql="@firebase/messaging",zl="@firebase/messaging-compat",Hl="@firebase/performance",Gl="@firebase/performance-compat",Wl="@firebase/remote-config",Kl="@firebase/remote-config-compat",Ql="@firebase/storage",Xl="@firebase/storage-compat",Jl="@firebase/firestore",Yl="@firebase/ai",Zl="@firebase/firestore-compat",tu="firebase",eu="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="[DEFAULT]",nu={[Hr]:"fire-core",[Pl]:"fire-core-compat",[Dl]:"fire-analytics",[Vl]:"fire-analytics-compat",[Nl]:"fire-app-check",[xl]:"fire-app-check-compat",[kl]:"fire-auth",[Ol]:"fire-auth-compat",[Ml]:"fire-rtdb",[Ll]:"fire-data-connect",[Fl]:"fire-rtdb-compat",[jl]:"fire-fn",[Ul]:"fire-fn-compat",[Bl]:"fire-iid",[$l]:"fire-iid-compat",[ql]:"fire-fcm",[zl]:"fire-fcm-compat",[Hl]:"fire-perf",[Gl]:"fire-perf-compat",[Wl]:"fire-rc",[Kl]:"fire-rc-compat",[Ql]:"fire-gcs",[Xl]:"fire-gcs-compat",[Jl]:"fire-fst",[Zl]:"fire-fst-compat",[Yl]:"fire-vertex","fire-js":"fire-js",[tu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new Map,ru=new Map,Wr=new Map;function $i(n,t){try{n.container.addComponent(t)}catch(e){Ot.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function $n(n){const t=n.name;if(Wr.has(t))return Ot.debug(`There were multiple attempts to register component ${t}.`),!1;Wr.set(t,n);for(const e of Bn.values())$i(e,n);for(const e of ru.values())$i(e,n);return!0}function su(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function iu(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qt=new Fo("app","Firebase",ou);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=eu;function $o(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:Gr,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw qt.create("bad-app-name",{appName:String(i)});if(e||(e=Lo()),!e)throw qt.create("no-options");const o=Bn.get(i);if(o){if(Un(e,o.options)&&Un(r,o.config))return o;throw qt.create("duplicate-app",{appName:i})}const c=new hl(i);for(const d of Wr.values())c.addComponent(d);const h=new au(e,r,c);return Bn.set(i,h),h}function lu(n=Gr){const t=Bn.get(n);if(!t&&n===Gr&&Lo())return $o();if(!t)throw qt.create("no-app",{appName:n});return t}function _e(n,t,e){let r=nu[n]??n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const c=[`Unable to register library "${r}" with version "${t}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ot.warn(c.join(" "));return}$n(new Ze(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu="firebase-heartbeat-database",hu=1,tn="firebase-heartbeat-store";let Fr=null;function qo(){return Fr||(Fr=wl(uu,hu,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(tn)}catch(e){console.warn(e)}}}}).catch(n=>{throw qt.create("idb-open",{originalErrorMessage:n.message})})),Fr}async function du(n){try{const e=(await qo()).transaction(tn),r=await e.objectStore(tn).get(zo(n));return await e.done,r}catch(t){if(t instanceof be)Ot.warn(t.message);else{const e=qt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ot.warn(e.message)}}}async function qi(n,t){try{const r=(await qo()).transaction(tn,"readwrite");await r.objectStore(tn).put(t,zo(n)),await r.done}catch(e){if(e instanceof be)Ot.warn(e.message);else{const r=qt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ot.warn(r.message)}}}function zo(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=1024,mu=30;class pu{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new _u(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=zi();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(c=>c.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>mu){const c=yu(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ot.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zi(),{heartbeatsToSend:r,unsentEntries:i}=gu(this._heartbeatsCache.heartbeats),o=jn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ot.warn(e),""}}}function zi(){return new Date().toISOString().substring(0,10)}function gu(n,t=fu){const e=[];let r=n.slice();for(const i of n){const o=e.find(c=>c.agent===i.agent);if(o){if(o.dates.push(i.date),Hi(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Hi(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class _u{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rl()?sl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await du(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return qi(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return qi(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Hi(n){return jn(JSON.stringify({version:2,heartbeats:n})).length}function yu(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(n){$n(new Ze("platform-logger",t=>new Sl(t),"PRIVATE")),$n(new Ze("heartbeat",t=>new pu(t),"PRIVATE")),_e(Hr,Bi,n),_e(Hr,Bi,"esm2020"),_e("fire-js","")}Eu("");var Tu="firebase",vu="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_e(Tu,vu,"app");var Gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ls;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,m){function g(){}g.prototype=m.prototype,y.F=m.prototype,y.prototype=new g,y.prototype.constructor=y,y.D=function(E,_,I){for(var p=Array(arguments.length-2),yt=2;yt<arguments.length;yt++)p[yt-2]=arguments[yt];return m.prototype[_].apply(E,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,m,g){g||(g=0);const E=Array(16);if(typeof m=="string")for(var _=0;_<16;++_)E[_]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(_=0;_<16;++_)E[_]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=y.g[0],g=y.g[1],_=y.g[2];let I=y.g[3],p;p=m+(I^g&(_^I))+E[0]+3614090360&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(_^m&(g^_))+E[1]+3905402710&4294967295,I=m+(p<<12&4294967295|p>>>20),p=_+(g^I&(m^g))+E[2]+606105819&4294967295,_=I+(p<<17&4294967295|p>>>15),p=g+(m^_&(I^m))+E[3]+3250441966&4294967295,g=_+(p<<22&4294967295|p>>>10),p=m+(I^g&(_^I))+E[4]+4118548399&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(_^m&(g^_))+E[5]+1200080426&4294967295,I=m+(p<<12&4294967295|p>>>20),p=_+(g^I&(m^g))+E[6]+2821735955&4294967295,_=I+(p<<17&4294967295|p>>>15),p=g+(m^_&(I^m))+E[7]+4249261313&4294967295,g=_+(p<<22&4294967295|p>>>10),p=m+(I^g&(_^I))+E[8]+1770035416&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(_^m&(g^_))+E[9]+2336552879&4294967295,I=m+(p<<12&4294967295|p>>>20),p=_+(g^I&(m^g))+E[10]+4294925233&4294967295,_=I+(p<<17&4294967295|p>>>15),p=g+(m^_&(I^m))+E[11]+2304563134&4294967295,g=_+(p<<22&4294967295|p>>>10),p=m+(I^g&(_^I))+E[12]+1804603682&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(_^m&(g^_))+E[13]+4254626195&4294967295,I=m+(p<<12&4294967295|p>>>20),p=_+(g^I&(m^g))+E[14]+2792965006&4294967295,_=I+(p<<17&4294967295|p>>>15),p=g+(m^_&(I^m))+E[15]+1236535329&4294967295,g=_+(p<<22&4294967295|p>>>10),p=m+(_^I&(g^_))+E[1]+4129170786&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^_&(m^g))+E[6]+3225465664&4294967295,I=m+(p<<9&4294967295|p>>>23),p=_+(m^g&(I^m))+E[11]+643717713&4294967295,_=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(_^I))+E[0]+3921069994&4294967295,g=_+(p<<20&4294967295|p>>>12),p=m+(_^I&(g^_))+E[5]+3593408605&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^_&(m^g))+E[10]+38016083&4294967295,I=m+(p<<9&4294967295|p>>>23),p=_+(m^g&(I^m))+E[15]+3634488961&4294967295,_=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(_^I))+E[4]+3889429448&4294967295,g=_+(p<<20&4294967295|p>>>12),p=m+(_^I&(g^_))+E[9]+568446438&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^_&(m^g))+E[14]+3275163606&4294967295,I=m+(p<<9&4294967295|p>>>23),p=_+(m^g&(I^m))+E[3]+4107603335&4294967295,_=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(_^I))+E[8]+1163531501&4294967295,g=_+(p<<20&4294967295|p>>>12),p=m+(_^I&(g^_))+E[13]+2850285829&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^_&(m^g))+E[2]+4243563512&4294967295,I=m+(p<<9&4294967295|p>>>23),p=_+(m^g&(I^m))+E[7]+1735328473&4294967295,_=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(_^I))+E[12]+2368359562&4294967295,g=_+(p<<20&4294967295|p>>>12),p=m+(g^_^I)+E[5]+4294588738&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^_)+E[8]+2272392833&4294967295,I=m+(p<<11&4294967295|p>>>21),p=_+(I^m^g)+E[11]+1839030562&4294967295,_=I+(p<<16&4294967295|p>>>16),p=g+(_^I^m)+E[14]+4259657740&4294967295,g=_+(p<<23&4294967295|p>>>9),p=m+(g^_^I)+E[1]+2763975236&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^_)+E[4]+1272893353&4294967295,I=m+(p<<11&4294967295|p>>>21),p=_+(I^m^g)+E[7]+4139469664&4294967295,_=I+(p<<16&4294967295|p>>>16),p=g+(_^I^m)+E[10]+3200236656&4294967295,g=_+(p<<23&4294967295|p>>>9),p=m+(g^_^I)+E[13]+681279174&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^_)+E[0]+3936430074&4294967295,I=m+(p<<11&4294967295|p>>>21),p=_+(I^m^g)+E[3]+3572445317&4294967295,_=I+(p<<16&4294967295|p>>>16),p=g+(_^I^m)+E[6]+76029189&4294967295,g=_+(p<<23&4294967295|p>>>9),p=m+(g^_^I)+E[9]+3654602809&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^_)+E[12]+3873151461&4294967295,I=m+(p<<11&4294967295|p>>>21),p=_+(I^m^g)+E[15]+530742520&4294967295,_=I+(p<<16&4294967295|p>>>16),p=g+(_^I^m)+E[2]+3299628645&4294967295,g=_+(p<<23&4294967295|p>>>9),p=m+(_^(g|~I))+E[0]+4096336452&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~_))+E[7]+1126891415&4294967295,I=m+(p<<10&4294967295|p>>>22),p=_+(m^(I|~g))+E[14]+2878612391&4294967295,_=I+(p<<15&4294967295|p>>>17),p=g+(I^(_|~m))+E[5]+4237533241&4294967295,g=_+(p<<21&4294967295|p>>>11),p=m+(_^(g|~I))+E[12]+1700485571&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~_))+E[3]+2399980690&4294967295,I=m+(p<<10&4294967295|p>>>22),p=_+(m^(I|~g))+E[10]+4293915773&4294967295,_=I+(p<<15&4294967295|p>>>17),p=g+(I^(_|~m))+E[1]+2240044497&4294967295,g=_+(p<<21&4294967295|p>>>11),p=m+(_^(g|~I))+E[8]+1873313359&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~_))+E[15]+4264355552&4294967295,I=m+(p<<10&4294967295|p>>>22),p=_+(m^(I|~g))+E[6]+2734768916&4294967295,_=I+(p<<15&4294967295|p>>>17),p=g+(I^(_|~m))+E[13]+1309151649&4294967295,g=_+(p<<21&4294967295|p>>>11),p=m+(_^(g|~I))+E[4]+4149444226&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~_))+E[11]+3174756917&4294967295,I=m+(p<<10&4294967295|p>>>22),p=_+(m^(I|~g))+E[2]+718787259&4294967295,_=I+(p<<15&4294967295|p>>>17),p=g+(I^(_|~m))+E[9]+3951481745&4294967295,y.g[0]=y.g[0]+m&4294967295,y.g[1]=y.g[1]+(_+(p<<21&4294967295|p>>>11))&4294967295,y.g[2]=y.g[2]+_&4294967295,y.g[3]=y.g[3]+I&4294967295}r.prototype.v=function(y,m){m===void 0&&(m=y.length);const g=m-this.blockSize,E=this.C;let _=this.h,I=0;for(;I<m;){if(_==0)for(;I<=g;)i(this,y,I),I+=this.blockSize;if(typeof y=="string"){for(;I<m;)if(E[_++]=y.charCodeAt(I++),_==this.blockSize){i(this,E),_=0;break}}else for(;I<m;)if(E[_++]=y[I++],_==this.blockSize){i(this,E),_=0;break}}this.h=_,this.o+=m},r.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var m=1;m<y.length-8;++m)y[m]=0;m=this.o*8;for(var g=y.length-8;g<y.length;++g)y[g]=m&255,m/=256;for(this.v(y),y=Array(16),m=0,g=0;g<4;++g)for(let E=0;E<32;E+=8)y[m++]=this.g[g]>>>E&255;return y};function o(y,m){var g=h;return Object.prototype.hasOwnProperty.call(g,y)?g[y]:g[y]=m(y)}function c(y,m){this.h=m;const g=[];let E=!0;for(let _=y.length-1;_>=0;_--){const I=y[_]|0;E&&I==m||(g[_]=I,E=!1)}this.g=g}var h={};function d(y){return-128<=y&&y<128?o(y,function(m){return new c([m|0],m<0?-1:0)}):new c([y|0],y<0?-1:0)}function f(y){if(isNaN(y)||!isFinite(y))return T;if(y<0)return k(f(-y));const m=[];let g=1;for(let E=0;y>=g;E++)m[E]=y/g|0,g*=4294967296;return new c(m,0)}function A(y,m){if(y.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(y.charAt(0)=="-")return k(A(y.substring(1),m));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=f(Math.pow(m,8));let E=T;for(let I=0;I<y.length;I+=8){var _=Math.min(8,y.length-I);const p=parseInt(y.substring(I,I+_),m);_<8?(_=f(Math.pow(m,_)),E=E.j(_).add(f(p))):(E=E.j(g),E=E.add(f(p)))}return E}var T=d(0),b=d(1),V=d(16777216);n=c.prototype,n.m=function(){if(O(this))return-k(this).m();let y=0,m=1;for(let g=0;g<this.g.length;g++){const E=this.i(g);y+=(E>=0?E:4294967296+E)*m,m*=4294967296}return y},n.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(N(this))return"0";if(O(this))return"-"+k(this).toString(y);const m=f(Math.pow(y,6));var g=this;let E="";for(;;){const _=lt(g,m).g;g=K(g,_.j(m));let I=((g.g.length>0?g.g[0]:g.h)>>>0).toString(y);if(g=_,N(g))return I+E;for(;I.length<6;)I="0"+I;E=I+E}},n.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function N(y){if(y.h!=0)return!1;for(let m=0;m<y.g.length;m++)if(y.g[m]!=0)return!1;return!0}function O(y){return y.h==-1}n.l=function(y){return y=K(this,y),O(y)?-1:N(y)?0:1};function k(y){const m=y.g.length,g=[];for(let E=0;E<m;E++)g[E]=~y.g[E];return new c(g,~y.h).add(b)}n.abs=function(){return O(this)?k(this):this},n.add=function(y){const m=Math.max(this.g.length,y.g.length),g=[];let E=0;for(let _=0;_<=m;_++){let I=E+(this.i(_)&65535)+(y.i(_)&65535),p=(I>>>16)+(this.i(_)>>>16)+(y.i(_)>>>16);E=p>>>16,I&=65535,p&=65535,g[_]=p<<16|I}return new c(g,g[g.length-1]&-2147483648?-1:0)};function K(y,m){return y.add(k(m))}n.j=function(y){if(N(this)||N(y))return T;if(O(this))return O(y)?k(this).j(k(y)):k(k(this).j(y));if(O(y))return k(this.j(k(y)));if(this.l(V)<0&&y.l(V)<0)return f(this.m()*y.m());const m=this.g.length+y.g.length,g=[];for(var E=0;E<2*m;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(let _=0;_<y.g.length;_++){const I=this.i(E)>>>16,p=this.i(E)&65535,yt=y.i(_)>>>16,Qt=y.i(_)&65535;g[2*E+2*_]+=p*Qt,$(g,2*E+2*_),g[2*E+2*_+1]+=I*Qt,$(g,2*E+2*_+1),g[2*E+2*_+1]+=p*yt,$(g,2*E+2*_+1),g[2*E+2*_+2]+=I*yt,$(g,2*E+2*_+2)}for(y=0;y<m;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=m;y<2*m;y++)g[y]=0;return new c(g,0)};function $(y,m){for(;(y[m]&65535)!=y[m];)y[m+1]+=y[m]>>>16,y[m]&=65535,m++}function Q(y,m){this.g=y,this.h=m}function lt(y,m){if(N(m))throw Error("division by zero");if(N(y))return new Q(T,T);if(O(y))return m=lt(k(y),m),new Q(k(m.g),k(m.h));if(O(m))return m=lt(y,k(m)),new Q(k(m.g),m.h);if(y.g.length>30){if(O(y)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var g=b,E=m;E.l(y)<=0;)g=It(g),E=It(E);var _=ut(g,1),I=ut(E,1);for(E=ut(E,2),g=ut(g,2);!N(E);){var p=I.add(E);p.l(y)<=0&&(_=_.add(g),I=p),E=ut(E,1),g=ut(g,1)}return m=K(y,_.j(m)),new Q(_,m)}for(_=T;y.l(m)>=0;){for(g=Math.max(1,Math.floor(y.m()/m.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),I=f(g),p=I.j(m);O(p)||p.l(y)>0;)g-=E,I=f(g),p=I.j(m);N(I)&&(I=b),_=_.add(I),y=K(y,p)}return new Q(_,y)}n.B=function(y){return lt(this,y).h},n.and=function(y){const m=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<m;E++)g[E]=this.i(E)&y.i(E);return new c(g,this.h&y.h)},n.or=function(y){const m=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<m;E++)g[E]=this.i(E)|y.i(E);return new c(g,this.h|y.h)},n.xor=function(y){const m=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<m;E++)g[E]=this.i(E)^y.i(E);return new c(g,this.h^y.h)};function It(y){const m=y.g.length+1,g=[];for(let E=0;E<m;E++)g[E]=y.i(E)<<1|y.i(E-1)>>>31;return new c(g,y.h)}function ut(y,m){const g=m>>5;m%=32;const E=y.g.length-g,_=[];for(let I=0;I<E;I++)_[I]=m>0?y.i(I+g)>>>m|y.i(I+g+1)<<32-m:y.i(I+g);return new c(_,y.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=f,c.fromString=A,ls=c}).apply(typeof Gi<"u"?Gi:typeof self<"u"?self:typeof window<"u"?window:{});var Cn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ho,He,Go,kn,Kr,Wo,Ko,Qo;(function(){var n,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cn=="object"&&Cn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var l=r;s=s.split(".");for(var u=0;u<s.length-1;u++){var v=s[u];if(!(v in l))break t;l=l[v]}s=s[s.length-1],u=l[s],a=a(u),a!=u&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(a){var l=[],u;for(u in a)Object.prototype.hasOwnProperty.call(a,u)&&l.push([u,a[u]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function h(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function d(s,a,l){return s.call.apply(s.bind,arguments)}function f(s,a,l){return f=d,f.apply(null,arguments)}function A(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var u=l.slice();return u.push.apply(u,arguments),s.apply(this,u)}}function T(s,a){function l(){}l.prototype=a.prototype,s.Z=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Ob=function(u,v,w){for(var P=Array(arguments.length-2),L=2;L<arguments.length;L++)P[L-2]=arguments[L];return a.prototype[v].apply(u,P)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function V(s){const a=s.length;if(a>0){const l=Array(a);for(let u=0;u<a;u++)l[u]=s[u];return l}return[]}function N(s,a){for(let u=1;u<arguments.length;u++){const v=arguments[u];var l=typeof v;if(l=l!="object"?l:v?Array.isArray(v)?"array":l:"null",l=="array"||l=="object"&&typeof v.length=="number"){l=s.length||0;const w=v.length||0;s.length=l+w;for(let P=0;P<w;P++)s[l+P]=v[P]}else s.push(v)}}class O{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return this.h>0?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function k(s){c.setTimeout(()=>{throw s},0)}function K(){var s=y;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class ${constructor(){this.h=this.g=null}add(a,l){const u=Q.get();u.set(a,l),this.h?this.h.next=u:this.g=u,this.h=u}}var Q=new O(()=>new lt,s=>s.reset());class lt{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let It,ut=!1,y=new $,m=()=>{const s=Promise.resolve(void 0);It=()=>{s.then(g)}};function g(){for(var s;s=K();){try{s.h.call(s.g)}catch(l){k(l)}var a=Q;a.j(s),a.h<100&&(a.h++,s.next=a.g,a.g=s)}ut=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s}();function p(s){return/^[\s\xa0]*$/.test(s)}function yt(s,a){_.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,a)}T(yt,_),yt.prototype.init=function(s,a){const l=this.type=s.type,u=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget,a||(l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement)),this.relatedTarget=a,u?(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&yt.Z.h.call(this)},yt.prototype.h=function(){yt.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Qt="closure_listenable_"+(Math.random()*1e6|0),tc=0;function ec(s,a,l,u,v){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!u,this.ha=v,this.key=++tc,this.da=this.fa=!1}function fn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function mn(s,a,l){for(const u in s)a.call(l,s[u],u,s)}function nc(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function ks(s){const a={};for(const l in s)a[l]=s[l];return a}const Os="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ms(s,a){let l,u;for(let v=1;v<arguments.length;v++){u=arguments[v];for(l in u)s[l]=u[l];for(let w=0;w<Os.length;w++)l=Os[w],Object.prototype.hasOwnProperty.call(u,l)&&(s[l]=u[l])}}function pn(s){this.src=s,this.g={},this.h=0}pn.prototype.add=function(s,a,l,u,v){const w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);const P=hr(s,a,u,v);return P>-1?(a=s[P],l||(a.fa=!1)):(a=new ec(a,this.src,w,!!u,v),a.fa=l,s.push(a)),a};function ur(s,a){const l=a.type;if(l in s.g){var u=s.g[l],v=Array.prototype.indexOf.call(u,a,void 0),w;(w=v>=0)&&Array.prototype.splice.call(u,v,1),w&&(fn(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function hr(s,a,l,u){for(let v=0;v<s.length;++v){const w=s[v];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==u)return v}return-1}var dr="closure_lm_"+(Math.random()*1e6|0),fr={};function Ls(s,a,l,u,v){if(Array.isArray(a)){for(let w=0;w<a.length;w++)Ls(s,a[w],l,u,v);return null}return l=Us(l),s&&s[Qt]?s.J(a,l,h(u)?!!u.capture:!!u,v):rc(s,a,l,!1,u,v)}function rc(s,a,l,u,v,w){if(!a)throw Error("Invalid event type");const P=h(v)?!!v.capture:!!v;let L=pr(s);if(L||(s[dr]=L=new pn(s)),l=L.add(a,l,u,P,w),l.proxy)return l;if(u=sc(),l.proxy=u,u.src=s,u.listener=l,s.addEventListener)I||(v=P),v===void 0&&(v=!1),s.addEventListener(a.toString(),u,v);else if(s.attachEvent)s.attachEvent(js(a.toString()),u);else if(s.addListener&&s.removeListener)s.addListener(u);else throw Error("addEventListener and attachEvent are unavailable.");return l}function sc(){function s(l){return a.call(s.src,s.listener,l)}const a=ic;return s}function Fs(s,a,l,u,v){if(Array.isArray(a))for(var w=0;w<a.length;w++)Fs(s,a[w],l,u,v);else u=h(u)?!!u.capture:!!u,l=Us(l),s&&s[Qt]?(s=s.i,w=String(a).toString(),w in s.g&&(a=s.g[w],l=hr(a,l,u,v),l>-1&&(fn(a[l]),Array.prototype.splice.call(a,l,1),a.length==0&&(delete s.g[w],s.h--)))):s&&(s=pr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=hr(a,l,u,v)),(l=s>-1?a[s]:null)&&mr(l))}function mr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Qt])ur(a.i,s);else{var l=s.type,u=s.proxy;a.removeEventListener?a.removeEventListener(l,u,s.capture):a.detachEvent?a.detachEvent(js(l),u):a.addListener&&a.removeListener&&a.removeListener(u),(l=pr(a))?(ur(l,s),l.h==0&&(l.src=null,a[dr]=null)):fn(s)}}}function js(s){return s in fr?fr[s]:fr[s]="on"+s}function ic(s,a){if(s.da)s=!0;else{a=new yt(a,this);const l=s.listener,u=s.ha||s.src;s.fa&&mr(s),s=l.call(u,a)}return s}function pr(s){return s=s[dr],s instanceof pn?s:null}var gr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Us(s){return typeof s=="function"?s:(s[gr]||(s[gr]=function(a){return s.handleEvent(a)}),s[gr])}function ht(){E.call(this),this.i=new pn(this),this.M=this,this.G=null}T(ht,E),ht.prototype[Qt]=!0,ht.prototype.removeEventListener=function(s,a,l,u){Fs(this,s,a,l,u)};function gt(s,a){var l,u=s.G;if(u)for(l=[];u;u=u.G)l.push(u);if(s=s.M,u=a.type||a,typeof a=="string")a=new _(a,s);else if(a instanceof _)a.target=a.target||s;else{var v=a;a=new _(u,s),Ms(a,v)}v=!0;let w,P;if(l)for(P=l.length-1;P>=0;P--)w=a.g=l[P],v=gn(w,u,!0,a)&&v;if(w=a.g=s,v=gn(w,u,!0,a)&&v,v=gn(w,u,!1,a)&&v,l)for(P=0;P<l.length;P++)w=a.g=l[P],v=gn(w,u,!1,a)&&v}ht.prototype.N=function(){if(ht.Z.N.call(this),this.i){var s=this.i;for(const a in s.g){const l=s.g[a];for(let u=0;u<l.length;u++)fn(l[u]);delete s.g[a],s.h--}}this.G=null},ht.prototype.J=function(s,a,l,u){return this.i.add(String(s),a,!1,l,u)},ht.prototype.K=function(s,a,l,u){return this.i.add(String(s),a,!0,l,u)};function gn(s,a,l,u){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();let v=!0;for(let w=0;w<a.length;++w){const P=a[w];if(P&&!P.da&&P.capture==l){const L=P.listener,et=P.ha||P.src;P.fa&&ur(s.i,P),v=L.call(et,u)!==!1&&v}}return v&&!u.defaultPrevented}function oc(s,a){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=f(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(a)>2147483647?-1:c.setTimeout(s,a||0)}function Bs(s){s.g=oc(()=>{s.g=null,s.i&&(s.i=!1,Bs(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class ac extends E{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Bs(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ce(s){E.call(this),this.h=s,this.g={}}T(Ce,E);var $s=[];function qs(s){mn(s.g,function(a,l){this.g.hasOwnProperty(l)&&mr(a)},s),s.g={}}Ce.prototype.N=function(){Ce.Z.N.call(this),qs(this)},Ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _r=c.JSON.stringify,cc=c.JSON.parse,lc=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function zs(){}function Hs(){}var Pe={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function yr(){_.call(this,"d")}T(yr,_);function Er(){_.call(this,"c")}T(Er,_);var Xt={},Gs=null;function _n(){return Gs=Gs||new ht}Xt.Ia="serverreachability";function Ws(s){_.call(this,Xt.Ia,s)}T(Ws,_);function Ve(s){const a=_n();gt(a,new Ws(a))}Xt.STAT_EVENT="statevent";function Ks(s,a){_.call(this,Xt.STAT_EVENT,s),this.stat=a}T(Ks,_);function _t(s){const a=_n();gt(a,new Ks(a,s))}Xt.Ja="timingevent";function Qs(s,a){_.call(this,Xt.Ja,s),this.size=a}T(Qs,_);function De(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function xe(){this.g=!0}xe.prototype.ua=function(){this.g=!1};function uc(s,a,l,u,v,w){s.info(function(){if(s.g)if(w){var P="",L=w.split("&");for(let q=0;q<L.length;q++){var et=L[q].split("=");if(et.length>1){const nt=et[0];et=et[1];const Ct=nt.split("_");P=Ct.length>=2&&Ct[1]=="type"?P+(nt+"="+et+"&"):P+(nt+"=redacted&")}}}else P=null;else P=w;return"XMLHTTP REQ ("+u+") [attempt "+v+"]: "+a+`
`+l+`
`+P})}function hc(s,a,l,u,v,w,P){s.info(function(){return"XMLHTTP RESP ("+u+") [ attempt "+v+"]: "+a+`
`+l+`
`+w+" "+P})}function he(s,a,l,u){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+fc(s,l)+(u?" "+u:"")})}function dc(s,a){s.info(function(){return"TIMEOUT: "+a})}xe.prototype.info=function(){};function fc(s,a){if(!s.g)return a;if(!a)return null;try{const w=JSON.parse(a);if(w){for(s=0;s<w.length;s++)if(Array.isArray(w[s])){var l=w[s];if(!(l.length<2)){var u=l[1];if(Array.isArray(u)&&!(u.length<1)){var v=u[0];if(v!="noop"&&v!="stop"&&v!="close")for(let P=1;P<u.length;P++)u[P]=""}}}}return _r(w)}catch{return a}}var yn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Xs={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Js;function Tr(){}T(Tr,zs),Tr.prototype.g=function(){return new XMLHttpRequest},Js=new Tr;function Ne(s){return encodeURIComponent(String(s))}function mc(s){var a=1;s=s.split(":");const l=[];for(;a>0&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function Mt(s,a,l,u){this.j=s,this.i=a,this.l=l,this.S=u||1,this.V=new Ce(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ys}function Ys(){this.i=null,this.g="",this.h=!1}var Zs={},vr={};function Ir(s,a,l){s.M=1,s.A=Tn(St(a)),s.u=l,s.R=!0,ti(s,null)}function ti(s,a){s.F=Date.now(),En(s),s.B=St(s.A);var l=s.B,u=s.S;Array.isArray(u)||(u=[String(u)]),fi(l.i,"t",u),s.C=0,l=s.j.L,s.h=new Ys,s.g=Di(s.j,l?a:null,!s.u),s.P>0&&(s.O=new ac(f(s.Y,s,s.g),s.P)),a=s.V,l=s.g,u=s.ba;var v="readystatechange";Array.isArray(v)||(v&&($s[0]=v.toString()),v=$s);for(let w=0;w<v.length;w++){const P=Ls(l,v[w],u||a.handleEvent,!1,a.h||a);if(!P)break;a.g[P.key]=P}a=s.J?ks(s.J):{},s.u?(s.v||(s.v="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,a)):(s.v="GET",s.g.ea(s.B,s.v,null,a)),Ve(),uc(s.i,s.v,s.B,s.l,s.S,s.u)}Mt.prototype.ba=function(s){s=s.target;const a=this.O;a&&jt(s)==3?a.j():this.Y(s)},Mt.prototype.Y=function(s){try{if(s==this.g)t:{const L=jt(this.g),et=this.g.ya(),q=this.g.ca();if(!(L<3)&&(L!=3||this.g&&(this.h.h||this.g.la()||Ti(this.g)))){this.K||L!=4||et==7||(et==8||q<=0?Ve(3):Ve(2)),Ar(this);var a=this.g.ca();this.X=a;var l=pc(this);if(this.o=a==200,hc(this.i,this.v,this.B,this.l,this.S,L,a),this.o){if(this.U&&!this.L){e:{if(this.g){var u,v=this.g;if((u=v.g?v.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(u)){var w=u;break e}}w=null}if(s=w)he(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,wr(this,s);else{this.o=!1,this.m=3,_t(12),Jt(this),ke(this);break t}}if(this.R){s=!0;let nt;for(;!this.K&&this.C<l.length;)if(nt=gc(this,l),nt==vr){L==4&&(this.m=4,_t(14),s=!1),he(this.i,this.l,null,"[Incomplete Response]");break}else if(nt==Zs){this.m=4,_t(15),he(this.i,this.l,l,"[Invalid Chunk]"),s=!1;break}else he(this.i,this.l,nt,null),wr(this,nt);if(ei(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),L!=4||l.length!=0||this.h.h||(this.m=1,_t(16),s=!1),this.o=this.o&&s,!s)he(this.i,this.l,l,"[Invalid Chunked Response]"),Jt(this),ke(this);else if(l.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),xr(P),P.P=!0,_t(11))}}else he(this.i,this.l,l,null),wr(this,l);L==4&&Jt(this),this.o&&!this.K&&(L==4?Si(this.j,this):(this.o=!1,En(this)))}else Vc(this.g),a==400&&l.indexOf("Unknown SID")>0?(this.m=3,_t(12)):(this.m=0,_t(13)),Jt(this),ke(this)}}}catch{}finally{}};function pc(s){if(!ei(s))return s.g.la();const a=Ti(s.g);if(a==="")return"";let l="";const u=a.length,v=jt(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return Jt(s),ke(s),"";s.h.i=new c.TextDecoder}for(let w=0;w<u;w++)s.h.h=!0,l+=s.h.i.decode(a[w],{stream:!(v&&w==u-1)});return a.length=0,s.h.g+=l,s.C=0,s.h.g}function ei(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function gc(s,a){var l=s.C,u=a.indexOf(`
`,l);return u==-1?vr:(l=Number(a.substring(l,u)),isNaN(l)?Zs:(u+=1,u+l>a.length?vr:(a=a.slice(u,u+l),s.C=u+l,a)))}Mt.prototype.cancel=function(){this.K=!0,Jt(this)};function En(s){s.T=Date.now()+s.H,ni(s,s.H)}function ni(s,a){if(s.D!=null)throw Error("WatchDog timer not null");s.D=De(f(s.aa,s),a)}function Ar(s){s.D&&(c.clearTimeout(s.D),s.D=null)}Mt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(dc(this.i,this.B),this.M!=2&&(Ve(),_t(17)),Jt(this),this.m=2,ke(this)):ni(this,this.T-s)};function ke(s){s.j.I==0||s.K||Si(s.j,s)}function Jt(s){Ar(s);var a=s.O;a&&typeof a.dispose=="function"&&a.dispose(),s.O=null,qs(s.V),s.g&&(a=s.g,s.g=null,a.abort(),a.dispose())}function wr(s,a){try{var l=s.j;if(l.I!=0&&(l.g==s||br(l.h,s))){if(!s.L&&br(l.h,s)&&l.I==3){try{var u=l.Ba.g.parse(a)}catch{u=null}if(Array.isArray(u)&&u.length==3){var v=u;if(v[0]==0){t:if(!l.v){if(l.g)if(l.g.F+3e3<s.F)bn(l),An(l);else break t;Dr(l),_t(18)}}else l.xa=v[1],0<l.xa-l.K&&v[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=De(f(l.Va,l),6e3));ii(l.h)<=1&&l.ta&&(l.ta=void 0)}else Zt(l,11)}else if((s.L||l.g==s)&&bn(l),!p(a))for(v=l.Ba.g.parse(a),a=0;a<v.length;a++){let q=v[a];const nt=q[0];if(!(nt<=l.K))if(l.K=nt,q=q[1],l.I==2)if(q[0]=="c"){l.M=q[1],l.ba=q[2];const Ct=q[3];Ct!=null&&(l.ka=Ct,l.j.info("VER="+l.ka));const te=q[4];te!=null&&(l.za=te,l.j.info("SVER="+l.za));const Ut=q[5];Ut!=null&&typeof Ut=="number"&&Ut>0&&(u=1.5*Ut,l.O=u,l.j.info("backChannelRequestTimeoutMs_="+u)),u=l;const Bt=s.g;if(Bt){const Sn=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sn){var w=u.h;w.g||Sn.indexOf("spdy")==-1&&Sn.indexOf("quic")==-1&&Sn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Rr(w,w.h),w.h=null))}if(u.G){const Nr=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Nr&&(u.wa=Nr,H(u.J,u.G,Nr))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-s.F,l.j.info("Handshake RTT: "+l.T+"ms")),u=l;var P=s;if(u.na=Vi(u,u.L?u.ba:null,u.W),P.L){oi(u.h,P);var L=P,et=u.O;et&&(L.H=et),L.D&&(Ar(L),En(L)),u.g=P}else bi(u);l.i.length>0&&wn(l)}else q[0]!="stop"&&q[0]!="close"||Zt(l,7);else l.I==3&&(q[0]=="stop"||q[0]=="close"?q[0]=="stop"?Zt(l,7):Vr(l):q[0]!="noop"&&l.l&&l.l.qa(q),l.A=0)}}Ve(4)}catch{}}var _c=class{constructor(s,a){this.g=s,this.map=a}};function ri(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function si(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ii(s){return s.h?1:s.g?s.g.size:0}function br(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Rr(s,a){s.g?s.g.add(a):s.h=a}function oi(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}ri.prototype.cancel=function(){if(this.i=ai(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ai(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.G);return a}return V(s.i)}var ci=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yc(s,a){if(s){s=s.split("&");for(let l=0;l<s.length;l++){const u=s[l].indexOf("=");let v,w=null;u>=0?(v=s[l].substring(0,u),w=s[l].substring(u+1)):v=s[l],a(v,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Lt(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let a;s instanceof Lt?(this.l=s.l,Oe(this,s.j),this.o=s.o,this.g=s.g,Me(this,s.u),this.h=s.h,Sr(this,mi(s.i)),this.m=s.m):s&&(a=String(s).match(ci))?(this.l=!1,Oe(this,a[1]||"",!0),this.o=Le(a[2]||""),this.g=Le(a[3]||"",!0),Me(this,a[4]),this.h=Le(a[5]||"",!0),Sr(this,a[6]||"",!0),this.m=Le(a[7]||"")):(this.l=!1,this.i=new je(null,this.l))}Lt.prototype.toString=function(){const s=[];var a=this.j;a&&s.push(Fe(a,li,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Fe(a,li,!0),"@"),s.push(Ne(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&s.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Fe(l,l.charAt(0)=="/"?vc:Tc,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Fe(l,Ac)),s.join("")},Lt.prototype.resolve=function(s){const a=St(this);let l=!!s.j;l?Oe(a,s.j):l=!!s.o,l?a.o=s.o:l=!!s.g,l?a.g=s.g:l=s.u!=null;var u=s.h;if(l)Me(a,s.u);else if(l=!!s.h){if(u.charAt(0)!="/")if(this.g&&!this.h)u="/"+u;else{var v=a.h.lastIndexOf("/");v!=-1&&(u=a.h.slice(0,v+1)+u)}if(v=u,v==".."||v==".")u="";else if(v.indexOf("./")!=-1||v.indexOf("/.")!=-1){u=v.lastIndexOf("/",0)==0,v=v.split("/");const w=[];for(let P=0;P<v.length;){const L=v[P++];L=="."?u&&P==v.length&&w.push(""):L==".."?((w.length>1||w.length==1&&w[0]!="")&&w.pop(),u&&P==v.length&&w.push("")):(w.push(L),u=!0)}u=w.join("/")}else u=v}return l?a.h=u:l=s.i.toString()!=="",l?Sr(a,mi(s.i)):l=!!s.m,l&&(a.m=s.m),a};function St(s){return new Lt(s)}function Oe(s,a,l){s.j=l?Le(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Me(s,a){if(a){if(a=Number(a),isNaN(a)||a<0)throw Error("Bad port number "+a);s.u=a}else s.u=null}function Sr(s,a,l){a instanceof je?(s.i=a,wc(s.i,s.l)):(l||(a=Fe(a,Ic)),s.i=new je(a,s.l))}function H(s,a,l){s.i.set(a,l)}function Tn(s){return H(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function Le(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Fe(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,Ec),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Ec(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var li=/[#\/\?@]/g,Tc=/[#\?:]/g,vc=/[#\?]/g,Ic=/[#\?@]/g,Ac=/#/g;function je(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Yt(s){s.g||(s.g=new Map,s.h=0,s.i&&yc(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=je.prototype,n.add=function(s,a){Yt(this),this.i=null,s=de(this,s);let l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function ui(s,a){Yt(s),a=de(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function hi(s,a){return Yt(s),a=de(s,a),s.g.has(a)}n.forEach=function(s,a){Yt(this),this.g.forEach(function(l,u){l.forEach(function(v){s.call(a,v,u,this)},this)},this)};function di(s,a){Yt(s);let l=[];if(typeof a=="string")hi(s,a)&&(l=l.concat(s.g.get(de(s,a))));else for(s=Array.from(s.g.values()),a=0;a<s.length;a++)l=l.concat(s[a]);return l}n.set=function(s,a){return Yt(this),this.i=null,s=de(this,s),hi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=di(this,s),s.length>0?String(s[0]):a):a};function fi(s,a,l){ui(s,a),l.length>0&&(s.i=null,s.g.set(de(s,a),V(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(let u=0;u<a.length;u++){var l=a[u];const v=Ne(l);l=di(this,l);for(let w=0;w<l.length;w++){let P=v;l[w]!==""&&(P+="="+Ne(l[w])),s.push(P)}}return this.i=s.join("&")};function mi(s){const a=new je;return a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),a}function de(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function wc(s,a){a&&!s.j&&(Yt(s),s.i=null,s.g.forEach(function(l,u){const v=u.toLowerCase();u!=v&&(ui(this,u),fi(this,v,l))},s)),s.j=a}function bc(s,a){const l=new xe;if(c.Image){const u=new Image;u.onload=A(Ft,l,"TestLoadImage: loaded",!0,a,u),u.onerror=A(Ft,l,"TestLoadImage: error",!1,a,u),u.onabort=A(Ft,l,"TestLoadImage: abort",!1,a,u),u.ontimeout=A(Ft,l,"TestLoadImage: timeout",!1,a,u),c.setTimeout(function(){u.ontimeout&&u.ontimeout()},1e4),u.src=s}else a(!1)}function Rc(s,a){const l=new xe,u=new AbortController,v=setTimeout(()=>{u.abort(),Ft(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:u.signal}).then(w=>{clearTimeout(v),w.ok?Ft(l,"TestPingServer: ok",!0,a):Ft(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),Ft(l,"TestPingServer: error",!1,a)})}function Ft(s,a,l,u,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),u(l)}catch{}}function Sc(){this.g=new lc}function Cr(s){this.i=s.Sb||null,this.h=s.ab||!1}T(Cr,zs),Cr.prototype.g=function(){return new vn(this.i,this.h)};function vn(s,a){ht.call(this),this.H=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(vn,ht),n=vn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=a,this.readyState=1,Be(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const a={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(a.body=s),(this.H||c).fetch(new Request(this.D,a)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ue(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Be(this)),this.g&&(this.readyState=3,Be(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;pi(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function pi(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.B.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Ue(this):Be(this),this.readyState==3&&pi(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,Ue(this))},n.Na=function(s){this.g&&(this.response=s,Ue(this))},n.ga=function(){this.g&&Ue(this)};function Ue(s){s.readyState=4,s.l=null,s.j=null,s.B=null,Be(s)}n.setRequestHeader=function(s,a){this.A.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function Be(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(vn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function gi(s){let a="";return mn(s,function(l,u){a+=u,a+=":",a+=l,a+=`\r
`}),a}function Pr(s,a,l){t:{for(u in l){var u=!1;break t}u=!0}u||(l=gi(l),typeof s=="string"?l!=null&&Ne(l):H(s,a,l))}function J(s){ht.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(J,ht);var Cc=/^https?$/i,Pc=["POST","PUT"];n=J.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,a,l,u){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Js.g(),this.g.onreadystatechange=b(f(this.Ca,this));try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){_i(this,w);return}if(s=l||"",l=new Map(this.headers),u)if(Object.getPrototypeOf(u)===Object.prototype)for(var v in u)l.set(v,u[v]);else if(typeof u.keys=="function"&&typeof u.get=="function")for(const w of u.keys())l.set(w,u.get(w));else throw Error("Unknown input type for opt_headers: "+String(u));u=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),v=c.FormData&&s instanceof c.FormData,!(Array.prototype.indexOf.call(Pc,a,void 0)>=0)||u||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,P]of l)this.g.setRequestHeader(w,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(w){_i(this,w)}};function _i(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.o=5,yi(s),In(s)}function yi(s){s.A||(s.A=!0,gt(s,"complete"),gt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,gt(this,"complete"),gt(this,"abort"),In(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),In(this,!0)),J.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ei(this):this.Xa())},n.Xa=function(){Ei(this)};function Ei(s){if(s.h&&typeof o<"u"){if(s.v&&jt(s)==4)setTimeout(s.Ca.bind(s),0);else if(gt(s,"readystatechange"),jt(s)==4){s.h=!1;try{const w=s.ca();t:switch(w){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var u;if(u=w===0){let P=String(s.D).match(ci)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),u=!Cc.test(P?P.toLowerCase():"")}l=u}if(l)gt(s,"complete"),gt(s,"success");else{s.o=6;try{var v=jt(s)>2?s.g.statusText:""}catch{v=""}s.l=v+" ["+s.ca()+"]",yi(s)}}finally{In(s)}}}}function In(s,a){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const l=s.g;s.g=null,a||gt(s,"ready");try{l.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function jt(s){return s.g?s.g.readyState:0}n.ca=function(){try{return jt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),cc(a)}};function Ti(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Vc(s){const a={};s=(s.g&&jt(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let u=0;u<s.length;u++){if(p(s[u]))continue;var l=mc(s[u]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[v]||[];a[v]=w,w.push(l)}nc(a,function(u){return u.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function $e(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function vi(s){this.za=0,this.i=[],this.j=new xe,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=$e("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=$e("baseRetryDelayMs",5e3,s),this.Za=$e("retryDelaySeedMs",1e4,s),this.Ta=$e("forwardChannelMaxRetries",2,s),this.va=$e("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new ri(s&&s.concurrentRequestLimit),this.Ba=new Sc,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=vi.prototype,n.ka=8,n.I=1,n.connect=function(s,a,l,u){_t(0),this.W=s,this.H=a||{},l&&u!==void 0&&(this.H.OSID=l,this.H.OAID=u),this.F=this.X,this.J=Vi(this,null,this.W),wn(this)};function Vr(s){if(Ii(s),s.I==3){var a=s.V++,l=St(s.J);if(H(l,"SID",s.M),H(l,"RID",a),H(l,"TYPE","terminate"),qe(s,l),a=new Mt(s,s.j,a),a.M=2,a.A=Tn(St(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.A.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.A,l=!0),l||(a.g=Di(a.j,null),a.g.ea(a.A)),a.F=Date.now(),En(a)}Pi(s)}function An(s){s.g&&(xr(s),s.g.cancel(),s.g=null)}function Ii(s){An(s),s.v&&(c.clearTimeout(s.v),s.v=null),bn(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&c.clearTimeout(s.m),s.m=null)}function wn(s){if(!si(s.h)&&!s.m){s.m=!0;var a=s.Ea;It||m(),ut||(It(),ut=!0),y.add(a,s),s.D=0}}function Dc(s,a){return ii(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=a.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=De(f(s.Ea,s,a),Ci(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const v=new Mt(this,this.j,s);let w=this.o;if(this.U&&(w?(w=ks(w),Ms(w,this.U)):w=this.U),this.u!==null||this.R||(v.J=w,w=null),this.S)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var u=this.i[l];if("__data__"in u.map&&(u=u.map.__data__,typeof u=="string")){u=u.length;break e}u=void 0}if(u===void 0)break;if(a+=u,a>4096){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=wi(this,v,a),l=St(this.J),H(l,"RID",s),H(l,"CVER",22),this.G&&H(l,"X-HTTP-Session-Id",this.G),qe(this,l),w&&(this.R?a="headers="+Ne(gi(w))+"&"+a:this.u&&Pr(l,this.u,w)),Rr(this.h,v),this.Ra&&H(l,"TYPE","init"),this.S?(H(l,"$req",a),H(l,"SID","null"),v.U=!0,Ir(v,l,null)):Ir(v,l,a),this.I=2}}else this.I==3&&(s?Ai(this,s):this.i.length==0||si(this.h)||Ai(this))};function Ai(s,a){var l;a?l=a.l:l=s.V++;const u=St(s.J);H(u,"SID",s.M),H(u,"RID",l),H(u,"AID",s.K),qe(s,u),s.u&&s.o&&Pr(u,s.u,s.o),l=new Mt(s,s.j,l,s.D+1),s.u===null&&(l.J=s.o),a&&(s.i=a.G.concat(s.i)),a=wi(s,l,1e3),l.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),Rr(s.h,l),Ir(l,u,a)}function qe(s,a){s.H&&mn(s.H,function(l,u){H(a,u,l)}),s.l&&mn({},function(l,u){H(a,u,l)})}function wi(s,a,l){l=Math.min(s.i.length,l);const u=s.l?f(s.l.Ka,s.l,s):null;t:{var v=s.i;let L=-1;for(;;){const et=["count="+l];L==-1?l>0?(L=v[0].g,et.push("ofs="+L)):L=0:et.push("ofs="+L);let q=!0;for(let nt=0;nt<l;nt++){var w=v[nt].g;const Ct=v[nt].map;if(w-=L,w<0)L=Math.max(0,v[nt].g-100),q=!1;else try{w="req"+w+"_"||"";try{var P=Ct instanceof Map?Ct:Object.entries(Ct);for(const[te,Ut]of P){let Bt=Ut;h(Ut)&&(Bt=_r(Ut)),et.push(w+te+"="+encodeURIComponent(Bt))}}catch(te){throw et.push(w+"type="+encodeURIComponent("_badmap")),te}}catch{u&&u(Ct)}}if(q){P=et.join("&");break t}}P=void 0}return s=s.i.splice(0,l),a.G=s,P}function bi(s){if(!s.g&&!s.v){s.Y=1;var a=s.Da;It||m(),ut||(It(),ut=!0),y.add(a,s),s.A=0}}function Dr(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=De(f(s.Da,s),Ci(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,Ri(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=De(f(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,_t(10),An(this),Ri(this))};function xr(s){s.B!=null&&(c.clearTimeout(s.B),s.B=null)}function Ri(s){s.g=new Mt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var a=St(s.na);H(a,"RID","rpc"),H(a,"SID",s.M),H(a,"AID",s.K),H(a,"CI",s.F?"0":"1"),!s.F&&s.ia&&H(a,"TO",s.ia),H(a,"TYPE","xmlhttp"),qe(s,a),s.u&&s.o&&Pr(a,s.u,s.o),s.O&&(s.g.H=s.O);var l=s.g;s=s.ba,l.M=1,l.A=Tn(St(a)),l.u=null,l.R=!0,ti(l,s)}n.Va=function(){this.C!=null&&(this.C=null,An(this),Dr(this),_t(19))};function bn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Si(s,a){var l=null;if(s.g==a){bn(s),xr(s),s.g=null;var u=2}else if(br(s.h,a))l=a.G,oi(s.h,a),u=1;else return;if(s.I!=0){if(a.o)if(u==1){l=a.u?a.u.length:0,a=Date.now()-a.F;var v=s.D;u=_n(),gt(u,new Qs(u,l)),wn(s)}else bi(s);else if(v=a.m,v==3||v==0&&a.X>0||!(u==1&&Dc(s,a)||u==2&&Dr(s)))switch(l&&l.length>0&&(a=s.h,a.i=a.i.concat(l)),v){case 1:Zt(s,5);break;case 4:Zt(s,10);break;case 3:Zt(s,6);break;default:Zt(s,2)}}}function Ci(s,a){let l=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(l*=2),l*a}function Zt(s,a){if(s.j.info("Error code "+a),a==2){var l=f(s.bb,s),u=s.Ua;const v=!u;u=new Lt(u||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Oe(u,"https"),Tn(u),v?bc(u.toString(),l):Rc(u.toString(),l)}else _t(2);s.I=0,s.l&&s.l.pa(a),Pi(s),Ii(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Pi(s){if(s.I=0,s.ja=[],s.l){const a=ai(s.h);(a.length!=0||s.i.length!=0)&&(N(s.ja,a),N(s.ja,s.i),s.h.i.length=0,V(s.i),s.i.length=0),s.l.oa()}}function Vi(s,a,l){var u=l instanceof Lt?St(l):new Lt(l);if(u.g!="")a&&(u.g=a+"."+u.g),Me(u,u.u);else{var v=c.location;u=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;const w=new Lt(null);u&&Oe(w,u),a&&(w.g=a),v&&Me(w,v),l&&(w.h=l),u=w}return l=s.G,a=s.wa,l&&a&&H(u,l,a),H(u,"VER",s.ka),qe(s,u),u}function Di(s,a,l){if(a&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Aa&&!s.ma?new J(new Cr({ab:l})):new J(s.ma),a.Fa(s.L),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xi(){}n=xi.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Rn(){}Rn.prototype.g=function(s,a){return new vt(s,a)};function vt(s,a){ht.call(this),this.g=new vi(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.sa&&(s?s["X-WebChannel-Client-Profile"]=a.sa:s={"X-WebChannel-Client-Profile":a.sa}),this.g.U=s,(s=a&&a.Qb)&&!p(s)&&(this.g.u=s),this.A=a&&a.supportsCrossDomainXhr||!1,this.v=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!p(a)&&(this.g.G=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new fe(this)}T(vt,ht),vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Vr(this.g)},vt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.v&&(l={},l.__data__=_r(s),s=l);a.i.push(new _c(a.Ya++,s)),a.I==3&&wn(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,Vr(this.g),delete this.g,vt.Z.N.call(this)};function Ni(s){yr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}T(Ni,yr);function ki(){Er.call(this),this.status=1}T(ki,Er);function fe(s){this.g=s}T(fe,xi),fe.prototype.ra=function(){gt(this.g,"a")},fe.prototype.qa=function(s){gt(this.g,new Ni(s))},fe.prototype.pa=function(s){gt(this.g,new ki)},fe.prototype.oa=function(){gt(this.g,"b")},Rn.prototype.createWebChannel=Rn.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Qo=function(){return new Rn},Ko=function(){return _n()},Wo=Xt,Kr={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},yn.NO_ERROR=0,yn.TIMEOUT=8,yn.HTTP_ERROR=6,kn=yn,Xs.COMPLETE="complete",Go=Xs,Hs.EventType=Pe,Pe.OPEN="a",Pe.CLOSE="b",Pe.ERROR="c",Pe.MESSAGE="d",ht.prototype.listen=ht.prototype.J,He=Hs,J.prototype.listenOnce=J.prototype.K,J.prototype.getLastError=J.prototype.Ha,J.prototype.getLastErrorCode=J.prototype.ya,J.prototype.getStatus=J.prototype.ca,J.prototype.getResponseJson=J.prototype.La,J.prototype.getResponseText=J.prototype.la,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Fa,Ho=J}).apply(typeof Cn<"u"?Cn:typeof self<"u"?self:typeof window<"u"?window:{});const Wi="@firebase/firestore",Ki="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Re="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=new jo("@firebase/firestore");function pe(){return ie.logLevel}function D(n,...t){if(ie.logLevel<=U.DEBUG){const e=t.map(us);ie.debug(`Firestore (${Re}): ${n}`,...e)}}function oe(n,...t){if(ie.logLevel<=U.ERROR){const e=t.map(us);ie.error(`Firestore (${Re}): ${n}`,...e)}}function er(n,...t){if(ie.logLevel<=U.WARN){const e=t.map(us);ie.warn(`Firestore (${Re}): ${n}`,...e)}}function us(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Xo(n,r,e)}function Xo(n,t,e){let r=`FIRESTORE (${Re}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw oe(r),new Error(r)}function Y(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||Xo(t,i,r)}function z(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends be{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Iu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ft.UNAUTHENTICATED))}shutdown(){}}class Au{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class wu{constructor(t){this.t=t,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Y(this.o===void 0,42304);let r=this.i;const i=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let o=new re;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new re,t.enqueueRetryable(()=>i(this.currentUser))};const c=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},h=d=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(d=>h(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?h(d):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new re)}},0),c()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string",31837,{l:r}),new Jo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string",2055,{h:t}),new ft(t)}}class bu{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ru{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new bu(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Su{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,iu(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Y(this.o===void 0,3512);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const c=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Qi(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Y(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Qi(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Cu(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function B(n,t){return n<t?-1:n>t?1:0}function Qr(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),o=t.charAt(r);if(i!==o)return jr(i)===jr(o)?B(i,o):jr(i)?1:-1}return B(n.length,t.length)}const Pu=55296,Vu=57343;function jr(n){const t=n.charCodeAt(0);return t>=Pu&&t<=Vu}function Te(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="__name__";class Pt{constructor(t,e,r){e===void 0?e=0:e>t.length&&F(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&F(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Pt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Pt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Pt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return B(t.length,e.length)}static compareSegments(t,e){const r=Pt.isNumericId(t),i=Pt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Pt.extractNumericId(t).compare(Pt.extractNumericId(e)):Qr(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ls.fromString(t.substring(4,t.length-2))}}class X extends Pt{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new X(e)}static emptyPath(){return new X([])}}const Du=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Pt{construct(t,e,r){return new at(t,e,r)}static isValidIdentifier(t){return Du.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xi}static keyField(){return new at([Xi])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new x(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let c=!1;for(;i<t.length;){const h=t[i];if(h==="\\"){if(i+1===t.length)throw new x(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new x(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,i+=2}else h==="`"?(c=!c,i++):h!=="."||c?(r+=h,i++):(o(),i++)}if(o(),c)throw new x(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new at(e)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(X.fromString(t))}static fromName(t){return new M(X.fromString(t).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new X(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(n,t,e){if(!e)throw new x(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function xu(n,t,e,r){if(t===!0&&r===!0)throw new x(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ji(n){if(!M.isDocumentKey(n))throw new x(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Yi(n){if(M.isDocumentKey(n))throw new x(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Zo(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ds(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function ta(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ds(n);throw new x(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n,t){const e={typeString:n};return t&&(e.value=t),e}function an(n,t){if(!Zo(n))throw new x(S.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const c=n[r];if(i&&typeof c!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&c!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new x(S.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=-62135596800,to=1e6;class W{static now(){return W.fromMillis(Date.now())}static fromDate(t){return W.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*to);return new W(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Zi)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/to}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:W._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(an(t,W._jsonSchema))return new W(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Zi;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}W._jsonSchemaVersion="firestore/timestamp/1.0",W._jsonSchema={type:tt("string",W._jsonSchemaVersion),seconds:tt("number"),nanoseconds:tt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{static fromTimestamp(t){return new G(t)}static min(){return new G(new W(0,0))}static max(){return new G(new W(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=-1;function Nu(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new W(e+1,0):new W(e,r));return new Ht(i,M.empty(),t)}function ku(n){return new Ht(n.readTime,n.key,en)}class Ht{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Ht(G.min(),M.empty(),en)}static max(){return new Ht(G.max(),M.empty(),en)}}function Ou(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Mu)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,r)=>{e(t)})}static reject(t){return new R((e,r)=>{r(t)})}static waitFor(t){return new R((e,r)=>{let i=0,o=0,c=!1;t.forEach(h=>{++i,h.next(()=>{++o,c&&o===i&&e()},d=>r(d))}),c=!0,o===i&&e()})}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next(i=>i?R.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new R((r,i)=>{const o=t.length,c=new Array(o);let h=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next(A=>{c[f]=A,++h,h===o&&r(c)},A=>i(A))}})}static doWhile(t,e){return new R((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Fu(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function cn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}ms.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=-1;function gs(n){return n==null}function qn(n){return n===0&&1/n==-1/0}function ju(n){return typeof n=="number"&&Number.isInteger(n)&&!qn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="";function Uu(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=eo(t)),t=Bu(n.get(e),t);return eo(t)}function Bu(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case ea:e+="";break;default:e+=o}}return e}function eo(n){return n+ea+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Se(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function na(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e){this.comparator=t,this.root=e||it.EMPTY}insert(t,e){return new Tt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,it.BLACK,null,null))}remove(t){return new Tt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,it.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Pn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Pn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Pn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Pn(this.root,t,this.comparator,!0)}}class Pn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class it{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??it.RED,this.left=i??it.EMPTY,this.right=o??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new it(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw F(27949);return t+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new it(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.comparator=t,this.data=new Tt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ro(this.data.getIterator())}getIteratorFrom(t){return new ro(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ct)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ct(this.comparator);return e.data=t,e}}class ro{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.fields=t,t.sort(at.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new ct(at.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Te(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new $u("Invalid base64 string: "+o):o}}(t);return new Vt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let c=0;c<i.length;++c)o+=String.fromCharCode(i[c]);return o}(t);return new Vt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const qu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ae(n){if(Y(!!n,39018),typeof n=="string"){let t=0;const e=qu.exec(n);if(Y(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ot(n.seconds),nanos:ot(n.nanos)}}function ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ve(n){return typeof n=="string"?Vt.fromBase64String(n):Vt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="server_timestamp",sa="__type__",ia="__previous_value__",oa="__local_write_time__";function _s(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[sa])==null?void 0:r.stringValue)===ra}function ys(n){const t=n.mapValue.fields[ia];return _s(t)?ys(t):t}function zn(n){const t=ae(n.mapValue.fields[oa].timestampValue);return new W(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t,e,r,i,o,c,h,d,f,A){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=c,this.autoDetectLongPolling=h,this.longPollingOptions=d,this.useFetchStreams=f,this.isUsingEmulator=A}}const Hn="(default)";class Gn{constructor(t,e){this.projectId=t,this.database=e||Hn}static empty(){return new Gn("","")}get isDefaultDatabase(){return this.database===Hn}isEqual(t){return t instanceof Gn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="__type__",ca="__max__",Vn={mapValue:{fields:{__type__:{stringValue:ca}}}},la="__vector__",Xr="value";function ce(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?_s(n)?4:Gu(n)?9007199254740991:Hu(n)?10:11:F(28295,{value:n})}function Dt(n,t){if(n===t)return!0;const e=ce(n);if(e!==ce(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return zn(n).isEqual(zn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const c=ae(i.timestampValue),h=ae(o.timestampValue);return c.seconds===h.seconds&&c.nanos===h.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return ve(i.bytesValue).isEqual(ve(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return ot(i.geoPointValue.latitude)===ot(o.geoPointValue.latitude)&&ot(i.geoPointValue.longitude)===ot(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ot(i.integerValue)===ot(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const c=ot(i.doubleValue),h=ot(o.doubleValue);return c===h?qn(c)===qn(h):isNaN(c)&&isNaN(h)}return!1}(n,t);case 9:return Te(n.arrayValue.values||[],t.arrayValue.values||[],Dt);case 10:case 11:return function(i,o){const c=i.mapValue.fields||{},h=o.mapValue.fields||{};if(no(c)!==no(h))return!1;for(const d in c)if(c.hasOwnProperty(d)&&(h[d]===void 0||!Dt(c[d],h[d])))return!1;return!0}(n,t);default:return F(52216,{left:n})}}function nn(n,t){return(n.values||[]).find(e=>Dt(e,t))!==void 0}function Ie(n,t){if(n===t)return 0;const e=ce(n),r=ce(t);if(e!==r)return B(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return function(o,c){const h=ot(o.integerValue||o.doubleValue),d=ot(c.integerValue||c.doubleValue);return h<d?-1:h>d?1:h===d?0:isNaN(h)?isNaN(d)?0:-1:1}(n,t);case 3:return so(n.timestampValue,t.timestampValue);case 4:return so(zn(n),zn(t));case 5:return Qr(n.stringValue,t.stringValue);case 6:return function(o,c){const h=ve(o),d=ve(c);return h.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(o,c){const h=o.split("/"),d=c.split("/");for(let f=0;f<h.length&&f<d.length;f++){const A=B(h[f],d[f]);if(A!==0)return A}return B(h.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,c){const h=B(ot(o.latitude),ot(c.latitude));return h!==0?h:B(ot(o.longitude),ot(c.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return io(n.arrayValue,t.arrayValue);case 10:return function(o,c){var b,V,N,O;const h=o.fields||{},d=c.fields||{},f=(b=h[Xr])==null?void 0:b.arrayValue,A=(V=d[Xr])==null?void 0:V.arrayValue,T=B(((N=f==null?void 0:f.values)==null?void 0:N.length)||0,((O=A==null?void 0:A.values)==null?void 0:O.length)||0);return T!==0?T:io(f,A)}(n.mapValue,t.mapValue);case 11:return function(o,c){if(o===Vn.mapValue&&c===Vn.mapValue)return 0;if(o===Vn.mapValue)return 1;if(c===Vn.mapValue)return-1;const h=o.fields||{},d=Object.keys(h),f=c.fields||{},A=Object.keys(f);d.sort(),A.sort();for(let T=0;T<d.length&&T<A.length;++T){const b=Qr(d[T],A[T]);if(b!==0)return b;const V=Ie(h[d[T]],f[A[T]]);if(V!==0)return V}return B(d.length,A.length)}(n.mapValue,t.mapValue);default:throw F(23264,{he:e})}}function so(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=ae(n),r=ae(t),i=B(e.seconds,r.seconds);return i!==0?i:B(e.nanos,r.nanos)}function io(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Ie(e[i],r[i]);if(o)return o}return B(e.length,r.length)}function Ae(n){return Jr(n)}function Jr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ae(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ve(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Jr(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const c of r)o?o=!1:i+=",",i+=`${c}:${Jr(e.fields[c])}`;return i+"}"}(n.mapValue):F(61005,{value:n})}function On(n){switch(ce(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ys(n);return t?16+On(t):16;case 5:return 2*n.stringValue.length;case 6:return ve(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+On(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Se(r.fields,(o,c)=>{i+=o.length+On(c)}),i}(n.mapValue);default:throw F(13486,{value:n})}}function Yr(n){return!!n&&"integerValue"in n}function Es(n){return!!n&&"arrayValue"in n}function Mn(n){return!!n&&"mapValue"in n}function Hu(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[aa])==null?void 0:r.stringValue)===la}function We(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Se(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=We(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=We(n.arrayValue.values[e]);return t}return{...n}}function Gu(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ca}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Mn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=We(e)}setAll(t){let e=at.emptyPath(),r={},i=[];t.forEach((c,h)=>{if(!e.isImmediateParentOf(h)){const d=this.getFieldsMap(e);this.applyChanges(d,r,i),r={},i=[],e=h.popLast()}c?r[h.lastSegment()]=We(c):i.push(h.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Mn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Dt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Mn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Se(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new wt(We(this.value))}}function ua(n){const t=[];return Se(n.fields,(e,r)=>{const i=new at([e]);if(Mn(r)){const o=ua(r.mapValue).fields;if(o.length===0)t.push(i);else for(const c of o)t.push(i.child(c))}else t.push(i)}),new Rt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e,r,i,o,c,h){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=c,this.documentState=h}static newInvalidDocument(t){return new At(t,0,G.min(),G.min(),G.min(),wt.empty(),0)}static newFoundDocument(t,e,r,i){return new At(t,1,e,G.min(),r,i,0)}static newNoDocument(t,e){return new At(t,2,e,G.min(),G.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new At(t,3,e,G.min(),G.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof At&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,e){this.position=t,this.inclusive=e}}function oo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],c=n.position[i];if(o.field.isKeyField()?r=M.comparator(M.fromName(c.referenceValue),e.key):r=Ie(c,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ao(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Dt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Wu(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{}class st extends ha{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Qu(t,e,r):e==="array-contains"?new Yu(t,r):e==="in"?new Zu(t,r):e==="not-in"?new th(t,r):e==="array-contains-any"?new eh(t,r):new st(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Xu(t,r):new Ju(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ie(e,this.value)):e!==null&&ce(this.value)===ce(e)&&this.matchesComparison(Ie(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gt extends ha{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Gt(t,e)}matches(t){return da(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function da(n){return n.op==="and"}function fa(n){return Ku(n)&&da(n)}function Ku(n){for(const t of n.filters)if(t instanceof Gt)return!1;return!0}function Zr(n){if(n instanceof st)return n.field.canonicalString()+n.op.toString()+Ae(n.value);if(fa(n))return n.filters.map(t=>Zr(t)).join(",");{const t=n.filters.map(e=>Zr(e)).join(",");return`${n.op}(${t})`}}function ma(n,t){return n instanceof st?function(r,i){return i instanceof st&&r.op===i.op&&r.field.isEqual(i.field)&&Dt(r.value,i.value)}(n,t):n instanceof Gt?function(r,i){return i instanceof Gt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,c,h)=>o&&ma(c,i.filters[h]),!0):!1}(n,t):void F(19439)}function pa(n){return n instanceof st?function(e){return`${e.field.canonicalString()} ${e.op} ${Ae(e.value)}`}(n):n instanceof Gt?function(e){return e.op.toString()+" {"+e.getFilters().map(pa).join(" ,")+"}"}(n):"Filter"}class Qu extends st{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class Xu extends st{constructor(t,e){super(t,"in",e),this.keys=ga("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Ju extends st{constructor(t,e){super(t,"not-in",e),this.keys=ga("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ga(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class Yu extends st{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Es(e)&&nn(e.arrayValue,this.value)}}class Zu extends st{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&nn(this.value.arrayValue,e)}}class th extends st{constructor(t,e){super(t,"not-in",e)}matches(t){if(nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!nn(this.value.arrayValue,e)}}class eh extends st{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Es(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>nn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t,e=null,r=[],i=[],o=null,c=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=c,this.endAt=h,this.Te=null}}function co(n,t=null,e=[],r=[],i=null,o=null,c=null){return new nh(n,t,e,r,i,o,c)}function Ts(n){const t=z(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Zr(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),gs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ae(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ae(r)).join(",")),t.Te=e}return t.Te}function vs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Wu(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ma(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ao(n.startAt,t.startAt)&&ao(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e=null,r=[],i=[],o=null,c="F",h=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=c,this.startAt=h,this.endAt=d,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function rh(n,t,e,r,i,o,c,h){return new nr(n,t,e,r,i,o,c,h)}function sh(n){return new nr(n)}function lo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ih(n){return n.collectionGroup!==null}function Ke(n){const t=z(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(c){let h=new ct(at.comparator);return c.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(h=h.add(f.field))})}),h})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new Kn(o,r))}),e.has(at.keyField().canonicalString())||t.Ie.push(new Kn(at.keyField(),r))}return t.Ie}function se(n){const t=z(n);return t.Ee||(t.Ee=oh(t,Ke(n))),t.Ee}function oh(n,t){if(n.limitType==="F")return co(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Kn(i.field,o)});const e=n.endAt?new Wn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Wn(n.startAt.position,n.startAt.inclusive):null;return co(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ts(n,t,e){return new nr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function _a(n,t){return vs(se(n),se(t))&&n.limitType===t.limitType}function ya(n){return`${Ts(se(n))}|lt:${n.limitType}`}function ze(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>pa(i)).join(", ")}]`),gs(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Ae(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Ae(i)).join(",")),`Target(${r})`}(se(n))}; limitType=${n.limitType})`}function Is(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of Ke(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(c,h,d){const f=oo(c,h,d);return c.inclusive?f<=0:f<0}(r.startAt,Ke(r),i)||r.endAt&&!function(c,h,d){const f=oo(c,h,d);return c.inclusive?f>=0:f>0}(r.endAt,Ke(r),i))}(n,t)}function ah(n){return(t,e)=>{let r=!1;for(const i of Ke(n)){const o=ch(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function ch(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,c,h){const d=c.data.field(o),f=h.data.field(o);return d!==null&&f!==null?Ie(d,f):F(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Se(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return na(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh=new Tt(M.comparator);function Qn(){return lh}const Ea=new Tt(M.comparator);function Dn(...n){let t=Ea;for(const e of n)t=t.insert(e.key,e);return t}function Ta(n){let t=Ea;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ne(){return Qe()}function va(){return Qe()}function Qe(){return new le(n=>n.toString(),(n,t)=>n.isEqual(t))}const uh=new Tt(M.comparator),hh=new ct(M.comparator);function mt(...n){let t=hh;for(const e of n)t=t.add(e);return t}const dh=new ct(B);function fh(){return dh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qn(t)?"-0":t}}function Ia(n){return{integerValue:""+n}}function mh(n,t){return ju(t)?Ia(t):As(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this._=void 0}}function ph(n,t,e){return n instanceof rn?function(i,o){const c={fields:{[sa]:{stringValue:ra},[oa]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&_s(o)&&(o=ys(o)),o&&(c.fields[ia]=o),{mapValue:c}}(e,t):n instanceof sn?wa(n,t):n instanceof on?ba(n,t):function(i,o){const c=Aa(i,o),h=uo(c)+uo(i.Ae);return Yr(c)&&Yr(i.Ae)?Ia(h):As(i.serializer,h)}(n,t)}function gh(n,t,e){return n instanceof sn?wa(n,t):n instanceof on?ba(n,t):e}function Aa(n,t){return n instanceof Xn?function(r){return Yr(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class rn extends rr{}class sn extends rr{constructor(t){super(),this.elements=t}}function wa(n,t){const e=Ra(t);for(const r of n.elements)e.some(i=>Dt(i,r))||e.push(r);return{arrayValue:{values:e}}}class on extends rr{constructor(t){super(),this.elements=t}}function ba(n,t){let e=Ra(t);for(const r of n.elements)e=e.filter(i=>!Dt(i,r));return{arrayValue:{values:e}}}class Xn extends rr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function uo(n){return ot(n.integerValue||n.doubleValue)}function Ra(n){return Es(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,e){this.field=t,this.transform=e}}function yh(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof sn&&i instanceof sn||r instanceof on&&i instanceof on?Te(r.elements,i.elements,Dt):r instanceof Xn&&i instanceof Xn?Dt(r.Ae,i.Ae):r instanceof rn&&i instanceof rn}(n.transform,t.transform)}class Eh{constructor(t,e){this.version=t,this.transformResults=e}}class xt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new xt}static exists(t){return new xt(void 0,t)}static updateTime(t){return new xt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ln(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class sr{}function Sa(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Pa(n.key,xt.none()):new ln(n.key,n.data,xt.none());{const e=n.data,r=wt.empty();let i=new ct(at.comparator);for(let o of t.fields)if(!i.has(o)){let c=e.field(o);c===null&&o.length>1&&(o=o.popLast(),c=e.field(o)),c===null?r.delete(o):r.set(o,c),i=i.add(o)}return new ue(n.key,r,new Rt(i.toArray()),xt.none())}}function Th(n,t,e){n instanceof ln?function(i,o,c){const h=i.value.clone(),d=fo(i.fieldTransforms,o,c.transformResults);h.setAll(d),o.convertToFoundDocument(c.version,h).setHasCommittedMutations()}(n,t,e):n instanceof ue?function(i,o,c){if(!Ln(i.precondition,o))return void o.convertToUnknownDocument(c.version);const h=fo(i.fieldTransforms,o,c.transformResults),d=o.data;d.setAll(Ca(i)),d.setAll(h),o.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,t,e):function(i,o,c){o.convertToNoDocument(c.version).setHasCommittedMutations()}(0,t,e)}function Xe(n,t,e,r){return n instanceof ln?function(o,c,h,d){if(!Ln(o.precondition,c))return h;const f=o.value.clone(),A=mo(o.fieldTransforms,d,c);return f.setAll(A),c.convertToFoundDocument(c.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof ue?function(o,c,h,d){if(!Ln(o.precondition,c))return h;const f=mo(o.fieldTransforms,d,c),A=c.data;return A.setAll(Ca(o)),A.setAll(f),c.convertToFoundDocument(c.version,A).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,t,e,r):function(o,c,h){return Ln(o.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):h}(n,t,e)}function vh(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=Aa(r.transform,i||null);o!=null&&(e===null&&(e=wt.empty()),e.set(r.field,o))}return e||null}function ho(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Te(r,i,(o,c)=>yh(o,c))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ln extends sr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ue extends sr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ca(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function fo(n,t,e){const r=new Map;Y(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let i=0;i<e.length;i++){const o=n[i],c=o.transform,h=t.data.field(o.field);r.set(o.field,gh(c,h,e[i]))}return r}function mo(n,t,e){const r=new Map;for(const i of n){const o=i.transform,c=e.data.field(i.field);r.set(i.field,ph(o,c,t))}return r}class Pa extends sr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ih extends sr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Th(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Xe(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Xe(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=va();return this.mutations.forEach(i=>{const o=t.get(i.key),c=o.overlayedDocument;let h=this.applyToLocalView(c,o.mutatedFields);h=e.has(i.key)?null:h;const d=Sa(c,h);d!==null&&r.set(i.key,d),c.isValidDocument()||c.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),mt())}isEqual(t){return this.batchId===t.batchId&&Te(this.mutations,t.mutations,(e,r)=>ho(e,r))&&Te(this.baseMutations,t.baseMutations,(e,r)=>ho(e,r))}}class ws{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){Y(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let i=function(){return uh}();const o=t.mutations;for(let c=0;c<o.length;c++)i=i.insert(o[c].key,r[c].version);return new ws(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z,j;function bh(n){switch(n){case S.OK:return F(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function Rh(n){if(n===void 0)return oe("GRPC error has no .code"),S.UNKNOWN;switch(n){case Z.OK:return S.OK;case Z.CANCELLED:return S.CANCELLED;case Z.UNKNOWN:return S.UNKNOWN;case Z.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Z.INTERNAL:return S.INTERNAL;case Z.UNAVAILABLE:return S.UNAVAILABLE;case Z.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Z.NOT_FOUND:return S.NOT_FOUND;case Z.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Z.ABORTED:return S.ABORTED;case Z.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Z.DATA_LOSS:return S.DATA_LOSS;default:return F(39323,{code:n})}}(j=Z||(Z={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ls([4294967295,4294967295],0);class Sh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function es(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ch(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ph(n,t){return es(n,t.toTimestamp())}function ye(n){return Y(!!n,49232),G.fromTimestamp(function(e){const r=ae(e);return new W(r.seconds,r.nanos)}(n))}function Va(n,t){return ns(n,t).canonicalString()}function ns(n,t){const e=function(i){return new X(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Vh(n){const t=X.fromString(n);return Y(Fh(t),10190,{key:t.toString()}),t}function rs(n,t){return Va(n.databaseId,t.path)}function Dh(n){const t=Vh(n);return t.length===4?X.emptyPath():Nh(t)}function xh(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Nh(n){return Y(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function po(n,t,e){return{name:rs(n,t),fields:e.value.mapValue.fields}}function kh(n,t){let e;if(t instanceof ln)e={update:po(n,t.key,t.value)};else if(t instanceof Pa)e={delete:rs(n,t.key)};else if(t instanceof ue)e={update:po(n,t.key,t.data),updateMask:Lh(t.fieldMask)};else{if(!(t instanceof Ih))return F(16599,{Vt:t.type});e={verify:rs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,c){const h=c.transform;if(h instanceof rn)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof sn)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof on)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Xn)return{fieldPath:c.field.canonicalString(),increment:h.Ae};throw F(20930,{transform:c.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Ph(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:F(27497)}(n,t.precondition)),e}function Oh(n,t){return n&&n.length>0?(Y(t!==void 0,14353),n.map(e=>function(i,o){let c=i.updateTime?ye(i.updateTime):ye(o);return c.isEqual(G.min())&&(c=ye(o)),new Eh(c,i.transformResults||[])}(e,t))):[]}function Mh(n){let t=Dh(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){Y(r===1,65062);const A=e.from[0];A.allDescendants?i=A.collectionId:t=t.child(A.collectionId)}let o=[];e.where&&(o=function(T){const b=Da(T);return b instanceof Gt&&fa(b)?b.getFilters():[b]}(e.where));let c=[];e.orderBy&&(c=function(T){return T.map(b=>function(N){return new Kn(ge(N.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(b))}(e.orderBy));let h=null;e.limit&&(h=function(T){let b;return b=typeof T=="object"?T.value:T,gs(b)?null:b}(e.limit));let d=null;e.startAt&&(d=function(T){const b=!!T.before,V=T.values||[];return new Wn(V,b)}(e.startAt));let f=null;return e.endAt&&(f=function(T){const b=!T.before,V=T.values||[];return new Wn(V,b)}(e.endAt)),rh(t,i,c,o,h,"F",d,f)}function Da(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ge(e.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ge(e.unaryFilter.field);return st.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ge(e.unaryFilter.field);return st.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=ge(e.unaryFilter.field);return st.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}}(n):n.fieldFilter!==void 0?function(e){return st.create(ge(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Gt.create(e.compositeFilter.filters.map(r=>Da(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F(1026)}}(e.compositeFilter.op))}(n):F(30097,{filter:n})}function ge(n){return at.fromServerFormat(n.fieldPath)}function Lh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Fh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(t){this.yt=t}}function Uh(n){const t=Mh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ts(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this.Cn=new $h}addToCollectionParentIndex(t,e){return this.Cn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Ht.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Ht.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class $h{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new ct(X.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ct(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},xa=41943040;class Et{static withCacheSize(t){return new Et(t,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(xa,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new we(0)}static cr(){return new we(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="LruGarbageCollector",qh=1048576;function yo([n,t],[e,r]){const i=B(n,e);return i===0?B(t,r):i}class zh{constructor(t){this.Ir=t,this.buffer=new ct(yo),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();yo(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Hh{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){D(_o,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){cn(e)?D(_o,"Ignoring IndexedDB error during garbage collection: ",e):await fs(e)}await this.Vr(3e5)})}}class Gh{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return R.resolve(ms.ce);const r=new zh(e);return this.mr.forEachTarget(t,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(t,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(go)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),go):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,i,o,c,h,d,f;const A=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),i=this.params.maximumSequenceNumbersToCollect):i=T,c=Date.now(),this.nthSequenceNumber(t,i))).next(T=>(r=T,h=Date.now(),this.removeTargets(t,r,e))).next(T=>(o=T,d=Date.now(),this.removeOrphanedDocuments(t,r))).next(T=>(f=Date.now(),pe()<=U.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-A}ms
	Determined least recently used ${i} in `+(h-c)+`ms
	Removed ${o} targets in `+(d-h)+`ms
	Removed ${T} documents in `+(f-d)+`ms
Total Duration: ${f-A}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:T})))}}function Wh(n,t){return new Gh(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.changes=new le(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,At.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Xe(r.mutation,i,Rt.empty(),W.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,mt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=mt()){const i=ne();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let c=Dn();return o.forEach((h,d)=>{c=c.insert(h,d.overlayedDocument)}),c}))}getOverlayedDocuments(t,e){const r=ne();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,mt()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((c,h)=>{e.set(c,h)})})}computeViews(t,e,r,i){let o=Qn();const c=Qe(),h=function(){return Qe()}();return e.forEach((d,f)=>{const A=r.get(f.key);i.has(f.key)&&(A===void 0||A.mutation instanceof ue)?o=o.insert(f.key,f):A!==void 0?(c.set(f.key,A.mutation.getFieldMask()),Xe(A.mutation,f,A.mutation.getFieldMask(),W.now())):c.set(f.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((f,A)=>c.set(f,A)),e.forEach((f,A)=>h.set(f,new Qh(A,c.get(f)??null))),h))}recalculateAndSaveOverlays(t,e){const r=Qe();let i=new Tt((c,h)=>c-h),o=mt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(c=>{for(const h of c)h.keys().forEach(d=>{const f=e.get(d);if(f===null)return;let A=r.get(d)||Rt.empty();A=h.applyToLocalView(f,A),r.set(d,A);const T=(i.get(h.batchId)||mt()).add(d);i=i.insert(h.batchId,T)})}).next(()=>{const c=[],h=i.getReverseIterator();for(;h.hasNext();){const d=h.getNext(),f=d.key,A=d.value,T=va();A.forEach(b=>{if(!o.has(b)){const V=Sa(e.get(b),r.get(b));V!==null&&T.set(b,V),o=o.add(b)}}),c.push(this.documentOverlayCache.saveOverlays(t,f,T))}return R.waitFor(c)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(c){return M.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ih(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const c=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):R.resolve(ne());let h=en,d=o;return c.next(f=>R.forEach(f,(A,T)=>(h<T.largestBatchId&&(h=T.largestBatchId),o.get(A)?R.resolve():this.remoteDocumentCache.getEntry(t,A).next(b=>{d=d.insert(A,b)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,d,f,mt())).next(A=>({batchId:h,changes:Ta(A)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let i=Dn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let c=Dn();return this.indexManager.getCollectionParents(t,o).next(h=>R.forEach(h,d=>{const f=function(T,b){return new nr(b,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next(A=>{A.forEach((T,b)=>{c=c.insert(T,b)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(c=>(o=c,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(c=>{o.forEach((d,f)=>{const A=f.getKey();c.get(A)===null&&(c=c.insert(A,At.newInvalidDocument(A)))});let h=Dn();return c.forEach((d,f)=>{const A=o.get(d);A!==void 0&&Xe(A.mutation,f,Rt.empty(),W.now()),Is(e,f)&&(h=h.insert(d,f))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return R.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:ye(i.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(i){return{name:i.name,query:Uh(i.bundledQuery),readTime:ye(i.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(){this.overlays=new Tt(M.comparator),this.qr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ne();return R.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.St(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.qr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const i=ne(),o=e.length+1,c=new M(e.child("")),h=this.overlays.getIteratorFrom(c);for(;h.hasNext();){const d=h.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>r&&i.set(d.getKey(),d)}return R.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new Tt((f,A)=>f-A);const c=this.overlays.getIterator();for(;c.hasNext();){const f=c.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let A=o.get(f.largestBatchId);A===null&&(A=ne(),o=o.insert(f.largestBatchId,A)),A.set(f.getKey(),f)}}const h=ne(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,A)=>h.set(f,A)),!(h.size()>=i)););return R.resolve(h)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const c=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new wh(e,r));let o=this.qr.get(e);o===void 0&&(o=mt(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.Qr=new ct(rt.$r),this.Ur=new ct(rt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new rt(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Gr(new rt(t,e))}zr(t,e){t.forEach(r=>this.removeReference(r,e))}jr(t){const e=new M(new X([])),r=new rt(e,t),i=new rt(e,t+1),o=[];return this.Ur.forEachInRange([r,i],c=>{this.Gr(c),o.push(c.key)}),o}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new M(new X([])),r=new rt(e,t),i=new rt(e,t+1);let o=mt();return this.Ur.forEachInRange([r,i],c=>{o=o.add(c.key)}),o}containsKey(t){const e=new rt(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class rt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return M.comparator(t.key,e.key)||B(t.Yr,e.Yr)}static Kr(t,e){return B(t.Yr,e.Yr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new ct(rt.$r)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new Ah(o,e,r,i);this.mutationQueue.push(c);for(const h of i)this.Zr=this.Zr.add(new rt(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return R.resolve(c)}lookupMutationBatch(t,e){return R.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.ei(r),o=i<0?0:i;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?ps:this.tr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new rt(e,0),i=new rt(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,i],c=>{const h=this.Xr(c.Yr);o.push(h)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ct(B);return e.forEach(i=>{const o=new rt(i,0),c=new rt(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,c],h=>{r=r.add(h.Yr)})}),R.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const c=new rt(new M(o),0);let h=new ct(B);return this.Zr.forEachWhile(d=>{const f=d.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(h=h.add(d.Yr)),!0)},c),R.resolve(this.ti(h))}ti(t){const e=[];return t.forEach(r=>{const i=this.Xr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){Y(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return R.forEach(e.mutations,i=>{const o=new rt(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Zr=r})}ir(t){}containsKey(t,e){const r=new rt(e,0),i=this.Zr.firstAfterOrEqual(r);return R.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t){this.ri=t,this.docs=function(){return new Tt(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,c=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:c}),this.size+=c-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():At.newInvalidDocument(e))}getEntries(t,e){let r=Qn();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():At.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Qn();const c=e.path,h=new M(c.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(h);for(;d.hasNext();){const{key:f,value:{document:A}}=d.getNext();if(!c.isPrefixOf(f.path))break;f.path.length>c.length+1||Ou(ku(A),r)<=0||(i.has(A.key)||Is(e,A))&&(o=o.insert(A.key,A.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,r,i){F(9500)}ii(t,e){return R.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new nd(this)}getSize(t){return R.resolve(this.size)}}class nd extends Kh{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(r)}),R.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t){this.persistence=t,this.si=new le(e=>Ts(e),vs),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.oi=0,this._i=new bs,this.targetCount=0,this.ai=we.ur()}forEachTarget(t,e){return this.si.forEach((r,i)=>e(i)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),R.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new we(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Pr(e),R.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.si.forEach((c,h)=>{h.sequenceNumber<=e&&r.get(h.targetId)===null&&(this.si.delete(c),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),i++)}),R.waitFor(o).next(()=>i)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(c=>{o.push(i.markPotentiallyOrphaned(t,c))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,e){this.ui={},this.overlays={},this.ci=new ms(0),this.li=!1,this.li=!0,this.hi=new Zh,this.referenceDelegate=t(this),this.Pi=new rd(this),this.indexManager=new Bh,this.remoteDocumentCache=function(i){return new ed(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new jh(e),this.Ii=new Jh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Yh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new td(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const i=new sd(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(o=>this.referenceDelegate.di(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ai(t,e){return R.or(Object.values(this.ui).map(r=>()=>r.containsKey(t,e)))}}class sd extends Lu{constructor(t){super(),this.currentSequenceNumber=t}}class Rs{constructor(t){this.persistence=t,this.Ri=new bs,this.Vi=null}static mi(t){return new Rs(t)}get fi(){if(this.Vi)return this.Vi;throw F(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),R.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.fi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,r=>{const i=M.fromPath(r);return this.gi(t,i).next(o=>{o||e.removeEntry(i,G.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return R.or([()=>R.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class Jn{constructor(t,e){this.persistence=t,this.pi=new le(r=>Uu(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Wh(this,e)}static mi(t,e){return new Jn(t,e)}Ei(){}di(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}wr(t){let e=0;return this.pr(t,r=>{e++}).next(()=>e)}pr(t,e){return R.forEach(this.pi,(r,i)=>this.br(t,r,i).next(o=>o?R.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,c=>this.br(t,c,e).next(h=>{h||(r++,o.removeEntry(c,G.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),R.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=On(t.data.value)),e}br(t,e,r){return R.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return R.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=i}static As(t,e){let r=mt(),i=mt();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ss(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return nl()?8:Fu(tl())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ys(t,e).next(c=>{o.result=c}).next(()=>{if(!o.result)return this.ws(t,e,i,r).next(c=>{o.result=c})}).next(()=>{if(o.result)return;const c=new id;return this.Ss(t,e,c).next(h=>{if(o.result=h,this.Vs)return this.bs(t,e,c,h.size)})}).next(()=>o.result)}bs(t,e,r,i){return r.documentReadCount<this.fs?(pe()<=U.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",ze(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(pe()<=U.DEBUG&&D("QueryEngine","Query:",ze(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(pe()<=U.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",ze(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,se(e))):R.resolve())}ys(t,e){if(lo(e))return R.resolve(null);let r=se(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=ts(e,null,"F"),r=se(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const c=mt(...o);return this.ps.getDocuments(t,c).next(h=>this.indexManager.getMinOffset(t,r).next(d=>{const f=this.Ds(e,h);return this.Cs(e,f,c,d.readTime)?this.ys(t,ts(e,null,"F")):this.vs(t,f,e,d)}))})))}ws(t,e,r,i){return lo(e)||i.isEqual(G.min())?R.resolve(null):this.ps.getDocuments(t,r).next(o=>{const c=this.Ds(e,o);return this.Cs(e,c,r,i)?R.resolve(null):(pe()<=U.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ze(e)),this.vs(t,c,e,Nu(i,en)).next(h=>h))})}Ds(t,e){let r=new ct(ah(t));return e.forEach((i,o)=>{Is(t,o)&&(r=r.add(o))}),r}Cs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,r){return pe()<=U.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",ze(e)),this.ps.getDocumentsMatchingQuery(t,e,Ht.min(),r)}vs(t,e,r,i){return this.ps.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(c=>{o=o.insert(c.key,c)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="LocalStore";class cd{constructor(t,e,r,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new Tt(B),this.xs=new le(o=>Ts(o),vs),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Xh(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function ld(n,t,e,r){return new cd(n,t,e,r)}async function ka(n,t){const e=z(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const c=[],h=[];let d=mt();for(const f of i){c.push(f.batchId);for(const A of f.mutations)d=d.add(A.key)}for(const f of o){h.push(f.batchId);for(const A of f.mutations)d=d.add(A.key)}return e.localDocuments.getDocuments(r,d).next(f=>({Ls:f,removedBatchIds:c,addedBatchIds:h}))})})}function ud(n,t){const e=z(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return function(h,d,f,A){const T=f.batch,b=T.keys();let V=R.resolve();return b.forEach(N=>{V=V.next(()=>A.getEntry(d,N)).next(O=>{const k=f.docVersions.get(N);Y(k!==null,48541),O.version.compareTo(k)<0&&(T.applyToRemoteDocument(O,f),O.isValidDocument()&&(O.setReadTime(f.commitVersion),A.addEntry(O)))})}),V.next(()=>h.mutationQueue.removeMutationBatch(d,T))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(h){let d=mt();for(let f=0;f<h.mutationResults.length;++f)h.mutationResults[f].transformResults.length>0&&(d=d.add(h.batch.mutations[f].key));return d}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function hd(n){const t=z(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function dd(n,t){const e=z(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=ps),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class Eo{constructor(){this.activeTargetIds=fh()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class fd{constructor(){this.Mo=new Eo,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Eo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To="ConnectivityMonitor";class vo{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){D(To,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){D(To,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xn=null;function ss(){return xn===null?xn=function(){return 268435456+Math.round(2147483648*Math.random())}():xn++,"0x"+xn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="RestConnection",pd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class gd{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Hn?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(t,e,r,i,o){const c=ss(),h=this.zo(t,e.toUriEncodedString());D(Ur,`Sending RPC '${t}' ${c}:`,h,r);const d={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(d,i,o);const{host:f}=new URL(h),A=as(f);return this.Jo(t,h,d,r,A).then(T=>(D(Ur,`Received RPC '${t}' ${c}: `,T),T),T=>{throw er(Ur,`RPC '${t}' ${c} failed with error: `,T,"url: ",h,"request:",r),T})}Ho(t,e,r,i,o,c){return this.Go(t,e,r,i,o)}jo(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Re}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}zo(t,e){const r=pd[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class yd extends gd{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,i,o){const c=ss();return new Promise((h,d)=>{const f=new Ho;f.setWithCredentials(!0),f.listenOnce(Go.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case kn.NO_ERROR:const T=f.getResponseJson();D(dt,`XHR for RPC '${t}' ${c} received:`,JSON.stringify(T)),h(T);break;case kn.TIMEOUT:D(dt,`RPC '${t}' ${c} timed out`),d(new x(S.DEADLINE_EXCEEDED,"Request time out"));break;case kn.HTTP_ERROR:const b=f.getStatus();if(D(dt,`RPC '${t}' ${c} failed with status:`,b,"response text:",f.getResponseText()),b>0){let V=f.getResponseJson();Array.isArray(V)&&(V=V[0]);const N=V==null?void 0:V.error;if(N&&N.status&&N.message){const O=function(K){const $=K.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf($)>=0?$:S.UNKNOWN}(N.status);d(new x(O,N.message))}else d(new x(S.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new x(S.UNAVAILABLE,"Connection failed."));break;default:F(9055,{l_:t,streamId:c,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{D(dt,`RPC '${t}' ${c} completed.`)}});const A=JSON.stringify(i);D(dt,`RPC '${t}' ${c} sending request:`,i),f.send(e,"POST",A,r,15)})}T_(t,e,r){const i=ss(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],c=Qo(),h=Ko(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.useFetchStreams=!0),this.jo(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const A=o.join("");D(dt,`Creating RPC '${t}' stream ${i}: ${A}`,d);const T=c.createWebChannel(A,d);this.I_(T);let b=!1,V=!1;const N=new _d({Yo:k=>{V?D(dt,`Not sending because RPC '${t}' stream ${i} is closed:`,k):(b||(D(dt,`Opening RPC '${t}' stream ${i} transport.`),T.open(),b=!0),D(dt,`RPC '${t}' stream ${i} sending:`,k),T.send(k))},Zo:()=>T.close()}),O=(k,K,$)=>{k.listen(K,Q=>{try{$(Q)}catch(lt){setTimeout(()=>{throw lt},0)}})};return O(T,He.EventType.OPEN,()=>{V||(D(dt,`RPC '${t}' stream ${i} transport opened.`),N.o_())}),O(T,He.EventType.CLOSE,()=>{V||(V=!0,D(dt,`RPC '${t}' stream ${i} transport closed`),N.a_(),this.E_(T))}),O(T,He.EventType.ERROR,k=>{V||(V=!0,er(dt,`RPC '${t}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),N.a_(new x(S.UNAVAILABLE,"The operation could not be completed")))}),O(T,He.EventType.MESSAGE,k=>{var K;if(!V){const $=k.data[0];Y(!!$,16349);const Q=$,lt=(Q==null?void 0:Q.error)||((K=Q[0])==null?void 0:K.error);if(lt){D(dt,`RPC '${t}' stream ${i} received error:`,lt);const It=lt.status;let ut=function(g){const E=Z[g];if(E!==void 0)return Rh(E)}(It),y=lt.message;ut===void 0&&(ut=S.INTERNAL,y="Unknown error status: "+It+" with message "+lt.message),V=!0,N.a_(new x(ut,y)),T.close()}else D(dt,`RPC '${t}' stream ${i} received:`,$),N.u_($)}}),O(h,Wo.STAT_EVENT,k=>{k.stat===Kr.PROXY?D(dt,`RPC '${t}' stream ${i} detected buffering proxy`):k.stat===Kr.NOPROXY&&D(dt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.__()},0),N}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}function Br(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(n){return new Sh(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io="PersistentStream";class Ed{constructor(t,e,r,i,o,c,h,d){this.Mi=t,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=h,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Oa(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(oe(e.toString()),oe("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===e&&this.G_(r,i)},r=>{t(()=>{const i=new x(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return D(Io,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(D(Io,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Td extends Ed{constructor(t,e,r,i,o,c){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,c),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return Y(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Y(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Y(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Oh(t.writeResults,t.commitTime),r=ye(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=xh(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>kh(this.serializer,r))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{}class Id extends vd{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Go(t,ns(e,r),i,o,c)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(S.UNKNOWN,o.toString())})}Ho(t,e,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,h])=>this.connection.Ho(t,ns(e,r),i,c,h,o)).catch(c=>{throw c.name==="FirebaseError"?(c.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new x(S.UNKNOWN,c.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Ad{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(oe(e),this.aa=!1):D("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="RemoteStore";class wd{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(c=>{r.enqueueAndForget(async()=>{dn(this)&&(D(un,"Restarting streams for network reachability change."),await async function(d){const f=z(d);f.Ea.add(4),await hn(f),f.Ra.set("Unknown"),f.Ea.delete(4),await or(f)}(this))})}),this.Ra=new Ad(r,i)}}async function or(n){if(dn(n))for(const t of n.da)await t(!0)}async function hn(n){for(const t of n.da)await t(!1)}function dn(n){return z(n).Ea.size===0}async function Ma(n,t,e){if(!cn(t))throw t;n.Ea.add(1),await hn(n),n.Ra.set("Offline"),e||(e=()=>hd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D(un,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await or(n)})}function La(n,t){return t().catch(e=>Ma(n,e,t))}async function ar(n){const t=z(n),e=Wt(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:ps;for(;bd(t);)try{const i=await dd(t.localStore,r);if(i===null){t.Ta.length===0&&e.L_();break}r=i.batchId,Rd(t,i)}catch(i){await Ma(t,i)}Fa(t)&&ja(t)}function bd(n){return dn(n)&&n.Ta.length<10}function Rd(n,t){n.Ta.push(t);const e=Wt(n);e.O_()&&e.X_&&e.ea(t.mutations)}function Fa(n){return dn(n)&&!Wt(n).x_()&&n.Ta.length>0}function ja(n){Wt(n).start()}async function Sd(n){Wt(n).ra()}async function Cd(n){const t=Wt(n);for(const e of n.Ta)t.ea(e.mutations)}async function Pd(n,t,e){const r=n.Ta.shift(),i=ws.from(r,t,e);await La(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ar(n)}async function Vd(n,t){t&&Wt(n).X_&&await async function(r,i){if(function(c){return bh(c)&&c!==S.ABORTED}(i.code)){const o=r.Ta.shift();Wt(r).B_(),await La(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await ar(r)}}(n,t),Fa(n)&&ja(n)}async function Ao(n,t){const e=z(n);e.asyncQueue.verifyOperationInProgress(),D(un,"RemoteStore received new credentials");const r=dn(e);e.Ea.add(3),await hn(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await or(e)}async function Dd(n,t){const e=z(n);t?(e.Ea.delete(2),await or(e)):t||(e.Ea.add(2),await hn(e),e.Ra.set("Unknown"))}function Wt(n){return n.fa||(n.fa=function(e,r,i){const o=z(e);return o.sa(),new Td(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Sd.bind(null,n),r_:Vd.bind(null,n),ta:Cd.bind(null,n),na:Pd.bind(null,n)}),n.da.push(async t=>{t?(n.fa.B_(),await ar(n)):(await n.fa.stop(),n.Ta.length>0&&(D(un,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new re,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const c=Date.now()+r,h=new Cs(t,e,c,i,o);return h.start(r),h}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ua(n,t){if(oe("AsyncQueue",`${t}: ${n}`),cn(n))return new x(S.UNAVAILABLE,`${t}: ${n}`);throw n}class xd{constructor(){this.queries=wo(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=z(e),o=i.queries;i.queries=wo(),o.forEach((c,h)=>{for(const d of h.Sa)d.onError(r)})})(this,new x(S.ABORTED,"Firestore shutting down"))}}function wo(){return new le(n=>ya(n),_a)}function Nd(n){n.Ca.forEach(t=>{t.next()})}var bo,Ro;(Ro=bo||(bo={})).Ma="default",Ro.Cache="cache";const kd="SyncEngine";class Od{constructor(t,e,r,i,o,c){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new le(h=>ya(h),_a),this.Iu=new Map,this.Eu=new Set,this.du=new Tt(M.comparator),this.Au=new Map,this.Ru=new bs,this.Vu={},this.mu=new Map,this.fu=we.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Md(n,t,e){const r=Ud(n);try{const i=await function(c,h){const d=z(c),f=W.now(),A=h.reduce((V,N)=>V.add(N.key),mt());let T,b;return d.persistence.runTransaction("Locally write mutations","readwrite",V=>{let N=Qn(),O=mt();return d.Ns.getEntries(V,A).next(k=>{N=k,N.forEach((K,$)=>{$.isValidDocument()||(O=O.add(K))})}).next(()=>d.localDocuments.getOverlayedDocuments(V,N)).next(k=>{T=k;const K=[];for(const $ of h){const Q=vh($,T.get($.key).overlayedDocument);Q!=null&&K.push(new ue($.key,Q,ua(Q.value.mapValue),xt.exists(!0)))}return d.mutationQueue.addMutationBatch(V,f,K,h)}).next(k=>{b=k;const K=k.applyToLocalDocumentSet(T,O);return d.documentOverlayCache.saveOverlays(V,k.batchId,K)})}).then(()=>({batchId:b.batchId,changes:Ta(T)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(c,h,d){let f=c.Vu[c.currentUser.toKey()];f||(f=new Tt(B)),f=f.insert(h,d),c.Vu[c.currentUser.toKey()]=f}(r,i.batchId,e),await cr(r,i.changes),await ar(r.remoteStore)}catch(i){const o=Ua(i,"Failed to persist write");e.reject(o)}}function So(n,t,e){const r=z(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Tu.forEach((o,c)=>{const h=c.view.va(t);h.snapshot&&i.push(h.snapshot)}),function(c,h){const d=z(c);d.onlineState=h;let f=!1;d.queries.forEach((A,T)=>{for(const b of T.Sa)b.va(h)&&(f=!0)}),f&&Nd(d)}(r.eventManager,t),i.length&&r.Pu.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ld(n,t){const e=z(n),r=t.batch.batchId;try{const i=await ud(e.localStore,t);$a(e,r,null),Ba(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await cr(e,i)}catch(i){await fs(i)}}async function Fd(n,t,e){const r=z(n);try{const i=await function(c,h){const d=z(c);return d.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let A;return d.mutationQueue.lookupMutationBatch(f,h).next(T=>(Y(T!==null,37113),A=T.keys(),d.mutationQueue.removeMutationBatch(f,T))).next(()=>d.mutationQueue.performConsistencyCheck(f)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(f,A,h)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,A)).next(()=>d.localDocuments.getDocuments(f,A))})}(r.localStore,t);$a(r,t,e),Ba(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await cr(r,i)}catch(i){await fs(i)}}function Ba(n,t){(n.mu.get(t)||[]).forEach(e=>{e.resolve()}),n.mu.delete(t)}function $a(n,t,e){const r=z(n);let i=r.Vu[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Vu[r.currentUser.toKey()]=i}}async function cr(n,t,e){const r=z(n),i=[],o=[],c=[];r.Tu.isEmpty()||(r.Tu.forEach((h,d)=>{c.push(r.pu(d,t,e).then(f=>{var A;if((f||e)&&r.isPrimaryClient){const T=f?!f.fromCache:(A=e==null?void 0:e.targetChanges.get(d.targetId))==null?void 0:A.current;r.sharedClientState.updateQueryState(d.targetId,T?"current":"not-current")}if(f){i.push(f);const T=Ss.As(d.targetId,f);o.push(T)}}))}),await Promise.all(c),r.Pu.H_(i),await async function(d,f){const A=z(d);try{await A.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>R.forEach(f,b=>R.forEach(b.Es,V=>A.persistence.referenceDelegate.addReference(T,b.targetId,V)).next(()=>R.forEach(b.ds,V=>A.persistence.referenceDelegate.removeReference(T,b.targetId,V)))))}catch(T){if(!cn(T))throw T;D(ad,"Failed to update sequence numbers: "+T)}for(const T of f){const b=T.targetId;if(!T.fromCache){const V=A.Ms.get(b),N=V.snapshotVersion,O=V.withLastLimboFreeSnapshotVersion(N);A.Ms=A.Ms.insert(b,O)}}}(r.localStore,o))}async function jd(n,t){const e=z(n);if(!e.currentUser.isEqual(t)){D(kd,"User change. New user:",t.toKey());const r=await ka(e.localStore,t);e.currentUser=t,function(o,c){o.mu.forEach(h=>{h.forEach(d=>{d.reject(new x(S.CANCELLED,c))})}),o.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await cr(e,r.Ls)}}function Ud(n){const t=z(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ld.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Fd.bind(null,t),t}class Yn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ir(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return ld(this.persistence,new od,t.initialUser,this.serializer)}Cu(t){return new Na(Rs.mi,this.serializer)}Du(t){return new fd}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yn.provider={build:()=>new Yn};class Bd extends Yn{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){Y(this.persistence.referenceDelegate instanceof Jn,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Hh(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Na(r=>Jn.mi(r,e),this.serializer)}}class is{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>So(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jd.bind(null,this.syncEngine),await Dd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new xd}()}createDatastore(t){const e=ir(t.databaseInfo.databaseId),r=function(o){return new yd(o)}(t.databaseInfo);return function(o,c,h,d){return new Id(o,c,h,d)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,c,h){return new wd(r,i,o,c,h)}(this.localStore,this.datastore,t.asyncQueue,e=>So(this.syncEngine,e,0),function(){return vo.v()?new vo:new md}())}createSyncEngine(t,e){return function(i,o,c,h,d,f,A){const T=new Od(i,o,c,h,d,f);return A&&(T.gu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=z(i);D(un,"RemoteStore shutting down."),o.Ea.add(5),await hn(o),o.Aa.shutdown(),o.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}is.provider={build:()=>new is};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="FirestoreClient";class $d{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=hs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async c=>{D(Kt,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(r,c=>(D(Kt,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new re;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ua(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function $r(n,t){n.asyncQueue.verifyOperationInProgress(),D(Kt,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ka(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Co(n,t){n.asyncQueue.verifyOperationInProgress();const e=await qd(n);D(Kt,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Ao(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Ao(t.remoteStore,i)),n._onlineComponents=t}async function qd(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(Kt,"Using user provided OfflineComponentProvider");try{await $r(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;er("Error using user provided cache. Falling back to memory cache: "+e),await $r(n,new Yn)}}else D(Kt,"Using default OfflineComponentProvider"),await $r(n,new Bd(void 0));return n._offlineComponents}async function zd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(Kt,"Using user provided OnlineComponentProvider"),await Co(n,n._uninitializedComponentsProvider._online)):(D(Kt,"Using default OnlineComponentProvider"),await Co(n,new is))),n._onlineComponents}function Hd(n){return zd(n).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="firestore.googleapis.com",Vo=!0;class Do{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new x(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=za,this.ssl=Vo}else this.host=t.host,this.ssl=t.ssl??Vo;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=xa;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<qh)throw new x(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}xu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qa(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class lr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Do({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Do(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Iu;switch(r.type){case"firstParty":return new Ru(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Po.get(e);r&&(D("ComponentProvider","Removing Datastore"),Po.delete(e),r.terminate())}(this),Promise.resolve()}}function Gd(n,t,e,r={}){var f;n=ta(n,lr);const i=as(t),o=n._getSettings(),c={...o,emulatorOptions:n._getEmulatorOptions()},h=`${t}:${e}`;i&&(Qc(`https://${h}`),Zc("Firestore",!0)),o.host!==za&&o.host!==h&&er("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...o,host:h,ssl:i,emulatorOptions:r};if(!Un(d,c)&&(n._setSettings(d),r.mockUserToken)){let A,T;if(typeof r.mockUserToken=="string")A=r.mockUserToken,T=ft.MOCK_USER;else{A=Xc(r.mockUserToken,(f=n._app)==null?void 0:f.options.projectId);const b=r.mockUserToken.sub||r.mockUserToken.user_id;if(!b)throw new x(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new ft(b)}n._authCredentials=new Au(new Jo(A,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ps(this.firestore,t,this._query)}}class pt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new pt(this.firestore,t,this._key)}toJSON(){return{type:pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(an(e,pt._jsonSchema))return new pt(t,r||null,new M(X.fromString(e.referencePath)))}}pt._jsonSchemaVersion="firestore/documentReference/1.0",pt._jsonSchema={type:tt("string",pt._jsonSchemaVersion),referencePath:tt("string")};class zt extends Ps{constructor(t,e,r){super(t,e,sh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new pt(this.firestore,null,new M(t))}withConverter(t){return new zt(this.firestore,t,this._path)}}function Wd(n,t,...e){if(n=Ye(n),Yo("collection","path",t),n instanceof lr){const r=X.fromString(t,...e);return Yi(r),new zt(n,null,r)}{if(!(n instanceof pt||n instanceof zt))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Yi(r),new zt(n.firestore,null,r)}}function Kd(n,t,...e){if(n=Ye(n),arguments.length===1&&(t=hs.newId()),Yo("doc","path",t),n instanceof lr){const r=X.fromString(t,...e);return Ji(r),new pt(n,null,new M(r))}{if(!(n instanceof pt||n instanceof zt))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Ji(r),new pt(n.firestore,n instanceof zt?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="AsyncQueue";class No{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Oa(this,"async_queue_retry"),this._c=()=>{const r=Br();r&&D(xo,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=Br();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Br();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new re;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!cn(t))throw t;D(xo,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,oe("INTERNAL UNHANDLED ERROR: ",ko(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=Cs.createAndSchedule(this,t,e,r,o=>this.hc(o));return this.tc.push(i),i}uc(){this.nc&&F(47125,{Pc:ko(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function ko(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Ha extends lr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new No,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new No(t),this._firestoreClient=void 0,await t}}}function Qd(n,t){const e=typeof n=="object"?n:lu(),r=typeof n=="string"?n:Hn,i=su(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Wc("firestore");o&&Gd(i,...o)}return i}function Xd(n){if(n._terminated)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Jd(n),n._firestoreClient}function Jd(n){var r,i,o;const t=n._freezeSettings(),e=function(h,d,f,A){return new zu(h,d,f,A.host,A.ssl,A.experimentalForceLongPolling,A.experimentalAutoDetectLongPolling,qa(A.experimentalLongPollingOptions),A.useFetchStreams,A.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,t);n._componentsProvider||(i=t.localCache)!=null&&i._offlineComponentProvider&&((o=t.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new $d(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&function(h){const d=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(d),_online:d}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new bt(Vt.fromBase64String(t))}catch(e){throw new x(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new bt(Vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(an(t,bt._jsonSchema))return bt.fromBase64String(t.bytes)}}bt._jsonSchemaVersion="firestore/bytes/1.0",bt._jsonSchema={type:tt("string",bt._jsonSchemaVersion),bytes:tt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Nt._jsonSchemaVersion}}static fromJSON(t){if(an(t,Nt._jsonSchema))return new Nt(t.latitude,t.longitude)}}Nt._jsonSchemaVersion="firestore/geoPoint/1.0",Nt._jsonSchema={type:tt("string",Nt._jsonSchemaVersion),latitude:tt("number"),longitude:tt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:kt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(an(t,kt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new kt(t.vectorValues);throw new x(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}kt._jsonSchemaVersion="firestore/vectorValue/1.0",kt._jsonSchema={type:tt("string",kt._jsonSchemaVersion),vectorValues:tt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=/^__.*__$/;class Zd{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ue(t,this.data,this.fieldMask,e,this.fieldTransforms):new ln(t,this.data,e,this.fieldTransforms)}}function Ga(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{Ac:n})}}class xs{constructor(t,e,r,i,o,c){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new xs({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var i;const e=(i=this.path)==null?void 0:i.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){var i;const e=(i=this.path)==null?void 0:i.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Zn(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Ga(this.Ac)&&Yd.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class tf{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||ir(t)}Cc(t,e,r,i=!1){return new xs({Ac:t,methodName:e,Dc:r,path:at.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ef(n){const t=n._freezeSettings(),e=ir(n._databaseId);return new tf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function nf(n,t,e,r,i,o={}){const c=n.Cc(o.merge||o.mergeFields?2:0,t,e,i);Xa("Data must be an object, but it was:",c,r);const h=Ka(r,c);let d,f;if(o.merge)d=new Rt(c.fieldMask),f=c.fieldTransforms;else if(o.mergeFields){const A=[];for(const T of o.mergeFields){const b=rf(t,T,e);if(!c.contains(b))throw new x(S.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);of(A,b)||A.push(b)}d=new Rt(A),f=c.fieldTransforms.filter(T=>d.covers(T.field))}else d=null,f=c.fieldTransforms;return new Zd(new wt(h),d,f)}class Ns extends Ds{_toFieldTransform(t){return new _h(t.path,new rn)}isEqual(t){return t instanceof Ns}}function Wa(n,t){if(Qa(n=Ye(n)))return Xa("Unsupported field value:",t,n),Ka(n,t);if(n instanceof Ds)return function(r,i){if(!Ga(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(r,i){const o=[];let c=0;for(const h of r){let d=Wa(h,i.wc(c));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),c++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return mh(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=W.fromDate(r);return{timestampValue:es(i.serializer,o)}}if(r instanceof W){const o=new W(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:es(i.serializer,o)}}if(r instanceof Nt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bt)return{bytesValue:Ch(i.serializer,r._byteString)};if(r instanceof pt){const o=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(o))throw i.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Va(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof kt)return function(c,h){return{mapValue:{fields:{[aa]:{stringValue:la},[Xr]:{arrayValue:{values:c.toArray().map(f=>{if(typeof f!="number")throw h.Sc("VectorValues must only contain numeric values.");return As(h.serializer,f)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${ds(r)}`)}(n,t)}function Ka(n,t){const e={};return na(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Se(n,(r,i)=>{const o=Wa(i,t.mc(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Qa(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof W||n instanceof Nt||n instanceof bt||n instanceof pt||n instanceof Ds||n instanceof kt)}function Xa(n,t,e){if(!Qa(e)||!Zo(e)){const r=ds(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function rf(n,t,e){if((t=Ye(t))instanceof Vs)return t._internalPath;if(typeof t=="string")return Ja(n,t);throw Zn("Field path arguments must be of type string or ",n,!1,void 0,e)}const sf=new RegExp("[~\\*/\\[\\]]");function Ja(n,t,e){if(t.search(sf)>=0)throw Zn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Vs(...t.split("."))._internalPath}catch{throw Zn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Zn(n,t,e,r,i){const o=r&&!r.isEmpty(),c=i!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let d="";return(o||c)&&(d+=" (found",o&&(d+=` in field ${r}`),c&&(d+=` in document ${i}`),d+=")"),new x(S.INVALID_ARGUMENT,h+n+d)}function of(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new af(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Za("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class af extends Ya{data(){return super.data()}}function Za(n,t){return typeof t=="string"?Ja(n,t):t instanceof Vs?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class Nn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ee extends Ya{constructor(t,e,r,i,o,c){super(t,e,r,i,c),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Fn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Za("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new x(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Ee._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Ee._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ee._jsonSchema={type:tt("string",Ee._jsonSchemaVersion),bundleSource:tt("string","DocumentSnapshot"),bundleName:tt("string"),bundle:tt("string")};class Fn extends Ee{data(t={}){return super.data(t)}}class Je{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Nn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Fn(this._firestore,this._userDataWriter,r.key,r,new Nn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map(h=>{const d=new Fn(i._firestore,i._userDataWriter,h.doc.key,h.doc,new Nn(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:d,oldIndex:-1,newIndex:c++}})}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const d=new Fn(i._firestore,i._userDataWriter,h.doc.key,h.doc,new Nn(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,A=-1;return h.type!==0&&(f=c.indexOf(h.doc.key),c=c.delete(h.doc.key)),h.type!==1&&(c=c.add(h.doc),A=c.indexOf(h.doc.key)),{type:lf(h.type),doc:d,oldIndex:f,newIndex:A}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new x(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Je._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=hs.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function lf(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:n})}}Je._jsonSchemaVersion="firestore/querySnapshot/1.0",Je._jsonSchema={type:tt("string",Je._jsonSchemaVersion),bundleSource:tt("string","QuerySnapshot"),bundleName:tt("string"),bundle:tt("string")};function uf(n,t){const e=ta(n.firestore,Ha),r=Kd(n),i=cf(n.converter,t);return hf(e,[nf(ef(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,xt.exists(!1))]).then(()=>r)}function hf(n,t){return function(r,i){const o=new re;return r.asyncQueue.enqueueAndForget(async()=>Md(await Hd(r),i,o)),o.promise}(Xd(n),t)}function df(){return new Ns("serverTimestamp")}(function(t,e=!0){(function(i){Re=i})(cu),$n(new Ze("firestore",(r,{instanceIdentifier:i,options:o})=>{const c=r.getProvider("app").getImmediate(),h=new Ha(new wu(r.getProvider("auth-internal")),new Su(c,r.getProvider("app-check-internal")),function(f,A){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new x(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gn(f.options.projectId,A)}(c,i),c);return o={useFetchStreams:e,...o},h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),_e(Wi,Ki,t),_e(Wi,Ki,"esm2020")})();const ff={apiKey:"AIzaSyBhWU54i6_Mu78RNMhCTBIZ57QRVY8gz3Y",authDomain:"shazaib-portfolio.firebaseapp.com",projectId:"shazaib-portfolio",storageBucket:"shazaib-portfolio.firebasestorage.app",messagingSenderId:"647142065675",appId:"1:647142065675:web:f3c5cf36604d3f97f3e90e",measurementId:"G-P27VCWJ29D"},mf=$o(ff),pf=Qd(mf),Tf=()=>{const[n,t]=kr.useState({name:"",email:"",phone:"",service:"",budget:"",message:""}),[e,r]=kr.useState(!1),[i,o]=kr.useState(!1),c=["Mobile App Development","Web Development","Payment Integration","ERP Development","CRM Development","E-commerce Development","UI/UX Design","Custom Development"],h=["$1,000 - $5,000","$5,000 - $10,000","$10,000 - $25,000","$25,000 - $50,000","$50,000+"],d=T=>{const{name:b,value:V}=T.target;t(N=>({...N,[b]:V}))},f=async T=>{T.preventDefault(),r(!0);try{await uf(Wd(pf,"contacts"),{...n,createdAt:df()}),r(!1),o(!0),t({name:"",email:"",phone:"",service:"",budget:"",message:""}),setTimeout(()=>o(!1),5e3)}catch(b){console.error("Error sending message:",b),r(!1)}},A=[{icon:xc,label:"Email",value:"shazaibdanish4@gmail.com",href:"mailto:shazaibdanish4@gmail.com"},{icon:Oc,label:"Phone",value:"+92 304 4945 128",href:"tel:+923044945128"},{icon:kc,label:"WhatsApp",value:"+923044945128",href:"https://wa.me/+923044945128"},{icon:Nc,label:"Location",value:"Available Worldwide",href:"#"}];return C.jsxs("section",{id:"contact",className:"py-20 px-6 relative",children:[" ",C.jsxs("div",{className:"container mx-auto max-w-6xl",children:[" ",C.jsxs("div",{className:"text-center mb-16",children:[" ",C.jsxs("div",{className:"inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30 mb-6",children:[" ",C.jsx("span",{className:"text-cyan-400 text-sm font-medium",children:"Contact"})," "]})," ",C.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-6",children:[" ",C.jsx("span",{className:"text-white",children:"Let's Start "})," ",C.jsx("span",{className:"bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent",children:" Your Project "})," "]})," ",C.jsx("p",{className:"text-xl text-gray-400 max-w-3xl mx-auto",children:" Ready to transform your ideas into reality? Get in touch and let's discuss how I can help bring your project to life. "})," "]})," ",C.jsxs("div",{className:"grid lg:grid-cols-2 gap-12",children:[" "," ",C.jsxs("div",{className:"relative",children:[" ",C.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-25"})," ",C.jsxs("div",{className:"relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700",children:[" ",i?C.jsxs("div",{className:"text-center py-12",children:[" ",C.jsx(me,{className:"h-16 w-16 text-green-400 mx-auto mb-4"})," ",C.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Message Sent Successfully!"})," ",C.jsx("p",{className:"text-gray-400",children:"Thank you for reaching out. I'll get back to you within 24 hours."})," "]}):C.jsxs(C.Fragment,{children:[" ",C.jsx("h3",{className:"text-2xl font-bold text-white mb-6",children:"Send Me a Message"})," ",C.jsxs("form",{onSubmit:f,className:"space-y-6",children:[" ",C.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[" ",C.jsxs("div",{children:[" ",C.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-300 mb-2",children:" Full Name * "})," ",C.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:d,required:!0,className:"w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300",placeholder:"Your full name"})," "]})," ",C.jsxs("div",{children:[" ",C.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-300 mb-2",children:" Email Address * "})," ",C.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:d,required:!0,className:"w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300",placeholder:"your@email.com"})," "]})," "]})," ",C.jsxs("div",{children:[" ",C.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-300 mb-2",children:" Phone Number "})," ",C.jsx("input",{type:"tel",id:"phone",name:"phone",value:n.phone,onChange:d,className:"w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300",placeholder:"+92 304 4945 128"})," "]})," ",C.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[" ",C.jsxs("div",{children:[" ",C.jsx("label",{htmlFor:"service",className:"block text-sm font-medium text-gray-300 mb-2",children:" Service Required * "})," ",C.jsxs("select",{id:"service",name:"service",value:n.service,onChange:d,required:!0,className:"w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300",children:[" ",C.jsx("option",{value:"",children:"Select a service"})," ",c.map(T=>C.jsx("option",{value:T,children:T},T))," "]})," "]})," ",C.jsxs("div",{children:[" ",C.jsx("label",{htmlFor:"budget",className:"block text-sm font-medium text-gray-300 mb-2",children:" Budget Range "})," ",C.jsxs("select",{id:"budget",name:"budget",value:n.budget,onChange:d,className:"w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300",children:[" ",C.jsx("option",{value:"",children:"Select budget range"})," ",h.map(T=>C.jsx("option",{value:T,children:T},T))," "]})," "]})," "]})," ",C.jsxs("div",{children:[" ",C.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-300 mb-2",children:" Project Details * "})," ",C.jsx("textarea",{id:"message",name:"message",value:n.message,onChange:d,required:!0,rows:6,className:"w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none",placeholder:"Tell me about your project requirements, timeline, and any specific features you need..."})," "]})," ",C.jsxs("button",{type:"submit",disabled:e,className:"w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transform hover:scale-105 disabled:hover:scale-100 transition-all duration-300 shadow-lg hover:shadow-xl",children:[" ",e?C.jsxs(C.Fragment,{children:[" ",C.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-b-2 border-white"})," ",C.jsx("span",{children:"Sending..."})," "]}):C.jsxs(C.Fragment,{children:[" ",C.jsx(Mc,{className:"h-5 w-5"})," ",C.jsx("span",{children:"Send Message"})," "]})," "]})," "]})," "]})," "]})," "]})," "," ",C.jsxs("div",{className:"space-y-8",children:[" ",C.jsxs("div",{children:[" ",C.jsx("h3",{className:"text-2xl font-bold text-white mb-6",children:"Get In Touch"})," ",C.jsx("p",{className:"text-gray-400 leading-relaxed mb-8",children:" I'm always excited to work on new projects and help bring innovative ideas to life. Whether you need a mobile app, web application, or payment integration, I'm here to help. "})," "]})," ",C.jsxs("div",{className:"space-y-6",children:[" ",A.map((T,b)=>C.jsxs("div",{className:"group",children:[" ",C.jsxs("a",{href:T.href,className:"flex items-center space-x-4 p-4 bg-gray-800/30 hover:bg-gray-700/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300",children:[" ",C.jsxs("div",{className:"flex-shrink-0",children:[" ",C.jsxs("div",{className:"w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300",children:[" ",C.jsx(T.icon,{className:"h-6 w-6 text-white"})," "]})," "]})," ",C.jsxs("div",{children:[" ",C.jsx("div",{className:"text-sm text-gray-400",children:T.label})," ",C.jsxs("div",{className:"text-white font-medium group-hover:text-cyan-400 transition-colors duration-300",children:[" ",T.value," "]})," "]})," "]})," "]},b))," "]})," ",C.jsxs("div",{className:"relative",children:[" ",C.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-25"})," ",C.jsxs("div",{className:"relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700",children:[" ",C.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Why Choose Me?"})," ",C.jsxs("ul",{className:"space-y-3 text-gray-300",children:[" ",C.jsxs("li",{className:"flex items-center space-x-3",children:[" ",C.jsx(me,{className:"h-5 w-5 text-green-400 flex-shrink-0"})," ",C.jsx("span",{children:"7+ years of professional experience"})," "]})," ",C.jsxs("li",{className:"flex items-center space-x-3",children:[" ",C.jsx(me,{className:"h-5 w-5 text-green-400 flex-shrink-0"})," ",C.jsx("span",{children:"30+ payment gateways integrated"})," "]})," ",C.jsxs("li",{className:"flex items-center space-x-3",children:[" ",C.jsx(me,{className:"h-5 w-5 text-green-400 flex-shrink-0"})," ",C.jsx("span",{children:"100+ successful projects delivered"})," "]})," ",C.jsxs("li",{className:"flex items-center space-x-3",children:[" ",C.jsx(me,{className:"h-5 w-5 text-green-400 flex-shrink-0"})," ",C.jsx("span",{children:"24/7 support and maintenance"})," "]})," ",C.jsxs("li",{className:"flex items-center space-x-3",children:[" ",C.jsx(me,{className:"h-5 w-5 text-green-400 flex-shrink-0"})," ",C.jsx("span",{children:"Money-back guarantee"})," "]})," "]})," "]})," "]})," "]})," "]})," "]})," "]})};export{Tf as default};
