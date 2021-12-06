import * as $protobuf from "protobufjs";
/** Namespace helloworld. */
export namespace helloworld {

    /** Represents a Greeter */
    class Greeter extends $protobuf.rpc.Service {

        /**
         * Constructs a new Greeter service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Greeter service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Greeter;

        /**
         * Calls SayHello.
         * @param request HelloRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and HelloReply
         */
        public sayHello(request: helloworld.IHelloRequest, callback: helloworld.Greeter.SayHelloCallback): void;

        /**
         * Calls SayHello.
         * @param request HelloRequest message or plain object
         * @returns Promise
         */
        public sayHello(request: helloworld.IHelloRequest): Promise<helloworld.HelloReply>;

        /**
         * Calls SayHelloWithGender.
         * @param request HelloRequestWithGender message or plain object
         * @param callback Node-style callback called with the error, if any, and HelloReplyWithGender
         */
        public sayHelloWithGender(request: helloworld.IHelloRequestWithGender, callback: helloworld.Greeter.SayHelloWithGenderCallback): void;

        /**
         * Calls SayHelloWithGender.
         * @param request HelloRequestWithGender message or plain object
         * @returns Promise
         */
        public sayHelloWithGender(request: helloworld.IHelloRequestWithGender): Promise<helloworld.HelloReplyWithGender>;

        /**
         * Calls SayHelloAgain.
         * @param request HelloRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and HelloReply
         */
        public sayHelloAgain(request: helloworld.IHelloRequest, callback: helloworld.Greeter.SayHelloAgainCallback): void;

        /**
         * Calls SayHelloAgain.
         * @param request HelloRequest message or plain object
         * @returns Promise
         */
        public sayHelloAgain(request: helloworld.IHelloRequest): Promise<helloworld.HelloReply>;

        /**
         * Calls SayHelloReturnArray.
         * @param request HelloReturnArrayRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and HelloReturnArrayReply
         */
        public sayHelloReturnArray(request: helloworld.IHelloReturnArrayRequest, callback: helloworld.Greeter.SayHelloReturnArrayCallback): void;

        /**
         * Calls SayHelloReturnArray.
         * @param request HelloReturnArrayRequest message or plain object
         * @returns Promise
         */
        public sayHelloReturnArray(request: helloworld.IHelloReturnArrayRequest): Promise<helloworld.HelloReturnArrayReply>;

        /**
         * Calls SayHelloWithName.
         * @param request HelloRequestWithRequired message or plain object
         * @param callback Node-style callback called with the error, if any, and HelloReply
         */
        public sayHelloWithName(request: helloworld.IHelloRequestWithRequired, callback: helloworld.Greeter.SayHelloWithNameCallback): void;

        /**
         * Calls SayHelloWithName.
         * @param request HelloRequestWithRequired message or plain object
         * @returns Promise
         */
        public sayHelloWithName(request: helloworld.IHelloRequestWithRequired): Promise<helloworld.HelloReply>;

        /**
         * Calls SayIntArray.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and IntArrayReply
         */
        public sayIntArray(request: google.protobuf.IEmpty, callback: helloworld.Greeter.SayIntArrayCallback): void;

        /**
         * Calls SayIntArray.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public sayIntArray(request: google.protobuf.IEmpty): Promise<helloworld.IntArrayReply>;

        /**
         * Calls SayNested.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and NestedReplyA
         */
        public sayNested(request: google.protobuf.IEmpty, callback: helloworld.Greeter.SayNestedCallback): void;

        /**
         * Calls SayNested.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public sayNested(request: google.protobuf.IEmpty): Promise<helloworld.NestedReplyA>;
    }

    namespace Greeter {

        /**
         * Callback as used by {@link helloworld.Greeter#sayHello}.
         * @param error Error, if any
         * @param [response] HelloReply
         */
        type SayHelloCallback = (error: (Error|null), response?: helloworld.HelloReply) => void;

        /**
         * Callback as used by {@link helloworld.Greeter#sayHelloWithGender}.
         * @param error Error, if any
         * @param [response] HelloReplyWithGender
         */
        type SayHelloWithGenderCallback = (error: (Error|null), response?: helloworld.HelloReplyWithGender) => void;

        /**
         * Callback as used by {@link helloworld.Greeter#sayHelloAgain}.
         * @param error Error, if any
         * @param [response] HelloReply
         */
        type SayHelloAgainCallback = (error: (Error|null), response?: helloworld.HelloReply) => void;

        /**
         * Callback as used by {@link helloworld.Greeter#sayHelloReturnArray}.
         * @param error Error, if any
         * @param [response] HelloReturnArrayReply
         */
        type SayHelloReturnArrayCallback = (error: (Error|null), response?: helloworld.HelloReturnArrayReply) => void;

        /**
         * Callback as used by {@link helloworld.Greeter#sayHelloWithName}.
         * @param error Error, if any
         * @param [response] HelloReply
         */
        type SayHelloWithNameCallback = (error: (Error|null), response?: helloworld.HelloReply) => void;

        /**
         * Callback as used by {@link helloworld.Greeter#sayIntArray}.
         * @param error Error, if any
         * @param [response] IntArrayReply
         */
        type SayIntArrayCallback = (error: (Error|null), response?: helloworld.IntArrayReply) => void;

        /**
         * Callback as used by {@link helloworld.Greeter#sayNested}.
         * @param error Error, if any
         * @param [response] NestedReplyA
         */
        type SayNestedCallback = (error: (Error|null), response?: helloworld.NestedReplyA) => void;
    }

    /** Properties of a HelloRequest. */
    interface IHelloRequest {

        /** HelloRequest name */
        name?: (string|null);
    }

    /** Represents a HelloRequest. */
    class HelloRequest implements IHelloRequest {

        /**
         * Constructs a new HelloRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IHelloRequest);

        /** HelloRequest name. */
        public name: string;

        /**
         * Creates a new HelloRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HelloRequest instance
         */
        public static create(properties?: helloworld.IHelloRequest): helloworld.HelloRequest;

        /**
         * Encodes the specified HelloRequest message. Does not implicitly {@link helloworld.HelloRequest.verify|verify} messages.
         * @param message HelloRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IHelloRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HelloRequest message, length delimited. Does not implicitly {@link helloworld.HelloRequest.verify|verify} messages.
         * @param message HelloRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.IHelloRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HelloRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.HelloRequest;

        /**
         * Decodes a HelloRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.HelloRequest;

        /**
         * Verifies a HelloRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HelloRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HelloRequest
         */
        public static fromObject(object: { [k: string]: any }): helloworld.HelloRequest;

        /**
         * Creates a plain object from a HelloRequest message. Also converts values to other types if specified.
         * @param message HelloRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.HelloRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HelloRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HelloReturnArrayRequest. */
    interface IHelloReturnArrayRequest {

        /** HelloReturnArrayRequest name */
        name?: (string|null);

        /** HelloReturnArrayRequest list */
        list?: (helloworld.IHelloReturnArrayRequest_Int[]|null);
    }

    /** Represents a HelloReturnArrayRequest. */
    class HelloReturnArrayRequest implements IHelloReturnArrayRequest {

        /**
         * Constructs a new HelloReturnArrayRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IHelloReturnArrayRequest);

        /** HelloReturnArrayRequest name. */
        public name: string;

        /** HelloReturnArrayRequest list. */
        public list: helloworld.IHelloReturnArrayRequest_Int[];

        /**
         * Creates a new HelloReturnArrayRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HelloReturnArrayRequest instance
         */
        public static create(properties?: helloworld.IHelloReturnArrayRequest): helloworld.HelloReturnArrayRequest;

        /**
         * Encodes the specified HelloReturnArrayRequest message. Does not implicitly {@link helloworld.HelloReturnArrayRequest.verify|verify} messages.
         * @param message HelloReturnArrayRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IHelloReturnArrayRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HelloReturnArrayRequest message, length delimited. Does not implicitly {@link helloworld.HelloReturnArrayRequest.verify|verify} messages.
         * @param message HelloReturnArrayRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.IHelloReturnArrayRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HelloReturnArrayRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloReturnArrayRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.HelloReturnArrayRequest;

        /**
         * Decodes a HelloReturnArrayRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HelloReturnArrayRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.HelloReturnArrayRequest;

        /**
         * Verifies a HelloReturnArrayRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HelloReturnArrayRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HelloReturnArrayRequest
         */
        public static fromObject(object: { [k: string]: any }): helloworld.HelloReturnArrayRequest;

        /**
         * Creates a plain object from a HelloReturnArrayRequest message. Also converts values to other types if specified.
         * @param message HelloReturnArrayRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.HelloReturnArrayRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HelloReturnArrayRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HelloReturnArrayRequest_Int. */
    interface IHelloReturnArrayRequest_Int {

        /** HelloReturnArrayRequest_Int num */
        num?: (number|null);
    }

    /** Represents a HelloReturnArrayRequest_Int. */
    class HelloReturnArrayRequest_Int implements IHelloReturnArrayRequest_Int {

        /**
         * Constructs a new HelloReturnArrayRequest_Int.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IHelloReturnArrayRequest_Int);

        /** HelloReturnArrayRequest_Int num. */
        public num: number;

        /**
         * Creates a new HelloReturnArrayRequest_Int instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HelloReturnArrayRequest_Int instance
         */
        public static create(properties?: helloworld.IHelloReturnArrayRequest_Int): helloworld.HelloReturnArrayRequest_Int;

        /**
         * Encodes the specified HelloReturnArrayRequest_Int message. Does not implicitly {@link helloworld.HelloReturnArrayRequest_Int.verify|verify} messages.
         * @param message HelloReturnArrayRequest_Int message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IHelloReturnArrayRequest_Int, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HelloReturnArrayRequest_Int message, length delimited. Does not implicitly {@link helloworld.HelloReturnArrayRequest_Int.verify|verify} messages.
         * @param message HelloReturnArrayRequest_Int message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.IHelloReturnArrayRequest_Int, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HelloReturnArrayRequest_Int message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloReturnArrayRequest_Int
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.HelloReturnArrayRequest_Int;

        /**
         * Decodes a HelloReturnArrayRequest_Int message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HelloReturnArrayRequest_Int
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.HelloReturnArrayRequest_Int;

        /**
         * Verifies a HelloReturnArrayRequest_Int message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HelloReturnArrayRequest_Int message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HelloReturnArrayRequest_Int
         */
        public static fromObject(object: { [k: string]: any }): helloworld.HelloReturnArrayRequest_Int;

        /**
         * Creates a plain object from a HelloReturnArrayRequest_Int message. Also converts values to other types if specified.
         * @param message HelloReturnArrayRequest_Int
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.HelloReturnArrayRequest_Int, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HelloReturnArrayRequest_Int to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HelloReturnArrayReply_Int. */
    interface IHelloReturnArrayReply_Int {

        /** HelloReturnArrayReply_Int num */
        num?: (number|null);
    }

    /** Represents a HelloReturnArrayReply_Int. */
    class HelloReturnArrayReply_Int implements IHelloReturnArrayReply_Int {

        /**
         * Constructs a new HelloReturnArrayReply_Int.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IHelloReturnArrayReply_Int);

        /** HelloReturnArrayReply_Int num. */
        public num: number;

        /**
         * Creates a new HelloReturnArrayReply_Int instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HelloReturnArrayReply_Int instance
         */
        public static create(properties?: helloworld.IHelloReturnArrayReply_Int): helloworld.HelloReturnArrayReply_Int;

        /**
         * Encodes the specified HelloReturnArrayReply_Int message. Does not implicitly {@link helloworld.HelloReturnArrayReply_Int.verify|verify} messages.
         * @param message HelloReturnArrayReply_Int message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IHelloReturnArrayReply_Int, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HelloReturnArrayReply_Int message, length delimited. Does not implicitly {@link helloworld.HelloReturnArrayReply_Int.verify|verify} messages.
         * @param message HelloReturnArrayReply_Int message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.IHelloReturnArrayReply_Int, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HelloReturnArrayReply_Int message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloReturnArrayReply_Int
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.HelloReturnArrayReply_Int;

        /**
         * Decodes a HelloReturnArrayReply_Int message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HelloReturnArrayReply_Int
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.HelloReturnArrayReply_Int;

        /**
         * Verifies a HelloReturnArrayReply_Int message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HelloReturnArrayReply_Int message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HelloReturnArrayReply_Int
         */
        public static fromObject(object: { [k: string]: any }): helloworld.HelloReturnArrayReply_Int;

        /**
         * Creates a plain object from a HelloReturnArrayReply_Int message. Also converts values to other types if specified.
         * @param message HelloReturnArrayReply_Int
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.HelloReturnArrayReply_Int, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HelloReturnArrayReply_Int to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HelloRequestWithRequired. */
    interface IHelloRequestWithRequired {

        /** HelloRequestWithRequired name */
        name?: (string|null);
    }

    /** Represents a HelloRequestWithRequired. */
    class HelloRequestWithRequired implements IHelloRequestWithRequired {

        /**
         * Constructs a new HelloRequestWithRequired.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IHelloRequestWithRequired);

        /** HelloRequestWithRequired name. */
        public name: string;

        /**
         * Creates a new HelloRequestWithRequired instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HelloRequestWithRequired instance
         */
        public static create(properties?: helloworld.IHelloRequestWithRequired): helloworld.HelloRequestWithRequired;

        /**
         * Encodes the specified HelloRequestWithRequired message. Does not implicitly {@link helloworld.HelloRequestWithRequired.verify|verify} messages.
         * @param message HelloRequestWithRequired message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IHelloRequestWithRequired, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HelloRequestWithRequired message, length delimited. Does not implicitly {@link helloworld.HelloRequestWithRequired.verify|verify} messages.
         * @param message HelloRequestWithRequired message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.IHelloRequestWithRequired, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HelloRequestWithRequired message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloRequestWithRequired
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.HelloRequestWithRequired;

        /**
         * Decodes a HelloRequestWithRequired message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HelloRequestWithRequired
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.HelloRequestWithRequired;

        /**
         * Verifies a HelloRequestWithRequired message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HelloRequestWithRequired message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HelloRequestWithRequired
         */
        public static fromObject(object: { [k: string]: any }): helloworld.HelloRequestWithRequired;

        /**
         * Creates a plain object from a HelloRequestWithRequired message. Also converts values to other types if specified.
         * @param message HelloRequestWithRequired
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.HelloRequestWithRequired, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HelloRequestWithRequired to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HelloReply. */
    interface IHelloReply {

        /** HelloReply message */
        message?: (string|null);
    }

    /** Represents a HelloReply. */
    class HelloReply implements IHelloReply {

        /**
         * Constructs a new HelloReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IHelloReply);

        /** HelloReply message. */
        public message: string;

        /**
         * Creates a new HelloReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HelloReply instance
         */
        public static create(properties?: helloworld.IHelloReply): helloworld.HelloReply;

        /**
         * Encodes the specified HelloReply message. Does not implicitly {@link helloworld.HelloReply.verify|verify} messages.
         * @param message HelloReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IHelloReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HelloReply message, length delimited. Does not implicitly {@link helloworld.HelloReply.verify|verify} messages.
         * @param message HelloReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.IHelloReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HelloReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.HelloReply;

        /**
         * Decodes a HelloReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.HelloReply;

        /**
         * Verifies a HelloReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HelloReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HelloReply
         */
        public static fromObject(object: { [k: string]: any }): helloworld.HelloReply;

        /**
         * Creates a plain object from a HelloReply message. Also converts values to other types if specified.
         * @param message HelloReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.HelloReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HelloReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HelloReturnArrayReply. */
    interface IHelloReturnArrayReply {

        /** HelloReturnArrayReply message */
        message?: (string|null);

        /** HelloReturnArrayReply list */
        list?: (helloworld.IHelloReturnArrayReply_Int[]|null);
    }

    /** Represents a HelloReturnArrayReply. */
    class HelloReturnArrayReply implements IHelloReturnArrayReply {

        /**
         * Constructs a new HelloReturnArrayReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IHelloReturnArrayReply);

        /** HelloReturnArrayReply message. */
        public message: string;

        /** HelloReturnArrayReply list. */
        public list: helloworld.IHelloReturnArrayReply_Int[];

        /**
         * Creates a new HelloReturnArrayReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HelloReturnArrayReply instance
         */
        public static create(properties?: helloworld.IHelloReturnArrayReply): helloworld.HelloReturnArrayReply;

        /**
         * Encodes the specified HelloReturnArrayReply message. Does not implicitly {@link helloworld.HelloReturnArrayReply.verify|verify} messages.
         * @param message HelloReturnArrayReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IHelloReturnArrayReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HelloReturnArrayReply message, length delimited. Does not implicitly {@link helloworld.HelloReturnArrayReply.verify|verify} messages.
         * @param message HelloReturnArrayReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.IHelloReturnArrayReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HelloReturnArrayReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloReturnArrayReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.HelloReturnArrayReply;

        /**
         * Decodes a HelloReturnArrayReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HelloReturnArrayReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.HelloReturnArrayReply;

        /**
         * Verifies a HelloReturnArrayReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HelloReturnArrayReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HelloReturnArrayReply
         */
        public static fromObject(object: { [k: string]: any }): helloworld.HelloReturnArrayReply;

        /**
         * Creates a plain object from a HelloReturnArrayReply message. Also converts values to other types if specified.
         * @param message HelloReturnArrayReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.HelloReturnArrayReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HelloReturnArrayReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an IntArrayReply. */
    interface IIntArrayReply {

        /** IntArrayReply nums */
        nums?: (number[]|null);
    }

    /** Represents an IntArrayReply. */
    class IntArrayReply implements IIntArrayReply {

        /**
         * Constructs a new IntArrayReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IIntArrayReply);

        /** IntArrayReply nums. */
        public nums: number[];

        /**
         * Creates a new IntArrayReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IntArrayReply instance
         */
        public static create(properties?: helloworld.IIntArrayReply): helloworld.IntArrayReply;

        /**
         * Encodes the specified IntArrayReply message. Does not implicitly {@link helloworld.IntArrayReply.verify|verify} messages.
         * @param message IntArrayReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IIntArrayReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IntArrayReply message, length delimited. Does not implicitly {@link helloworld.IntArrayReply.verify|verify} messages.
         * @param message IntArrayReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.IIntArrayReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IntArrayReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IntArrayReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.IntArrayReply;

        /**
         * Decodes an IntArrayReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IntArrayReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.IntArrayReply;

        /**
         * Verifies an IntArrayReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IntArrayReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IntArrayReply
         */
        public static fromObject(object: { [k: string]: any }): helloworld.IntArrayReply;

        /**
         * Creates a plain object from an IntArrayReply message. Also converts values to other types if specified.
         * @param message IntArrayReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.IntArrayReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IntArrayReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NestedReplyA. */
    interface INestedReplyA {

        /** NestedReplyA x */
        x?: (helloworld.INestedReplyB|null);
    }

    /** Represents a NestedReplyA. */
    class NestedReplyA implements INestedReplyA {

        /**
         * Constructs a new NestedReplyA.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.INestedReplyA);

        /** NestedReplyA x. */
        public x?: (helloworld.INestedReplyB|null);

        /**
         * Creates a new NestedReplyA instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NestedReplyA instance
         */
        public static create(properties?: helloworld.INestedReplyA): helloworld.NestedReplyA;

        /**
         * Encodes the specified NestedReplyA message. Does not implicitly {@link helloworld.NestedReplyA.verify|verify} messages.
         * @param message NestedReplyA message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.INestedReplyA, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NestedReplyA message, length delimited. Does not implicitly {@link helloworld.NestedReplyA.verify|verify} messages.
         * @param message NestedReplyA message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.INestedReplyA, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NestedReplyA message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NestedReplyA
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.NestedReplyA;

        /**
         * Decodes a NestedReplyA message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NestedReplyA
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.NestedReplyA;

        /**
         * Verifies a NestedReplyA message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NestedReplyA message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NestedReplyA
         */
        public static fromObject(object: { [k: string]: any }): helloworld.NestedReplyA;

        /**
         * Creates a plain object from a NestedReplyA message. Also converts values to other types if specified.
         * @param message NestedReplyA
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.NestedReplyA, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NestedReplyA to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NestedReplyB. */
    interface INestedReplyB {

        /** NestedReplyB name */
        name?: (string|null);

        /** NestedReplyB c */
        c?: (helloworld.INestedReplyC|null);

        /** NestedReplyB d */
        d?: (helloworld.INestedReplyD|null);
    }

    /** Represents a NestedReplyB. */
    class NestedReplyB implements INestedReplyB {

        /**
         * Constructs a new NestedReplyB.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.INestedReplyB);

        /** NestedReplyB name. */
        public name: string;

        /** NestedReplyB c. */
        public c?: (helloworld.INestedReplyC|null);

        /** NestedReplyB d. */
        public d?: (helloworld.INestedReplyD|null);

        /**
         * Creates a new NestedReplyB instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NestedReplyB instance
         */
        public static create(properties?: helloworld.INestedReplyB): helloworld.NestedReplyB;

        /**
         * Encodes the specified NestedReplyB message. Does not implicitly {@link helloworld.NestedReplyB.verify|verify} messages.
         * @param message NestedReplyB message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.INestedReplyB, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NestedReplyB message, length delimited. Does not implicitly {@link helloworld.NestedReplyB.verify|verify} messages.
         * @param message NestedReplyB message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.INestedReplyB, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NestedReplyB message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NestedReplyB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.NestedReplyB;

        /**
         * Decodes a NestedReplyB message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NestedReplyB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.NestedReplyB;

        /**
         * Verifies a NestedReplyB message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NestedReplyB message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NestedReplyB
         */
        public static fromObject(object: { [k: string]: any }): helloworld.NestedReplyB;

        /**
         * Creates a plain object from a NestedReplyB message. Also converts values to other types if specified.
         * @param message NestedReplyB
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.NestedReplyB, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NestedReplyB to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NestedReplyC. */
    interface INestedReplyC {

        /** NestedReplyC cname */
        cname?: (string|null);

        /** NestedReplyC d */
        d?: (helloworld.INestedReplyD|null);

        /** NestedReplyC anums */
        anums?: (number[]|null);

        /** NestedReplyC snums */
        snums?: (number|null);
    }

    /** Represents a NestedReplyC. */
    class NestedReplyC implements INestedReplyC {

        /**
         * Constructs a new NestedReplyC.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.INestedReplyC);

        /** NestedReplyC cname. */
        public cname: string;

        /** NestedReplyC d. */
        public d?: (helloworld.INestedReplyD|null);

        /** NestedReplyC anums. */
        public anums: number[];

        /** NestedReplyC snums. */
        public snums: number;

        /**
         * Creates a new NestedReplyC instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NestedReplyC instance
         */
        public static create(properties?: helloworld.INestedReplyC): helloworld.NestedReplyC;

        /**
         * Encodes the specified NestedReplyC message. Does not implicitly {@link helloworld.NestedReplyC.verify|verify} messages.
         * @param message NestedReplyC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.INestedReplyC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NestedReplyC message, length delimited. Does not implicitly {@link helloworld.NestedReplyC.verify|verify} messages.
         * @param message NestedReplyC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.INestedReplyC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NestedReplyC message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NestedReplyC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.NestedReplyC;

        /**
         * Decodes a NestedReplyC message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NestedReplyC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.NestedReplyC;

        /**
         * Verifies a NestedReplyC message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NestedReplyC message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NestedReplyC
         */
        public static fromObject(object: { [k: string]: any }): helloworld.NestedReplyC;

        /**
         * Creates a plain object from a NestedReplyC message. Also converts values to other types if specified.
         * @param message NestedReplyC
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.NestedReplyC, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NestedReplyC to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NestedReplyD. */
    interface INestedReplyD {

        /** NestedReplyD dname */
        dname?: (string|null);
    }

    /** Represents a NestedReplyD. */
    class NestedReplyD implements INestedReplyD {

        /**
         * Constructs a new NestedReplyD.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.INestedReplyD);

        /** NestedReplyD dname. */
        public dname: string;

        /**
         * Creates a new NestedReplyD instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NestedReplyD instance
         */
        public static create(properties?: helloworld.INestedReplyD): helloworld.NestedReplyD;

        /**
         * Encodes the specified NestedReplyD message. Does not implicitly {@link helloworld.NestedReplyD.verify|verify} messages.
         * @param message NestedReplyD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.INestedReplyD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NestedReplyD message, length delimited. Does not implicitly {@link helloworld.NestedReplyD.verify|verify} messages.
         * @param message NestedReplyD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.INestedReplyD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NestedReplyD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NestedReplyD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.NestedReplyD;

        /**
         * Decodes a NestedReplyD message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NestedReplyD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.NestedReplyD;

        /**
         * Verifies a NestedReplyD message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NestedReplyD message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NestedReplyD
         */
        public static fromObject(object: { [k: string]: any }): helloworld.NestedReplyD;

        /**
         * Creates a plain object from a NestedReplyD message. Also converts values to other types if specified.
         * @param message NestedReplyD
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.NestedReplyD, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NestedReplyD to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Gender enum. */
    enum Gender {
        MALE = 0,
        FEMALE = 1
    }

    /** Properties of a HelloRequestWithGender. */
    interface IHelloRequestWithGender {

        /** HelloRequestWithGender name */
        name?: (string|null);

        /** HelloRequestWithGender gender */
        gender?: (helloworld.Gender|null);
    }

    /** Represents a HelloRequestWithGender. */
    class HelloRequestWithGender implements IHelloRequestWithGender {

        /**
         * Constructs a new HelloRequestWithGender.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IHelloRequestWithGender);

        /** HelloRequestWithGender name. */
        public name: string;

        /** HelloRequestWithGender gender. */
        public gender: helloworld.Gender;

        /**
         * Creates a new HelloRequestWithGender instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HelloRequestWithGender instance
         */
        public static create(properties?: helloworld.IHelloRequestWithGender): helloworld.HelloRequestWithGender;

        /**
         * Encodes the specified HelloRequestWithGender message. Does not implicitly {@link helloworld.HelloRequestWithGender.verify|verify} messages.
         * @param message HelloRequestWithGender message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IHelloRequestWithGender, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HelloRequestWithGender message, length delimited. Does not implicitly {@link helloworld.HelloRequestWithGender.verify|verify} messages.
         * @param message HelloRequestWithGender message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.IHelloRequestWithGender, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HelloRequestWithGender message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloRequestWithGender
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.HelloRequestWithGender;

        /**
         * Decodes a HelloRequestWithGender message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HelloRequestWithGender
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.HelloRequestWithGender;

        /**
         * Verifies a HelloRequestWithGender message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HelloRequestWithGender message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HelloRequestWithGender
         */
        public static fromObject(object: { [k: string]: any }): helloworld.HelloRequestWithGender;

        /**
         * Creates a plain object from a HelloRequestWithGender message. Also converts values to other types if specified.
         * @param message HelloRequestWithGender
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.HelloRequestWithGender, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HelloRequestWithGender to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HelloReplyWithGender. */
    interface IHelloReplyWithGender {

        /** HelloReplyWithGender message */
        message?: (string|null);

        /** HelloReplyWithGender gender */
        gender?: (helloworld.Gender|null);
    }

    /** Represents a HelloReplyWithGender. */
    class HelloReplyWithGender implements IHelloReplyWithGender {

        /**
         * Constructs a new HelloReplyWithGender.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IHelloReplyWithGender);

        /** HelloReplyWithGender message. */
        public message: string;

        /** HelloReplyWithGender gender. */
        public gender: helloworld.Gender;

        /**
         * Creates a new HelloReplyWithGender instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HelloReplyWithGender instance
         */
        public static create(properties?: helloworld.IHelloReplyWithGender): helloworld.HelloReplyWithGender;

        /**
         * Encodes the specified HelloReplyWithGender message. Does not implicitly {@link helloworld.HelloReplyWithGender.verify|verify} messages.
         * @param message HelloReplyWithGender message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IHelloReplyWithGender, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HelloReplyWithGender message, length delimited. Does not implicitly {@link helloworld.HelloReplyWithGender.verify|verify} messages.
         * @param message HelloReplyWithGender message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.IHelloReplyWithGender, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HelloReplyWithGender message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloReplyWithGender
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.HelloReplyWithGender;

        /**
         * Decodes a HelloReplyWithGender message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HelloReplyWithGender
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.HelloReplyWithGender;

        /**
         * Verifies a HelloReplyWithGender message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HelloReplyWithGender message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HelloReplyWithGender
         */
        public static fromObject(object: { [k: string]: any }): helloworld.HelloReplyWithGender;

        /**
         * Creates a plain object from a HelloReplyWithGender message. Also converts values to other types if specified.
         * @param message HelloReplyWithGender
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.HelloReplyWithGender, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HelloReplyWithGender to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
