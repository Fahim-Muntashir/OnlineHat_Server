
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model BuyerProfile
 * 
 */
export type BuyerProfile = $Result.DefaultSelection<Prisma.$BuyerProfilePayload>
/**
 * Model SellerProfile
 * 
 */
export type SellerProfile = $Result.DefaultSelection<Prisma.$SellerProfilePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model ServicePackage
 * 
 */
export type ServicePackage = $Result.DefaultSelection<Prisma.$ServicePackagePayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  BUYER: 'BUYER',
  SELLER: 'SELLER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const OrderStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  DELIVERED: 'DELIVERED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PackageType: {
  BASIC: 'BASIC',
  STANDARD: 'STANDARD',
  PREMIUM: 'PREMIUM'
};

export type PackageType = (typeof PackageType)[keyof typeof PackageType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PackageType = $Enums.PackageType

export const PackageType: typeof $Enums.PackageType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.buyerProfile`: Exposes CRUD operations for the **BuyerProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BuyerProfiles
    * const buyerProfiles = await prisma.buyerProfile.findMany()
    * ```
    */
  get buyerProfile(): Prisma.BuyerProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sellerProfile`: Exposes CRUD operations for the **SellerProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SellerProfiles
    * const sellerProfiles = await prisma.sellerProfile.findMany()
    * ```
    */
  get sellerProfile(): Prisma.SellerProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicePackage`: Exposes CRUD operations for the **ServicePackage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServicePackages
    * const servicePackages = await prisma.servicePackage.findMany()
    * ```
    */
  get servicePackage(): Prisma.ServicePackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    BuyerProfile: 'BuyerProfile',
    SellerProfile: 'SellerProfile',
    Category: 'Category',
    ServicePackage: 'ServicePackage',
    Service: 'Service',
    Order: 'Order',
    Payment: 'Payment',
    Review: 'Review',
    Conversation: 'Conversation',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "buyerProfile" | "sellerProfile" | "category" | "servicePackage" | "service" | "order" | "payment" | "review" | "conversation" | "message"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      BuyerProfile: {
        payload: Prisma.$BuyerProfilePayload<ExtArgs>
        fields: Prisma.BuyerProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuyerProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuyerProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerProfilePayload>
          }
          findFirst: {
            args: Prisma.BuyerProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuyerProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerProfilePayload>
          }
          findMany: {
            args: Prisma.BuyerProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerProfilePayload>[]
          }
          create: {
            args: Prisma.BuyerProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerProfilePayload>
          }
          createMany: {
            args: Prisma.BuyerProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BuyerProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerProfilePayload>[]
          }
          delete: {
            args: Prisma.BuyerProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerProfilePayload>
          }
          update: {
            args: Prisma.BuyerProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerProfilePayload>
          }
          deleteMany: {
            args: Prisma.BuyerProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BuyerProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BuyerProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerProfilePayload>[]
          }
          upsert: {
            args: Prisma.BuyerProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerProfilePayload>
          }
          aggregate: {
            args: Prisma.BuyerProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuyerProfile>
          }
          groupBy: {
            args: Prisma.BuyerProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuyerProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuyerProfileCountArgs<ExtArgs>
            result: $Utils.Optional<BuyerProfileCountAggregateOutputType> | number
          }
        }
      }
      SellerProfile: {
        payload: Prisma.$SellerProfilePayload<ExtArgs>
        fields: Prisma.SellerProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SellerProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SellerProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerProfilePayload>
          }
          findFirst: {
            args: Prisma.SellerProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SellerProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerProfilePayload>
          }
          findMany: {
            args: Prisma.SellerProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerProfilePayload>[]
          }
          create: {
            args: Prisma.SellerProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerProfilePayload>
          }
          createMany: {
            args: Prisma.SellerProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SellerProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerProfilePayload>[]
          }
          delete: {
            args: Prisma.SellerProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerProfilePayload>
          }
          update: {
            args: Prisma.SellerProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerProfilePayload>
          }
          deleteMany: {
            args: Prisma.SellerProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SellerProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SellerProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerProfilePayload>[]
          }
          upsert: {
            args: Prisma.SellerProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerProfilePayload>
          }
          aggregate: {
            args: Prisma.SellerProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSellerProfile>
          }
          groupBy: {
            args: Prisma.SellerProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<SellerProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.SellerProfileCountArgs<ExtArgs>
            result: $Utils.Optional<SellerProfileCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      ServicePackage: {
        payload: Prisma.$ServicePackagePayload<ExtArgs>
        fields: Prisma.ServicePackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicePackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicePackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePackagePayload>
          }
          findFirst: {
            args: Prisma.ServicePackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicePackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePackagePayload>
          }
          findMany: {
            args: Prisma.ServicePackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePackagePayload>[]
          }
          create: {
            args: Prisma.ServicePackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePackagePayload>
          }
          createMany: {
            args: Prisma.ServicePackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicePackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePackagePayload>[]
          }
          delete: {
            args: Prisma.ServicePackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePackagePayload>
          }
          update: {
            args: Prisma.ServicePackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePackagePayload>
          }
          deleteMany: {
            args: Prisma.ServicePackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicePackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicePackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePackagePayload>[]
          }
          upsert: {
            args: Prisma.ServicePackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePackagePayload>
          }
          aggregate: {
            args: Prisma.ServicePackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicePackage>
          }
          groupBy: {
            args: Prisma.ServicePackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicePackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicePackageCountArgs<ExtArgs>
            result: $Utils.Optional<ServicePackageCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    buyerProfile?: BuyerProfileOmit
    sellerProfile?: SellerProfileOmit
    category?: CategoryOmit
    servicePackage?: ServicePackageOmit
    service?: ServiceOmit
    order?: OrderOmit
    payment?: PaymentOmit
    review?: ReviewOmit
    conversation?: ConversationOmit
    message?: MessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BuyerProfileCountOutputType
   */

  export type BuyerProfileCountOutputType = {
    savedServices: number
    orders: number
    reviews: number
    conversations: number
    sentMessages: number
  }

  export type BuyerProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedServices?: boolean | BuyerProfileCountOutputTypeCountSavedServicesArgs
    orders?: boolean | BuyerProfileCountOutputTypeCountOrdersArgs
    reviews?: boolean | BuyerProfileCountOutputTypeCountReviewsArgs
    conversations?: boolean | BuyerProfileCountOutputTypeCountConversationsArgs
    sentMessages?: boolean | BuyerProfileCountOutputTypeCountSentMessagesArgs
  }

  // Custom InputTypes
  /**
   * BuyerProfileCountOutputType without action
   */
  export type BuyerProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerProfileCountOutputType
     */
    select?: BuyerProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BuyerProfileCountOutputType without action
   */
  export type BuyerProfileCountOutputTypeCountSavedServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * BuyerProfileCountOutputType without action
   */
  export type BuyerProfileCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * BuyerProfileCountOutputType without action
   */
  export type BuyerProfileCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * BuyerProfileCountOutputType without action
   */
  export type BuyerProfileCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }

  /**
   * BuyerProfileCountOutputType without action
   */
  export type BuyerProfileCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type SellerProfileCountOutputType
   */

  export type SellerProfileCountOutputType = {
    services: number
    orders: number
    conversations: number
    sentMessages: number
  }

  export type SellerProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | SellerProfileCountOutputTypeCountServicesArgs
    orders?: boolean | SellerProfileCountOutputTypeCountOrdersArgs
    conversations?: boolean | SellerProfileCountOutputTypeCountConversationsArgs
    sentMessages?: boolean | SellerProfileCountOutputTypeCountSentMessagesArgs
  }

  // Custom InputTypes
  /**
   * SellerProfileCountOutputType without action
   */
  export type SellerProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfileCountOutputType
     */
    select?: SellerProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SellerProfileCountOutputType without action
   */
  export type SellerProfileCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * SellerProfileCountOutputType without action
   */
  export type SellerProfileCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * SellerProfileCountOutputType without action
   */
  export type SellerProfileCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }

  /**
   * SellerProfileCountOutputType without action
   */
  export type SellerProfileCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    services: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | CategoryCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    packages: number
    orders: number
    reviews: number
    savedBy: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    packages?: boolean | ServiceCountOutputTypeCountPackagesArgs
    orders?: boolean | ServiceCountOutputTypeCountOrdersArgs
    reviews?: boolean | ServiceCountOutputTypeCountReviewsArgs
    savedBy?: boolean | ServiceCountOutputTypeCountSavedByArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicePackageWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountSavedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuyerProfileWhereInput
  }


  /**
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    messages: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    profileImage: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    profileImage: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    profileImage: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    profileImage?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    profileImage?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    profileImage?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string | null
    role: $Enums.Role
    profileImage: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    profileImage?: boolean
    createdAt?: boolean
    buyerProfile?: boolean | User$buyerProfileArgs<ExtArgs>
    sellerProfile?: boolean | User$sellerProfileArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    profileImage?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    profileImage?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    profileImage?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "profileImage" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyerProfile?: boolean | User$buyerProfileArgs<ExtArgs>
    sellerProfile?: boolean | User$sellerProfileArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      buyerProfile: Prisma.$BuyerProfilePayload<ExtArgs> | null
      sellerProfile: Prisma.$SellerProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string | null
      role: $Enums.Role
      profileImage: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buyerProfile<T extends User$buyerProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$buyerProfileArgs<ExtArgs>>): Prisma__BuyerProfileClient<$Result.GetResult<Prisma.$BuyerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sellerProfile<T extends User$sellerProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$sellerProfileArgs<ExtArgs>>): Prisma__SellerProfileClient<$Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.buyerProfile
   */
  export type User$buyerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerProfile
     */
    select?: BuyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerProfile
     */
    omit?: BuyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerProfileInclude<ExtArgs> | null
    where?: BuyerProfileWhereInput
  }

  /**
   * User.sellerProfile
   */
  export type User$sellerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfile
     */
    select?: SellerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfile
     */
    omit?: SellerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfileInclude<ExtArgs> | null
    where?: SellerProfileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model BuyerProfile
   */

  export type AggregateBuyerProfile = {
    _count: BuyerProfileCountAggregateOutputType | null
    _min: BuyerProfileMinAggregateOutputType | null
    _max: BuyerProfileMaxAggregateOutputType | null
  }

  export type BuyerProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bio: string | null
    phone: string | null
    address: string | null
    profileImage: string | null
  }

  export type BuyerProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bio: string | null
    phone: string | null
    address: string | null
    profileImage: string | null
  }

  export type BuyerProfileCountAggregateOutputType = {
    id: number
    userId: number
    bio: number
    phone: number
    address: number
    profileImage: number
    _all: number
  }


  export type BuyerProfileMinAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    phone?: true
    address?: true
    profileImage?: true
  }

  export type BuyerProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    phone?: true
    address?: true
    profileImage?: true
  }

  export type BuyerProfileCountAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    phone?: true
    address?: true
    profileImage?: true
    _all?: true
  }

  export type BuyerProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BuyerProfile to aggregate.
     */
    where?: BuyerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuyerProfiles to fetch.
     */
    orderBy?: BuyerProfileOrderByWithRelationInput | BuyerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuyerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuyerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuyerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BuyerProfiles
    **/
    _count?: true | BuyerProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuyerProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuyerProfileMaxAggregateInputType
  }

  export type GetBuyerProfileAggregateType<T extends BuyerProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateBuyerProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuyerProfile[P]>
      : GetScalarType<T[P], AggregateBuyerProfile[P]>
  }




  export type BuyerProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuyerProfileWhereInput
    orderBy?: BuyerProfileOrderByWithAggregationInput | BuyerProfileOrderByWithAggregationInput[]
    by: BuyerProfileScalarFieldEnum[] | BuyerProfileScalarFieldEnum
    having?: BuyerProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuyerProfileCountAggregateInputType | true
    _min?: BuyerProfileMinAggregateInputType
    _max?: BuyerProfileMaxAggregateInputType
  }

  export type BuyerProfileGroupByOutputType = {
    id: string
    userId: string
    bio: string | null
    phone: string | null
    address: string | null
    profileImage: string | null
    _count: BuyerProfileCountAggregateOutputType | null
    _min: BuyerProfileMinAggregateOutputType | null
    _max: BuyerProfileMaxAggregateOutputType | null
  }

  type GetBuyerProfileGroupByPayload<T extends BuyerProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuyerProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuyerProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuyerProfileGroupByOutputType[P]>
            : GetScalarType<T[P], BuyerProfileGroupByOutputType[P]>
        }
      >
    >


  export type BuyerProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    phone?: boolean
    address?: boolean
    profileImage?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    savedServices?: boolean | BuyerProfile$savedServicesArgs<ExtArgs>
    orders?: boolean | BuyerProfile$ordersArgs<ExtArgs>
    reviews?: boolean | BuyerProfile$reviewsArgs<ExtArgs>
    conversations?: boolean | BuyerProfile$conversationsArgs<ExtArgs>
    sentMessages?: boolean | BuyerProfile$sentMessagesArgs<ExtArgs>
    _count?: boolean | BuyerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buyerProfile"]>

  export type BuyerProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    phone?: boolean
    address?: boolean
    profileImage?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buyerProfile"]>

  export type BuyerProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    phone?: boolean
    address?: boolean
    profileImage?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buyerProfile"]>

  export type BuyerProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    bio?: boolean
    phone?: boolean
    address?: boolean
    profileImage?: boolean
  }

  export type BuyerProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bio" | "phone" | "address" | "profileImage", ExtArgs["result"]["buyerProfile"]>
  export type BuyerProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    savedServices?: boolean | BuyerProfile$savedServicesArgs<ExtArgs>
    orders?: boolean | BuyerProfile$ordersArgs<ExtArgs>
    reviews?: boolean | BuyerProfile$reviewsArgs<ExtArgs>
    conversations?: boolean | BuyerProfile$conversationsArgs<ExtArgs>
    sentMessages?: boolean | BuyerProfile$sentMessagesArgs<ExtArgs>
    _count?: boolean | BuyerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BuyerProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BuyerProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BuyerProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BuyerProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      savedServices: Prisma.$ServicePayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
      sentMessages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bio: string | null
      phone: string | null
      address: string | null
      profileImage: string | null
    }, ExtArgs["result"]["buyerProfile"]>
    composites: {}
  }

  type BuyerProfileGetPayload<S extends boolean | null | undefined | BuyerProfileDefaultArgs> = $Result.GetResult<Prisma.$BuyerProfilePayload, S>

  type BuyerProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BuyerProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BuyerProfileCountAggregateInputType | true
    }

  export interface BuyerProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BuyerProfile'], meta: { name: 'BuyerProfile' } }
    /**
     * Find zero or one BuyerProfile that matches the filter.
     * @param {BuyerProfileFindUniqueArgs} args - Arguments to find a BuyerProfile
     * @example
     * // Get one BuyerProfile
     * const buyerProfile = await prisma.buyerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BuyerProfileFindUniqueArgs>(args: SelectSubset<T, BuyerProfileFindUniqueArgs<ExtArgs>>): Prisma__BuyerProfileClient<$Result.GetResult<Prisma.$BuyerProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BuyerProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BuyerProfileFindUniqueOrThrowArgs} args - Arguments to find a BuyerProfile
     * @example
     * // Get one BuyerProfile
     * const buyerProfile = await prisma.buyerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BuyerProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, BuyerProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BuyerProfileClient<$Result.GetResult<Prisma.$BuyerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BuyerProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerProfileFindFirstArgs} args - Arguments to find a BuyerProfile
     * @example
     * // Get one BuyerProfile
     * const buyerProfile = await prisma.buyerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BuyerProfileFindFirstArgs>(args?: SelectSubset<T, BuyerProfileFindFirstArgs<ExtArgs>>): Prisma__BuyerProfileClient<$Result.GetResult<Prisma.$BuyerProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BuyerProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerProfileFindFirstOrThrowArgs} args - Arguments to find a BuyerProfile
     * @example
     * // Get one BuyerProfile
     * const buyerProfile = await prisma.buyerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BuyerProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, BuyerProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__BuyerProfileClient<$Result.GetResult<Prisma.$BuyerProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BuyerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BuyerProfiles
     * const buyerProfiles = await prisma.buyerProfile.findMany()
     * 
     * // Get first 10 BuyerProfiles
     * const buyerProfiles = await prisma.buyerProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buyerProfileWithIdOnly = await prisma.buyerProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BuyerProfileFindManyArgs>(args?: SelectSubset<T, BuyerProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuyerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BuyerProfile.
     * @param {BuyerProfileCreateArgs} args - Arguments to create a BuyerProfile.
     * @example
     * // Create one BuyerProfile
     * const BuyerProfile = await prisma.buyerProfile.create({
     *   data: {
     *     // ... data to create a BuyerProfile
     *   }
     * })
     * 
     */
    create<T extends BuyerProfileCreateArgs>(args: SelectSubset<T, BuyerProfileCreateArgs<ExtArgs>>): Prisma__BuyerProfileClient<$Result.GetResult<Prisma.$BuyerProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BuyerProfiles.
     * @param {BuyerProfileCreateManyArgs} args - Arguments to create many BuyerProfiles.
     * @example
     * // Create many BuyerProfiles
     * const buyerProfile = await prisma.buyerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BuyerProfileCreateManyArgs>(args?: SelectSubset<T, BuyerProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BuyerProfiles and returns the data saved in the database.
     * @param {BuyerProfileCreateManyAndReturnArgs} args - Arguments to create many BuyerProfiles.
     * @example
     * // Create many BuyerProfiles
     * const buyerProfile = await prisma.buyerProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BuyerProfiles and only return the `id`
     * const buyerProfileWithIdOnly = await prisma.buyerProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BuyerProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, BuyerProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuyerProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BuyerProfile.
     * @param {BuyerProfileDeleteArgs} args - Arguments to delete one BuyerProfile.
     * @example
     * // Delete one BuyerProfile
     * const BuyerProfile = await prisma.buyerProfile.delete({
     *   where: {
     *     // ... filter to delete one BuyerProfile
     *   }
     * })
     * 
     */
    delete<T extends BuyerProfileDeleteArgs>(args: SelectSubset<T, BuyerProfileDeleteArgs<ExtArgs>>): Prisma__BuyerProfileClient<$Result.GetResult<Prisma.$BuyerProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BuyerProfile.
     * @param {BuyerProfileUpdateArgs} args - Arguments to update one BuyerProfile.
     * @example
     * // Update one BuyerProfile
     * const buyerProfile = await prisma.buyerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BuyerProfileUpdateArgs>(args: SelectSubset<T, BuyerProfileUpdateArgs<ExtArgs>>): Prisma__BuyerProfileClient<$Result.GetResult<Prisma.$BuyerProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BuyerProfiles.
     * @param {BuyerProfileDeleteManyArgs} args - Arguments to filter BuyerProfiles to delete.
     * @example
     * // Delete a few BuyerProfiles
     * const { count } = await prisma.buyerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BuyerProfileDeleteManyArgs>(args?: SelectSubset<T, BuyerProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BuyerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BuyerProfiles
     * const buyerProfile = await prisma.buyerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BuyerProfileUpdateManyArgs>(args: SelectSubset<T, BuyerProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BuyerProfiles and returns the data updated in the database.
     * @param {BuyerProfileUpdateManyAndReturnArgs} args - Arguments to update many BuyerProfiles.
     * @example
     * // Update many BuyerProfiles
     * const buyerProfile = await prisma.buyerProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BuyerProfiles and only return the `id`
     * const buyerProfileWithIdOnly = await prisma.buyerProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BuyerProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, BuyerProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuyerProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BuyerProfile.
     * @param {BuyerProfileUpsertArgs} args - Arguments to update or create a BuyerProfile.
     * @example
     * // Update or create a BuyerProfile
     * const buyerProfile = await prisma.buyerProfile.upsert({
     *   create: {
     *     // ... data to create a BuyerProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BuyerProfile we want to update
     *   }
     * })
     */
    upsert<T extends BuyerProfileUpsertArgs>(args: SelectSubset<T, BuyerProfileUpsertArgs<ExtArgs>>): Prisma__BuyerProfileClient<$Result.GetResult<Prisma.$BuyerProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BuyerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerProfileCountArgs} args - Arguments to filter BuyerProfiles to count.
     * @example
     * // Count the number of BuyerProfiles
     * const count = await prisma.buyerProfile.count({
     *   where: {
     *     // ... the filter for the BuyerProfiles we want to count
     *   }
     * })
    **/
    count<T extends BuyerProfileCountArgs>(
      args?: Subset<T, BuyerProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuyerProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BuyerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BuyerProfileAggregateArgs>(args: Subset<T, BuyerProfileAggregateArgs>): Prisma.PrismaPromise<GetBuyerProfileAggregateType<T>>

    /**
     * Group by BuyerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BuyerProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuyerProfileGroupByArgs['orderBy'] }
        : { orderBy?: BuyerProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BuyerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuyerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BuyerProfile model
   */
  readonly fields: BuyerProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BuyerProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuyerProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    savedServices<T extends BuyerProfile$savedServicesArgs<ExtArgs> = {}>(args?: Subset<T, BuyerProfile$savedServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends BuyerProfile$ordersArgs<ExtArgs> = {}>(args?: Subset<T, BuyerProfile$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends BuyerProfile$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, BuyerProfile$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversations<T extends BuyerProfile$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, BuyerProfile$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends BuyerProfile$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, BuyerProfile$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BuyerProfile model
   */
  interface BuyerProfileFieldRefs {
    readonly id: FieldRef<"BuyerProfile", 'String'>
    readonly userId: FieldRef<"BuyerProfile", 'String'>
    readonly bio: FieldRef<"BuyerProfile", 'String'>
    readonly phone: FieldRef<"BuyerProfile", 'String'>
    readonly address: FieldRef<"BuyerProfile", 'String'>
    readonly profileImage: FieldRef<"BuyerProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BuyerProfile findUnique
   */
  export type BuyerProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerProfile
     */
    select?: BuyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerProfile
     */
    omit?: BuyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerProfileInclude<ExtArgs> | null
    /**
     * Filter, which BuyerProfile to fetch.
     */
    where: BuyerProfileWhereUniqueInput
  }

  /**
   * BuyerProfile findUniqueOrThrow
   */
  export type BuyerProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerProfile
     */
    select?: BuyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerProfile
     */
    omit?: BuyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerProfileInclude<ExtArgs> | null
    /**
     * Filter, which BuyerProfile to fetch.
     */
    where: BuyerProfileWhereUniqueInput
  }

  /**
   * BuyerProfile findFirst
   */
  export type BuyerProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerProfile
     */
    select?: BuyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerProfile
     */
    omit?: BuyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerProfileInclude<ExtArgs> | null
    /**
     * Filter, which BuyerProfile to fetch.
     */
    where?: BuyerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuyerProfiles to fetch.
     */
    orderBy?: BuyerProfileOrderByWithRelationInput | BuyerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BuyerProfiles.
     */
    cursor?: BuyerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuyerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuyerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BuyerProfiles.
     */
    distinct?: BuyerProfileScalarFieldEnum | BuyerProfileScalarFieldEnum[]
  }

  /**
   * BuyerProfile findFirstOrThrow
   */
  export type BuyerProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerProfile
     */
    select?: BuyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerProfile
     */
    omit?: BuyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerProfileInclude<ExtArgs> | null
    /**
     * Filter, which BuyerProfile to fetch.
     */
    where?: BuyerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuyerProfiles to fetch.
     */
    orderBy?: BuyerProfileOrderByWithRelationInput | BuyerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BuyerProfiles.
     */
    cursor?: BuyerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuyerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuyerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BuyerProfiles.
     */
    distinct?: BuyerProfileScalarFieldEnum | BuyerProfileScalarFieldEnum[]
  }

  /**
   * BuyerProfile findMany
   */
  export type BuyerProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerProfile
     */
    select?: BuyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerProfile
     */
    omit?: BuyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerProfileInclude<ExtArgs> | null
    /**
     * Filter, which BuyerProfiles to fetch.
     */
    where?: BuyerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuyerProfiles to fetch.
     */
    orderBy?: BuyerProfileOrderByWithRelationInput | BuyerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BuyerProfiles.
     */
    cursor?: BuyerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuyerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuyerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BuyerProfiles.
     */
    distinct?: BuyerProfileScalarFieldEnum | BuyerProfileScalarFieldEnum[]
  }

  /**
   * BuyerProfile create
   */
  export type BuyerProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerProfile
     */
    select?: BuyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerProfile
     */
    omit?: BuyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a BuyerProfile.
     */
    data: XOR<BuyerProfileCreateInput, BuyerProfileUncheckedCreateInput>
  }

  /**
   * BuyerProfile createMany
   */
  export type BuyerProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BuyerProfiles.
     */
    data: BuyerProfileCreateManyInput | BuyerProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BuyerProfile createManyAndReturn
   */
  export type BuyerProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerProfile
     */
    select?: BuyerProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerProfile
     */
    omit?: BuyerProfileOmit<ExtArgs> | null
    /**
     * The data used to create many BuyerProfiles.
     */
    data: BuyerProfileCreateManyInput | BuyerProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BuyerProfile update
   */
  export type BuyerProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerProfile
     */
    select?: BuyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerProfile
     */
    omit?: BuyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a BuyerProfile.
     */
    data: XOR<BuyerProfileUpdateInput, BuyerProfileUncheckedUpdateInput>
    /**
     * Choose, which BuyerProfile to update.
     */
    where: BuyerProfileWhereUniqueInput
  }

  /**
   * BuyerProfile updateMany
   */
  export type BuyerProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BuyerProfiles.
     */
    data: XOR<BuyerProfileUpdateManyMutationInput, BuyerProfileUncheckedUpdateManyInput>
    /**
     * Filter which BuyerProfiles to update
     */
    where?: BuyerProfileWhereInput
    /**
     * Limit how many BuyerProfiles to update.
     */
    limit?: number
  }

  /**
   * BuyerProfile updateManyAndReturn
   */
  export type BuyerProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerProfile
     */
    select?: BuyerProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerProfile
     */
    omit?: BuyerProfileOmit<ExtArgs> | null
    /**
     * The data used to update BuyerProfiles.
     */
    data: XOR<BuyerProfileUpdateManyMutationInput, BuyerProfileUncheckedUpdateManyInput>
    /**
     * Filter which BuyerProfiles to update
     */
    where?: BuyerProfileWhereInput
    /**
     * Limit how many BuyerProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BuyerProfile upsert
   */
  export type BuyerProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerProfile
     */
    select?: BuyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerProfile
     */
    omit?: BuyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the BuyerProfile to update in case it exists.
     */
    where: BuyerProfileWhereUniqueInput
    /**
     * In case the BuyerProfile found by the `where` argument doesn't exist, create a new BuyerProfile with this data.
     */
    create: XOR<BuyerProfileCreateInput, BuyerProfileUncheckedCreateInput>
    /**
     * In case the BuyerProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuyerProfileUpdateInput, BuyerProfileUncheckedUpdateInput>
  }

  /**
   * BuyerProfile delete
   */
  export type BuyerProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerProfile
     */
    select?: BuyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerProfile
     */
    omit?: BuyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerProfileInclude<ExtArgs> | null
    /**
     * Filter which BuyerProfile to delete.
     */
    where: BuyerProfileWhereUniqueInput
  }

  /**
   * BuyerProfile deleteMany
   */
  export type BuyerProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BuyerProfiles to delete
     */
    where?: BuyerProfileWhereInput
    /**
     * Limit how many BuyerProfiles to delete.
     */
    limit?: number
  }

  /**
   * BuyerProfile.savedServices
   */
  export type BuyerProfile$savedServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * BuyerProfile.orders
   */
  export type BuyerProfile$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * BuyerProfile.reviews
   */
  export type BuyerProfile$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * BuyerProfile.conversations
   */
  export type BuyerProfile$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * BuyerProfile.sentMessages
   */
  export type BuyerProfile$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * BuyerProfile without action
   */
  export type BuyerProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerProfile
     */
    select?: BuyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerProfile
     */
    omit?: BuyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerProfileInclude<ExtArgs> | null
  }


  /**
   * Model SellerProfile
   */

  export type AggregateSellerProfile = {
    _count: SellerProfileCountAggregateOutputType | null
    _avg: SellerProfileAvgAggregateOutputType | null
    _sum: SellerProfileSumAggregateOutputType | null
    _min: SellerProfileMinAggregateOutputType | null
    _max: SellerProfileMaxAggregateOutputType | null
  }

  export type SellerProfileAvgAggregateOutputType = {
    earnings: number | null
  }

  export type SellerProfileSumAggregateOutputType = {
    earnings: number | null
  }

  export type SellerProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bio: string | null
    earnings: number | null
    profileImage: string | null
  }

  export type SellerProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bio: string | null
    earnings: number | null
    profileImage: string | null
  }

  export type SellerProfileCountAggregateOutputType = {
    id: number
    userId: number
    bio: number
    skills: number
    portfolio: number
    earnings: number
    profileImage: number
    _all: number
  }


  export type SellerProfileAvgAggregateInputType = {
    earnings?: true
  }

  export type SellerProfileSumAggregateInputType = {
    earnings?: true
  }

  export type SellerProfileMinAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    earnings?: true
    profileImage?: true
  }

  export type SellerProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    earnings?: true
    profileImage?: true
  }

  export type SellerProfileCountAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    skills?: true
    portfolio?: true
    earnings?: true
    profileImage?: true
    _all?: true
  }

  export type SellerProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SellerProfile to aggregate.
     */
    where?: SellerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerProfiles to fetch.
     */
    orderBy?: SellerProfileOrderByWithRelationInput | SellerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SellerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SellerProfiles
    **/
    _count?: true | SellerProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SellerProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SellerProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SellerProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SellerProfileMaxAggregateInputType
  }

  export type GetSellerProfileAggregateType<T extends SellerProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateSellerProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSellerProfile[P]>
      : GetScalarType<T[P], AggregateSellerProfile[P]>
  }




  export type SellerProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellerProfileWhereInput
    orderBy?: SellerProfileOrderByWithAggregationInput | SellerProfileOrderByWithAggregationInput[]
    by: SellerProfileScalarFieldEnum[] | SellerProfileScalarFieldEnum
    having?: SellerProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SellerProfileCountAggregateInputType | true
    _avg?: SellerProfileAvgAggregateInputType
    _sum?: SellerProfileSumAggregateInputType
    _min?: SellerProfileMinAggregateInputType
    _max?: SellerProfileMaxAggregateInputType
  }

  export type SellerProfileGroupByOutputType = {
    id: string
    userId: string
    bio: string | null
    skills: string[]
    portfolio: string[]
    earnings: number
    profileImage: string | null
    _count: SellerProfileCountAggregateOutputType | null
    _avg: SellerProfileAvgAggregateOutputType | null
    _sum: SellerProfileSumAggregateOutputType | null
    _min: SellerProfileMinAggregateOutputType | null
    _max: SellerProfileMaxAggregateOutputType | null
  }

  type GetSellerProfileGroupByPayload<T extends SellerProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SellerProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SellerProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SellerProfileGroupByOutputType[P]>
            : GetScalarType<T[P], SellerProfileGroupByOutputType[P]>
        }
      >
    >


  export type SellerProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    skills?: boolean
    portfolio?: boolean
    earnings?: boolean
    profileImage?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    services?: boolean | SellerProfile$servicesArgs<ExtArgs>
    orders?: boolean | SellerProfile$ordersArgs<ExtArgs>
    conversations?: boolean | SellerProfile$conversationsArgs<ExtArgs>
    sentMessages?: boolean | SellerProfile$sentMessagesArgs<ExtArgs>
    _count?: boolean | SellerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellerProfile"]>

  export type SellerProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    skills?: boolean
    portfolio?: boolean
    earnings?: boolean
    profileImage?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellerProfile"]>

  export type SellerProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    skills?: boolean
    portfolio?: boolean
    earnings?: boolean
    profileImage?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellerProfile"]>

  export type SellerProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    bio?: boolean
    skills?: boolean
    portfolio?: boolean
    earnings?: boolean
    profileImage?: boolean
  }

  export type SellerProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bio" | "skills" | "portfolio" | "earnings" | "profileImage", ExtArgs["result"]["sellerProfile"]>
  export type SellerProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    services?: boolean | SellerProfile$servicesArgs<ExtArgs>
    orders?: boolean | SellerProfile$ordersArgs<ExtArgs>
    conversations?: boolean | SellerProfile$conversationsArgs<ExtArgs>
    sentMessages?: boolean | SellerProfile$sentMessagesArgs<ExtArgs>
    _count?: boolean | SellerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SellerProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SellerProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SellerProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SellerProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      services: Prisma.$ServicePayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
      sentMessages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bio: string | null
      skills: string[]
      portfolio: string[]
      earnings: number
      profileImage: string | null
    }, ExtArgs["result"]["sellerProfile"]>
    composites: {}
  }

  type SellerProfileGetPayload<S extends boolean | null | undefined | SellerProfileDefaultArgs> = $Result.GetResult<Prisma.$SellerProfilePayload, S>

  type SellerProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SellerProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SellerProfileCountAggregateInputType | true
    }

  export interface SellerProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SellerProfile'], meta: { name: 'SellerProfile' } }
    /**
     * Find zero or one SellerProfile that matches the filter.
     * @param {SellerProfileFindUniqueArgs} args - Arguments to find a SellerProfile
     * @example
     * // Get one SellerProfile
     * const sellerProfile = await prisma.sellerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SellerProfileFindUniqueArgs>(args: SelectSubset<T, SellerProfileFindUniqueArgs<ExtArgs>>): Prisma__SellerProfileClient<$Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SellerProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SellerProfileFindUniqueOrThrowArgs} args - Arguments to find a SellerProfile
     * @example
     * // Get one SellerProfile
     * const sellerProfile = await prisma.sellerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SellerProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, SellerProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SellerProfileClient<$Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SellerProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerProfileFindFirstArgs} args - Arguments to find a SellerProfile
     * @example
     * // Get one SellerProfile
     * const sellerProfile = await prisma.sellerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SellerProfileFindFirstArgs>(args?: SelectSubset<T, SellerProfileFindFirstArgs<ExtArgs>>): Prisma__SellerProfileClient<$Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SellerProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerProfileFindFirstOrThrowArgs} args - Arguments to find a SellerProfile
     * @example
     * // Get one SellerProfile
     * const sellerProfile = await prisma.sellerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SellerProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, SellerProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__SellerProfileClient<$Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SellerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SellerProfiles
     * const sellerProfiles = await prisma.sellerProfile.findMany()
     * 
     * // Get first 10 SellerProfiles
     * const sellerProfiles = await prisma.sellerProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sellerProfileWithIdOnly = await prisma.sellerProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SellerProfileFindManyArgs>(args?: SelectSubset<T, SellerProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SellerProfile.
     * @param {SellerProfileCreateArgs} args - Arguments to create a SellerProfile.
     * @example
     * // Create one SellerProfile
     * const SellerProfile = await prisma.sellerProfile.create({
     *   data: {
     *     // ... data to create a SellerProfile
     *   }
     * })
     * 
     */
    create<T extends SellerProfileCreateArgs>(args: SelectSubset<T, SellerProfileCreateArgs<ExtArgs>>): Prisma__SellerProfileClient<$Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SellerProfiles.
     * @param {SellerProfileCreateManyArgs} args - Arguments to create many SellerProfiles.
     * @example
     * // Create many SellerProfiles
     * const sellerProfile = await prisma.sellerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SellerProfileCreateManyArgs>(args?: SelectSubset<T, SellerProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SellerProfiles and returns the data saved in the database.
     * @param {SellerProfileCreateManyAndReturnArgs} args - Arguments to create many SellerProfiles.
     * @example
     * // Create many SellerProfiles
     * const sellerProfile = await prisma.sellerProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SellerProfiles and only return the `id`
     * const sellerProfileWithIdOnly = await prisma.sellerProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SellerProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, SellerProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SellerProfile.
     * @param {SellerProfileDeleteArgs} args - Arguments to delete one SellerProfile.
     * @example
     * // Delete one SellerProfile
     * const SellerProfile = await prisma.sellerProfile.delete({
     *   where: {
     *     // ... filter to delete one SellerProfile
     *   }
     * })
     * 
     */
    delete<T extends SellerProfileDeleteArgs>(args: SelectSubset<T, SellerProfileDeleteArgs<ExtArgs>>): Prisma__SellerProfileClient<$Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SellerProfile.
     * @param {SellerProfileUpdateArgs} args - Arguments to update one SellerProfile.
     * @example
     * // Update one SellerProfile
     * const sellerProfile = await prisma.sellerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SellerProfileUpdateArgs>(args: SelectSubset<T, SellerProfileUpdateArgs<ExtArgs>>): Prisma__SellerProfileClient<$Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SellerProfiles.
     * @param {SellerProfileDeleteManyArgs} args - Arguments to filter SellerProfiles to delete.
     * @example
     * // Delete a few SellerProfiles
     * const { count } = await prisma.sellerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SellerProfileDeleteManyArgs>(args?: SelectSubset<T, SellerProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SellerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SellerProfiles
     * const sellerProfile = await prisma.sellerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SellerProfileUpdateManyArgs>(args: SelectSubset<T, SellerProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SellerProfiles and returns the data updated in the database.
     * @param {SellerProfileUpdateManyAndReturnArgs} args - Arguments to update many SellerProfiles.
     * @example
     * // Update many SellerProfiles
     * const sellerProfile = await prisma.sellerProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SellerProfiles and only return the `id`
     * const sellerProfileWithIdOnly = await prisma.sellerProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SellerProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, SellerProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SellerProfile.
     * @param {SellerProfileUpsertArgs} args - Arguments to update or create a SellerProfile.
     * @example
     * // Update or create a SellerProfile
     * const sellerProfile = await prisma.sellerProfile.upsert({
     *   create: {
     *     // ... data to create a SellerProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SellerProfile we want to update
     *   }
     * })
     */
    upsert<T extends SellerProfileUpsertArgs>(args: SelectSubset<T, SellerProfileUpsertArgs<ExtArgs>>): Prisma__SellerProfileClient<$Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SellerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerProfileCountArgs} args - Arguments to filter SellerProfiles to count.
     * @example
     * // Count the number of SellerProfiles
     * const count = await prisma.sellerProfile.count({
     *   where: {
     *     // ... the filter for the SellerProfiles we want to count
     *   }
     * })
    **/
    count<T extends SellerProfileCountArgs>(
      args?: Subset<T, SellerProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SellerProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SellerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SellerProfileAggregateArgs>(args: Subset<T, SellerProfileAggregateArgs>): Prisma.PrismaPromise<GetSellerProfileAggregateType<T>>

    /**
     * Group by SellerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SellerProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SellerProfileGroupByArgs['orderBy'] }
        : { orderBy?: SellerProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SellerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SellerProfile model
   */
  readonly fields: SellerProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SellerProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SellerProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    services<T extends SellerProfile$servicesArgs<ExtArgs> = {}>(args?: Subset<T, SellerProfile$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends SellerProfile$ordersArgs<ExtArgs> = {}>(args?: Subset<T, SellerProfile$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversations<T extends SellerProfile$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, SellerProfile$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends SellerProfile$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, SellerProfile$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SellerProfile model
   */
  interface SellerProfileFieldRefs {
    readonly id: FieldRef<"SellerProfile", 'String'>
    readonly userId: FieldRef<"SellerProfile", 'String'>
    readonly bio: FieldRef<"SellerProfile", 'String'>
    readonly skills: FieldRef<"SellerProfile", 'String[]'>
    readonly portfolio: FieldRef<"SellerProfile", 'String[]'>
    readonly earnings: FieldRef<"SellerProfile", 'Float'>
    readonly profileImage: FieldRef<"SellerProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SellerProfile findUnique
   */
  export type SellerProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfile
     */
    select?: SellerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfile
     */
    omit?: SellerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfileInclude<ExtArgs> | null
    /**
     * Filter, which SellerProfile to fetch.
     */
    where: SellerProfileWhereUniqueInput
  }

  /**
   * SellerProfile findUniqueOrThrow
   */
  export type SellerProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfile
     */
    select?: SellerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfile
     */
    omit?: SellerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfileInclude<ExtArgs> | null
    /**
     * Filter, which SellerProfile to fetch.
     */
    where: SellerProfileWhereUniqueInput
  }

  /**
   * SellerProfile findFirst
   */
  export type SellerProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfile
     */
    select?: SellerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfile
     */
    omit?: SellerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfileInclude<ExtArgs> | null
    /**
     * Filter, which SellerProfile to fetch.
     */
    where?: SellerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerProfiles to fetch.
     */
    orderBy?: SellerProfileOrderByWithRelationInput | SellerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SellerProfiles.
     */
    cursor?: SellerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SellerProfiles.
     */
    distinct?: SellerProfileScalarFieldEnum | SellerProfileScalarFieldEnum[]
  }

  /**
   * SellerProfile findFirstOrThrow
   */
  export type SellerProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfile
     */
    select?: SellerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfile
     */
    omit?: SellerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfileInclude<ExtArgs> | null
    /**
     * Filter, which SellerProfile to fetch.
     */
    where?: SellerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerProfiles to fetch.
     */
    orderBy?: SellerProfileOrderByWithRelationInput | SellerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SellerProfiles.
     */
    cursor?: SellerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SellerProfiles.
     */
    distinct?: SellerProfileScalarFieldEnum | SellerProfileScalarFieldEnum[]
  }

  /**
   * SellerProfile findMany
   */
  export type SellerProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfile
     */
    select?: SellerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfile
     */
    omit?: SellerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfileInclude<ExtArgs> | null
    /**
     * Filter, which SellerProfiles to fetch.
     */
    where?: SellerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerProfiles to fetch.
     */
    orderBy?: SellerProfileOrderByWithRelationInput | SellerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SellerProfiles.
     */
    cursor?: SellerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SellerProfiles.
     */
    distinct?: SellerProfileScalarFieldEnum | SellerProfileScalarFieldEnum[]
  }

  /**
   * SellerProfile create
   */
  export type SellerProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfile
     */
    select?: SellerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfile
     */
    omit?: SellerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a SellerProfile.
     */
    data: XOR<SellerProfileCreateInput, SellerProfileUncheckedCreateInput>
  }

  /**
   * SellerProfile createMany
   */
  export type SellerProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SellerProfiles.
     */
    data: SellerProfileCreateManyInput | SellerProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SellerProfile createManyAndReturn
   */
  export type SellerProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfile
     */
    select?: SellerProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfile
     */
    omit?: SellerProfileOmit<ExtArgs> | null
    /**
     * The data used to create many SellerProfiles.
     */
    data: SellerProfileCreateManyInput | SellerProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SellerProfile update
   */
  export type SellerProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfile
     */
    select?: SellerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfile
     */
    omit?: SellerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a SellerProfile.
     */
    data: XOR<SellerProfileUpdateInput, SellerProfileUncheckedUpdateInput>
    /**
     * Choose, which SellerProfile to update.
     */
    where: SellerProfileWhereUniqueInput
  }

  /**
   * SellerProfile updateMany
   */
  export type SellerProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SellerProfiles.
     */
    data: XOR<SellerProfileUpdateManyMutationInput, SellerProfileUncheckedUpdateManyInput>
    /**
     * Filter which SellerProfiles to update
     */
    where?: SellerProfileWhereInput
    /**
     * Limit how many SellerProfiles to update.
     */
    limit?: number
  }

  /**
   * SellerProfile updateManyAndReturn
   */
  export type SellerProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfile
     */
    select?: SellerProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfile
     */
    omit?: SellerProfileOmit<ExtArgs> | null
    /**
     * The data used to update SellerProfiles.
     */
    data: XOR<SellerProfileUpdateManyMutationInput, SellerProfileUncheckedUpdateManyInput>
    /**
     * Filter which SellerProfiles to update
     */
    where?: SellerProfileWhereInput
    /**
     * Limit how many SellerProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SellerProfile upsert
   */
  export type SellerProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfile
     */
    select?: SellerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfile
     */
    omit?: SellerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the SellerProfile to update in case it exists.
     */
    where: SellerProfileWhereUniqueInput
    /**
     * In case the SellerProfile found by the `where` argument doesn't exist, create a new SellerProfile with this data.
     */
    create: XOR<SellerProfileCreateInput, SellerProfileUncheckedCreateInput>
    /**
     * In case the SellerProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SellerProfileUpdateInput, SellerProfileUncheckedUpdateInput>
  }

  /**
   * SellerProfile delete
   */
  export type SellerProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfile
     */
    select?: SellerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfile
     */
    omit?: SellerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfileInclude<ExtArgs> | null
    /**
     * Filter which SellerProfile to delete.
     */
    where: SellerProfileWhereUniqueInput
  }

  /**
   * SellerProfile deleteMany
   */
  export type SellerProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SellerProfiles to delete
     */
    where?: SellerProfileWhereInput
    /**
     * Limit how many SellerProfiles to delete.
     */
    limit?: number
  }

  /**
   * SellerProfile.services
   */
  export type SellerProfile$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * SellerProfile.orders
   */
  export type SellerProfile$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * SellerProfile.conversations
   */
  export type SellerProfile$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * SellerProfile.sentMessages
   */
  export type SellerProfile$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * SellerProfile without action
   */
  export type SellerProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfile
     */
    select?: SellerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfile
     */
    omit?: SellerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfileInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    icon: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    icon?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    icon?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    icon: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    services?: boolean | Category$servicesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    icon?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "icon", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | Category$servicesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      services: Prisma.$ServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      icon: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends Category$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Category$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly icon: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.services
   */
  export type Category$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model ServicePackage
   */

  export type AggregateServicePackage = {
    _count: ServicePackageCountAggregateOutputType | null
    _avg: ServicePackageAvgAggregateOutputType | null
    _sum: ServicePackageSumAggregateOutputType | null
    _min: ServicePackageMinAggregateOutputType | null
    _max: ServicePackageMaxAggregateOutputType | null
  }

  export type ServicePackageAvgAggregateOutputType = {
    price: number | null
    deliveryDays: number | null
    revisions: number | null
  }

  export type ServicePackageSumAggregateOutputType = {
    price: number | null
    deliveryDays: number | null
    revisions: number | null
  }

  export type ServicePackageMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    price: number | null
    deliveryDays: number | null
    revisions: number | null
    type: $Enums.PackageType | null
    serviceId: string | null
    createdAt: Date | null
  }

  export type ServicePackageMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    price: number | null
    deliveryDays: number | null
    revisions: number | null
    type: $Enums.PackageType | null
    serviceId: string | null
    createdAt: Date | null
  }

  export type ServicePackageCountAggregateOutputType = {
    id: number
    title: number
    description: number
    price: number
    deliveryDays: number
    revisions: number
    type: number
    serviceId: number
    createdAt: number
    _all: number
  }


  export type ServicePackageAvgAggregateInputType = {
    price?: true
    deliveryDays?: true
    revisions?: true
  }

  export type ServicePackageSumAggregateInputType = {
    price?: true
    deliveryDays?: true
    revisions?: true
  }

  export type ServicePackageMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    deliveryDays?: true
    revisions?: true
    type?: true
    serviceId?: true
    createdAt?: true
  }

  export type ServicePackageMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    deliveryDays?: true
    revisions?: true
    type?: true
    serviceId?: true
    createdAt?: true
  }

  export type ServicePackageCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    deliveryDays?: true
    revisions?: true
    type?: true
    serviceId?: true
    createdAt?: true
    _all?: true
  }

  export type ServicePackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicePackage to aggregate.
     */
    where?: ServicePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePackages to fetch.
     */
    orderBy?: ServicePackageOrderByWithRelationInput | ServicePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServicePackages
    **/
    _count?: true | ServicePackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicePackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicePackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicePackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicePackageMaxAggregateInputType
  }

  export type GetServicePackageAggregateType<T extends ServicePackageAggregateArgs> = {
        [P in keyof T & keyof AggregateServicePackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicePackage[P]>
      : GetScalarType<T[P], AggregateServicePackage[P]>
  }




  export type ServicePackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicePackageWhereInput
    orderBy?: ServicePackageOrderByWithAggregationInput | ServicePackageOrderByWithAggregationInput[]
    by: ServicePackageScalarFieldEnum[] | ServicePackageScalarFieldEnum
    having?: ServicePackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicePackageCountAggregateInputType | true
    _avg?: ServicePackageAvgAggregateInputType
    _sum?: ServicePackageSumAggregateInputType
    _min?: ServicePackageMinAggregateInputType
    _max?: ServicePackageMaxAggregateInputType
  }

  export type ServicePackageGroupByOutputType = {
    id: string
    title: string
    description: string | null
    price: number
    deliveryDays: number
    revisions: number | null
    type: $Enums.PackageType
    serviceId: string
    createdAt: Date
    _count: ServicePackageCountAggregateOutputType | null
    _avg: ServicePackageAvgAggregateOutputType | null
    _sum: ServicePackageSumAggregateOutputType | null
    _min: ServicePackageMinAggregateOutputType | null
    _max: ServicePackageMaxAggregateOutputType | null
  }

  type GetServicePackageGroupByPayload<T extends ServicePackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicePackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicePackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicePackageGroupByOutputType[P]>
            : GetScalarType<T[P], ServicePackageGroupByOutputType[P]>
        }
      >
    >


  export type ServicePackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    deliveryDays?: boolean
    revisions?: boolean
    type?: boolean
    serviceId?: boolean
    createdAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicePackage"]>

  export type ServicePackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    deliveryDays?: boolean
    revisions?: boolean
    type?: boolean
    serviceId?: boolean
    createdAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicePackage"]>

  export type ServicePackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    deliveryDays?: boolean
    revisions?: boolean
    type?: boolean
    serviceId?: boolean
    createdAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicePackage"]>

  export type ServicePackageSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    deliveryDays?: boolean
    revisions?: boolean
    type?: boolean
    serviceId?: boolean
    createdAt?: boolean
  }

  export type ServicePackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "price" | "deliveryDays" | "revisions" | "type" | "serviceId" | "createdAt", ExtArgs["result"]["servicePackage"]>
  export type ServicePackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ServicePackageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ServicePackageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $ServicePackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServicePackage"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      price: number
      deliveryDays: number
      revisions: number | null
      type: $Enums.PackageType
      serviceId: string
      createdAt: Date
    }, ExtArgs["result"]["servicePackage"]>
    composites: {}
  }

  type ServicePackageGetPayload<S extends boolean | null | undefined | ServicePackageDefaultArgs> = $Result.GetResult<Prisma.$ServicePackagePayload, S>

  type ServicePackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicePackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicePackageCountAggregateInputType | true
    }

  export interface ServicePackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServicePackage'], meta: { name: 'ServicePackage' } }
    /**
     * Find zero or one ServicePackage that matches the filter.
     * @param {ServicePackageFindUniqueArgs} args - Arguments to find a ServicePackage
     * @example
     * // Get one ServicePackage
     * const servicePackage = await prisma.servicePackage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicePackageFindUniqueArgs>(args: SelectSubset<T, ServicePackageFindUniqueArgs<ExtArgs>>): Prisma__ServicePackageClient<$Result.GetResult<Prisma.$ServicePackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServicePackage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicePackageFindUniqueOrThrowArgs} args - Arguments to find a ServicePackage
     * @example
     * // Get one ServicePackage
     * const servicePackage = await prisma.servicePackage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicePackageFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicePackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicePackageClient<$Result.GetResult<Prisma.$ServicePackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicePackage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePackageFindFirstArgs} args - Arguments to find a ServicePackage
     * @example
     * // Get one ServicePackage
     * const servicePackage = await prisma.servicePackage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicePackageFindFirstArgs>(args?: SelectSubset<T, ServicePackageFindFirstArgs<ExtArgs>>): Prisma__ServicePackageClient<$Result.GetResult<Prisma.$ServicePackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicePackage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePackageFindFirstOrThrowArgs} args - Arguments to find a ServicePackage
     * @example
     * // Get one ServicePackage
     * const servicePackage = await prisma.servicePackage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicePackageFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicePackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicePackageClient<$Result.GetResult<Prisma.$ServicePackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServicePackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServicePackages
     * const servicePackages = await prisma.servicePackage.findMany()
     * 
     * // Get first 10 ServicePackages
     * const servicePackages = await prisma.servicePackage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicePackageWithIdOnly = await prisma.servicePackage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicePackageFindManyArgs>(args?: SelectSubset<T, ServicePackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServicePackage.
     * @param {ServicePackageCreateArgs} args - Arguments to create a ServicePackage.
     * @example
     * // Create one ServicePackage
     * const ServicePackage = await prisma.servicePackage.create({
     *   data: {
     *     // ... data to create a ServicePackage
     *   }
     * })
     * 
     */
    create<T extends ServicePackageCreateArgs>(args: SelectSubset<T, ServicePackageCreateArgs<ExtArgs>>): Prisma__ServicePackageClient<$Result.GetResult<Prisma.$ServicePackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServicePackages.
     * @param {ServicePackageCreateManyArgs} args - Arguments to create many ServicePackages.
     * @example
     * // Create many ServicePackages
     * const servicePackage = await prisma.servicePackage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicePackageCreateManyArgs>(args?: SelectSubset<T, ServicePackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServicePackages and returns the data saved in the database.
     * @param {ServicePackageCreateManyAndReturnArgs} args - Arguments to create many ServicePackages.
     * @example
     * // Create many ServicePackages
     * const servicePackage = await prisma.servicePackage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServicePackages and only return the `id`
     * const servicePackageWithIdOnly = await prisma.servicePackage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicePackageCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicePackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServicePackage.
     * @param {ServicePackageDeleteArgs} args - Arguments to delete one ServicePackage.
     * @example
     * // Delete one ServicePackage
     * const ServicePackage = await prisma.servicePackage.delete({
     *   where: {
     *     // ... filter to delete one ServicePackage
     *   }
     * })
     * 
     */
    delete<T extends ServicePackageDeleteArgs>(args: SelectSubset<T, ServicePackageDeleteArgs<ExtArgs>>): Prisma__ServicePackageClient<$Result.GetResult<Prisma.$ServicePackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServicePackage.
     * @param {ServicePackageUpdateArgs} args - Arguments to update one ServicePackage.
     * @example
     * // Update one ServicePackage
     * const servicePackage = await prisma.servicePackage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicePackageUpdateArgs>(args: SelectSubset<T, ServicePackageUpdateArgs<ExtArgs>>): Prisma__ServicePackageClient<$Result.GetResult<Prisma.$ServicePackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServicePackages.
     * @param {ServicePackageDeleteManyArgs} args - Arguments to filter ServicePackages to delete.
     * @example
     * // Delete a few ServicePackages
     * const { count } = await prisma.servicePackage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicePackageDeleteManyArgs>(args?: SelectSubset<T, ServicePackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicePackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServicePackages
     * const servicePackage = await prisma.servicePackage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicePackageUpdateManyArgs>(args: SelectSubset<T, ServicePackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicePackages and returns the data updated in the database.
     * @param {ServicePackageUpdateManyAndReturnArgs} args - Arguments to update many ServicePackages.
     * @example
     * // Update many ServicePackages
     * const servicePackage = await prisma.servicePackage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServicePackages and only return the `id`
     * const servicePackageWithIdOnly = await prisma.servicePackage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServicePackageUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicePackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServicePackage.
     * @param {ServicePackageUpsertArgs} args - Arguments to update or create a ServicePackage.
     * @example
     * // Update or create a ServicePackage
     * const servicePackage = await prisma.servicePackage.upsert({
     *   create: {
     *     // ... data to create a ServicePackage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServicePackage we want to update
     *   }
     * })
     */
    upsert<T extends ServicePackageUpsertArgs>(args: SelectSubset<T, ServicePackageUpsertArgs<ExtArgs>>): Prisma__ServicePackageClient<$Result.GetResult<Prisma.$ServicePackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServicePackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePackageCountArgs} args - Arguments to filter ServicePackages to count.
     * @example
     * // Count the number of ServicePackages
     * const count = await prisma.servicePackage.count({
     *   where: {
     *     // ... the filter for the ServicePackages we want to count
     *   }
     * })
    **/
    count<T extends ServicePackageCountArgs>(
      args?: Subset<T, ServicePackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicePackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServicePackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicePackageAggregateArgs>(args: Subset<T, ServicePackageAggregateArgs>): Prisma.PrismaPromise<GetServicePackageAggregateType<T>>

    /**
     * Group by ServicePackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePackageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicePackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicePackageGroupByArgs['orderBy'] }
        : { orderBy?: ServicePackageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicePackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicePackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServicePackage model
   */
  readonly fields: ServicePackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServicePackage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicePackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServicePackage model
   */
  interface ServicePackageFieldRefs {
    readonly id: FieldRef<"ServicePackage", 'String'>
    readonly title: FieldRef<"ServicePackage", 'String'>
    readonly description: FieldRef<"ServicePackage", 'String'>
    readonly price: FieldRef<"ServicePackage", 'Float'>
    readonly deliveryDays: FieldRef<"ServicePackage", 'Int'>
    readonly revisions: FieldRef<"ServicePackage", 'Int'>
    readonly type: FieldRef<"ServicePackage", 'PackageType'>
    readonly serviceId: FieldRef<"ServicePackage", 'String'>
    readonly createdAt: FieldRef<"ServicePackage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServicePackage findUnique
   */
  export type ServicePackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageInclude<ExtArgs> | null
    /**
     * Filter, which ServicePackage to fetch.
     */
    where: ServicePackageWhereUniqueInput
  }

  /**
   * ServicePackage findUniqueOrThrow
   */
  export type ServicePackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageInclude<ExtArgs> | null
    /**
     * Filter, which ServicePackage to fetch.
     */
    where: ServicePackageWhereUniqueInput
  }

  /**
   * ServicePackage findFirst
   */
  export type ServicePackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageInclude<ExtArgs> | null
    /**
     * Filter, which ServicePackage to fetch.
     */
    where?: ServicePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePackages to fetch.
     */
    orderBy?: ServicePackageOrderByWithRelationInput | ServicePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicePackages.
     */
    cursor?: ServicePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicePackages.
     */
    distinct?: ServicePackageScalarFieldEnum | ServicePackageScalarFieldEnum[]
  }

  /**
   * ServicePackage findFirstOrThrow
   */
  export type ServicePackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageInclude<ExtArgs> | null
    /**
     * Filter, which ServicePackage to fetch.
     */
    where?: ServicePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePackages to fetch.
     */
    orderBy?: ServicePackageOrderByWithRelationInput | ServicePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicePackages.
     */
    cursor?: ServicePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicePackages.
     */
    distinct?: ServicePackageScalarFieldEnum | ServicePackageScalarFieldEnum[]
  }

  /**
   * ServicePackage findMany
   */
  export type ServicePackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageInclude<ExtArgs> | null
    /**
     * Filter, which ServicePackages to fetch.
     */
    where?: ServicePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePackages to fetch.
     */
    orderBy?: ServicePackageOrderByWithRelationInput | ServicePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServicePackages.
     */
    cursor?: ServicePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicePackages.
     */
    distinct?: ServicePackageScalarFieldEnum | ServicePackageScalarFieldEnum[]
  }

  /**
   * ServicePackage create
   */
  export type ServicePackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageInclude<ExtArgs> | null
    /**
     * The data needed to create a ServicePackage.
     */
    data: XOR<ServicePackageCreateInput, ServicePackageUncheckedCreateInput>
  }

  /**
   * ServicePackage createMany
   */
  export type ServicePackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServicePackages.
     */
    data: ServicePackageCreateManyInput | ServicePackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServicePackage createManyAndReturn
   */
  export type ServicePackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * The data used to create many ServicePackages.
     */
    data: ServicePackageCreateManyInput | ServicePackageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServicePackage update
   */
  export type ServicePackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageInclude<ExtArgs> | null
    /**
     * The data needed to update a ServicePackage.
     */
    data: XOR<ServicePackageUpdateInput, ServicePackageUncheckedUpdateInput>
    /**
     * Choose, which ServicePackage to update.
     */
    where: ServicePackageWhereUniqueInput
  }

  /**
   * ServicePackage updateMany
   */
  export type ServicePackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServicePackages.
     */
    data: XOR<ServicePackageUpdateManyMutationInput, ServicePackageUncheckedUpdateManyInput>
    /**
     * Filter which ServicePackages to update
     */
    where?: ServicePackageWhereInput
    /**
     * Limit how many ServicePackages to update.
     */
    limit?: number
  }

  /**
   * ServicePackage updateManyAndReturn
   */
  export type ServicePackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * The data used to update ServicePackages.
     */
    data: XOR<ServicePackageUpdateManyMutationInput, ServicePackageUncheckedUpdateManyInput>
    /**
     * Filter which ServicePackages to update
     */
    where?: ServicePackageWhereInput
    /**
     * Limit how many ServicePackages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServicePackage upsert
   */
  export type ServicePackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageInclude<ExtArgs> | null
    /**
     * The filter to search for the ServicePackage to update in case it exists.
     */
    where: ServicePackageWhereUniqueInput
    /**
     * In case the ServicePackage found by the `where` argument doesn't exist, create a new ServicePackage with this data.
     */
    create: XOR<ServicePackageCreateInput, ServicePackageUncheckedCreateInput>
    /**
     * In case the ServicePackage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicePackageUpdateInput, ServicePackageUncheckedUpdateInput>
  }

  /**
   * ServicePackage delete
   */
  export type ServicePackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageInclude<ExtArgs> | null
    /**
     * Filter which ServicePackage to delete.
     */
    where: ServicePackageWhereUniqueInput
  }

  /**
   * ServicePackage deleteMany
   */
  export type ServicePackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicePackages to delete
     */
    where?: ServicePackageWhereInput
    /**
     * Limit how many ServicePackages to delete.
     */
    limit?: number
  }

  /**
   * ServicePackage without action
   */
  export type ServicePackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    sellerId: string | null
    categoryId: string | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    sellerId: string | null
    categoryId: string | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    title: number
    description: number
    images: number
    createdAt: number
    sellerId: number
    categoryId: number
    _all: number
  }


  export type ServiceMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    sellerId?: true
    categoryId?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    sellerId?: true
    categoryId?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    images?: true
    createdAt?: true
    sellerId?: true
    categoryId?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    title: string
    description: string
    images: string[]
    createdAt: Date
    sellerId: string
    categoryId: string
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    images?: boolean
    createdAt?: boolean
    sellerId?: boolean
    categoryId?: boolean
    seller?: boolean | SellerProfileDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    packages?: boolean | Service$packagesArgs<ExtArgs>
    orders?: boolean | Service$ordersArgs<ExtArgs>
    reviews?: boolean | Service$reviewsArgs<ExtArgs>
    savedBy?: boolean | Service$savedByArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    images?: boolean
    createdAt?: boolean
    sellerId?: boolean
    categoryId?: boolean
    seller?: boolean | SellerProfileDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    images?: boolean
    createdAt?: boolean
    sellerId?: boolean
    categoryId?: boolean
    seller?: boolean | SellerProfileDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    images?: boolean
    createdAt?: boolean
    sellerId?: boolean
    categoryId?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "images" | "createdAt" | "sellerId" | "categoryId", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | SellerProfileDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    packages?: boolean | Service$packagesArgs<ExtArgs>
    orders?: boolean | Service$ordersArgs<ExtArgs>
    reviews?: boolean | Service$reviewsArgs<ExtArgs>
    savedBy?: boolean | Service$savedByArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | SellerProfileDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | SellerProfileDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      seller: Prisma.$SellerProfilePayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      packages: Prisma.$ServicePackagePayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      savedBy: Prisma.$BuyerProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      images: string[]
      createdAt: Date
      sellerId: string
      categoryId: string
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seller<T extends SellerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SellerProfileDefaultArgs<ExtArgs>>): Prisma__SellerProfileClient<$Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    packages<T extends Service$packagesArgs<ExtArgs> = {}>(args?: Subset<T, Service$packagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Service$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Service$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Service$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Service$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedBy<T extends Service$savedByArgs<ExtArgs> = {}>(args?: Subset<T, Service$savedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuyerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly title: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly images: FieldRef<"Service", 'String[]'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly sellerId: FieldRef<"Service", 'String'>
    readonly categoryId: FieldRef<"Service", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.packages
   */
  export type Service$packagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageInclude<ExtArgs> | null
    where?: ServicePackageWhereInput
    orderBy?: ServicePackageOrderByWithRelationInput | ServicePackageOrderByWithRelationInput[]
    cursor?: ServicePackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicePackageScalarFieldEnum | ServicePackageScalarFieldEnum[]
  }

  /**
   * Service.orders
   */
  export type Service$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Service.reviews
   */
  export type Service$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Service.savedBy
   */
  export type Service$savedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerProfile
     */
    select?: BuyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerProfile
     */
    omit?: BuyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerProfileInclude<ExtArgs> | null
    where?: BuyerProfileWhereInput
    orderBy?: BuyerProfileOrderByWithRelationInput | BuyerProfileOrderByWithRelationInput[]
    cursor?: BuyerProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuyerProfileScalarFieldEnum | BuyerProfileScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    status: $Enums.OrderStatus | null
    requirements: string | null
    createdAt: Date | null
    serviceId: string | null
    buyerId: string | null
    sellerId: string | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    status: $Enums.OrderStatus | null
    requirements: string | null
    createdAt: Date | null
    serviceId: string | null
    buyerId: string | null
    sellerId: string | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    status: number
    requirements: number
    createdAt: number
    serviceId: number
    buyerId: number
    sellerId: number
    _all: number
  }


  export type OrderMinAggregateInputType = {
    id?: true
    status?: true
    requirements?: true
    createdAt?: true
    serviceId?: true
    buyerId?: true
    sellerId?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    status?: true
    requirements?: true
    createdAt?: true
    serviceId?: true
    buyerId?: true
    sellerId?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    status?: true
    requirements?: true
    createdAt?: true
    serviceId?: true
    buyerId?: true
    sellerId?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    status: $Enums.OrderStatus
    requirements: string | null
    createdAt: Date
    serviceId: string
    buyerId: string
    sellerId: string
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    requirements?: boolean
    createdAt?: boolean
    serviceId?: boolean
    buyerId?: boolean
    sellerId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    buyer?: boolean | BuyerProfileDefaultArgs<ExtArgs>
    seller?: boolean | SellerProfileDefaultArgs<ExtArgs>
    payment?: boolean | Order$paymentArgs<ExtArgs>
    review?: boolean | Order$reviewArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    requirements?: boolean
    createdAt?: boolean
    serviceId?: boolean
    buyerId?: boolean
    sellerId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    buyer?: boolean | BuyerProfileDefaultArgs<ExtArgs>
    seller?: boolean | SellerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    requirements?: boolean
    createdAt?: boolean
    serviceId?: boolean
    buyerId?: boolean
    sellerId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    buyer?: boolean | BuyerProfileDefaultArgs<ExtArgs>
    seller?: boolean | SellerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    status?: boolean
    requirements?: boolean
    createdAt?: boolean
    serviceId?: boolean
    buyerId?: boolean
    sellerId?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "requirements" | "createdAt" | "serviceId" | "buyerId" | "sellerId", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    buyer?: boolean | BuyerProfileDefaultArgs<ExtArgs>
    seller?: boolean | SellerProfileDefaultArgs<ExtArgs>
    payment?: boolean | Order$paymentArgs<ExtArgs>
    review?: boolean | Order$reviewArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    buyer?: boolean | BuyerProfileDefaultArgs<ExtArgs>
    seller?: boolean | SellerProfileDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    buyer?: boolean | BuyerProfileDefaultArgs<ExtArgs>
    seller?: boolean | SellerProfileDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
      buyer: Prisma.$BuyerProfilePayload<ExtArgs>
      seller: Prisma.$SellerProfilePayload<ExtArgs>
      payment: Prisma.$PaymentPayload<ExtArgs> | null
      review: Prisma.$ReviewPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.OrderStatus
      requirements: string | null
      createdAt: Date
      serviceId: string
      buyerId: string
      sellerId: string
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buyer<T extends BuyerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BuyerProfileDefaultArgs<ExtArgs>>): Prisma__BuyerProfileClient<$Result.GetResult<Prisma.$BuyerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seller<T extends SellerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SellerProfileDefaultArgs<ExtArgs>>): Prisma__SellerProfileClient<$Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment<T extends Order$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Order$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    review<T extends Order$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Order$reviewArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly requirements: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly serviceId: FieldRef<"Order", 'String'>
    readonly buyerId: FieldRef<"Order", 'String'>
    readonly sellerId: FieldRef<"Order", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.payment
   */
  export type Order$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Order.review
   */
  export type Order$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    amount: number | null
    status: $Enums.PaymentStatus | null
    provider: string | null
    createdAt: Date | null
    orderId: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    status: $Enums.PaymentStatus | null
    provider: string | null
    createdAt: Date | null
    orderId: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    amount: number
    status: number
    provider: number
    createdAt: number
    orderId: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    provider?: true
    createdAt?: true
    orderId?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    provider?: true
    createdAt?: true
    orderId?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    provider?: true
    createdAt?: true
    orderId?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    amount: number
    status: $Enums.PaymentStatus
    provider: string
    createdAt: Date
    orderId: string
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    provider?: boolean
    createdAt?: boolean
    orderId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    provider?: boolean
    createdAt?: boolean
    orderId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    provider?: boolean
    createdAt?: boolean
    orderId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    amount?: boolean
    status?: boolean
    provider?: boolean
    createdAt?: boolean
    orderId?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "status" | "provider" | "createdAt" | "orderId", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      status: $Enums.PaymentStatus
      provider: string
      createdAt: Date
      orderId: string
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly provider: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly orderId: FieldRef<"Payment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    buyerId: string | null
    serviceId: string | null
    orderId: string | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    buyerId: string | null
    serviceId: string | null
    orderId: string | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    createdAt: number
    buyerId: number
    serviceId: number
    orderId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    createdAt?: true
    buyerId?: true
    serviceId?: true
    orderId?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    createdAt?: true
    buyerId?: true
    serviceId?: true
    orderId?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    createdAt?: true
    buyerId?: true
    serviceId?: true
    orderId?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    rating: number
    comment: string | null
    createdAt: Date
    buyerId: string
    serviceId: string
    orderId: string
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    buyerId?: boolean
    serviceId?: boolean
    orderId?: boolean
    buyer?: boolean | BuyerProfileDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    buyerId?: boolean
    serviceId?: boolean
    orderId?: boolean
    buyer?: boolean | BuyerProfileDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    buyerId?: boolean
    serviceId?: boolean
    orderId?: boolean
    buyer?: boolean | BuyerProfileDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    buyerId?: boolean
    serviceId?: boolean
    orderId?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "comment" | "createdAt" | "buyerId" | "serviceId" | "orderId", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | BuyerProfileDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | BuyerProfileDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | BuyerProfileDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      buyer: Prisma.$BuyerProfilePayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rating: number
      comment: string | null
      createdAt: Date
      buyerId: string
      serviceId: string
      orderId: string
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buyer<T extends BuyerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BuyerProfileDefaultArgs<ExtArgs>>): Prisma__BuyerProfileClient<$Result.GetResult<Prisma.$BuyerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly buyerId: FieldRef<"Review", 'String'>
    readonly serviceId: FieldRef<"Review", 'String'>
    readonly orderId: FieldRef<"Review", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    buyerId: string | null
    sellerId: string | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    buyerId: string | null
    sellerId: string | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    createdAt: number
    buyerId: number
    sellerId: number
    _all: number
  }


  export type ConversationMinAggregateInputType = {
    id?: true
    createdAt?: true
    buyerId?: true
    sellerId?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    buyerId?: true
    sellerId?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    createdAt?: true
    buyerId?: true
    sellerId?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: string
    createdAt: Date
    buyerId: string
    sellerId: string
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    buyerId?: boolean
    sellerId?: boolean
    buyer?: boolean | BuyerProfileDefaultArgs<ExtArgs>
    seller?: boolean | SellerProfileDefaultArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    buyerId?: boolean
    sellerId?: boolean
    buyer?: boolean | BuyerProfileDefaultArgs<ExtArgs>
    seller?: boolean | SellerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    buyerId?: boolean
    sellerId?: boolean
    buyer?: boolean | BuyerProfileDefaultArgs<ExtArgs>
    seller?: boolean | SellerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    buyerId?: boolean
    sellerId?: boolean
  }

  export type ConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "buyerId" | "sellerId", ExtArgs["result"]["conversation"]>
  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | BuyerProfileDefaultArgs<ExtArgs>
    seller?: boolean | SellerProfileDefaultArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | BuyerProfileDefaultArgs<ExtArgs>
    seller?: boolean | SellerProfileDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | BuyerProfileDefaultArgs<ExtArgs>
    seller?: boolean | SellerProfileDefaultArgs<ExtArgs>
  }

  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      buyer: Prisma.$BuyerProfilePayload<ExtArgs>
      seller: Prisma.$SellerProfilePayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      buyerId: string
      sellerId: string
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }

  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationFindUniqueArgs>(args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationFindFirstArgs>(args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationFindManyArgs>(args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
     */
    create<T extends ConversationCreateArgs>(args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationCreateManyArgs>(args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
     */
    delete<T extends ConversationDeleteArgs>(args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationUpdateArgs>(args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationDeleteManyArgs>(args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationUpdateManyArgs>(args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {ConversationUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
     */
    upsert<T extends ConversationUpsertArgs>(args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buyer<T extends BuyerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BuyerProfileDefaultArgs<ExtArgs>>): Prisma__BuyerProfileClient<$Result.GetResult<Prisma.$BuyerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seller<T extends SellerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SellerProfileDefaultArgs<ExtArgs>>): Prisma__SellerProfileClient<$Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Conversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conversation model
   */
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'String'>
    readonly createdAt: FieldRef<"Conversation", 'DateTime'>
    readonly buyerId: FieldRef<"Conversation", 'String'>
    readonly sellerId: FieldRef<"Conversation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }

  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversation createManyAndReturn
   */
  export type ConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversation updateManyAndReturn
   */
  export type ConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }

  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number
  }

  /**
   * Conversation.messages
   */
  export type Conversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    senderBuyerId: string | null
    senderSellerId: string | null
    conversationId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    senderBuyerId: string | null
    senderSellerId: string | null
    conversationId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    senderBuyerId: number
    senderSellerId: number
    conversationId: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    senderBuyerId?: true
    senderSellerId?: true
    conversationId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    senderBuyerId?: true
    senderSellerId?: true
    conversationId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    senderBuyerId?: true
    senderSellerId?: true
    conversationId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    createdAt: Date
    senderBuyerId: string | null
    senderSellerId: string | null
    conversationId: string
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    senderBuyerId?: boolean
    senderSellerId?: boolean
    conversationId?: boolean
    senderBuyer?: boolean | Message$senderBuyerArgs<ExtArgs>
    senderSeller?: boolean | Message$senderSellerArgs<ExtArgs>
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    senderBuyerId?: boolean
    senderSellerId?: boolean
    conversationId?: boolean
    senderBuyer?: boolean | Message$senderBuyerArgs<ExtArgs>
    senderSeller?: boolean | Message$senderSellerArgs<ExtArgs>
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    senderBuyerId?: boolean
    senderSellerId?: boolean
    conversationId?: boolean
    senderBuyer?: boolean | Message$senderBuyerArgs<ExtArgs>
    senderSeller?: boolean | Message$senderSellerArgs<ExtArgs>
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    senderBuyerId?: boolean
    senderSellerId?: boolean
    conversationId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "senderBuyerId" | "senderSellerId" | "conversationId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderBuyer?: boolean | Message$senderBuyerArgs<ExtArgs>
    senderSeller?: boolean | Message$senderSellerArgs<ExtArgs>
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderBuyer?: boolean | Message$senderBuyerArgs<ExtArgs>
    senderSeller?: boolean | Message$senderSellerArgs<ExtArgs>
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderBuyer?: boolean | Message$senderBuyerArgs<ExtArgs>
    senderSeller?: boolean | Message$senderSellerArgs<ExtArgs>
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      senderBuyer: Prisma.$BuyerProfilePayload<ExtArgs> | null
      senderSeller: Prisma.$SellerProfilePayload<ExtArgs> | null
      conversation: Prisma.$ConversationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      createdAt: Date
      senderBuyerId: string | null
      senderSellerId: string | null
      conversationId: string
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    senderBuyer<T extends Message$senderBuyerArgs<ExtArgs> = {}>(args?: Subset<T, Message$senderBuyerArgs<ExtArgs>>): Prisma__BuyerProfileClient<$Result.GetResult<Prisma.$BuyerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    senderSeller<T extends Message$senderSellerArgs<ExtArgs> = {}>(args?: Subset<T, Message$senderSellerArgs<ExtArgs>>): Prisma__SellerProfileClient<$Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly senderBuyerId: FieldRef<"Message", 'String'>
    readonly senderSellerId: FieldRef<"Message", 'String'>
    readonly conversationId: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.senderBuyer
   */
  export type Message$senderBuyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerProfile
     */
    select?: BuyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerProfile
     */
    omit?: BuyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerProfileInclude<ExtArgs> | null
    where?: BuyerProfileWhereInput
  }

  /**
   * Message.senderSeller
   */
  export type Message$senderSellerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfile
     */
    select?: SellerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfile
     */
    omit?: SellerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfileInclude<ExtArgs> | null
    where?: SellerProfileWhereInput
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    profileImage: 'profileImage',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BuyerProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bio: 'bio',
    phone: 'phone',
    address: 'address',
    profileImage: 'profileImage'
  };

  export type BuyerProfileScalarFieldEnum = (typeof BuyerProfileScalarFieldEnum)[keyof typeof BuyerProfileScalarFieldEnum]


  export const SellerProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bio: 'bio',
    skills: 'skills',
    portfolio: 'portfolio',
    earnings: 'earnings',
    profileImage: 'profileImage'
  };

  export type SellerProfileScalarFieldEnum = (typeof SellerProfileScalarFieldEnum)[keyof typeof SellerProfileScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    icon: 'icon'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ServicePackageScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    price: 'price',
    deliveryDays: 'deliveryDays',
    revisions: 'revisions',
    type: 'type',
    serviceId: 'serviceId',
    createdAt: 'createdAt'
  };

  export type ServicePackageScalarFieldEnum = (typeof ServicePackageScalarFieldEnum)[keyof typeof ServicePackageScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    images: 'images',
    createdAt: 'createdAt',
    sellerId: 'sellerId',
    categoryId: 'categoryId'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    status: 'status',
    requirements: 'requirements',
    createdAt: 'createdAt',
    serviceId: 'serviceId',
    buyerId: 'buyerId',
    sellerId: 'sellerId'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    status: 'status',
    provider: 'provider',
    createdAt: 'createdAt',
    orderId: 'orderId'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    buyerId: 'buyerId',
    serviceId: 'serviceId',
    orderId: 'orderId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    buyerId: 'buyerId',
    sellerId: 'sellerId'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    senderBuyerId: 'senderBuyerId',
    senderSellerId: 'senderSellerId',
    conversationId: 'conversationId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PackageType'
   */
  export type EnumPackageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PackageType'>
    


  /**
   * Reference to a field of type 'PackageType[]'
   */
  export type ListEnumPackageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PackageType[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profileImage?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    buyerProfile?: XOR<BuyerProfileNullableScalarRelationFilter, BuyerProfileWhereInput> | null
    sellerProfile?: XOR<SellerProfileNullableScalarRelationFilter, SellerProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    buyerProfile?: BuyerProfileOrderByWithRelationInput
    sellerProfile?: SellerProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profileImage?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    buyerProfile?: XOR<BuyerProfileNullableScalarRelationFilter, BuyerProfileWhereInput> | null
    sellerProfile?: XOR<SellerProfileNullableScalarRelationFilter, SellerProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BuyerProfileWhereInput = {
    AND?: BuyerProfileWhereInput | BuyerProfileWhereInput[]
    OR?: BuyerProfileWhereInput[]
    NOT?: BuyerProfileWhereInput | BuyerProfileWhereInput[]
    id?: StringFilter<"BuyerProfile"> | string
    userId?: StringFilter<"BuyerProfile"> | string
    bio?: StringNullableFilter<"BuyerProfile"> | string | null
    phone?: StringNullableFilter<"BuyerProfile"> | string | null
    address?: StringNullableFilter<"BuyerProfile"> | string | null
    profileImage?: StringNullableFilter<"BuyerProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    savedServices?: ServiceListRelationFilter
    orders?: OrderListRelationFilter
    reviews?: ReviewListRelationFilter
    conversations?: ConversationListRelationFilter
    sentMessages?: MessageListRelationFilter
  }

  export type BuyerProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    savedServices?: ServiceOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    conversations?: ConversationOrderByRelationAggregateInput
    sentMessages?: MessageOrderByRelationAggregateInput
  }

  export type BuyerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: BuyerProfileWhereInput | BuyerProfileWhereInput[]
    OR?: BuyerProfileWhereInput[]
    NOT?: BuyerProfileWhereInput | BuyerProfileWhereInput[]
    bio?: StringNullableFilter<"BuyerProfile"> | string | null
    phone?: StringNullableFilter<"BuyerProfile"> | string | null
    address?: StringNullableFilter<"BuyerProfile"> | string | null
    profileImage?: StringNullableFilter<"BuyerProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    savedServices?: ServiceListRelationFilter
    orders?: OrderListRelationFilter
    reviews?: ReviewListRelationFilter
    conversations?: ConversationListRelationFilter
    sentMessages?: MessageListRelationFilter
  }, "id" | "userId">

  export type BuyerProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    _count?: BuyerProfileCountOrderByAggregateInput
    _max?: BuyerProfileMaxOrderByAggregateInput
    _min?: BuyerProfileMinOrderByAggregateInput
  }

  export type BuyerProfileScalarWhereWithAggregatesInput = {
    AND?: BuyerProfileScalarWhereWithAggregatesInput | BuyerProfileScalarWhereWithAggregatesInput[]
    OR?: BuyerProfileScalarWhereWithAggregatesInput[]
    NOT?: BuyerProfileScalarWhereWithAggregatesInput | BuyerProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BuyerProfile"> | string
    userId?: StringWithAggregatesFilter<"BuyerProfile"> | string
    bio?: StringNullableWithAggregatesFilter<"BuyerProfile"> | string | null
    phone?: StringNullableWithAggregatesFilter<"BuyerProfile"> | string | null
    address?: StringNullableWithAggregatesFilter<"BuyerProfile"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"BuyerProfile"> | string | null
  }

  export type SellerProfileWhereInput = {
    AND?: SellerProfileWhereInput | SellerProfileWhereInput[]
    OR?: SellerProfileWhereInput[]
    NOT?: SellerProfileWhereInput | SellerProfileWhereInput[]
    id?: StringFilter<"SellerProfile"> | string
    userId?: StringFilter<"SellerProfile"> | string
    bio?: StringNullableFilter<"SellerProfile"> | string | null
    skills?: StringNullableListFilter<"SellerProfile">
    portfolio?: StringNullableListFilter<"SellerProfile">
    earnings?: FloatFilter<"SellerProfile"> | number
    profileImage?: StringNullableFilter<"SellerProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    services?: ServiceListRelationFilter
    orders?: OrderListRelationFilter
    conversations?: ConversationListRelationFilter
    sentMessages?: MessageListRelationFilter
  }

  export type SellerProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrderInput | SortOrder
    skills?: SortOrder
    portfolio?: SortOrder
    earnings?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    services?: ServiceOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    conversations?: ConversationOrderByRelationAggregateInput
    sentMessages?: MessageOrderByRelationAggregateInput
  }

  export type SellerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SellerProfileWhereInput | SellerProfileWhereInput[]
    OR?: SellerProfileWhereInput[]
    NOT?: SellerProfileWhereInput | SellerProfileWhereInput[]
    bio?: StringNullableFilter<"SellerProfile"> | string | null
    skills?: StringNullableListFilter<"SellerProfile">
    portfolio?: StringNullableListFilter<"SellerProfile">
    earnings?: FloatFilter<"SellerProfile"> | number
    profileImage?: StringNullableFilter<"SellerProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    services?: ServiceListRelationFilter
    orders?: OrderListRelationFilter
    conversations?: ConversationListRelationFilter
    sentMessages?: MessageListRelationFilter
  }, "id" | "userId">

  export type SellerProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrderInput | SortOrder
    skills?: SortOrder
    portfolio?: SortOrder
    earnings?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    _count?: SellerProfileCountOrderByAggregateInput
    _avg?: SellerProfileAvgOrderByAggregateInput
    _max?: SellerProfileMaxOrderByAggregateInput
    _min?: SellerProfileMinOrderByAggregateInput
    _sum?: SellerProfileSumOrderByAggregateInput
  }

  export type SellerProfileScalarWhereWithAggregatesInput = {
    AND?: SellerProfileScalarWhereWithAggregatesInput | SellerProfileScalarWhereWithAggregatesInput[]
    OR?: SellerProfileScalarWhereWithAggregatesInput[]
    NOT?: SellerProfileScalarWhereWithAggregatesInput | SellerProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SellerProfile"> | string
    userId?: StringWithAggregatesFilter<"SellerProfile"> | string
    bio?: StringNullableWithAggregatesFilter<"SellerProfile"> | string | null
    skills?: StringNullableListFilter<"SellerProfile">
    portfolio?: StringNullableListFilter<"SellerProfile">
    earnings?: FloatWithAggregatesFilter<"SellerProfile"> | number
    profileImage?: StringNullableWithAggregatesFilter<"SellerProfile"> | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    icon?: StringNullableFilter<"Category"> | string | null
    services?: ServiceListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrderInput | SortOrder
    services?: ServiceOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    icon?: StringNullableFilter<"Category"> | string | null
    services?: ServiceListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    icon?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type ServicePackageWhereInput = {
    AND?: ServicePackageWhereInput | ServicePackageWhereInput[]
    OR?: ServicePackageWhereInput[]
    NOT?: ServicePackageWhereInput | ServicePackageWhereInput[]
    id?: StringFilter<"ServicePackage"> | string
    title?: StringFilter<"ServicePackage"> | string
    description?: StringNullableFilter<"ServicePackage"> | string | null
    price?: FloatFilter<"ServicePackage"> | number
    deliveryDays?: IntFilter<"ServicePackage"> | number
    revisions?: IntNullableFilter<"ServicePackage"> | number | null
    type?: EnumPackageTypeFilter<"ServicePackage"> | $Enums.PackageType
    serviceId?: StringFilter<"ServicePackage"> | string
    createdAt?: DateTimeFilter<"ServicePackage"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type ServicePackageOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    deliveryDays?: SortOrder
    revisions?: SortOrderInput | SortOrder
    type?: SortOrder
    serviceId?: SortOrder
    createdAt?: SortOrder
    service?: ServiceOrderByWithRelationInput
  }

  export type ServicePackageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServicePackageWhereInput | ServicePackageWhereInput[]
    OR?: ServicePackageWhereInput[]
    NOT?: ServicePackageWhereInput | ServicePackageWhereInput[]
    title?: StringFilter<"ServicePackage"> | string
    description?: StringNullableFilter<"ServicePackage"> | string | null
    price?: FloatFilter<"ServicePackage"> | number
    deliveryDays?: IntFilter<"ServicePackage"> | number
    revisions?: IntNullableFilter<"ServicePackage"> | number | null
    type?: EnumPackageTypeFilter<"ServicePackage"> | $Enums.PackageType
    serviceId?: StringFilter<"ServicePackage"> | string
    createdAt?: DateTimeFilter<"ServicePackage"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id">

  export type ServicePackageOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    deliveryDays?: SortOrder
    revisions?: SortOrderInput | SortOrder
    type?: SortOrder
    serviceId?: SortOrder
    createdAt?: SortOrder
    _count?: ServicePackageCountOrderByAggregateInput
    _avg?: ServicePackageAvgOrderByAggregateInput
    _max?: ServicePackageMaxOrderByAggregateInput
    _min?: ServicePackageMinOrderByAggregateInput
    _sum?: ServicePackageSumOrderByAggregateInput
  }

  export type ServicePackageScalarWhereWithAggregatesInput = {
    AND?: ServicePackageScalarWhereWithAggregatesInput | ServicePackageScalarWhereWithAggregatesInput[]
    OR?: ServicePackageScalarWhereWithAggregatesInput[]
    NOT?: ServicePackageScalarWhereWithAggregatesInput | ServicePackageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServicePackage"> | string
    title?: StringWithAggregatesFilter<"ServicePackage"> | string
    description?: StringNullableWithAggregatesFilter<"ServicePackage"> | string | null
    price?: FloatWithAggregatesFilter<"ServicePackage"> | number
    deliveryDays?: IntWithAggregatesFilter<"ServicePackage"> | number
    revisions?: IntNullableWithAggregatesFilter<"ServicePackage"> | number | null
    type?: EnumPackageTypeWithAggregatesFilter<"ServicePackage"> | $Enums.PackageType
    serviceId?: StringWithAggregatesFilter<"ServicePackage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ServicePackage"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    title?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    images?: StringNullableListFilter<"Service">
    createdAt?: DateTimeFilter<"Service"> | Date | string
    sellerId?: StringFilter<"Service"> | string
    categoryId?: StringFilter<"Service"> | string
    seller?: XOR<SellerProfileScalarRelationFilter, SellerProfileWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    packages?: ServicePackageListRelationFilter
    orders?: OrderListRelationFilter
    reviews?: ReviewListRelationFilter
    savedBy?: BuyerProfileListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    sellerId?: SortOrder
    categoryId?: SortOrder
    seller?: SellerProfileOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    packages?: ServicePackageOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    savedBy?: BuyerProfileOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    title?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    images?: StringNullableListFilter<"Service">
    createdAt?: DateTimeFilter<"Service"> | Date | string
    sellerId?: StringFilter<"Service"> | string
    categoryId?: StringFilter<"Service"> | string
    seller?: XOR<SellerProfileScalarRelationFilter, SellerProfileWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    packages?: ServicePackageListRelationFilter
    orders?: OrderListRelationFilter
    reviews?: ReviewListRelationFilter
    savedBy?: BuyerProfileListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    sellerId?: SortOrder
    categoryId?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    title?: StringWithAggregatesFilter<"Service"> | string
    description?: StringWithAggregatesFilter<"Service"> | string
    images?: StringNullableListFilter<"Service">
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    sellerId?: StringWithAggregatesFilter<"Service"> | string
    categoryId?: StringWithAggregatesFilter<"Service"> | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    requirements?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    serviceId?: StringFilter<"Order"> | string
    buyerId?: StringFilter<"Order"> | string
    sellerId?: StringFilter<"Order"> | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    buyer?: XOR<BuyerProfileScalarRelationFilter, BuyerProfileWhereInput>
    seller?: XOR<SellerProfileScalarRelationFilter, SellerProfileWhereInput>
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    requirements?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    serviceId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    service?: ServiceOrderByWithRelationInput
    buyer?: BuyerProfileOrderByWithRelationInput
    seller?: SellerProfileOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
    review?: ReviewOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    requirements?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    serviceId?: StringFilter<"Order"> | string
    buyerId?: StringFilter<"Order"> | string
    sellerId?: StringFilter<"Order"> | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    buyer?: XOR<BuyerProfileScalarRelationFilter, BuyerProfileWhereInput>
    seller?: XOR<SellerProfileScalarRelationFilter, SellerProfileWhereInput>
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    requirements?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    serviceId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    requirements?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    serviceId?: StringWithAggregatesFilter<"Order"> | string
    buyerId?: StringWithAggregatesFilter<"Order"> | string
    sellerId?: StringWithAggregatesFilter<"Order"> | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    provider?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    orderId?: StringFilter<"Payment"> | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    orderId?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: FloatFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    provider?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id" | "orderId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    orderId?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    provider?: StringWithAggregatesFilter<"Payment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    orderId?: StringWithAggregatesFilter<"Payment"> | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    buyerId?: StringFilter<"Review"> | string
    serviceId?: StringFilter<"Review"> | string
    orderId?: StringFilter<"Review"> | string
    buyer?: XOR<BuyerProfileScalarRelationFilter, BuyerProfileWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    buyerId?: SortOrder
    serviceId?: SortOrder
    orderId?: SortOrder
    buyer?: BuyerProfileOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    order?: OrderOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    buyerId?: StringFilter<"Review"> | string
    serviceId?: StringFilter<"Review"> | string
    buyer?: XOR<BuyerProfileScalarRelationFilter, BuyerProfileWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id" | "orderId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    buyerId?: SortOrder
    serviceId?: SortOrder
    orderId?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    buyerId?: StringWithAggregatesFilter<"Review"> | string
    serviceId?: StringWithAggregatesFilter<"Review"> | string
    orderId?: StringWithAggregatesFilter<"Review"> | string
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: StringFilter<"Conversation"> | string
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    buyerId?: StringFilter<"Conversation"> | string
    sellerId?: StringFilter<"Conversation"> | string
    buyer?: XOR<BuyerProfileScalarRelationFilter, BuyerProfileWhereInput>
    seller?: XOR<SellerProfileScalarRelationFilter, SellerProfileWhereInput>
    messages?: MessageListRelationFilter
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    buyer?: BuyerProfileOrderByWithRelationInput
    seller?: SellerProfileOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    buyerId?: StringFilter<"Conversation"> | string
    sellerId?: StringFilter<"Conversation"> | string
    buyer?: XOR<BuyerProfileScalarRelationFilter, BuyerProfileWhereInput>
    seller?: XOR<SellerProfileScalarRelationFilter, SellerProfileWhereInput>
    messages?: MessageListRelationFilter
  }, "id">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conversation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
    buyerId?: StringWithAggregatesFilter<"Conversation"> | string
    sellerId?: StringWithAggregatesFilter<"Conversation"> | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    senderBuyerId?: StringNullableFilter<"Message"> | string | null
    senderSellerId?: StringNullableFilter<"Message"> | string | null
    conversationId?: StringFilter<"Message"> | string
    senderBuyer?: XOR<BuyerProfileNullableScalarRelationFilter, BuyerProfileWhereInput> | null
    senderSeller?: XOR<SellerProfileNullableScalarRelationFilter, SellerProfileWhereInput> | null
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    senderBuyerId?: SortOrderInput | SortOrder
    senderSellerId?: SortOrderInput | SortOrder
    conversationId?: SortOrder
    senderBuyer?: BuyerProfileOrderByWithRelationInput
    senderSeller?: SellerProfileOrderByWithRelationInput
    conversation?: ConversationOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    senderBuyerId?: StringNullableFilter<"Message"> | string | null
    senderSellerId?: StringNullableFilter<"Message"> | string | null
    conversationId?: StringFilter<"Message"> | string
    senderBuyer?: XOR<BuyerProfileNullableScalarRelationFilter, BuyerProfileWhereInput> | null
    senderSeller?: XOR<SellerProfileNullableScalarRelationFilter, SellerProfileWhereInput> | null
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    senderBuyerId?: SortOrderInput | SortOrder
    senderSellerId?: SortOrderInput | SortOrder
    conversationId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    senderBuyerId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    senderSellerId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    conversationId?: StringWithAggregatesFilter<"Message"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: $Enums.Role
    profileImage?: string | null
    createdAt?: Date | string
    buyerProfile?: BuyerProfileCreateNestedOneWithoutUserInput
    sellerProfile?: SellerProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: $Enums.Role
    profileImage?: string | null
    createdAt?: Date | string
    buyerProfile?: BuyerProfileUncheckedCreateNestedOneWithoutUserInput
    sellerProfile?: SellerProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerProfile?: BuyerProfileUpdateOneWithoutUserNestedInput
    sellerProfile?: SellerProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerProfile?: BuyerProfileUncheckedUpdateOneWithoutUserNestedInput
    sellerProfile?: SellerProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: $Enums.Role
    profileImage?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuyerProfileCreateInput = {
    id?: string
    bio?: string | null
    phone?: string | null
    address?: string | null
    profileImage?: string | null
    user: UserCreateNestedOneWithoutBuyerProfileInput
    savedServices?: ServiceCreateNestedManyWithoutSavedByInput
    orders?: OrderCreateNestedManyWithoutBuyerInput
    reviews?: ReviewCreateNestedManyWithoutBuyerInput
    conversations?: ConversationCreateNestedManyWithoutBuyerInput
    sentMessages?: MessageCreateNestedManyWithoutSenderBuyerInput
  }

  export type BuyerProfileUncheckedCreateInput = {
    id?: string
    userId: string
    bio?: string | null
    phone?: string | null
    address?: string | null
    profileImage?: string | null
    savedServices?: ServiceUncheckedCreateNestedManyWithoutSavedByInput
    orders?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutBuyerInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutBuyerInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderBuyerInput
  }

  export type BuyerProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutBuyerProfileNestedInput
    savedServices?: ServiceUpdateManyWithoutSavedByNestedInput
    orders?: OrderUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewUpdateManyWithoutBuyerNestedInput
    conversations?: ConversationUpdateManyWithoutBuyerNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderBuyerNestedInput
  }

  export type BuyerProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    savedServices?: ServiceUncheckedUpdateManyWithoutSavedByNestedInput
    orders?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutBuyerNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutBuyerNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderBuyerNestedInput
  }

  export type BuyerProfileCreateManyInput = {
    id?: string
    userId: string
    bio?: string | null
    phone?: string | null
    address?: string | null
    profileImage?: string | null
  }

  export type BuyerProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BuyerProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SellerProfileCreateInput = {
    id?: string
    bio?: string | null
    skills?: SellerProfileCreateskillsInput | string[]
    portfolio?: SellerProfileCreateportfolioInput | string[]
    earnings?: number
    profileImage?: string | null
    user: UserCreateNestedOneWithoutSellerProfileInput
    services?: ServiceCreateNestedManyWithoutSellerInput
    orders?: OrderCreateNestedManyWithoutSellerInput
    conversations?: ConversationCreateNestedManyWithoutSellerInput
    sentMessages?: MessageCreateNestedManyWithoutSenderSellerInput
  }

  export type SellerProfileUncheckedCreateInput = {
    id?: string
    userId: string
    bio?: string | null
    skills?: SellerProfileCreateskillsInput | string[]
    portfolio?: SellerProfileCreateportfolioInput | string[]
    earnings?: number
    profileImage?: string | null
    services?: ServiceUncheckedCreateNestedManyWithoutSellerInput
    orders?: OrderUncheckedCreateNestedManyWithoutSellerInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutSellerInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderSellerInput
  }

  export type SellerProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SellerProfileUpdateskillsInput | string[]
    portfolio?: SellerProfileUpdateportfolioInput | string[]
    earnings?: FloatFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSellerProfileNestedInput
    services?: ServiceUpdateManyWithoutSellerNestedInput
    orders?: OrderUpdateManyWithoutSellerNestedInput
    conversations?: ConversationUpdateManyWithoutSellerNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderSellerNestedInput
  }

  export type SellerProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SellerProfileUpdateskillsInput | string[]
    portfolio?: SellerProfileUpdateportfolioInput | string[]
    earnings?: FloatFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    services?: ServiceUncheckedUpdateManyWithoutSellerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutSellerNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutSellerNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderSellerNestedInput
  }

  export type SellerProfileCreateManyInput = {
    id?: string
    userId: string
    bio?: string | null
    skills?: SellerProfileCreateskillsInput | string[]
    portfolio?: SellerProfileCreateportfolioInput | string[]
    earnings?: number
    profileImage?: string | null
  }

  export type SellerProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SellerProfileUpdateskillsInput | string[]
    portfolio?: SellerProfileUpdateportfolioInput | string[]
    earnings?: FloatFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SellerProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SellerProfileUpdateskillsInput | string[]
    portfolio?: SellerProfileUpdateportfolioInput | string[]
    earnings?: FloatFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    icon?: string | null
    services?: ServiceCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    icon?: string | null
    services?: ServiceUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    services?: ServiceUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    services?: ServiceUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    icon?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServicePackageCreateInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    deliveryDays: number
    revisions?: number | null
    type: $Enums.PackageType
    createdAt?: Date | string
    service: ServiceCreateNestedOneWithoutPackagesInput
  }

  export type ServicePackageUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    deliveryDays: number
    revisions?: number | null
    type: $Enums.PackageType
    serviceId: string
    createdAt?: Date | string
  }

  export type ServicePackageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    deliveryDays?: IntFieldUpdateOperationsInput | number
    revisions?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutPackagesNestedInput
  }

  export type ServicePackageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    deliveryDays?: IntFieldUpdateOperationsInput | number
    revisions?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicePackageCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    deliveryDays: number
    revisions?: number | null
    type: $Enums.PackageType
    serviceId: string
    createdAt?: Date | string
  }

  export type ServicePackageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    deliveryDays?: IntFieldUpdateOperationsInput | number
    revisions?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicePackageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    deliveryDays?: IntFieldUpdateOperationsInput | number
    revisions?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id?: string
    title: string
    description: string
    images?: ServiceCreateimagesInput | string[]
    createdAt?: Date | string
    seller: SellerProfileCreateNestedOneWithoutServicesInput
    category: CategoryCreateNestedOneWithoutServicesInput
    packages?: ServicePackageCreateNestedManyWithoutServiceInput
    orders?: OrderCreateNestedManyWithoutServiceInput
    reviews?: ReviewCreateNestedManyWithoutServiceInput
    savedBy?: BuyerProfileCreateNestedManyWithoutSavedServicesInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    images?: ServiceCreateimagesInput | string[]
    createdAt?: Date | string
    sellerId: string
    categoryId: string
    packages?: ServicePackageUncheckedCreateNestedManyWithoutServiceInput
    orders?: OrderUncheckedCreateNestedManyWithoutServiceInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutServiceInput
    savedBy?: BuyerProfileUncheckedCreateNestedManyWithoutSavedServicesInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ServiceUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: SellerProfileUpdateOneRequiredWithoutServicesNestedInput
    category?: CategoryUpdateOneRequiredWithoutServicesNestedInput
    packages?: ServicePackageUpdateManyWithoutServiceNestedInput
    orders?: OrderUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUpdateManyWithoutServiceNestedInput
    savedBy?: BuyerProfileUpdateManyWithoutSavedServicesNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ServiceUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    packages?: ServicePackageUncheckedUpdateManyWithoutServiceNestedInput
    orders?: OrderUncheckedUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutServiceNestedInput
    savedBy?: BuyerProfileUncheckedUpdateManyWithoutSavedServicesNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    title: string
    description: string
    images?: ServiceCreateimagesInput | string[]
    createdAt?: Date | string
    sellerId: string
    categoryId: string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ServiceUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ServiceUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateInput = {
    id?: string
    status?: $Enums.OrderStatus
    requirements?: string | null
    createdAt?: Date | string
    service: ServiceCreateNestedOneWithoutOrdersInput
    buyer: BuyerProfileCreateNestedOneWithoutOrdersInput
    seller: SellerProfileCreateNestedOneWithoutOrdersInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
    review?: ReviewCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    status?: $Enums.OrderStatus
    requirements?: string | null
    createdAt?: Date | string
    serviceId: string
    buyerId: string
    sellerId: string
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
    review?: ReviewUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutOrdersNestedInput
    buyer?: BuyerProfileUpdateOneRequiredWithoutOrdersNestedInput
    seller?: SellerProfileUpdateOneRequiredWithoutOrdersNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
    review?: ReviewUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
    review?: ReviewUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    status?: $Enums.OrderStatus
    requirements?: string | null
    createdAt?: Date | string
    serviceId: string
    buyerId: string
    sellerId: string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    status?: $Enums.PaymentStatus
    provider: string
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    amount: number
    status?: $Enums.PaymentStatus
    provider: string
    createdAt?: Date | string
    orderId: string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    amount: number
    status?: $Enums.PaymentStatus
    provider: string
    createdAt?: Date | string
    orderId: string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    buyer: BuyerProfileCreateNestedOneWithoutReviewsInput
    service: ServiceCreateNestedOneWithoutReviewsInput
    order: OrderCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    buyerId: string
    serviceId: string
    orderId: string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: BuyerProfileUpdateOneRequiredWithoutReviewsNestedInput
    service?: ServiceUpdateOneRequiredWithoutReviewsNestedInput
    order?: OrderUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    buyerId: string
    serviceId: string
    orderId: string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationCreateInput = {
    id?: string
    createdAt?: Date | string
    buyer: BuyerProfileCreateNestedOneWithoutConversationsInput
    seller: SellerProfileCreateNestedOneWithoutConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    buyerId: string
    sellerId: string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: BuyerProfileUpdateOneRequiredWithoutConversationsNestedInput
    seller?: SellerProfileUpdateOneRequiredWithoutConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: string
    createdAt?: Date | string
    buyerId: string
    sellerId: string
  }

  export type ConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    senderBuyer?: BuyerProfileCreateNestedOneWithoutSentMessagesInput
    senderSeller?: SellerProfileCreateNestedOneWithoutSentMessagesInput
    conversation: ConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    senderBuyerId?: string | null
    senderSellerId?: string | null
    conversationId: string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderBuyer?: BuyerProfileUpdateOneWithoutSentMessagesNestedInput
    senderSeller?: SellerProfileUpdateOneWithoutSentMessagesNestedInput
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderBuyerId?: NullableStringFieldUpdateOperationsInput | string | null
    senderSellerId?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    createdAt?: Date | string
    senderBuyerId?: string | null
    senderSellerId?: string | null
    conversationId: string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderBuyerId?: NullableStringFieldUpdateOperationsInput | string | null
    senderSellerId?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BuyerProfileNullableScalarRelationFilter = {
    is?: BuyerProfileWhereInput | null
    isNot?: BuyerProfileWhereInput | null
  }

  export type SellerProfileNullableScalarRelationFilter = {
    is?: SellerProfileWhereInput | null
    isNot?: SellerProfileWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type ConversationListRelationFilter = {
    every?: ConversationWhereInput
    some?: ConversationWhereInput
    none?: ConversationWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BuyerProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    profileImage?: SortOrder
  }

  export type BuyerProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    profileImage?: SortOrder
  }

  export type BuyerProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    profileImage?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SellerProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    skills?: SortOrder
    portfolio?: SortOrder
    earnings?: SortOrder
    profileImage?: SortOrder
  }

  export type SellerProfileAvgOrderByAggregateInput = {
    earnings?: SortOrder
  }

  export type SellerProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    earnings?: SortOrder
    profileImage?: SortOrder
  }

  export type SellerProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    earnings?: SortOrder
    profileImage?: SortOrder
  }

  export type SellerProfileSumOrderByAggregateInput = {
    earnings?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumPackageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageType | EnumPackageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PackageType[] | ListEnumPackageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PackageType[] | ListEnumPackageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPackageTypeFilter<$PrismaModel> | $Enums.PackageType
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type ServicePackageCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    deliveryDays?: SortOrder
    revisions?: SortOrder
    type?: SortOrder
    serviceId?: SortOrder
    createdAt?: SortOrder
  }

  export type ServicePackageAvgOrderByAggregateInput = {
    price?: SortOrder
    deliveryDays?: SortOrder
    revisions?: SortOrder
  }

  export type ServicePackageMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    deliveryDays?: SortOrder
    revisions?: SortOrder
    type?: SortOrder
    serviceId?: SortOrder
    createdAt?: SortOrder
  }

  export type ServicePackageMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    deliveryDays?: SortOrder
    revisions?: SortOrder
    type?: SortOrder
    serviceId?: SortOrder
    createdAt?: SortOrder
  }

  export type ServicePackageSumOrderByAggregateInput = {
    price?: SortOrder
    deliveryDays?: SortOrder
    revisions?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumPackageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageType | EnumPackageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PackageType[] | ListEnumPackageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PackageType[] | ListEnumPackageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPackageTypeWithAggregatesFilter<$PrismaModel> | $Enums.PackageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPackageTypeFilter<$PrismaModel>
    _max?: NestedEnumPackageTypeFilter<$PrismaModel>
  }

  export type SellerProfileScalarRelationFilter = {
    is?: SellerProfileWhereInput
    isNot?: SellerProfileWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ServicePackageListRelationFilter = {
    every?: ServicePackageWhereInput
    some?: ServicePackageWhereInput
    none?: ServicePackageWhereInput
  }

  export type BuyerProfileListRelationFilter = {
    every?: BuyerProfileWhereInput
    some?: BuyerProfileWhereInput
    none?: BuyerProfileWhereInput
  }

  export type ServicePackageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BuyerProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    sellerId?: SortOrder
    categoryId?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    sellerId?: SortOrder
    categoryId?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    sellerId?: SortOrder
    categoryId?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type BuyerProfileScalarRelationFilter = {
    is?: BuyerProfileWhereInput
    isNot?: BuyerProfileWhereInput
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type ReviewNullableScalarRelationFilter = {
    is?: ReviewWhereInput | null
    isNot?: ReviewWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    requirements?: SortOrder
    createdAt?: SortOrder
    serviceId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    requirements?: SortOrder
    createdAt?: SortOrder
    serviceId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    requirements?: SortOrder
    createdAt?: SortOrder
    serviceId?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    orderId?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    orderId?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    orderId?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    buyerId?: SortOrder
    serviceId?: SortOrder
    orderId?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    buyerId?: SortOrder
    serviceId?: SortOrder
    orderId?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    buyerId?: SortOrder
    serviceId?: SortOrder
    orderId?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
  }

  export type ConversationScalarRelationFilter = {
    is?: ConversationWhereInput
    isNot?: ConversationWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    senderBuyerId?: SortOrder
    senderSellerId?: SortOrder
    conversationId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    senderBuyerId?: SortOrder
    senderSellerId?: SortOrder
    conversationId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    senderBuyerId?: SortOrder
    senderSellerId?: SortOrder
    conversationId?: SortOrder
  }

  export type BuyerProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<BuyerProfileCreateWithoutUserInput, BuyerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: BuyerProfileCreateOrConnectWithoutUserInput
    connect?: BuyerProfileWhereUniqueInput
  }

  export type SellerProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<SellerProfileCreateWithoutUserInput, SellerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SellerProfileCreateOrConnectWithoutUserInput
    connect?: SellerProfileWhereUniqueInput
  }

  export type BuyerProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<BuyerProfileCreateWithoutUserInput, BuyerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: BuyerProfileCreateOrConnectWithoutUserInput
    connect?: BuyerProfileWhereUniqueInput
  }

  export type SellerProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SellerProfileCreateWithoutUserInput, SellerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SellerProfileCreateOrConnectWithoutUserInput
    connect?: SellerProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BuyerProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<BuyerProfileCreateWithoutUserInput, BuyerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: BuyerProfileCreateOrConnectWithoutUserInput
    upsert?: BuyerProfileUpsertWithoutUserInput
    disconnect?: BuyerProfileWhereInput | boolean
    delete?: BuyerProfileWhereInput | boolean
    connect?: BuyerProfileWhereUniqueInput
    update?: XOR<XOR<BuyerProfileUpdateToOneWithWhereWithoutUserInput, BuyerProfileUpdateWithoutUserInput>, BuyerProfileUncheckedUpdateWithoutUserInput>
  }

  export type SellerProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<SellerProfileCreateWithoutUserInput, SellerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SellerProfileCreateOrConnectWithoutUserInput
    upsert?: SellerProfileUpsertWithoutUserInput
    disconnect?: SellerProfileWhereInput | boolean
    delete?: SellerProfileWhereInput | boolean
    connect?: SellerProfileWhereUniqueInput
    update?: XOR<XOR<SellerProfileUpdateToOneWithWhereWithoutUserInput, SellerProfileUpdateWithoutUserInput>, SellerProfileUncheckedUpdateWithoutUserInput>
  }

  export type BuyerProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<BuyerProfileCreateWithoutUserInput, BuyerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: BuyerProfileCreateOrConnectWithoutUserInput
    upsert?: BuyerProfileUpsertWithoutUserInput
    disconnect?: BuyerProfileWhereInput | boolean
    delete?: BuyerProfileWhereInput | boolean
    connect?: BuyerProfileWhereUniqueInput
    update?: XOR<XOR<BuyerProfileUpdateToOneWithWhereWithoutUserInput, BuyerProfileUpdateWithoutUserInput>, BuyerProfileUncheckedUpdateWithoutUserInput>
  }

  export type SellerProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SellerProfileCreateWithoutUserInput, SellerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SellerProfileCreateOrConnectWithoutUserInput
    upsert?: SellerProfileUpsertWithoutUserInput
    disconnect?: SellerProfileWhereInput | boolean
    delete?: SellerProfileWhereInput | boolean
    connect?: SellerProfileWhereUniqueInput
    update?: XOR<XOR<SellerProfileUpdateToOneWithWhereWithoutUserInput, SellerProfileUpdateWithoutUserInput>, SellerProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutBuyerProfileInput = {
    create?: XOR<UserCreateWithoutBuyerProfileInput, UserUncheckedCreateWithoutBuyerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutBuyerProfileInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceCreateNestedManyWithoutSavedByInput = {
    create?: XOR<ServiceCreateWithoutSavedByInput, ServiceUncheckedCreateWithoutSavedByInput> | ServiceCreateWithoutSavedByInput[] | ServiceUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutSavedByInput | ServiceCreateOrConnectWithoutSavedByInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutBuyerInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutBuyerInput = {
    create?: XOR<ReviewCreateWithoutBuyerInput, ReviewUncheckedCreateWithoutBuyerInput> | ReviewCreateWithoutBuyerInput[] | ReviewUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBuyerInput | ReviewCreateOrConnectWithoutBuyerInput[]
    createMany?: ReviewCreateManyBuyerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ConversationCreateNestedManyWithoutBuyerInput = {
    create?: XOR<ConversationCreateWithoutBuyerInput, ConversationUncheckedCreateWithoutBuyerInput> | ConversationCreateWithoutBuyerInput[] | ConversationUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutBuyerInput | ConversationCreateOrConnectWithoutBuyerInput[]
    createMany?: ConversationCreateManyBuyerInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderBuyerInput = {
    create?: XOR<MessageCreateWithoutSenderBuyerInput, MessageUncheckedCreateWithoutSenderBuyerInput> | MessageCreateWithoutSenderBuyerInput[] | MessageUncheckedCreateWithoutSenderBuyerInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderBuyerInput | MessageCreateOrConnectWithoutSenderBuyerInput[]
    createMany?: MessageCreateManySenderBuyerInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutSavedByInput = {
    create?: XOR<ServiceCreateWithoutSavedByInput, ServiceUncheckedCreateWithoutSavedByInput> | ServiceCreateWithoutSavedByInput[] | ServiceUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutSavedByInput | ServiceCreateOrConnectWithoutSavedByInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<ReviewCreateWithoutBuyerInput, ReviewUncheckedCreateWithoutBuyerInput> | ReviewCreateWithoutBuyerInput[] | ReviewUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBuyerInput | ReviewCreateOrConnectWithoutBuyerInput[]
    createMany?: ReviewCreateManyBuyerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<ConversationCreateWithoutBuyerInput, ConversationUncheckedCreateWithoutBuyerInput> | ConversationCreateWithoutBuyerInput[] | ConversationUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutBuyerInput | ConversationCreateOrConnectWithoutBuyerInput[]
    createMany?: ConversationCreateManyBuyerInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderBuyerInput = {
    create?: XOR<MessageCreateWithoutSenderBuyerInput, MessageUncheckedCreateWithoutSenderBuyerInput> | MessageCreateWithoutSenderBuyerInput[] | MessageUncheckedCreateWithoutSenderBuyerInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderBuyerInput | MessageCreateOrConnectWithoutSenderBuyerInput[]
    createMany?: MessageCreateManySenderBuyerInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutBuyerProfileNestedInput = {
    create?: XOR<UserCreateWithoutBuyerProfileInput, UserUncheckedCreateWithoutBuyerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutBuyerProfileInput
    upsert?: UserUpsertWithoutBuyerProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBuyerProfileInput, UserUpdateWithoutBuyerProfileInput>, UserUncheckedUpdateWithoutBuyerProfileInput>
  }

  export type ServiceUpdateManyWithoutSavedByNestedInput = {
    create?: XOR<ServiceCreateWithoutSavedByInput, ServiceUncheckedCreateWithoutSavedByInput> | ServiceCreateWithoutSavedByInput[] | ServiceUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutSavedByInput | ServiceCreateOrConnectWithoutSavedByInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutSavedByInput | ServiceUpsertWithWhereUniqueWithoutSavedByInput[]
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutSavedByInput | ServiceUpdateWithWhereUniqueWithoutSavedByInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutSavedByInput | ServiceUpdateManyWithWhereWithoutSavedByInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutBuyerInput | OrderUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutBuyerInput | OrderUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutBuyerInput | OrderUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<ReviewCreateWithoutBuyerInput, ReviewUncheckedCreateWithoutBuyerInput> | ReviewCreateWithoutBuyerInput[] | ReviewUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBuyerInput | ReviewCreateOrConnectWithoutBuyerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutBuyerInput | ReviewUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: ReviewCreateManyBuyerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutBuyerInput | ReviewUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutBuyerInput | ReviewUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ConversationUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<ConversationCreateWithoutBuyerInput, ConversationUncheckedCreateWithoutBuyerInput> | ConversationCreateWithoutBuyerInput[] | ConversationUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutBuyerInput | ConversationCreateOrConnectWithoutBuyerInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutBuyerInput | ConversationUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: ConversationCreateManyBuyerInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutBuyerInput | ConversationUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutBuyerInput | ConversationUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderBuyerNestedInput = {
    create?: XOR<MessageCreateWithoutSenderBuyerInput, MessageUncheckedCreateWithoutSenderBuyerInput> | MessageCreateWithoutSenderBuyerInput[] | MessageUncheckedCreateWithoutSenderBuyerInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderBuyerInput | MessageCreateOrConnectWithoutSenderBuyerInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderBuyerInput | MessageUpsertWithWhereUniqueWithoutSenderBuyerInput[]
    createMany?: MessageCreateManySenderBuyerInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderBuyerInput | MessageUpdateWithWhereUniqueWithoutSenderBuyerInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderBuyerInput | MessageUpdateManyWithWhereWithoutSenderBuyerInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutSavedByNestedInput = {
    create?: XOR<ServiceCreateWithoutSavedByInput, ServiceUncheckedCreateWithoutSavedByInput> | ServiceCreateWithoutSavedByInput[] | ServiceUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutSavedByInput | ServiceCreateOrConnectWithoutSavedByInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutSavedByInput | ServiceUpsertWithWhereUniqueWithoutSavedByInput[]
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutSavedByInput | ServiceUpdateWithWhereUniqueWithoutSavedByInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutSavedByInput | ServiceUpdateManyWithWhereWithoutSavedByInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutBuyerInput | OrderUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutBuyerInput | OrderUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutBuyerInput | OrderUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<ReviewCreateWithoutBuyerInput, ReviewUncheckedCreateWithoutBuyerInput> | ReviewCreateWithoutBuyerInput[] | ReviewUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBuyerInput | ReviewCreateOrConnectWithoutBuyerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutBuyerInput | ReviewUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: ReviewCreateManyBuyerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutBuyerInput | ReviewUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutBuyerInput | ReviewUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<ConversationCreateWithoutBuyerInput, ConversationUncheckedCreateWithoutBuyerInput> | ConversationCreateWithoutBuyerInput[] | ConversationUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutBuyerInput | ConversationCreateOrConnectWithoutBuyerInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutBuyerInput | ConversationUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: ConversationCreateManyBuyerInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutBuyerInput | ConversationUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutBuyerInput | ConversationUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderBuyerNestedInput = {
    create?: XOR<MessageCreateWithoutSenderBuyerInput, MessageUncheckedCreateWithoutSenderBuyerInput> | MessageCreateWithoutSenderBuyerInput[] | MessageUncheckedCreateWithoutSenderBuyerInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderBuyerInput | MessageCreateOrConnectWithoutSenderBuyerInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderBuyerInput | MessageUpsertWithWhereUniqueWithoutSenderBuyerInput[]
    createMany?: MessageCreateManySenderBuyerInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderBuyerInput | MessageUpdateWithWhereUniqueWithoutSenderBuyerInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderBuyerInput | MessageUpdateManyWithWhereWithoutSenderBuyerInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type SellerProfileCreateskillsInput = {
    set: string[]
  }

  export type SellerProfileCreateportfolioInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutSellerProfileInput = {
    create?: XOR<UserCreateWithoutSellerProfileInput, UserUncheckedCreateWithoutSellerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutSellerProfileInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceCreateNestedManyWithoutSellerInput = {
    create?: XOR<ServiceCreateWithoutSellerInput, ServiceUncheckedCreateWithoutSellerInput> | ServiceCreateWithoutSellerInput[] | ServiceUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutSellerInput | ServiceCreateOrConnectWithoutSellerInput[]
    createMany?: ServiceCreateManySellerInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutSellerInput = {
    create?: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput> | OrderCreateWithoutSellerInput[] | OrderUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSellerInput | OrderCreateOrConnectWithoutSellerInput[]
    createMany?: OrderCreateManySellerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ConversationCreateNestedManyWithoutSellerInput = {
    create?: XOR<ConversationCreateWithoutSellerInput, ConversationUncheckedCreateWithoutSellerInput> | ConversationCreateWithoutSellerInput[] | ConversationUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutSellerInput | ConversationCreateOrConnectWithoutSellerInput[]
    createMany?: ConversationCreateManySellerInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderSellerInput = {
    create?: XOR<MessageCreateWithoutSenderSellerInput, MessageUncheckedCreateWithoutSenderSellerInput> | MessageCreateWithoutSenderSellerInput[] | MessageUncheckedCreateWithoutSenderSellerInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderSellerInput | MessageCreateOrConnectWithoutSenderSellerInput[]
    createMany?: MessageCreateManySenderSellerInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<ServiceCreateWithoutSellerInput, ServiceUncheckedCreateWithoutSellerInput> | ServiceCreateWithoutSellerInput[] | ServiceUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutSellerInput | ServiceCreateOrConnectWithoutSellerInput[]
    createMany?: ServiceCreateManySellerInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput> | OrderCreateWithoutSellerInput[] | OrderUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSellerInput | OrderCreateOrConnectWithoutSellerInput[]
    createMany?: OrderCreateManySellerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<ConversationCreateWithoutSellerInput, ConversationUncheckedCreateWithoutSellerInput> | ConversationCreateWithoutSellerInput[] | ConversationUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutSellerInput | ConversationCreateOrConnectWithoutSellerInput[]
    createMany?: ConversationCreateManySellerInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderSellerInput = {
    create?: XOR<MessageCreateWithoutSenderSellerInput, MessageUncheckedCreateWithoutSenderSellerInput> | MessageCreateWithoutSenderSellerInput[] | MessageUncheckedCreateWithoutSenderSellerInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderSellerInput | MessageCreateOrConnectWithoutSenderSellerInput[]
    createMany?: MessageCreateManySenderSellerInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type SellerProfileUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SellerProfileUpdateportfolioInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSellerProfileNestedInput = {
    create?: XOR<UserCreateWithoutSellerProfileInput, UserUncheckedCreateWithoutSellerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutSellerProfileInput
    upsert?: UserUpsertWithoutSellerProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSellerProfileInput, UserUpdateWithoutSellerProfileInput>, UserUncheckedUpdateWithoutSellerProfileInput>
  }

  export type ServiceUpdateManyWithoutSellerNestedInput = {
    create?: XOR<ServiceCreateWithoutSellerInput, ServiceUncheckedCreateWithoutSellerInput> | ServiceCreateWithoutSellerInput[] | ServiceUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutSellerInput | ServiceCreateOrConnectWithoutSellerInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutSellerInput | ServiceUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: ServiceCreateManySellerInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutSellerInput | ServiceUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutSellerInput | ServiceUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutSellerNestedInput = {
    create?: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput> | OrderCreateWithoutSellerInput[] | OrderUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSellerInput | OrderCreateOrConnectWithoutSellerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutSellerInput | OrderUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: OrderCreateManySellerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutSellerInput | OrderUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutSellerInput | OrderUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ConversationUpdateManyWithoutSellerNestedInput = {
    create?: XOR<ConversationCreateWithoutSellerInput, ConversationUncheckedCreateWithoutSellerInput> | ConversationCreateWithoutSellerInput[] | ConversationUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutSellerInput | ConversationCreateOrConnectWithoutSellerInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutSellerInput | ConversationUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: ConversationCreateManySellerInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutSellerInput | ConversationUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutSellerInput | ConversationUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderSellerNestedInput = {
    create?: XOR<MessageCreateWithoutSenderSellerInput, MessageUncheckedCreateWithoutSenderSellerInput> | MessageCreateWithoutSenderSellerInput[] | MessageUncheckedCreateWithoutSenderSellerInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderSellerInput | MessageCreateOrConnectWithoutSenderSellerInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderSellerInput | MessageUpsertWithWhereUniqueWithoutSenderSellerInput[]
    createMany?: MessageCreateManySenderSellerInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderSellerInput | MessageUpdateWithWhereUniqueWithoutSenderSellerInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderSellerInput | MessageUpdateManyWithWhereWithoutSenderSellerInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<ServiceCreateWithoutSellerInput, ServiceUncheckedCreateWithoutSellerInput> | ServiceCreateWithoutSellerInput[] | ServiceUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutSellerInput | ServiceCreateOrConnectWithoutSellerInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutSellerInput | ServiceUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: ServiceCreateManySellerInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutSellerInput | ServiceUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutSellerInput | ServiceUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput> | OrderCreateWithoutSellerInput[] | OrderUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSellerInput | OrderCreateOrConnectWithoutSellerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutSellerInput | OrderUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: OrderCreateManySellerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutSellerInput | OrderUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutSellerInput | OrderUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<ConversationCreateWithoutSellerInput, ConversationUncheckedCreateWithoutSellerInput> | ConversationCreateWithoutSellerInput[] | ConversationUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutSellerInput | ConversationCreateOrConnectWithoutSellerInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutSellerInput | ConversationUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: ConversationCreateManySellerInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutSellerInput | ConversationUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutSellerInput | ConversationUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderSellerNestedInput = {
    create?: XOR<MessageCreateWithoutSenderSellerInput, MessageUncheckedCreateWithoutSenderSellerInput> | MessageCreateWithoutSenderSellerInput[] | MessageUncheckedCreateWithoutSenderSellerInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderSellerInput | MessageCreateOrConnectWithoutSenderSellerInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderSellerInput | MessageUpsertWithWhereUniqueWithoutSenderSellerInput[]
    createMany?: MessageCreateManySenderSellerInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderSellerInput | MessageUpdateWithWhereUniqueWithoutSenderSellerInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderSellerInput | MessageUpdateManyWithWhereWithoutSenderSellerInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ServiceCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutCategoryInput | ServiceUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutCategoryInput | ServiceUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutCategoryInput | ServiceUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutCategoryInput | ServiceUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutCategoryInput | ServiceUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutCategoryInput | ServiceUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceCreateNestedOneWithoutPackagesInput = {
    create?: XOR<ServiceCreateWithoutPackagesInput, ServiceUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutPackagesInput
    connect?: ServiceWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPackageTypeFieldUpdateOperationsInput = {
    set?: $Enums.PackageType
  }

  export type ServiceUpdateOneRequiredWithoutPackagesNestedInput = {
    create?: XOR<ServiceCreateWithoutPackagesInput, ServiceUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutPackagesInput
    upsert?: ServiceUpsertWithoutPackagesInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutPackagesInput, ServiceUpdateWithoutPackagesInput>, ServiceUncheckedUpdateWithoutPackagesInput>
  }

  export type ServiceCreateimagesInput = {
    set: string[]
  }

  export type SellerProfileCreateNestedOneWithoutServicesInput = {
    create?: XOR<SellerProfileCreateWithoutServicesInput, SellerProfileUncheckedCreateWithoutServicesInput>
    connectOrCreate?: SellerProfileCreateOrConnectWithoutServicesInput
    connect?: SellerProfileWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutServicesInput = {
    create?: XOR<CategoryCreateWithoutServicesInput, CategoryUncheckedCreateWithoutServicesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutServicesInput
    connect?: CategoryWhereUniqueInput
  }

  export type ServicePackageCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServicePackageCreateWithoutServiceInput, ServicePackageUncheckedCreateWithoutServiceInput> | ServicePackageCreateWithoutServiceInput[] | ServicePackageUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServicePackageCreateOrConnectWithoutServiceInput | ServicePackageCreateOrConnectWithoutServiceInput[]
    createMany?: ServicePackageCreateManyServiceInputEnvelope
    connect?: ServicePackageWhereUniqueInput | ServicePackageWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutServiceInput = {
    create?: XOR<OrderCreateWithoutServiceInput, OrderUncheckedCreateWithoutServiceInput> | OrderCreateWithoutServiceInput[] | OrderUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutServiceInput | OrderCreateOrConnectWithoutServiceInput[]
    createMany?: OrderCreateManyServiceInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutServiceInput = {
    create?: XOR<ReviewCreateWithoutServiceInput, ReviewUncheckedCreateWithoutServiceInput> | ReviewCreateWithoutServiceInput[] | ReviewUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutServiceInput | ReviewCreateOrConnectWithoutServiceInput[]
    createMany?: ReviewCreateManyServiceInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BuyerProfileCreateNestedManyWithoutSavedServicesInput = {
    create?: XOR<BuyerProfileCreateWithoutSavedServicesInput, BuyerProfileUncheckedCreateWithoutSavedServicesInput> | BuyerProfileCreateWithoutSavedServicesInput[] | BuyerProfileUncheckedCreateWithoutSavedServicesInput[]
    connectOrCreate?: BuyerProfileCreateOrConnectWithoutSavedServicesInput | BuyerProfileCreateOrConnectWithoutSavedServicesInput[]
    connect?: BuyerProfileWhereUniqueInput | BuyerProfileWhereUniqueInput[]
  }

  export type ServicePackageUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServicePackageCreateWithoutServiceInput, ServicePackageUncheckedCreateWithoutServiceInput> | ServicePackageCreateWithoutServiceInput[] | ServicePackageUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServicePackageCreateOrConnectWithoutServiceInput | ServicePackageCreateOrConnectWithoutServiceInput[]
    createMany?: ServicePackageCreateManyServiceInputEnvelope
    connect?: ServicePackageWhereUniqueInput | ServicePackageWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<OrderCreateWithoutServiceInput, OrderUncheckedCreateWithoutServiceInput> | OrderCreateWithoutServiceInput[] | OrderUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutServiceInput | OrderCreateOrConnectWithoutServiceInput[]
    createMany?: OrderCreateManyServiceInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ReviewCreateWithoutServiceInput, ReviewUncheckedCreateWithoutServiceInput> | ReviewCreateWithoutServiceInput[] | ReviewUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutServiceInput | ReviewCreateOrConnectWithoutServiceInput[]
    createMany?: ReviewCreateManyServiceInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BuyerProfileUncheckedCreateNestedManyWithoutSavedServicesInput = {
    create?: XOR<BuyerProfileCreateWithoutSavedServicesInput, BuyerProfileUncheckedCreateWithoutSavedServicesInput> | BuyerProfileCreateWithoutSavedServicesInput[] | BuyerProfileUncheckedCreateWithoutSavedServicesInput[]
    connectOrCreate?: BuyerProfileCreateOrConnectWithoutSavedServicesInput | BuyerProfileCreateOrConnectWithoutSavedServicesInput[]
    connect?: BuyerProfileWhereUniqueInput | BuyerProfileWhereUniqueInput[]
  }

  export type ServiceUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SellerProfileUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<SellerProfileCreateWithoutServicesInput, SellerProfileUncheckedCreateWithoutServicesInput>
    connectOrCreate?: SellerProfileCreateOrConnectWithoutServicesInput
    upsert?: SellerProfileUpsertWithoutServicesInput
    connect?: SellerProfileWhereUniqueInput
    update?: XOR<XOR<SellerProfileUpdateToOneWithWhereWithoutServicesInput, SellerProfileUpdateWithoutServicesInput>, SellerProfileUncheckedUpdateWithoutServicesInput>
  }

  export type CategoryUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<CategoryCreateWithoutServicesInput, CategoryUncheckedCreateWithoutServicesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutServicesInput
    upsert?: CategoryUpsertWithoutServicesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutServicesInput, CategoryUpdateWithoutServicesInput>, CategoryUncheckedUpdateWithoutServicesInput>
  }

  export type ServicePackageUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServicePackageCreateWithoutServiceInput, ServicePackageUncheckedCreateWithoutServiceInput> | ServicePackageCreateWithoutServiceInput[] | ServicePackageUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServicePackageCreateOrConnectWithoutServiceInput | ServicePackageCreateOrConnectWithoutServiceInput[]
    upsert?: ServicePackageUpsertWithWhereUniqueWithoutServiceInput | ServicePackageUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServicePackageCreateManyServiceInputEnvelope
    set?: ServicePackageWhereUniqueInput | ServicePackageWhereUniqueInput[]
    disconnect?: ServicePackageWhereUniqueInput | ServicePackageWhereUniqueInput[]
    delete?: ServicePackageWhereUniqueInput | ServicePackageWhereUniqueInput[]
    connect?: ServicePackageWhereUniqueInput | ServicePackageWhereUniqueInput[]
    update?: ServicePackageUpdateWithWhereUniqueWithoutServiceInput | ServicePackageUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServicePackageUpdateManyWithWhereWithoutServiceInput | ServicePackageUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServicePackageScalarWhereInput | ServicePackageScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutServiceNestedInput = {
    create?: XOR<OrderCreateWithoutServiceInput, OrderUncheckedCreateWithoutServiceInput> | OrderCreateWithoutServiceInput[] | OrderUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutServiceInput | OrderCreateOrConnectWithoutServiceInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutServiceInput | OrderUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: OrderCreateManyServiceInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutServiceInput | OrderUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutServiceInput | OrderUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ReviewCreateWithoutServiceInput, ReviewUncheckedCreateWithoutServiceInput> | ReviewCreateWithoutServiceInput[] | ReviewUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutServiceInput | ReviewCreateOrConnectWithoutServiceInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutServiceInput | ReviewUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ReviewCreateManyServiceInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutServiceInput | ReviewUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutServiceInput | ReviewUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type BuyerProfileUpdateManyWithoutSavedServicesNestedInput = {
    create?: XOR<BuyerProfileCreateWithoutSavedServicesInput, BuyerProfileUncheckedCreateWithoutSavedServicesInput> | BuyerProfileCreateWithoutSavedServicesInput[] | BuyerProfileUncheckedCreateWithoutSavedServicesInput[]
    connectOrCreate?: BuyerProfileCreateOrConnectWithoutSavedServicesInput | BuyerProfileCreateOrConnectWithoutSavedServicesInput[]
    upsert?: BuyerProfileUpsertWithWhereUniqueWithoutSavedServicesInput | BuyerProfileUpsertWithWhereUniqueWithoutSavedServicesInput[]
    set?: BuyerProfileWhereUniqueInput | BuyerProfileWhereUniqueInput[]
    disconnect?: BuyerProfileWhereUniqueInput | BuyerProfileWhereUniqueInput[]
    delete?: BuyerProfileWhereUniqueInput | BuyerProfileWhereUniqueInput[]
    connect?: BuyerProfileWhereUniqueInput | BuyerProfileWhereUniqueInput[]
    update?: BuyerProfileUpdateWithWhereUniqueWithoutSavedServicesInput | BuyerProfileUpdateWithWhereUniqueWithoutSavedServicesInput[]
    updateMany?: BuyerProfileUpdateManyWithWhereWithoutSavedServicesInput | BuyerProfileUpdateManyWithWhereWithoutSavedServicesInput[]
    deleteMany?: BuyerProfileScalarWhereInput | BuyerProfileScalarWhereInput[]
  }

  export type ServicePackageUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServicePackageCreateWithoutServiceInput, ServicePackageUncheckedCreateWithoutServiceInput> | ServicePackageCreateWithoutServiceInput[] | ServicePackageUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServicePackageCreateOrConnectWithoutServiceInput | ServicePackageCreateOrConnectWithoutServiceInput[]
    upsert?: ServicePackageUpsertWithWhereUniqueWithoutServiceInput | ServicePackageUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServicePackageCreateManyServiceInputEnvelope
    set?: ServicePackageWhereUniqueInput | ServicePackageWhereUniqueInput[]
    disconnect?: ServicePackageWhereUniqueInput | ServicePackageWhereUniqueInput[]
    delete?: ServicePackageWhereUniqueInput | ServicePackageWhereUniqueInput[]
    connect?: ServicePackageWhereUniqueInput | ServicePackageWhereUniqueInput[]
    update?: ServicePackageUpdateWithWhereUniqueWithoutServiceInput | ServicePackageUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServicePackageUpdateManyWithWhereWithoutServiceInput | ServicePackageUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServicePackageScalarWhereInput | ServicePackageScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<OrderCreateWithoutServiceInput, OrderUncheckedCreateWithoutServiceInput> | OrderCreateWithoutServiceInput[] | OrderUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutServiceInput | OrderCreateOrConnectWithoutServiceInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutServiceInput | OrderUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: OrderCreateManyServiceInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutServiceInput | OrderUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutServiceInput | OrderUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ReviewCreateWithoutServiceInput, ReviewUncheckedCreateWithoutServiceInput> | ReviewCreateWithoutServiceInput[] | ReviewUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutServiceInput | ReviewCreateOrConnectWithoutServiceInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutServiceInput | ReviewUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ReviewCreateManyServiceInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutServiceInput | ReviewUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutServiceInput | ReviewUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type BuyerProfileUncheckedUpdateManyWithoutSavedServicesNestedInput = {
    create?: XOR<BuyerProfileCreateWithoutSavedServicesInput, BuyerProfileUncheckedCreateWithoutSavedServicesInput> | BuyerProfileCreateWithoutSavedServicesInput[] | BuyerProfileUncheckedCreateWithoutSavedServicesInput[]
    connectOrCreate?: BuyerProfileCreateOrConnectWithoutSavedServicesInput | BuyerProfileCreateOrConnectWithoutSavedServicesInput[]
    upsert?: BuyerProfileUpsertWithWhereUniqueWithoutSavedServicesInput | BuyerProfileUpsertWithWhereUniqueWithoutSavedServicesInput[]
    set?: BuyerProfileWhereUniqueInput | BuyerProfileWhereUniqueInput[]
    disconnect?: BuyerProfileWhereUniqueInput | BuyerProfileWhereUniqueInput[]
    delete?: BuyerProfileWhereUniqueInput | BuyerProfileWhereUniqueInput[]
    connect?: BuyerProfileWhereUniqueInput | BuyerProfileWhereUniqueInput[]
    update?: BuyerProfileUpdateWithWhereUniqueWithoutSavedServicesInput | BuyerProfileUpdateWithWhereUniqueWithoutSavedServicesInput[]
    updateMany?: BuyerProfileUpdateManyWithWhereWithoutSavedServicesInput | BuyerProfileUpdateManyWithWhereWithoutSavedServicesInput[]
    deleteMany?: BuyerProfileScalarWhereInput | BuyerProfileScalarWhereInput[]
  }

  export type ServiceCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ServiceCreateWithoutOrdersInput, ServiceUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutOrdersInput
    connect?: ServiceWhereUniqueInput
  }

  export type BuyerProfileCreateNestedOneWithoutOrdersInput = {
    create?: XOR<BuyerProfileCreateWithoutOrdersInput, BuyerProfileUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: BuyerProfileCreateOrConnectWithoutOrdersInput
    connect?: BuyerProfileWhereUniqueInput
  }

  export type SellerProfileCreateNestedOneWithoutOrdersInput = {
    create?: XOR<SellerProfileCreateWithoutOrdersInput, SellerProfileUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: SellerProfileCreateOrConnectWithoutOrdersInput
    connect?: SellerProfileWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    connect?: PaymentWhereUniqueInput
  }

  export type ReviewCreateNestedOneWithoutOrderInput = {
    create?: XOR<ReviewCreateWithoutOrderInput, ReviewUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutOrderInput
    connect?: ReviewWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    connect?: PaymentWhereUniqueInput
  }

  export type ReviewUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<ReviewCreateWithoutOrderInput, ReviewUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutOrderInput
    connect?: ReviewWhereUniqueInput
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type ServiceUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ServiceCreateWithoutOrdersInput, ServiceUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutOrdersInput
    upsert?: ServiceUpsertWithoutOrdersInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutOrdersInput, ServiceUpdateWithoutOrdersInput>, ServiceUncheckedUpdateWithoutOrdersInput>
  }

  export type BuyerProfileUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<BuyerProfileCreateWithoutOrdersInput, BuyerProfileUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: BuyerProfileCreateOrConnectWithoutOrdersInput
    upsert?: BuyerProfileUpsertWithoutOrdersInput
    connect?: BuyerProfileWhereUniqueInput
    update?: XOR<XOR<BuyerProfileUpdateToOneWithWhereWithoutOrdersInput, BuyerProfileUpdateWithoutOrdersInput>, BuyerProfileUncheckedUpdateWithoutOrdersInput>
  }

  export type SellerProfileUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<SellerProfileCreateWithoutOrdersInput, SellerProfileUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: SellerProfileCreateOrConnectWithoutOrdersInput
    upsert?: SellerProfileUpsertWithoutOrdersInput
    connect?: SellerProfileWhereUniqueInput
    update?: XOR<XOR<SellerProfileUpdateToOneWithWhereWithoutOrdersInput, SellerProfileUpdateWithoutOrdersInput>, SellerProfileUncheckedUpdateWithoutOrdersInput>
  }

  export type PaymentUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    upsert?: PaymentUpsertWithoutOrderInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutOrderInput, PaymentUpdateWithoutOrderInput>, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type ReviewUpdateOneWithoutOrderNestedInput = {
    create?: XOR<ReviewCreateWithoutOrderInput, ReviewUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutOrderInput
    upsert?: ReviewUpsertWithoutOrderInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutOrderInput, ReviewUpdateWithoutOrderInput>, ReviewUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    upsert?: PaymentUpsertWithoutOrderInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutOrderInput, PaymentUpdateWithoutOrderInput>, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type ReviewUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<ReviewCreateWithoutOrderInput, ReviewUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutOrderInput
    upsert?: ReviewUpsertWithoutOrderInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutOrderInput, ReviewUpdateWithoutOrderInput>, ReviewUncheckedUpdateWithoutOrderInput>
  }

  export type OrderCreateNestedOneWithoutPaymentInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput
    connect?: OrderWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type OrderUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput
    upsert?: OrderUpsertWithoutPaymentInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutPaymentInput, OrderUpdateWithoutPaymentInput>, OrderUncheckedUpdateWithoutPaymentInput>
  }

  export type BuyerProfileCreateNestedOneWithoutReviewsInput = {
    create?: XOR<BuyerProfileCreateWithoutReviewsInput, BuyerProfileUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: BuyerProfileCreateOrConnectWithoutReviewsInput
    connect?: BuyerProfileWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ServiceCreateWithoutReviewsInput, ServiceUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutReviewsInput
    connect?: ServiceWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutReviewInput = {
    create?: XOR<OrderCreateWithoutReviewInput, OrderUncheckedCreateWithoutReviewInput>
    connectOrCreate?: OrderCreateOrConnectWithoutReviewInput
    connect?: OrderWhereUniqueInput
  }

  export type BuyerProfileUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<BuyerProfileCreateWithoutReviewsInput, BuyerProfileUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: BuyerProfileCreateOrConnectWithoutReviewsInput
    upsert?: BuyerProfileUpsertWithoutReviewsInput
    connect?: BuyerProfileWhereUniqueInput
    update?: XOR<XOR<BuyerProfileUpdateToOneWithWhereWithoutReviewsInput, BuyerProfileUpdateWithoutReviewsInput>, BuyerProfileUncheckedUpdateWithoutReviewsInput>
  }

  export type ServiceUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ServiceCreateWithoutReviewsInput, ServiceUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutReviewsInput
    upsert?: ServiceUpsertWithoutReviewsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutReviewsInput, ServiceUpdateWithoutReviewsInput>, ServiceUncheckedUpdateWithoutReviewsInput>
  }

  export type OrderUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<OrderCreateWithoutReviewInput, OrderUncheckedCreateWithoutReviewInput>
    connectOrCreate?: OrderCreateOrConnectWithoutReviewInput
    upsert?: OrderUpsertWithoutReviewInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutReviewInput, OrderUpdateWithoutReviewInput>, OrderUncheckedUpdateWithoutReviewInput>
  }

  export type BuyerProfileCreateNestedOneWithoutConversationsInput = {
    create?: XOR<BuyerProfileCreateWithoutConversationsInput, BuyerProfileUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: BuyerProfileCreateOrConnectWithoutConversationsInput
    connect?: BuyerProfileWhereUniqueInput
  }

  export type SellerProfileCreateNestedOneWithoutConversationsInput = {
    create?: XOR<SellerProfileCreateWithoutConversationsInput, SellerProfileUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: SellerProfileCreateOrConnectWithoutConversationsInput
    connect?: SellerProfileWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type BuyerProfileUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<BuyerProfileCreateWithoutConversationsInput, BuyerProfileUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: BuyerProfileCreateOrConnectWithoutConversationsInput
    upsert?: BuyerProfileUpsertWithoutConversationsInput
    connect?: BuyerProfileWhereUniqueInput
    update?: XOR<XOR<BuyerProfileUpdateToOneWithWhereWithoutConversationsInput, BuyerProfileUpdateWithoutConversationsInput>, BuyerProfileUncheckedUpdateWithoutConversationsInput>
  }

  export type SellerProfileUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<SellerProfileCreateWithoutConversationsInput, SellerProfileUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: SellerProfileCreateOrConnectWithoutConversationsInput
    upsert?: SellerProfileUpsertWithoutConversationsInput
    connect?: SellerProfileWhereUniqueInput
    update?: XOR<XOR<SellerProfileUpdateToOneWithWhereWithoutConversationsInput, SellerProfileUpdateWithoutConversationsInput>, SellerProfileUncheckedUpdateWithoutConversationsInput>
  }

  export type MessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type BuyerProfileCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<BuyerProfileCreateWithoutSentMessagesInput, BuyerProfileUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: BuyerProfileCreateOrConnectWithoutSentMessagesInput
    connect?: BuyerProfileWhereUniqueInput
  }

  export type SellerProfileCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<SellerProfileCreateWithoutSentMessagesInput, SellerProfileUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: SellerProfileCreateOrConnectWithoutSentMessagesInput
    connect?: SellerProfileWhereUniqueInput
  }

  export type ConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
  }

  export type BuyerProfileUpdateOneWithoutSentMessagesNestedInput = {
    create?: XOR<BuyerProfileCreateWithoutSentMessagesInput, BuyerProfileUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: BuyerProfileCreateOrConnectWithoutSentMessagesInput
    upsert?: BuyerProfileUpsertWithoutSentMessagesInput
    disconnect?: BuyerProfileWhereInput | boolean
    delete?: BuyerProfileWhereInput | boolean
    connect?: BuyerProfileWhereUniqueInput
    update?: XOR<XOR<BuyerProfileUpdateToOneWithWhereWithoutSentMessagesInput, BuyerProfileUpdateWithoutSentMessagesInput>, BuyerProfileUncheckedUpdateWithoutSentMessagesInput>
  }

  export type SellerProfileUpdateOneWithoutSentMessagesNestedInput = {
    create?: XOR<SellerProfileCreateWithoutSentMessagesInput, SellerProfileUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: SellerProfileCreateOrConnectWithoutSentMessagesInput
    upsert?: SellerProfileUpsertWithoutSentMessagesInput
    disconnect?: SellerProfileWhereInput | boolean
    delete?: SellerProfileWhereInput | boolean
    connect?: SellerProfileWhereUniqueInput
    update?: XOR<XOR<SellerProfileUpdateToOneWithWhereWithoutSentMessagesInput, SellerProfileUpdateWithoutSentMessagesInput>, SellerProfileUncheckedUpdateWithoutSentMessagesInput>
  }

  export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    upsert?: ConversationUpsertWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMessagesInput, ConversationUpdateWithoutMessagesInput>, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumPackageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageType | EnumPackageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PackageType[] | ListEnumPackageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PackageType[] | ListEnumPackageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPackageTypeFilter<$PrismaModel> | $Enums.PackageType
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPackageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageType | EnumPackageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PackageType[] | ListEnumPackageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PackageType[] | ListEnumPackageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPackageTypeWithAggregatesFilter<$PrismaModel> | $Enums.PackageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPackageTypeFilter<$PrismaModel>
    _max?: NestedEnumPackageTypeFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type BuyerProfileCreateWithoutUserInput = {
    id?: string
    bio?: string | null
    phone?: string | null
    address?: string | null
    profileImage?: string | null
    savedServices?: ServiceCreateNestedManyWithoutSavedByInput
    orders?: OrderCreateNestedManyWithoutBuyerInput
    reviews?: ReviewCreateNestedManyWithoutBuyerInput
    conversations?: ConversationCreateNestedManyWithoutBuyerInput
    sentMessages?: MessageCreateNestedManyWithoutSenderBuyerInput
  }

  export type BuyerProfileUncheckedCreateWithoutUserInput = {
    id?: string
    bio?: string | null
    phone?: string | null
    address?: string | null
    profileImage?: string | null
    savedServices?: ServiceUncheckedCreateNestedManyWithoutSavedByInput
    orders?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutBuyerInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutBuyerInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderBuyerInput
  }

  export type BuyerProfileCreateOrConnectWithoutUserInput = {
    where: BuyerProfileWhereUniqueInput
    create: XOR<BuyerProfileCreateWithoutUserInput, BuyerProfileUncheckedCreateWithoutUserInput>
  }

  export type SellerProfileCreateWithoutUserInput = {
    id?: string
    bio?: string | null
    skills?: SellerProfileCreateskillsInput | string[]
    portfolio?: SellerProfileCreateportfolioInput | string[]
    earnings?: number
    profileImage?: string | null
    services?: ServiceCreateNestedManyWithoutSellerInput
    orders?: OrderCreateNestedManyWithoutSellerInput
    conversations?: ConversationCreateNestedManyWithoutSellerInput
    sentMessages?: MessageCreateNestedManyWithoutSenderSellerInput
  }

  export type SellerProfileUncheckedCreateWithoutUserInput = {
    id?: string
    bio?: string | null
    skills?: SellerProfileCreateskillsInput | string[]
    portfolio?: SellerProfileCreateportfolioInput | string[]
    earnings?: number
    profileImage?: string | null
    services?: ServiceUncheckedCreateNestedManyWithoutSellerInput
    orders?: OrderUncheckedCreateNestedManyWithoutSellerInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutSellerInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderSellerInput
  }

  export type SellerProfileCreateOrConnectWithoutUserInput = {
    where: SellerProfileWhereUniqueInput
    create: XOR<SellerProfileCreateWithoutUserInput, SellerProfileUncheckedCreateWithoutUserInput>
  }

  export type BuyerProfileUpsertWithoutUserInput = {
    update: XOR<BuyerProfileUpdateWithoutUserInput, BuyerProfileUncheckedUpdateWithoutUserInput>
    create: XOR<BuyerProfileCreateWithoutUserInput, BuyerProfileUncheckedCreateWithoutUserInput>
    where?: BuyerProfileWhereInput
  }

  export type BuyerProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: BuyerProfileWhereInput
    data: XOR<BuyerProfileUpdateWithoutUserInput, BuyerProfileUncheckedUpdateWithoutUserInput>
  }

  export type BuyerProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    savedServices?: ServiceUpdateManyWithoutSavedByNestedInput
    orders?: OrderUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewUpdateManyWithoutBuyerNestedInput
    conversations?: ConversationUpdateManyWithoutBuyerNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderBuyerNestedInput
  }

  export type BuyerProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    savedServices?: ServiceUncheckedUpdateManyWithoutSavedByNestedInput
    orders?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutBuyerNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutBuyerNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderBuyerNestedInput
  }

  export type SellerProfileUpsertWithoutUserInput = {
    update: XOR<SellerProfileUpdateWithoutUserInput, SellerProfileUncheckedUpdateWithoutUserInput>
    create: XOR<SellerProfileCreateWithoutUserInput, SellerProfileUncheckedCreateWithoutUserInput>
    where?: SellerProfileWhereInput
  }

  export type SellerProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: SellerProfileWhereInput
    data: XOR<SellerProfileUpdateWithoutUserInput, SellerProfileUncheckedUpdateWithoutUserInput>
  }

  export type SellerProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SellerProfileUpdateskillsInput | string[]
    portfolio?: SellerProfileUpdateportfolioInput | string[]
    earnings?: FloatFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    services?: ServiceUpdateManyWithoutSellerNestedInput
    orders?: OrderUpdateManyWithoutSellerNestedInput
    conversations?: ConversationUpdateManyWithoutSellerNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderSellerNestedInput
  }

  export type SellerProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SellerProfileUpdateskillsInput | string[]
    portfolio?: SellerProfileUpdateportfolioInput | string[]
    earnings?: FloatFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    services?: ServiceUncheckedUpdateManyWithoutSellerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutSellerNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutSellerNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderSellerNestedInput
  }

  export type UserCreateWithoutBuyerProfileInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: $Enums.Role
    profileImage?: string | null
    createdAt?: Date | string
    sellerProfile?: SellerProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBuyerProfileInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: $Enums.Role
    profileImage?: string | null
    createdAt?: Date | string
    sellerProfile?: SellerProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBuyerProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBuyerProfileInput, UserUncheckedCreateWithoutBuyerProfileInput>
  }

  export type ServiceCreateWithoutSavedByInput = {
    id?: string
    title: string
    description: string
    images?: ServiceCreateimagesInput | string[]
    createdAt?: Date | string
    seller: SellerProfileCreateNestedOneWithoutServicesInput
    category: CategoryCreateNestedOneWithoutServicesInput
    packages?: ServicePackageCreateNestedManyWithoutServiceInput
    orders?: OrderCreateNestedManyWithoutServiceInput
    reviews?: ReviewCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutSavedByInput = {
    id?: string
    title: string
    description: string
    images?: ServiceCreateimagesInput | string[]
    createdAt?: Date | string
    sellerId: string
    categoryId: string
    packages?: ServicePackageUncheckedCreateNestedManyWithoutServiceInput
    orders?: OrderUncheckedCreateNestedManyWithoutServiceInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutSavedByInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutSavedByInput, ServiceUncheckedCreateWithoutSavedByInput>
  }

  export type OrderCreateWithoutBuyerInput = {
    id?: string
    status?: $Enums.OrderStatus
    requirements?: string | null
    createdAt?: Date | string
    service: ServiceCreateNestedOneWithoutOrdersInput
    seller: SellerProfileCreateNestedOneWithoutOrdersInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
    review?: ReviewCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutBuyerInput = {
    id?: string
    status?: $Enums.OrderStatus
    requirements?: string | null
    createdAt?: Date | string
    serviceId: string
    sellerId: string
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
    review?: ReviewUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutBuyerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput>
  }

  export type OrderCreateManyBuyerInputEnvelope = {
    data: OrderCreateManyBuyerInput | OrderCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutBuyerInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    service: ServiceCreateNestedOneWithoutReviewsInput
    order: OrderCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutBuyerInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    serviceId: string
    orderId: string
  }

  export type ReviewCreateOrConnectWithoutBuyerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutBuyerInput, ReviewUncheckedCreateWithoutBuyerInput>
  }

  export type ReviewCreateManyBuyerInputEnvelope = {
    data: ReviewCreateManyBuyerInput | ReviewCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type ConversationCreateWithoutBuyerInput = {
    id?: string
    createdAt?: Date | string
    seller: SellerProfileCreateNestedOneWithoutConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutBuyerInput = {
    id?: string
    createdAt?: Date | string
    sellerId: string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutBuyerInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutBuyerInput, ConversationUncheckedCreateWithoutBuyerInput>
  }

  export type ConversationCreateManyBuyerInputEnvelope = {
    data: ConversationCreateManyBuyerInput | ConversationCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderBuyerInput = {
    id?: string
    content: string
    createdAt?: Date | string
    senderSeller?: SellerProfileCreateNestedOneWithoutSentMessagesInput
    conversation: ConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderBuyerInput = {
    id?: string
    content: string
    createdAt?: Date | string
    senderSellerId?: string | null
    conversationId: string
  }

  export type MessageCreateOrConnectWithoutSenderBuyerInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderBuyerInput, MessageUncheckedCreateWithoutSenderBuyerInput>
  }

  export type MessageCreateManySenderBuyerInputEnvelope = {
    data: MessageCreateManySenderBuyerInput | MessageCreateManySenderBuyerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBuyerProfileInput = {
    update: XOR<UserUpdateWithoutBuyerProfileInput, UserUncheckedUpdateWithoutBuyerProfileInput>
    create: XOR<UserCreateWithoutBuyerProfileInput, UserUncheckedCreateWithoutBuyerProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBuyerProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBuyerProfileInput, UserUncheckedUpdateWithoutBuyerProfileInput>
  }

  export type UserUpdateWithoutBuyerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerProfile?: SellerProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBuyerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerProfile?: SellerProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ServiceUpsertWithWhereUniqueWithoutSavedByInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutSavedByInput, ServiceUncheckedUpdateWithoutSavedByInput>
    create: XOR<ServiceCreateWithoutSavedByInput, ServiceUncheckedCreateWithoutSavedByInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutSavedByInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutSavedByInput, ServiceUncheckedUpdateWithoutSavedByInput>
  }

  export type ServiceUpdateManyWithWhereWithoutSavedByInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutSavedByInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: StringFilter<"Service"> | string
    title?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    images?: StringNullableListFilter<"Service">
    createdAt?: DateTimeFilter<"Service"> | Date | string
    sellerId?: StringFilter<"Service"> | string
    categoryId?: StringFilter<"Service"> | string
  }

  export type OrderUpsertWithWhereUniqueWithoutBuyerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutBuyerInput, OrderUncheckedUpdateWithoutBuyerInput>
    create: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutBuyerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutBuyerInput, OrderUncheckedUpdateWithoutBuyerInput>
  }

  export type OrderUpdateManyWithWhereWithoutBuyerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutBuyerInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    requirements?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    serviceId?: StringFilter<"Order"> | string
    buyerId?: StringFilter<"Order"> | string
    sellerId?: StringFilter<"Order"> | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutBuyerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutBuyerInput, ReviewUncheckedUpdateWithoutBuyerInput>
    create: XOR<ReviewCreateWithoutBuyerInput, ReviewUncheckedCreateWithoutBuyerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutBuyerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutBuyerInput, ReviewUncheckedUpdateWithoutBuyerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutBuyerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutBuyerInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    buyerId?: StringFilter<"Review"> | string
    serviceId?: StringFilter<"Review"> | string
    orderId?: StringFilter<"Review"> | string
  }

  export type ConversationUpsertWithWhereUniqueWithoutBuyerInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutBuyerInput, ConversationUncheckedUpdateWithoutBuyerInput>
    create: XOR<ConversationCreateWithoutBuyerInput, ConversationUncheckedCreateWithoutBuyerInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutBuyerInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutBuyerInput, ConversationUncheckedUpdateWithoutBuyerInput>
  }

  export type ConversationUpdateManyWithWhereWithoutBuyerInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutBuyerInput>
  }

  export type ConversationScalarWhereInput = {
    AND?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    OR?: ConversationScalarWhereInput[]
    NOT?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    id?: StringFilter<"Conversation"> | string
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    buyerId?: StringFilter<"Conversation"> | string
    sellerId?: StringFilter<"Conversation"> | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderBuyerInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderBuyerInput, MessageUncheckedUpdateWithoutSenderBuyerInput>
    create: XOR<MessageCreateWithoutSenderBuyerInput, MessageUncheckedCreateWithoutSenderBuyerInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderBuyerInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderBuyerInput, MessageUncheckedUpdateWithoutSenderBuyerInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderBuyerInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderBuyerInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    senderBuyerId?: StringNullableFilter<"Message"> | string | null
    senderSellerId?: StringNullableFilter<"Message"> | string | null
    conversationId?: StringFilter<"Message"> | string
  }

  export type UserCreateWithoutSellerProfileInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: $Enums.Role
    profileImage?: string | null
    createdAt?: Date | string
    buyerProfile?: BuyerProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSellerProfileInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: $Enums.Role
    profileImage?: string | null
    createdAt?: Date | string
    buyerProfile?: BuyerProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSellerProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSellerProfileInput, UserUncheckedCreateWithoutSellerProfileInput>
  }

  export type ServiceCreateWithoutSellerInput = {
    id?: string
    title: string
    description: string
    images?: ServiceCreateimagesInput | string[]
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutServicesInput
    packages?: ServicePackageCreateNestedManyWithoutServiceInput
    orders?: OrderCreateNestedManyWithoutServiceInput
    reviews?: ReviewCreateNestedManyWithoutServiceInput
    savedBy?: BuyerProfileCreateNestedManyWithoutSavedServicesInput
  }

  export type ServiceUncheckedCreateWithoutSellerInput = {
    id?: string
    title: string
    description: string
    images?: ServiceCreateimagesInput | string[]
    createdAt?: Date | string
    categoryId: string
    packages?: ServicePackageUncheckedCreateNestedManyWithoutServiceInput
    orders?: OrderUncheckedCreateNestedManyWithoutServiceInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutServiceInput
    savedBy?: BuyerProfileUncheckedCreateNestedManyWithoutSavedServicesInput
  }

  export type ServiceCreateOrConnectWithoutSellerInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutSellerInput, ServiceUncheckedCreateWithoutSellerInput>
  }

  export type ServiceCreateManySellerInputEnvelope = {
    data: ServiceCreateManySellerInput | ServiceCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutSellerInput = {
    id?: string
    status?: $Enums.OrderStatus
    requirements?: string | null
    createdAt?: Date | string
    service: ServiceCreateNestedOneWithoutOrdersInput
    buyer: BuyerProfileCreateNestedOneWithoutOrdersInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
    review?: ReviewCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutSellerInput = {
    id?: string
    status?: $Enums.OrderStatus
    requirements?: string | null
    createdAt?: Date | string
    serviceId: string
    buyerId: string
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
    review?: ReviewUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutSellerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput>
  }

  export type OrderCreateManySellerInputEnvelope = {
    data: OrderCreateManySellerInput | OrderCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type ConversationCreateWithoutSellerInput = {
    id?: string
    createdAt?: Date | string
    buyer: BuyerProfileCreateNestedOneWithoutConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutSellerInput = {
    id?: string
    createdAt?: Date | string
    buyerId: string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutSellerInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutSellerInput, ConversationUncheckedCreateWithoutSellerInput>
  }

  export type ConversationCreateManySellerInputEnvelope = {
    data: ConversationCreateManySellerInput | ConversationCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderSellerInput = {
    id?: string
    content: string
    createdAt?: Date | string
    senderBuyer?: BuyerProfileCreateNestedOneWithoutSentMessagesInput
    conversation: ConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderSellerInput = {
    id?: string
    content: string
    createdAt?: Date | string
    senderBuyerId?: string | null
    conversationId: string
  }

  export type MessageCreateOrConnectWithoutSenderSellerInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderSellerInput, MessageUncheckedCreateWithoutSenderSellerInput>
  }

  export type MessageCreateManySenderSellerInputEnvelope = {
    data: MessageCreateManySenderSellerInput | MessageCreateManySenderSellerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSellerProfileInput = {
    update: XOR<UserUpdateWithoutSellerProfileInput, UserUncheckedUpdateWithoutSellerProfileInput>
    create: XOR<UserCreateWithoutSellerProfileInput, UserUncheckedCreateWithoutSellerProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSellerProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSellerProfileInput, UserUncheckedUpdateWithoutSellerProfileInput>
  }

  export type UserUpdateWithoutSellerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerProfile?: BuyerProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSellerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerProfile?: BuyerProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ServiceUpsertWithWhereUniqueWithoutSellerInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutSellerInput, ServiceUncheckedUpdateWithoutSellerInput>
    create: XOR<ServiceCreateWithoutSellerInput, ServiceUncheckedCreateWithoutSellerInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutSellerInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutSellerInput, ServiceUncheckedUpdateWithoutSellerInput>
  }

  export type ServiceUpdateManyWithWhereWithoutSellerInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutSellerInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutSellerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutSellerInput, OrderUncheckedUpdateWithoutSellerInput>
    create: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutSellerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutSellerInput, OrderUncheckedUpdateWithoutSellerInput>
  }

  export type OrderUpdateManyWithWhereWithoutSellerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutSellerInput>
  }

  export type ConversationUpsertWithWhereUniqueWithoutSellerInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutSellerInput, ConversationUncheckedUpdateWithoutSellerInput>
    create: XOR<ConversationCreateWithoutSellerInput, ConversationUncheckedCreateWithoutSellerInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutSellerInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutSellerInput, ConversationUncheckedUpdateWithoutSellerInput>
  }

  export type ConversationUpdateManyWithWhereWithoutSellerInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutSellerInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderSellerInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderSellerInput, MessageUncheckedUpdateWithoutSenderSellerInput>
    create: XOR<MessageCreateWithoutSenderSellerInput, MessageUncheckedCreateWithoutSenderSellerInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderSellerInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderSellerInput, MessageUncheckedUpdateWithoutSenderSellerInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderSellerInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderSellerInput>
  }

  export type ServiceCreateWithoutCategoryInput = {
    id?: string
    title: string
    description: string
    images?: ServiceCreateimagesInput | string[]
    createdAt?: Date | string
    seller: SellerProfileCreateNestedOneWithoutServicesInput
    packages?: ServicePackageCreateNestedManyWithoutServiceInput
    orders?: OrderCreateNestedManyWithoutServiceInput
    reviews?: ReviewCreateNestedManyWithoutServiceInput
    savedBy?: BuyerProfileCreateNestedManyWithoutSavedServicesInput
  }

  export type ServiceUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    description: string
    images?: ServiceCreateimagesInput | string[]
    createdAt?: Date | string
    sellerId: string
    packages?: ServicePackageUncheckedCreateNestedManyWithoutServiceInput
    orders?: OrderUncheckedCreateNestedManyWithoutServiceInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutServiceInput
    savedBy?: BuyerProfileUncheckedCreateNestedManyWithoutSavedServicesInput
  }

  export type ServiceCreateOrConnectWithoutCategoryInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput>
  }

  export type ServiceCreateManyCategoryInputEnvelope = {
    data: ServiceCreateManyCategoryInput | ServiceCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ServiceUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutCategoryInput, ServiceUncheckedUpdateWithoutCategoryInput>
    create: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutCategoryInput, ServiceUncheckedUpdateWithoutCategoryInput>
  }

  export type ServiceUpdateManyWithWhereWithoutCategoryInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ServiceCreateWithoutPackagesInput = {
    id?: string
    title: string
    description: string
    images?: ServiceCreateimagesInput | string[]
    createdAt?: Date | string
    seller: SellerProfileCreateNestedOneWithoutServicesInput
    category: CategoryCreateNestedOneWithoutServicesInput
    orders?: OrderCreateNestedManyWithoutServiceInput
    reviews?: ReviewCreateNestedManyWithoutServiceInput
    savedBy?: BuyerProfileCreateNestedManyWithoutSavedServicesInput
  }

  export type ServiceUncheckedCreateWithoutPackagesInput = {
    id?: string
    title: string
    description: string
    images?: ServiceCreateimagesInput | string[]
    createdAt?: Date | string
    sellerId: string
    categoryId: string
    orders?: OrderUncheckedCreateNestedManyWithoutServiceInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutServiceInput
    savedBy?: BuyerProfileUncheckedCreateNestedManyWithoutSavedServicesInput
  }

  export type ServiceCreateOrConnectWithoutPackagesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutPackagesInput, ServiceUncheckedCreateWithoutPackagesInput>
  }

  export type ServiceUpsertWithoutPackagesInput = {
    update: XOR<ServiceUpdateWithoutPackagesInput, ServiceUncheckedUpdateWithoutPackagesInput>
    create: XOR<ServiceCreateWithoutPackagesInput, ServiceUncheckedCreateWithoutPackagesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutPackagesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutPackagesInput, ServiceUncheckedUpdateWithoutPackagesInput>
  }

  export type ServiceUpdateWithoutPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ServiceUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: SellerProfileUpdateOneRequiredWithoutServicesNestedInput
    category?: CategoryUpdateOneRequiredWithoutServicesNestedInput
    orders?: OrderUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUpdateManyWithoutServiceNestedInput
    savedBy?: BuyerProfileUpdateManyWithoutSavedServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ServiceUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutServiceNestedInput
    savedBy?: BuyerProfileUncheckedUpdateManyWithoutSavedServicesNestedInput
  }

  export type SellerProfileCreateWithoutServicesInput = {
    id?: string
    bio?: string | null
    skills?: SellerProfileCreateskillsInput | string[]
    portfolio?: SellerProfileCreateportfolioInput | string[]
    earnings?: number
    profileImage?: string | null
    user: UserCreateNestedOneWithoutSellerProfileInput
    orders?: OrderCreateNestedManyWithoutSellerInput
    conversations?: ConversationCreateNestedManyWithoutSellerInput
    sentMessages?: MessageCreateNestedManyWithoutSenderSellerInput
  }

  export type SellerProfileUncheckedCreateWithoutServicesInput = {
    id?: string
    userId: string
    bio?: string | null
    skills?: SellerProfileCreateskillsInput | string[]
    portfolio?: SellerProfileCreateportfolioInput | string[]
    earnings?: number
    profileImage?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutSellerInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutSellerInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderSellerInput
  }

  export type SellerProfileCreateOrConnectWithoutServicesInput = {
    where: SellerProfileWhereUniqueInput
    create: XOR<SellerProfileCreateWithoutServicesInput, SellerProfileUncheckedCreateWithoutServicesInput>
  }

  export type CategoryCreateWithoutServicesInput = {
    id?: string
    name: string
    icon?: string | null
  }

  export type CategoryUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    icon?: string | null
  }

  export type CategoryCreateOrConnectWithoutServicesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutServicesInput, CategoryUncheckedCreateWithoutServicesInput>
  }

  export type ServicePackageCreateWithoutServiceInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    deliveryDays: number
    revisions?: number | null
    type: $Enums.PackageType
    createdAt?: Date | string
  }

  export type ServicePackageUncheckedCreateWithoutServiceInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    deliveryDays: number
    revisions?: number | null
    type: $Enums.PackageType
    createdAt?: Date | string
  }

  export type ServicePackageCreateOrConnectWithoutServiceInput = {
    where: ServicePackageWhereUniqueInput
    create: XOR<ServicePackageCreateWithoutServiceInput, ServicePackageUncheckedCreateWithoutServiceInput>
  }

  export type ServicePackageCreateManyServiceInputEnvelope = {
    data: ServicePackageCreateManyServiceInput | ServicePackageCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutServiceInput = {
    id?: string
    status?: $Enums.OrderStatus
    requirements?: string | null
    createdAt?: Date | string
    buyer: BuyerProfileCreateNestedOneWithoutOrdersInput
    seller: SellerProfileCreateNestedOneWithoutOrdersInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
    review?: ReviewCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutServiceInput = {
    id?: string
    status?: $Enums.OrderStatus
    requirements?: string | null
    createdAt?: Date | string
    buyerId: string
    sellerId: string
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
    review?: ReviewUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutServiceInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutServiceInput, OrderUncheckedCreateWithoutServiceInput>
  }

  export type OrderCreateManyServiceInputEnvelope = {
    data: OrderCreateManyServiceInput | OrderCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutServiceInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    buyer: BuyerProfileCreateNestedOneWithoutReviewsInput
    order: OrderCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutServiceInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    buyerId: string
    orderId: string
  }

  export type ReviewCreateOrConnectWithoutServiceInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutServiceInput, ReviewUncheckedCreateWithoutServiceInput>
  }

  export type ReviewCreateManyServiceInputEnvelope = {
    data: ReviewCreateManyServiceInput | ReviewCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type BuyerProfileCreateWithoutSavedServicesInput = {
    id?: string
    bio?: string | null
    phone?: string | null
    address?: string | null
    profileImage?: string | null
    user: UserCreateNestedOneWithoutBuyerProfileInput
    orders?: OrderCreateNestedManyWithoutBuyerInput
    reviews?: ReviewCreateNestedManyWithoutBuyerInput
    conversations?: ConversationCreateNestedManyWithoutBuyerInput
    sentMessages?: MessageCreateNestedManyWithoutSenderBuyerInput
  }

  export type BuyerProfileUncheckedCreateWithoutSavedServicesInput = {
    id?: string
    userId: string
    bio?: string | null
    phone?: string | null
    address?: string | null
    profileImage?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutBuyerInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutBuyerInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderBuyerInput
  }

  export type BuyerProfileCreateOrConnectWithoutSavedServicesInput = {
    where: BuyerProfileWhereUniqueInput
    create: XOR<BuyerProfileCreateWithoutSavedServicesInput, BuyerProfileUncheckedCreateWithoutSavedServicesInput>
  }

  export type SellerProfileUpsertWithoutServicesInput = {
    update: XOR<SellerProfileUpdateWithoutServicesInput, SellerProfileUncheckedUpdateWithoutServicesInput>
    create: XOR<SellerProfileCreateWithoutServicesInput, SellerProfileUncheckedCreateWithoutServicesInput>
    where?: SellerProfileWhereInput
  }

  export type SellerProfileUpdateToOneWithWhereWithoutServicesInput = {
    where?: SellerProfileWhereInput
    data: XOR<SellerProfileUpdateWithoutServicesInput, SellerProfileUncheckedUpdateWithoutServicesInput>
  }

  export type SellerProfileUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SellerProfileUpdateskillsInput | string[]
    portfolio?: SellerProfileUpdateportfolioInput | string[]
    earnings?: FloatFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSellerProfileNestedInput
    orders?: OrderUpdateManyWithoutSellerNestedInput
    conversations?: ConversationUpdateManyWithoutSellerNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderSellerNestedInput
  }

  export type SellerProfileUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SellerProfileUpdateskillsInput | string[]
    portfolio?: SellerProfileUpdateportfolioInput | string[]
    earnings?: FloatFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutSellerNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutSellerNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderSellerNestedInput
  }

  export type CategoryUpsertWithoutServicesInput = {
    update: XOR<CategoryUpdateWithoutServicesInput, CategoryUncheckedUpdateWithoutServicesInput>
    create: XOR<CategoryCreateWithoutServicesInput, CategoryUncheckedCreateWithoutServicesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutServicesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutServicesInput, CategoryUncheckedUpdateWithoutServicesInput>
  }

  export type CategoryUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServicePackageUpsertWithWhereUniqueWithoutServiceInput = {
    where: ServicePackageWhereUniqueInput
    update: XOR<ServicePackageUpdateWithoutServiceInput, ServicePackageUncheckedUpdateWithoutServiceInput>
    create: XOR<ServicePackageCreateWithoutServiceInput, ServicePackageUncheckedCreateWithoutServiceInput>
  }

  export type ServicePackageUpdateWithWhereUniqueWithoutServiceInput = {
    where: ServicePackageWhereUniqueInput
    data: XOR<ServicePackageUpdateWithoutServiceInput, ServicePackageUncheckedUpdateWithoutServiceInput>
  }

  export type ServicePackageUpdateManyWithWhereWithoutServiceInput = {
    where: ServicePackageScalarWhereInput
    data: XOR<ServicePackageUpdateManyMutationInput, ServicePackageUncheckedUpdateManyWithoutServiceInput>
  }

  export type ServicePackageScalarWhereInput = {
    AND?: ServicePackageScalarWhereInput | ServicePackageScalarWhereInput[]
    OR?: ServicePackageScalarWhereInput[]
    NOT?: ServicePackageScalarWhereInput | ServicePackageScalarWhereInput[]
    id?: StringFilter<"ServicePackage"> | string
    title?: StringFilter<"ServicePackage"> | string
    description?: StringNullableFilter<"ServicePackage"> | string | null
    price?: FloatFilter<"ServicePackage"> | number
    deliveryDays?: IntFilter<"ServicePackage"> | number
    revisions?: IntNullableFilter<"ServicePackage"> | number | null
    type?: EnumPackageTypeFilter<"ServicePackage"> | $Enums.PackageType
    serviceId?: StringFilter<"ServicePackage"> | string
    createdAt?: DateTimeFilter<"ServicePackage"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutServiceInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutServiceInput, OrderUncheckedUpdateWithoutServiceInput>
    create: XOR<OrderCreateWithoutServiceInput, OrderUncheckedCreateWithoutServiceInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutServiceInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutServiceInput, OrderUncheckedUpdateWithoutServiceInput>
  }

  export type OrderUpdateManyWithWhereWithoutServiceInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutServiceInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutServiceInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutServiceInput, ReviewUncheckedUpdateWithoutServiceInput>
    create: XOR<ReviewCreateWithoutServiceInput, ReviewUncheckedCreateWithoutServiceInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutServiceInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutServiceInput, ReviewUncheckedUpdateWithoutServiceInput>
  }

  export type ReviewUpdateManyWithWhereWithoutServiceInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutServiceInput>
  }

  export type BuyerProfileUpsertWithWhereUniqueWithoutSavedServicesInput = {
    where: BuyerProfileWhereUniqueInput
    update: XOR<BuyerProfileUpdateWithoutSavedServicesInput, BuyerProfileUncheckedUpdateWithoutSavedServicesInput>
    create: XOR<BuyerProfileCreateWithoutSavedServicesInput, BuyerProfileUncheckedCreateWithoutSavedServicesInput>
  }

  export type BuyerProfileUpdateWithWhereUniqueWithoutSavedServicesInput = {
    where: BuyerProfileWhereUniqueInput
    data: XOR<BuyerProfileUpdateWithoutSavedServicesInput, BuyerProfileUncheckedUpdateWithoutSavedServicesInput>
  }

  export type BuyerProfileUpdateManyWithWhereWithoutSavedServicesInput = {
    where: BuyerProfileScalarWhereInput
    data: XOR<BuyerProfileUpdateManyMutationInput, BuyerProfileUncheckedUpdateManyWithoutSavedServicesInput>
  }

  export type BuyerProfileScalarWhereInput = {
    AND?: BuyerProfileScalarWhereInput | BuyerProfileScalarWhereInput[]
    OR?: BuyerProfileScalarWhereInput[]
    NOT?: BuyerProfileScalarWhereInput | BuyerProfileScalarWhereInput[]
    id?: StringFilter<"BuyerProfile"> | string
    userId?: StringFilter<"BuyerProfile"> | string
    bio?: StringNullableFilter<"BuyerProfile"> | string | null
    phone?: StringNullableFilter<"BuyerProfile"> | string | null
    address?: StringNullableFilter<"BuyerProfile"> | string | null
    profileImage?: StringNullableFilter<"BuyerProfile"> | string | null
  }

  export type ServiceCreateWithoutOrdersInput = {
    id?: string
    title: string
    description: string
    images?: ServiceCreateimagesInput | string[]
    createdAt?: Date | string
    seller: SellerProfileCreateNestedOneWithoutServicesInput
    category: CategoryCreateNestedOneWithoutServicesInput
    packages?: ServicePackageCreateNestedManyWithoutServiceInput
    reviews?: ReviewCreateNestedManyWithoutServiceInput
    savedBy?: BuyerProfileCreateNestedManyWithoutSavedServicesInput
  }

  export type ServiceUncheckedCreateWithoutOrdersInput = {
    id?: string
    title: string
    description: string
    images?: ServiceCreateimagesInput | string[]
    createdAt?: Date | string
    sellerId: string
    categoryId: string
    packages?: ServicePackageUncheckedCreateNestedManyWithoutServiceInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutServiceInput
    savedBy?: BuyerProfileUncheckedCreateNestedManyWithoutSavedServicesInput
  }

  export type ServiceCreateOrConnectWithoutOrdersInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutOrdersInput, ServiceUncheckedCreateWithoutOrdersInput>
  }

  export type BuyerProfileCreateWithoutOrdersInput = {
    id?: string
    bio?: string | null
    phone?: string | null
    address?: string | null
    profileImage?: string | null
    user: UserCreateNestedOneWithoutBuyerProfileInput
    savedServices?: ServiceCreateNestedManyWithoutSavedByInput
    reviews?: ReviewCreateNestedManyWithoutBuyerInput
    conversations?: ConversationCreateNestedManyWithoutBuyerInput
    sentMessages?: MessageCreateNestedManyWithoutSenderBuyerInput
  }

  export type BuyerProfileUncheckedCreateWithoutOrdersInput = {
    id?: string
    userId: string
    bio?: string | null
    phone?: string | null
    address?: string | null
    profileImage?: string | null
    savedServices?: ServiceUncheckedCreateNestedManyWithoutSavedByInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutBuyerInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutBuyerInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderBuyerInput
  }

  export type BuyerProfileCreateOrConnectWithoutOrdersInput = {
    where: BuyerProfileWhereUniqueInput
    create: XOR<BuyerProfileCreateWithoutOrdersInput, BuyerProfileUncheckedCreateWithoutOrdersInput>
  }

  export type SellerProfileCreateWithoutOrdersInput = {
    id?: string
    bio?: string | null
    skills?: SellerProfileCreateskillsInput | string[]
    portfolio?: SellerProfileCreateportfolioInput | string[]
    earnings?: number
    profileImage?: string | null
    user: UserCreateNestedOneWithoutSellerProfileInput
    services?: ServiceCreateNestedManyWithoutSellerInput
    conversations?: ConversationCreateNestedManyWithoutSellerInput
    sentMessages?: MessageCreateNestedManyWithoutSenderSellerInput
  }

  export type SellerProfileUncheckedCreateWithoutOrdersInput = {
    id?: string
    userId: string
    bio?: string | null
    skills?: SellerProfileCreateskillsInput | string[]
    portfolio?: SellerProfileCreateportfolioInput | string[]
    earnings?: number
    profileImage?: string | null
    services?: ServiceUncheckedCreateNestedManyWithoutSellerInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutSellerInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderSellerInput
  }

  export type SellerProfileCreateOrConnectWithoutOrdersInput = {
    where: SellerProfileWhereUniqueInput
    create: XOR<SellerProfileCreateWithoutOrdersInput, SellerProfileUncheckedCreateWithoutOrdersInput>
  }

  export type PaymentCreateWithoutOrderInput = {
    id?: string
    amount: number
    status?: $Enums.PaymentStatus
    provider: string
    createdAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutOrderInput = {
    id?: string
    amount: number
    status?: $Enums.PaymentStatus
    provider: string
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type ReviewCreateWithoutOrderInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    buyer: BuyerProfileCreateNestedOneWithoutReviewsInput
    service: ServiceCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutOrderInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    buyerId: string
    serviceId: string
  }

  export type ReviewCreateOrConnectWithoutOrderInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutOrderInput, ReviewUncheckedCreateWithoutOrderInput>
  }

  export type ServiceUpsertWithoutOrdersInput = {
    update: XOR<ServiceUpdateWithoutOrdersInput, ServiceUncheckedUpdateWithoutOrdersInput>
    create: XOR<ServiceCreateWithoutOrdersInput, ServiceUncheckedCreateWithoutOrdersInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutOrdersInput, ServiceUncheckedUpdateWithoutOrdersInput>
  }

  export type ServiceUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ServiceUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: SellerProfileUpdateOneRequiredWithoutServicesNestedInput
    category?: CategoryUpdateOneRequiredWithoutServicesNestedInput
    packages?: ServicePackageUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUpdateManyWithoutServiceNestedInput
    savedBy?: BuyerProfileUpdateManyWithoutSavedServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ServiceUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    packages?: ServicePackageUncheckedUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutServiceNestedInput
    savedBy?: BuyerProfileUncheckedUpdateManyWithoutSavedServicesNestedInput
  }

  export type BuyerProfileUpsertWithoutOrdersInput = {
    update: XOR<BuyerProfileUpdateWithoutOrdersInput, BuyerProfileUncheckedUpdateWithoutOrdersInput>
    create: XOR<BuyerProfileCreateWithoutOrdersInput, BuyerProfileUncheckedCreateWithoutOrdersInput>
    where?: BuyerProfileWhereInput
  }

  export type BuyerProfileUpdateToOneWithWhereWithoutOrdersInput = {
    where?: BuyerProfileWhereInput
    data: XOR<BuyerProfileUpdateWithoutOrdersInput, BuyerProfileUncheckedUpdateWithoutOrdersInput>
  }

  export type BuyerProfileUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutBuyerProfileNestedInput
    savedServices?: ServiceUpdateManyWithoutSavedByNestedInput
    reviews?: ReviewUpdateManyWithoutBuyerNestedInput
    conversations?: ConversationUpdateManyWithoutBuyerNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderBuyerNestedInput
  }

  export type BuyerProfileUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    savedServices?: ServiceUncheckedUpdateManyWithoutSavedByNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutBuyerNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutBuyerNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderBuyerNestedInput
  }

  export type SellerProfileUpsertWithoutOrdersInput = {
    update: XOR<SellerProfileUpdateWithoutOrdersInput, SellerProfileUncheckedUpdateWithoutOrdersInput>
    create: XOR<SellerProfileCreateWithoutOrdersInput, SellerProfileUncheckedCreateWithoutOrdersInput>
    where?: SellerProfileWhereInput
  }

  export type SellerProfileUpdateToOneWithWhereWithoutOrdersInput = {
    where?: SellerProfileWhereInput
    data: XOR<SellerProfileUpdateWithoutOrdersInput, SellerProfileUncheckedUpdateWithoutOrdersInput>
  }

  export type SellerProfileUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SellerProfileUpdateskillsInput | string[]
    portfolio?: SellerProfileUpdateportfolioInput | string[]
    earnings?: FloatFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSellerProfileNestedInput
    services?: ServiceUpdateManyWithoutSellerNestedInput
    conversations?: ConversationUpdateManyWithoutSellerNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderSellerNestedInput
  }

  export type SellerProfileUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SellerProfileUpdateskillsInput | string[]
    portfolio?: SellerProfileUpdateportfolioInput | string[]
    earnings?: FloatFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    services?: ServiceUncheckedUpdateManyWithoutSellerNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutSellerNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderSellerNestedInput
  }

  export type PaymentUpsertWithoutOrderInput = {
    update: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutOrderInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpsertWithoutOrderInput = {
    update: XOR<ReviewUpdateWithoutOrderInput, ReviewUncheckedUpdateWithoutOrderInput>
    create: XOR<ReviewCreateWithoutOrderInput, ReviewUncheckedCreateWithoutOrderInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutOrderInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutOrderInput, ReviewUncheckedUpdateWithoutOrderInput>
  }

  export type ReviewUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: BuyerProfileUpdateOneRequiredWithoutReviewsNestedInput
    service?: ServiceUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateWithoutPaymentInput = {
    id?: string
    status?: $Enums.OrderStatus
    requirements?: string | null
    createdAt?: Date | string
    service: ServiceCreateNestedOneWithoutOrdersInput
    buyer: BuyerProfileCreateNestedOneWithoutOrdersInput
    seller: SellerProfileCreateNestedOneWithoutOrdersInput
    review?: ReviewCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPaymentInput = {
    id?: string
    status?: $Enums.OrderStatus
    requirements?: string | null
    createdAt?: Date | string
    serviceId: string
    buyerId: string
    sellerId: string
    review?: ReviewUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPaymentInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
  }

  export type OrderUpsertWithoutPaymentInput = {
    update: XOR<OrderUpdateWithoutPaymentInput, OrderUncheckedUpdateWithoutPaymentInput>
    create: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutPaymentInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutPaymentInput, OrderUncheckedUpdateWithoutPaymentInput>
  }

  export type OrderUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutOrdersNestedInput
    buyer?: BuyerProfileUpdateOneRequiredWithoutOrdersNestedInput
    seller?: SellerProfileUpdateOneRequiredWithoutOrdersNestedInput
    review?: ReviewUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    review?: ReviewUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type BuyerProfileCreateWithoutReviewsInput = {
    id?: string
    bio?: string | null
    phone?: string | null
    address?: string | null
    profileImage?: string | null
    user: UserCreateNestedOneWithoutBuyerProfileInput
    savedServices?: ServiceCreateNestedManyWithoutSavedByInput
    orders?: OrderCreateNestedManyWithoutBuyerInput
    conversations?: ConversationCreateNestedManyWithoutBuyerInput
    sentMessages?: MessageCreateNestedManyWithoutSenderBuyerInput
  }

  export type BuyerProfileUncheckedCreateWithoutReviewsInput = {
    id?: string
    userId: string
    bio?: string | null
    phone?: string | null
    address?: string | null
    profileImage?: string | null
    savedServices?: ServiceUncheckedCreateNestedManyWithoutSavedByInput
    orders?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutBuyerInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderBuyerInput
  }

  export type BuyerProfileCreateOrConnectWithoutReviewsInput = {
    where: BuyerProfileWhereUniqueInput
    create: XOR<BuyerProfileCreateWithoutReviewsInput, BuyerProfileUncheckedCreateWithoutReviewsInput>
  }

  export type ServiceCreateWithoutReviewsInput = {
    id?: string
    title: string
    description: string
    images?: ServiceCreateimagesInput | string[]
    createdAt?: Date | string
    seller: SellerProfileCreateNestedOneWithoutServicesInput
    category: CategoryCreateNestedOneWithoutServicesInput
    packages?: ServicePackageCreateNestedManyWithoutServiceInput
    orders?: OrderCreateNestedManyWithoutServiceInput
    savedBy?: BuyerProfileCreateNestedManyWithoutSavedServicesInput
  }

  export type ServiceUncheckedCreateWithoutReviewsInput = {
    id?: string
    title: string
    description: string
    images?: ServiceCreateimagesInput | string[]
    createdAt?: Date | string
    sellerId: string
    categoryId: string
    packages?: ServicePackageUncheckedCreateNestedManyWithoutServiceInput
    orders?: OrderUncheckedCreateNestedManyWithoutServiceInput
    savedBy?: BuyerProfileUncheckedCreateNestedManyWithoutSavedServicesInput
  }

  export type ServiceCreateOrConnectWithoutReviewsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutReviewsInput, ServiceUncheckedCreateWithoutReviewsInput>
  }

  export type OrderCreateWithoutReviewInput = {
    id?: string
    status?: $Enums.OrderStatus
    requirements?: string | null
    createdAt?: Date | string
    service: ServiceCreateNestedOneWithoutOrdersInput
    buyer: BuyerProfileCreateNestedOneWithoutOrdersInput
    seller: SellerProfileCreateNestedOneWithoutOrdersInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutReviewInput = {
    id?: string
    status?: $Enums.OrderStatus
    requirements?: string | null
    createdAt?: Date | string
    serviceId: string
    buyerId: string
    sellerId: string
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutReviewInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutReviewInput, OrderUncheckedCreateWithoutReviewInput>
  }

  export type BuyerProfileUpsertWithoutReviewsInput = {
    update: XOR<BuyerProfileUpdateWithoutReviewsInput, BuyerProfileUncheckedUpdateWithoutReviewsInput>
    create: XOR<BuyerProfileCreateWithoutReviewsInput, BuyerProfileUncheckedCreateWithoutReviewsInput>
    where?: BuyerProfileWhereInput
  }

  export type BuyerProfileUpdateToOneWithWhereWithoutReviewsInput = {
    where?: BuyerProfileWhereInput
    data: XOR<BuyerProfileUpdateWithoutReviewsInput, BuyerProfileUncheckedUpdateWithoutReviewsInput>
  }

  export type BuyerProfileUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutBuyerProfileNestedInput
    savedServices?: ServiceUpdateManyWithoutSavedByNestedInput
    orders?: OrderUpdateManyWithoutBuyerNestedInput
    conversations?: ConversationUpdateManyWithoutBuyerNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderBuyerNestedInput
  }

  export type BuyerProfileUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    savedServices?: ServiceUncheckedUpdateManyWithoutSavedByNestedInput
    orders?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutBuyerNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderBuyerNestedInput
  }

  export type ServiceUpsertWithoutReviewsInput = {
    update: XOR<ServiceUpdateWithoutReviewsInput, ServiceUncheckedUpdateWithoutReviewsInput>
    create: XOR<ServiceCreateWithoutReviewsInput, ServiceUncheckedCreateWithoutReviewsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutReviewsInput, ServiceUncheckedUpdateWithoutReviewsInput>
  }

  export type ServiceUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ServiceUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: SellerProfileUpdateOneRequiredWithoutServicesNestedInput
    category?: CategoryUpdateOneRequiredWithoutServicesNestedInput
    packages?: ServicePackageUpdateManyWithoutServiceNestedInput
    orders?: OrderUpdateManyWithoutServiceNestedInput
    savedBy?: BuyerProfileUpdateManyWithoutSavedServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ServiceUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    packages?: ServicePackageUncheckedUpdateManyWithoutServiceNestedInput
    orders?: OrderUncheckedUpdateManyWithoutServiceNestedInput
    savedBy?: BuyerProfileUncheckedUpdateManyWithoutSavedServicesNestedInput
  }

  export type OrderUpsertWithoutReviewInput = {
    update: XOR<OrderUpdateWithoutReviewInput, OrderUncheckedUpdateWithoutReviewInput>
    create: XOR<OrderCreateWithoutReviewInput, OrderUncheckedCreateWithoutReviewInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutReviewInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutReviewInput, OrderUncheckedUpdateWithoutReviewInput>
  }

  export type OrderUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutOrdersNestedInput
    buyer?: BuyerProfileUpdateOneRequiredWithoutOrdersNestedInput
    seller?: SellerProfileUpdateOneRequiredWithoutOrdersNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type BuyerProfileCreateWithoutConversationsInput = {
    id?: string
    bio?: string | null
    phone?: string | null
    address?: string | null
    profileImage?: string | null
    user: UserCreateNestedOneWithoutBuyerProfileInput
    savedServices?: ServiceCreateNestedManyWithoutSavedByInput
    orders?: OrderCreateNestedManyWithoutBuyerInput
    reviews?: ReviewCreateNestedManyWithoutBuyerInput
    sentMessages?: MessageCreateNestedManyWithoutSenderBuyerInput
  }

  export type BuyerProfileUncheckedCreateWithoutConversationsInput = {
    id?: string
    userId: string
    bio?: string | null
    phone?: string | null
    address?: string | null
    profileImage?: string | null
    savedServices?: ServiceUncheckedCreateNestedManyWithoutSavedByInput
    orders?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutBuyerInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderBuyerInput
  }

  export type BuyerProfileCreateOrConnectWithoutConversationsInput = {
    where: BuyerProfileWhereUniqueInput
    create: XOR<BuyerProfileCreateWithoutConversationsInput, BuyerProfileUncheckedCreateWithoutConversationsInput>
  }

  export type SellerProfileCreateWithoutConversationsInput = {
    id?: string
    bio?: string | null
    skills?: SellerProfileCreateskillsInput | string[]
    portfolio?: SellerProfileCreateportfolioInput | string[]
    earnings?: number
    profileImage?: string | null
    user: UserCreateNestedOneWithoutSellerProfileInput
    services?: ServiceCreateNestedManyWithoutSellerInput
    orders?: OrderCreateNestedManyWithoutSellerInput
    sentMessages?: MessageCreateNestedManyWithoutSenderSellerInput
  }

  export type SellerProfileUncheckedCreateWithoutConversationsInput = {
    id?: string
    userId: string
    bio?: string | null
    skills?: SellerProfileCreateskillsInput | string[]
    portfolio?: SellerProfileCreateportfolioInput | string[]
    earnings?: number
    profileImage?: string | null
    services?: ServiceUncheckedCreateNestedManyWithoutSellerInput
    orders?: OrderUncheckedCreateNestedManyWithoutSellerInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderSellerInput
  }

  export type SellerProfileCreateOrConnectWithoutConversationsInput = {
    where: SellerProfileWhereUniqueInput
    create: XOR<SellerProfileCreateWithoutConversationsInput, SellerProfileUncheckedCreateWithoutConversationsInput>
  }

  export type MessageCreateWithoutConversationInput = {
    id?: string
    content: string
    createdAt?: Date | string
    senderBuyer?: BuyerProfileCreateNestedOneWithoutSentMessagesInput
    senderSeller?: SellerProfileCreateNestedOneWithoutSentMessagesInput
  }

  export type MessageUncheckedCreateWithoutConversationInput = {
    id?: string
    content: string
    createdAt?: Date | string
    senderBuyerId?: string | null
    senderSellerId?: string | null
  }

  export type MessageCreateOrConnectWithoutConversationInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageCreateManyConversationInputEnvelope = {
    data: MessageCreateManyConversationInput | MessageCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type BuyerProfileUpsertWithoutConversationsInput = {
    update: XOR<BuyerProfileUpdateWithoutConversationsInput, BuyerProfileUncheckedUpdateWithoutConversationsInput>
    create: XOR<BuyerProfileCreateWithoutConversationsInput, BuyerProfileUncheckedCreateWithoutConversationsInput>
    where?: BuyerProfileWhereInput
  }

  export type BuyerProfileUpdateToOneWithWhereWithoutConversationsInput = {
    where?: BuyerProfileWhereInput
    data: XOR<BuyerProfileUpdateWithoutConversationsInput, BuyerProfileUncheckedUpdateWithoutConversationsInput>
  }

  export type BuyerProfileUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutBuyerProfileNestedInput
    savedServices?: ServiceUpdateManyWithoutSavedByNestedInput
    orders?: OrderUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewUpdateManyWithoutBuyerNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderBuyerNestedInput
  }

  export type BuyerProfileUncheckedUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    savedServices?: ServiceUncheckedUpdateManyWithoutSavedByNestedInput
    orders?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutBuyerNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderBuyerNestedInput
  }

  export type SellerProfileUpsertWithoutConversationsInput = {
    update: XOR<SellerProfileUpdateWithoutConversationsInput, SellerProfileUncheckedUpdateWithoutConversationsInput>
    create: XOR<SellerProfileCreateWithoutConversationsInput, SellerProfileUncheckedCreateWithoutConversationsInput>
    where?: SellerProfileWhereInput
  }

  export type SellerProfileUpdateToOneWithWhereWithoutConversationsInput = {
    where?: SellerProfileWhereInput
    data: XOR<SellerProfileUpdateWithoutConversationsInput, SellerProfileUncheckedUpdateWithoutConversationsInput>
  }

  export type SellerProfileUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SellerProfileUpdateskillsInput | string[]
    portfolio?: SellerProfileUpdateportfolioInput | string[]
    earnings?: FloatFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSellerProfileNestedInput
    services?: ServiceUpdateManyWithoutSellerNestedInput
    orders?: OrderUpdateManyWithoutSellerNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderSellerNestedInput
  }

  export type SellerProfileUncheckedUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SellerProfileUpdateskillsInput | string[]
    portfolio?: SellerProfileUpdateportfolioInput | string[]
    earnings?: FloatFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    services?: ServiceUncheckedUpdateManyWithoutSellerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutSellerNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderSellerNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
  }

  export type MessageUpdateManyWithWhereWithoutConversationInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutConversationInput>
  }

  export type BuyerProfileCreateWithoutSentMessagesInput = {
    id?: string
    bio?: string | null
    phone?: string | null
    address?: string | null
    profileImage?: string | null
    user: UserCreateNestedOneWithoutBuyerProfileInput
    savedServices?: ServiceCreateNestedManyWithoutSavedByInput
    orders?: OrderCreateNestedManyWithoutBuyerInput
    reviews?: ReviewCreateNestedManyWithoutBuyerInput
    conversations?: ConversationCreateNestedManyWithoutBuyerInput
  }

  export type BuyerProfileUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    userId: string
    bio?: string | null
    phone?: string | null
    address?: string | null
    profileImage?: string | null
    savedServices?: ServiceUncheckedCreateNestedManyWithoutSavedByInput
    orders?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutBuyerInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type BuyerProfileCreateOrConnectWithoutSentMessagesInput = {
    where: BuyerProfileWhereUniqueInput
    create: XOR<BuyerProfileCreateWithoutSentMessagesInput, BuyerProfileUncheckedCreateWithoutSentMessagesInput>
  }

  export type SellerProfileCreateWithoutSentMessagesInput = {
    id?: string
    bio?: string | null
    skills?: SellerProfileCreateskillsInput | string[]
    portfolio?: SellerProfileCreateportfolioInput | string[]
    earnings?: number
    profileImage?: string | null
    user: UserCreateNestedOneWithoutSellerProfileInput
    services?: ServiceCreateNestedManyWithoutSellerInput
    orders?: OrderCreateNestedManyWithoutSellerInput
    conversations?: ConversationCreateNestedManyWithoutSellerInput
  }

  export type SellerProfileUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    userId: string
    bio?: string | null
    skills?: SellerProfileCreateskillsInput | string[]
    portfolio?: SellerProfileCreateportfolioInput | string[]
    earnings?: number
    profileImage?: string | null
    services?: ServiceUncheckedCreateNestedManyWithoutSellerInput
    orders?: OrderUncheckedCreateNestedManyWithoutSellerInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutSellerInput
  }

  export type SellerProfileCreateOrConnectWithoutSentMessagesInput = {
    where: SellerProfileWhereUniqueInput
    create: XOR<SellerProfileCreateWithoutSentMessagesInput, SellerProfileUncheckedCreateWithoutSentMessagesInput>
  }

  export type ConversationCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    buyer: BuyerProfileCreateNestedOneWithoutConversationsInput
    seller: SellerProfileCreateNestedOneWithoutConversationsInput
  }

  export type ConversationUncheckedCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    buyerId: string
    sellerId: string
  }

  export type ConversationCreateOrConnectWithoutMessagesInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
  }

  export type BuyerProfileUpsertWithoutSentMessagesInput = {
    update: XOR<BuyerProfileUpdateWithoutSentMessagesInput, BuyerProfileUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<BuyerProfileCreateWithoutSentMessagesInput, BuyerProfileUncheckedCreateWithoutSentMessagesInput>
    where?: BuyerProfileWhereInput
  }

  export type BuyerProfileUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: BuyerProfileWhereInput
    data: XOR<BuyerProfileUpdateWithoutSentMessagesInput, BuyerProfileUncheckedUpdateWithoutSentMessagesInput>
  }

  export type BuyerProfileUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutBuyerProfileNestedInput
    savedServices?: ServiceUpdateManyWithoutSavedByNestedInput
    orders?: OrderUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewUpdateManyWithoutBuyerNestedInput
    conversations?: ConversationUpdateManyWithoutBuyerNestedInput
  }

  export type BuyerProfileUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    savedServices?: ServiceUncheckedUpdateManyWithoutSavedByNestedInput
    orders?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutBuyerNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type SellerProfileUpsertWithoutSentMessagesInput = {
    update: XOR<SellerProfileUpdateWithoutSentMessagesInput, SellerProfileUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<SellerProfileCreateWithoutSentMessagesInput, SellerProfileUncheckedCreateWithoutSentMessagesInput>
    where?: SellerProfileWhereInput
  }

  export type SellerProfileUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: SellerProfileWhereInput
    data: XOR<SellerProfileUpdateWithoutSentMessagesInput, SellerProfileUncheckedUpdateWithoutSentMessagesInput>
  }

  export type SellerProfileUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SellerProfileUpdateskillsInput | string[]
    portfolio?: SellerProfileUpdateportfolioInput | string[]
    earnings?: FloatFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSellerProfileNestedInput
    services?: ServiceUpdateManyWithoutSellerNestedInput
    orders?: OrderUpdateManyWithoutSellerNestedInput
    conversations?: ConversationUpdateManyWithoutSellerNestedInput
  }

  export type SellerProfileUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SellerProfileUpdateskillsInput | string[]
    portfolio?: SellerProfileUpdateportfolioInput | string[]
    earnings?: FloatFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    services?: ServiceUncheckedUpdateManyWithoutSellerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutSellerNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type ConversationUpsertWithoutMessagesInput = {
    update: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: BuyerProfileUpdateOneRequiredWithoutConversationsNestedInput
    seller?: SellerProfileUpdateOneRequiredWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateManyBuyerInput = {
    id?: string
    status?: $Enums.OrderStatus
    requirements?: string | null
    createdAt?: Date | string
    serviceId: string
    sellerId: string
  }

  export type ReviewCreateManyBuyerInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    serviceId: string
    orderId: string
  }

  export type ConversationCreateManyBuyerInput = {
    id?: string
    createdAt?: Date | string
    sellerId: string
  }

  export type MessageCreateManySenderBuyerInput = {
    id?: string
    content: string
    createdAt?: Date | string
    senderSellerId?: string | null
    conversationId: string
  }

  export type ServiceUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ServiceUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: SellerProfileUpdateOneRequiredWithoutServicesNestedInput
    category?: CategoryUpdateOneRequiredWithoutServicesNestedInput
    packages?: ServicePackageUpdateManyWithoutServiceNestedInput
    orders?: OrderUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ServiceUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    packages?: ServicePackageUncheckedUpdateManyWithoutServiceNestedInput
    orders?: OrderUncheckedUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ServiceUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutOrdersNestedInput
    seller?: SellerProfileUpdateOneRequiredWithoutOrdersNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
    review?: ReviewUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
    review?: ReviewUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutReviewsNestedInput
    order?: OrderUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateManyWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: SellerProfileUpdateOneRequiredWithoutConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUpdateWithoutSenderBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderSeller?: SellerProfileUpdateOneWithoutSentMessagesNestedInput
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderSellerId?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderSellerId?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCreateManySellerInput = {
    id?: string
    title: string
    description: string
    images?: ServiceCreateimagesInput | string[]
    createdAt?: Date | string
    categoryId: string
  }

  export type OrderCreateManySellerInput = {
    id?: string
    status?: $Enums.OrderStatus
    requirements?: string | null
    createdAt?: Date | string
    serviceId: string
    buyerId: string
  }

  export type ConversationCreateManySellerInput = {
    id?: string
    createdAt?: Date | string
    buyerId: string
  }

  export type MessageCreateManySenderSellerInput = {
    id?: string
    content: string
    createdAt?: Date | string
    senderBuyerId?: string | null
    conversationId: string
  }

  export type ServiceUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ServiceUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutServicesNestedInput
    packages?: ServicePackageUpdateManyWithoutServiceNestedInput
    orders?: OrderUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUpdateManyWithoutServiceNestedInput
    savedBy?: BuyerProfileUpdateManyWithoutSavedServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ServiceUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    packages?: ServicePackageUncheckedUpdateManyWithoutServiceNestedInput
    orders?: OrderUncheckedUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutServiceNestedInput
    savedBy?: BuyerProfileUncheckedUpdateManyWithoutSavedServicesNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ServiceUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutOrdersNestedInput
    buyer?: BuyerProfileUpdateOneRequiredWithoutOrdersNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
    review?: ReviewUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
    review?: ReviewUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: BuyerProfileUpdateOneRequiredWithoutConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUpdateWithoutSenderSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderBuyer?: BuyerProfileUpdateOneWithoutSentMessagesNestedInput
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderBuyerId?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderBuyerId?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCreateManyCategoryInput = {
    id?: string
    title: string
    description: string
    images?: ServiceCreateimagesInput | string[]
    createdAt?: Date | string
    sellerId: string
  }

  export type ServiceUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ServiceUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: SellerProfileUpdateOneRequiredWithoutServicesNestedInput
    packages?: ServicePackageUpdateManyWithoutServiceNestedInput
    orders?: OrderUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUpdateManyWithoutServiceNestedInput
    savedBy?: BuyerProfileUpdateManyWithoutSavedServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ServiceUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerId?: StringFieldUpdateOperationsInput | string
    packages?: ServicePackageUncheckedUpdateManyWithoutServiceNestedInput
    orders?: OrderUncheckedUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutServiceNestedInput
    savedBy?: BuyerProfileUncheckedUpdateManyWithoutSavedServicesNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ServiceUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerId?: StringFieldUpdateOperationsInput | string
  }

  export type ServicePackageCreateManyServiceInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    deliveryDays: number
    revisions?: number | null
    type: $Enums.PackageType
    createdAt?: Date | string
  }

  export type OrderCreateManyServiceInput = {
    id?: string
    status?: $Enums.OrderStatus
    requirements?: string | null
    createdAt?: Date | string
    buyerId: string
    sellerId: string
  }

  export type ReviewCreateManyServiceInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    buyerId: string
    orderId: string
  }

  export type ServicePackageUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    deliveryDays?: IntFieldUpdateOperationsInput | number
    revisions?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicePackageUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    deliveryDays?: IntFieldUpdateOperationsInput | number
    revisions?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicePackageUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    deliveryDays?: IntFieldUpdateOperationsInput | number
    revisions?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: BuyerProfileUpdateOneRequiredWithoutOrdersNestedInput
    seller?: SellerProfileUpdateOneRequiredWithoutOrdersNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
    review?: ReviewUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
    review?: ReviewUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: BuyerProfileUpdateOneRequiredWithoutReviewsNestedInput
    order?: OrderUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type BuyerProfileUpdateWithoutSavedServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutBuyerProfileNestedInput
    orders?: OrderUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewUpdateManyWithoutBuyerNestedInput
    conversations?: ConversationUpdateManyWithoutBuyerNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderBuyerNestedInput
  }

  export type BuyerProfileUncheckedUpdateWithoutSavedServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutBuyerNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutBuyerNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderBuyerNestedInput
  }

  export type BuyerProfileUncheckedUpdateManyWithoutSavedServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateManyConversationInput = {
    id?: string
    content: string
    createdAt?: Date | string
    senderBuyerId?: string | null
    senderSellerId?: string | null
  }

  export type MessageUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderBuyer?: BuyerProfileUpdateOneWithoutSentMessagesNestedInput
    senderSeller?: SellerProfileUpdateOneWithoutSentMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderBuyerId?: NullableStringFieldUpdateOperationsInput | string | null
    senderSellerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderBuyerId?: NullableStringFieldUpdateOperationsInput | string | null
    senderSellerId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}