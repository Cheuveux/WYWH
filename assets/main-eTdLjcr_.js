import{g as oa,i as wl,o as Cl,a as Rl}from"./themeSwitcher-C337WcwA.js";import{i as Pl}from"./ciruclar_nav-DFhP10pE.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const la="180",li={ROTATE:0,DOLLY:1,PAN:2},ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ll=0,Ca=1,Dl=2,No=1,Il=2,rn=3,Zt=0,wt=1,an=2,yn=0,ci=1,Ra=2,Pa=3,La=4,Ul=5,Un=100,Nl=101,Fl=102,Ol=103,Bl=104,zl=200,Hl=201,kl=202,Gl=203,mr=204,gr=205,Vl=206,Wl=207,Xl=208,Yl=209,ql=210,$l=211,jl=212,Kl=213,Zl=214,_r=0,vr=1,xr=2,ui=3,Sr=4,Mr=5,Er=6,yr=7,Fo=0,Jl=1,Ql=2,cn=0,ec=1,tc=2,nc=3,ic=4,sc=5,rc=6,ac=7,Oo=300,fi=301,hi=302,Tr=303,br=304,bs=306,Ar=1e3,Fn=1001,wr=1002,Xt=1003,oc=1004,Hi=1005,At=1006,Ps=1007,On=1008,un=1009,Bo=1010,zo=1011,wi=1012,ca=1013,zn=1014,ln=1015,Ui=1016,da=1017,ua=1018,Ci=1020,Ho=35902,ko=35899,Go=1021,Vo=1022,Vt=1023,Ri=1026,Pi=1027,Wo=1028,fa=1029,Xo=1030,ha=1031,pa=1033,us=33776,fs=33777,hs=33778,ps=33779,Cr=35840,Rr=35841,Pr=35842,Lr=35843,Dr=36196,Ir=37492,Ur=37496,Nr=37808,Fr=37809,Or=37810,Br=37811,zr=37812,Hr=37813,kr=37814,Gr=37815,Vr=37816,Wr=37817,Xr=37818,Yr=37819,qr=37820,$r=37821,jr=36492,Kr=36494,Zr=36495,Jr=36283,Qr=36284,ea=36285,ta=36286,lc=3200,cc=3201,dc=0,uc=1,Mn="",Mt="srgb",pi="srgb-linear",vs="linear",Ye="srgb",Xn=7680,Da=519,fc=512,hc=513,pc=514,Yo=515,mc=516,gc=517,_c=518,vc=519,Ia=35044,Ua="300 es",$t=2e3,xs=2001;class Gn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ms=Math.PI/180,na=180/Math.PI;function Ni(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]).toLowerCase()}function Be(n,e,t){return Math.max(e,Math.min(t,n))}function xc(n,e){return(n%e+e)%e}function Ls(n,e,t){return(1-t)*n+t*e}function xi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Sc={DEG2RAD:ms};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Be(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],f=i[s+2],u=i[s+3];const p=r[a+0],h=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u;return}if(o===1){e[t+0]=p,e[t+1]=h,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==p||c!==h||f!==g){let m=1-o;const d=l*p+c*h+f*g+u*v,_=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const b=Math.sqrt(S),C=Math.atan2(b,d*_);m=Math.sin(m*C)/b,o=Math.sin(o*C)/b}const E=o*_;if(l=l*m+p*E,c=c*m+h*E,f=f*m+g*E,u=u*m+v*E,m===1-o){const b=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=b,c*=b,f*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],u=r[a],p=r[a+1],h=r[a+2],g=r[a+3];return e[t]=o*g+f*u+l*h-c*p,e[t+1]=l*g+f*p+c*u-o*h,e[t+2]=c*g+f*h+o*p-l*u,e[t+3]=f*g-o*u-l*p-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),u=o(r/2),p=l(i/2),h=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=p*f*u+c*h*g,this._y=c*h*u-p*f*g,this._z=c*f*g+p*h*u,this._w=c*f*u-p*h*g;break;case"YXZ":this._x=p*f*u+c*h*g,this._y=c*h*u-p*f*g,this._z=c*f*g-p*h*u,this._w=c*f*u+p*h*g;break;case"ZXY":this._x=p*f*u-c*h*g,this._y=c*h*u+p*f*g,this._z=c*f*g+p*h*u,this._w=c*f*u-p*h*g;break;case"ZYX":this._x=p*f*u-c*h*g,this._y=c*h*u+p*f*g,this._z=c*f*g-p*h*u,this._w=c*f*u+p*h*g;break;case"YZX":this._x=p*f*u+c*h*g,this._y=c*h*u+p*f*g,this._z=c*f*g-p*h*u,this._w=c*f*u-p*h*g;break;case"XZY":this._x=p*f*u-c*h*g,this._y=c*h*u-p*f*g,this._z=c*f*g+p*h*u,this._w=c*f*u+p*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],u=t[10],p=i+o+u;if(p>0){const h=.5/Math.sqrt(p+1);this._w=.25/h,this._x=(f-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(i>o&&i>u){const h=2*Math.sqrt(1+i-o-u);this._w=(f-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>u){const h=2*Math.sqrt(1+o-i-u);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+f)/h}else{const h=2*Math.sqrt(1+u-i-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=i*f+a*o+s*c-r*l,this._y=s*f+a*l+r*o-i*c,this._z=r*f+a*c+i*l-s*o,this._w=a*f-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*i+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),u=Math.sin((1-t)*f)/c,p=Math.sin(t*f)/c;return this._w=a*u+this._w*p,this._x=i*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Na.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Na.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),f=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*f,this.y=i+l*f+o*c-r*u,this.z=s+l*u+r*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ds.copy(this).projectOnVector(e),this.sub(Ds)}reflect(e){return this.sub(Ds.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Be(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ds=new H,Na=new Hn;class Ie{constructor(e,t,i,s,r,a,o,l,c){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=t,f[4]=r,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],u=i[7],p=i[2],h=i[5],g=i[8],v=s[0],m=s[3],d=s[6],_=s[1],S=s[4],E=s[7],b=s[2],C=s[5],P=s[8];return r[0]=a*v+o*_+l*b,r[3]=a*m+o*S+l*C,r[6]=a*d+o*E+l*P,r[1]=c*v+f*_+u*b,r[4]=c*m+f*S+u*C,r[7]=c*d+f*E+u*P,r[2]=p*v+h*_+g*b,r[5]=p*m+h*S+g*C,r[8]=p*d+h*E+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-i*r*f+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=f*a-o*c,p=o*l-f*r,h=c*r-a*l,g=t*u+i*p+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-f*i)*v,e[2]=(o*i-s*a)*v,e[3]=p*v,e[4]=(f*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=h*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Is.makeScale(e,t)),this}rotate(e){return this.premultiply(Is.makeRotation(-e)),this}translate(e,t){return this.premultiply(Is.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Is=new Ie;function qo(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Li(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mc(){const n=Li("canvas");return n.style.display="block",n}const Fa={};function Di(n){n in Fa||(Fa[n]=!0,console.warn(n))}function Ec(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Oa=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ba=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yc(){const n={enabled:!0,workingColorSpace:pi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ye&&(s.r=dn(s.r),s.g=dn(s.g),s.b=dn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ye&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mn?vs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Di("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Di("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[pi]:{primaries:e,whitePoint:i,transfer:vs,toXYZ:Oa,fromXYZ:Ba,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:i,transfer:Ye,toXYZ:Oa,fromXYZ:Ba,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),n}const Ge=yc();function dn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function di(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Yn;class Tc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Yn===void 0&&(Yn=Li("canvas")),Yn.width=e.width,Yn.height=e.height;const s=Yn.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Yn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Li("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=dn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(dn(t[i]/255)*255):t[i]=dn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bc=0;class ma{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Us(s[a].image)):r.push(Us(s[a]))}else r=Us(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Us(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Tc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ac=0;const Ns=new H;class Et extends Gn{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,i=Fn,s=Fn,r=At,a=On,o=Vt,l=un,c=Et.DEFAULT_ANISOTROPY,f=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=Ni(),this.name="",this.source=new ma(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ns).x}get height(){return this.source.getSize(Ns).y}get depth(){return this.source.getSize(Ns).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ar:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ar:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Oo;Et.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],f=l[4],u=l[8],p=l[1],h=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(f-p)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+p)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,E=(h+1)/2,b=(d+1)/2,C=(f+p)/4,P=(u+v)/4,w=(g+m)/4;return S>E&&S>b?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=C/i,r=P/i):E>b?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=C/s,r=w/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=P/r,s=w/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(p-f)*(p-f));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(p-f)/_,this.w=Math.acos((c+h+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wc extends Gn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Et(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ma(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends wc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class $o extends Et{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cc extends Et{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zt):zt.fromBufferAttribute(r,a),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ki.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ki.copy(i.boundingBox)),ki.applyMatrix4(e.matrixWorld),this.union(ki)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Si),Gi.subVectors(this.max,Si),qn.subVectors(e.a,Si),$n.subVectors(e.b,Si),jn.subVectors(e.c,Si),pn.subVectors($n,qn),mn.subVectors(jn,$n),wn.subVectors(qn,jn);let t=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-wn.z,wn.y,pn.z,0,-pn.x,mn.z,0,-mn.x,wn.z,0,-wn.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-wn.y,wn.x,0];return!Fs(t,qn,$n,jn,Gi)||(t=[1,0,0,0,1,0,0,0,1],!Fs(t,qn,$n,jn,Gi))?!1:(Vi.crossVectors(pn,mn),t=[Vi.x,Vi.y,Vi.z],Fs(t,qn,$n,jn,Gi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qt=[new H,new H,new H,new H,new H,new H,new H,new H],zt=new H,ki=new Fi,qn=new H,$n=new H,jn=new H,pn=new H,mn=new H,wn=new H,Si=new H,Gi=new H,Vi=new H,Cn=new H;function Fs(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Cn.fromArray(n,r);const o=s.x*Math.abs(Cn.x)+s.y*Math.abs(Cn.y)+s.z*Math.abs(Cn.z),l=e.dot(Cn),c=t.dot(Cn),f=i.dot(Cn);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Rc=new Fi,Mi=new H,Os=new H;class ga{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Rc.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mi.subVectors(e,this.center);const t=Mi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Mi,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Os.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mi.copy(e.center).add(Os)),this.expandByPoint(Mi.copy(e.center).sub(Os))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const en=new H,Bs=new H,Wi=new H,gn=new H,zs=new H,Xi=new H,Hs=new H;class jo{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Bs.copy(e).add(t).multiplyScalar(.5),Wi.copy(t).sub(e).normalize(),gn.copy(this.origin).sub(Bs);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Wi),o=gn.dot(this.direction),l=-gn.dot(Wi),c=gn.lengthSq(),f=Math.abs(1-a*a);let u,p,h,g;if(f>0)if(u=a*l-o,p=a*o-l,g=r*f,u>=0)if(p>=-g)if(p<=g){const v=1/f;u*=v,p*=v,h=u*(u+a*p+2*o)+p*(a*u+p+2*l)+c}else p=r,u=Math.max(0,-(a*p+o)),h=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(a*p+o)),h=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-l),r),h=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-r,-l),r),h=p*(p+2*l)+c):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-l),r),h=-u*u+p*(p+2*l)+c);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),h=-u*u+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Bs).addScaledVector(Wi,p),h}intersectSphere(e,t){en.subVectors(e.center,this.origin);const i=en.dot(this.direction),s=en.dot(en)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),f>=0?(r=(e.min.y-p.y)*f,a=(e.max.y-p.y)*f):(r=(e.max.y-p.y)*f,a=(e.min.y-p.y)*f),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,i,s,r){zs.subVectors(t,e),Xi.subVectors(i,e),Hs.crossVectors(zs,Xi);let a=this.direction.dot(Hs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gn.subVectors(this.origin,e);const l=o*this.direction.dot(Xi.crossVectors(gn,Xi));if(l<0)return null;const c=o*this.direction.dot(zs.cross(gn));if(c<0||l+c>a)return null;const f=-o*gn.dot(Hs);return f<0?null:this.at(f/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,s,r,a,o,l,c,f,u,p,h,g,v,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,f,u,p,h,g,v,m)}set(e,t,i,s,r,a,o,l,c,f,u,p,h,g,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=f,d[10]=u,d[14]=p,d[3]=h,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Kn.setFromMatrixColumn(e,0).length(),r=1/Kn.setFromMatrixColumn(e,1).length(),a=1/Kn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const p=a*f,h=a*u,g=o*f,v=o*u;t[0]=l*f,t[4]=-l*u,t[8]=c,t[1]=h+g*c,t[5]=p-v*c,t[9]=-o*l,t[2]=v-p*c,t[6]=g+h*c,t[10]=a*l}else if(e.order==="YXZ"){const p=l*f,h=l*u,g=c*f,v=c*u;t[0]=p+v*o,t[4]=g*o-h,t[8]=a*c,t[1]=a*u,t[5]=a*f,t[9]=-o,t[2]=h*o-g,t[6]=v+p*o,t[10]=a*l}else if(e.order==="ZXY"){const p=l*f,h=l*u,g=c*f,v=c*u;t[0]=p-v*o,t[4]=-a*u,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*f,t[9]=v-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const p=a*f,h=a*u,g=o*f,v=o*u;t[0]=l*f,t[4]=g*c-h,t[8]=p*c+v,t[1]=l*u,t[5]=v*c+p,t[9]=h*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const p=a*l,h=a*c,g=o*l,v=o*c;t[0]=l*f,t[4]=v-p*u,t[8]=g*u+h,t[1]=u,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=h*u+g,t[10]=p-v*u}else if(e.order==="XZY"){const p=a*l,h=a*c,g=o*l,v=o*c;t[0]=l*f,t[4]=-u,t[8]=c*f,t[1]=p*u+v,t[5]=a*f,t[9]=h*u-g,t[2]=g*u-h,t[6]=o*f,t[10]=v*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pc,e,Lc)}lookAt(e,t,i){const s=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),_n.crossVectors(i,Pt),_n.lengthSq()===0&&(Math.abs(i.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),_n.crossVectors(i,Pt)),_n.normalize(),Yi.crossVectors(Pt,_n),s[0]=_n.x,s[4]=Yi.x,s[8]=Pt.x,s[1]=_n.y,s[5]=Yi.y,s[9]=Pt.y,s[2]=_n.z,s[6]=Yi.z,s[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],u=i[5],p=i[9],h=i[13],g=i[2],v=i[6],m=i[10],d=i[14],_=i[3],S=i[7],E=i[11],b=i[15],C=s[0],P=s[4],w=s[8],y=s[12],x=s[1],A=s[5],D=s[9],U=s[13],z=s[2],V=s[6],W=s[10],j=s[14],O=s[3],J=s[7],se=s[11],ue=s[15];return r[0]=a*C+o*x+l*z+c*O,r[4]=a*P+o*A+l*V+c*J,r[8]=a*w+o*D+l*W+c*se,r[12]=a*y+o*U+l*j+c*ue,r[1]=f*C+u*x+p*z+h*O,r[5]=f*P+u*A+p*V+h*J,r[9]=f*w+u*D+p*W+h*se,r[13]=f*y+u*U+p*j+h*ue,r[2]=g*C+v*x+m*z+d*O,r[6]=g*P+v*A+m*V+d*J,r[10]=g*w+v*D+m*W+d*se,r[14]=g*y+v*U+m*j+d*ue,r[3]=_*C+S*x+E*z+b*O,r[7]=_*P+S*A+E*V+b*J,r[11]=_*w+S*D+E*W+b*se,r[15]=_*y+S*U+E*j+b*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],u=e[6],p=e[10],h=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+r*l*u-s*c*u-r*o*p+i*c*p+s*o*h-i*l*h)+v*(+t*l*h-t*c*p+r*a*p-s*a*h+s*c*f-r*l*f)+m*(+t*c*u-t*o*h-r*a*u+i*a*h+r*o*f-i*c*f)+d*(-s*o*f-t*l*u+t*o*p+s*a*u-i*a*p+i*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=e[9],p=e[10],h=e[11],g=e[12],v=e[13],m=e[14],d=e[15],_=u*m*c-v*p*c+v*l*h-o*m*h-u*l*d+o*p*d,S=g*p*c-f*m*c-g*l*h+a*m*h+f*l*d-a*p*d,E=f*v*c-g*u*c+g*o*h-a*v*h-f*o*d+a*u*d,b=g*u*l-f*v*l-g*o*p+a*v*p+f*o*m-a*u*m,C=t*_+i*S+s*E+r*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=_*P,e[1]=(v*p*r-u*m*r-v*s*h+i*m*h+u*s*d-i*p*d)*P,e[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*d+i*l*d)*P,e[3]=(u*l*r-o*p*r-u*s*c+i*p*c+o*s*h-i*l*h)*P,e[4]=S*P,e[5]=(f*m*r-g*p*r+g*s*h-t*m*h-f*s*d+t*p*d)*P,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*d-t*l*d)*P,e[7]=(a*p*r-f*l*r+f*s*c-t*p*c-a*s*h+t*l*h)*P,e[8]=E*P,e[9]=(g*u*r-f*v*r-g*i*h+t*v*h+f*i*d-t*u*d)*P,e[10]=(a*v*r-g*o*r+g*i*c-t*v*c-a*i*d+t*o*d)*P,e[11]=(f*o*r-a*u*r-f*i*c+t*u*c+a*i*h-t*o*h)*P,e[12]=b*P,e[13]=(f*v*s-g*u*s+g*i*p-t*v*p-f*i*m+t*u*m)*P,e[14]=(g*o*s-a*v*s-g*i*l+t*v*l+a*i*m-t*o*m)*P,e[15]=(a*u*s-f*o*s+f*i*l-t*u*l-a*i*p+t*o*p)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,f=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*a,0,c*l-s*o,f*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,f=a+a,u=o+o,p=r*c,h=r*f,g=r*u,v=a*f,m=a*u,d=o*u,_=l*c,S=l*f,E=l*u,b=i.x,C=i.y,P=i.z;return s[0]=(1-(v+d))*b,s[1]=(h+E)*b,s[2]=(g-S)*b,s[3]=0,s[4]=(h-E)*C,s[5]=(1-(p+d))*C,s[6]=(m+_)*C,s[7]=0,s[8]=(g+S)*P,s[9]=(m-_)*P,s[10]=(1-(p+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Kn.set(s[0],s[1],s[2]).length();const a=Kn.set(s[4],s[5],s[6]).length(),o=Kn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ht.copy(this);const c=1/r,f=1/a,u=1/o;return Ht.elements[0]*=c,Ht.elements[1]*=c,Ht.elements[2]*=c,Ht.elements[4]*=f,Ht.elements[5]*=f,Ht.elements[6]*=f,Ht.elements[8]*=u,Ht.elements[9]*=u,Ht.elements[10]*=u,t.setFromRotationMatrix(Ht),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=$t,l=!1){const c=this.elements,f=2*r/(t-e),u=2*r/(i-s),p=(t+e)/(t-e),h=(i+s)/(i-s);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===$t)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===xs)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=$t,l=!1){const c=this.elements,f=2/(t-e),u=2/(i-s),p=-(t+e)/(t-e),h=-(i+s)/(i-s);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===$t)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===xs)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=u,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Kn=new H,Ht=new ct,Pc=new H(0,0,0),Lc=new H(1,1,1),_n=new H,Yi=new H,Pt=new H,za=new ct,Ha=new Hn;class fn{constructor(e=0,t=0,i=0,s=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],f=s[9],u=s[2],p=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return za.makeRotationFromQuaternion(e),this.setFromRotationMatrix(za,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ha.setFromEuler(this),this.setFromQuaternion(Ha,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class Ko{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dc=0;const ka=new H,Zn=new Hn,tn=new ct,qi=new H,Ei=new H,Ic=new H,Uc=new Hn,Ga=new H(1,0,0),Va=new H(0,1,0),Wa=new H(0,0,1),Xa={type:"added"},Nc={type:"removed"},Jn={type:"childadded",child:null},ks={type:"childremoved",child:null};class It extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new H,t=new fn,i=new Hn,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ie}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.premultiply(Zn),this}rotateX(e){return this.rotateOnAxis(Ga,e)}rotateY(e){return this.rotateOnAxis(Va,e)}rotateZ(e){return this.rotateOnAxis(Wa,e)}translateOnAxis(e,t){return ka.copy(e).applyQuaternion(this.quaternion),this.position.add(ka.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ga,e)}translateY(e){return this.translateOnAxis(Va,e)}translateZ(e){return this.translateOnAxis(Wa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qi.copy(e):qi.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(Ei,qi,this.up):tn.lookAt(qi,Ei,this.up),this.quaternion.setFromRotationMatrix(tn),s&&(tn.extractRotation(s.matrixWorld),Zn.setFromRotationMatrix(tn),this.quaternion.premultiply(Zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xa),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nc),ks.child=e,this.dispatchEvent(ks),ks.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xa),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,e,Ic),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,Uc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),u=a(e.shapes),p=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}It.DEFAULT_UP=new H(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kt=new H,nn=new H,Gs=new H,sn=new H,Qn=new H,ei=new H,Ya=new H,Vs=new H,Ws=new H,Xs=new H,Ys=new at,qs=new at,$s=new at;class Gt{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),kt.subVectors(e,t),s.cross(kt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){kt.subVectors(s,t),nn.subVectors(i,t),Gs.subVectors(e,t);const a=kt.dot(kt),o=kt.dot(nn),l=kt.dot(Gs),c=nn.dot(nn),f=nn.dot(Gs),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const p=1/u,h=(c*l-o*f)*p,g=(a*f-o*l)*p;return r.set(1-h-g,g,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,sn.x),l.addScaledVector(a,sn.y),l.addScaledVector(o,sn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Ys.setScalar(0),qs.setScalar(0),$s.setScalar(0),Ys.fromBufferAttribute(e,t),qs.fromBufferAttribute(e,i),$s.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ys,r.x),a.addScaledVector(qs,r.y),a.addScaledVector($s,r.z),a}static isFrontFacing(e,t,i,s){return kt.subVectors(i,t),nn.subVectors(e,t),kt.cross(nn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kt.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),kt.cross(nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Gt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Gt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Qn.subVectors(s,i),ei.subVectors(r,i),Vs.subVectors(e,i);const l=Qn.dot(Vs),c=ei.dot(Vs);if(l<=0&&c<=0)return t.copy(i);Ws.subVectors(e,s);const f=Qn.dot(Ws),u=ei.dot(Ws);if(f>=0&&u<=f)return t.copy(s);const p=l*u-f*c;if(p<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(i).addScaledVector(Qn,a);Xs.subVectors(e,r);const h=Qn.dot(Xs),g=ei.dot(Xs);if(g>=0&&h<=g)return t.copy(r);const v=h*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ei,o);const m=f*g-h*u;if(m<=0&&u-f>=0&&h-g>=0)return Ya.subVectors(r,s),o=(u-f)/(u-f+(h-g)),t.copy(s).addScaledVector(Ya,o);const d=1/(m+v+p);return a=v*d,o=p*d,t.copy(i).addScaledVector(Qn,a).addScaledVector(ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},$i={h:0,s:0,l:0};function js(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ge.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ge.workingColorSpace){if(e=xc(e,1),t=Be(t,0,1),i=Be(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=js(a,r,e+1/3),this.g=js(a,r,e),this.b=js(a,r,e-1/3)}return Ge.colorSpaceToWorking(this,s),this}setStyle(e,t=Mt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const i=Zo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dn(e.r),this.g=dn(e.g),this.b=dn(e.b),this}copyLinearToSRGB(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Ge.workingToColorSpace(vt.copy(this),e),Math.round(Be(vt.r*255,0,255))*65536+Math.round(Be(vt.g*255,0,255))*256+Math.round(Be(vt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(vt.copy(this),t);const i=vt.r,s=vt.g,r=vt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=f<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=Mt){Ge.workingToColorSpace(vt.copy(this),e);const t=vt.r,i=vt.g,s=vt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(vn),this.setHSL(vn.h+e,vn.s+t,vn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL($i);const i=Ls(vn.h,$i.h,t),s=Ls(vn.s,$i.s,t),r=Ls(vn.l,$i.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new $e;$e.NAMES=Zo;let Fc=0;class As extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=ci,this.side=Zt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mr,this.blendDst=gr,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Da,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(i.blending=this.blending),this.side!==Zt&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mr&&(i.blendSrc=this.blendSrc),this.blendDst!==gr&&(i.blendDst=this.blendDst),this.blendEquation!==Un&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Da&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ss extends As{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new H,ji=new Oe;let Oc=0;class Kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Oc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ia,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ji.fromBufferAttribute(this,t),ji.applyMatrix3(e),this.setXY(t,ji.x,ji.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ia&&(e.usage=this.usage),e}}class Jo extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qo extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Bn extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Bc=0;const Ft=new ct,Ks=new It,ti=new H,Lt=new Fi,yi=new Fi,ht=new H;class Vn extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qo(e)?Qo:Jo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ie().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,i){return Ft.makeTranslation(e,t,i),this.applyMatrix4(Ft),this}scale(e,t,i){return Ft.makeScale(e,t,i),this.applyMatrix4(Ft),this}lookAt(e){return Ks.lookAt(e),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Lt.setFromBufferAttribute(r),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];yi.setFromBufferAttribute(o),this.morphTargetsRelative?(ht.addVectors(Lt.min,yi.min),Lt.expandByPoint(ht),ht.addVectors(Lt.max,yi.max),Lt.expandByPoint(ht)):(Lt.expandByPoint(yi.min),Lt.expandByPoint(yi.max))}Lt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)ht.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ht));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)ht.fromBufferAttribute(o,c),l&&(ti.fromBufferAttribute(e,c),ht.add(ti)),s=Math.max(s,i.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<i.count;w++)o[w]=new H,l[w]=new H;const c=new H,f=new H,u=new H,p=new Oe,h=new Oe,g=new Oe,v=new H,m=new H;function d(w,y,x){c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,y),u.fromBufferAttribute(i,x),p.fromBufferAttribute(r,w),h.fromBufferAttribute(r,y),g.fromBufferAttribute(r,x),f.sub(c),u.sub(c),h.sub(p),g.sub(p);const A=1/(h.x*g.y-g.x*h.y);isFinite(A)&&(v.copy(f).multiplyScalar(g.y).addScaledVector(u,-h.y).multiplyScalar(A),m.copy(u).multiplyScalar(h.x).addScaledVector(f,-g.x).multiplyScalar(A),o[w].add(v),o[y].add(v),o[x].add(v),l[w].add(m),l[y].add(m),l[x].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let w=0,y=_.length;w<y;++w){const x=_[w],A=x.start,D=x.count;for(let U=A,z=A+D;U<z;U+=3)d(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const S=new H,E=new H,b=new H,C=new H;function P(w){b.fromBufferAttribute(s,w),C.copy(b);const y=o[w];S.copy(y),S.sub(b.multiplyScalar(b.dot(y))).normalize(),E.crossVectors(C,y);const A=E.dot(l[w])<0?-1:1;a.setXYZW(w,S.x,S.y,S.z,A)}for(let w=0,y=_.length;w<y;++w){const x=_[w],A=x.start,D=x.count;for(let U=A,z=A+D;U<z;U+=3)P(e.getX(U+0)),P(e.getX(U+1)),P(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,h=i.count;p<h;p++)i.setXYZ(p,0,0,0);const s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,f=new H,u=new H;if(e)for(let p=0,h=e.count;p<h;p+=3){const g=e.getX(p+0),v=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),f.subVectors(a,r),u.subVectors(s,r),f.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,h=t.count;p<h;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),f.subVectors(a,r),u.subVectors(s,r),f.cross(u),i.setXYZ(p+0,f.x,f.y,f.z),i.setXYZ(p+1,f.x,f.y,f.z),i.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,u=o.normalized,p=new c.constructor(l.length*f);let h=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?h=l[v]*o.data.stride+o.offset:h=l[v]*f;for(let d=0;d<f;d++)p[g++]=c[h++]}return new Kt(p,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let f=0,u=c.length;f<u;f++){const p=c[f],h=e(p,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,p=c.length;u<p;u++){const h=c[u];f.push(h.toJSON(e.data))}f.length>0&&(s[l]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const f=s[c];this.setAttribute(c,f.clone(t))}const r=e.morphAttributes;for(const c in r){const f=[],u=r[c];for(let p=0,h=u.length;p<h;p++)f.push(u[p].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qa=new ct,Rn=new jo,Ki=new ga,$a=new H,Zi=new H,Ji=new H,Qi=new H,Zs=new H,es=new H,ja=new H,ts=new H;class Wt extends It{constructor(e=new Vn,t=new Ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){es.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=o[l],u=r[l];f!==0&&(Zs.fromBufferAttribute(u,e),a?es.addScaledVector(Zs,f):es.addScaledVector(Zs.sub(t),f))}t.add(es)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ki.copy(i.boundingSphere),Ki.applyMatrix4(r),Rn.copy(e.ray).recast(e.near),!(Ki.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(Ki,$a)===null||Rn.origin.distanceToSquared($a)>(e.far-e.near)**2))&&(qa.copy(r).invert(),Rn.copy(e.ray).applyMatrix4(qa),!(i.boundingBox!==null&&Rn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Rn)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,u=r.attributes.normal,p=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const m=p[g],d=a[m.materialIndex],_=Math.max(m.start,h.start),S=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let E=_,b=S;E<b;E+=3){const C=o.getX(E),P=o.getX(E+1),w=o.getX(E+2);s=ns(this,d,e,i,c,f,u,C,P,w),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let m=g,d=v;m<d;m+=3){const _=o.getX(m),S=o.getX(m+1),E=o.getX(m+2);s=ns(this,a,e,i,c,f,u,_,S,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const m=p[g],d=a[m.materialIndex],_=Math.max(m.start,h.start),S=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let E=_,b=S;E<b;E+=3){const C=E,P=E+1,w=E+2;s=ns(this,d,e,i,c,f,u,C,P,w),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=g,d=v;m<d;m+=3){const _=m,S=m+1,E=m+2;s=ns(this,a,e,i,c,f,u,_,S,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function zc(n,e,t,i,s,r,a,o){let l;if(e.side===wt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Zt,o),l===null)return null;ts.copy(o),ts.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ts);return c<t.near||c>t.far?null:{distance:c,point:ts.clone(),object:n}}function ns(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Zi),n.getVertexPosition(l,Ji),n.getVertexPosition(c,Qi);const f=zc(n,e,t,i,Zi,Ji,Qi,ja);if(f){const u=new H;Gt.getBarycoord(ja,Zi,Ji,Qi,u),s&&(f.uv=Gt.getInterpolatedAttribute(s,o,l,c,u,new Oe)),r&&(f.uv1=Gt.getInterpolatedAttribute(r,o,l,c,u,new Oe)),a&&(f.normal=Gt.getInterpolatedAttribute(a,o,l,c,u,new H),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new H,materialIndex:0};Gt.getNormal(Zi,Ji,Qi,p.normal),f.face=p,f.barycoord=u}return f}class Oi extends Vn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],f=[],u=[];let p=0,h=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Bn(c,3)),this.setAttribute("normal",new Bn(f,3)),this.setAttribute("uv",new Bn(u,2));function g(v,m,d,_,S,E,b,C,P,w,y){const x=E/P,A=b/w,D=E/2,U=b/2,z=C/2,V=P+1,W=w+1;let j=0,O=0;const J=new H;for(let se=0;se<W;se++){const ue=se*A-U;for(let Fe=0;Fe<V;Fe++){const Ke=Fe*x-D;J[v]=Ke*_,J[m]=ue*S,J[d]=z,c.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[d]=C>0?1:-1,f.push(J.x,J.y,J.z),u.push(Fe/P),u.push(1-se/w),j+=1}}for(let se=0;se<w;se++)for(let ue=0;ue<P;ue++){const Fe=p+ue+V*se,Ke=p+ue+V*(se+1),Qe=p+(ue+1)+V*(se+1),Ve=p+(ue+1)+V*se;l.push(Fe,Ke,Ve),l.push(Ke,Qe,Ve),O+=6}o.addGroup(h,O,y),h+=O,p+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function St(n){const e={};for(let t=0;t<n.length;t++){const i=mi(n[t]);for(const s in i)e[s]=i[s]}return e}function Hc(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function el(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const kc={clone:mi,merge:St};var Gc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends As{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gc,this.fragmentShader=Vc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=Hc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class tl extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=$t,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xn=new H,Ka=new Oe,Za=new Oe;class Bt extends tl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return na*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xn.x,xn.y).multiplyScalar(-e/xn.z),xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xn.x,xn.y).multiplyScalar(-e/xn.z)}getViewSize(e,t){return this.getViewBounds(e,Ka,Za),t.subVectors(Za,Ka)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ms*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ni=-90,ii=1;class Wc extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Bt(ni,ii,e,t);s.layers=this.layers,this.add(s);const r=new Bt(ni,ii,e,t);r.layers=this.layers,this.add(r);const a=new Bt(ni,ii,e,t);a.layers=this.layers,this.add(a);const o=new Bt(ni,ii,e,t);o.layers=this.layers,this.add(o);const l=new Bt(ni,ii,e,t);l.layers=this.layers,this.add(l);const c=new Bt(ni,ii,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===$t)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,f]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,f),e.setRenderTarget(u,p,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class nl extends Et{constructor(e=[],t=fi,i,s,r,a,o,l,c,f){super(e,t,i,s,r,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xc extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new nl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Oi(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:mi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wt,blending:yn});r.uniforms.tEquirect.value=t;const a=new Wt(s,r),o=t.minFilter;return t.minFilter===On&&(t.minFilter=At),new Wc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class bi extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yc={type:"move"};class Js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=f.position.distanceTo(u.position),h=.02,g=.005;c.inputState.pinching&&p>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yc)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new bi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class qc extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Qs=new H,$c=new H,jc=new Ie;class Sn{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Qs.subVectors(i,t).cross($c.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Qs),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jc.getNormalMatrix(e),s=this.coplanarPoint(Qs).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new ga,Kc=new Oe(.5,.5),is=new H;class il{constructor(e=new Sn,t=new Sn,i=new Sn,s=new Sn,r=new Sn,a=new Sn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$t,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],f=r[4],u=r[5],p=r[6],h=r[7],g=r[8],v=r[9],m=r[10],d=r[11],_=r[12],S=r[13],E=r[14],b=r[15];if(s[0].setComponents(c-a,h-f,d-g,b-_).normalize(),s[1].setComponents(c+a,h+f,d+g,b+_).normalize(),s[2].setComponents(c+o,h+u,d+v,b+S).normalize(),s[3].setComponents(c-o,h-u,d-v,b-S).normalize(),i)s[4].setComponents(l,p,m,E).normalize(),s[5].setComponents(c-l,h-p,d-m,b-E).normalize();else if(s[4].setComponents(c-l,h-p,d-m,b-E).normalize(),t===$t)s[5].setComponents(c+l,h+p,d+m,b+E).normalize();else if(t===xs)s[5].setComponents(l,p,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(e){Pn.center.set(0,0,0);const t=Kc.distanceTo(e.center);return Pn.radius=.7071067811865476+t,Pn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(is.x=s.normal.x>0?e.max.x:e.min.x,is.y=s.normal.y>0?e.max.y:e.min.y,is.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sl extends Et{constructor(e,t,i=zn,s,r,a,o=Xt,l=Xt,c,f=Ri,u=1){if(f!==Ri&&f!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:u};super(p,s,r,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ma(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class rl extends Et{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gi extends Vn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,u=e/o,p=t/l,h=[],g=[],v=[],m=[];for(let d=0;d<f;d++){const _=d*p-a;for(let S=0;S<c;S++){const E=S*u-r;g.push(E,-_,0),v.push(0,0,1),m.push(S/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<o;_++){const S=_+c*d,E=_+c*(d+1),b=_+1+c*(d+1),C=_+1+c*d;h.push(S,E,C),h.push(E,b,C)}this.setIndex(h),this.setAttribute("position",new Bn(g,3)),this.setAttribute("normal",new Bn(v,3)),this.setAttribute("uv",new Bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zc extends As{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jc extends As{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const er={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Qc{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return c.push(f,u),this},this.removeHandler=function(f){const u=c.indexOf(f);return u!==-1&&c.splice(u,2),this},this.getHandler=function(f){for(let u=0,p=c.length;u<p;u+=2){const h=c[u],g=c[u+1];if(h.global&&(h.lastIndex=0),h.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const ed=new Qc;class _a{constructor(e){this.manager=e!==void 0?e:ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}_a.DEFAULT_MATERIAL_NAME="__DEFAULT";const si=new WeakMap;class td extends _a{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=er.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=si.get(a);u===void 0&&(u=[],si.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=Li("img");function l(){f(),t&&t(this);const u=si.get(this)||[];for(let p=0;p<u.length;p++){const h=u[p];h.onLoad&&h.onLoad(this)}si.delete(this),r.manager.itemEnd(e)}function c(u){f(),s&&s(u),er.remove(`image:${e}`);const p=si.get(this)||[];for(let h=0;h<p.length;h++){const g=p[h];g.onError&&g.onError(u)}si.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),er.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class nd extends _a{constructor(e){super(e)}load(e,t,i,s){const r=new Et,a=new td(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class id extends tl{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sd extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ja{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Be(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class rd extends Gn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Qa(n,e,t,i){const s=ad(i);switch(t){case Go:return n*e;case Wo:return n*e/s.components*s.byteLength;case fa:return n*e/s.components*s.byteLength;case Xo:return n*e*2/s.components*s.byteLength;case ha:return n*e*2/s.components*s.byteLength;case Vo:return n*e*3/s.components*s.byteLength;case Vt:return n*e*4/s.components*s.byteLength;case pa:return n*e*4/s.components*s.byteLength;case us:case fs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hs:case ps:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rr:case Lr:return Math.max(n,16)*Math.max(e,8)/4;case Cr:case Pr:return Math.max(n,8)*Math.max(e,8)/2;case Dr:case Ir:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ur:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fr:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Or:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Br:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case zr:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Hr:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case kr:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Gr:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Vr:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wr:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xr:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Yr:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case qr:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case $r:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case jr:case Kr:case Zr:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Jr:case Qr:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ea:case ta:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ad(n){switch(n){case un:case Bo:return{byteLength:1,components:1};case wi:case zo:case Ui:return{byteLength:2,components:1};case da:case ua:return{byteLength:2,components:4};case zn:case ca:case ln:return{byteLength:4,components:1};case Ho:case ko:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:la}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=la);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function al(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function od(n){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,u=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,f),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const f=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,f);else{u.sort((h,g)=>h.start-g.start);let p=0;for(let h=1;h<u.length;h++){const g=u[p],v=u[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,u[p]=v)}u.length=p+1;for(let h=0,g=u.length;h<g;h++){const v=u[h];n.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ld=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_d=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Md=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ed=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ld=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Id=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Od=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bd="gl_FragColor = linearToOutputTexel( gl_FragColor );",zd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,su=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ru=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,au=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ou=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,du=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_u=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Su=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Au=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ru=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Du=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ou=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ku=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$u=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ju=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ku=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ju=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ef=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,of=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_f=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ef=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Af=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,If=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Hf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:ld,alphahash_pars_fragment:cd,alphamap_fragment:dd,alphamap_pars_fragment:ud,alphatest_fragment:fd,alphatest_pars_fragment:hd,aomap_fragment:pd,aomap_pars_fragment:md,batching_pars_vertex:gd,batching_vertex:_d,begin_vertex:vd,beginnormal_vertex:xd,bsdfs:Sd,iridescence_fragment:Md,bumpmap_pars_fragment:Ed,clipping_planes_fragment:yd,clipping_planes_pars_fragment:Td,clipping_planes_pars_vertex:bd,clipping_planes_vertex:Ad,color_fragment:wd,color_pars_fragment:Cd,color_pars_vertex:Rd,color_vertex:Pd,common:Ld,cube_uv_reflection_fragment:Dd,defaultnormal_vertex:Id,displacementmap_pars_vertex:Ud,displacementmap_vertex:Nd,emissivemap_fragment:Fd,emissivemap_pars_fragment:Od,colorspace_fragment:Bd,colorspace_pars_fragment:zd,envmap_fragment:Hd,envmap_common_pars_fragment:kd,envmap_pars_fragment:Gd,envmap_pars_vertex:Vd,envmap_physical_pars_fragment:eu,envmap_vertex:Wd,fog_vertex:Xd,fog_pars_vertex:Yd,fog_fragment:qd,fog_pars_fragment:$d,gradientmap_pars_fragment:jd,lightmap_pars_fragment:Kd,lights_lambert_fragment:Zd,lights_lambert_pars_fragment:Jd,lights_pars_begin:Qd,lights_toon_fragment:tu,lights_toon_pars_fragment:nu,lights_phong_fragment:iu,lights_phong_pars_fragment:su,lights_physical_fragment:ru,lights_physical_pars_fragment:au,lights_fragment_begin:ou,lights_fragment_maps:lu,lights_fragment_end:cu,logdepthbuf_fragment:du,logdepthbuf_pars_fragment:uu,logdepthbuf_pars_vertex:fu,logdepthbuf_vertex:hu,map_fragment:pu,map_pars_fragment:mu,map_particle_fragment:gu,map_particle_pars_fragment:_u,metalnessmap_fragment:vu,metalnessmap_pars_fragment:xu,morphinstance_vertex:Su,morphcolor_vertex:Mu,morphnormal_vertex:Eu,morphtarget_pars_vertex:yu,morphtarget_vertex:Tu,normal_fragment_begin:bu,normal_fragment_maps:Au,normal_pars_fragment:wu,normal_pars_vertex:Cu,normal_vertex:Ru,normalmap_pars_fragment:Pu,clearcoat_normal_fragment_begin:Lu,clearcoat_normal_fragment_maps:Du,clearcoat_pars_fragment:Iu,iridescence_pars_fragment:Uu,opaque_fragment:Nu,packing:Fu,premultiplied_alpha_fragment:Ou,project_vertex:Bu,dithering_fragment:zu,dithering_pars_fragment:Hu,roughnessmap_fragment:ku,roughnessmap_pars_fragment:Gu,shadowmap_pars_fragment:Vu,shadowmap_pars_vertex:Wu,shadowmap_vertex:Xu,shadowmask_pars_fragment:Yu,skinbase_vertex:qu,skinning_pars_vertex:$u,skinning_vertex:ju,skinnormal_vertex:Ku,specularmap_fragment:Zu,specularmap_pars_fragment:Ju,tonemapping_fragment:Qu,tonemapping_pars_fragment:ef,transmission_fragment:tf,transmission_pars_fragment:nf,uv_pars_fragment:sf,uv_pars_vertex:rf,uv_vertex:af,worldpos_vertex:of,background_vert:lf,background_frag:cf,backgroundCube_vert:df,backgroundCube_frag:uf,cube_vert:ff,cube_frag:hf,depth_vert:pf,depth_frag:mf,distanceRGBA_vert:gf,distanceRGBA_frag:_f,equirect_vert:vf,equirect_frag:xf,linedashed_vert:Sf,linedashed_frag:Mf,meshbasic_vert:Ef,meshbasic_frag:yf,meshlambert_vert:Tf,meshlambert_frag:bf,meshmatcap_vert:Af,meshmatcap_frag:wf,meshnormal_vert:Cf,meshnormal_frag:Rf,meshphong_vert:Pf,meshphong_frag:Lf,meshphysical_vert:Df,meshphysical_frag:If,meshtoon_vert:Uf,meshtoon_frag:Nf,points_vert:Ff,points_frag:Of,shadow_vert:Bf,shadow_frag:zf,sprite_vert:Hf,sprite_frag:kf},ae={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},qt={basic:{uniforms:St([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:St([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:St([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:St([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:St([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:St([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:St([ae.points,ae.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:St([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:St([ae.common,ae.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:St([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:St([ae.sprite,ae.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:St([ae.common,ae.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:St([ae.lights,ae.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};qt.physical={uniforms:St([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const ss={r:0,b:0,g:0},Ln=new fn,Gf=new ct;function Vf(n,e,t,i,s,r,a){const o=new $e(0);let l=r===!0?0:1,c,f,u=null,p=0,h=null;function g(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?t:e).get(E)),E}function v(S){let E=!1;const b=g(S);b===null?d(o,l):b&&b.isColor&&(d(b,1),E=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,E){const b=g(E);b&&(b.isCubeTexture||b.mapping===bs)?(f===void 0&&(f=new Wt(new Oi(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:mi(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,P,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),Ln.copy(E.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),f.material.uniforms.envMap.value=b,f.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Gf.makeRotationFromEuler(Ln)),f.material.toneMapped=Ge.getTransfer(b.colorSpace)!==Ye,(u!==b||p!==b.version||h!==n.toneMapping)&&(f.material.needsUpdate=!0,u=b,p=b.version,h=n.toneMapping),f.layers.enableAll(),S.unshift(f,f.geometry,f.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Wt(new gi(2,2),new Tn({name:"BackgroundMaterial",uniforms:mi(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(b.colorSpace)!==Ye,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||p!==b.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,p=b.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function d(S,E){S.getRGB(ss,el(n)),i.buffers.color.setClear(ss.r,ss.g,ss.b,E,a)}function _(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),l=E,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,d(o,l)},render:v,addToRenderList:m,dispose:_}}function Wf(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null);let r=s,a=!1;function o(x,A,D,U,z){let V=!1;const W=u(U,D,A);r!==W&&(r=W,c(r.object)),V=h(x,U,D,z),V&&g(x,U,D,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,E(x,A,D,U),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function f(x){return n.deleteVertexArray(x)}function u(x,A,D){const U=D.wireframe===!0;let z=i[x.id];z===void 0&&(z={},i[x.id]=z);let V=z[A.id];V===void 0&&(V={},z[A.id]=V);let W=V[U];return W===void 0&&(W=p(l()),V[U]=W),W}function p(x){const A=[],D=[],U=[];for(let z=0;z<t;z++)A[z]=0,D[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:D,attributeDivisors:U,object:x,attributes:{},index:null}}function h(x,A,D,U){const z=r.attributes,V=A.attributes;let W=0;const j=D.getAttributes();for(const O in j)if(j[O].location>=0){const se=z[O];let ue=V[O];if(ue===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor)),se===void 0||se.attribute!==ue||ue&&se.data!==ue.data)return!0;W++}return r.attributesNum!==W||r.index!==U}function g(x,A,D,U){const z={},V=A.attributes;let W=0;const j=D.getAttributes();for(const O in j)if(j[O].location>=0){let se=V[O];se===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(se=x.instanceColor));const ue={};ue.attribute=se,se&&se.data&&(ue.data=se.data),z[O]=ue,W++}r.attributes=z,r.attributesNum=W,r.index=U}function v(){const x=r.newAttributes;for(let A=0,D=x.length;A<D;A++)x[A]=0}function m(x){d(x,0)}function d(x,A){const D=r.newAttributes,U=r.enabledAttributes,z=r.attributeDivisors;D[x]=1,U[x]===0&&(n.enableVertexAttribArray(x),U[x]=1),z[x]!==A&&(n.vertexAttribDivisor(x,A),z[x]=A)}function _(){const x=r.newAttributes,A=r.enabledAttributes;for(let D=0,U=A.length;D<U;D++)A[D]!==x[D]&&(n.disableVertexAttribArray(D),A[D]=0)}function S(x,A,D,U,z,V,W){W===!0?n.vertexAttribIPointer(x,A,D,z,V):n.vertexAttribPointer(x,A,D,U,z,V)}function E(x,A,D,U){v();const z=U.attributes,V=D.getAttributes(),W=A.defaultAttributeValues;for(const j in V){const O=V[j];if(O.location>=0){let J=z[j];if(J===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(J=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(J=x.instanceColor)),J!==void 0){const se=J.normalized,ue=J.itemSize,Fe=e.get(J);if(Fe===void 0)continue;const Ke=Fe.buffer,Qe=Fe.type,Ve=Fe.bytesPerElement,q=Qe===n.INT||Qe===n.UNSIGNED_INT||J.gpuType===ca;if(J.isInterleavedBufferAttribute){const Z=J.data,he=Z.stride,Re=J.offset;if(Z.isInstancedInterleavedBuffer){for(let Ee=0;Ee<O.locationSize;Ee++)d(O.location+Ee,Z.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Ee=0;Ee<O.locationSize;Ee++)m(O.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let Ee=0;Ee<O.locationSize;Ee++)S(O.location+Ee,ue/O.locationSize,Qe,se,he*Ve,(Re+ue/O.locationSize*Ee)*Ve,q)}else{if(J.isInstancedBufferAttribute){for(let Z=0;Z<O.locationSize;Z++)d(O.location+Z,J.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Z=0;Z<O.locationSize;Z++)m(O.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let Z=0;Z<O.locationSize;Z++)S(O.location+Z,ue/O.locationSize,Qe,se,ue*Ve,ue/O.locationSize*Z*Ve,q)}}else if(W!==void 0){const se=W[j];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(O.location,se);break;case 3:n.vertexAttrib3fv(O.location,se);break;case 4:n.vertexAttrib4fv(O.location,se);break;default:n.vertexAttrib1fv(O.location,se)}}}}_()}function b(){w();for(const x in i){const A=i[x];for(const D in A){const U=A[D];for(const z in U)f(U[z].object),delete U[z];delete A[D]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const A=i[x.id];for(const D in A){const U=A[D];for(const z in U)f(U[z].object),delete U[z];delete A[D]}delete i[x.id]}function P(x){for(const A in i){const D=i[A];if(D[x.id]===void 0)continue;const U=D[x.id];for(const z in U)f(U[z].object),delete U[z];delete D[x.id]}}function w(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:y,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Xf(n,e,t){let i;function s(c){i=c}function r(c,f){n.drawArrays(i,c,f),t.update(f,i,1)}function a(c,f,u){u!==0&&(n.drawArraysInstanced(i,c,f,u),t.update(f,i,u))}function o(c,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,u);let h=0;for(let g=0;g<u;g++)h+=f[g];t.update(h,i,1)}function l(c,f,u,p){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)a(c[g],f[g],p[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,f,0,p,0,u);let g=0;for(let v=0;v<u;v++)g+=f[v]*p[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Yf(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Vt&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const w=P===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==un&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ln&&!w)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const u=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:E,vertexTextures:b,maxSamples:C}}function qf(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Sn,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const h=u.length!==0||p||i!==0||s;return s=p,i=u.length,h},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=f(u,p,0)},this.setState=function(u,p,h){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?f(null):c();else{const _=r?0:i,S=_*4;let E=d.clippingState||null;l.value=E,E=f(g,p,S,h);for(let b=0;b!==S;++b)E[b]=t[b];d.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,p,h,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=h+v*4,_=p.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,E=h;S!==v;++S,E+=4)a.copy(u[S]).applyMatrix4(_,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function $f(n){let e=new WeakMap;function t(a,o){return o===Tr?a.mapping=fi:o===br&&(a.mapping=hi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Tr||o===br)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Xc(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const oi=4,eo=[.125,.215,.35,.446,.526,.582],Nn=20,tr=new id,to=new $e;let nr=null,ir=0,sr=0,rr=!1;const In=(1+Math.sqrt(5))/2,ri=1/In,no=[new H(-In,ri,0),new H(In,ri,0),new H(-ri,0,In),new H(ri,0,In),new H(0,In,-ri),new H(0,In,ri),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],jf=new H;class io{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=jf}=r;nr=this._renderer.getRenderTarget(),ir=this._renderer.getActiveCubeFace(),sr=this._renderer.getActiveMipmapLevel(),rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ao(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ro(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nr,ir,sr),this._renderer.xr.enabled=rr,e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nr=this._renderer.getRenderTarget(),ir=this._renderer.getActiveCubeFace(),sr=this._renderer.getActiveMipmapLevel(),rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:At,minFilter:At,generateMipmaps:!1,type:Ui,format:Vt,colorSpace:pi,depthBuffer:!1},s=so(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=so(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kf(r)),this._blurMaterial=Zf(r,e,t)}return s}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,tr)}_sceneToCubeUV(e,t,i,s,r){const l=new Bt(90,1,t,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,h=u.toneMapping;u.getClearColor(to),u.toneMapping=cn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const v=new Ss({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),m=new Wt(new Oi,v);let d=!1;const _=e.background;_?_.isColor&&(v.color.copy(_),e.background=null,d=!0):(v.color.copy(to),d=!0);for(let S=0;S<6;S++){const E=S%3;E===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[S],r.y,r.z)):E===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[S]));const b=this._cubeSize;rs(s,E*b,S>2?b:0,b,b),u.setRenderTarget(s),d&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=p,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===fi||e.mapping===hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ao()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ro());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;rs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,tr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=no[(s-r-1)%no.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new Wt(this._lodPlanes[s],c),p=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Nn-1),v=r/g,m=isFinite(r)?1+Math.floor(f*v):Nn;m>Nn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nn}`);const d=[];let _=0;for(let P=0;P<Nn;++P){const w=P/v,y=Math.exp(-w*w/2);d.push(y),P===0?_+=y:P<m&&(_+=2*y)}for(let P=0;P<d.length;P++)d[P]=d[P]/_;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:S}=this;p.dTheta.value=g,p.mipInt.value=S-i;const E=this._sizeLods[s],b=3*E*(s>S-oi?s-S+oi:0),C=4*(this._cubeSize-E);rs(t,b,C,3*E,2*E),l.setRenderTarget(t),l.render(u,tr)}}function Kf(n){const e=[],t=[],i=[];let s=n;const r=n-oi+1+eo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-oi?l=eo[a-n+oi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),f=-c,u=1+c,p=[f,f,u,f,u,u,f,f,u,u,f,u],h=6,g=6,v=3,m=2,d=1,_=new Float32Array(v*g*h),S=new Float32Array(m*g*h),E=new Float32Array(d*g*h);for(let C=0;C<h;C++){const P=C%3*2/3-1,w=C>2?0:-1,y=[P,w,0,P+2/3,w,0,P+2/3,w+1,0,P,w,0,P+2/3,w+1,0,P,w+1,0];_.set(y,v*g*C),S.set(p,m*g*C);const x=[C,C,C,C,C,C];E.set(x,d*g*C)}const b=new Vn;b.setAttribute("position",new Kt(_,v)),b.setAttribute("uv",new Kt(S,m)),b.setAttribute("faceIndex",new Kt(E,d)),e.push(b),s>oi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function so(n,e,t){const i=new kn(n,e,t);return i.texture.mapping=bs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Zf(n,e,t){const i=new Float32Array(Nn),s=new H(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function ro(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function ao(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function va(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jf(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Tr||l===br,f=l===fi||l===hi;if(c||f){let u=e.get(o);const p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new io(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const h=o.image;return c&&h&&h.height>0||f&&h&&s(h)?(t===null&&(t=new io(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Qf(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Di("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function eh(n,e,t,i){const s={},r=new WeakMap;function a(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id];const h=r.get(p);h&&(e.remove(h),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(u){const p=u.attributes;for(const h in p)e.update(p[h],n.ARRAY_BUFFER)}function c(u){const p=[],h=u.index,g=u.attributes.position;let v=0;if(h!==null){const _=h.array;v=h.version;for(let S=0,E=_.length;S<E;S+=3){const b=_[S+0],C=_[S+1],P=_[S+2];p.push(b,C,C,P,P,b)}}else if(g!==void 0){const _=g.array;v=g.version;for(let S=0,E=_.length/3-1;S<E;S+=3){const b=S+0,C=S+1,P=S+2;p.push(b,C,C,P,P,b)}}else return;const m=new(qo(p)?Qo:Jo)(p,1);m.version=v;const d=r.get(u);d&&e.remove(d),r.set(u,m)}function f(u){const p=r.get(u);if(p){const h=u.index;h!==null&&p.version<h.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:f}}function th(n,e,t){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,h){n.drawElements(i,h,r,p*a),t.update(h,i,1)}function c(p,h,g){g!==0&&(n.drawElementsInstanced(i,h,r,p*a,g),t.update(h,i,g))}function f(p,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,p,0,g);let m=0;for(let d=0;d<g;d++)m+=h[d];t.update(m,i,1)}function u(p,h,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)c(p[d]/a,h[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,r,p,0,v,0,g);let d=0;for(let _=0;_<g;_++)d+=h[_]*v[_];t.update(d,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function nh(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ih(n,e,t){const i=new WeakMap,s=new at;function r(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0;let p=i.get(o);if(p===void 0||p.count!==u){let y=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",y)};p!==void 0&&p.texture.dispose();const h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let S=0;h===!0&&(S=1),g===!0&&(S=2),v===!0&&(S=3);let E=o.attributes.position.count*S,b=1;E>e.maxTextureSize&&(b=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const C=new Float32Array(E*b*4*u),P=new $o(C,E,b,u);P.type=ln,P.needsUpdate=!0;const w=S*4;for(let x=0;x<u;x++){const A=m[x],D=d[x],U=_[x],z=E*b*4*x;for(let V=0;V<A.count;V++){const W=V*w;h===!0&&(s.fromBufferAttribute(A,V),C[z+W+0]=s.x,C[z+W+1]=s.y,C[z+W+2]=s.z,C[z+W+3]=0),g===!0&&(s.fromBufferAttribute(D,V),C[z+W+4]=s.x,C[z+W+5]=s.y,C[z+W+6]=s.z,C[z+W+7]=0),v===!0&&(s.fromBufferAttribute(U,V),C[z+W+8]=s.x,C[z+W+9]=s.y,C[z+W+10]=s.z,C[z+W+11]=U.itemSize===4?s.w:1)}}p={count:u,texture:P,size:new Oe(E,b)},i.set(o,p),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let h=0;for(let v=0;v<c.length;v++)h+=c[v];const g=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function sh(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,f=l.geometry,u=e.get(l,f);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const ol=new Et,oo=new sl(1,1),ll=new $o,cl=new Cc,dl=new nl,lo=[],co=[],uo=new Float32Array(16),fo=new Float32Array(9),ho=new Float32Array(4);function _i(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=lo[s];if(r===void 0&&(r=new Float32Array(s),lo[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ws(n,e){let t=co[e];t===void 0&&(t=new Int32Array(e),co[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function rh(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ah(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),ut(t,e)}}function oh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),ut(t,e)}}function lh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),ut(t,e)}}function ch(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(dt(t,i))return;ho.set(i),n.uniformMatrix2fv(this.addr,!1,ho),ut(t,i)}}function dh(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(dt(t,i))return;fo.set(i),n.uniformMatrix3fv(this.addr,!1,fo),ut(t,i)}}function uh(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(dt(t,i))return;uo.set(i),n.uniformMatrix4fv(this.addr,!1,uo),ut(t,i)}}function fh(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function hh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),ut(t,e)}}function ph(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),ut(t,e)}}function mh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),ut(t,e)}}function gh(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _h(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),ut(t,e)}}function vh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),ut(t,e)}}function xh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),ut(t,e)}}function Sh(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(oo.compareFunction=Yo,r=oo):r=ol,t.setTexture2D(e||r,s)}function Mh(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||cl,s)}function Eh(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||dl,s)}function yh(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ll,s)}function Th(n){switch(n){case 5126:return rh;case 35664:return ah;case 35665:return oh;case 35666:return lh;case 35674:return ch;case 35675:return dh;case 35676:return uh;case 5124:case 35670:return fh;case 35667:case 35671:return hh;case 35668:case 35672:return ph;case 35669:case 35673:return mh;case 5125:return gh;case 36294:return _h;case 36295:return vh;case 36296:return xh;case 35678:case 36198:case 36298:case 36306:case 35682:return Sh;case 35679:case 36299:case 36307:return Mh;case 35680:case 36300:case 36308:case 36293:return Eh;case 36289:case 36303:case 36311:case 36292:return yh}}function bh(n,e){n.uniform1fv(this.addr,e)}function Ah(n,e){const t=_i(e,this.size,2);n.uniform2fv(this.addr,t)}function wh(n,e){const t=_i(e,this.size,3);n.uniform3fv(this.addr,t)}function Ch(n,e){const t=_i(e,this.size,4);n.uniform4fv(this.addr,t)}function Rh(n,e){const t=_i(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ph(n,e){const t=_i(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Lh(n,e){const t=_i(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Dh(n,e){n.uniform1iv(this.addr,e)}function Ih(n,e){n.uniform2iv(this.addr,e)}function Uh(n,e){n.uniform3iv(this.addr,e)}function Nh(n,e){n.uniform4iv(this.addr,e)}function Fh(n,e){n.uniform1uiv(this.addr,e)}function Oh(n,e){n.uniform2uiv(this.addr,e)}function Bh(n,e){n.uniform3uiv(this.addr,e)}function zh(n,e){n.uniform4uiv(this.addr,e)}function Hh(n,e,t){const i=this.cache,s=e.length,r=ws(t,s);dt(i,r)||(n.uniform1iv(this.addr,r),ut(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||ol,r[a])}function kh(n,e,t){const i=this.cache,s=e.length,r=ws(t,s);dt(i,r)||(n.uniform1iv(this.addr,r),ut(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||cl,r[a])}function Gh(n,e,t){const i=this.cache,s=e.length,r=ws(t,s);dt(i,r)||(n.uniform1iv(this.addr,r),ut(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||dl,r[a])}function Vh(n,e,t){const i=this.cache,s=e.length,r=ws(t,s);dt(i,r)||(n.uniform1iv(this.addr,r),ut(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ll,r[a])}function Wh(n){switch(n){case 5126:return bh;case 35664:return Ah;case 35665:return wh;case 35666:return Ch;case 35674:return Rh;case 35675:return Ph;case 35676:return Lh;case 5124:case 35670:return Dh;case 35667:case 35671:return Ih;case 35668:case 35672:return Uh;case 35669:case 35673:return Nh;case 5125:return Fh;case 36294:return Oh;case 36295:return Bh;case 36296:return zh;case 35678:case 36198:case 36298:case 36306:case 35682:return Hh;case 35679:case 36299:case 36307:return kh;case 35680:case 36300:case 36308:case 36293:return Gh;case 36289:case 36303:case 36311:case 36292:return Vh}}class Xh{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Th(t.type)}}class Yh{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wh(t.type)}}class qh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const ar=/(\w+)(\])?(\[|\.)?/g;function po(n,e){n.seq.push(e),n.map[e.id]=e}function $h(n,e,t){const i=n.name,s=i.length;for(ar.lastIndex=0;;){const r=ar.exec(i),a=ar.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){po(t,c===void 0?new Xh(o,n,e):new Yh(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new qh(o),po(t,u)),t=u}}}class gs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);$h(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function mo(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const jh=37297;let Kh=0;function Zh(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const go=new Ie;function Jh(n){Ge._getMatrix(go,Ge.workingColorSpace,n);const e=`mat3( ${go.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(n)){case vs:return[e,"LinearTransferOETF"];case Ye:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function _o(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Zh(n.getShaderSource(e),o)}else return r}function Qh(n,e){const t=Jh(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ep(n,e){let t;switch(e){case ec:t="Linear";break;case tc:t="Reinhard";break;case nc:t="Cineon";break;case ic:t="ACESFilmic";break;case rc:t="AgX";break;case ac:t="Neutral";break;case sc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const as=new H;function tp(){Ge.getLuminanceCoefficients(as);const n=as.x.toFixed(4),e=as.y.toFixed(4),t=as.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function np(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ai).join(`
`)}function ip(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sp(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ai(n){return n!==""}function vo(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xo(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ia(n){return n.replace(rp,op)}const ap=new Map;function op(n,e){let t=Ne[e];if(t===void 0){const i=ap.get(e);if(i!==void 0)t=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ia(t)}const lp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function So(n){return n.replace(lp,cp)}function cp(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mo(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dp(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===No?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Il?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===rn&&(e="SHADOWMAP_TYPE_VSM"),e}function up(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fi:case hi:e="ENVMAP_TYPE_CUBE";break;case bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fp(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hi:e="ENVMAP_MODE_REFRACTION";break}return e}function hp(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Fo:e="ENVMAP_BLENDING_MULTIPLY";break;case Jl:e="ENVMAP_BLENDING_MIX";break;case Ql:e="ENVMAP_BLENDING_ADD";break}return e}function pp(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function mp(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=dp(t),c=up(t),f=fp(t),u=hp(t),p=pp(t),h=np(t),g=ip(r),v=s.createProgram();let m,d,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ai).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ai).join(`
`),d.length>0&&(d+=`
`)):(m=[Mo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),d=[Mo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cn?"#define TONE_MAPPING":"",t.toneMapping!==cn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==cn?ep("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Qh("linearToOutputTexel",t.outputColorSpace),tp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ai).join(`
`)),a=ia(a),a=vo(a,t),a=xo(a,t),o=ia(o),o=vo(o,t),o=xo(o,t),a=So(a),o=So(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Ua?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=_+m+a,E=_+d+o,b=mo(s,s.VERTEX_SHADER,S),C=mo(s,s.FRAGMENT_SHADER,E);s.attachShader(v,b),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(A){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(v)||"",U=s.getShaderInfoLog(b)||"",z=s.getShaderInfoLog(C)||"",V=D.trim(),W=U.trim(),j=z.trim();let O=!0,J=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,b,C);else{const se=_o(s,b,"vertex"),ue=_o(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+V+`
`+se+`
`+ue)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(W===""||j==="")&&(J=!1);J&&(A.diagnostics={runnable:O,programLog:V,vertexShader:{log:W,prefix:m},fragmentShader:{log:j,prefix:d}})}s.deleteShader(b),s.deleteShader(C),w=new gs(s,v),y=sp(s,v)}let w;this.getUniforms=function(){return w===void 0&&P(this),w};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,jh)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kh++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=C,this}let gp=0;class _p{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new vp(e),t.set(e,i)),i}}class vp{constructor(e){this.id=gp++,this.code=e,this.usedTimes=0}}function xp(n,e,t,i,s,r,a){const o=new Ko,l=new _p,c=new Set,f=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures;let h=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,A,D,U){const z=D.fog,V=U.geometry,W=y.isMeshStandardMaterial?D.environment:null,j=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),O=j&&j.mapping===bs?j.image.height:null,J=g[y.type];y.precision!==null&&(h=s.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const se=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ue=se!==void 0?se.length:0;let Fe=0;V.morphAttributes.position!==void 0&&(Fe=1),V.morphAttributes.normal!==void 0&&(Fe=2),V.morphAttributes.color!==void 0&&(Fe=3);let Ke,Qe,Ve,q;if(J){const We=qt[J];Ke=We.vertexShader,Qe=We.fragmentShader}else Ke=y.vertexShader,Qe=y.fragmentShader,l.update(y),Ve=l.getVertexShaderID(y),q=l.getFragmentShaderID(y);const Z=n.getRenderTarget(),he=n.state.buffers.depth.getReversed(),Re=U.isInstancedMesh===!0,Ee=U.isBatchedMesh===!0,He=!!y.map,gt=!!y.matcap,L=!!j,et=!!y.aoMap,Le=!!y.lightMap,we=!!y.bumpMap,ge=!!y.normalMap,tt=!!y.displacementMap,_e=!!y.emissiveMap,Ue=!!y.metalnessMap,ft=!!y.roughnessMap,rt=y.anisotropy>0,R=y.clearcoat>0,M=y.dispersion>0,B=y.iridescence>0,Y=y.sheen>0,K=y.transmission>0,X=rt&&!!y.anisotropyMap,Me=R&&!!y.clearcoatMap,ie=R&&!!y.clearcoatNormalMap,ve=R&&!!y.clearcoatRoughnessMap,xe=B&&!!y.iridescenceMap,te=B&&!!y.iridescenceThicknessMap,ce=Y&&!!y.sheenColorMap,Ae=Y&&!!y.sheenRoughnessMap,Se=!!y.specularMap,oe=!!y.specularColorMap,De=!!y.specularIntensityMap,I=K&&!!y.transmissionMap,ne=K&&!!y.thicknessMap,re=!!y.gradientMap,fe=!!y.alphaMap,Q=y.alphaTest>0,$=!!y.alphaHash,me=!!y.extensions;let Pe=cn;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Pe=n.toneMapping);const Ze={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Ke,fragmentShader:Qe,defines:y.defines,customVertexShaderID:Ve,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:Ee,batchingColor:Ee&&U._colorsTexture!==null,instancing:Re,instancingColor:Re&&U.instanceColor!==null,instancingMorph:Re&&U.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:pi,alphaToCoverage:!!y.alphaToCoverage,map:He,matcap:gt,envMap:L,envMapMode:L&&j.mapping,envMapCubeUVHeight:O,aoMap:et,lightMap:Le,bumpMap:we,normalMap:ge,displacementMap:p&&tt,emissiveMap:_e,normalMapObjectSpace:ge&&y.normalMapType===uc,normalMapTangentSpace:ge&&y.normalMapType===dc,metalnessMap:Ue,roughnessMap:ft,anisotropy:rt,anisotropyMap:X,clearcoat:R,clearcoatMap:Me,clearcoatNormalMap:ie,clearcoatRoughnessMap:ve,dispersion:M,iridescence:B,iridescenceMap:xe,iridescenceThicknessMap:te,sheen:Y,sheenColorMap:ce,sheenRoughnessMap:Ae,specularMap:Se,specularColorMap:oe,specularIntensityMap:De,transmission:K,transmissionMap:I,thicknessMap:ne,gradientMap:re,opaque:y.transparent===!1&&y.blending===ci&&y.alphaToCoverage===!1,alphaMap:fe,alphaTest:Q,alphaHash:$,combine:y.combine,mapUv:He&&v(y.map.channel),aoMapUv:et&&v(y.aoMap.channel),lightMapUv:Le&&v(y.lightMap.channel),bumpMapUv:we&&v(y.bumpMap.channel),normalMapUv:ge&&v(y.normalMap.channel),displacementMapUv:tt&&v(y.displacementMap.channel),emissiveMapUv:_e&&v(y.emissiveMap.channel),metalnessMapUv:Ue&&v(y.metalnessMap.channel),roughnessMapUv:ft&&v(y.roughnessMap.channel),anisotropyMapUv:X&&v(y.anisotropyMap.channel),clearcoatMapUv:Me&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(y.sheenRoughnessMap.channel),specularMapUv:Se&&v(y.specularMap.channel),specularColorMapUv:oe&&v(y.specularColorMap.channel),specularIntensityMapUv:De&&v(y.specularIntensityMap.channel),transmissionMapUv:I&&v(y.transmissionMap.channel),thicknessMapUv:ne&&v(y.thicknessMap.channel),alphaMapUv:fe&&v(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ge||rt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!V.attributes.uv&&(He||fe),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:he,skinning:U.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Fe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pe,decodeVideoTexture:He&&y.map.isVideoTexture===!0&&Ge.getTransfer(y.map.colorSpace)===Ye,decodeVideoTextureEmissive:_e&&y.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(y.emissiveMap.colorSpace)===Ye,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===an,flipSided:y.side===wt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:me&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&y.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function d(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)x.push(A),x.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(_(x,y),S(x,y),x.push(n.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function _(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function S(y,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),y.push(o.mask)}function E(y){const x=g[y.type];let A;if(x){const D=qt[x];A=kc.clone(D.uniforms)}else A=y.uniforms;return A}function b(y,x){let A;for(let D=0,U=f.length;D<U;D++){const z=f[D];if(z.cacheKey===x){A=z,++A.usedTimes;break}}return A===void 0&&(A=new mp(n,x,y,r),f.push(A)),A}function C(y){if(--y.usedTimes===0){const x=f.indexOf(y);f[x]=f[f.length-1],f.pop(),y.destroy()}}function P(y){l.remove(y)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:b,releaseProgram:C,releaseShaderCache:P,programs:f,dispose:w}}function Sp(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Mp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Eo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yo(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,p,h,g,v,m){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:p,material:h,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=h,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),e++,d}function o(u,p,h,g,v,m){const d=a(u,p,h,g,v,m);h.transmission>0?i.push(d):h.transparent===!0?s.push(d):t.push(d)}function l(u,p,h,g,v,m){const d=a(u,p,h,g,v,m);h.transmission>0?i.unshift(d):h.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,p){t.length>1&&t.sort(u||Mp),i.length>1&&i.sort(p||Eo),s.length>1&&s.sort(p||Eo)}function f(){for(let u=e,p=n.length;u<p;u++){const h=n[u];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:f,sort:c}}function Ep(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new yo,n.set(i,[a])):s>=r.length?(a=new yo,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function yp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new $e};break;case"SpotLight":t={position:new H,direction:new H,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function Tp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let bp=0;function Ap(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wp(n){const e=new yp,t=Tp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const s=new H,r=new ct,a=new ct;function o(c){let f=0,u=0,p=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let h=0,g=0,v=0,m=0,d=0,_=0,S=0,E=0,b=0,C=0,P=0;c.sort(Ap);for(let y=0,x=c.length;y<x;y++){const A=c[y],D=A.color,U=A.intensity,z=A.distance,V=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)f+=D.r*U,u+=D.g*U,p+=D.b*U;else if(A.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(A.sh.coefficients[W],U);P++}else if(A.isDirectionalLight){const W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const j=A.shadow,O=t.get(A);O.shadowIntensity=j.intensity,O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,i.directionalShadow[h]=O,i.directionalShadowMap[h]=V,i.directionalShadowMatrix[h]=A.shadow.matrix,_++}i.directional[h]=W,h++}else if(A.isSpotLight){const W=e.get(A);W.position.setFromMatrixPosition(A.matrixWorld),W.color.copy(D).multiplyScalar(U),W.distance=z,W.coneCos=Math.cos(A.angle),W.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),W.decay=A.decay,i.spot[v]=W;const j=A.shadow;if(A.map&&(i.spotLightMap[b]=A.map,b++,j.updateMatrices(A),A.castShadow&&C++),i.spotLightMatrix[v]=j.matrix,A.castShadow){const O=t.get(A);O.shadowIntensity=j.intensity,O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,i.spotShadow[v]=O,i.spotShadowMap[v]=V,E++}v++}else if(A.isRectAreaLight){const W=e.get(A);W.color.copy(D).multiplyScalar(U),W.halfWidth.set(A.width*.5,0,0),W.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=W,m++}else if(A.isPointLight){const W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),W.distance=A.distance,W.decay=A.decay,A.castShadow){const j=A.shadow,O=t.get(A);O.shadowIntensity=j.intensity,O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,O.shadowCameraNear=j.camera.near,O.shadowCameraFar=j.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=A.shadow.matrix,S++}i.point[g]=W,g++}else if(A.isHemisphereLight){const W=e.get(A);W.skyColor.copy(A.color).multiplyScalar(U),W.groundColor.copy(A.groundColor).multiplyScalar(U),i.hemi[d]=W,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=p;const w=i.hash;(w.directionalLength!==h||w.pointLength!==g||w.spotLength!==v||w.rectAreaLength!==m||w.hemiLength!==d||w.numDirectionalShadows!==_||w.numPointShadows!==S||w.numSpotShadows!==E||w.numSpotMaps!==b||w.numLightProbes!==P)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,w.directionalLength=h,w.pointLength=g,w.spotLength=v,w.rectAreaLength=m,w.hemiLength=d,w.numDirectionalShadows=_,w.numPointShadows=S,w.numSpotShadows=E,w.numSpotMaps=b,w.numLightProbes=P,i.version=bp++)}function l(c,f){let u=0,p=0,h=0,g=0,v=0;const m=f.matrixWorldInverse;for(let d=0,_=c.length;d<_;d++){const S=c[d];if(S.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(S.isSpotLight){const E=i.spot[h];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),h++}else if(S.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const E=i.point[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function To(n){const e=new wp(n),t=[],i=[];function s(f){c.camera=f,t.length=0,i.length=0}function r(f){t.push(f)}function a(f){i.push(f)}function o(){e.setup(t)}function l(f){e.setupView(t,f)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Cp(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new To(n),e.set(s,[o])):r>=a.length?(o=new To(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Rp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lp(n,e,t){let i=new il;const s=new Oe,r=new Oe,a=new at,o=new Zc({depthPacking:cc}),l=new Jc,c={},f=t.maxTextureSize,u={[Zt]:wt,[wt]:Zt,[an]:an},p=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Rp,fragmentShader:Pp}),h=p.clone();h.defines.HORIZONTAL_PASS=1;const g=new Vn;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Wt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=No;let d=this.type;this.render=function(C,P,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=n.getRenderTarget(),x=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),D=n.state;D.setBlending(yn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const U=d!==rn&&this.type===rn,z=d===rn&&this.type!==rn;for(let V=0,W=C.length;V<W;V++){const j=C[V],O=j.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const J=O.getFrameExtents();if(s.multiply(J),r.copy(O.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/J.x),s.x=r.x*J.x,O.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/J.y),s.y=r.y*J.y,O.mapSize.y=r.y)),O.map===null||U===!0||z===!0){const ue=this.type!==rn?{minFilter:Xt,magFilter:Xt}:{};O.map!==null&&O.map.dispose(),O.map=new kn(s.x,s.y,ue),O.map.texture.name=j.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const se=O.getViewportCount();for(let ue=0;ue<se;ue++){const Fe=O.getViewport(ue);a.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),D.viewport(a),O.updateMatrices(j,ue),i=O.getFrustum(),E(P,w,O.camera,j,this.type)}O.isPointLightShadow!==!0&&this.type===rn&&_(O,w),O.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(y,x,A)};function _(C,P){const w=e.update(v);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new kn(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,w,p,v,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,w,h,v,null)}function S(C,P,w,y){let x=null;const A=w.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)x=A;else if(x=w.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const D=x.uuid,U=P.uuid;let z=c[D];z===void 0&&(z={},c[D]=z);let V=z[U];V===void 0&&(V=x.clone(),z[U]=V,P.addEventListener("dispose",b)),x=V}if(x.visible=P.visible,x.wireframe=P.wireframe,y===rn?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:u[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,w.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const D=n.properties.get(x);D.light=w}return x}function E(C,P,w,y,x){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===rn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,C.matrixWorld);const U=e.update(C),z=C.material;if(Array.isArray(z)){const V=U.groups;for(let W=0,j=V.length;W<j;W++){const O=V[W],J=z[O.materialIndex];if(J&&J.visible){const se=S(C,J,y,x);C.onBeforeShadow(n,C,P,w,U,se,O),n.renderBufferDirect(w,null,U,se,C,O),C.onAfterShadow(n,C,P,w,U,se,O)}}}else if(z.visible){const V=S(C,z,y,x);C.onBeforeShadow(n,C,P,w,U,V,null),n.renderBufferDirect(w,null,U,V,C,null),C.onAfterShadow(n,C,P,w,U,V,null)}}const D=C.children;for(let U=0,z=D.length;U<z;U++)E(D[U],P,w,y,x)}function b(C){C.target.removeEventListener("dispose",b);for(const w in c){const y=c[w],x=C.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const Dp={[_r]:vr,[xr]:Er,[Sr]:yr,[ui]:Mr,[vr]:_r,[Er]:xr,[yr]:Sr,[Mr]:ui};function Ip(n,e){function t(){let I=!1;const ne=new at;let re=null;const fe=new at(0,0,0,0);return{setMask:function(Q){re!==Q&&!I&&(n.colorMask(Q,Q,Q,Q),re=Q)},setLocked:function(Q){I=Q},setClear:function(Q,$,me,Pe,Ze){Ze===!0&&(Q*=Pe,$*=Pe,me*=Pe),ne.set(Q,$,me,Pe),fe.equals(ne)===!1&&(n.clearColor(Q,$,me,Pe),fe.copy(ne))},reset:function(){I=!1,re=null,fe.set(-1,0,0,0)}}}function i(){let I=!1,ne=!1,re=null,fe=null,Q=null;return{setReversed:function($){if(ne!==$){const me=e.get("EXT_clip_control");$?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),ne=$;const Pe=Q;Q=null,this.setClear(Pe)}},getReversed:function(){return ne},setTest:function($){$?Z(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function($){re!==$&&!I&&(n.depthMask($),re=$)},setFunc:function($){if(ne&&($=Dp[$]),fe!==$){switch($){case _r:n.depthFunc(n.NEVER);break;case vr:n.depthFunc(n.ALWAYS);break;case xr:n.depthFunc(n.LESS);break;case ui:n.depthFunc(n.LEQUAL);break;case Sr:n.depthFunc(n.EQUAL);break;case Mr:n.depthFunc(n.GEQUAL);break;case Er:n.depthFunc(n.GREATER);break;case yr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=$}},setLocked:function($){I=$},setClear:function($){Q!==$&&(ne&&($=1-$),n.clearDepth($),Q=$)},reset:function(){I=!1,re=null,fe=null,Q=null,ne=!1}}}function s(){let I=!1,ne=null,re=null,fe=null,Q=null,$=null,me=null,Pe=null,Ze=null;return{setTest:function(We){I||(We?Z(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(We){ne!==We&&!I&&(n.stencilMask(We),ne=We)},setFunc:function(We,Jt,Yt){(re!==We||fe!==Jt||Q!==Yt)&&(n.stencilFunc(We,Jt,Yt),re=We,fe=Jt,Q=Yt)},setOp:function(We,Jt,Yt){($!==We||me!==Jt||Pe!==Yt)&&(n.stencilOp(We,Jt,Yt),$=We,me=Jt,Pe=Yt)},setLocked:function(We){I=We},setClear:function(We){Ze!==We&&(n.clearStencil(We),Ze=We)},reset:function(){I=!1,ne=null,re=null,fe=null,Q=null,$=null,me=null,Pe=null,Ze=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let f={},u={},p=new WeakMap,h=[],g=null,v=!1,m=null,d=null,_=null,S=null,E=null,b=null,C=null,P=new $e(0,0,0),w=0,y=!1,x=null,A=null,D=null,U=null,z=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(O)[1]),W=j>=1):O.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),W=j>=2);let J=null,se={};const ue=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),Ke=new at().fromArray(ue),Qe=new at().fromArray(Fe);function Ve(I,ne,re,fe){const Q=new Uint8Array(4),$=n.createTexture();n.bindTexture(I,$),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let me=0;me<re;me++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(ne+me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return $}const q={};q[n.TEXTURE_2D]=Ve(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),a.setFunc(ui),we(!1),ge(Ca),Z(n.CULL_FACE),et(yn);function Z(I){f[I]!==!0&&(n.enable(I),f[I]=!0)}function he(I){f[I]!==!1&&(n.disable(I),f[I]=!1)}function Re(I,ne){return u[I]!==ne?(n.bindFramebuffer(I,ne),u[I]=ne,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ne),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ee(I,ne){let re=h,fe=!1;if(I){re=p.get(ne),re===void 0&&(re=[],p.set(ne,re));const Q=I.textures;if(re.length!==Q.length||re[0]!==n.COLOR_ATTACHMENT0){for(let $=0,me=Q.length;$<me;$++)re[$]=n.COLOR_ATTACHMENT0+$;re.length=Q.length,fe=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,fe=!0);fe&&n.drawBuffers(re)}function He(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const gt={[Un]:n.FUNC_ADD,[Nl]:n.FUNC_SUBTRACT,[Fl]:n.FUNC_REVERSE_SUBTRACT};gt[Ol]=n.MIN,gt[Bl]=n.MAX;const L={[zl]:n.ZERO,[Hl]:n.ONE,[kl]:n.SRC_COLOR,[mr]:n.SRC_ALPHA,[ql]:n.SRC_ALPHA_SATURATE,[Xl]:n.DST_COLOR,[Vl]:n.DST_ALPHA,[Gl]:n.ONE_MINUS_SRC_COLOR,[gr]:n.ONE_MINUS_SRC_ALPHA,[Yl]:n.ONE_MINUS_DST_COLOR,[Wl]:n.ONE_MINUS_DST_ALPHA,[$l]:n.CONSTANT_COLOR,[jl]:n.ONE_MINUS_CONSTANT_COLOR,[Kl]:n.CONSTANT_ALPHA,[Zl]:n.ONE_MINUS_CONSTANT_ALPHA};function et(I,ne,re,fe,Q,$,me,Pe,Ze,We){if(I===yn){v===!0&&(he(n.BLEND),v=!1);return}if(v===!1&&(Z(n.BLEND),v=!0),I!==Ul){if(I!==m||We!==y){if((d!==Un||E!==Un)&&(n.blendEquation(n.FUNC_ADD),d=Un,E=Un),We)switch(I){case ci:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ra:n.blendFunc(n.ONE,n.ONE);break;case Pa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case La:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ci:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ra:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Pa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case La:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}_=null,S=null,b=null,C=null,P.set(0,0,0),w=0,m=I,y=We}return}Q=Q||ne,$=$||re,me=me||fe,(ne!==d||Q!==E)&&(n.blendEquationSeparate(gt[ne],gt[Q]),d=ne,E=Q),(re!==_||fe!==S||$!==b||me!==C)&&(n.blendFuncSeparate(L[re],L[fe],L[$],L[me]),_=re,S=fe,b=$,C=me),(Pe.equals(P)===!1||Ze!==w)&&(n.blendColor(Pe.r,Pe.g,Pe.b,Ze),P.copy(Pe),w=Ze),m=I,y=!1}function Le(I,ne){I.side===an?he(n.CULL_FACE):Z(n.CULL_FACE);let re=I.side===wt;ne&&(re=!re),we(re),I.blending===ci&&I.transparent===!1?et(yn):et(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const fe=I.stencilWrite;o.setTest(fe),fe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),_e(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function we(I){x!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),x=I)}function ge(I){I!==Ll?(Z(n.CULL_FACE),I!==A&&(I===Ca?n.cullFace(n.BACK):I===Dl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),A=I}function tt(I){I!==D&&(W&&n.lineWidth(I),D=I)}function _e(I,ne,re){I?(Z(n.POLYGON_OFFSET_FILL),(U!==ne||z!==re)&&(n.polygonOffset(ne,re),U=ne,z=re)):he(n.POLYGON_OFFSET_FILL)}function Ue(I){I?Z(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function ft(I){I===void 0&&(I=n.TEXTURE0+V-1),J!==I&&(n.activeTexture(I),J=I)}function rt(I,ne,re){re===void 0&&(J===null?re=n.TEXTURE0+V-1:re=J);let fe=se[re];fe===void 0&&(fe={type:void 0,texture:void 0},se[re]=fe),(fe.type!==I||fe.texture!==ne)&&(J!==re&&(n.activeTexture(re),J=re),n.bindTexture(I,ne||q[I]),fe.type=I,fe.texture=ne)}function R(){const I=se[J];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(I){Ke.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ke.copy(I))}function Ae(I){Qe.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Qe.copy(I))}function Se(I,ne){let re=c.get(ne);re===void 0&&(re=new WeakMap,c.set(ne,re));let fe=re.get(I);fe===void 0&&(fe=n.getUniformBlockIndex(ne,I.name),re.set(I,fe))}function oe(I,ne){const fe=c.get(ne).get(I);l.get(ne)!==fe&&(n.uniformBlockBinding(ne,fe,I.__bindingPointIndex),l.set(ne,fe))}function De(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},J=null,se={},u={},p=new WeakMap,h=[],g=null,v=!1,m=null,d=null,_=null,S=null,E=null,b=null,C=null,P=new $e(0,0,0),w=0,y=!1,x=null,A=null,D=null,U=null,z=null,Ke.set(0,0,n.canvas.width,n.canvas.height),Qe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:he,bindFramebuffer:Re,drawBuffers:Ee,useProgram:He,setBlending:et,setMaterial:Le,setFlipSided:we,setCullFace:ge,setLineWidth:tt,setPolygonOffset:_e,setScissorTest:Ue,activeTexture:ft,bindTexture:rt,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:B,texImage2D:xe,texImage3D:te,updateUBOMapping:Se,uniformBlockBinding:oe,texStorage2D:ie,texStorage3D:ve,texSubImage2D:Y,texSubImage3D:K,compressedTexSubImage2D:X,compressedTexSubImage3D:Me,scissor:ce,viewport:Ae,reset:De}}function Up(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,f=new WeakMap;let u;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return h?new OffscreenCanvas(R,M):Li("canvas")}function v(R,M,B){let Y=1;const K=rt(R);if((K.width>B||K.height>B)&&(Y=B/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const X=Math.floor(Y*K.width),Me=Math.floor(Y*K.height);u===void 0&&(u=g(X,Me));const ie=M?g(X,Me):u;return ie.width=X,ie.height=Me,ie.getContext("2d").drawImage(R,0,0,X,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+Me+")."),ie}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){n.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(R,M,B,Y,K=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=M;if(M===n.RED&&(B===n.FLOAT&&(X=n.R32F),B===n.HALF_FLOAT&&(X=n.R16F),B===n.UNSIGNED_BYTE&&(X=n.R8)),M===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.R8UI),B===n.UNSIGNED_SHORT&&(X=n.R16UI),B===n.UNSIGNED_INT&&(X=n.R32UI),B===n.BYTE&&(X=n.R8I),B===n.SHORT&&(X=n.R16I),B===n.INT&&(X=n.R32I)),M===n.RG&&(B===n.FLOAT&&(X=n.RG32F),B===n.HALF_FLOAT&&(X=n.RG16F),B===n.UNSIGNED_BYTE&&(X=n.RG8)),M===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.RG8UI),B===n.UNSIGNED_SHORT&&(X=n.RG16UI),B===n.UNSIGNED_INT&&(X=n.RG32UI),B===n.BYTE&&(X=n.RG8I),B===n.SHORT&&(X=n.RG16I),B===n.INT&&(X=n.RG32I)),M===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.RGB8UI),B===n.UNSIGNED_SHORT&&(X=n.RGB16UI),B===n.UNSIGNED_INT&&(X=n.RGB32UI),B===n.BYTE&&(X=n.RGB8I),B===n.SHORT&&(X=n.RGB16I),B===n.INT&&(X=n.RGB32I)),M===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),B===n.UNSIGNED_INT&&(X=n.RGBA32UI),B===n.BYTE&&(X=n.RGBA8I),B===n.SHORT&&(X=n.RGBA16I),B===n.INT&&(X=n.RGBA32I)),M===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),M===n.RGBA){const Me=K?vs:Ge.getTransfer(Y);B===n.FLOAT&&(X=n.RGBA32F),B===n.HALF_FLOAT&&(X=n.RGBA16F),B===n.UNSIGNED_BYTE&&(X=Me===Ye?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function E(R,M){let B;return R?M===null||M===zn||M===Ci?B=n.DEPTH24_STENCIL8:M===ln?B=n.DEPTH32F_STENCIL8:M===wi&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===zn||M===Ci?B=n.DEPTH_COMPONENT24:M===ln?B=n.DEPTH_COMPONENT32F:M===wi&&(B=n.DEPTH_COMPONENT16),B}function b(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Xt&&R.minFilter!==At?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){const M=R.target;M.removeEventListener("dispose",C),w(M),M.isVideoTexture&&f.delete(M)}function P(R){const M=R.target;M.removeEventListener("dispose",P),x(M)}function w(R){const M=i.get(R);if(M.__webglInit===void 0)return;const B=R.source,Y=p.get(B);if(Y){const K=Y[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(R),Object.keys(Y).length===0&&p.delete(B)}i.remove(R)}function y(R){const M=i.get(R);n.deleteTexture(M.__webglTexture);const B=R.source,Y=p.get(B);delete Y[M.__cacheKey],a.memory.textures--}function x(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let K=0;K<M.__webglFramebuffer[Y].length;K++)n.deleteFramebuffer(M.__webglFramebuffer[Y][K]);else n.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)n.deleteFramebuffer(M.__webglFramebuffer[Y]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=R.textures;for(let Y=0,K=B.length;Y<K;Y++){const X=i.get(B[Y]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(B[Y])}i.remove(R)}let A=0;function D(){A=0}function U(){const R=A;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),A+=1,R}function z(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function V(R,M){const B=i.get(R);if(R.isVideoTexture&&Ue(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,R,M);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+M)}function W(R,M){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){q(B,R,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+M)}function j(R,M){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){q(B,R,M);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+M)}function O(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){Z(B,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+M)}const J={[Ar]:n.REPEAT,[Fn]:n.CLAMP_TO_EDGE,[wr]:n.MIRRORED_REPEAT},se={[Xt]:n.NEAREST,[oc]:n.NEAREST_MIPMAP_NEAREST,[Hi]:n.NEAREST_MIPMAP_LINEAR,[At]:n.LINEAR,[Ps]:n.LINEAR_MIPMAP_NEAREST,[On]:n.LINEAR_MIPMAP_LINEAR},ue={[fc]:n.NEVER,[vc]:n.ALWAYS,[hc]:n.LESS,[Yo]:n.LEQUAL,[pc]:n.EQUAL,[_c]:n.GEQUAL,[mc]:n.GREATER,[gc]:n.NOTEQUAL};function Fe(R,M){if(M.type===ln&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===At||M.magFilter===Ps||M.magFilter===Hi||M.magFilter===On||M.minFilter===At||M.minFilter===Ps||M.minFilter===Hi||M.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,J[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,J[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,J[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,se[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,se[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Xt||M.minFilter!==Hi&&M.minFilter!==On||M.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ke(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const Y=M.source;let K=p.get(Y);K===void 0&&(K={},p.set(Y,K));const X=z(M);if(X!==R.__cacheKey){K[X]===void 0&&(K[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),K[X].usedTimes++;const Me=K[R.__cacheKey];Me!==void 0&&(K[R.__cacheKey].usedTimes--,Me.usedTimes===0&&y(M)),R.__cacheKey=X,R.__webglTexture=K[X].texture}return B}function Qe(R,M,B){return Math.floor(Math.floor(R/B)/M)}function Ve(R,M,B,Y){const X=R.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,B,Y,M.data);else{X.sort((te,ce)=>te.start-ce.start);let Me=0;for(let te=1;te<X.length;te++){const ce=X[Me],Ae=X[te],Se=ce.start+ce.count,oe=Qe(Ae.start,M.width,4),De=Qe(ce.start,M.width,4);Ae.start<=Se+1&&oe===De&&Qe(Ae.start+Ae.count-1,M.width,4)===oe?ce.count=Math.max(ce.count,Ae.start+Ae.count-ce.start):(++Me,X[Me]=Ae)}X.length=Me+1;const ie=n.getParameter(n.UNPACK_ROW_LENGTH),ve=n.getParameter(n.UNPACK_SKIP_PIXELS),xe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let te=0,ce=X.length;te<ce;te++){const Ae=X[te],Se=Math.floor(Ae.start/4),oe=Math.ceil(Ae.count/4),De=Se%M.width,I=Math.floor(Se/M.width),ne=oe,re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,De),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,De,I,ne,re,B,Y,M.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ie),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,xe)}}function q(R,M,B){let Y=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=n.TEXTURE_3D);const K=Ke(R,M),X=M.source;t.bindTexture(Y,R.__webglTexture,n.TEXTURE0+B);const Me=i.get(X);if(X.version!==Me.__version||K===!0){t.activeTexture(n.TEXTURE0+B);const ie=Ge.getPrimaries(Ge.workingColorSpace),ve=M.colorSpace===Mn?null:Ge.getPrimaries(M.colorSpace),xe=M.colorSpace===Mn||ie===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let te=v(M.image,!1,s.maxTextureSize);te=ft(M,te);const ce=r.convert(M.format,M.colorSpace),Ae=r.convert(M.type);let Se=S(M.internalFormat,ce,Ae,M.colorSpace,M.isVideoTexture);Fe(Y,M);let oe;const De=M.mipmaps,I=M.isVideoTexture!==!0,ne=Me.__version===void 0||K===!0,re=X.dataReady,fe=b(M,te);if(M.isDepthTexture)Se=E(M.format===Pi,M.type),ne&&(I?t.texStorage2D(n.TEXTURE_2D,1,Se,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Se,te.width,te.height,0,ce,Ae,null));else if(M.isDataTexture)if(De.length>0){I&&ne&&t.texStorage2D(n.TEXTURE_2D,fe,Se,De[0].width,De[0].height);for(let Q=0,$=De.length;Q<$;Q++)oe=De[Q],I?re&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,oe.width,oe.height,ce,Ae,oe.data):t.texImage2D(n.TEXTURE_2D,Q,Se,oe.width,oe.height,0,ce,Ae,oe.data);M.generateMipmaps=!1}else I?(ne&&t.texStorage2D(n.TEXTURE_2D,fe,Se,te.width,te.height),re&&Ve(M,te,ce,Ae)):t.texImage2D(n.TEXTURE_2D,0,Se,te.width,te.height,0,ce,Ae,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){I&&ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Se,De[0].width,De[0].height,te.depth);for(let Q=0,$=De.length;Q<$;Q++)if(oe=De[Q],M.format!==Vt)if(ce!==null)if(I){if(re)if(M.layerUpdates.size>0){const me=Qa(oe.width,oe.height,M.format,M.type);for(const Pe of M.layerUpdates){const Ze=oe.data.subarray(Pe*me/oe.data.BYTES_PER_ELEMENT,(Pe+1)*me/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Pe,oe.width,oe.height,1,ce,Ze)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,oe.width,oe.height,te.depth,ce,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Se,oe.width,oe.height,te.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,oe.width,oe.height,te.depth,ce,Ae,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Se,oe.width,oe.height,te.depth,0,ce,Ae,oe.data)}else{I&&ne&&t.texStorage2D(n.TEXTURE_2D,fe,Se,De[0].width,De[0].height);for(let Q=0,$=De.length;Q<$;Q++)oe=De[Q],M.format!==Vt?ce!==null?I?re&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,oe.width,oe.height,ce,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Se,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?re&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,oe.width,oe.height,ce,Ae,oe.data):t.texImage2D(n.TEXTURE_2D,Q,Se,oe.width,oe.height,0,ce,Ae,oe.data)}else if(M.isDataArrayTexture)if(I){if(ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Se,te.width,te.height,te.depth),re)if(M.layerUpdates.size>0){const Q=Qa(te.width,te.height,M.format,M.type);for(const $ of M.layerUpdates){const me=te.data.subarray($*Q/te.data.BYTES_PER_ELEMENT,($+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,te.width,te.height,1,ce,Ae,me)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ce,Ae,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,te.width,te.height,te.depth,0,ce,Ae,te.data);else if(M.isData3DTexture)I?(ne&&t.texStorage3D(n.TEXTURE_3D,fe,Se,te.width,te.height,te.depth),re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ce,Ae,te.data)):t.texImage3D(n.TEXTURE_3D,0,Se,te.width,te.height,te.depth,0,ce,Ae,te.data);else if(M.isFramebufferTexture){if(ne)if(I)t.texStorage2D(n.TEXTURE_2D,fe,Se,te.width,te.height);else{let Q=te.width,$=te.height;for(let me=0;me<fe;me++)t.texImage2D(n.TEXTURE_2D,me,Se,Q,$,0,ce,Ae,null),Q>>=1,$>>=1}}else if(De.length>0){if(I&&ne){const Q=rt(De[0]);t.texStorage2D(n.TEXTURE_2D,fe,Se,Q.width,Q.height)}for(let Q=0,$=De.length;Q<$;Q++)oe=De[Q],I?re&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ce,Ae,oe):t.texImage2D(n.TEXTURE_2D,Q,Se,ce,Ae,oe);M.generateMipmaps=!1}else if(I){if(ne){const Q=rt(te);t.texStorage2D(n.TEXTURE_2D,fe,Se,Q.width,Q.height)}re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Ae,te)}else t.texImage2D(n.TEXTURE_2D,0,Se,ce,Ae,te);m(M)&&d(Y),Me.__version=X.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Z(R,M,B){if(M.image.length!==6)return;const Y=Ke(R,M),K=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+B);const X=i.get(K);if(K.version!==X.__version||Y===!0){t.activeTexture(n.TEXTURE0+B);const Me=Ge.getPrimaries(Ge.workingColorSpace),ie=M.colorSpace===Mn?null:Ge.getPrimaries(M.colorSpace),ve=M.colorSpace===Mn||Me===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const xe=M.isCompressedTexture||M.image[0].isCompressedTexture,te=M.image[0]&&M.image[0].isDataTexture,ce=[];for(let $=0;$<6;$++)!xe&&!te?ce[$]=v(M.image[$],!0,s.maxCubemapSize):ce[$]=te?M.image[$].image:M.image[$],ce[$]=ft(M,ce[$]);const Ae=ce[0],Se=r.convert(M.format,M.colorSpace),oe=r.convert(M.type),De=S(M.internalFormat,Se,oe,M.colorSpace),I=M.isVideoTexture!==!0,ne=X.__version===void 0||Y===!0,re=K.dataReady;let fe=b(M,Ae);Fe(n.TEXTURE_CUBE_MAP,M);let Q;if(xe){I&&ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,De,Ae.width,Ae.height);for(let $=0;$<6;$++){Q=ce[$].mipmaps;for(let me=0;me<Q.length;me++){const Pe=Q[me];M.format!==Vt?Se!==null?I?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,0,0,Pe.width,Pe.height,Se,Pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,De,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,0,0,Pe.width,Pe.height,Se,oe,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,De,Pe.width,Pe.height,0,Se,oe,Pe.data)}}}else{if(Q=M.mipmaps,I&&ne){Q.length>0&&fe++;const $=rt(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,De,$.width,$.height)}for(let $=0;$<6;$++)if(te){I?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ce[$].width,ce[$].height,Se,oe,ce[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,De,ce[$].width,ce[$].height,0,Se,oe,ce[$].data);for(let me=0;me<Q.length;me++){const Ze=Q[me].image[$].image;I?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,0,0,Ze.width,Ze.height,Se,oe,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,De,Ze.width,Ze.height,0,Se,oe,Ze.data)}}else{I?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Se,oe,ce[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,De,Se,oe,ce[$]);for(let me=0;me<Q.length;me++){const Pe=Q[me];I?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,0,0,Se,oe,Pe.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,De,Se,oe,Pe.image[$])}}}m(M)&&d(n.TEXTURE_CUBE_MAP),X.__version=K.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function he(R,M,B,Y,K,X){const Me=r.convert(B.format,B.colorSpace),ie=r.convert(B.type),ve=S(B.internalFormat,Me,ie,B.colorSpace),xe=i.get(M),te=i.get(B);if(te.__renderTarget=M,!xe.__hasExternalTextures){const ce=Math.max(1,M.width>>X),Ae=Math.max(1,M.height>>X);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,X,ve,ce,Ae,M.depth,0,Me,ie,null):t.texImage2D(K,X,ve,ce,Ae,0,Me,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),_e(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,K,te.__webglTexture,0,tt(M)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,K,te.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(R,M,B){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){const Y=M.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,X=E(M.stencilBuffer,K),Me=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=tt(M);_e(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,X,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,X,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,X,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,R)}else{const Y=M.textures;for(let K=0;K<Y.length;K++){const X=Y[K],Me=r.convert(X.format,X.colorSpace),ie=r.convert(X.type),ve=S(X.internalFormat,Me,ie,X.colorSpace),xe=tt(M);B&&_e(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,ve,M.width,M.height):_e(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,ve,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ve,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ee(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const K=Y.__webglTexture,X=tt(M);if(M.depthTexture.format===Ri)_e(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(M.depthTexture.format===Pi)_e(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function He(R){const M=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=Y}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Y=R.texture.mipmaps;Y&&Y.length>0?Ee(M.__webglFramebuffer[0],R):Ee(M.__webglFramebuffer,R)}else if(B){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=n.createRenderbuffer(),Re(M.__webglDepthbuffer[Y],R,!1);else{const K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,X)}}else{const Y=R.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Re(M.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(R,M,B){const Y=i.get(R);M!==void 0&&he(Y.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&He(R)}function L(R){const M=R.texture,B=i.get(R),Y=i.get(M);R.addEventListener("dispose",P);const K=R.textures,X=R.isWebGLCubeRenderTarget===!0,Me=K.length>1;if(Me||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=M.version,a.memory.textures++),X){B.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ie]=[];for(let ve=0;ve<M.mipmaps.length;ve++)B.__webglFramebuffer[ie][ve]=n.createFramebuffer()}else B.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ie=0;ie<M.mipmaps.length;ie++)B.__webglFramebuffer[ie]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ie=0,ve=K.length;ie<ve;ie++){const xe=i.get(K[ie]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&_e(R)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ie=0;ie<K.length;ie++){const ve=K[ie];B.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ie]);const xe=r.convert(ve.format,ve.colorSpace),te=r.convert(ve.type),ce=S(ve.internalFormat,xe,te,ve.colorSpace,R.isXRRenderTarget===!0),Ae=tt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ce,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,B.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Re(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,M);for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)he(B.__webglFramebuffer[ie][ve],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve);else he(B.__webglFramebuffer[ie],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(M)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ie=0,ve=K.length;ie<ve;ie++){const xe=K[ie],te=i.get(xe);let ce=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,te.__webglTexture),Fe(ce,xe),he(B.__webglFramebuffer,R,xe,n.COLOR_ATTACHMENT0+ie,ce,0),m(xe)&&d(ce)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ie=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,Y.__webglTexture),Fe(ie,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)he(B.__webglFramebuffer[ve],R,M,n.COLOR_ATTACHMENT0,ie,ve);else he(B.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,ie,0);m(M)&&d(ie),t.unbindTexture()}R.depthBuffer&&He(R)}function et(R){const M=R.textures;for(let B=0,Y=M.length;B<Y;B++){const K=M[B];if(m(K)){const X=_(R),Me=i.get(K).__webglTexture;t.bindTexture(X,Me),d(X),t.unbindTexture()}}}const Le=[],we=[];function ge(R){if(R.samples>0){if(_e(R)===!1){const M=R.textures,B=R.width,Y=R.height;let K=n.COLOR_BUFFER_BIT;const X=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(R),ie=M.length>1;if(ie)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const ve=R.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[xe]);const te=i.get(M[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,B,Y,0,0,B,Y,K,n.NEAREST),l===!0&&(Le.length=0,we.length=0,Le.push(n.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Le.push(X),we.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,we)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Le))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,Me.__webglColorRenderbuffer[xe]);const te=i.get(M[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function tt(R){return Math.min(s.maxSamples,R.samples)}function _e(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ue(R){const M=a.render.frame;f.get(R)!==M&&(f.set(R,M),R.update())}function ft(R,M){const B=R.colorSpace,Y=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==pi&&B!==Mn&&(Ge.getTransfer(B)===Ye?(Y!==Vt||K!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function rt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.setTexture2D=V,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=O,this.rebindTextures=gt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=he,this.useMultisampledRTT=_e}function Np(n,e){function t(i,s=Mn){let r;const a=Ge.getTransfer(s);if(i===un)return n.UNSIGNED_BYTE;if(i===da)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ua)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ho)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ko)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Bo)return n.BYTE;if(i===zo)return n.SHORT;if(i===wi)return n.UNSIGNED_SHORT;if(i===ca)return n.INT;if(i===zn)return n.UNSIGNED_INT;if(i===ln)return n.FLOAT;if(i===Ui)return n.HALF_FLOAT;if(i===Go)return n.ALPHA;if(i===Vo)return n.RGB;if(i===Vt)return n.RGBA;if(i===Ri)return n.DEPTH_COMPONENT;if(i===Pi)return n.DEPTH_STENCIL;if(i===Wo)return n.RED;if(i===fa)return n.RED_INTEGER;if(i===Xo)return n.RG;if(i===ha)return n.RG_INTEGER;if(i===pa)return n.RGBA_INTEGER;if(i===us||i===fs||i===hs||i===ps)if(a===Ye)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===us)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===us)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ps)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cr||i===Rr||i===Pr||i===Lr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Cr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dr||i===Ir||i===Ur)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Dr||i===Ir)return a===Ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ur)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nr||i===Fr||i===Or||i===Br||i===zr||i===Hr||i===kr||i===Gr||i===Vr||i===Wr||i===Xr||i===Yr||i===qr||i===$r)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Nr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Or)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Br)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$r)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jr||i===Kr||i===Zr)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===jr)return a===Ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jr||i===Qr||i===ea||i===ta)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Jr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Qr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ta)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ci?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Fp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Op=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new rl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Tn({vertexShader:Fp,fragmentShader:Op,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new gi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zp extends Gn{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,f=null,u=null,p=null,h=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Bp,d={},_=t.getContextAttributes();let S=null,E=null;const b=[],C=[],P=new Oe;let w=null;const y=new Bt;y.viewport=new at;const x=new Bt;x.viewport=new at;const A=[y,x],D=new sd;let U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=b[q];return Z===void 0&&(Z=new Js,b[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=b[q];return Z===void 0&&(Z=new Js,b[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=b[q];return Z===void 0&&(Z=new Js,b[q]=Z),Z.getHandSpace()};function V(q){const Z=C.indexOf(q.inputSource);if(Z===-1)return;const he=b[Z];he!==void 0&&(he.update(q.inputSource,q.frame,c||a),he.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let q=0;q<b.length;q++){const Z=C[q];Z!==null&&(C[q]=null,b[q].disconnect(Z))}U=null,z=null,m.reset();for(const q in d)delete d[q];e.setRenderTarget(S),h=null,p=null,u=null,s=null,E=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Re=null,Ee=null;_.depth&&(Ee=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=_.stencil?Pi:Ri,Re=_.stencil?Ci:zn);const He={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),p=u.createProjectionLayer(He),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),E=new kn(p.textureWidth,p.textureHeight,{format:Vt,type:un,depthTexture:new sl(p.textureWidth,p.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const he={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new kn(h.framebufferWidth,h.framebufferHeight,{format:Vt,type:un,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ve.setContext(s),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(q){for(let Z=0;Z<q.removed.length;Z++){const he=q.removed[Z],Re=C.indexOf(he);Re>=0&&(C[Re]=null,b[Re].disconnect(he))}for(let Z=0;Z<q.added.length;Z++){const he=q.added[Z];let Re=C.indexOf(he);if(Re===-1){for(let He=0;He<b.length;He++)if(He>=C.length){C.push(he),Re=He;break}else if(C[He]===null){C[He]=he,Re=He;break}if(Re===-1)break}const Ee=b[Re];Ee&&Ee.connect(he)}}const O=new H,J=new H;function se(q,Z,he){O.setFromMatrixPosition(Z.matrixWorld),J.setFromMatrixPosition(he.matrixWorld);const Re=O.distanceTo(J),Ee=Z.projectionMatrix.elements,He=he.projectionMatrix.elements,gt=Ee[14]/(Ee[10]-1),L=Ee[14]/(Ee[10]+1),et=(Ee[9]+1)/Ee[5],Le=(Ee[9]-1)/Ee[5],we=(Ee[8]-1)/Ee[0],ge=(He[8]+1)/He[0],tt=gt*we,_e=gt*ge,Ue=Re/(-we+ge),ft=Ue*-we;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ft),q.translateZ(Ue),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ee[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const rt=gt+Ue,R=L+Ue,M=tt-ft,B=_e+(Re-ft),Y=et*L/R*rt,K=Le*L/R*rt;q.projectionMatrix.makePerspective(M,B,Y,K,rt,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ue(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Z=q.near,he=q.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(he=m.depthFar)),D.near=x.near=y.near=Z,D.far=x.far=y.far=he,(U!==D.near||z!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),U=D.near,z=D.far),D.layers.mask=q.layers.mask|6,y.layers.mask=D.layers.mask&3,x.layers.mask=D.layers.mask&5;const Re=q.parent,Ee=D.cameras;ue(D,Re);for(let He=0;He<Ee.length;He++)ue(Ee[He],Re);Ee.length===2?se(D,y,x):D.projectionMatrix.copy(y.projectionMatrix),Fe(q,D,Re)};function Fe(q,Z,he){he===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=na*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(p===null&&h===null))return l},this.setFoveation=function(q){l=q,p!==null&&(p.fixedFoveation=q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(q){return d[q]};let Ke=null;function Qe(q,Z){if(f=Z.getViewerPose(c||a),g=Z,f!==null){const he=f.views;h!==null&&(e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E));let Re=!1;he.length!==D.cameras.length&&(D.cameras.length=0,Re=!0);for(let L=0;L<he.length;L++){const et=he[L];let Le=null;if(h!==null)Le=h.getViewport(et);else{const ge=u.getViewSubImage(p,et);Le=ge.viewport,L===0&&(e.setRenderTargetTextures(E,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(E))}let we=A[L];we===void 0&&(we=new Bt,we.layers.enable(L),we.viewport=new at,A[L]=we),we.matrix.fromArray(et.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(et.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Le.x,Le.y,Le.width,Le.height),L===0&&(D.matrix.copy(we.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Re===!0&&D.cameras.push(we)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const L=u.getDepthInformation(he[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(Ee&&Ee.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let L=0;L<he.length;L++){const et=he[L].camera;if(et){let Le=d[et];Le||(Le=new rl,d[et]=Le);const we=u.getCameraImage(et);Le.sourceTexture=we}}}}for(let he=0;he<b.length;he++){const Re=C[he],Ee=b[he];Re!==null&&Ee!==void 0&&Ee.update(Re,Z,c||a)}Ke&&Ke(q,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ve=new al;Ve.setAnimationLoop(Qe),this.setAnimationLoop=function(q){Ke=q},this.dispose=function(){}}}const Dn=new fn,Hp=new ct;function kp(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,el(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,_,S,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),f(m,d)):d.isMeshStandardMaterial?(r(m,d),p(m,d),d.isMeshPhysicalMaterial&&h(m,d,E)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,_,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===wt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===wt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d),S=_.envMap,E=_.envMapRotation;S&&(m.envMap.value=S,Dn.copy(E),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),m.envMapRotation.value.setFromMatrix4(Hp.makeRotationFromEuler(Dn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=S*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function h(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===wt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Gp(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){const E=S.program;i.uniformBlockBinding(_,E)}function c(_,S){let E=s[_.id];E===void 0&&(g(_),E=f(_),s[_.id]=E,_.addEventListener("dispose",m));const b=S.program;i.updateUBOMapping(_,b);const C=e.render.frame;r[_.id]!==C&&(p(_),r[_.id]=C)}function f(_){const S=u();_.__bindingPointIndex=S;const E=n.createBuffer(),b=_.__size,C=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,b,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){const S=s[_.id],E=_.uniforms,b=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let C=0,P=E.length;C<P;C++){const w=Array.isArray(E[C])?E[C]:[E[C]];for(let y=0,x=w.length;y<x;y++){const A=w[y];if(h(A,C,y,b)===!0){const D=A.__offset,U=Array.isArray(A.value)?A.value:[A.value];let z=0;for(let V=0;V<U.length;V++){const W=U[V],j=v(W);typeof W=="number"||typeof W=="boolean"?(A.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,D+z,A.__data)):W.isMatrix3?(A.__data[0]=W.elements[0],A.__data[1]=W.elements[1],A.__data[2]=W.elements[2],A.__data[3]=0,A.__data[4]=W.elements[3],A.__data[5]=W.elements[4],A.__data[6]=W.elements[5],A.__data[7]=0,A.__data[8]=W.elements[6],A.__data[9]=W.elements[7],A.__data[10]=W.elements[8],A.__data[11]=0):(W.toArray(A.__data,z),z+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(_,S,E,b){const C=_.value,P=S+"_"+E;if(b[P]===void 0)return typeof C=="number"||typeof C=="boolean"?b[P]=C:b[P]=C.clone(),!0;{const w=b[P];if(typeof C=="number"||typeof C=="boolean"){if(w!==C)return b[P]=C,!0}else if(w.equals(C)===!1)return w.copy(C),!0}return!1}function g(_){const S=_.uniforms;let E=0;const b=16;for(let P=0,w=S.length;P<w;P++){const y=Array.isArray(S[P])?S[P]:[S[P]];for(let x=0,A=y.length;x<A;x++){const D=y[x],U=Array.isArray(D.value)?D.value:[D.value];for(let z=0,V=U.length;z<V;z++){const W=U[z],j=v(W),O=E%b,J=O%j.boundary,se=O+J;E+=J,se!==0&&b-se<j.storage&&(E+=b-se),D.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=j.storage}}}const C=E%b;return C>0&&(E+=b-C),_.__size=E,_.__cache={},this}function v(_){const S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),S}function m(_){const S=_.target;S.removeEventListener("dispose",m);const E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function d(){for(const _ in s)n.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Vp{constructor(e={}){const{canvas:t=Mc(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const _=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let b=!1;this._outputColorSpace=Mt;let C=0,P=0,w=null,y=-1,x=null;const A=new at,D=new at;let U=null;const z=new $e(0);let V=0,W=t.width,j=t.height,O=1,J=null,se=null;const ue=new at(0,0,W,j),Fe=new at(0,0,W,j);let Ke=!1;const Qe=new il;let Ve=!1,q=!1;const Z=new ct,he=new H,Re=new at,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function gt(){return w===null?O:1}let L=i;function et(T,N){return t.getContext(T,N)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${la}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",Q,!1),L===null){const N="webgl2";if(L=et(N,T),L===null)throw et(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Le,we,ge,tt,_e,Ue,ft,rt,R,M,B,Y,K,X,Me,ie,ve,xe,te,ce,Ae,Se,oe,De;function I(){Le=new Qf(L),Le.init(),Se=new Np(L,Le),we=new Yf(L,Le,e,Se),ge=new Ip(L,Le),we.reversedDepthBuffer&&p&&ge.buffers.depth.setReversed(!0),tt=new nh(L),_e=new Sp,Ue=new Up(L,Le,ge,_e,we,Se,tt),ft=new $f(E),rt=new Jf(E),R=new od(L),oe=new Wf(L,R),M=new eh(L,R,tt,oe),B=new sh(L,M,R,tt),te=new ih(L,we,Ue),ie=new qf(_e),Y=new xp(E,ft,rt,Le,we,oe,ie),K=new kp(E,_e),X=new Ep,Me=new Cp(Le),xe=new Vf(E,ft,rt,ge,B,h,l),ve=new Lp(E,B,we),De=new Gp(L,tt,we,ge),ce=new Xf(L,Le,tt),Ae=new th(L,Le,tt),tt.programs=Y.programs,E.capabilities=we,E.extensions=Le,E.properties=_e,E.renderLists=X,E.shadowMap=ve,E.state=ge,E.info=tt}I();const ne=new zp(E,L);this.xr=ne,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Le.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Le.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(W,j,!1))},this.getSize=function(T){return T.set(W,j)},this.setSize=function(T,N,k=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,j=N,t.width=Math.floor(T*O),t.height=Math.floor(N*O),k===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(W*O,j*O).floor()},this.setDrawingBufferSize=function(T,N,k){W=T,j=N,O=k,t.width=Math.floor(T*k),t.height=Math.floor(N*k),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(ue)},this.setViewport=function(T,N,k,G){T.isVector4?ue.set(T.x,T.y,T.z,T.w):ue.set(T,N,k,G),ge.viewport(A.copy(ue).multiplyScalar(O).round())},this.getScissor=function(T){return T.copy(Fe)},this.setScissor=function(T,N,k,G){T.isVector4?Fe.set(T.x,T.y,T.z,T.w):Fe.set(T,N,k,G),ge.scissor(D.copy(Fe).multiplyScalar(O).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(T){ge.setScissorTest(Ke=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){se=T},this.getClearColor=function(T){return T.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,k=!0){let G=0;if(T){let F=!1;if(w!==null){const ee=w.texture.format;F=ee===pa||ee===ha||ee===fa}if(F){const ee=w.texture.type,le=ee===un||ee===zn||ee===wi||ee===Ci||ee===da||ee===ua,pe=xe.getClearColor(),de=xe.getClearAlpha(),be=pe.r,Ce=pe.g,ye=pe.b;le?(g[0]=be,g[1]=Ce,g[2]=ye,g[3]=de,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=be,v[1]=Ce,v[2]=ye,v[3]=de,L.clearBufferiv(L.COLOR,0,v))}else G|=L.COLOR_BUFFER_BIT}N&&(G|=L.DEPTH_BUFFER_BIT),k&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),xe.dispose(),X.dispose(),Me.dispose(),_e.dispose(),ft.dispose(),rt.dispose(),B.dispose(),oe.dispose(),De.dispose(),Y.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Yt),ne.removeEventListener("sessionend",Ea),bn.stop()};function re(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=tt.autoReset,N=ve.enabled,k=ve.autoUpdate,G=ve.needsUpdate,F=ve.type;I(),tt.autoReset=T,ve.enabled=N,ve.autoUpdate=k,ve.needsUpdate=G,ve.type=F}function Q(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $(T){const N=T.target;N.removeEventListener("dispose",$),me(N)}function me(T){Pe(T),_e.remove(T)}function Pe(T){const N=_e.get(T).programs;N!==void 0&&(N.forEach(function(k){Y.releaseProgram(k)}),T.isShaderMaterial&&Y.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,k,G,F,ee){N===null&&(N=Ee);const le=F.isMesh&&F.matrixWorld.determinant()<0,pe=Ml(T,N,k,G,F);ge.setMaterial(G,le);let de=k.index,be=1;if(G.wireframe===!0){if(de=M.getWireframeAttribute(k),de===void 0)return;be=2}const Ce=k.drawRange,ye=k.attributes.position;let ze=Ce.start*be,Xe=(Ce.start+Ce.count)*be;ee!==null&&(ze=Math.max(ze,ee.start*be),Xe=Math.min(Xe,(ee.start+ee.count)*be)),de!==null?(ze=Math.max(ze,0),Xe=Math.min(Xe,de.count)):ye!=null&&(ze=Math.max(ze,0),Xe=Math.min(Xe,ye.count));const st=Xe-ze;if(st<0||st===1/0)return;oe.setup(F,G,pe,k,de);let Je,je=ce;if(de!==null&&(Je=R.get(de),je=Ae,je.setIndex(Je)),F.isMesh)G.wireframe===!0?(ge.setLineWidth(G.wireframeLinewidth*gt()),je.setMode(L.LINES)):je.setMode(L.TRIANGLES);else if(F.isLine){let Te=G.linewidth;Te===void 0&&(Te=1),ge.setLineWidth(Te*gt()),F.isLineSegments?je.setMode(L.LINES):F.isLineLoop?je.setMode(L.LINE_LOOP):je.setMode(L.LINE_STRIP)}else F.isPoints?je.setMode(L.POINTS):F.isSprite&&je.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Di("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),je.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))je.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Te=F._multiDrawStarts,nt=F._multiDrawCounts,ke=F._multiDrawCount,Ct=de?R.get(de).bytesPerElement:1,Wn=_e.get(G).currentProgram.getUniforms();for(let Rt=0;Rt<ke;Rt++)Wn.setValue(L,"_gl_DrawID",Rt),je.render(Te[Rt]/Ct,nt[Rt])}else if(F.isInstancedMesh)je.renderInstances(ze,st,F.count);else if(k.isInstancedBufferGeometry){const Te=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,nt=Math.min(k.instanceCount,Te);je.renderInstances(ze,st,nt)}else je.render(ze,st)};function Ze(T,N,k){T.transparent===!0&&T.side===an&&T.forceSinglePass===!1?(T.side=wt,T.needsUpdate=!0,zi(T,N,k),T.side=Zt,T.needsUpdate=!0,zi(T,N,k),T.side=an):zi(T,N,k)}this.compile=function(T,N,k=null){k===null&&(k=T),d=Me.get(k),d.init(N),S.push(d),k.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),T!==k&&T.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const G=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ee=F.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){const pe=ee[le];Ze(pe,k,F),G.add(pe)}else Ze(ee,k,F),G.add(ee)}),d=S.pop(),G},this.compileAsync=function(T,N,k=null){const G=this.compile(T,N,k);return new Promise(F=>{function ee(){if(G.forEach(function(le){_e.get(le).currentProgram.isReady()&&G.delete(le)}),G.size===0){F(T);return}setTimeout(ee,10)}Le.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let We=null;function Jt(T){We&&We(T)}function Yt(){bn.stop()}function Ea(){bn.start()}const bn=new al;bn.setAnimationLoop(Jt),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(T){We=T,ne.setAnimationLoop(T),T===null?bn.stop():bn.start()},ne.addEventListener("sessionstart",Yt),ne.addEventListener("sessionend",Ea),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(N),N=ne.getCamera()),T.isScene===!0&&T.onBeforeRender(E,T,N,w),d=Me.get(T,S.length),d.init(N),S.push(d),Z.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Qe.setFromProjectionMatrix(Z,$t,N.reversedDepth),q=this.localClippingEnabled,Ve=ie.init(this.clippingPlanes,q),m=X.get(T,_.length),m.init(),_.push(m),ne.enabled===!0&&ne.isPresenting===!0){const ee=E.xr.getDepthSensingMesh();ee!==null&&Cs(ee,N,-1/0,E.sortObjects)}Cs(T,N,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(J,se),He=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,He&&xe.addToRenderList(m,T),this.info.render.frame++,Ve===!0&&ie.beginShadows();const k=d.state.shadowsArray;ve.render(k,T,N),Ve===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(d.setupLights(),N.isArrayCamera){const ee=N.cameras;if(F.length>0)for(let le=0,pe=ee.length;le<pe;le++){const de=ee[le];Ta(G,F,T,de)}He&&xe.render(T);for(let le=0,pe=ee.length;le<pe;le++){const de=ee[le];ya(m,T,de,de.viewport)}}else F.length>0&&Ta(G,F,T,N),He&&xe.render(T),ya(m,T,N);w!==null&&P===0&&(Ue.updateMultisampleRenderTarget(w),Ue.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(E,T,N),oe.resetDefaultState(),y=-1,x=null,S.pop(),S.length>0?(d=S[S.length-1],Ve===!0&&ie.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Cs(T,N,k,G){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)k=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Qe.intersectsSprite(T)){G&&Re.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Z);const le=B.update(T),pe=T.material;pe.visible&&m.push(T,le,pe,k,Re.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Qe.intersectsObject(T))){const le=B.update(T),pe=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Re.copy(T.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Re.copy(le.boundingSphere.center)),Re.applyMatrix4(T.matrixWorld).applyMatrix4(Z)),Array.isArray(pe)){const de=le.groups;for(let be=0,Ce=de.length;be<Ce;be++){const ye=de[be],ze=pe[ye.materialIndex];ze&&ze.visible&&m.push(T,le,ze,k,Re.z,ye)}}else pe.visible&&m.push(T,le,pe,k,Re.z,null)}}const ee=T.children;for(let le=0,pe=ee.length;le<pe;le++)Cs(ee[le],N,k,G)}function ya(T,N,k,G){const F=T.opaque,ee=T.transmissive,le=T.transparent;d.setupLightsView(k),Ve===!0&&ie.setGlobalState(E.clippingPlanes,k),G&&ge.viewport(A.copy(G)),F.length>0&&Bi(F,N,k),ee.length>0&&Bi(ee,N,k),le.length>0&&Bi(le,N,k),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ta(T,N,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new kn(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?Ui:un,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));const ee=d.state.transmissionRenderTarget[G.id],le=G.viewport||A;ee.setSize(le.z*E.transmissionResolutionScale,le.w*E.transmissionResolutionScale);const pe=E.getRenderTarget(),de=E.getActiveCubeFace(),be=E.getActiveMipmapLevel();E.setRenderTarget(ee),E.getClearColor(z),V=E.getClearAlpha(),V<1&&E.setClearColor(16777215,.5),E.clear(),He&&xe.render(k);const Ce=E.toneMapping;E.toneMapping=cn;const ye=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),Ve===!0&&ie.setGlobalState(E.clippingPlanes,G),Bi(T,k,G),Ue.updateMultisampleRenderTarget(ee),Ue.updateRenderTargetMipmap(ee),Le.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Xe=0,st=N.length;Xe<st;Xe++){const Je=N[Xe],je=Je.object,Te=Je.geometry,nt=Je.material,ke=Je.group;if(nt.side===an&&je.layers.test(G.layers)){const Ct=nt.side;nt.side=wt,nt.needsUpdate=!0,ba(je,k,G,Te,nt,ke),nt.side=Ct,nt.needsUpdate=!0,ze=!0}}ze===!0&&(Ue.updateMultisampleRenderTarget(ee),Ue.updateRenderTargetMipmap(ee))}E.setRenderTarget(pe,de,be),E.setClearColor(z,V),ye!==void 0&&(G.viewport=ye),E.toneMapping=Ce}function Bi(T,N,k){const G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ee=T.length;F<ee;F++){const le=T[F],pe=le.object,de=le.geometry,be=le.group;let Ce=le.material;Ce.allowOverride===!0&&G!==null&&(Ce=G),pe.layers.test(k.layers)&&ba(pe,N,k,de,Ce,be)}}function ba(T,N,k,G,F,ee){T.onBeforeRender(E,N,k,G,F,ee),T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(E,N,k,G,T,ee),F.transparent===!0&&F.side===an&&F.forceSinglePass===!1?(F.side=wt,F.needsUpdate=!0,E.renderBufferDirect(k,N,G,F,T,ee),F.side=Zt,F.needsUpdate=!0,E.renderBufferDirect(k,N,G,F,T,ee),F.side=an):E.renderBufferDirect(k,N,G,F,T,ee),T.onAfterRender(E,N,k,G,F,ee)}function zi(T,N,k){N.isScene!==!0&&(N=Ee);const G=_e.get(T),F=d.state.lights,ee=d.state.shadowsArray,le=F.state.version,pe=Y.getParameters(T,F.state,ee,N,k),de=Y.getProgramCacheKey(pe);let be=G.programs;G.environment=T.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(T.isMeshStandardMaterial?rt:ft).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,be===void 0&&(T.addEventListener("dispose",$),be=new Map,G.programs=be);let Ce=be.get(de);if(Ce!==void 0){if(G.currentProgram===Ce&&G.lightsStateVersion===le)return wa(T,pe),Ce}else pe.uniforms=Y.getUniforms(T),T.onBeforeCompile(pe,E),Ce=Y.acquireProgram(pe,de),be.set(de,Ce),G.uniforms=pe.uniforms;const ye=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ye.clippingPlanes=ie.uniform),wa(T,pe),G.needsLights=yl(T),G.lightsStateVersion=le,G.needsLights&&(ye.ambientLightColor.value=F.state.ambient,ye.lightProbe.value=F.state.probe,ye.directionalLights.value=F.state.directional,ye.directionalLightShadows.value=F.state.directionalShadow,ye.spotLights.value=F.state.spot,ye.spotLightShadows.value=F.state.spotShadow,ye.rectAreaLights.value=F.state.rectArea,ye.ltc_1.value=F.state.rectAreaLTC1,ye.ltc_2.value=F.state.rectAreaLTC2,ye.pointLights.value=F.state.point,ye.pointLightShadows.value=F.state.pointShadow,ye.hemisphereLights.value=F.state.hemi,ye.directionalShadowMap.value=F.state.directionalShadowMap,ye.directionalShadowMatrix.value=F.state.directionalShadowMatrix,ye.spotShadowMap.value=F.state.spotShadowMap,ye.spotLightMatrix.value=F.state.spotLightMatrix,ye.spotLightMap.value=F.state.spotLightMap,ye.pointShadowMap.value=F.state.pointShadowMap,ye.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Ce,G.uniformsList=null,Ce}function Aa(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=gs.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function wa(T,N){const k=_e.get(T);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function Ml(T,N,k,G,F){N.isScene!==!0&&(N=Ee),Ue.resetTextureUnits();const ee=N.fog,le=G.isMeshStandardMaterial?N.environment:null,pe=w===null?E.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:pi,de=(G.isMeshStandardMaterial?rt:ft).get(G.envMap||le),be=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ce=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ye=!!k.morphAttributes.position,ze=!!k.morphAttributes.normal,Xe=!!k.morphAttributes.color;let st=cn;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(st=E.toneMapping);const Je=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,je=Je!==void 0?Je.length:0,Te=_e.get(G),nt=d.state.lights;if(Ve===!0&&(q===!0||T!==x)){const xt=T===x&&G.id===y;ie.setState(G,T,xt)}let ke=!1;G.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==nt.state.version||Te.outputColorSpace!==pe||F.isBatchedMesh&&Te.batching===!1||!F.isBatchedMesh&&Te.batching===!0||F.isBatchedMesh&&Te.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Te.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Te.instancing===!1||!F.isInstancedMesh&&Te.instancing===!0||F.isSkinnedMesh&&Te.skinning===!1||!F.isSkinnedMesh&&Te.skinning===!0||F.isInstancedMesh&&Te.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Te.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Te.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Te.instancingMorph===!1&&F.morphTexture!==null||Te.envMap!==de||G.fog===!0&&Te.fog!==ee||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ie.numPlanes||Te.numIntersection!==ie.numIntersection)||Te.vertexAlphas!==be||Te.vertexTangents!==Ce||Te.morphTargets!==ye||Te.morphNormals!==ze||Te.morphColors!==Xe||Te.toneMapping!==st||Te.morphTargetsCount!==je)&&(ke=!0):(ke=!0,Te.__version=G.version);let Ct=Te.currentProgram;ke===!0&&(Ct=zi(G,N,F));let Wn=!1,Rt=!1,vi=!1;const it=Ct.getUniforms(),Ut=Te.uniforms;if(ge.useProgram(Ct.program)&&(Wn=!0,Rt=!0,vi=!0),G.id!==y&&(y=G.id,Rt=!0),Wn||x!==T){ge.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),it.setValue(L,"projectionMatrix",T.projectionMatrix),it.setValue(L,"viewMatrix",T.matrixWorldInverse);const yt=it.map.cameraPosition;yt!==void 0&&yt.setValue(L,he.setFromMatrixPosition(T.matrixWorld)),we.logarithmicDepthBuffer&&it.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&it.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,Rt=!0,vi=!0)}if(F.isSkinnedMesh){it.setOptional(L,F,"bindMatrix"),it.setOptional(L,F,"bindMatrixInverse");const xt=F.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),it.setValue(L,"boneTexture",xt.boneTexture,Ue))}F.isBatchedMesh&&(it.setOptional(L,F,"batchingTexture"),it.setValue(L,"batchingTexture",F._matricesTexture,Ue),it.setOptional(L,F,"batchingIdTexture"),it.setValue(L,"batchingIdTexture",F._indirectTexture,Ue),it.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&it.setValue(L,"batchingColorTexture",F._colorsTexture,Ue));const Nt=k.morphAttributes;if((Nt.position!==void 0||Nt.normal!==void 0||Nt.color!==void 0)&&te.update(F,k,Ct),(Rt||Te.receiveShadow!==F.receiveShadow)&&(Te.receiveShadow=F.receiveShadow,it.setValue(L,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ut.envMap.value=de,Ut.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Ut.envMapIntensity.value=N.environmentIntensity),Rt&&(it.setValue(L,"toneMappingExposure",E.toneMappingExposure),Te.needsLights&&El(Ut,vi),ee&&G.fog===!0&&K.refreshFogUniforms(Ut,ee),K.refreshMaterialUniforms(Ut,G,O,j,d.state.transmissionRenderTarget[T.id]),gs.upload(L,Aa(Te),Ut,Ue)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(gs.upload(L,Aa(Te),Ut,Ue),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&it.setValue(L,"center",F.center),it.setValue(L,"modelViewMatrix",F.modelViewMatrix),it.setValue(L,"normalMatrix",F.normalMatrix),it.setValue(L,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const xt=G.uniformsGroups;for(let yt=0,Rs=xt.length;yt<Rs;yt++){const An=xt[yt];De.update(An,Ct),De.bind(An,Ct)}}return Ct}function El(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function yl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,N,k){const G=_e.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),_e.get(T.texture).__webglTexture=N,_e.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:k,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){const k=_e.get(T);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0};const Tl=L.createFramebuffer();this.setRenderTarget=function(T,N=0,k=0){w=T,C=N,P=k;let G=!0,F=null,ee=!1,le=!1;if(T){const de=_e.get(T);if(de.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(de.__webglFramebuffer===void 0)Ue.setupRenderTarget(T);else if(de.__hasExternalTextures)Ue.rebindTextures(T,_e.get(T.texture).__webglTexture,_e.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ye=T.depthTexture;if(de.__boundDepthTexture!==ye){if(ye!==null&&_e.has(ye)&&(T.width!==ye.image.width||T.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(T)}}const be=T.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(le=!0);const Ce=_e.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ce[N])?F=Ce[N][k]:F=Ce[N],ee=!0):T.samples>0&&Ue.useMultisampledRTT(T)===!1?F=_e.get(T).__webglMultisampledFramebuffer:Array.isArray(Ce)?F=Ce[k]:F=Ce,A.copy(T.viewport),D.copy(T.scissor),U=T.scissorTest}else A.copy(ue).multiplyScalar(O).floor(),D.copy(Fe).multiplyScalar(O).floor(),U=Ke;if(k!==0&&(F=Tl),ge.bindFramebuffer(L.FRAMEBUFFER,F)&&G&&ge.drawBuffers(T,F),ge.viewport(A),ge.scissor(D),ge.setScissorTest(U),ee){const de=_e.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,k)}else if(le){const de=N;for(let be=0;be<T.textures.length;be++){const Ce=_e.get(T.textures[be]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+be,Ce.__webglTexture,k,de)}}else if(T!==null&&k!==0){const de=_e.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,de.__webglTexture,k)}y=-1},this.readRenderTargetPixels=function(T,N,k,G,F,ee,le,pe=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=_e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de){ge.bindFramebuffer(L.FRAMEBUFFER,de);try{const be=T.textures[pe],Ce=be.format,ye=be.type;if(!we.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-G&&k>=0&&k<=T.height-F&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pe),L.readPixels(N,k,G,F,Se.convert(Ce),Se.convert(ye),ee))}finally{const be=w!==null?_e.get(w).__webglFramebuffer:null;ge.bindFramebuffer(L.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(T,N,k,G,F,ee,le,pe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=_e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de)if(N>=0&&N<=T.width-G&&k>=0&&k<=T.height-F){ge.bindFramebuffer(L.FRAMEBUFFER,de);const be=T.textures[pe],Ce=be.format,ye=be.type;if(!we.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ze),L.bufferData(L.PIXEL_PACK_BUFFER,ee.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pe),L.readPixels(N,k,G,F,Se.convert(Ce),Se.convert(ye),0);const Xe=w!==null?_e.get(w).__webglFramebuffer:null;ge.bindFramebuffer(L.FRAMEBUFFER,Xe);const st=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ec(L,st,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ze),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ee),L.deleteBuffer(ze),L.deleteSync(st),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,k=0){const G=Math.pow(2,-k),F=Math.floor(T.image.width*G),ee=Math.floor(T.image.height*G),le=N!==null?N.x:0,pe=N!==null?N.y:0;Ue.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,le,pe,F,ee),ge.unbindTexture()};const bl=L.createFramebuffer(),Al=L.createFramebuffer();this.copyTextureToTexture=function(T,N,k=null,G=null,F=0,ee=null){ee===null&&(F!==0?(Di("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=F,F=0):ee=0);let le,pe,de,be,Ce,ye,ze,Xe,st;const Je=T.isCompressedTexture?T.mipmaps[ee]:T.image;if(k!==null)le=k.max.x-k.min.x,pe=k.max.y-k.min.y,de=k.isBox3?k.max.z-k.min.z:1,be=k.min.x,Ce=k.min.y,ye=k.isBox3?k.min.z:0;else{const Nt=Math.pow(2,-F);le=Math.floor(Je.width*Nt),pe=Math.floor(Je.height*Nt),T.isDataArrayTexture?de=Je.depth:T.isData3DTexture?de=Math.floor(Je.depth*Nt):de=1,be=0,Ce=0,ye=0}G!==null?(ze=G.x,Xe=G.y,st=G.z):(ze=0,Xe=0,st=0);const je=Se.convert(N.format),Te=Se.convert(N.type);let nt;N.isData3DTexture?(Ue.setTexture3D(N,0),nt=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ue.setTexture2DArray(N,0),nt=L.TEXTURE_2D_ARRAY):(Ue.setTexture2D(N,0),nt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const ke=L.getParameter(L.UNPACK_ROW_LENGTH),Ct=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Wn=L.getParameter(L.UNPACK_SKIP_PIXELS),Rt=L.getParameter(L.UNPACK_SKIP_ROWS),vi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Je.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Je.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,be),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ce),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ye);const it=T.isDataArrayTexture||T.isData3DTexture,Ut=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){const Nt=_e.get(T),xt=_e.get(N),yt=_e.get(Nt.__renderTarget),Rs=_e.get(xt.__renderTarget);ge.bindFramebuffer(L.READ_FRAMEBUFFER,yt.__webglFramebuffer),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,Rs.__webglFramebuffer);for(let An=0;An<de;An++)it&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_e.get(T).__webglTexture,F,ye+An),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_e.get(N).__webglTexture,ee,st+An)),L.blitFramebuffer(be,Ce,le,pe,ze,Xe,le,pe,L.DEPTH_BUFFER_BIT,L.NEAREST);ge.bindFramebuffer(L.READ_FRAMEBUFFER,null),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||T.isRenderTargetTexture||_e.has(T)){const Nt=_e.get(T),xt=_e.get(N);ge.bindFramebuffer(L.READ_FRAMEBUFFER,bl),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,Al);for(let yt=0;yt<de;yt++)it?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Nt.__webglTexture,F,ye+yt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Nt.__webglTexture,F),Ut?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xt.__webglTexture,ee,st+yt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xt.__webglTexture,ee),F!==0?L.blitFramebuffer(be,Ce,le,pe,ze,Xe,le,pe,L.COLOR_BUFFER_BIT,L.NEAREST):Ut?L.copyTexSubImage3D(nt,ee,ze,Xe,st+yt,be,Ce,le,pe):L.copyTexSubImage2D(nt,ee,ze,Xe,be,Ce,le,pe);ge.bindFramebuffer(L.READ_FRAMEBUFFER,null),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ut?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(nt,ee,ze,Xe,st,le,pe,de,je,Te,Je.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(nt,ee,ze,Xe,st,le,pe,de,je,Je.data):L.texSubImage3D(nt,ee,ze,Xe,st,le,pe,de,je,Te,Je):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ee,ze,Xe,le,pe,je,Te,Je.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ee,ze,Xe,Je.width,Je.height,je,Je.data):L.texSubImage2D(L.TEXTURE_2D,ee,ze,Xe,le,pe,je,Te,Je);L.pixelStorei(L.UNPACK_ROW_LENGTH,ke),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ct),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Wn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Rt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,vi),ee===0&&N.generateMipmaps&&L.generateMipmap(nt),ge.unbindTexture()},this.initRenderTarget=function(T){_e.get(T).__webglFramebuffer===void 0&&Ue.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ue.setTextureCube(T,0):T.isData3DTexture?Ue.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ue.setTexture2DArray(T,0):Ue.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){C=0,P=0,w=null,ge.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $t}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}const bo={type:"change"},xa={type:"start"},ul={type:"end"},os=new jo,Ao=new Sn,Wp=Math.cos(70*Sc.DEG2RAD),lt=new H,bt=2*Math.PI,qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},or=1e-6;class Xp extends rd{constructor(e,t=null){super(e,t),this.state=qe.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:li.ROTATE,MIDDLE:li.DOLLY,RIGHT:li.PAN},this.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new Hn,this._lastTargetPosition=new H,this._quat=new Hn().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ja,this._sphericalDelta=new Ja,this._scale=1,this._panOffset=new H,this._rotateStart=new Oe,this._rotateEnd=new Oe,this._rotateDelta=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._panDelta=new Oe,this._dollyStart=new Oe,this._dollyEnd=new Oe,this._dollyDelta=new Oe,this._dollyDirection=new H,this._mouse=new Oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qp.bind(this),this._onPointerDown=Yp.bind(this),this._onPointerUp=$p.bind(this),this._onContextMenu=tm.bind(this),this._onMouseWheel=Zp.bind(this),this._onKeyDown=Jp.bind(this),this._onTouchStart=Qp.bind(this),this._onTouchMove=em.bind(this),this._onMouseDown=jp.bind(this),this._onMouseMove=Kp.bind(this),this._interceptControlDown=nm.bind(this),this._interceptControlUp=im.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bo),this.update(),this.state=qe.NONE}update(e=null){const t=this.object.position;lt.copy(t).sub(this.target),lt.applyQuaternion(this._quat),this._spherical.setFromVector3(lt),this.autoRotate&&this.state===qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=bt:i>Math.PI&&(i-=bt),s<-Math.PI?s+=bt:s>Math.PI&&(s-=bt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(lt.setFromSpherical(this._spherical),lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=lt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new H(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(os.origin.copy(this.object.position),os.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(os.direction))<Wp?this.object.lookAt(this.target):(Ao.setFromNormalAndCoplanarPoint(this.object.up,this.target),os.intersectPlane(Ao,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>or||8*(1-this._lastQuaternion.dot(this.object.quaternion))>or||this._lastTargetPosition.distanceToSquared(this.target)>or?(this.dispatchEvent(bo),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bt/60*this.autoRotateSpeed*e:bt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){lt.setFromMatrixColumn(t,0),lt.multiplyScalar(-e),this._panOffset.add(lt)}_panUp(e,t){this.screenSpacePanning===!0?lt.setFromMatrixColumn(t,1):(lt.setFromMatrixColumn(t,0),lt.crossVectors(this.object.up,lt)),lt.multiplyScalar(e),this._panOffset.add(lt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;lt.copy(s).sub(this.target);let r=lt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Yp(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function qp(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function $p(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ul),this.state=qe.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function jp(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=qe.DOLLY;break;case li.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=qe.ROTATE}break;case li.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=qe.PAN}break;default:this.state=qe.NONE}this.state!==qe.NONE&&this.dispatchEvent(xa)}function Kp(n){switch(this.state){case qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Zp(n){this.enabled===!1||this.enableZoom===!1||this.state!==qe.NONE||(n.preventDefault(),this.dispatchEvent(xa),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ul))}function Jp(n){this.enabled!==!1&&this._handleKeyDown(n)}function Qp(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ai.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=qe.TOUCH_ROTATE;break;case ai.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=qe.TOUCH_PAN;break;default:this.state=qe.NONE}break;case 2:switch(this.touches.TWO){case ai.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=qe.TOUCH_DOLLY_PAN;break;case ai.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=qe.TOUCH_DOLLY_ROTATE;break;default:this.state=qe.NONE}break;default:this.state=qe.NONE}this.state!==qe.NONE&&this.dispatchEvent(xa)}function em(n){switch(this._trackPointer(n),this.state){case qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=qe.NONE}}function tm(n){this.enabled!==!1&&n.preventDefault()}function nm(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function im(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fl(n,e,t){if(!n)return;const i=new nd,s=i.load(e,P=>{P.colorSpace=Mt,P.minFilter=At,P.magFilter=At,console.log(`Recto texture loaded: ${e}`)},void 0,P=>{console.error(`Error loading recto texture: ${e}`,P)}),r=i.load(t,P=>{P.colorSpace=Mt,P.minFilter=At,P.magFilter=At,console.log(`Verso texture loaded: ${t}`)},void 0,P=>{console.error(`Error loading verso texture: ${t}`,P)}),a=window.innerWidth<768,o=a?5:10,l=a?3.5:7,c=new gi(o,l),f=new Ss({map:s,side:Zt,toneMapped:!1}),u=new Ss({map:r,side:Zt,toneMapped:!1}),p=new Wt(c,f),h=new Wt(c,u);h.rotation.y=Math.PI;const g=new bi;g.add(p),g.add(h);const v=new qc;v.add(g);const m=new Bt(45,n.offsetWidth/n.offsetHeight,.1,100),d=a?9:14;m.position.set(0,0,d);const _=new Vp({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});_.toneMapping=cn,_.toneMappingExposure=1,_.outputColorSpace=Mt,_.setSize(n.offsetWidth,n.offsetHeight),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.appendChild(_.domElement);const S=new Xp(m,_.domElement);S.enableDamping=!0,S.dampingFactor=.05,S.enableZoom=a,S.enablePan=!1,S.maxDistance=d*2,S.minDistance=d*(a?.5:1);let E=!1;S.addEventListener("end",()=>{console.log("🔄 Relâchement détecté - Reset au recto"),b()});function b(){if(E){console.log("⚠️ Animation déjà en cours, ignoré");return}console.log("🔄 Début animation reset au recto"),E=!0;const P=600,w={x:g.rotation.x,y:g.rotation.y,z:g.rotation.z},y={x:0,y:0,z:0},x=Date.now();function A(){const D=Date.now()-x,U=Math.min(D/P,1),z=U<.5?2*U*U:-1+(4-2*U)*U;g.rotation.x=w.x+(y.x-w.x)*z,g.rotation.y=w.y+(y.y-w.y)*z,g.rotation.z=w.z+(y.z-w.z)*z,U<1?requestAnimationFrame(A):(console.log("✅ Animation terminée - Carte au recto"),E=!1)}A()}function C(){requestAnimationFrame(C),S.update(),_.render(v,m)}C(),window.addEventListener("resize",()=>{const P=window.innerWidth<768,w=P?5:10,y=P?3.5:7,x=P?9:14;if(c.parameters.width!==w){c.dispose();const A=new gi(w,y);p.geometry=A,h.geometry=A}m.aspect=n.offsetWidth/n.offsetHeight,m.position.set(0,0,x),m.updateProjectionMatrix(),S.maxDistance=x,S.minDistance=x,_.setSize(n.offsetWidth,n.offsetHeight),_.setPixelRatio(Math.min(window.devicePixelRatio,2))})}function wo(n){return n!==null&&typeof n=="object"&&"constructor"in n&&n.constructor===Object}function Sa(n={},e={}){const t=["__proto__","constructor","prototype"];Object.keys(e).filter(i=>t.indexOf(i)<0).forEach(i=>{typeof n[i]>"u"?n[i]=e[i]:wo(e[i])&&wo(n[i])&&Object.keys(e[i]).length>0&&Sa(n[i],e[i])})}const hl={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function hn(){const n=typeof document<"u"?document:{};return Sa(n,hl),n}const sm={document:hl,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(n){return typeof setTimeout>"u"?(n(),null):setTimeout(n,0)},cancelAnimationFrame(n){typeof setTimeout>"u"||clearTimeout(n)}};function mt(){const n=typeof window<"u"?window:{};return Sa(n,sm),n}function rm(n=""){return n.trim().split(" ").filter(e=>!!e.trim())}function am(n){const e=n;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function Ms(n,e=0){return setTimeout(n,e)}function on(){return Date.now()}function om(n){const e=mt();let t;return e.getComputedStyle&&(t=e.getComputedStyle(n,null)),!t&&n.currentStyle&&(t=n.currentStyle),t||(t=n.style),t}function lm(n,e="x"){const t=mt();let i,s,r;const a=om(n);return t.WebKitCSSMatrix?(s=a.transform||a.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(o=>o.replace(",",".")).join(", ")),r=new t.WebKitCSSMatrix(s==="none"?"":s)):(r=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=r.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?s=r.m41:i.length===16?s=parseFloat(i[12]):s=parseFloat(i[4])),e==="y"&&(t.WebKitCSSMatrix?s=r.m42:i.length===16?s=parseFloat(i[13]):s=parseFloat(i[5])),s||0}function ls(n){return typeof n=="object"&&n!==null&&n.constructor&&Object.prototype.toString.call(n).slice(8,-1)==="Object"}function cm(n){return typeof window<"u"&&typeof window.HTMLElement<"u"?n instanceof HTMLElement:n&&(n.nodeType===1||n.nodeType===11)}function Dt(...n){const e=Object(n[0]),t=["__proto__","constructor","prototype"];for(let i=1;i<n.length;i+=1){const s=n[i];if(s!=null&&!cm(s)){const r=Object.keys(Object(s)).filter(a=>t.indexOf(a)<0);for(let a=0,o=r.length;a<o;a+=1){const l=r[a],c=Object.getOwnPropertyDescriptor(s,l);c!==void 0&&c.enumerable&&(ls(e[l])&&ls(s[l])?s[l].__swiper__?e[l]=s[l]:Dt(e[l],s[l]):!ls(e[l])&&ls(s[l])?(e[l]={},s[l].__swiper__?e[l]=s[l]:Dt(e[l],s[l])):e[l]=s[l])}}}return e}function cs(n,e,t){n.style.setProperty(e,t)}function pl({swiper:n,targetPosition:e,side:t}){const i=mt(),s=-n.translate;let r=null,a;const o=n.params.speed;n.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(n.cssModeFrameID);const l=e>s?"next":"prev",c=(u,p)=>l==="next"&&u>=p||l==="prev"&&u<=p,f=()=>{a=new Date().getTime(),r===null&&(r=a);const u=Math.max(Math.min((a-r)/o,1),0),p=.5-Math.cos(u*Math.PI)/2;let h=s+p*(e-s);if(c(h,e)&&(h=e),n.wrapperEl.scrollTo({[t]:h}),c(h,e)){n.wrapperEl.style.overflow="hidden",n.wrapperEl.style.scrollSnapType="",setTimeout(()=>{n.wrapperEl.style.overflow="",n.wrapperEl.scrollTo({[t]:h})}),i.cancelAnimationFrame(n.cssModeFrameID);return}n.cssModeFrameID=i.requestAnimationFrame(f)};f()}function Ma(n){return n.querySelector(".swiper-slide-transform")||n.shadowRoot&&n.shadowRoot.querySelector(".swiper-slide-transform")||n}function jt(n,e=""){const t=mt(),i=[...n.children];return t.HTMLSlotElement&&n instanceof HTMLSlotElement&&i.push(...n.assignedElements()),e?i.filter(s=>s.matches(e)):i}function dm(n,e){const t=[e];for(;t.length>0;){const i=t.shift();if(n===i)return!0;t.push(...i.children,...i.shadowRoot?i.shadowRoot.children:[],...i.assignedElements?i.assignedElements():[])}}function um(n,e){const t=mt();let i=e.contains(n);return!i&&t.HTMLSlotElement&&e instanceof HTMLSlotElement&&(i=[...e.assignedElements()].includes(n),i||(i=dm(n,e))),i}function Es(n){try{console.warn(n);return}catch{}}function Ii(n,e=[]){const t=document.createElement(n);return t.classList.add(...Array.isArray(e)?e:rm(e)),t}function fm(n){const e=mt(),t=hn(),i=n.getBoundingClientRect(),s=t.body,r=n.clientTop||s.clientTop||0,a=n.clientLeft||s.clientLeft||0,o=n===e?e.scrollY:n.scrollTop,l=n===e?e.scrollX:n.scrollLeft;return{top:i.top+o-r,left:i.left+l-a}}function hm(n,e){const t=[];for(;n.previousElementSibling;){const i=n.previousElementSibling;e?i.matches(e)&&t.push(i):t.push(i),n=i}return t}function pm(n,e){const t=[];for(;n.nextElementSibling;){const i=n.nextElementSibling;e?i.matches(e)&&t.push(i):t.push(i),n=i}return t}function En(n,e){return mt().getComputedStyle(n,null).getPropertyValue(e)}function ys(n){let e=n,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function Ts(n,e){const t=[];let i=n.parentElement;for(;i;)e?i.matches(e)&&t.push(i):t.push(i),i=i.parentElement;return t}function sa(n,e,t){const i=mt();return n[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function pt(n){return(Array.isArray(n)?n:[n]).filter(e=>!!e)}function mm(n){return e=>Math.abs(e)>0&&n.browser&&n.browser.need3dFix&&Math.abs(e)%90===0?e+.001:e}function ra(n,e=""){typeof trustedTypes<"u"?n.innerHTML=trustedTypes.createPolicy("html",{createHTML:t=>t}).createHTML(e):n.innerHTML=e}let lr;function gm(){const n=mt(),e=hn();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in n||n.DocumentTouch&&e instanceof n.DocumentTouch)}}function ml(){return lr||(lr=gm()),lr}let cr;function _m({userAgent:n}={}){const e=ml(),t=mt(),i=t.navigator.platform,s=n||t.navigator.userAgent,r={ios:!1,android:!1},a=t.screen.width,o=t.screen.height,l=s.match(/(Android);?[\s\/]+([\d.]+)?/);let c=s.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const f=s.match(/(iPod)(.*OS\s([\d_]+))?/),u=!c&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=i==="Win32";let h=i==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&h&&e.touch&&g.indexOf(`${a}x${o}`)>=0&&(c=s.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),h=!1),l&&!p&&(r.os="android",r.android=!0),(c||u||f)&&(r.os="ios",r.ios=!0),r}function gl(n={}){return cr||(cr=_m(n)),cr}let dr;function vm(){const n=mt(),e=gl();let t=!1;function i(){const o=n.navigator.userAgent.toLowerCase();return o.indexOf("safari")>=0&&o.indexOf("chrome")<0&&o.indexOf("android")<0}if(i()){const o=String(n.navigator.userAgent);if(o.includes("Version/")){const[l,c]=o.split("Version/")[1].split(" ")[0].split(".").map(f=>Number(f));t=l<16||l===16&&c<2}}const s=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent),r=i(),a=r||s&&e.ios;return{isSafari:t||r,needPerspectiveFix:t,need3dFix:a,isWebView:s}}function _l(){return dr||(dr=vm()),dr}function xm({swiper:n,on:e,emit:t}){const i=mt();let s=null,r=null;const a=()=>{!n||n.destroyed||!n.initialized||(t("beforeResize"),t("resize"))},o=()=>{!n||n.destroyed||!n.initialized||(s=new ResizeObserver(f=>{r=i.requestAnimationFrame(()=>{const{width:u,height:p}=n;let h=u,g=p;f.forEach(({contentBoxSize:v,contentRect:m,target:d})=>{d&&d!==n.el||(h=m?m.width:(v[0]||v).inlineSize,g=m?m.height:(v[0]||v).blockSize)}),(h!==u||g!==p)&&a()})}),s.observe(n.el))},l=()=>{r&&i.cancelAnimationFrame(r),s&&s.unobserve&&n.el&&(s.unobserve(n.el),s=null)},c=()=>{!n||n.destroyed||!n.initialized||t("orientationchange")};e("init",()=>{if(n.params.resizeObserver&&typeof i.ResizeObserver<"u"){o();return}i.addEventListener("resize",a),i.addEventListener("orientationchange",c)}),e("destroy",()=>{l(),i.removeEventListener("resize",a),i.removeEventListener("orientationchange",c)})}function Sm({swiper:n,extendParams:e,on:t,emit:i}){const s=[],r=mt(),a=(c,f={})=>{const u=r.MutationObserver||r.WebkitMutationObserver,p=new u(h=>{if(n.__preventObserver__)return;if(h.length===1){i("observerUpdate",h[0]);return}const g=function(){i("observerUpdate",h[0])};r.requestAnimationFrame?r.requestAnimationFrame(g):r.setTimeout(g,0)});p.observe(c,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:n.isElement||(typeof f.childList>"u"?!0:f).childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),s.push(p)},o=()=>{if(n.params.observer){if(n.params.observeParents){const c=Ts(n.hostEl);for(let f=0;f<c.length;f+=1)a(c[f])}a(n.hostEl,{childList:n.params.observeSlideChildren}),a(n.wrapperEl,{attributes:!1})}},l=()=>{s.forEach(c=>{c.disconnect()}),s.splice(0,s.length)};e({observer:!1,observeParents:!1,observeSlideChildren:!1}),t("init",o),t("destroy",l)}var Mm={on(n,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const s=t?"unshift":"push";return n.split(" ").forEach(r=>{i.eventsListeners[r]||(i.eventsListeners[r]=[]),i.eventsListeners[r][s](e)}),i},once(n,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function s(...r){i.off(n,s),s.__emitterProxy&&delete s.__emitterProxy,e.apply(i,r)}return s.__emitterProxy=e,i.on(n,s,t)},onAny(n,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof n!="function")return t;const i=e?"unshift":"push";return t.eventsAnyListeners.indexOf(n)<0&&t.eventsAnyListeners[i](n),t},offAny(n){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(n);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(n,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||n.split(" ").forEach(i=>{typeof e>"u"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((s,r)=>{(s===e||s.__emitterProxy&&s.__emitterProxy===e)&&t.eventsListeners[i].splice(r,1)})}),t},emit(...n){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,i,s;return typeof n[0]=="string"||Array.isArray(n[0])?(t=n[0],i=n.slice(1,n.length),s=e):(t=n[0].events,i=n[0].data,s=n[0].context||e),i.unshift(s),(Array.isArray(t)?t:t.split(" ")).forEach(a=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(o=>{o.apply(s,[a,...i])}),e.eventsListeners&&e.eventsListeners[a]&&e.eventsListeners[a].forEach(o=>{o.apply(s,i)})}),e}};function Em(){const n=this;let e,t;const i=n.el;typeof n.params.width<"u"&&n.params.width!==null?e=n.params.width:e=i.clientWidth,typeof n.params.height<"u"&&n.params.height!==null?t=n.params.height:t=i.clientHeight,!(e===0&&n.isHorizontal()||t===0&&n.isVertical())&&(e=e-parseInt(En(i,"padding-left")||0,10)-parseInt(En(i,"padding-right")||0,10),t=t-parseInt(En(i,"padding-top")||0,10)-parseInt(En(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(n,{width:e,height:t,size:n.isHorizontal()?e:t}))}function ym(){const n=this;function e(x,A){return parseFloat(x.getPropertyValue(n.getDirectionLabel(A))||0)}const t=n.params,{wrapperEl:i,slidesEl:s,rtlTranslate:r,wrongRTL:a}=n,o=n.virtual&&t.virtual.enabled,l=o?n.virtual.slides.length:n.slides.length,c=jt(s,`.${n.params.slideClass}, swiper-slide`),f=o?n.virtual.slides.length:c.length;let u=[];const p=[],h=[];let g=t.slidesOffsetBefore;typeof g=="function"&&(g=t.slidesOffsetBefore.call(n));let v=t.slidesOffsetAfter;typeof v=="function"&&(v=t.slidesOffsetAfter.call(n));const m=n.snapGrid.length,d=n.slidesGrid.length,_=n.size-g-v;let S=t.spaceBetween,E=-g,b=0,C=0;if(typeof _>"u")return;typeof S=="string"&&S.indexOf("%")>=0?S=parseFloat(S.replace("%",""))/100*_:typeof S=="string"&&(S=parseFloat(S)),n.virtualSize=-S-g-v,c.forEach(x=>{r?x.style.marginLeft="":x.style.marginRight="",x.style.marginBottom="",x.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(cs(i,"--swiper-centered-offset-before",""),cs(i,"--swiper-centered-offset-after",""));const P=t.grid&&t.grid.rows>1&&n.grid;P?n.grid.initSlides(c):n.grid&&n.grid.unsetSlides();let w;const y=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(x=>typeof t.breakpoints[x].slidesPerView<"u").length>0;for(let x=0;x<f;x+=1){w=0;const A=c[x];if(!(A&&(P&&n.grid.updateSlide(x,A,c),En(A,"display")==="none"))){if(o&&t.slidesPerView==="auto")t.virtual.slidesPerViewAutoSlideSize&&(w=t.virtual.slidesPerViewAutoSlideSize),w&&A&&(t.roundLengths&&(w=Math.floor(w)),A.style[n.getDirectionLabel("width")]=`${w}px`);else if(t.slidesPerView==="auto"){y&&(A.style[n.getDirectionLabel("width")]="");const D=getComputedStyle(A),U=A.style.transform,z=A.style.webkitTransform;if(U&&(A.style.transform="none"),z&&(A.style.webkitTransform="none"),t.roundLengths)w=n.isHorizontal()?sa(A,"width"):sa(A,"height");else{const V=e(D,"width"),W=e(D,"padding-left"),j=e(D,"padding-right"),O=e(D,"margin-left"),J=e(D,"margin-right"),se=D.getPropertyValue("box-sizing");if(se&&se==="border-box")w=V+O+J;else{const{clientWidth:ue,offsetWidth:Fe}=A;w=V+W+j+O+J+(Fe-ue)}}U&&(A.style.transform=U),z&&(A.style.webkitTransform=z),t.roundLengths&&(w=Math.floor(w))}else w=(_-(t.slidesPerView-1)*S)/t.slidesPerView,t.roundLengths&&(w=Math.floor(w)),A&&(A.style[n.getDirectionLabel("width")]=`${w}px`);A&&(A.swiperSlideSize=w),h.push(w),t.centeredSlides?(E=E+w/2+b/2+S,b===0&&x!==0&&(E=E-_/2-S),x===0&&(E=E-_/2-S),Math.abs(E)<1/1e3&&(E=0),t.roundLengths&&(E=Math.floor(E)),C%t.slidesPerGroup===0&&u.push(E),p.push(E)):(t.roundLengths&&(E=Math.floor(E)),(C-Math.min(n.params.slidesPerGroupSkip,C))%n.params.slidesPerGroup===0&&u.push(E),p.push(E),E=E+w+S),n.virtualSize+=w+S,b=w,C+=1}}if(n.virtualSize=Math.max(n.virtualSize,_)+v,r&&a&&(t.effect==="slide"||t.effect==="coverflow")&&(i.style.width=`${n.virtualSize+S}px`),t.setWrapperSize&&(i.style[n.getDirectionLabel("width")]=`${n.virtualSize+S}px`),P&&n.grid.updateWrapperSize(w,u),!t.centeredSlides){const x=[];for(let A=0;A<u.length;A+=1){let D=u[A];t.roundLengths&&(D=Math.floor(D)),u[A]<=n.virtualSize-_&&x.push(D)}u=x,Math.floor(n.virtualSize-_)-Math.floor(u[u.length-1])>1&&u.push(n.virtualSize-_)}if(o&&t.loop){const x=h[0]+S;if(t.slidesPerGroup>1){const A=Math.ceil((n.virtual.slidesBefore+n.virtual.slidesAfter)/t.slidesPerGroup),D=x*t.slidesPerGroup;for(let U=0;U<A;U+=1)u.push(u[u.length-1]+D)}for(let A=0;A<n.virtual.slidesBefore+n.virtual.slidesAfter;A+=1)t.slidesPerGroup===1&&u.push(u[u.length-1]+x),p.push(p[p.length-1]+x),n.virtualSize+=x}if(u.length===0&&(u=[0]),S!==0){const x=n.isHorizontal()&&r?"marginLeft":n.getDirectionLabel("marginRight");c.filter((A,D)=>!t.cssMode||t.loop?!0:D!==c.length-1).forEach(A=>{A.style[x]=`${S}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let x=0;h.forEach(D=>{x+=D+(S||0)}),x-=S;const A=x>_?x-_:0;u=u.map(D=>D<=0?-g:D>A?A+v:D)}if(t.centerInsufficientSlides){let x=0;h.forEach(D=>{x+=D+(S||0)}),x-=S;const A=(g||0)+(v||0);if(x+A<_){const D=(_-x-A)/2;u.forEach((U,z)=>{u[z]=U-D}),p.forEach((U,z)=>{p[z]=U+D})}}if(Object.assign(n,{slides:c,snapGrid:u,slidesGrid:p,slidesSizesGrid:h}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){cs(i,"--swiper-centered-offset-before",`${-u[0]}px`),cs(i,"--swiper-centered-offset-after",`${n.size/2-h[h.length-1]/2}px`);const x=-n.snapGrid[0],A=-n.slidesGrid[0];n.snapGrid=n.snapGrid.map(D=>D+x),n.slidesGrid=n.slidesGrid.map(D=>D+A)}if(f!==l&&n.emit("slidesLengthChange"),u.length!==m&&(n.params.watchOverflow&&n.checkOverflow(),n.emit("snapGridLengthChange")),p.length!==d&&n.emit("slidesGridLengthChange"),t.watchSlidesProgress&&n.updateSlidesOffset(),n.emit("slidesUpdated"),!o&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const x=`${t.containerModifierClass}backface-hidden`,A=n.el.classList.contains(x);f<=t.maxBackfaceHiddenSlides?A||n.el.classList.add(x):A&&n.el.classList.remove(x)}}function Tm(n){const e=this,t=[],i=e.virtual&&e.params.virtual.enabled;let s=0,r;typeof n=="number"?e.setTransition(n):n===!0&&e.setTransition(e.params.speed);const a=o=>i?e.slides[e.getSlideIndexByData(o)]:e.slides[o];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(o=>{t.push(o)});else for(r=0;r<Math.ceil(e.params.slidesPerView);r+=1){const o=e.activeIndex+r;if(o>e.slides.length&&!i)break;t.push(a(o))}else t.push(a(e.activeIndex));for(r=0;r<t.length;r+=1)if(typeof t[r]<"u"){const o=t[r].offsetHeight;s=o>s?o:s}(s||s===0)&&(e.wrapperEl.style.height=`${s}px`)}function bm(){const n=this,e=n.slides,t=n.isElement?n.isHorizontal()?n.wrapperEl.offsetLeft:n.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(n.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-t-n.cssOverflowAdjustment()}const Co=(n,e,t)=>{e&&!n.classList.contains(t)?n.classList.add(t):!e&&n.classList.contains(t)&&n.classList.remove(t)};function Am(n=this&&this.translate||0){const e=this,t=e.params,{slides:i,rtlTranslate:s,snapGrid:r}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let a=-n;s&&(a=n),e.visibleSlidesIndexes=[],e.visibleSlides=[];let o=t.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*e.size:typeof o=="string"&&(o=parseFloat(o));for(let l=0;l<i.length;l+=1){const c=i[l];let f=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(f-=i[0].swiperSlideOffset);const u=(a+(t.centeredSlides?e.minTranslate():0)-f)/(c.swiperSlideSize+o),p=(a-r[0]+(t.centeredSlides?e.minTranslate():0)-f)/(c.swiperSlideSize+o),h=-(a-f),g=h+e.slidesSizesGrid[l],v=h>=0&&h<=e.size-e.slidesSizesGrid[l],m=h>=0&&h<e.size-1||g>1&&g<=e.size||h<=0&&g>=e.size;m&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l)),Co(c,m,t.slideVisibleClass),Co(c,v,t.slideFullyVisibleClass),c.progress=s?-u:u,c.originalProgress=s?-p:p}}function wm(n){const e=this;if(typeof n>"u"){const f=e.rtlTranslate?-1:1;n=e&&e.translate&&e.translate*f||0}const t=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:s,isBeginning:r,isEnd:a,progressLoop:o}=e;const l=r,c=a;if(i===0)s=0,r=!0,a=!0;else{s=(n-e.minTranslate())/i;const f=Math.abs(n-e.minTranslate())<1,u=Math.abs(n-e.maxTranslate())<1;r=f||s<=0,a=u||s>=1,f&&(s=0),u&&(s=1)}if(t.loop){const f=e.getSlideIndexByData(0),u=e.getSlideIndexByData(e.slides.length-1),p=e.slidesGrid[f],h=e.slidesGrid[u],g=e.slidesGrid[e.slidesGrid.length-1],v=Math.abs(n);v>=p?o=(v-p)/g:o=(v+g-h)/g,o>1&&(o-=1)}Object.assign(e,{progress:s,progressLoop:o,isBeginning:r,isEnd:a}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(n),r&&!l&&e.emit("reachBeginning toEdge"),a&&!c&&e.emit("reachEnd toEdge"),(l&&!r||c&&!a)&&e.emit("fromEdge"),e.emit("progress",s)}const ur=(n,e,t)=>{e&&!n.classList.contains(t)?n.classList.add(t):!e&&n.classList.contains(t)&&n.classList.remove(t)};function Cm(){const n=this,{slides:e,params:t,slidesEl:i,activeIndex:s}=n,r=n.virtual&&t.virtual.enabled,a=n.grid&&t.grid&&t.grid.rows>1,o=u=>jt(i,`.${t.slideClass}${u}, swiper-slide${u}`)[0];let l,c,f;if(r)if(t.loop){let u=s-n.virtual.slidesBefore;u<0&&(u=n.virtual.slides.length+u),u>=n.virtual.slides.length&&(u-=n.virtual.slides.length),l=o(`[data-swiper-slide-index="${u}"]`)}else l=o(`[data-swiper-slide-index="${s}"]`);else a?(l=e.find(u=>u.column===s),f=e.find(u=>u.column===s+1),c=e.find(u=>u.column===s-1)):l=e[s];l&&(a||(f=pm(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!f&&(f=e[0]),c=hm(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(u=>{ur(u,u===l,t.slideActiveClass),ur(u,u===f,t.slideNextClass),ur(u,u===c,t.slidePrevClass)}),n.emitSlidesClasses()}const _s=(n,e)=>{if(!n||n.destroyed||!n.params)return;const t=()=>n.isElement?"swiper-slide":`.${n.params.slideClass}`,i=e.closest(t());if(i){let s=i.querySelector(`.${n.params.lazyPreloaderClass}`);!s&&n.isElement&&(i.shadowRoot?s=i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(s=i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`),s&&s.remove())})),s&&s.remove()}},fr=(n,e)=>{if(!n.slides[e])return;const t=n.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},aa=n=>{if(!n||n.destroyed||!n.params)return;let e=n.params.lazyPreloadPrevNext;const t=n.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const i=n.params.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(n.params.slidesPerView),s=n.activeIndex;if(n.params.grid&&n.params.grid.rows>1){const a=s,o=[a-e];o.push(...Array.from({length:e}).map((l,c)=>a+i+c)),n.slides.forEach((l,c)=>{o.includes(l.column)&&fr(n,c)});return}const r=s+i-1;if(n.params.rewind||n.params.loop)for(let a=s-e;a<=r+e;a+=1){const o=(a%t+t)%t;(o<s||o>r)&&fr(n,o)}else for(let a=Math.max(s-e,0);a<=Math.min(r+e,t-1);a+=1)a!==s&&(a>r||a<s)&&fr(n,a)};function Rm(n){const{slidesGrid:e,params:t}=n,i=n.rtlTranslate?n.translate:-n.translate;let s;for(let r=0;r<e.length;r+=1)typeof e[r+1]<"u"?i>=e[r]&&i<e[r+1]-(e[r+1]-e[r])/2?s=r:i>=e[r]&&i<e[r+1]&&(s=r+1):i>=e[r]&&(s=r);return t.normalizeSlideIndex&&(s<0||typeof s>"u")&&(s=0),s}function Pm(n){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:s,activeIndex:r,realIndex:a,snapIndex:o}=e;let l=n,c;const f=h=>{let g=h-e.virtual.slidesBefore;return g<0&&(g=e.virtual.slides.length+g),g>=e.virtual.slides.length&&(g-=e.virtual.slides.length),g};if(typeof l>"u"&&(l=Rm(e)),i.indexOf(t)>=0)c=i.indexOf(t);else{const h=Math.min(s.slidesPerGroupSkip,l);c=h+Math.floor((l-h)/s.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),l===r&&!e.params.loop){c!==o&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===r&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=f(l);return}const u=e.grid&&s.grid&&s.grid.rows>1;let p;if(e.virtual&&s.virtual.enabled&&s.loop)p=f(l);else if(u){const h=e.slides.find(v=>v.column===l);let g=parseInt(h.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(e.slides.indexOf(h),0)),p=Math.floor(g/s.grid.rows)}else if(e.slides[l]){const h=e.slides[l].getAttribute("data-swiper-slide-index");h?p=parseInt(h,10):p=l}else p=l;Object.assign(e,{previousSnapIndex:o,snapIndex:c,previousRealIndex:a,realIndex:p,previousIndex:r,activeIndex:l}),e.initialized&&aa(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(a!==p&&e.emit("realIndexChange"),e.emit("slideChange"))}function Lm(n,e){const t=this,i=t.params;let s=n.closest(`.${i.slideClass}, swiper-slide`);!s&&t.isElement&&e&&e.length>1&&e.includes(n)&&[...e.slice(e.indexOf(n)+1,e.length)].forEach(o=>{!s&&o.matches&&o.matches(`.${i.slideClass}, swiper-slide`)&&(s=o)});let r=!1,a;if(s){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===s){r=!0,a=o;break}}if(s&&r)t.clickedSlide=s,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=a;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}i.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Dm={updateSize:Em,updateSlides:ym,updateAutoHeight:Tm,updateSlidesOffset:bm,updateSlidesProgress:Am,updateProgress:wm,updateSlidesClasses:Cm,updateActiveIndex:Pm,updateClickedSlide:Lm};function Im(n=this.isHorizontal()?"x":"y"){const e=this,{params:t,rtlTranslate:i,translate:s,wrapperEl:r}=e;if(t.virtualTranslate)return i?-s:s;if(t.cssMode)return s;let a=lm(r,n);return a+=e.cssOverflowAdjustment(),i&&(a=-a),a||0}function Um(n,e){const t=this,{rtlTranslate:i,params:s,wrapperEl:r,progress:a}=t;let o=0,l=0;const c=0;t.isHorizontal()?o=i?-n:n:l=n,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?o:l,s.cssMode?r[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-o:-l:s.virtualTranslate||(t.isHorizontal()?o-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),r.style.transform=`translate3d(${o}px, ${l}px, ${c}px)`);let f;const u=t.maxTranslate()-t.minTranslate();u===0?f=0:f=(n-t.minTranslate())/u,f!==a&&t.updateProgress(n),t.emit("setTranslate",t.translate,e)}function Nm(){return-this.snapGrid[0]}function Fm(){return-this.snapGrid[this.snapGrid.length-1]}function Om(n=0,e=this.params.speed,t=!0,i=!0,s){const r=this,{params:a,wrapperEl:o}=r;if(r.animating&&a.preventInteractionOnTransition)return!1;const l=r.minTranslate(),c=r.maxTranslate();let f;if(i&&n>l?f=l:i&&n<c?f=c:f=n,r.updateProgress(f),a.cssMode){const u=r.isHorizontal();if(e===0)o[u?"scrollLeft":"scrollTop"]=-f;else{if(!r.support.smoothScroll)return pl({swiper:r,targetPosition:-f,side:u?"left":"top"}),!0;o.scrollTo({[u?"left":"top"]:-f,behavior:"smooth"})}return!0}return e===0?(r.setTransition(0),r.setTranslate(f),t&&(r.emit("beforeTransitionStart",e,s),r.emit("transitionEnd"))):(r.setTransition(e),r.setTranslate(f),t&&(r.emit("beforeTransitionStart",e,s),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(p){!r||r.destroyed||p.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,t&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var Bm={getTranslate:Im,setTranslate:Um,minTranslate:Nm,maxTranslate:Fm,translateTo:Om};function zm(n,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${n}ms`,t.wrapperEl.style.transitionDelay=n===0?"0ms":""),t.emit("setTransition",n,e)}function vl({swiper:n,runCallbacks:e,direction:t,step:i}){const{activeIndex:s,previousIndex:r}=n;let a=t;a||(s>r?a="next":s<r?a="prev":a="reset"),n.emit(`transition${i}`),e&&a==="reset"?n.emit(`slideResetTransition${i}`):e&&s!==r&&(n.emit(`slideChangeTransition${i}`),a==="next"?n.emit(`slideNextTransition${i}`):n.emit(`slidePrevTransition${i}`))}function Hm(n=!0,e){const t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),vl({swiper:t,runCallbacks:n,direction:e,step:"Start"}))}function km(n=!0,e){const t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),vl({swiper:t,runCallbacks:n,direction:e,step:"End"}))}var Gm={setTransition:zm,transitionStart:Hm,transitionEnd:km};function Vm(n=0,e,t=!0,i,s){typeof n=="string"&&(n=parseInt(n,10));const r=this;let a=n;a<0&&(a=0);const{params:o,snapGrid:l,slidesGrid:c,previousIndex:f,activeIndex:u,rtlTranslate:p,wrapperEl:h,enabled:g}=r;if(!g&&!i&&!s||r.destroyed||r.animating&&o.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=r.params.speed);const v=Math.min(r.params.slidesPerGroupSkip,a);let m=v+Math.floor((a-v)/r.params.slidesPerGroup);m>=l.length&&(m=l.length-1);const d=-l[m];if(o.normalizeSlideIndex)for(let P=0;P<c.length;P+=1){const w=-Math.floor(d*100),y=Math.floor(c[P]*100),x=Math.floor(c[P+1]*100);typeof c[P+1]<"u"?w>=y&&w<x-(x-y)/2?a=P:w>=y&&w<x&&(a=P+1):w>=y&&(a=P)}if(r.initialized&&a!==u&&(!r.allowSlideNext&&(p?d>r.translate&&d>r.minTranslate():d<r.translate&&d<r.minTranslate())||!r.allowSlidePrev&&d>r.translate&&d>r.maxTranslate()&&(u||0)!==a))return!1;a!==(f||0)&&t&&r.emit("beforeSlideChangeStart"),r.updateProgress(d);let _;a>u?_="next":a<u?_="prev":_="reset";const S=r.virtual&&r.params.virtual.enabled;if(!(S&&s)&&(p&&-d===r.translate||!p&&d===r.translate))return r.updateActiveIndex(a),o.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),o.effect!=="slide"&&r.setTranslate(d),_!=="reset"&&(r.transitionStart(t,_),r.transitionEnd(t,_)),!1;if(o.cssMode){const P=r.isHorizontal(),w=p?d:-d;if(e===0)S&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),S&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{h[P?"scrollLeft":"scrollTop"]=w})):h[P?"scrollLeft":"scrollTop"]=w,S&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return pl({swiper:r,targetPosition:w,side:P?"left":"top"}),!0;h.scrollTo({[P?"left":"top"]:w,behavior:"smooth"})}return!0}const C=_l().isSafari;return S&&!s&&C&&r.isElement&&r.virtual.update(!1,!1,a),r.setTransition(e),r.setTranslate(d),r.updateActiveIndex(a),r.updateSlidesClasses(),r.emit("beforeTransitionStart",e,i),r.transitionStart(t,_),e===0?r.transitionEnd(t,_):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(w){!r||r.destroyed||w.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(t,_))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function Wm(n=0,e,t=!0,i){typeof n=="string"&&(n=parseInt(n,10));const s=this;if(s.destroyed)return;typeof e>"u"&&(e=s.params.speed);const r=s.grid&&s.params.grid&&s.params.grid.rows>1;let a=n;if(s.params.loop)if(s.virtual&&s.params.virtual.enabled)a=a+s.virtual.slidesBefore;else{let o;if(r){const v=a*s.params.grid.rows;o=s.slides.find(m=>m.getAttribute("data-swiper-slide-index")*1===v).column}else o=s.getSlideIndexByData(a);const l=r?Math.ceil(s.slides.length/s.params.grid.rows):s.slides.length,{centeredSlides:c,slidesOffsetBefore:f,slidesOffsetAfter:u}=s.params,p=c||!!f||!!u;let h=s.params.slidesPerView;h==="auto"?h=s.slidesPerViewDynamic():(h=Math.ceil(parseFloat(s.params.slidesPerView,10)),p&&h%2===0&&(h=h+1));let g=l-o<h;if(p&&(g=g||o<Math.ceil(h/2)),i&&p&&s.params.slidesPerView!=="auto"&&!r&&(g=!1),g){const v=p?o<s.activeIndex?"prev":"next":o-s.activeIndex-1<s.params.slidesPerView?"next":"prev";s.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?o+1:o-l+1,slideRealIndex:v==="next"?s.realIndex:void 0})}if(r){const v=a*s.params.grid.rows;a=s.slides.find(m=>m.getAttribute("data-swiper-slide-index")*1===v).column}else a=s.getSlideIndexByData(a)}return requestAnimationFrame(()=>{s.slideTo(a,e,t,i)}),s}function Xm(n,e=!0,t){const i=this,{enabled:s,params:r,animating:a}=i;if(!s||i.destroyed)return i;typeof n>"u"&&(n=i.params.speed);let o=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(o=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<r.slidesPerGroupSkip?1:o,c=i.virtual&&r.virtual.enabled;if(r.loop){if(a&&!c&&r.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+l,n,e,t)}),!0}return r.rewind&&i.isEnd?i.slideTo(0,n,e,t):i.slideTo(i.activeIndex+l,n,e,t)}function Ym(n,e=!0,t){const i=this,{params:s,snapGrid:r,slidesGrid:a,rtlTranslate:o,enabled:l,animating:c}=i;if(!l||i.destroyed)return i;typeof n>"u"&&(n=i.params.speed);const f=i.virtual&&s.virtual.enabled;if(s.loop){if(c&&!f&&s.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const u=o?i.translate:-i.translate;function p(_){return _<0?-Math.floor(Math.abs(_)):Math.floor(_)}const h=p(u),g=r.map(_=>p(_)),v=s.freeMode&&s.freeMode.enabled;let m=r[g.indexOf(h)-1];if(typeof m>"u"&&(s.cssMode||v)){let _;r.forEach((S,E)=>{h>=S&&(_=E)}),typeof _<"u"&&(m=v?r[_]:r[_>0?_-1:_])}let d=0;if(typeof m<"u"&&(d=a.indexOf(m),d<0&&(d=i.activeIndex-1),s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(d=d-i.slidesPerViewDynamic("previous",!0)+1,d=Math.max(d,0))),s.rewind&&i.isBeginning){const _=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(_,n,e,t)}else if(s.loop&&i.activeIndex===0&&s.cssMode)return requestAnimationFrame(()=>{i.slideTo(d,n,e,t)}),!0;return i.slideTo(d,n,e,t)}function qm(n,e=!0,t){const i=this;if(!i.destroyed)return typeof n>"u"&&(n=i.params.speed),i.slideTo(i.activeIndex,n,e,t)}function $m(n,e=!0,t,i=.5){const s=this;if(s.destroyed)return;typeof n>"u"&&(n=s.params.speed);let r=s.activeIndex;const a=Math.min(s.params.slidesPerGroupSkip,r),o=a+Math.floor((r-a)/s.params.slidesPerGroup),l=s.rtlTranslate?s.translate:-s.translate;if(l>=s.snapGrid[o]){const c=s.snapGrid[o],f=s.snapGrid[o+1];l-c>(f-c)*i&&(r+=s.params.slidesPerGroup)}else{const c=s.snapGrid[o-1],f=s.snapGrid[o];l-c<=(f-c)*i&&(r-=s.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,s.slidesGrid.length-1),s.slideTo(r,n,e,t)}function jm(){const n=this;if(n.destroyed)return;const{params:e,slidesEl:t}=n,i=e.slidesPerView==="auto"?n.slidesPerViewDynamic():e.slidesPerView;let s=n.getSlideIndexWhenGrid(n.clickedIndex),r;const a=n.isElement?"swiper-slide":`.${e.slideClass}`,o=n.grid&&n.params.grid&&n.params.grid.rows>1;if(e.loop){if(n.animating)return;r=parseInt(n.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?n.slideToLoop(r):s>(o?(n.slides.length-i)/2-(n.params.grid.rows-1):n.slides.length-i)?(n.loopFix(),s=n.getSlideIndex(jt(t,`${a}[data-swiper-slide-index="${r}"]`)[0]),Ms(()=>{n.slideTo(s)})):n.slideTo(s)}else n.slideTo(s)}var Km={slideTo:Vm,slideToLoop:Wm,slideNext:Xm,slidePrev:Ym,slideReset:qm,slideToClosest:$m,slideToClickedSlide:jm};function Zm(n,e){const t=this,{params:i,slidesEl:s}=t;if(!i.loop||t.virtual&&t.params.virtual.enabled)return;const r=()=>{jt(s,`.${i.slideClass}, swiper-slide`).forEach((g,v)=>{g.setAttribute("data-swiper-slide-index",v)})},a=()=>{const h=jt(s,`.${i.slideBlankClass}`);h.forEach(g=>{g.remove()}),h.length>0&&(t.recalcSlides(),t.updateSlides())},o=t.grid&&i.grid&&i.grid.rows>1;i.loopAddBlankSlides&&(i.slidesPerGroup>1||o)&&a();const l=i.slidesPerGroup*(o?i.grid.rows:1),c=t.slides.length%l!==0,f=o&&t.slides.length%i.grid.rows!==0,u=h=>{for(let g=0;g<h;g+=1){const v=t.isElement?Ii("swiper-slide",[i.slideBlankClass]):Ii("div",[i.slideClass,i.slideBlankClass]);t.slidesEl.append(v)}};if(c){if(i.loopAddBlankSlides){const h=l-t.slides.length%l;u(h),t.recalcSlides(),t.updateSlides()}else Es("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(f){if(i.loopAddBlankSlides){const h=i.grid.rows-t.slides.length%i.grid.rows;u(h),t.recalcSlides(),t.updateSlides()}else Es("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();const p=i.centeredSlides||!!i.slidesOffsetBefore||!!i.slidesOffsetAfter;t.loopFix({slideRealIndex:n,direction:p?void 0:"next",initial:e})}function Jm({slideRealIndex:n,slideTo:e=!0,direction:t,setTranslate:i,activeSlideIndex:s,initial:r,byController:a,byMousewheel:o}={}){const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:f,allowSlideNext:u,slidesEl:p,params:h}=l,{centeredSlides:g,slidesOffsetBefore:v,slidesOffsetAfter:m,initialSlide:d}=h,_=g||!!v||!!m;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&h.virtual.enabled){e&&(!_&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):_&&l.snapIndex<h.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=f,l.allowSlideNext=u,l.emit("loopFix");return}let S=h.slidesPerView;S==="auto"?S=l.slidesPerViewDynamic():(S=Math.ceil(parseFloat(h.slidesPerView,10)),_&&S%2===0&&(S=S+1));const E=h.slidesPerGroupAuto?S:h.slidesPerGroup;let b=_?Math.max(E,Math.ceil(S/2)):E;b%E!==0&&(b+=E-b%E),b+=h.loopAdditionalSlides,l.loopedSlides=b;const C=l.grid&&h.grid&&h.grid.rows>1;c.length<S+b||l.params.effect==="cards"&&c.length<S+b*2?Es("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):C&&h.grid.fill==="row"&&Es("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const P=[],w=[],y=C?Math.ceil(c.length/h.grid.rows):c.length,x=r&&y-d<S&&!_;let A=x?d:l.activeIndex;typeof s>"u"?s=l.getSlideIndex(c.find(O=>O.classList.contains(h.slideActiveClass))):A=s;const D=t==="next"||!t,U=t==="prev"||!t;let z=0,V=0;const j=(C?c[s].column:s)+(_&&typeof i>"u"?-S/2+.5:0);if(j<b){z=Math.max(b-j,E);for(let O=0;O<b-j;O+=1){const J=O-Math.floor(O/y)*y;if(C){const se=y-J-1;for(let ue=c.length-1;ue>=0;ue-=1)c[ue].column===se&&P.push(ue)}else P.push(y-J-1)}}else if(j+S>y-b){V=Math.max(j-(y-b*2),E),x&&(V=Math.max(V,S-y+d+1));for(let O=0;O<V;O+=1){const J=O-Math.floor(O/y)*y;C?c.forEach((se,ue)=>{se.column===J&&w.push(ue)}):w.push(J)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),l.params.effect==="cards"&&c.length<S+b*2&&(w.includes(s)&&w.splice(w.indexOf(s),1),P.includes(s)&&P.splice(P.indexOf(s),1)),U&&P.forEach(O=>{c[O].swiperLoopMoveDOM=!0,p.prepend(c[O]),c[O].swiperLoopMoveDOM=!1}),D&&w.forEach(O=>{c[O].swiperLoopMoveDOM=!0,p.append(c[O]),c[O].swiperLoopMoveDOM=!1}),l.recalcSlides(),h.slidesPerView==="auto"?l.updateSlides():C&&(P.length>0&&U||w.length>0&&D)&&l.slides.forEach((O,J)=>{l.grid.updateSlide(J,O,l.slides)}),h.watchSlidesProgress&&l.updateSlidesOffset(),e){if(P.length>0&&U){if(typeof n>"u"){const O=l.slidesGrid[A],se=l.slidesGrid[A+z]-O;o?l.setTranslate(l.translate-se):(l.slideTo(A+Math.ceil(z),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-se,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-se))}else if(i){const O=C?P.length/h.grid.rows:P.length;l.slideTo(l.activeIndex+O,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(w.length>0&&D)if(typeof n>"u"){const O=l.slidesGrid[A],se=l.slidesGrid[A-V]-O;o?l.setTranslate(l.translate-se):(l.slideTo(A-V,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-se,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-se))}else{const O=C?w.length/h.grid.rows:w.length;l.slideTo(l.activeIndex-O,0,!1,!0)}}if(l.allowSlidePrev=f,l.allowSlideNext=u,l.controller&&l.controller.control&&!a){const O={slideRealIndex:n,direction:t,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(J=>{!J.destroyed&&J.params.loop&&J.loopFix({...O,slideTo:J.params.slidesPerView===h.slidesPerView?e:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...O,slideTo:l.controller.control.params.slidesPerView===h.slidesPerView?e:!1})}l.emit("loopFix")}function Qm(){const n=this,{params:e,slidesEl:t}=n;if(!e.loop||!t||n.virtual&&n.params.virtual.enabled)return;n.recalcSlides();const i=[];n.slides.forEach(s=>{const r=typeof s.swiperSlideIndex>"u"?s.getAttribute("data-swiper-slide-index")*1:s.swiperSlideIndex;i[r]=s}),n.slides.forEach(s=>{s.removeAttribute("data-swiper-slide-index")}),i.forEach(s=>{t.append(s)}),n.recalcSlides(),n.slideTo(n.realIndex,0)}var eg={loopCreate:Zm,loopFix:Jm,loopDestroy:Qm};function tg(n){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=n?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function ng(){const n=this;n.params.watchOverflow&&n.isLocked||n.params.cssMode||(n.isElement&&(n.__preventObserver__=!0),n[n.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1}))}var ig={setGrabCursor:tg,unsetGrabCursor:ng};function sg(n,e=this){function t(i){if(!i||i===hn()||i===mt())return null;i.assignedSlot&&(i=i.assignedSlot);const s=i.closest(n);return!s&&!i.getRootNode?null:s||t(i.getRootNode().host)}return t(e)}function Ro(n,e,t){const i=mt(),{params:s}=n,r=s.edgeSwipeDetection,a=s.edgeSwipeThreshold;return r&&(t<=a||t>=i.innerWidth-a)?r==="prevent"?(e.preventDefault(),!0):!1:!0}function rg(n){const e=this,t=hn();let i=n;i.originalEvent&&(i=i.originalEvent);const s=e.touchEventsData;if(i.type==="pointerdown"){if(s.pointerId!==null&&s.pointerId!==i.pointerId)return;s.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(s.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){Ro(e,i,i.targetTouches[0].pageX);return}const{params:r,touches:a,enabled:o}=e;if(!o||!r.simulateTouch&&i.pointerType==="mouse"||e.animating&&r.preventInteractionOnTransition)return;!e.animating&&r.cssMode&&r.loop&&e.loopFix();let l=i.target;if(r.touchEventsTarget==="wrapper"&&!um(l,e.wrapperEl)||"which"in i&&i.which===3||"button"in i&&i.button>0||s.isTouched&&s.isMoved)return;const c=!!r.noSwipingClass&&r.noSwipingClass!=="",f=i.composedPath?i.composedPath():i.path;c&&i.target&&i.target.shadowRoot&&f&&(l=f[0]);const u=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,p=!!(i.target&&i.target.shadowRoot);if(r.noSwiping&&(p?sg(u,l):l.closest(u))){e.allowClick=!0;return}if(r.swipeHandler&&!l.closest(r.swipeHandler))return;a.currentX=i.pageX,a.currentY=i.pageY;const h=a.currentX,g=a.currentY;if(!Ro(e,i,h))return;Object.assign(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=h,a.startY=g,s.touchStartTime=on(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,r.threshold>0&&(s.allowThresholdMove=!1);let v=!0;l.matches(s.focusableElements)&&(v=!1,l.nodeName==="SELECT"&&(s.isTouched=!1)),t.activeElement&&t.activeElement.matches(s.focusableElements)&&t.activeElement!==l&&(i.pointerType==="mouse"||i.pointerType!=="mouse"&&!l.matches(s.focusableElements))&&t.activeElement.blur();const m=v&&e.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||m)&&!l.isContentEditable&&i.preventDefault(),r.freeMode&&r.freeMode.enabled&&e.freeMode&&e.animating&&!r.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function ag(n){const e=hn(),t=this,i=t.touchEventsData,{params:s,touches:r,rtlTranslate:a,enabled:o}=t;if(!o||!s.simulateTouch&&n.pointerType==="mouse")return;let l=n;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(i.touchId!==null||l.pointerId!==i.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find(b=>b.identifier===i.touchId),!c||c.identifier!==i.touchId)return}else c=l;if(!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",l);return}const f=c.pageX,u=c.pageY;if(l.preventedByNestedSwiper){r.startX=f,r.startY=u;return}if(!t.allowTouchMove){l.target.matches(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(r,{startX:f,startY:u,currentX:f,currentY:u}),i.touchStartTime=on());return}if(s.touchReleaseOnEdges&&!s.loop)if(t.isVertical()){if(u<r.startY&&t.translate<=t.maxTranslate()||u>r.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else{if(a&&(f>r.startX&&-t.translate<=t.maxTranslate()||f<r.startX&&-t.translate>=t.minTranslate()))return;if(!a&&(f<r.startX&&t.translate<=t.maxTranslate()||f>r.startX&&t.translate>=t.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(i.focusableElements)&&e.activeElement!==l.target&&l.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&l.target===e.activeElement&&l.target.matches(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}i.allowTouchCallbacks&&t.emit("touchMove",l),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=f,r.currentY=u;const p=r.currentX-r.startX,h=r.currentY-r.startY;if(t.params.threshold&&Math.sqrt(p**2+h**2)<t.params.threshold)return;if(typeof i.isScrolling>"u"){let b;t.isHorizontal()&&r.currentY===r.startY||t.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:p*p+h*h>=25&&(b=Math.atan2(Math.abs(h),Math.abs(p))*180/Math.PI,i.isScrolling=t.isHorizontal()?b>s.touchAngle:90-b>s.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",l),typeof i.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(i.startMoving=!0),i.isScrolling||l.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!s.cssMode&&l.cancelable&&l.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&l.stopPropagation();let g=t.isHorizontal()?p:h,v=t.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;s.oneWayMovement&&(g=Math.abs(g)*(a?1:-1),v=Math.abs(v)*(a?1:-1)),r.diff=g,g*=s.touchRatio,a&&(g=-g,v=-v);const m=t.touchesDirection;t.swipeDirection=g>0?"prev":"next",t.touchesDirection=v>0?"prev":"next";const d=t.params.loop&&!s.cssMode,_=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!i.isMoved){if(d&&_&&t.loopFix({direction:t.swipeDirection}),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const b=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(b)}i.allowMomentumBounce=!1,s.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}if(new Date().getTime(),s._loopSwapReset!==!1&&i.isMoved&&i.allowThresholdMove&&m!==t.touchesDirection&&d&&_&&Math.abs(g)>=1){Object.assign(r,{startX:f,startY:u,currentX:f,currentY:u,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}t.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=g+i.startTranslate;let S=!0,E=s.resistanceRatio;if(s.touchReleaseOnEdges&&(E=0),g>0?(d&&_&&i.allowThresholdMove&&i.currentTranslate>(s.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(s.slidesPerView!=="auto"&&t.slides.length-s.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>t.minTranslate()&&(S=!1,s.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+g)**E))):g<0&&(d&&_&&i.allowThresholdMove&&i.currentTranslate<(s.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(s.slidesPerView!=="auto"&&t.slides.length-s.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(s.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(s.slidesPerView,10)))}),i.currentTranslate<t.maxTranslate()&&(S=!1,s.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-g)**E))),S&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),s.threshold>0)if(Math.abs(g)>s.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,r.diff=t.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{i.currentTranslate=i.startTranslate;return}!s.followFinger||s.cssMode||((s.freeMode&&s.freeMode.enabled&&t.freeMode||s.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),s.freeMode&&s.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function og(n){const e=this,t=e.touchEventsData;let i=n;i.originalEvent&&(i=i.originalEvent);let s;if(i.type==="touchend"||i.type==="touchcancel"){if(s=[...i.changedTouches].find(b=>b.identifier===t.touchId),!s||s.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;s=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:a,touches:o,rtlTranslate:l,slidesGrid:c,enabled:f}=e;if(!f||!a.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&a.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}a.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const u=on(),p=u-t.touchStartTime;if(e.allowClick){const b=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(b&&b[0]||i.target,b),e.emit("tap click",i),p<300&&u-t.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(t.lastClickTime=on(),Ms(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||o.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let h;if(a.followFinger?h=l?e.translate:-e.translate:h=-t.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:h});return}const g=h>=-e.maxTranslate()&&!e.params.loop;let v=0,m=e.slidesSizesGrid[0];for(let b=0;b<c.length;b+=b<a.slidesPerGroupSkip?1:a.slidesPerGroup){const C=b<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[b+C]<"u"?(g||h>=c[b]&&h<c[b+C])&&(v=b,m=c[b+C]-c[b]):(g||h>=c[b])&&(v=b,m=c[c.length-1]-c[c.length-2])}let d=null,_=null;a.rewind&&(e.isBeginning?_=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(d=0));const S=(h-c[v])/m,E=v<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(p>a.longSwipesMs){if(!a.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(S>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?d:v+E):e.slideTo(v)),e.swipeDirection==="prev"&&(S>1-a.longSwipesRatio?e.slideTo(v+E):_!==null&&S<0&&Math.abs(S)>a.longSwipesRatio?e.slideTo(_):e.slideTo(v))}else{if(!a.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(v+E):e.slideTo(v):(e.swipeDirection==="next"&&e.slideTo(d!==null?d:v+E),e.swipeDirection==="prev"&&e.slideTo(_!==null?_:v))}}function Po(){const n=this,{params:e,el:t}=n;if(t&&t.offsetWidth===0)return;e.breakpoints&&n.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:s,snapGrid:r}=n,a=n.virtual&&n.params.virtual.enabled;n.allowSlideNext=!0,n.allowSlidePrev=!0,n.updateSize(),n.updateSlides(),n.updateSlidesClasses();const o=a&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&n.isEnd&&!n.isBeginning&&!n.params.centeredSlides&&!o?n.slideTo(n.slides.length-1,0,!1,!0):n.params.loop&&!a?n.slideToLoop(n.realIndex,0,!1,!0):n.slideTo(n.activeIndex,0,!1,!0),n.autoplay&&n.autoplay.running&&n.autoplay.paused&&(clearTimeout(n.autoplay.resizeTimeout),n.autoplay.resizeTimeout=setTimeout(()=>{n.autoplay&&n.autoplay.running&&n.autoplay.paused&&n.autoplay.resume()},500)),n.allowSlidePrev=s,n.allowSlideNext=i,n.params.watchOverflow&&r!==n.snapGrid&&n.checkOverflow()}function lg(n){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&n.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(n.stopPropagation(),n.stopImmediatePropagation())))}function cg(){const n=this,{wrapperEl:e,rtlTranslate:t,enabled:i}=n;if(!i)return;n.previousTranslate=n.translate,n.isHorizontal()?n.translate=-e.scrollLeft:n.translate=-e.scrollTop,n.translate===0&&(n.translate=0),n.updateActiveIndex(),n.updateSlidesClasses();let s;const r=n.maxTranslate()-n.minTranslate();r===0?s=0:s=(n.translate-n.minTranslate())/r,s!==n.progress&&n.updateProgress(t?-n.translate:n.translate),n.emit("setTranslate",n.translate,!1)}function dg(n){const e=this;_s(e,n.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function ug(){const n=this;n.documentTouchHandlerProceeded||(n.documentTouchHandlerProceeded=!0,n.params.touchReleaseOnEdges&&(n.el.style.touchAction="auto"))}const xl=(n,e)=>{const t=hn(),{params:i,el:s,wrapperEl:r,device:a}=n,o=!!i.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;!s||typeof s=="string"||(t[l]("touchstart",n.onDocumentTouchStart,{passive:!1,capture:o}),s[l]("touchstart",n.onTouchStart,{passive:!1}),s[l]("pointerdown",n.onTouchStart,{passive:!1}),t[l]("touchmove",n.onTouchMove,{passive:!1,capture:o}),t[l]("pointermove",n.onTouchMove,{passive:!1,capture:o}),t[l]("touchend",n.onTouchEnd,{passive:!0}),t[l]("pointerup",n.onTouchEnd,{passive:!0}),t[l]("pointercancel",n.onTouchEnd,{passive:!0}),t[l]("touchcancel",n.onTouchEnd,{passive:!0}),t[l]("pointerout",n.onTouchEnd,{passive:!0}),t[l]("pointerleave",n.onTouchEnd,{passive:!0}),t[l]("contextmenu",n.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&s[l]("click",n.onClick,!0),i.cssMode&&r[l]("scroll",n.onScroll),i.updateOnWindowResize?n[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Po,!0):n[c]("observerUpdate",Po,!0),s[l]("load",n.onLoad,{capture:!0}))};function fg(){const n=this,{params:e}=n;n.onTouchStart=rg.bind(n),n.onTouchMove=ag.bind(n),n.onTouchEnd=og.bind(n),n.onDocumentTouchStart=ug.bind(n),e.cssMode&&(n.onScroll=cg.bind(n)),n.onClick=lg.bind(n),n.onLoad=dg.bind(n),xl(n,"on")}function hg(){xl(this,"off")}var pg={attachEvents:fg,detachEvents:hg};const Lo=(n,e)=>n.grid&&e.grid&&e.grid.rows>1;function mg(){const n=this,{realIndex:e,initialized:t,params:i,el:s}=n,r=i.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const a=hn(),o=i.breakpointsBase==="window"||!i.breakpointsBase?i.breakpointsBase:"container",l=["window","container"].includes(i.breakpointsBase)||!i.breakpointsBase?n.el:a.querySelector(i.breakpointsBase),c=n.getBreakpoint(r,o,l);if(!c||n.currentBreakpoint===c)return;const u=(c in r?r[c]:void 0)||n.originalParams,p=Lo(n,i),h=Lo(n,u),g=n.params.grabCursor,v=u.grabCursor,m=i.enabled;p&&!h?(s.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),n.emitContainerClasses()):!p&&h&&(s.classList.add(`${i.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&i.grid.fill==="column")&&s.classList.add(`${i.containerModifierClass}grid-column`),n.emitContainerClasses()),g&&!v?n.unsetGrabCursor():!g&&v&&n.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(C=>{if(typeof u[C]>"u")return;const P=i[C]&&i[C].enabled,w=u[C]&&u[C].enabled;P&&!w&&n[C].disable(),!P&&w&&n[C].enable()});const d=u.direction&&u.direction!==i.direction,_=i.loop&&(u.slidesPerView!==i.slidesPerView||d),S=i.loop;d&&t&&n.changeDirection(),Dt(n.params,u);const E=n.params.enabled,b=n.params.loop;Object.assign(n,{allowTouchMove:n.params.allowTouchMove,allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev}),m&&!E?n.disable():!m&&E&&n.enable(),n.currentBreakpoint=c,n.emit("_beforeBreakpoint",u),t&&(_?(n.loopDestroy(),n.loopCreate(e),n.updateSlides()):!S&&b?(n.loopCreate(e),n.updateSlides()):S&&!b&&n.loopDestroy()),n.emit("breakpoint",u)}function gg(n,e="window",t){if(!n||e==="container"&&!t)return;let i=!1;const s=mt(),r=e==="window"?s.innerHeight:t.clientHeight,a=Object.keys(n).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const l=parseFloat(o.substr(1));return{value:r*l,point:o}}return{value:o,point:o}});a.sort((o,l)=>parseInt(o.value,10)-parseInt(l.value,10));for(let o=0;o<a.length;o+=1){const{point:l,value:c}=a[o];e==="window"?s.matchMedia(`(min-width: ${c}px)`).matches&&(i=l):c<=t.clientWidth&&(i=l)}return i||"max"}var _g={setBreakpoint:mg,getBreakpoint:gg};function vg(n,e){const t=[];return n.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(s=>{i[s]&&t.push(e+s)}):typeof i=="string"&&t.push(e+i)}),t}function xg(){const n=this,{classNames:e,params:t,rtl:i,el:s,device:r}=n,a=vg(["initialized",t.direction,{"free-mode":n.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...a),s.classList.add(...e),n.emitContainerClasses()}function Sg(){const n=this,{el:e,classNames:t}=n;!e||typeof e=="string"||(e.classList.remove(...t),n.emitContainerClasses())}var Mg={addClasses:xg,removeClasses:Sg};function Eg(){const n=this,{isLocked:e,params:t}=n,{slidesOffsetBefore:i}=t;if(i){const s=n.slides.length-1,r=n.slidesGrid[s]+n.slidesSizesGrid[s]+i*2;n.isLocked=n.size>r}else n.isLocked=n.snapGrid.length===1;t.allowSlideNext===!0&&(n.allowSlideNext=!n.isLocked),t.allowSlidePrev===!0&&(n.allowSlidePrev=!n.isLocked),e&&e!==n.isLocked&&(n.isEnd=!1),e!==n.isLocked&&n.emit(n.isLocked?"lock":"unlock")}var yg={checkOverflow:Eg},Do={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Tg(n,e){return function(i={}){const s=Object.keys(i)[0],r=i[s];if(typeof r!="object"||r===null){Dt(e,i);return}if(n[s]===!0&&(n[s]={enabled:!0}),s==="navigation"&&n[s]&&n[s].enabled&&!n[s].prevEl&&!n[s].nextEl&&(n[s].auto=!0),["pagination","scrollbar"].indexOf(s)>=0&&n[s]&&n[s].enabled&&!n[s].el&&(n[s].auto=!0),!(s in n&&"enabled"in r)){Dt(e,i);return}typeof n[s]=="object"&&!("enabled"in n[s])&&(n[s].enabled=!0),n[s]||(n[s]={enabled:!1}),Dt(e,i)}}const hr={eventsEmitter:Mm,update:Dm,translate:Bm,transition:Gm,slide:Km,loop:eg,grabCursor:ig,events:pg,breakpoints:_g,checkOverflow:yg,classes:Mg},pr={};class Ot{constructor(...e){let t,i;e.length===1&&e[0].constructor&&Object.prototype.toString.call(e[0]).slice(8,-1)==="Object"?i=e[0]:[t,i]=e,i||(i={}),i=Dt({},i),t&&!i.el&&(i.el=t);const s=hn();if(i.el&&typeof i.el=="string"&&s.querySelectorAll(i.el).length>1){const l=[];return s.querySelectorAll(i.el).forEach(c=>{const f=Dt({},i,{el:c});l.push(new Ot(f))}),l}const r=this;r.__swiper__=!0,r.support=ml(),r.device=gl({userAgent:i.userAgent}),r.browser=_l(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],i.modules&&Array.isArray(i.modules)&&r.modules.push(...i.modules);const a={};r.modules.forEach(l=>{l({params:i,swiper:r,extendParams:Tg(i,a),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})});const o=Dt({},Do,a);return r.params=Dt({},o,pr,i),r.originalParams=Dt({},r.params),r.passedParams=Dt({},i),r.params&&r.params.on&&Object.keys(r.params.on).forEach(l=>{r.on(l,r.params.on[l])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),Object.assign(r,{enabled:r.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return r.params.direction==="horizontal"},isVertical(){return r.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:i}=this,s=jt(t,`.${i.slideClass}, swiper-slide`),r=ys(s[0]);return ys(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const e=this,{slidesEl:t,params:i}=e;e.slides=jt(t,`.${i.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const i=this;e=Math.min(Math.max(e,0),1);const s=i.minTranslate(),a=(i.maxTranslate()-s)*e+s;i.translateTo(a,typeof t>"u"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(i=>{const s=e.getSlideClasses(i);t.push({slideEl:i,classNames:s}),e.emit("_slideClass",i,s)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const i=this,{params:s,slides:r,slidesGrid:a,slidesSizesGrid:o,size:l,activeIndex:c}=i;let f=1;if(typeof s.slidesPerView=="number")return s.slidesPerView;if(s.centeredSlides){let u=r[c]?Math.ceil(r[c].swiperSlideSize):0,p;for(let h=c+1;h<r.length;h+=1)r[h]&&!p&&(u+=Math.ceil(r[h].swiperSlideSize),f+=1,u>l&&(p=!0));for(let h=c-1;h>=0;h-=1)r[h]&&!p&&(u+=r[h].swiperSlideSize,f+=1,u>l&&(p=!0))}else if(e==="current")for(let u=c+1;u<r.length;u+=1)(t?a[u]+o[u]-a[c]<l:a[u]-a[c]<l)&&(f+=1);else for(let u=c-1;u>=0;u-=1)a[c]-a[u]<l&&(f+=1);return f}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&_s(e,a)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function s(){const a=e.rtlTranslate?e.translate*-1:e.translate,o=Math.min(Math.max(a,e.maxTranslate()),e.minTranslate());e.setTranslate(o),e.updateActiveIndex(),e.updateSlidesClasses()}let r;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)s(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){const a=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;r=e.slideTo(a.length-1,0,!1,!0)}else r=e.slideTo(e.activeIndex,0,!1,!0);r||s()}i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const i=this,s=i.params.direction;return e||(e=s==="horizontal"?"vertical":"horizontal"),e===s||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${s}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(r=>{e==="vertical"?r.style.width="":r.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let i=e||t.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const s=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(s()):jt(i,s())[0];return!a&&t.params.createElements&&(a=Ii("div",t.params.wrapperClass),i.append(a),jt(i,`.${t.params.slideClass}`).forEach(o=>{a.append(o)})),Object.assign(t,{el:i,wrapperEl:a,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:a,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||En(i,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||En(i,"direction")==="rtl"),wrongRTL:En(a,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const s=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),s.forEach(r=>{r.complete?_s(t,r):r.addEventListener("load",a=>{_s(t,a.target)})}),aa(t),t.initialized=!0,aa(t),t.emit("init"),t.emit("afterInit"),t}destroy(e=!0,t=!0){const i=this,{params:s,el:r,wrapperEl:a,slides:o}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),r&&typeof r!="string"&&r.removeAttribute("style"),a&&a.removeAttribute("style"),o&&o.length&&o.forEach(l=>{l.classList.remove(s.slideVisibleClass,s.slideFullyVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(l=>{i.off(l)}),e!==!1&&(i.el&&typeof i.el!="string"&&(i.el.swiper=null),am(i)),i.destroyed=!0),null}static extendDefaults(e){Dt(pr,e)}static get extendedDefaults(){return pr}static get defaults(){return Do}static installModule(e){Ot.prototype.__modules__||(Ot.prototype.__modules__=[]);const t=Ot.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>Ot.installModule(t)),Ot):(Ot.installModule(e),Ot)}}Object.keys(hr).forEach(n=>{Object.keys(hr[n]).forEach(e=>{Ot.prototype[e]=hr[n][e]})});Ot.use([xm,Sm]);function bg({swiper:n,extendParams:e,on:t,emit:i}){const s=hn(),r=mt();n.keyboard={enabled:!1},e({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function a(c){if(!n.enabled)return;const{rtlTranslate:f}=n;let u=c;u.originalEvent&&(u=u.originalEvent);const p=u.keyCode||u.charCode,h=n.params.keyboard.pageUpDown,g=h&&p===33,v=h&&p===34,m=p===37,d=p===39,_=p===38,S=p===40;if(!n.allowSlideNext&&(n.isHorizontal()&&d||n.isVertical()&&S||v)||!n.allowSlidePrev&&(n.isHorizontal()&&m||n.isVertical()&&_||g))return!1;if(!(u.shiftKey||u.altKey||u.ctrlKey||u.metaKey)&&!(s.activeElement&&(s.activeElement.isContentEditable||s.activeElement.nodeName&&(s.activeElement.nodeName.toLowerCase()==="input"||s.activeElement.nodeName.toLowerCase()==="textarea")))){if(n.params.keyboard.onlyInViewport&&(g||v||m||d||_||S)){let E=!1;if(Ts(n.el,`.${n.params.slideClass}, swiper-slide`).length>0&&Ts(n.el,`.${n.params.slideActiveClass}`).length===0)return;const b=n.el,C=b.clientWidth,P=b.clientHeight,w=r.innerWidth,y=r.innerHeight,x=fm(b);f&&(x.left-=b.scrollLeft);const A=[[x.left,x.top],[x.left+C,x.top],[x.left,x.top+P],[x.left+C,x.top+P]];for(let D=0;D<A.length;D+=1){const U=A[D];if(U[0]>=0&&U[0]<=w&&U[1]>=0&&U[1]<=y){if(U[0]===0&&U[1]===0)continue;E=!0}}if(!E)return}n.isHorizontal()?((g||v||m||d)&&(u.preventDefault?u.preventDefault():u.returnValue=!1),((v||d)&&!f||(g||m)&&f)&&n.slideNext(),((g||m)&&!f||(v||d)&&f)&&n.slidePrev()):((g||v||_||S)&&(u.preventDefault?u.preventDefault():u.returnValue=!1),(v||S)&&n.slideNext(),(g||_)&&n.slidePrev()),i("keyPress",p)}}function o(){n.keyboard.enabled||(s.addEventListener("keydown",a),n.keyboard.enabled=!0)}function l(){n.keyboard.enabled&&(s.removeEventListener("keydown",a),n.keyboard.enabled=!1)}t("init",()=>{n.params.keyboard.enabled&&o()}),t("destroy",()=>{n.keyboard.enabled&&l()}),Object.assign(n.keyboard,{enable:o,disable:l})}function Ag({swiper:n,extendParams:e,on:t,emit:i}){const s=mt();e({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),n.mousewheel={enabled:!1};let r,a=on(),o;const l=[];function c(_){let C=0,P=0,w=0,y=0;return"detail"in _&&(P=_.detail),"wheelDelta"in _&&(P=-_.wheelDelta/120),"wheelDeltaY"in _&&(P=-_.wheelDeltaY/120),"wheelDeltaX"in _&&(C=-_.wheelDeltaX/120),"axis"in _&&_.axis===_.HORIZONTAL_AXIS&&(C=P,P=0),w=C*10,y=P*10,"deltaY"in _&&(y=_.deltaY),"deltaX"in _&&(w=_.deltaX),_.shiftKey&&!w&&(w=y,y=0),(w||y)&&_.deltaMode&&(_.deltaMode===1?(w*=40,y*=40):(w*=800,y*=800)),w&&!C&&(C=w<1?-1:1),y&&!P&&(P=y<1?-1:1),{spinX:C,spinY:P,pixelX:w,pixelY:y}}function f(){n.enabled&&(n.mouseEntered=!0)}function u(){n.enabled&&(n.mouseEntered=!1)}function p(_){return n.params.mousewheel.thresholdDelta&&_.delta<n.params.mousewheel.thresholdDelta||n.params.mousewheel.thresholdTime&&on()-a<n.params.mousewheel.thresholdTime?!1:_.delta>=6&&on()-a<60?!0:(_.direction<0?(!n.isEnd||n.params.loop)&&!n.animating&&(n.slideNext(),i("scroll",_.raw)):(!n.isBeginning||n.params.loop)&&!n.animating&&(n.slidePrev(),i("scroll",_.raw)),a=new s.Date().getTime(),!1)}function h(_){const S=n.params.mousewheel;if(_.direction<0){if(n.isEnd&&!n.params.loop&&S.releaseOnEdges)return!0}else if(n.isBeginning&&!n.params.loop&&S.releaseOnEdges)return!0;return!1}function g(_){let S=_,E=!0;if(!n.enabled||_.target.closest(`.${n.params.mousewheel.noMousewheelClass}`))return;const b=n.params.mousewheel;n.params.cssMode&&S.preventDefault();let C=n.el;n.params.mousewheel.eventsTarget!=="container"&&(C=document.querySelector(n.params.mousewheel.eventsTarget));const P=C&&C.contains(S.target);if(!n.mouseEntered&&!P&&!b.releaseOnEdges)return!0;S.originalEvent&&(S=S.originalEvent);let w=0;const y=n.rtlTranslate?-1:1,x=c(S);if(b.forceToAxis)if(n.isHorizontal())if(Math.abs(x.pixelX)>Math.abs(x.pixelY))w=-x.pixelX*y;else return!0;else if(Math.abs(x.pixelY)>Math.abs(x.pixelX))w=-x.pixelY;else return!0;else w=Math.abs(x.pixelX)>Math.abs(x.pixelY)?-x.pixelX*y:-x.pixelY;if(w===0)return!0;b.invert&&(w=-w);let A=n.getTranslate()+w*b.sensitivity;if(A>=n.minTranslate()&&(A=n.minTranslate()),A<=n.maxTranslate()&&(A=n.maxTranslate()),E=n.params.loop?!0:!(A===n.minTranslate()||A===n.maxTranslate()),E&&n.params.nested&&S.stopPropagation(),!n.params.freeMode||!n.params.freeMode.enabled){const D={time:on(),delta:Math.abs(w),direction:Math.sign(w),raw:_};l.length>=2&&l.shift();const U=l.length?l[l.length-1]:void 0;if(l.push(D),U?(D.direction!==U.direction||D.delta>U.delta||D.time>U.time+150)&&p(D):p(D),h(D))return!0}else{const D={time:on(),delta:Math.abs(w),direction:Math.sign(w)},U=o&&D.time<o.time+500&&D.delta<=o.delta&&D.direction===o.direction;if(!U){o=void 0;let z=n.getTranslate()+w*b.sensitivity;const V=n.isBeginning,W=n.isEnd;if(z>=n.minTranslate()&&(z=n.minTranslate()),z<=n.maxTranslate()&&(z=n.maxTranslate()),n.setTransition(0),n.setTranslate(z),n.updateProgress(),n.updateActiveIndex(),n.updateSlidesClasses(),(!V&&n.isBeginning||!W&&n.isEnd)&&n.updateSlidesClasses(),n.params.loop&&n.loopFix({direction:D.direction<0?"next":"prev",byMousewheel:!0}),n.params.freeMode.sticky){clearTimeout(r),r=void 0,l.length>=15&&l.shift();const j=l.length?l[l.length-1]:void 0,O=l[0];if(l.push(D),j&&(D.delta>j.delta||D.direction!==j.direction))l.splice(0);else if(l.length>=15&&D.time-O.time<500&&O.delta-D.delta>=1&&D.delta<=6){const J=w>0?.8:.2;o=D,l.splice(0),r=Ms(()=>{n.destroyed||!n.params||n.slideToClosest(n.params.speed,!0,void 0,J)},0)}r||(r=Ms(()=>{if(n.destroyed||!n.params)return;const J=.5;o=D,l.splice(0),n.slideToClosest(n.params.speed,!0,void 0,J)},500))}if(U||i("scroll",S),n.params.autoplay&&n.params.autoplay.disableOnInteraction&&n.autoplay.stop(),b.releaseOnEdges&&(z===n.minTranslate()||z===n.maxTranslate()))return!0}}return S.preventDefault?S.preventDefault():S.returnValue=!1,!1}function v(_){let S=n.el;n.params.mousewheel.eventsTarget!=="container"&&(S=document.querySelector(n.params.mousewheel.eventsTarget)),S[_]("mouseenter",f),S[_]("mouseleave",u),S[_]("wheel",g)}function m(){return n.params.cssMode?(n.wrapperEl.removeEventListener("wheel",g),!0):n.mousewheel.enabled?!1:(v("addEventListener"),n.mousewheel.enabled=!0,!0)}function d(){return n.params.cssMode?(n.wrapperEl.addEventListener(event,g),!0):n.mousewheel.enabled?(v("removeEventListener"),n.mousewheel.enabled=!1,!0):!1}t("init",()=>{!n.params.mousewheel.enabled&&n.params.cssMode&&d(),n.params.mousewheel.enabled&&m()}),t("destroy",()=>{n.params.cssMode&&m(),n.mousewheel.enabled&&d()}),Object.assign(n.mousewheel,{enable:m,disable:d})}function Sl(n,e,t,i){return n.params.createElements&&Object.keys(i).forEach(s=>{if(!t[s]&&t.auto===!0){let r=jt(n.el,`.${i[s]}`)[0];r||(r=Ii("div",i[s]),r.className=i[s],n.el.append(r)),t[s]=r,e[s]=r}}),t}const wg='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function Cg({swiper:n,extendParams:e,on:t,emit:i}){e({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),n.navigation={nextEl:null,prevEl:null};function s(h){let g;return h&&typeof h=="string"&&n.isElement&&(g=n.el.querySelector(h)||n.hostEl.querySelector(h),g)?g:(h&&(typeof h=="string"&&(g=[...document.querySelectorAll(h)]),n.params.uniqueNavElements&&typeof h=="string"&&g&&g.length>1&&n.el.querySelectorAll(h).length===1?g=n.el.querySelector(h):g&&g.length===1&&(g=g[0])),h&&!g?h:g)}function r(h,g){const v=n.params.navigation;h=pt(h),h.forEach(m=>{m&&(m.classList[g?"add":"remove"](...v.disabledClass.split(" ")),m.tagName==="BUTTON"&&(m.disabled=g),n.params.watchOverflow&&n.enabled&&m.classList[n.isLocked?"add":"remove"](v.lockClass))})}function a(){const{nextEl:h,prevEl:g}=n.navigation;if(n.params.loop){r(g,!1),r(h,!1);return}r(g,n.isBeginning&&!n.params.rewind),r(h,n.isEnd&&!n.params.rewind)}function o(h){h.preventDefault(),!(n.isBeginning&&!n.params.loop&&!n.params.rewind)&&(n.slidePrev(),i("navigationPrev"))}function l(h){h.preventDefault(),!(n.isEnd&&!n.params.loop&&!n.params.rewind)&&(n.slideNext(),i("navigationNext"))}function c(){const h=n.params.navigation;if(n.params.navigation=Sl(n,n.originalParams.navigation,n.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(h.nextEl||h.prevEl))return;let g=s(h.nextEl),v=s(h.prevEl);Object.assign(n.navigation,{nextEl:g,prevEl:v}),g=pt(g),v=pt(v);const m=(d,_)=>{if(d){if(h.addIcons&&d.matches(".swiper-button-next,.swiper-button-prev")&&!d.querySelector("svg")){const S=document.createElement("div");ra(S,wg),d.appendChild(S.querySelector("svg")),S.remove()}d.addEventListener("click",_==="next"?l:o)}!n.enabled&&d&&d.classList.add(...h.lockClass.split(" "))};g.forEach(d=>m(d,"next")),v.forEach(d=>m(d,"prev"))}function f(){let{nextEl:h,prevEl:g}=n.navigation;h=pt(h),g=pt(g);const v=(m,d)=>{m.removeEventListener("click",d==="next"?l:o),m.classList.remove(...n.params.navigation.disabledClass.split(" "))};h.forEach(m=>v(m,"next")),g.forEach(m=>v(m,"prev"))}t("init",()=>{n.params.navigation.enabled===!1?p():(c(),a())}),t("toEdge fromEdge lock unlock",()=>{a()}),t("destroy",()=>{f()}),t("enable disable",()=>{let{nextEl:h,prevEl:g}=n.navigation;if(h=pt(h),g=pt(g),n.enabled){a();return}[...h,...g].filter(v=>!!v).forEach(v=>v.classList.add(n.params.navigation.lockClass))}),t("click",(h,g)=>{let{nextEl:v,prevEl:m}=n.navigation;v=pt(v),m=pt(m);const d=g.target;let _=m.includes(d)||v.includes(d);if(n.isElement&&!_){const S=g.path||g.composedPath&&g.composedPath();S&&(_=S.find(E=>v.includes(E)||m.includes(E)))}if(n.params.navigation.hideOnClick&&!_){if(n.pagination&&n.params.pagination&&n.params.pagination.clickable&&(n.pagination.el===d||n.pagination.el.contains(d)))return;let S;v.length?S=v[0].classList.contains(n.params.navigation.hiddenClass):m.length&&(S=m[0].classList.contains(n.params.navigation.hiddenClass)),i(S===!0?"navigationShow":"navigationHide"),[...v,...m].filter(E=>!!E).forEach(E=>E.classList.toggle(n.params.navigation.hiddenClass))}});const u=()=>{n.el.classList.remove(...n.params.navigation.navigationDisabledClass.split(" ")),c(),a()},p=()=>{n.el.classList.add(...n.params.navigation.navigationDisabledClass.split(" ")),f()};Object.assign(n.navigation,{enable:u,disable:p,update:a,init:c,destroy:f})}function Ti(n=""){return`.${n.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function Rg({swiper:n,extendParams:e,on:t,emit:i}){const s="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:d=>d,formatFractionTotal:d=>d,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),n.pagination={el:null,bullets:[]};let r,a=0;function o(){return!n.params.pagination.el||!n.pagination.el||Array.isArray(n.pagination.el)&&n.pagination.el.length===0}function l(d,_){const{bulletActiveClass:S}=n.params.pagination;d&&(d=d[`${_==="prev"?"previous":"next"}ElementSibling`],d&&(d.classList.add(`${S}-${_}`),d=d[`${_==="prev"?"previous":"next"}ElementSibling`],d&&d.classList.add(`${S}-${_}-${_}`)))}function c(d,_,S){if(d=d%S,_=_%S,_===d+1)return"next";if(_===d-1)return"previous"}function f(d){const _=d.target.closest(Ti(n.params.pagination.bulletClass));if(!_)return;d.preventDefault();const S=ys(_)*n.params.slidesPerGroup;if(n.params.loop){if(n.realIndex===S)return;const E=c(n.realIndex,S,n.slides.length);E==="next"?n.slideNext():E==="previous"?n.slidePrev():n.slideToLoop(S)}else n.slideTo(S)}function u(){const d=n.rtl,_=n.params.pagination;if(o())return;let S=n.pagination.el;S=pt(S);let E,b;const C=n.virtual&&n.params.virtual.enabled?n.virtual.slides.length:n.slides.length,P=n.params.loop?Math.ceil(C/n.params.slidesPerGroup):n.snapGrid.length;if(n.params.loop?(b=n.previousRealIndex||0,E=n.params.slidesPerGroup>1?Math.floor(n.realIndex/n.params.slidesPerGroup):n.realIndex):typeof n.snapIndex<"u"?(E=n.snapIndex,b=n.previousSnapIndex):(b=n.previousIndex||0,E=n.activeIndex||0),_.type==="bullets"&&n.pagination.bullets&&n.pagination.bullets.length>0){const w=n.pagination.bullets;let y,x,A;if(_.dynamicBullets&&(r=sa(w[0],n.isHorizontal()?"width":"height"),S.forEach(D=>{D.style[n.isHorizontal()?"width":"height"]=`${r*(_.dynamicMainBullets+4)}px`}),_.dynamicMainBullets>1&&b!==void 0&&(a+=E-(b||0),a>_.dynamicMainBullets-1?a=_.dynamicMainBullets-1:a<0&&(a=0)),y=Math.max(E-a,0),x=y+(Math.min(w.length,_.dynamicMainBullets)-1),A=(x+y)/2),w.forEach(D=>{const U=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(z=>`${_.bulletActiveClass}${z}`)].map(z=>typeof z=="string"&&z.includes(" ")?z.split(" "):z).flat();D.classList.remove(...U)}),S.length>1)w.forEach(D=>{const U=ys(D);U===E?D.classList.add(..._.bulletActiveClass.split(" ")):n.isElement&&D.setAttribute("part","bullet"),_.dynamicBullets&&(U>=y&&U<=x&&D.classList.add(...`${_.bulletActiveClass}-main`.split(" ")),U===y&&l(D,"prev"),U===x&&l(D,"next"))});else{const D=w[E];if(D&&D.classList.add(..._.bulletActiveClass.split(" ")),n.isElement&&w.forEach((U,z)=>{U.setAttribute("part",z===E?"bullet-active":"bullet")}),_.dynamicBullets){const U=w[y],z=w[x];for(let V=y;V<=x;V+=1)w[V]&&w[V].classList.add(...`${_.bulletActiveClass}-main`.split(" "));l(U,"prev"),l(z,"next")}}if(_.dynamicBullets){const D=Math.min(w.length,_.dynamicMainBullets+4),U=(r*D-r)/2-A*r,z=d?"right":"left";w.forEach(V=>{V.style[n.isHorizontal()?z:"top"]=`${U}px`})}}S.forEach((w,y)=>{if(_.type==="fraction"&&(w.querySelectorAll(Ti(_.currentClass)).forEach(x=>{x.textContent=_.formatFractionCurrent(E+1)}),w.querySelectorAll(Ti(_.totalClass)).forEach(x=>{x.textContent=_.formatFractionTotal(P)})),_.type==="progressbar"){let x;_.progressbarOpposite?x=n.isHorizontal()?"vertical":"horizontal":x=n.isHorizontal()?"horizontal":"vertical";const A=(E+1)/P;let D=1,U=1;x==="horizontal"?D=A:U=A,w.querySelectorAll(Ti(_.progressbarFillClass)).forEach(z=>{z.style.transform=`translate3d(0,0,0) scaleX(${D}) scaleY(${U})`,z.style.transitionDuration=`${n.params.speed}ms`})}_.type==="custom"&&_.renderCustom?(ra(w,_.renderCustom(n,E+1,P)),y===0&&i("paginationRender",w)):(y===0&&i("paginationRender",w),i("paginationUpdate",w)),n.params.watchOverflow&&n.enabled&&w.classList[n.isLocked?"add":"remove"](_.lockClass)})}function p(){const d=n.params.pagination;if(o())return;const _=n.virtual&&n.params.virtual.enabled?n.virtual.slides.length:n.grid&&n.params.grid.rows>1?n.slides.length/Math.ceil(n.params.grid.rows):n.slides.length;let S=n.pagination.el;S=pt(S);let E="";if(d.type==="bullets"){let b=n.params.loop?Math.ceil(_/n.params.slidesPerGroup):n.snapGrid.length;n.params.freeMode&&n.params.freeMode.enabled&&b>_&&(b=_);for(let C=0;C<b;C+=1)d.renderBullet?E+=d.renderBullet.call(n,C,d.bulletClass):E+=`<${d.bulletElement} ${n.isElement?'part="bullet"':""} class="${d.bulletClass}"></${d.bulletElement}>`}d.type==="fraction"&&(d.renderFraction?E=d.renderFraction.call(n,d.currentClass,d.totalClass):E=`<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`),d.type==="progressbar"&&(d.renderProgressbar?E=d.renderProgressbar.call(n,d.progressbarFillClass):E=`<span class="${d.progressbarFillClass}"></span>`),n.pagination.bullets=[],S.forEach(b=>{d.type!=="custom"&&ra(b,E||""),d.type==="bullets"&&n.pagination.bullets.push(...b.querySelectorAll(Ti(d.bulletClass)))}),d.type!=="custom"&&i("paginationRender",S[0])}function h(){n.params.pagination=Sl(n,n.originalParams.pagination,n.params.pagination,{el:"swiper-pagination"});const d=n.params.pagination;if(!d.el)return;let _;typeof d.el=="string"&&n.isElement&&(_=n.el.querySelector(d.el)),!_&&typeof d.el=="string"&&(_=[...document.querySelectorAll(d.el)]),_||(_=d.el),!(!_||_.length===0)&&(n.params.uniqueNavElements&&typeof d.el=="string"&&Array.isArray(_)&&_.length>1&&(_=[...n.el.querySelectorAll(d.el)],_.length>1&&(_=_.find(S=>Ts(S,".swiper")[0]===n.el))),Array.isArray(_)&&_.length===1&&(_=_[0]),Object.assign(n.pagination,{el:_}),_=pt(_),_.forEach(S=>{d.type==="bullets"&&d.clickable&&S.classList.add(...(d.clickableClass||"").split(" ")),S.classList.add(d.modifierClass+d.type),S.classList.add(n.isHorizontal()?d.horizontalClass:d.verticalClass),d.type==="bullets"&&d.dynamicBullets&&(S.classList.add(`${d.modifierClass}${d.type}-dynamic`),a=0,d.dynamicMainBullets<1&&(d.dynamicMainBullets=1)),d.type==="progressbar"&&d.progressbarOpposite&&S.classList.add(d.progressbarOppositeClass),d.clickable&&S.addEventListener("click",f),n.enabled||S.classList.add(d.lockClass)}))}function g(){const d=n.params.pagination;if(o())return;let _=n.pagination.el;_&&(_=pt(_),_.forEach(S=>{S.classList.remove(d.hiddenClass),S.classList.remove(d.modifierClass+d.type),S.classList.remove(n.isHorizontal()?d.horizontalClass:d.verticalClass),d.clickable&&(S.classList.remove(...(d.clickableClass||"").split(" ")),S.removeEventListener("click",f))})),n.pagination.bullets&&n.pagination.bullets.forEach(S=>S.classList.remove(...d.bulletActiveClass.split(" ")))}t("changeDirection",()=>{if(!n.pagination||!n.pagination.el)return;const d=n.params.pagination;let{el:_}=n.pagination;_=pt(_),_.forEach(S=>{S.classList.remove(d.horizontalClass,d.verticalClass),S.classList.add(n.isHorizontal()?d.horizontalClass:d.verticalClass)})}),t("init",()=>{n.params.pagination.enabled===!1?m():(h(),p(),u())}),t("activeIndexChange",()=>{typeof n.snapIndex>"u"&&u()}),t("snapIndexChange",()=>{u()}),t("snapGridLengthChange",()=>{p(),u()}),t("destroy",()=>{g()}),t("enable disable",()=>{let{el:d}=n.pagination;d&&(d=pt(d),d.forEach(_=>_.classList[n.enabled?"remove":"add"](n.params.pagination.lockClass)))}),t("lock unlock",()=>{u()}),t("click",(d,_)=>{const S=_.target,E=pt(n.pagination.el);if(n.params.pagination.el&&n.params.pagination.hideOnClick&&E&&E.length>0&&!S.classList.contains(n.params.pagination.bulletClass)){if(n.navigation&&(n.navigation.nextEl&&S===n.navigation.nextEl||n.navigation.prevEl&&S===n.navigation.prevEl))return;const b=E[0].classList.contains(n.params.pagination.hiddenClass);i(b===!0?"paginationShow":"paginationHide"),E.forEach(C=>C.classList.toggle(n.params.pagination.hiddenClass))}});const v=()=>{n.el.classList.remove(n.params.pagination.paginationDisabledClass);let{el:d}=n.pagination;d&&(d=pt(d),d.forEach(_=>_.classList.remove(n.params.pagination.paginationDisabledClass))),h(),p(),u()},m=()=>{n.el.classList.add(n.params.pagination.paginationDisabledClass);let{el:d}=n.pagination;d&&(d=pt(d),d.forEach(_=>_.classList.add(n.params.pagination.paginationDisabledClass))),g()};Object.assign(n.pagination,{enable:v,disable:m,render:p,update:u,init:h,destroy:g})}function Pg(n){const{effect:e,swiper:t,on:i,setTranslate:s,setTransition:r,overwriteParams:a,perspective:o,recreateShadows:l,getEffectParams:c}=n;i("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),o&&o()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const u=a?a():{};Object.assign(t.params,u),Object.assign(t.originalParams,u)}),i("setTranslate _virtualUpdated",()=>{t.params.effect===e&&s()}),i("setTransition",(u,p)=>{t.params.effect===e&&r(p)}),i("transitionEnd",()=>{if(t.params.effect===e&&l){if(!c||!c().slideShadows)return;t.slides.forEach(u=>{u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(p=>p.remove())}),l()}});let f;i("virtualUpdate",()=>{t.params.effect===e&&(t.slides.length||(f=!0),requestAnimationFrame(()=>{f&&t.slides&&t.slides.length&&(s(),f=!1)}))})}function Lg(n,e){const t=Ma(e);return t!==e&&(t.style.backfaceVisibility="hidden",t.style["-webkit-backface-visibility"]="hidden"),t}function Io(n,e,t){const i=`swiper-slide-shadow${t?`-${t}`:""}${` swiper-slide-shadow-${n}`}`,s=Ma(e);let r=s.querySelector(`.${i.split(" ").join(".")}`);return r||(r=Ii("div",i.split(" ")),s.append(r)),r}function Dg({swiper:n,extendParams:e,on:t}){e({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),Pg({effect:"coverflow",swiper:n,on:t,setTranslate:()=>{const{width:r,height:a,slides:o,slidesSizesGrid:l}=n,c=n.params.coverflowEffect,f=n.isHorizontal(),u=n.translate,p=f?-u+r/2:-u+a/2,h=f?c.rotate:-c.rotate,g=c.depth,v=mm(n);for(let m=0,d=o.length;m<d;m+=1){const _=o[m],S=l[m],E=_.swiperSlideOffset,b=(p-E-S/2)/S,C=typeof c.modifier=="function"?c.modifier(b):b*c.modifier;let P=f?h*C:0,w=f?0:h*C,y=-g*Math.abs(C),x=c.stretch;typeof x=="string"&&x.indexOf("%")!==-1&&(x=parseFloat(c.stretch)/100*S);let A=f?0:x*C,D=f?x*C:0,U=1-(1-c.scale)*Math.abs(C);Math.abs(D)<.001&&(D=0),Math.abs(A)<.001&&(A=0),Math.abs(y)<.001&&(y=0),Math.abs(P)<.001&&(P=0),Math.abs(w)<.001&&(w=0),Math.abs(U)<.001&&(U=0);const z=`translate3d(${D}px,${A}px,${y}px)  rotateX(${v(w)}deg) rotateY(${v(P)}deg) scale(${U})`,V=Lg(c,_);if(V.style.transform=z,_.style.zIndex=-Math.abs(Math.round(C))+1,c.slideShadows){let W=f?_.querySelector(".swiper-slide-shadow-left"):_.querySelector(".swiper-slide-shadow-top"),j=f?_.querySelector(".swiper-slide-shadow-right"):_.querySelector(".swiper-slide-shadow-bottom");W||(W=Io("coverflow",_,f?"left":"top")),j||(j=Io("coverflow",_,f?"right":"bottom")),W&&(W.style.opacity=C>0?C:0),j&&(j.style.opacity=-C>0?-C:0)}}},setTransition:r=>{n.slides.map(o=>Ma(o)).forEach(o=>{o.style.transitionDuration=`${r}ms`,o.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(l=>{l.style.transitionDuration=`${r}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function Ig(){const n=new Ot(".swiper",{modules:[Cg,Rg,Dg,bg,Ag],centeredSlides:!0,slidesPerView:"1",loop:!0,speed:1e3,spaceBetween:100,direction:"vertical",keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0,forceToAxis:!0,sensitivity:1,releaseOnEdges:!1}}),e=t=>{const i=n.slides[t];if(!i)return;const s=i.querySelector(".card"),r=s.querySelector(".card-inner"),a=s.getAttribute("data-content");if(!a||r.hasChildNodes())return;const[o,l]=a.split("|");console.log(`Loading 3D content for slide ${t}:`,o,l),fl(r,o,l)};return e(n.activeIndex),e(n.activeIndex+1),n.on("slideChange",()=>{const t=n.activeIndex;e(t),e(t+1),console.log("🔄 Slide changée - Fermeture du menu et météo"),window.dispatchEvent(new CustomEvent("close-navigation")),window.dispatchEvent(new CustomEvent("close-weather"))}),n}function Ug(){const n=document.querySelector(".swiper-wrapper");if(!n)return;const t=Array.from(n.children).sort(()=>Math.random()-.5);n.innerHTML="",t.forEach(i=>n.appendChild(i)),oa.from(".swiper-slide",{opacity:0,y:30,stagger:.15,duration:.8,ease:"power2.out"})}const Ng="0676601509b2b365767956d89d8d68da",Fg="https://api.openweathermap.org/data/2.5/weather";let ds=!1;function Og(){console.log("🌤️ Initialisation de la meteo..."),Bg(),window.addEventListener("open-weather",n=>{const e=n.detail.ville;console.log("📍 Réception demande météo pour:",e),Uo(e),ds=!0}),document.addEventListener("click",n=>{if(n.target.classList.contains("location")){n.preventDefault();const e=n.target.textContent.trim();console.log("🔍 Clic sur localisation:",e),Uo(e),ds=!0}}),window.addEventListener("close-weather",()=>{ds&&(console.log("Fermeture automatique du widget meteo PAR changement de slide !"),Gg(),ds=!1)})}function Bg(){document.body.insertAdjacentHTML("beforeend",`
        <div id="weather-widget" class="weather-widget">
            <div class="weather-content">
                <!-- Localisation -->
                
                <!-- Calendrier -->
                <div class="weather-calendar">
                    <div class="calendar-nav">
                        <button class="calendar-prev" id="calendar-prev">&lt;</button>
                        <div class="calendar-header">
                            <span id="calendar-month-year">-- / --</span>
                        </div>
                        <button class="calendar-next" id="calendar-next">&gt;</button>
                    </div>
                    <div class="calendar-grid" id="calendar-grid">
                        <!-- Les jours seront générés ici -->
                    </div>

                <div class="weather-location" id="weather-location">--</div>
                </div>

                <!-- Météo -->
                <div class="weather-info">
                        <span id="calendar-day-name">---</span>
                    <div class="weather-icon" id="weather-icon">
                        <img src="" alt="weather icon" />
                    </div>
                    <div class="weather-minmax">
                        <span id="current-temp">°</span>
                        <span id="weather-max"></span>
                    </div>
                </div>
            </div>
        </div>
    `),console.log("✅ Widget météo créé dans le DOM")}function Uo(n){console.log("🔍 Recherche météo pour:",n);const e=`${Fg}?q=${n}&appid=${Ng}&units=metric&lang=fr`;console.log("📡 URL de requête:",e),fetch(e).then(t=>(console.log("✅ Réponse reçue:",t),t.json())).then(t=>{if(console.log("📦 Données météo:",t),t.cod&&t.cod!=200){alert(`Ville non trouvée: ${n}`);return}zg(t)}).catch(t=>{console.error("❌ Erreur:",t),alert("Impossible de récupérer la météo pour "+n)})}function zg(n){console.log("🎨 Affichage des données...");const e=n.name,t=n.sys.country,i=Math.round(n.main.temp),s=Math.round(n.main.temp_min),r=Math.round(n.main.temp_max),a=n.weather[0].icon,o=n.timezone;console.log("📍 Ville:",e,t),console.log("🌡️ Température:",i,"°C"),console.log("📉 Min:",s,"°C"),console.log("📈 Max:",r,"°C"),console.log("🖼️ Icône:",a),console.log("⏰ Timezone:",o);const l=new Date,c=l.getTime()+l.getTimezoneOffset()*6e4,f=new Date(c+o*1e3);document.getElementById("weather-location").textContent=`${e}, ${t}`,document.getElementById("weather-max").textContent=`${r}`,document.getElementById("current-temp").textContent=`${i}°`;const u=`https://openweathermap.org/img/wn/${a}@2x.png`;document.getElementById("weather-icon").querySelector("img").src=u,Hg(f),kg(),console.log("✅ Affichage terminé !")}function Hg(n){const e=["mon","tue","wen","thu","fri","sat","sun"],t=n.getMonth(),i=n.getFullYear(),s=n.getDate(),r=e[n.getDay()===0?6:n.getDay()-1];document.getElementById("calendar-month-year").textContent=`${t+1} / ${i}`,document.getElementById("calendar-day-name").textContent=r;const a=new Date(i,t,1).getDay(),o=new Date(i,t+1,0).getDate(),l=document.getElementById("calendar-grid");l.innerHTML="";const c=a===0?6:a-1;for(let f=0;f<c;f++){const u=document.createElement("div");u.className="calendar-day empty",l.appendChild(u)}for(let f=1;f<=o;f++){const u=document.createElement("div");u.className="calendar-day",u.textContent=f,f===s&&u.classList.add("today"),l.appendChild(u)}}function kg(){const n=document.getElementById("weather-widget");n.style.display="block",oa.fromTo(n,{opacity:0,y:-50,scale:.8},{opacity:1,y:0,scale:1,duration:.5,ease:"back.out(1.7)"})}function Gg(){const n=document.getElementById("weather-widget");oa.to(n,{opacity:0,y:-50,scale:.8,duration:.3,ease:"power2.in",onComplete:()=>{n.style.display="none"}})}document.querySelector("#app").innerHTML=`

  <header class="site-header">
    <h1 class="logo">wishyouwerehere<span>.world</span></h1>
    <nav id="main-nav" class="main-nav">
      <a class="nav-item" href="/WYWH/music.html"><span>.music</span></a>
      <a class="nav-item" href="/WYWH/photo.html"><span>.photo</span></a>
      <a class="nav-item" href="/WYWH/artists.html"><span>.artists</span></a>
      <a class="nav-item" href="/WYWH/shop.html"><span>.shop</span></a>
    </nav>
  </header>


<div class="swiper home-carroussel">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <div class="card" data-content="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB13.jpg | https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB14.jpg">
        <div class="card-inner"></div>
      </div>
       <h2 class="project-info">
        <a href="" class="artist-info">Antoine Bertoli</a>
        <p>-</p>
        <a href="" class="location">Kyoto, JP</a>
      </h2>
    </div>
    <div class="swiper-slide">
      <div class="card" data-content="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB.jpg|https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB2.jpg">
        <div class="card-inner"></div>
      </div>
      <h2 class="project-info">
        <a href="" class="artist-info">Antoine Bertoli</a>
        <p>-</p>
        <a href="" class="location">Paris, FR</a>
      </h2>
    </div>
    <div class="swiper-slide">
      <div class="card" data-content="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB3.jpg|https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB4.jpg">
        <div class="card-inner"></div>
      </div>
        <h2 class="project-info">
        <a href="" class="artist-info">Antoine Bertoli</a>
        <p>-</p>
        <a href="" class="location">Kyoto, JP</a>
      </h2>
    </div>
    <div class="swiper-slide">
      <div class="card" data-content="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB5.jpg|https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB6.jpg">
        <div class="card-inner"></div>
      </div>
            <h2 class="project-info">
        <a href="" class="artist-info">Antoine Bertoli</a>
        <p>-</p>
        <a href="" class="location">Kyoto, JP</a>
      </h2>
    </div>
    <div class="swiper-slide">
      <div class="card" data-content="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB7.jpg|https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB8.jpg">
        <div class="card-inner"></div>
      </div>
            <h2 class="project-info">
        <a href="" class="artist-info">Antoine Bertoli</a>
        <p>-</p>
        <a href="" class="location">Kyoto, JP</a>
      </h2>
    </div>
    <div class="swiper-slide">
      <div class="card" data-content="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB9.jpg|https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB10.jpg">
        <div class="card-inner"></div>
      </div>
       <h2 class="project-info">
        <a href="" class="artist-info">Antoine Bertoli</a>
        <p>-</p>
        <a href="" class="location">Kyoto, JP</a>
      <h2/>
    </div>
  </div>
</div>

  
  <div class="actu-lines">
    <div class="line line-1">ACTUALITY FROM THE CLOUDS</div>
    <div class="line line-2">Here is a special show everyone is waiting for</div>
    <div class="line line-3">For all televisions and broadcasters</div>
    <div class="line line-4">
      <div class ="short_line4">Ayo</div>
      <div class ="long_line4">Mandem my friend</div>
    </div>
    </div>
 <div class="audio-footer">
    <img  class="radio-toggle" id="radio-toggle" src="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/icons/radio-icons/radio%20wywh.svg" alt="Radio toggle" />
        <div class="custom-player"  id="custom-player">
          
          <div class="progress-container">
            <div class="scrolling-text">
              <div id="music-artist" class="music-artist"></div>
              <div id="track-title" class="track-title"></div>
              <div id="music-artist-clone" class="music-artist"></div>
              <div id="track-title-clone" class="track-title"></div>
              <div id="music-artist-clone2" class="music-artist"></div>
              <div id="track-title-clone2" class="track-title"></div>
            </div>
          </div>

          
        </div>
        <audio class="radio-player" id="radio-player"></audio>
  </div> 
`;wl();Cl();Ug();fl();Ig();Rl();Og();Pl();
