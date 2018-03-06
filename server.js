!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}([function(e,t){e.exports=require("graphql")},function(e,t){e.exports=require("mongoose")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(3);!function(e){e&&e.__esModule}(o);t.default=new r.GraphQLObjectType({name:"User",description:"User object",fields:function(){return{_id:{type:new r.GraphQLNonNull(r.GraphQLID)},id:{type:r.GraphQLString},userName:{type:new r.GraphQLNonNull(r.GraphQLString)},pwd:{type:new r.GraphQLNonNull(r.GraphQLString)},isActive:{type:r.GraphQLBoolean},category:{type:r.GraphQLString}}}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(2);!function(e){e&&e.__esModule}(o);t.default=new r.GraphQLObjectType({name:"Customer",description:"Customer object",fields:function(){return{_id:{type:new r.GraphQLNonNull(r.GraphQLID)},id:{type:r.GraphQLString},firstName:{type:new r.GraphQLNonNull(r.GraphQLString)},lastName:{type:new r.GraphQLNonNull(r.GraphQLString)},email:{type:r.GraphQLString},mobile:{type:r.GraphQLString}}}})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),u=r(o),i=n(7),a=(r(i),new u.default.Schema({id:{type:String,required:!0,unique:!0,index:!0,default:u.default.Types.ObjectId},userName:String,pwd:String,isActive:{type:Boolean,default:!0},category:String})),c=u.default.model("User",a);e.exports=c,e.exports.getListOfUsers=function(){return new Promise(function(e,t){c.find({}).exec(function(n,r){n?t(n):e(r)})})},e.exports.getUserById=function(e,t){var n=t.id;return new Promise(function(e,t){c.findOne({id:n}).exec(function(n,r){n?t(n):e(r)})})},e.exports.getUserByName=function(e,t){var n=t.name;return new Promise(function(e,t){c.findOne({name:n}).exec(function(n,r){n?t(n):e(r)})})},e.exports.getUserByPosition=function(e,t){var n=t.id;return new Promise(function(e,t){c.find({}).exec(function(r,o){r?t(r):e(o[n])})})},e.exports.addUser=function(e,t){var n=t.userName,r=t.pwd,o=t.isActive,u=t.category,i=new c({userName:n,pwd:r,isActive:o,category:u});return new Promise(function(e,t){i.save(function(n,r){n?t(n):e(r)})})},e.exports.updateUser=function(e,t){var n=t.id,r=t.name,o=t.email,u=t.tel,i={name:r,email:o,tel:u};return new Promise(function(e,t){c.findOneAndUpdate({id:n},{$set:i},{returnNewDocument:!0}).exec(function(n,r){n?t(n):e(r)})})}},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(d===setTimeout)return setTimeout(e,0);if((d===n||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(t){try{return d.call(null,e,0)}catch(t){return d.call(this,e,0)}}}function u(e){if(p===clearTimeout)return clearTimeout(e);if((p===r||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function i(){y&&f&&(y=!1,f.length?m=f.concat(m):h=-1,m.length&&a())}function a(){if(!y){var e=o(i);y=!0;for(var t=m.length;t;){for(f=m,m=[];++h<t;)f&&f[h].run();h=-1,t=m.length}f=null,y=!1,u(e)}}function c(e,t){this.fun=e,this.array=t}function s(){}var d,p,l=e.exports={};!function(){try{d="function"==typeof setTimeout?setTimeout:n}catch(e){d=n}try{p="function"==typeof clearTimeout?clearTimeout:r}catch(e){p=r}}();var f,m=[],y=!1,h=-1;l.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new c(e,t)),1!==m.length||y||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=s,l.addListener=s,l.once=s,l.off=s,l.removeListener=s,l.removeAllListeners=s,l.emit=s,l.prependListener=s,l.prependOnceListener=s,l.listeners=function(e){return[]},l.binding=function(e){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(e){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}},function(e,t,n){"use strict";(function(t){e.exports={port:t.env.PORT||8080,ip:t.env.IP||"127.0.0.1",db:{uri:t.env.MONGO_URI||"mongodb://revit:Egbdfxk8!@ds257848.mlab.com:57848/mydb",options:{user:t.env.MONGO_USERNAME||"revit",pass:t.env.MONGO_PASSWORD||"Egbdfxk8!"}}}}).call(t,n(5))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),u=r(o),i=n(4),a=(r(i),new u.default.Schema({id:{type:String,required:!0,unique:!0,index:!0,default:u.default.Types.ObjectId},firstName:String,lastName:String,email:String,mobile:String,user:{type:u.default.Schema.Types.ObjectId,ref:"user"}})),c=u.default.model("customer",a);e.exports=c,e.exports.addCustomer=function(e,t){var n=t.firstName,r=t.lastName,o=t.email,u=t.mobile,i=new c({firstName:n,lastName:r,email:o,mobile:u});return new Promise(function(e,t){i.save(function(n,r){n?t(n):e(r)})})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);new r.GraphQLEnumType({name:"productTypeEnum",values:{WOMEN:{value:0},MEN:{value:1}}});t.default=new r.GraphQLObjectType({name:"Product",description:"Product object",fields:function(){return{_id:{type:new r.GraphQLNonNull(r.GraphQLID)},id:{type:r.GraphQLString},name:{type:r.GraphQLString},price:{type:r.GraphQLFloat},discount:{type:r.GraphQLFloat},productType:{type:r.GraphQLString},description:{type:r.GraphQLString},rating:{type:r.GraphQLFloat},image:{type:r.GraphQLString}}}})},function(e,t,n){"use strict";var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r),u=new o.default.Schema({id:{type:String,required:!0,unique:!0,index:!0,default:o.default.Types.ObjectId},name:String,price:Number,discount:Number,productType:String,description:String,rating:Number,image:String}),i=o.default.model("product",u);e.exports=i,e.exports.getListOfProducts=function(){return new Promise(function(e,t){i.find({}).exec(function(n,r){n?t(n):e(r)})})},e.exports.getProductById=function(e,t){var n=t.id;return new Promise(function(e,t){i.findOne({id:n}).exec(function(n,r){n?t(n):e(r)})})},e.exports.getProductByName=function(e,t){var n=t.name;return new Promise(function(e,t){i.findOne({name:n}).exec(function(n,r){n?t(n):e(r)})})},e.exports.getProductByProductType=function(e,t){var n=t.productType;return new Promise(function(e,t){i.find({productType:n}).exec(function(n,r){n?t(n):e(r)})})},e.exports.addProduct=function(e,t){var n=t.name,r=t.price,o=t.discount,u=t.productType,a=t.description,c=t.image,s=new i({name:n,price:r,discount:o,productType:u,description:a,image:c});return new Promise(function(e,t){s.save(function(n,r){n?t(n):e(r)})})},e.exports.updateProduct=function(e,t){var n=t.id,r=t.name,o=t.price,u=t.discount,a=t.productType,c=(t.description,t.image),s={name:r,price:o,discount:u,productType:a,description:decription,image:c};return new Promise(function(e,t){i.findOneAndUpdate({id:n},{$set:s},{returnNewDocument:!0}).exec(function(n,r){n?t(n):e(r)})})}},function(e,t,n){e.exports=n(11)},function(e,t,n){"use strict";(function(r){var o=n(12)();o.listen(r.env.PORT||8080),t=e.exports=o}).call(t,n(5))},function(e,t,n){"use strict";function r(e){e.use(function(e,t,n){t.setHeader("Access-Control-Allow-Origin","https://geranium.herokuapp.com/"),t.setHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE"),t.setHeader("Access-Control-Allow-Headers","X-Requested-With,content-type"),t.setHeader("Access-Control-Allow-Credentials",!0),n()}),e.use(c({filter:function(e,t){return/json|text|javascript|css/.test(t.getHeader("Content-Type"))},level:3,threshold:512})),e.use(s.urlencoded({extended:!0,limit:2*i.contentMaxLength})),e.use(s.json())}function o(e){e.use("/graphql",d(),u({schema:p,graphiql:!1})),e.use("/graphiql",u({schema:p,graphiql:!0}))}var u=n(13),i=n(6),a=n(14),c=(n(1),n(15)),s=n(16),d=n(17),p=n(18);n(26)();e.exports=function(){var e=a();return r(e),o(e),e}},function(e,t){e.exports=require("express-graphql")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("cors")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),u=n(19),i=r(u),a=n(22),c=r(a),s=new o.GraphQLSchema({query:i.default,mutation:c.default});e.exports=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),u=n(20),i=r(u),a=n(21),c=r(a),s=new o.GraphQLObjectType({name:"Query",description:"Realize Root Query",fields:function(){return{user:i.default.user,users:i.default.users,userId:i.default.userId,userByName:i.default.userByName,product:c.default.product,products:c.default.products,productId:c.default.productId,productByName:c.default.productByName,productByProductType:c.default.productByProductType}}});e.exports=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),u=n(2),i=r(u),a=n(4),c=r(a);t.default={users:{type:new o.GraphQLList(i.default),resolve:c.default.getListOfUsers},user:{type:i.default,args:{id:{type:o.GraphQLID}},resolve:c.default.getUserByPosition},userId:{type:i.default,args:{id:{type:o.GraphQLID}},resolve:c.default.getUserById},userByName:{type:i.default,args:{name:{type:o.GraphQLString}},resolve:c.default.getUserByName}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),u=n(8),i=r(u),a=n(9),c=r(a);t.default={products:{type:new o.GraphQLList(i.default),resolve:c.default.getListOfProducts},product:{type:i.default,args:{id:{type:o.GraphQLID}},resolve:c.default.getProductById},productId:{type:i.default,args:{id:{type:o.GraphQLID}},resolve:c.default.getProductById},productByName:{type:i.default,args:{name:{type:o.GraphQLString}},resolve:c.default.getProductByName},productByProductType:{type:new o.GraphQLList(i.default),args:{productType:{type:o.GraphQLString}},resolve:c.default.getProductByProductType}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),u=n(23),i=r(u),a=n(24),c=r(a),s=n(25),d=r(s),p=new o.GraphQLObjectType({name:"Mutation",description:"Realize Root Mutations",fields:function(){return{addCustomer:i.default.addCustomer,addUser:c.default.addUser,updateUser:c.default.updateUser,addProduct:d.default.addProduct,updateProduct:d.default.updateProduct}}});e.exports=p},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),u=n(3),i=r(u),a=n(7),c=r(a);t.default={addCustomer:{type:i.default,args:{firstName:{name:"firstName",type:new o.GraphQLNonNull(o.GraphQLString)},lastName:{name:"lastName",type:new o.GraphQLNonNull(o.GraphQLString)},email:{name:"email",type:new o.GraphQLNonNull(o.GraphQLString)},mobile:{name:"mobile",type:new o.GraphQLNonNull(o.GraphQLString)}},resolve:c.default.addCustomer}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),u=n(2),i=r(u),a=n(4),c=r(a),s=n(3);r(s);t.default={addUser:{type:i.default,args:{userName:{name:"lastName",type:new o.GraphQLNonNull(o.GraphQLString)},pwd:{name:"pwd",type:new o.GraphQLNonNull(o.GraphQLString)},isActive:{name:"isActive",type:o.GraphQLBoolean},category:{name:"category",type:new o.GraphQLNonNull(o.GraphQLString)}},resolve:c.default.addUser},updateUser:{type:i.default,args:{id:{type:o.GraphQLID},name:{name:"name",type:new o.GraphQLNonNull(o.GraphQLString)},email:{name:"email",type:new o.GraphQLNonNull(o.GraphQLString)},tel:{name:"tel",type:new o.GraphQLNonNull(o.GraphQLString)}},resolve:c.default.updateUser}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),u=n(8),i=r(u),a=n(9),c=r(a);t.default={addProduct:{type:i.default,args:{name:{name:"name",type:new o.GraphQLNonNull(o.GraphQLString)},price:{name:"price",type:new o.GraphQLNonNull(o.GraphQLString)},discount:{name:"discount",type:new o.GraphQLNonNull(o.GraphQLString)},productType:{name:"productType",type:new o.GraphQLNonNull(o.GraphQLString)},description:{name:"description",type:new o.GraphQLNonNull(o.GraphQLString)},image:{name:"image",type:new o.GraphQLNonNull(o.GraphQLString)}},resolve:c.default.addProduct},updateProduct:{type:i.default,args:{id:{type:o.GraphQLID},name:{name:"name",type:new o.GraphQLNonNull(o.GraphQLString)},price:{name:"price",type:new o.GraphQLNonNull(o.GraphQLString)},discount:{name:"discount",type:new o.GraphQLNonNull(o.GraphQLString)},description:{name:"description",type:new o.GraphQLNonNull(o.GraphQLString)},image:{name:"image",type:new o.GraphQLNonNull(o.GraphQLString)}},resolve:c.default.updateProduct}}},function(e,t,n){"use strict";(function(t){var r=n(6),o=n(1);e.exports=function(){var e=void 0;return o.Promise=t.Promise,1!==o.connection.readyState?(console.log("Connecting to Mongo "+r.db.uri+"..."),e=o.connect(r.db.uri,{useMongoClient:!0},function(e){e&&console.log("Could not connect to MongoDB!"+e)}),o.connection.on("error",function(e){if("ETIMEDOUT"===e.message.code)return console.log("Mongo connection timeout!",e),void setTimeout(function(){o.connect(r.db.uri,r.db.options)},1e3);console.log("Could not connect to MongoDB!"+e)}),o.connection.once("open",function(){console.log("Mongo DB connected.")})):(console.log("Mongo already connected."),e=o),e}}).call(t,n(27))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);