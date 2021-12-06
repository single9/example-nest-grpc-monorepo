/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.helloworld = (function() {

    /**
     * Namespace helloworld.
     * @exports helloworld
     * @namespace
     */
    var helloworld = {};

    helloworld.Greeter = (function() {

        /**
         * Constructs a new Greeter service.
         * @memberof helloworld
         * @classdesc Represents a Greeter
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Greeter(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Greeter.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Greeter;

        /**
         * Creates new Greeter service using the specified rpc implementation.
         * @function create
         * @memberof helloworld.Greeter
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Greeter} RPC service. Useful where requests and/or responses are streamed.
         */
        Greeter.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link helloworld.Greeter#sayHello}.
         * @memberof helloworld.Greeter
         * @typedef SayHelloCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {helloworld.HelloReply} [response] HelloReply
         */

        /**
         * Calls SayHello.
         * @function sayHello
         * @memberof helloworld.Greeter
         * @instance
         * @param {helloworld.IHelloRequest} request HelloRequest message or plain object
         * @param {helloworld.Greeter.SayHelloCallback} callback Node-style callback called with the error, if any, and HelloReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Greeter.prototype.sayHello = function sayHello(request, callback) {
            return this.rpcCall(sayHello, $root.helloworld.HelloRequest, $root.helloworld.HelloReply, request, callback);
        }, "name", { value: "SayHello" });

        /**
         * Calls SayHello.
         * @function sayHello
         * @memberof helloworld.Greeter
         * @instance
         * @param {helloworld.IHelloRequest} request HelloRequest message or plain object
         * @returns {Promise<helloworld.HelloReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link helloworld.Greeter#sayHelloWithGender}.
         * @memberof helloworld.Greeter
         * @typedef SayHelloWithGenderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {helloworld.HelloReplyWithGender} [response] HelloReplyWithGender
         */

        /**
         * Calls SayHelloWithGender.
         * @function sayHelloWithGender
         * @memberof helloworld.Greeter
         * @instance
         * @param {helloworld.IHelloRequestWithGender} request HelloRequestWithGender message or plain object
         * @param {helloworld.Greeter.SayHelloWithGenderCallback} callback Node-style callback called with the error, if any, and HelloReplyWithGender
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Greeter.prototype.sayHelloWithGender = function sayHelloWithGender(request, callback) {
            return this.rpcCall(sayHelloWithGender, $root.helloworld.HelloRequestWithGender, $root.helloworld.HelloReplyWithGender, request, callback);
        }, "name", { value: "SayHelloWithGender" });

        /**
         * Calls SayHelloWithGender.
         * @function sayHelloWithGender
         * @memberof helloworld.Greeter
         * @instance
         * @param {helloworld.IHelloRequestWithGender} request HelloRequestWithGender message or plain object
         * @returns {Promise<helloworld.HelloReplyWithGender>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link helloworld.Greeter#sayHelloAgain}.
         * @memberof helloworld.Greeter
         * @typedef SayHelloAgainCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {helloworld.HelloReply} [response] HelloReply
         */

        /**
         * Calls SayHelloAgain.
         * @function sayHelloAgain
         * @memberof helloworld.Greeter
         * @instance
         * @param {helloworld.IHelloRequest} request HelloRequest message or plain object
         * @param {helloworld.Greeter.SayHelloAgainCallback} callback Node-style callback called with the error, if any, and HelloReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Greeter.prototype.sayHelloAgain = function sayHelloAgain(request, callback) {
            return this.rpcCall(sayHelloAgain, $root.helloworld.HelloRequest, $root.helloworld.HelloReply, request, callback);
        }, "name", { value: "SayHelloAgain" });

        /**
         * Calls SayHelloAgain.
         * @function sayHelloAgain
         * @memberof helloworld.Greeter
         * @instance
         * @param {helloworld.IHelloRequest} request HelloRequest message or plain object
         * @returns {Promise<helloworld.HelloReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link helloworld.Greeter#sayHelloReturnArray}.
         * @memberof helloworld.Greeter
         * @typedef SayHelloReturnArrayCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {helloworld.HelloReturnArrayReply} [response] HelloReturnArrayReply
         */

        /**
         * Calls SayHelloReturnArray.
         * @function sayHelloReturnArray
         * @memberof helloworld.Greeter
         * @instance
         * @param {helloworld.IHelloReturnArrayRequest} request HelloReturnArrayRequest message or plain object
         * @param {helloworld.Greeter.SayHelloReturnArrayCallback} callback Node-style callback called with the error, if any, and HelloReturnArrayReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Greeter.prototype.sayHelloReturnArray = function sayHelloReturnArray(request, callback) {
            return this.rpcCall(sayHelloReturnArray, $root.helloworld.HelloReturnArrayRequest, $root.helloworld.HelloReturnArrayReply, request, callback);
        }, "name", { value: "SayHelloReturnArray" });

        /**
         * Calls SayHelloReturnArray.
         * @function sayHelloReturnArray
         * @memberof helloworld.Greeter
         * @instance
         * @param {helloworld.IHelloReturnArrayRequest} request HelloReturnArrayRequest message or plain object
         * @returns {Promise<helloworld.HelloReturnArrayReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link helloworld.Greeter#sayHelloWithName}.
         * @memberof helloworld.Greeter
         * @typedef SayHelloWithNameCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {helloworld.HelloReply} [response] HelloReply
         */

        /**
         * Calls SayHelloWithName.
         * @function sayHelloWithName
         * @memberof helloworld.Greeter
         * @instance
         * @param {helloworld.IHelloRequestWithRequired} request HelloRequestWithRequired message or plain object
         * @param {helloworld.Greeter.SayHelloWithNameCallback} callback Node-style callback called with the error, if any, and HelloReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Greeter.prototype.sayHelloWithName = function sayHelloWithName(request, callback) {
            return this.rpcCall(sayHelloWithName, $root.helloworld.HelloRequestWithRequired, $root.helloworld.HelloReply, request, callback);
        }, "name", { value: "SayHelloWithName" });

        /**
         * Calls SayHelloWithName.
         * @function sayHelloWithName
         * @memberof helloworld.Greeter
         * @instance
         * @param {helloworld.IHelloRequestWithRequired} request HelloRequestWithRequired message or plain object
         * @returns {Promise<helloworld.HelloReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link helloworld.Greeter#sayIntArray}.
         * @memberof helloworld.Greeter
         * @typedef SayIntArrayCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {helloworld.IntArrayReply} [response] IntArrayReply
         */

        /**
         * Calls SayIntArray.
         * @function sayIntArray
         * @memberof helloworld.Greeter
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @param {helloworld.Greeter.SayIntArrayCallback} callback Node-style callback called with the error, if any, and IntArrayReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Greeter.prototype.sayIntArray = function sayIntArray(request, callback) {
            return this.rpcCall(sayIntArray, $root.google.protobuf.Empty, $root.helloworld.IntArrayReply, request, callback);
        }, "name", { value: "SayIntArray" });

        /**
         * Calls SayIntArray.
         * @function sayIntArray
         * @memberof helloworld.Greeter
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @returns {Promise<helloworld.IntArrayReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link helloworld.Greeter#sayNested}.
         * @memberof helloworld.Greeter
         * @typedef SayNestedCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {helloworld.NestedReplyA} [response] NestedReplyA
         */

        /**
         * Calls SayNested.
         * @function sayNested
         * @memberof helloworld.Greeter
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @param {helloworld.Greeter.SayNestedCallback} callback Node-style callback called with the error, if any, and NestedReplyA
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Greeter.prototype.sayNested = function sayNested(request, callback) {
            return this.rpcCall(sayNested, $root.google.protobuf.Empty, $root.helloworld.NestedReplyA, request, callback);
        }, "name", { value: "SayNested" });

        /**
         * Calls SayNested.
         * @function sayNested
         * @memberof helloworld.Greeter
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @returns {Promise<helloworld.NestedReplyA>} Promise
         * @variation 2
         */

        return Greeter;
    })();

    helloworld.HelloRequest = (function() {

        /**
         * Properties of a HelloRequest.
         * @memberof helloworld
         * @interface IHelloRequest
         * @property {string|null} [name] HelloRequest name
         */

        /**
         * Constructs a new HelloRequest.
         * @memberof helloworld
         * @classdesc Represents a HelloRequest.
         * @implements IHelloRequest
         * @constructor
         * @param {helloworld.IHelloRequest=} [properties] Properties to set
         */
        function HelloRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloRequest name.
         * @member {string} name
         * @memberof helloworld.HelloRequest
         * @instance
         */
        HelloRequest.prototype.name = "";

        /**
         * Creates a new HelloRequest instance using the specified properties.
         * @function create
         * @memberof helloworld.HelloRequest
         * @static
         * @param {helloworld.IHelloRequest=} [properties] Properties to set
         * @returns {helloworld.HelloRequest} HelloRequest instance
         */
        HelloRequest.create = function create(properties) {
            return new HelloRequest(properties);
        };

        /**
         * Encodes the specified HelloRequest message. Does not implicitly {@link helloworld.HelloRequest.verify|verify} messages.
         * @function encode
         * @memberof helloworld.HelloRequest
         * @static
         * @param {helloworld.IHelloRequest} message HelloRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified HelloRequest message, length delimited. Does not implicitly {@link helloworld.HelloRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.HelloRequest
         * @static
         * @param {helloworld.IHelloRequest} message HelloRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloRequest message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.HelloRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.HelloRequest} HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.HelloRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HelloRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.HelloRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.HelloRequest} HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloRequest message.
         * @function verify
         * @memberof helloworld.HelloRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a HelloRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.HelloRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.HelloRequest} HelloRequest
         */
        HelloRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.HelloRequest)
                return object;
            var message = new $root.helloworld.HelloRequest();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a HelloRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.HelloRequest
         * @static
         * @param {helloworld.HelloRequest} message HelloRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this HelloRequest to JSON.
         * @function toJSON
         * @memberof helloworld.HelloRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HelloRequest;
    })();

    helloworld.HelloReturnArrayRequest = (function() {

        /**
         * Properties of a HelloReturnArrayRequest.
         * @memberof helloworld
         * @interface IHelloReturnArrayRequest
         * @property {string|null} [name] HelloReturnArrayRequest name
         * @property {Array.<helloworld.IHelloReturnArrayRequest_Int>|null} [list] HelloReturnArrayRequest list
         */

        /**
         * Constructs a new HelloReturnArrayRequest.
         * @memberof helloworld
         * @classdesc Represents a HelloReturnArrayRequest.
         * @implements IHelloReturnArrayRequest
         * @constructor
         * @param {helloworld.IHelloReturnArrayRequest=} [properties] Properties to set
         */
        function HelloReturnArrayRequest(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloReturnArrayRequest name.
         * @member {string} name
         * @memberof helloworld.HelloReturnArrayRequest
         * @instance
         */
        HelloReturnArrayRequest.prototype.name = "";

        /**
         * HelloReturnArrayRequest list.
         * @member {Array.<helloworld.IHelloReturnArrayRequest_Int>} list
         * @memberof helloworld.HelloReturnArrayRequest
         * @instance
         */
        HelloReturnArrayRequest.prototype.list = $util.emptyArray;

        /**
         * Creates a new HelloReturnArrayRequest instance using the specified properties.
         * @function create
         * @memberof helloworld.HelloReturnArrayRequest
         * @static
         * @param {helloworld.IHelloReturnArrayRequest=} [properties] Properties to set
         * @returns {helloworld.HelloReturnArrayRequest} HelloReturnArrayRequest instance
         */
        HelloReturnArrayRequest.create = function create(properties) {
            return new HelloReturnArrayRequest(properties);
        };

        /**
         * Encodes the specified HelloReturnArrayRequest message. Does not implicitly {@link helloworld.HelloReturnArrayRequest.verify|verify} messages.
         * @function encode
         * @memberof helloworld.HelloReturnArrayRequest
         * @static
         * @param {helloworld.IHelloReturnArrayRequest} message HelloReturnArrayRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReturnArrayRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.helloworld.HelloReturnArrayRequest_Int.encode(message.list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HelloReturnArrayRequest message, length delimited. Does not implicitly {@link helloworld.HelloReturnArrayRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.HelloReturnArrayRequest
         * @static
         * @param {helloworld.IHelloReturnArrayRequest} message HelloReturnArrayRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReturnArrayRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloReturnArrayRequest message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.HelloReturnArrayRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.HelloReturnArrayRequest} HelloReturnArrayRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReturnArrayRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.HelloReturnArrayRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.helloworld.HelloReturnArrayRequest_Int.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HelloReturnArrayRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.HelloReturnArrayRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.HelloReturnArrayRequest} HelloReturnArrayRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReturnArrayRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloReturnArrayRequest message.
         * @function verify
         * @memberof helloworld.HelloReturnArrayRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloReturnArrayRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.helloworld.HelloReturnArrayRequest_Int.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HelloReturnArrayRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.HelloReturnArrayRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.HelloReturnArrayRequest} HelloReturnArrayRequest
         */
        HelloReturnArrayRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.HelloReturnArrayRequest)
                return object;
            var message = new $root.helloworld.HelloReturnArrayRequest();
            if (object.name != null)
                message.name = String(object.name);
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".helloworld.HelloReturnArrayRequest.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".helloworld.HelloReturnArrayRequest.list: object expected");
                    message.list[i] = $root.helloworld.HelloReturnArrayRequest_Int.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HelloReturnArrayRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.HelloReturnArrayRequest
         * @static
         * @param {helloworld.HelloReturnArrayRequest} message HelloReturnArrayRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloReturnArrayRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.helloworld.HelloReturnArrayRequest_Int.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this HelloReturnArrayRequest to JSON.
         * @function toJSON
         * @memberof helloworld.HelloReturnArrayRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloReturnArrayRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HelloReturnArrayRequest;
    })();

    helloworld.HelloReturnArrayRequest_Int = (function() {

        /**
         * Properties of a HelloReturnArrayRequest_Int.
         * @memberof helloworld
         * @interface IHelloReturnArrayRequest_Int
         * @property {number|null} [num] HelloReturnArrayRequest_Int num
         */

        /**
         * Constructs a new HelloReturnArrayRequest_Int.
         * @memberof helloworld
         * @classdesc Represents a HelloReturnArrayRequest_Int.
         * @implements IHelloReturnArrayRequest_Int
         * @constructor
         * @param {helloworld.IHelloReturnArrayRequest_Int=} [properties] Properties to set
         */
        function HelloReturnArrayRequest_Int(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloReturnArrayRequest_Int num.
         * @member {number} num
         * @memberof helloworld.HelloReturnArrayRequest_Int
         * @instance
         */
        HelloReturnArrayRequest_Int.prototype.num = 0;

        /**
         * Creates a new HelloReturnArrayRequest_Int instance using the specified properties.
         * @function create
         * @memberof helloworld.HelloReturnArrayRequest_Int
         * @static
         * @param {helloworld.IHelloReturnArrayRequest_Int=} [properties] Properties to set
         * @returns {helloworld.HelloReturnArrayRequest_Int} HelloReturnArrayRequest_Int instance
         */
        HelloReturnArrayRequest_Int.create = function create(properties) {
            return new HelloReturnArrayRequest_Int(properties);
        };

        /**
         * Encodes the specified HelloReturnArrayRequest_Int message. Does not implicitly {@link helloworld.HelloReturnArrayRequest_Int.verify|verify} messages.
         * @function encode
         * @memberof helloworld.HelloReturnArrayRequest_Int
         * @static
         * @param {helloworld.IHelloReturnArrayRequest_Int} message HelloReturnArrayRequest_Int message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReturnArrayRequest_Int.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.num != null && Object.hasOwnProperty.call(message, "num"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.num);
            return writer;
        };

        /**
         * Encodes the specified HelloReturnArrayRequest_Int message, length delimited. Does not implicitly {@link helloworld.HelloReturnArrayRequest_Int.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.HelloReturnArrayRequest_Int
         * @static
         * @param {helloworld.IHelloReturnArrayRequest_Int} message HelloReturnArrayRequest_Int message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReturnArrayRequest_Int.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloReturnArrayRequest_Int message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.HelloReturnArrayRequest_Int
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.HelloReturnArrayRequest_Int} HelloReturnArrayRequest_Int
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReturnArrayRequest_Int.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.HelloReturnArrayRequest_Int();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.num = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HelloReturnArrayRequest_Int message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.HelloReturnArrayRequest_Int
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.HelloReturnArrayRequest_Int} HelloReturnArrayRequest_Int
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReturnArrayRequest_Int.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloReturnArrayRequest_Int message.
         * @function verify
         * @memberof helloworld.HelloReturnArrayRequest_Int
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloReturnArrayRequest_Int.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num))
                    return "num: integer expected";
            return null;
        };

        /**
         * Creates a HelloReturnArrayRequest_Int message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.HelloReturnArrayRequest_Int
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.HelloReturnArrayRequest_Int} HelloReturnArrayRequest_Int
         */
        HelloReturnArrayRequest_Int.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.HelloReturnArrayRequest_Int)
                return object;
            var message = new $root.helloworld.HelloReturnArrayRequest_Int();
            if (object.num != null)
                message.num = object.num | 0;
            return message;
        };

        /**
         * Creates a plain object from a HelloReturnArrayRequest_Int message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.HelloReturnArrayRequest_Int
         * @static
         * @param {helloworld.HelloReturnArrayRequest_Int} message HelloReturnArrayRequest_Int
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloReturnArrayRequest_Int.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.num = 0;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            return object;
        };

        /**
         * Converts this HelloReturnArrayRequest_Int to JSON.
         * @function toJSON
         * @memberof helloworld.HelloReturnArrayRequest_Int
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloReturnArrayRequest_Int.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HelloReturnArrayRequest_Int;
    })();

    helloworld.HelloReturnArrayReply_Int = (function() {

        /**
         * Properties of a HelloReturnArrayReply_Int.
         * @memberof helloworld
         * @interface IHelloReturnArrayReply_Int
         * @property {number|null} [num] HelloReturnArrayReply_Int num
         */

        /**
         * Constructs a new HelloReturnArrayReply_Int.
         * @memberof helloworld
         * @classdesc Represents a HelloReturnArrayReply_Int.
         * @implements IHelloReturnArrayReply_Int
         * @constructor
         * @param {helloworld.IHelloReturnArrayReply_Int=} [properties] Properties to set
         */
        function HelloReturnArrayReply_Int(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloReturnArrayReply_Int num.
         * @member {number} num
         * @memberof helloworld.HelloReturnArrayReply_Int
         * @instance
         */
        HelloReturnArrayReply_Int.prototype.num = 0;

        /**
         * Creates a new HelloReturnArrayReply_Int instance using the specified properties.
         * @function create
         * @memberof helloworld.HelloReturnArrayReply_Int
         * @static
         * @param {helloworld.IHelloReturnArrayReply_Int=} [properties] Properties to set
         * @returns {helloworld.HelloReturnArrayReply_Int} HelloReturnArrayReply_Int instance
         */
        HelloReturnArrayReply_Int.create = function create(properties) {
            return new HelloReturnArrayReply_Int(properties);
        };

        /**
         * Encodes the specified HelloReturnArrayReply_Int message. Does not implicitly {@link helloworld.HelloReturnArrayReply_Int.verify|verify} messages.
         * @function encode
         * @memberof helloworld.HelloReturnArrayReply_Int
         * @static
         * @param {helloworld.IHelloReturnArrayReply_Int} message HelloReturnArrayReply_Int message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReturnArrayReply_Int.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.num != null && Object.hasOwnProperty.call(message, "num"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.num);
            return writer;
        };

        /**
         * Encodes the specified HelloReturnArrayReply_Int message, length delimited. Does not implicitly {@link helloworld.HelloReturnArrayReply_Int.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.HelloReturnArrayReply_Int
         * @static
         * @param {helloworld.IHelloReturnArrayReply_Int} message HelloReturnArrayReply_Int message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReturnArrayReply_Int.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloReturnArrayReply_Int message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.HelloReturnArrayReply_Int
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.HelloReturnArrayReply_Int} HelloReturnArrayReply_Int
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReturnArrayReply_Int.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.HelloReturnArrayReply_Int();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.num = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HelloReturnArrayReply_Int message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.HelloReturnArrayReply_Int
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.HelloReturnArrayReply_Int} HelloReturnArrayReply_Int
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReturnArrayReply_Int.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloReturnArrayReply_Int message.
         * @function verify
         * @memberof helloworld.HelloReturnArrayReply_Int
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloReturnArrayReply_Int.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num))
                    return "num: integer expected";
            return null;
        };

        /**
         * Creates a HelloReturnArrayReply_Int message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.HelloReturnArrayReply_Int
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.HelloReturnArrayReply_Int} HelloReturnArrayReply_Int
         */
        HelloReturnArrayReply_Int.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.HelloReturnArrayReply_Int)
                return object;
            var message = new $root.helloworld.HelloReturnArrayReply_Int();
            if (object.num != null)
                message.num = object.num | 0;
            return message;
        };

        /**
         * Creates a plain object from a HelloReturnArrayReply_Int message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.HelloReturnArrayReply_Int
         * @static
         * @param {helloworld.HelloReturnArrayReply_Int} message HelloReturnArrayReply_Int
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloReturnArrayReply_Int.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.num = 0;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            return object;
        };

        /**
         * Converts this HelloReturnArrayReply_Int to JSON.
         * @function toJSON
         * @memberof helloworld.HelloReturnArrayReply_Int
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloReturnArrayReply_Int.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HelloReturnArrayReply_Int;
    })();

    helloworld.HelloRequestWithRequired = (function() {

        /**
         * Properties of a HelloRequestWithRequired.
         * @memberof helloworld
         * @interface IHelloRequestWithRequired
         * @property {string|null} [name] HelloRequestWithRequired name
         */

        /**
         * Constructs a new HelloRequestWithRequired.
         * @memberof helloworld
         * @classdesc Represents a HelloRequestWithRequired.
         * @implements IHelloRequestWithRequired
         * @constructor
         * @param {helloworld.IHelloRequestWithRequired=} [properties] Properties to set
         */
        function HelloRequestWithRequired(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloRequestWithRequired name.
         * @member {string} name
         * @memberof helloworld.HelloRequestWithRequired
         * @instance
         */
        HelloRequestWithRequired.prototype.name = "";

        /**
         * Creates a new HelloRequestWithRequired instance using the specified properties.
         * @function create
         * @memberof helloworld.HelloRequestWithRequired
         * @static
         * @param {helloworld.IHelloRequestWithRequired=} [properties] Properties to set
         * @returns {helloworld.HelloRequestWithRequired} HelloRequestWithRequired instance
         */
        HelloRequestWithRequired.create = function create(properties) {
            return new HelloRequestWithRequired(properties);
        };

        /**
         * Encodes the specified HelloRequestWithRequired message. Does not implicitly {@link helloworld.HelloRequestWithRequired.verify|verify} messages.
         * @function encode
         * @memberof helloworld.HelloRequestWithRequired
         * @static
         * @param {helloworld.IHelloRequestWithRequired} message HelloRequestWithRequired message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloRequestWithRequired.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified HelloRequestWithRequired message, length delimited. Does not implicitly {@link helloworld.HelloRequestWithRequired.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.HelloRequestWithRequired
         * @static
         * @param {helloworld.IHelloRequestWithRequired} message HelloRequestWithRequired message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloRequestWithRequired.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloRequestWithRequired message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.HelloRequestWithRequired
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.HelloRequestWithRequired} HelloRequestWithRequired
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloRequestWithRequired.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.HelloRequestWithRequired();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HelloRequestWithRequired message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.HelloRequestWithRequired
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.HelloRequestWithRequired} HelloRequestWithRequired
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloRequestWithRequired.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloRequestWithRequired message.
         * @function verify
         * @memberof helloworld.HelloRequestWithRequired
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloRequestWithRequired.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a HelloRequestWithRequired message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.HelloRequestWithRequired
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.HelloRequestWithRequired} HelloRequestWithRequired
         */
        HelloRequestWithRequired.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.HelloRequestWithRequired)
                return object;
            var message = new $root.helloworld.HelloRequestWithRequired();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a HelloRequestWithRequired message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.HelloRequestWithRequired
         * @static
         * @param {helloworld.HelloRequestWithRequired} message HelloRequestWithRequired
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloRequestWithRequired.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this HelloRequestWithRequired to JSON.
         * @function toJSON
         * @memberof helloworld.HelloRequestWithRequired
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloRequestWithRequired.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HelloRequestWithRequired;
    })();

    helloworld.HelloReply = (function() {

        /**
         * Properties of a HelloReply.
         * @memberof helloworld
         * @interface IHelloReply
         * @property {string|null} [message] HelloReply message
         */

        /**
         * Constructs a new HelloReply.
         * @memberof helloworld
         * @classdesc Represents a HelloReply.
         * @implements IHelloReply
         * @constructor
         * @param {helloworld.IHelloReply=} [properties] Properties to set
         */
        function HelloReply(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloReply message.
         * @member {string} message
         * @memberof helloworld.HelloReply
         * @instance
         */
        HelloReply.prototype.message = "";

        /**
         * Creates a new HelloReply instance using the specified properties.
         * @function create
         * @memberof helloworld.HelloReply
         * @static
         * @param {helloworld.IHelloReply=} [properties] Properties to set
         * @returns {helloworld.HelloReply} HelloReply instance
         */
        HelloReply.create = function create(properties) {
            return new HelloReply(properties);
        };

        /**
         * Encodes the specified HelloReply message. Does not implicitly {@link helloworld.HelloReply.verify|verify} messages.
         * @function encode
         * @memberof helloworld.HelloReply
         * @static
         * @param {helloworld.IHelloReply} message HelloReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified HelloReply message, length delimited. Does not implicitly {@link helloworld.HelloReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.HelloReply
         * @static
         * @param {helloworld.IHelloReply} message HelloReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloReply message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.HelloReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.HelloReply} HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.HelloReply();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HelloReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.HelloReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.HelloReply} HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloReply message.
         * @function verify
         * @memberof helloworld.HelloReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a HelloReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.HelloReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.HelloReply} HelloReply
         */
        HelloReply.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.HelloReply)
                return object;
            var message = new $root.helloworld.HelloReply();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a HelloReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.HelloReply
         * @static
         * @param {helloworld.HelloReply} message HelloReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this HelloReply to JSON.
         * @function toJSON
         * @memberof helloworld.HelloReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HelloReply;
    })();

    helloworld.HelloReturnArrayReply = (function() {

        /**
         * Properties of a HelloReturnArrayReply.
         * @memberof helloworld
         * @interface IHelloReturnArrayReply
         * @property {string|null} [message] HelloReturnArrayReply message
         * @property {Array.<helloworld.IHelloReturnArrayReply_Int>|null} [list] HelloReturnArrayReply list
         */

        /**
         * Constructs a new HelloReturnArrayReply.
         * @memberof helloworld
         * @classdesc Represents a HelloReturnArrayReply.
         * @implements IHelloReturnArrayReply
         * @constructor
         * @param {helloworld.IHelloReturnArrayReply=} [properties] Properties to set
         */
        function HelloReturnArrayReply(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloReturnArrayReply message.
         * @member {string} message
         * @memberof helloworld.HelloReturnArrayReply
         * @instance
         */
        HelloReturnArrayReply.prototype.message = "";

        /**
         * HelloReturnArrayReply list.
         * @member {Array.<helloworld.IHelloReturnArrayReply_Int>} list
         * @memberof helloworld.HelloReturnArrayReply
         * @instance
         */
        HelloReturnArrayReply.prototype.list = $util.emptyArray;

        /**
         * Creates a new HelloReturnArrayReply instance using the specified properties.
         * @function create
         * @memberof helloworld.HelloReturnArrayReply
         * @static
         * @param {helloworld.IHelloReturnArrayReply=} [properties] Properties to set
         * @returns {helloworld.HelloReturnArrayReply} HelloReturnArrayReply instance
         */
        HelloReturnArrayReply.create = function create(properties) {
            return new HelloReturnArrayReply(properties);
        };

        /**
         * Encodes the specified HelloReturnArrayReply message. Does not implicitly {@link helloworld.HelloReturnArrayReply.verify|verify} messages.
         * @function encode
         * @memberof helloworld.HelloReturnArrayReply
         * @static
         * @param {helloworld.IHelloReturnArrayReply} message HelloReturnArrayReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReturnArrayReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.helloworld.HelloReturnArrayReply_Int.encode(message.list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HelloReturnArrayReply message, length delimited. Does not implicitly {@link helloworld.HelloReturnArrayReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.HelloReturnArrayReply
         * @static
         * @param {helloworld.IHelloReturnArrayReply} message HelloReturnArrayReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReturnArrayReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloReturnArrayReply message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.HelloReturnArrayReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.HelloReturnArrayReply} HelloReturnArrayReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReturnArrayReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.HelloReturnArrayReply();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.helloworld.HelloReturnArrayReply_Int.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HelloReturnArrayReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.HelloReturnArrayReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.HelloReturnArrayReply} HelloReturnArrayReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReturnArrayReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloReturnArrayReply message.
         * @function verify
         * @memberof helloworld.HelloReturnArrayReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloReturnArrayReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.helloworld.HelloReturnArrayReply_Int.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HelloReturnArrayReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.HelloReturnArrayReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.HelloReturnArrayReply} HelloReturnArrayReply
         */
        HelloReturnArrayReply.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.HelloReturnArrayReply)
                return object;
            var message = new $root.helloworld.HelloReturnArrayReply();
            if (object.message != null)
                message.message = String(object.message);
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".helloworld.HelloReturnArrayReply.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".helloworld.HelloReturnArrayReply.list: object expected");
                    message.list[i] = $root.helloworld.HelloReturnArrayReply_Int.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HelloReturnArrayReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.HelloReturnArrayReply
         * @static
         * @param {helloworld.HelloReturnArrayReply} message HelloReturnArrayReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloReturnArrayReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.helloworld.HelloReturnArrayReply_Int.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this HelloReturnArrayReply to JSON.
         * @function toJSON
         * @memberof helloworld.HelloReturnArrayReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloReturnArrayReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HelloReturnArrayReply;
    })();

    helloworld.IntArrayReply = (function() {

        /**
         * Properties of an IntArrayReply.
         * @memberof helloworld
         * @interface IIntArrayReply
         * @property {Array.<number>|null} [nums] IntArrayReply nums
         */

        /**
         * Constructs a new IntArrayReply.
         * @memberof helloworld
         * @classdesc Represents an IntArrayReply.
         * @implements IIntArrayReply
         * @constructor
         * @param {helloworld.IIntArrayReply=} [properties] Properties to set
         */
        function IntArrayReply(properties) {
            this.nums = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IntArrayReply nums.
         * @member {Array.<number>} nums
         * @memberof helloworld.IntArrayReply
         * @instance
         */
        IntArrayReply.prototype.nums = $util.emptyArray;

        /**
         * Creates a new IntArrayReply instance using the specified properties.
         * @function create
         * @memberof helloworld.IntArrayReply
         * @static
         * @param {helloworld.IIntArrayReply=} [properties] Properties to set
         * @returns {helloworld.IntArrayReply} IntArrayReply instance
         */
        IntArrayReply.create = function create(properties) {
            return new IntArrayReply(properties);
        };

        /**
         * Encodes the specified IntArrayReply message. Does not implicitly {@link helloworld.IntArrayReply.verify|verify} messages.
         * @function encode
         * @memberof helloworld.IntArrayReply
         * @static
         * @param {helloworld.IIntArrayReply} message IntArrayReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntArrayReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nums != null && message.nums.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.nums.length; ++i)
                    writer.int32(message.nums[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified IntArrayReply message, length delimited. Does not implicitly {@link helloworld.IntArrayReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.IntArrayReply
         * @static
         * @param {helloworld.IIntArrayReply} message IntArrayReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntArrayReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IntArrayReply message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.IntArrayReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.IntArrayReply} IntArrayReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntArrayReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.IntArrayReply();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.nums && message.nums.length))
                        message.nums = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.nums.push(reader.int32());
                    } else
                        message.nums.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IntArrayReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.IntArrayReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.IntArrayReply} IntArrayReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntArrayReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IntArrayReply message.
         * @function verify
         * @memberof helloworld.IntArrayReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IntArrayReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nums != null && message.hasOwnProperty("nums")) {
                if (!Array.isArray(message.nums))
                    return "nums: array expected";
                for (var i = 0; i < message.nums.length; ++i)
                    if (!$util.isInteger(message.nums[i]))
                        return "nums: integer[] expected";
            }
            return null;
        };

        /**
         * Creates an IntArrayReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.IntArrayReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.IntArrayReply} IntArrayReply
         */
        IntArrayReply.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.IntArrayReply)
                return object;
            var message = new $root.helloworld.IntArrayReply();
            if (object.nums) {
                if (!Array.isArray(object.nums))
                    throw TypeError(".helloworld.IntArrayReply.nums: array expected");
                message.nums = [];
                for (var i = 0; i < object.nums.length; ++i)
                    message.nums[i] = object.nums[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from an IntArrayReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.IntArrayReply
         * @static
         * @param {helloworld.IntArrayReply} message IntArrayReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IntArrayReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.nums = [];
            if (message.nums && message.nums.length) {
                object.nums = [];
                for (var j = 0; j < message.nums.length; ++j)
                    object.nums[j] = message.nums[j];
            }
            return object;
        };

        /**
         * Converts this IntArrayReply to JSON.
         * @function toJSON
         * @memberof helloworld.IntArrayReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IntArrayReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IntArrayReply;
    })();

    helloworld.NestedReplyA = (function() {

        /**
         * Properties of a NestedReplyA.
         * @memberof helloworld
         * @interface INestedReplyA
         * @property {helloworld.INestedReplyB|null} [x] NestedReplyA x
         */

        /**
         * Constructs a new NestedReplyA.
         * @memberof helloworld
         * @classdesc Represents a NestedReplyA.
         * @implements INestedReplyA
         * @constructor
         * @param {helloworld.INestedReplyA=} [properties] Properties to set
         */
        function NestedReplyA(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NestedReplyA x.
         * @member {helloworld.INestedReplyB|null|undefined} x
         * @memberof helloworld.NestedReplyA
         * @instance
         */
        NestedReplyA.prototype.x = null;

        /**
         * Creates a new NestedReplyA instance using the specified properties.
         * @function create
         * @memberof helloworld.NestedReplyA
         * @static
         * @param {helloworld.INestedReplyA=} [properties] Properties to set
         * @returns {helloworld.NestedReplyA} NestedReplyA instance
         */
        NestedReplyA.create = function create(properties) {
            return new NestedReplyA(properties);
        };

        /**
         * Encodes the specified NestedReplyA message. Does not implicitly {@link helloworld.NestedReplyA.verify|verify} messages.
         * @function encode
         * @memberof helloworld.NestedReplyA
         * @static
         * @param {helloworld.INestedReplyA} message NestedReplyA message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NestedReplyA.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                $root.helloworld.NestedReplyB.encode(message.x, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NestedReplyA message, length delimited. Does not implicitly {@link helloworld.NestedReplyA.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.NestedReplyA
         * @static
         * @param {helloworld.INestedReplyA} message NestedReplyA message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NestedReplyA.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NestedReplyA message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.NestedReplyA
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.NestedReplyA} NestedReplyA
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NestedReplyA.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.NestedReplyA();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = $root.helloworld.NestedReplyB.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NestedReplyA message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.NestedReplyA
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.NestedReplyA} NestedReplyA
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NestedReplyA.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NestedReplyA message.
         * @function verify
         * @memberof helloworld.NestedReplyA
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NestedReplyA.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x")) {
                var error = $root.helloworld.NestedReplyB.verify(message.x);
                if (error)
                    return "x." + error;
            }
            return null;
        };

        /**
         * Creates a NestedReplyA message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.NestedReplyA
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.NestedReplyA} NestedReplyA
         */
        NestedReplyA.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.NestedReplyA)
                return object;
            var message = new $root.helloworld.NestedReplyA();
            if (object.x != null) {
                if (typeof object.x !== "object")
                    throw TypeError(".helloworld.NestedReplyA.x: object expected");
                message.x = $root.helloworld.NestedReplyB.fromObject(object.x);
            }
            return message;
        };

        /**
         * Creates a plain object from a NestedReplyA message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.NestedReplyA
         * @static
         * @param {helloworld.NestedReplyA} message NestedReplyA
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NestedReplyA.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.x = null;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = $root.helloworld.NestedReplyB.toObject(message.x, options);
            return object;
        };

        /**
         * Converts this NestedReplyA to JSON.
         * @function toJSON
         * @memberof helloworld.NestedReplyA
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NestedReplyA.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NestedReplyA;
    })();

    helloworld.NestedReplyB = (function() {

        /**
         * Properties of a NestedReplyB.
         * @memberof helloworld
         * @interface INestedReplyB
         * @property {string|null} [name] NestedReplyB name
         * @property {helloworld.INestedReplyC|null} [c] NestedReplyB c
         * @property {helloworld.INestedReplyD|null} [d] NestedReplyB d
         */

        /**
         * Constructs a new NestedReplyB.
         * @memberof helloworld
         * @classdesc Represents a NestedReplyB.
         * @implements INestedReplyB
         * @constructor
         * @param {helloworld.INestedReplyB=} [properties] Properties to set
         */
        function NestedReplyB(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NestedReplyB name.
         * @member {string} name
         * @memberof helloworld.NestedReplyB
         * @instance
         */
        NestedReplyB.prototype.name = "";

        /**
         * NestedReplyB c.
         * @member {helloworld.INestedReplyC|null|undefined} c
         * @memberof helloworld.NestedReplyB
         * @instance
         */
        NestedReplyB.prototype.c = null;

        /**
         * NestedReplyB d.
         * @member {helloworld.INestedReplyD|null|undefined} d
         * @memberof helloworld.NestedReplyB
         * @instance
         */
        NestedReplyB.prototype.d = null;

        /**
         * Creates a new NestedReplyB instance using the specified properties.
         * @function create
         * @memberof helloworld.NestedReplyB
         * @static
         * @param {helloworld.INestedReplyB=} [properties] Properties to set
         * @returns {helloworld.NestedReplyB} NestedReplyB instance
         */
        NestedReplyB.create = function create(properties) {
            return new NestedReplyB(properties);
        };

        /**
         * Encodes the specified NestedReplyB message. Does not implicitly {@link helloworld.NestedReplyB.verify|verify} messages.
         * @function encode
         * @memberof helloworld.NestedReplyB
         * @static
         * @param {helloworld.INestedReplyB} message NestedReplyB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NestedReplyB.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.c != null && Object.hasOwnProperty.call(message, "c"))
                $root.helloworld.NestedReplyC.encode(message.c, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.d != null && Object.hasOwnProperty.call(message, "d"))
                $root.helloworld.NestedReplyD.encode(message.d, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NestedReplyB message, length delimited. Does not implicitly {@link helloworld.NestedReplyB.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.NestedReplyB
         * @static
         * @param {helloworld.INestedReplyB} message NestedReplyB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NestedReplyB.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NestedReplyB message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.NestedReplyB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.NestedReplyB} NestedReplyB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NestedReplyB.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.NestedReplyB();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.c = $root.helloworld.NestedReplyC.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.d = $root.helloworld.NestedReplyD.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NestedReplyB message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.NestedReplyB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.NestedReplyB} NestedReplyB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NestedReplyB.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NestedReplyB message.
         * @function verify
         * @memberof helloworld.NestedReplyB
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NestedReplyB.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.c != null && message.hasOwnProperty("c")) {
                var error = $root.helloworld.NestedReplyC.verify(message.c);
                if (error)
                    return "c." + error;
            }
            if (message.d != null && message.hasOwnProperty("d")) {
                var error = $root.helloworld.NestedReplyD.verify(message.d);
                if (error)
                    return "d." + error;
            }
            return null;
        };

        /**
         * Creates a NestedReplyB message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.NestedReplyB
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.NestedReplyB} NestedReplyB
         */
        NestedReplyB.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.NestedReplyB)
                return object;
            var message = new $root.helloworld.NestedReplyB();
            if (object.name != null)
                message.name = String(object.name);
            if (object.c != null) {
                if (typeof object.c !== "object")
                    throw TypeError(".helloworld.NestedReplyB.c: object expected");
                message.c = $root.helloworld.NestedReplyC.fromObject(object.c);
            }
            if (object.d != null) {
                if (typeof object.d !== "object")
                    throw TypeError(".helloworld.NestedReplyB.d: object expected");
                message.d = $root.helloworld.NestedReplyD.fromObject(object.d);
            }
            return message;
        };

        /**
         * Creates a plain object from a NestedReplyB message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.NestedReplyB
         * @static
         * @param {helloworld.NestedReplyB} message NestedReplyB
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NestedReplyB.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.c = null;
                object.d = null;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.c != null && message.hasOwnProperty("c"))
                object.c = $root.helloworld.NestedReplyC.toObject(message.c, options);
            if (message.d != null && message.hasOwnProperty("d"))
                object.d = $root.helloworld.NestedReplyD.toObject(message.d, options);
            return object;
        };

        /**
         * Converts this NestedReplyB to JSON.
         * @function toJSON
         * @memberof helloworld.NestedReplyB
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NestedReplyB.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NestedReplyB;
    })();

    helloworld.NestedReplyC = (function() {

        /**
         * Properties of a NestedReplyC.
         * @memberof helloworld
         * @interface INestedReplyC
         * @property {string|null} [cname] NestedReplyC cname
         * @property {helloworld.INestedReplyD|null} [d] NestedReplyC d
         * @property {Array.<number>|null} [anums] NestedReplyC anums
         * @property {number|null} [snums] NestedReplyC snums
         */

        /**
         * Constructs a new NestedReplyC.
         * @memberof helloworld
         * @classdesc Represents a NestedReplyC.
         * @implements INestedReplyC
         * @constructor
         * @param {helloworld.INestedReplyC=} [properties] Properties to set
         */
        function NestedReplyC(properties) {
            this.anums = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NestedReplyC cname.
         * @member {string} cname
         * @memberof helloworld.NestedReplyC
         * @instance
         */
        NestedReplyC.prototype.cname = "";

        /**
         * NestedReplyC d.
         * @member {helloworld.INestedReplyD|null|undefined} d
         * @memberof helloworld.NestedReplyC
         * @instance
         */
        NestedReplyC.prototype.d = null;

        /**
         * NestedReplyC anums.
         * @member {Array.<number>} anums
         * @memberof helloworld.NestedReplyC
         * @instance
         */
        NestedReplyC.prototype.anums = $util.emptyArray;

        /**
         * NestedReplyC snums.
         * @member {number} snums
         * @memberof helloworld.NestedReplyC
         * @instance
         */
        NestedReplyC.prototype.snums = 0;

        /**
         * Creates a new NestedReplyC instance using the specified properties.
         * @function create
         * @memberof helloworld.NestedReplyC
         * @static
         * @param {helloworld.INestedReplyC=} [properties] Properties to set
         * @returns {helloworld.NestedReplyC} NestedReplyC instance
         */
        NestedReplyC.create = function create(properties) {
            return new NestedReplyC(properties);
        };

        /**
         * Encodes the specified NestedReplyC message. Does not implicitly {@link helloworld.NestedReplyC.verify|verify} messages.
         * @function encode
         * @memberof helloworld.NestedReplyC
         * @static
         * @param {helloworld.INestedReplyC} message NestedReplyC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NestedReplyC.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cname != null && Object.hasOwnProperty.call(message, "cname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cname);
            if (message.d != null && Object.hasOwnProperty.call(message, "d"))
                $root.helloworld.NestedReplyD.encode(message.d, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.anums != null && message.anums.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.anums.length; ++i)
                    writer.int32(message.anums[i]);
                writer.ldelim();
            }
            if (message.snums != null && Object.hasOwnProperty.call(message, "snums"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.snums);
            return writer;
        };

        /**
         * Encodes the specified NestedReplyC message, length delimited. Does not implicitly {@link helloworld.NestedReplyC.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.NestedReplyC
         * @static
         * @param {helloworld.INestedReplyC} message NestedReplyC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NestedReplyC.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NestedReplyC message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.NestedReplyC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.NestedReplyC} NestedReplyC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NestedReplyC.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.NestedReplyC();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cname = reader.string();
                    break;
                case 2:
                    message.d = $root.helloworld.NestedReplyD.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.anums && message.anums.length))
                        message.anums = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.anums.push(reader.int32());
                    } else
                        message.anums.push(reader.int32());
                    break;
                case 4:
                    message.snums = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NestedReplyC message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.NestedReplyC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.NestedReplyC} NestedReplyC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NestedReplyC.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NestedReplyC message.
         * @function verify
         * @memberof helloworld.NestedReplyC
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NestedReplyC.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cname != null && message.hasOwnProperty("cname"))
                if (!$util.isString(message.cname))
                    return "cname: string expected";
            if (message.d != null && message.hasOwnProperty("d")) {
                var error = $root.helloworld.NestedReplyD.verify(message.d);
                if (error)
                    return "d." + error;
            }
            if (message.anums != null && message.hasOwnProperty("anums")) {
                if (!Array.isArray(message.anums))
                    return "anums: array expected";
                for (var i = 0; i < message.anums.length; ++i)
                    if (!$util.isInteger(message.anums[i]))
                        return "anums: integer[] expected";
            }
            if (message.snums != null && message.hasOwnProperty("snums"))
                if (typeof message.snums !== "number")
                    return "snums: number expected";
            return null;
        };

        /**
         * Creates a NestedReplyC message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.NestedReplyC
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.NestedReplyC} NestedReplyC
         */
        NestedReplyC.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.NestedReplyC)
                return object;
            var message = new $root.helloworld.NestedReplyC();
            if (object.cname != null)
                message.cname = String(object.cname);
            if (object.d != null) {
                if (typeof object.d !== "object")
                    throw TypeError(".helloworld.NestedReplyC.d: object expected");
                message.d = $root.helloworld.NestedReplyD.fromObject(object.d);
            }
            if (object.anums) {
                if (!Array.isArray(object.anums))
                    throw TypeError(".helloworld.NestedReplyC.anums: array expected");
                message.anums = [];
                for (var i = 0; i < object.anums.length; ++i)
                    message.anums[i] = object.anums[i] | 0;
            }
            if (object.snums != null)
                message.snums = Number(object.snums);
            return message;
        };

        /**
         * Creates a plain object from a NestedReplyC message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.NestedReplyC
         * @static
         * @param {helloworld.NestedReplyC} message NestedReplyC
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NestedReplyC.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.anums = [];
            if (options.defaults) {
                object.cname = "";
                object.d = null;
                object.snums = 0;
            }
            if (message.cname != null && message.hasOwnProperty("cname"))
                object.cname = message.cname;
            if (message.d != null && message.hasOwnProperty("d"))
                object.d = $root.helloworld.NestedReplyD.toObject(message.d, options);
            if (message.anums && message.anums.length) {
                object.anums = [];
                for (var j = 0; j < message.anums.length; ++j)
                    object.anums[j] = message.anums[j];
            }
            if (message.snums != null && message.hasOwnProperty("snums"))
                object.snums = options.json && !isFinite(message.snums) ? String(message.snums) : message.snums;
            return object;
        };

        /**
         * Converts this NestedReplyC to JSON.
         * @function toJSON
         * @memberof helloworld.NestedReplyC
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NestedReplyC.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NestedReplyC;
    })();

    helloworld.NestedReplyD = (function() {

        /**
         * Properties of a NestedReplyD.
         * @memberof helloworld
         * @interface INestedReplyD
         * @property {string|null} [dname] NestedReplyD dname
         */

        /**
         * Constructs a new NestedReplyD.
         * @memberof helloworld
         * @classdesc Represents a NestedReplyD.
         * @implements INestedReplyD
         * @constructor
         * @param {helloworld.INestedReplyD=} [properties] Properties to set
         */
        function NestedReplyD(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NestedReplyD dname.
         * @member {string} dname
         * @memberof helloworld.NestedReplyD
         * @instance
         */
        NestedReplyD.prototype.dname = "";

        /**
         * Creates a new NestedReplyD instance using the specified properties.
         * @function create
         * @memberof helloworld.NestedReplyD
         * @static
         * @param {helloworld.INestedReplyD=} [properties] Properties to set
         * @returns {helloworld.NestedReplyD} NestedReplyD instance
         */
        NestedReplyD.create = function create(properties) {
            return new NestedReplyD(properties);
        };

        /**
         * Encodes the specified NestedReplyD message. Does not implicitly {@link helloworld.NestedReplyD.verify|verify} messages.
         * @function encode
         * @memberof helloworld.NestedReplyD
         * @static
         * @param {helloworld.INestedReplyD} message NestedReplyD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NestedReplyD.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dname != null && Object.hasOwnProperty.call(message, "dname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.dname);
            return writer;
        };

        /**
         * Encodes the specified NestedReplyD message, length delimited. Does not implicitly {@link helloworld.NestedReplyD.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.NestedReplyD
         * @static
         * @param {helloworld.INestedReplyD} message NestedReplyD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NestedReplyD.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NestedReplyD message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.NestedReplyD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.NestedReplyD} NestedReplyD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NestedReplyD.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.NestedReplyD();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.dname = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NestedReplyD message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.NestedReplyD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.NestedReplyD} NestedReplyD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NestedReplyD.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NestedReplyD message.
         * @function verify
         * @memberof helloworld.NestedReplyD
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NestedReplyD.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dname != null && message.hasOwnProperty("dname"))
                if (!$util.isString(message.dname))
                    return "dname: string expected";
            return null;
        };

        /**
         * Creates a NestedReplyD message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.NestedReplyD
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.NestedReplyD} NestedReplyD
         */
        NestedReplyD.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.NestedReplyD)
                return object;
            var message = new $root.helloworld.NestedReplyD();
            if (object.dname != null)
                message.dname = String(object.dname);
            return message;
        };

        /**
         * Creates a plain object from a NestedReplyD message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.NestedReplyD
         * @static
         * @param {helloworld.NestedReplyD} message NestedReplyD
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NestedReplyD.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.dname = "";
            if (message.dname != null && message.hasOwnProperty("dname"))
                object.dname = message.dname;
            return object;
        };

        /**
         * Converts this NestedReplyD to JSON.
         * @function toJSON
         * @memberof helloworld.NestedReplyD
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NestedReplyD.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NestedReplyD;
    })();

    /**
     * Gender enum.
     * @name helloworld.Gender
     * @enum {number}
     * @property {number} MALE=0 MALE value
     * @property {number} FEMALE=1 FEMALE value
     */
    helloworld.Gender = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MALE"] = 0;
        values[valuesById[1] = "FEMALE"] = 1;
        return values;
    })();

    helloworld.HelloRequestWithGender = (function() {

        /**
         * Properties of a HelloRequestWithGender.
         * @memberof helloworld
         * @interface IHelloRequestWithGender
         * @property {string|null} [name] HelloRequestWithGender name
         * @property {helloworld.Gender|null} [gender] HelloRequestWithGender gender
         */

        /**
         * Constructs a new HelloRequestWithGender.
         * @memberof helloworld
         * @classdesc Represents a HelloRequestWithGender.
         * @implements IHelloRequestWithGender
         * @constructor
         * @param {helloworld.IHelloRequestWithGender=} [properties] Properties to set
         */
        function HelloRequestWithGender(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloRequestWithGender name.
         * @member {string} name
         * @memberof helloworld.HelloRequestWithGender
         * @instance
         */
        HelloRequestWithGender.prototype.name = "";

        /**
         * HelloRequestWithGender gender.
         * @member {helloworld.Gender} gender
         * @memberof helloworld.HelloRequestWithGender
         * @instance
         */
        HelloRequestWithGender.prototype.gender = 0;

        /**
         * Creates a new HelloRequestWithGender instance using the specified properties.
         * @function create
         * @memberof helloworld.HelloRequestWithGender
         * @static
         * @param {helloworld.IHelloRequestWithGender=} [properties] Properties to set
         * @returns {helloworld.HelloRequestWithGender} HelloRequestWithGender instance
         */
        HelloRequestWithGender.create = function create(properties) {
            return new HelloRequestWithGender(properties);
        };

        /**
         * Encodes the specified HelloRequestWithGender message. Does not implicitly {@link helloworld.HelloRequestWithGender.verify|verify} messages.
         * @function encode
         * @memberof helloworld.HelloRequestWithGender
         * @static
         * @param {helloworld.IHelloRequestWithGender} message HelloRequestWithGender message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloRequestWithGender.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.gender != null && Object.hasOwnProperty.call(message, "gender"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gender);
            return writer;
        };

        /**
         * Encodes the specified HelloRequestWithGender message, length delimited. Does not implicitly {@link helloworld.HelloRequestWithGender.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.HelloRequestWithGender
         * @static
         * @param {helloworld.IHelloRequestWithGender} message HelloRequestWithGender message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloRequestWithGender.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloRequestWithGender message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.HelloRequestWithGender
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.HelloRequestWithGender} HelloRequestWithGender
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloRequestWithGender.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.HelloRequestWithGender();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.gender = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HelloRequestWithGender message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.HelloRequestWithGender
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.HelloRequestWithGender} HelloRequestWithGender
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloRequestWithGender.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloRequestWithGender message.
         * @function verify
         * @memberof helloworld.HelloRequestWithGender
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloRequestWithGender.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                switch (message.gender) {
                default:
                    return "gender: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a HelloRequestWithGender message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.HelloRequestWithGender
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.HelloRequestWithGender} HelloRequestWithGender
         */
        HelloRequestWithGender.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.HelloRequestWithGender)
                return object;
            var message = new $root.helloworld.HelloRequestWithGender();
            if (object.name != null)
                message.name = String(object.name);
            switch (object.gender) {
            case "MALE":
            case 0:
                message.gender = 0;
                break;
            case "FEMALE":
            case 1:
                message.gender = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a HelloRequestWithGender message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.HelloRequestWithGender
         * @static
         * @param {helloworld.HelloRequestWithGender} message HelloRequestWithGender
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloRequestWithGender.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.gender = options.enums === String ? "MALE" : 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = options.enums === String ? $root.helloworld.Gender[message.gender] : message.gender;
            return object;
        };

        /**
         * Converts this HelloRequestWithGender to JSON.
         * @function toJSON
         * @memberof helloworld.HelloRequestWithGender
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloRequestWithGender.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HelloRequestWithGender;
    })();

    helloworld.HelloReplyWithGender = (function() {

        /**
         * Properties of a HelloReplyWithGender.
         * @memberof helloworld
         * @interface IHelloReplyWithGender
         * @property {string|null} [message] HelloReplyWithGender message
         * @property {helloworld.Gender|null} [gender] HelloReplyWithGender gender
         */

        /**
         * Constructs a new HelloReplyWithGender.
         * @memberof helloworld
         * @classdesc Represents a HelloReplyWithGender.
         * @implements IHelloReplyWithGender
         * @constructor
         * @param {helloworld.IHelloReplyWithGender=} [properties] Properties to set
         */
        function HelloReplyWithGender(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloReplyWithGender message.
         * @member {string} message
         * @memberof helloworld.HelloReplyWithGender
         * @instance
         */
        HelloReplyWithGender.prototype.message = "";

        /**
         * HelloReplyWithGender gender.
         * @member {helloworld.Gender} gender
         * @memberof helloworld.HelloReplyWithGender
         * @instance
         */
        HelloReplyWithGender.prototype.gender = 0;

        /**
         * Creates a new HelloReplyWithGender instance using the specified properties.
         * @function create
         * @memberof helloworld.HelloReplyWithGender
         * @static
         * @param {helloworld.IHelloReplyWithGender=} [properties] Properties to set
         * @returns {helloworld.HelloReplyWithGender} HelloReplyWithGender instance
         */
        HelloReplyWithGender.create = function create(properties) {
            return new HelloReplyWithGender(properties);
        };

        /**
         * Encodes the specified HelloReplyWithGender message. Does not implicitly {@link helloworld.HelloReplyWithGender.verify|verify} messages.
         * @function encode
         * @memberof helloworld.HelloReplyWithGender
         * @static
         * @param {helloworld.IHelloReplyWithGender} message HelloReplyWithGender message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReplyWithGender.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            if (message.gender != null && Object.hasOwnProperty.call(message, "gender"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gender);
            return writer;
        };

        /**
         * Encodes the specified HelloReplyWithGender message, length delimited. Does not implicitly {@link helloworld.HelloReplyWithGender.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.HelloReplyWithGender
         * @static
         * @param {helloworld.IHelloReplyWithGender} message HelloReplyWithGender message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReplyWithGender.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloReplyWithGender message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.HelloReplyWithGender
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.HelloReplyWithGender} HelloReplyWithGender
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReplyWithGender.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.HelloReplyWithGender();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    message.gender = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HelloReplyWithGender message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.HelloReplyWithGender
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.HelloReplyWithGender} HelloReplyWithGender
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReplyWithGender.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloReplyWithGender message.
         * @function verify
         * @memberof helloworld.HelloReplyWithGender
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloReplyWithGender.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                switch (message.gender) {
                default:
                    return "gender: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a HelloReplyWithGender message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.HelloReplyWithGender
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.HelloReplyWithGender} HelloReplyWithGender
         */
        HelloReplyWithGender.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.HelloReplyWithGender)
                return object;
            var message = new $root.helloworld.HelloReplyWithGender();
            if (object.message != null)
                message.message = String(object.message);
            switch (object.gender) {
            case "MALE":
            case 0:
                message.gender = 0;
                break;
            case "FEMALE":
            case 1:
                message.gender = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a HelloReplyWithGender message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.HelloReplyWithGender
         * @static
         * @param {helloworld.HelloReplyWithGender} message HelloReplyWithGender
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloReplyWithGender.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.message = "";
                object.gender = options.enums === String ? "MALE" : 0;
            }
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = options.enums === String ? $root.helloworld.Gender[message.gender] : message.gender;
            return object;
        };

        /**
         * Converts this HelloReplyWithGender to JSON.
         * @function toJSON
         * @memberof helloworld.HelloReplyWithGender
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloReplyWithGender.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HelloReplyWithGender;
    })();

    return helloworld;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Empty = (function() {

            /**
             * Properties of an Empty.
             * @memberof google.protobuf
             * @interface IEmpty
             */

            /**
             * Constructs a new Empty.
             * @memberof google.protobuf
             * @classdesc Represents an Empty.
             * @implements IEmpty
             * @constructor
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Empty instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             * @returns {google.protobuf.Empty} Empty instance
             */
            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Empty message.
             * @function verify
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Empty} Empty
             */
            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Empty)
                    return object;
                return new $root.google.protobuf.Empty();
            };

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.Empty} message Empty
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Empty to JSON.
             * @function toJSON
             * @memberof google.protobuf.Empty
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Empty;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
