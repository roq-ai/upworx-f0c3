/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model contract
 *
 */
export type contract = $Result.DefaultSelection<Prisma.$contractPayload>;
/**
 * Model job_application
 *
 */
export type job_application = $Result.DefaultSelection<Prisma.$job_applicationPayload>;
/**
 * Model job_offer
 *
 */
export type job_offer = $Result.DefaultSelection<Prisma.$job_offerPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.contract`: Exposes CRUD operations for the **contract** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Contracts
   * const contracts = await prisma.contract.findMany()
   * ```
   */
  get contract(): Prisma.contractDelegate<ExtArgs>;

  /**
   * `prisma.job_application`: Exposes CRUD operations for the **job_application** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Job_applications
   * const job_applications = await prisma.job_application.findMany()
   * ```
   */
  get job_application(): Prisma.job_applicationDelegate<ExtArgs>;

  /**
   * `prisma.job_offer`: Exposes CRUD operations for the **job_offer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Job_offers
   * const job_offers = await prisma.job_offer.findMany()
   * ```
   */
  get job_offer(): Prisma.job_offerDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    company: 'company';
    contract: 'contract';
    job_application: 'job_application';
    job_offer: 'job_offer';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'company' | 'contract' | 'job_application' | 'job_offer' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      contract: {
        payload: Prisma.$contractPayload<ExtArgs>;
        fields: Prisma.contractFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.contractFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contractPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.contractFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contractPayload>;
          };
          findFirst: {
            args: Prisma.contractFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contractPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.contractFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contractPayload>;
          };
          findMany: {
            args: Prisma.contractFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contractPayload>[];
          };
          create: {
            args: Prisma.contractCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contractPayload>;
          };
          createMany: {
            args: Prisma.contractCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.contractDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contractPayload>;
          };
          update: {
            args: Prisma.contractUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contractPayload>;
          };
          deleteMany: {
            args: Prisma.contractDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.contractUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.contractUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contractPayload>;
          };
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateContract>;
          };
          groupBy: {
            args: Prisma.contractGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ContractGroupByOutputType>[];
          };
          count: {
            args: Prisma.contractCountArgs<ExtArgs>;
            result: $Utils.Optional<ContractCountAggregateOutputType> | number;
          };
        };
      };
      job_application: {
        payload: Prisma.$job_applicationPayload<ExtArgs>;
        fields: Prisma.job_applicationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.job_applicationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.job_applicationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicationPayload>;
          };
          findFirst: {
            args: Prisma.job_applicationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.job_applicationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicationPayload>;
          };
          findMany: {
            args: Prisma.job_applicationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicationPayload>[];
          };
          create: {
            args: Prisma.job_applicationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicationPayload>;
          };
          createMany: {
            args: Prisma.job_applicationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.job_applicationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicationPayload>;
          };
          update: {
            args: Prisma.job_applicationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicationPayload>;
          };
          deleteMany: {
            args: Prisma.job_applicationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.job_applicationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.job_applicationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicationPayload>;
          };
          aggregate: {
            args: Prisma.Job_applicationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJob_application>;
          };
          groupBy: {
            args: Prisma.job_applicationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Job_applicationGroupByOutputType>[];
          };
          count: {
            args: Prisma.job_applicationCountArgs<ExtArgs>;
            result: $Utils.Optional<Job_applicationCountAggregateOutputType> | number;
          };
        };
      };
      job_offer: {
        payload: Prisma.$job_offerPayload<ExtArgs>;
        fields: Prisma.job_offerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.job_offerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_offerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.job_offerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_offerPayload>;
          };
          findFirst: {
            args: Prisma.job_offerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_offerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.job_offerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_offerPayload>;
          };
          findMany: {
            args: Prisma.job_offerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_offerPayload>[];
          };
          create: {
            args: Prisma.job_offerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_offerPayload>;
          };
          createMany: {
            args: Prisma.job_offerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.job_offerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_offerPayload>;
          };
          update: {
            args: Prisma.job_offerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_offerPayload>;
          };
          deleteMany: {
            args: Prisma.job_offerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.job_offerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.job_offerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_offerPayload>;
          };
          aggregate: {
            args: Prisma.Job_offerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJob_offer>;
          };
          groupBy: {
            args: Prisma.job_offerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Job_offerGroupByOutputType>[];
          };
          count: {
            args: Prisma.job_offerCountArgs<ExtArgs>;
            result: $Utils.Optional<Job_offerCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    job_offer: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_offer?: boolean | CompanyCountOutputTypeCountJob_offerArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountJob_offerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: job_offerWhereInput;
  };

  /**
   * Count Type Job_applicationCountOutputType
   */

  export type Job_applicationCountOutputType = {
    contract: number;
  };

  export type Job_applicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      contract?: boolean | Job_applicationCountOutputTypeCountContractArgs;
    };

  // Custom InputTypes

  /**
   * Job_applicationCountOutputType without action
   */
  export type Job_applicationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job_applicationCountOutputType
     */
    select?: Job_applicationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * Job_applicationCountOutputType without action
   */
  export type Job_applicationCountOutputTypeCountContractArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: contractWhereInput;
  };

  /**
   * Count Type Job_offerCountOutputType
   */

  export type Job_offerCountOutputType = {
    job_application: number;
  };

  export type Job_offerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_application?: boolean | Job_offerCountOutputTypeCountJob_applicationArgs;
  };

  // Custom InputTypes

  /**
   * Job_offerCountOutputType without action
   */
  export type Job_offerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Job_offerCountOutputType
       */
      select?: Job_offerCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * Job_offerCountOutputType without action
   */
  export type Job_offerCountOutputTypeCountJob_applicationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: job_applicationWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    company: number;
    job_application: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
    job_application?: boolean | UserCountOutputTypeCountJob_applicationArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJob_applicationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: job_applicationWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      job_offer?: boolean | company$job_offerArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    job_offer?: boolean | company$job_offerArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      job_offer: Prisma.$job_offerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
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
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    job_offer<T extends company$job_offerArgs<ExtArgs> = {}>(
      args?: Subset<T, company$job_offerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_offerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.job_offer
   */
  export type company$job_offerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offer
     */
    select?: job_offerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_offerInclude<ExtArgs> | null;
    where?: job_offerWhereInput;
    orderBy?: job_offerOrderByWithRelationInput | job_offerOrderByWithRelationInput[];
    cursor?: job_offerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Job_offerScalarFieldEnum | Job_offerScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null;
    _min: ContractMinAggregateOutputType | null;
    _max: ContractMaxAggregateOutputType | null;
  };

  export type ContractMinAggregateOutputType = {
    id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    job_application_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ContractMaxAggregateOutputType = {
    id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    job_application_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ContractCountAggregateOutputType = {
    id: number;
    start_date: number;
    end_date: number;
    job_application_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ContractMinAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    job_application_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ContractMaxAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    job_application_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ContractCountAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    job_application_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contract to aggregate.
     */
    where?: contractWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contracts to fetch.
     */
    orderBy?: contractOrderByWithRelationInput | contractOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: contractWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contracts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contracts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned contracts
     **/
    _count?: true | ContractCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ContractMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ContractMaxAggregateInputType;
  };

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
    [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>;
  };

  export type contractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contractWhereInput;
    orderBy?: contractOrderByWithAggregationInput | contractOrderByWithAggregationInput[];
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum;
    having?: contractScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContractCountAggregateInputType | true;
    _min?: ContractMinAggregateInputType;
    _max?: ContractMaxAggregateInputType;
  };

  export type ContractGroupByOutputType = {
    id: string;
    start_date: Date;
    end_date: Date | null;
    job_application_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ContractCountAggregateOutputType | null;
    _min: ContractMinAggregateOutputType | null;
    _max: ContractMaxAggregateOutputType | null;
  };

  type GetContractGroupByPayload<T extends contractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ContractGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
          : GetScalarType<T[P], ContractGroupByOutputType[P]>;
      }
    >
  >;

  export type contractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        start_date?: boolean;
        end_date?: boolean;
        job_application_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        job_application?: boolean | job_applicationDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['contract']
    >;

  export type contractSelectScalar = {
    id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    job_application_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type contractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_application?: boolean | job_applicationDefaultArgs<ExtArgs>;
  };

  export type $contractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'contract';
    objects: {
      job_application: Prisma.$job_applicationPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        start_date: Date;
        end_date: Date | null;
        job_application_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['contract']
    >;
    composites: {};
  };

  type contractGetPayload<S extends boolean | null | undefined | contractDefaultArgs> = $Result.GetResult<
    Prisma.$contractPayload,
    S
  >;

  type contractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    contractFindManyArgs,
    'select' | 'include'
  > & {
    select?: ContractCountAggregateInputType | true;
  };

  export interface contractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contract']; meta: { name: 'contract' } };
    /**
     * Find zero or one Contract that matches the filter.
     * @param {contractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends contractFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, contractFindUniqueArgs<ExtArgs>>,
    ): Prisma__contractClient<
      $Result.GetResult<Prisma.$contractPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Contract that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {contractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends contractFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, contractFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__contractClient<
      $Result.GetResult<Prisma.$contractPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends contractFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, contractFindFirstArgs<ExtArgs>>,
    ): Prisma__contractClient<
      $Result.GetResult<Prisma.$contractPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends contractFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, contractFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__contractClient<
      $Result.GetResult<Prisma.$contractPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     *
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const contractWithIdOnly = await prisma.contract.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends contractFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contractFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contractPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Contract.
     * @param {contractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     *
     **/
    create<T extends contractCreateArgs<ExtArgs>>(
      args: SelectSubset<T, contractCreateArgs<ExtArgs>>,
    ): Prisma__contractClient<$Result.GetResult<Prisma.$contractPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Contracts.
     *     @param {contractCreateManyArgs} args - Arguments to create many Contracts.
     *     @example
     *     // Create many Contracts
     *     const contract = await prisma.contract.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends contractCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contractCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Contract.
     * @param {contractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     *
     **/
    delete<T extends contractDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, contractDeleteArgs<ExtArgs>>,
    ): Prisma__contractClient<$Result.GetResult<Prisma.$contractPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Contract.
     * @param {contractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends contractUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, contractUpdateArgs<ExtArgs>>,
    ): Prisma__contractClient<$Result.GetResult<Prisma.$contractPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Contracts.
     * @param {contractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends contractDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contractDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends contractUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, contractUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Contract.
     * @param {contractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
     **/
    upsert<T extends contractUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, contractUpsertArgs<ExtArgs>>,
    ): Prisma__contractClient<$Result.GetResult<Prisma.$contractPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
     **/
    count<T extends contractCountArgs>(
      args?: Subset<T, contractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContractAggregateArgs>(
      args: Subset<T, ContractAggregateArgs>,
    ): Prisma.PrismaPromise<GetContractAggregateType<T>>;

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractGroupByArgs} args - Group by arguments.
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
      T extends contractGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contractGroupByArgs['orderBy'] }
        : { orderBy?: contractGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, contractGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the contract model
     */
    readonly fields: contractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contractClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job_application<T extends job_applicationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, job_applicationDefaultArgs<ExtArgs>>,
    ): Prisma__job_applicationClient<
      $Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the contract model
   */
  interface contractFieldRefs {
    readonly id: FieldRef<'contract', 'String'>;
    readonly start_date: FieldRef<'contract', 'DateTime'>;
    readonly end_date: FieldRef<'contract', 'DateTime'>;
    readonly job_application_id: FieldRef<'contract', 'String'>;
    readonly created_at: FieldRef<'contract', 'DateTime'>;
    readonly updated_at: FieldRef<'contract', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * contract findUnique
   */
  export type contractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contract
     */
    select?: contractSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contractInclude<ExtArgs> | null;
    /**
     * Filter, which contract to fetch.
     */
    where: contractWhereUniqueInput;
  };

  /**
   * contract findUniqueOrThrow
   */
  export type contractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contract
     */
    select?: contractSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contractInclude<ExtArgs> | null;
    /**
     * Filter, which contract to fetch.
     */
    where: contractWhereUniqueInput;
  };

  /**
   * contract findFirst
   */
  export type contractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contract
     */
    select?: contractSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contractInclude<ExtArgs> | null;
    /**
     * Filter, which contract to fetch.
     */
    where?: contractWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contracts to fetch.
     */
    orderBy?: contractOrderByWithRelationInput | contractOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for contracts.
     */
    cursor?: contractWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contracts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contracts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[];
  };

  /**
   * contract findFirstOrThrow
   */
  export type contractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contract
     */
    select?: contractSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contractInclude<ExtArgs> | null;
    /**
     * Filter, which contract to fetch.
     */
    where?: contractWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contracts to fetch.
     */
    orderBy?: contractOrderByWithRelationInput | contractOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for contracts.
     */
    cursor?: contractWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contracts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contracts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[];
  };

  /**
   * contract findMany
   */
  export type contractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contract
     */
    select?: contractSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contractInclude<ExtArgs> | null;
    /**
     * Filter, which contracts to fetch.
     */
    where?: contractWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contracts to fetch.
     */
    orderBy?: contractOrderByWithRelationInput | contractOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing contracts.
     */
    cursor?: contractWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contracts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contracts.
     */
    skip?: number;
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[];
  };

  /**
   * contract create
   */
  export type contractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contract
     */
    select?: contractSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contractInclude<ExtArgs> | null;
    /**
     * The data needed to create a contract.
     */
    data: XOR<contractCreateInput, contractUncheckedCreateInput>;
  };

  /**
   * contract createMany
   */
  export type contractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contracts.
     */
    data: contractCreateManyInput | contractCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * contract update
   */
  export type contractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contract
     */
    select?: contractSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contractInclude<ExtArgs> | null;
    /**
     * The data needed to update a contract.
     */
    data: XOR<contractUpdateInput, contractUncheckedUpdateInput>;
    /**
     * Choose, which contract to update.
     */
    where: contractWhereUniqueInput;
  };

  /**
   * contract updateMany
   */
  export type contractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contracts.
     */
    data: XOR<contractUpdateManyMutationInput, contractUncheckedUpdateManyInput>;
    /**
     * Filter which contracts to update
     */
    where?: contractWhereInput;
  };

  /**
   * contract upsert
   */
  export type contractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contract
     */
    select?: contractSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contractInclude<ExtArgs> | null;
    /**
     * The filter to search for the contract to update in case it exists.
     */
    where: contractWhereUniqueInput;
    /**
     * In case the contract found by the `where` argument doesn't exist, create a new contract with this data.
     */
    create: XOR<contractCreateInput, contractUncheckedCreateInput>;
    /**
     * In case the contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contractUpdateInput, contractUncheckedUpdateInput>;
  };

  /**
   * contract delete
   */
  export type contractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contract
     */
    select?: contractSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contractInclude<ExtArgs> | null;
    /**
     * Filter which contract to delete.
     */
    where: contractWhereUniqueInput;
  };

  /**
   * contract deleteMany
   */
  export type contractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contracts to delete
     */
    where?: contractWhereInput;
  };

  /**
   * contract without action
   */
  export type contractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contract
     */
    select?: contractSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contractInclude<ExtArgs> | null;
  };

  /**
   * Model job_application
   */

  export type AggregateJob_application = {
    _count: Job_applicationCountAggregateOutputType | null;
    _min: Job_applicationMinAggregateOutputType | null;
    _max: Job_applicationMaxAggregateOutputType | null;
  };

  export type Job_applicationMinAggregateOutputType = {
    id: string | null;
    cover_letter: string | null;
    resume: string | null;
    status: string | null;
    job_offer_id: string | null;
    freelancer_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Job_applicationMaxAggregateOutputType = {
    id: string | null;
    cover_letter: string | null;
    resume: string | null;
    status: string | null;
    job_offer_id: string | null;
    freelancer_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Job_applicationCountAggregateOutputType = {
    id: number;
    cover_letter: number;
    resume: number;
    status: number;
    job_offer_id: number;
    freelancer_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Job_applicationMinAggregateInputType = {
    id?: true;
    cover_letter?: true;
    resume?: true;
    status?: true;
    job_offer_id?: true;
    freelancer_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Job_applicationMaxAggregateInputType = {
    id?: true;
    cover_letter?: true;
    resume?: true;
    status?: true;
    job_offer_id?: true;
    freelancer_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Job_applicationCountAggregateInputType = {
    id?: true;
    cover_letter?: true;
    resume?: true;
    status?: true;
    job_offer_id?: true;
    freelancer_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Job_applicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_application to aggregate.
     */
    where?: job_applicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_applications to fetch.
     */
    orderBy?: job_applicationOrderByWithRelationInput | job_applicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: job_applicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned job_applications
     **/
    _count?: true | Job_applicationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Job_applicationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Job_applicationMaxAggregateInputType;
  };

  export type GetJob_applicationAggregateType<T extends Job_applicationAggregateArgs> = {
    [P in keyof T & keyof AggregateJob_application]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_application[P]>
      : GetScalarType<T[P], AggregateJob_application[P]>;
  };

  export type job_applicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_applicationWhereInput;
    orderBy?: job_applicationOrderByWithAggregationInput | job_applicationOrderByWithAggregationInput[];
    by: Job_applicationScalarFieldEnum[] | Job_applicationScalarFieldEnum;
    having?: job_applicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Job_applicationCountAggregateInputType | true;
    _min?: Job_applicationMinAggregateInputType;
    _max?: Job_applicationMaxAggregateInputType;
  };

  export type Job_applicationGroupByOutputType = {
    id: string;
    cover_letter: string;
    resume: string;
    status: string;
    job_offer_id: string;
    freelancer_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Job_applicationCountAggregateOutputType | null;
    _min: Job_applicationMinAggregateOutputType | null;
    _max: Job_applicationMaxAggregateOutputType | null;
  };

  type GetJob_applicationGroupByPayload<T extends job_applicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_applicationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Job_applicationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Job_applicationGroupByOutputType[P]>
          : GetScalarType<T[P], Job_applicationGroupByOutputType[P]>;
      }
    >
  >;

  export type job_applicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        cover_letter?: boolean;
        resume?: boolean;
        status?: boolean;
        job_offer_id?: boolean;
        freelancer_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        contract?: boolean | job_application$contractArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        job_offer?: boolean | job_offerDefaultArgs<ExtArgs>;
        _count?: boolean | Job_applicationCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['job_application']
    >;

  export type job_applicationSelectScalar = {
    id?: boolean;
    cover_letter?: boolean;
    resume?: boolean;
    status?: boolean;
    job_offer_id?: boolean;
    freelancer_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type job_applicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | job_application$contractArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    job_offer?: boolean | job_offerDefaultArgs<ExtArgs>;
    _count?: boolean | Job_applicationCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $job_applicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'job_application';
    objects: {
      contract: Prisma.$contractPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
      job_offer: Prisma.$job_offerPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        cover_letter: string;
        resume: string;
        status: string;
        job_offer_id: string;
        freelancer_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['job_application']
    >;
    composites: {};
  };

  type job_applicationGetPayload<S extends boolean | null | undefined | job_applicationDefaultArgs> = $Result.GetResult<
    Prisma.$job_applicationPayload,
    S
  >;

  type job_applicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    job_applicationFindManyArgs,
    'select' | 'include'
  > & {
    select?: Job_applicationCountAggregateInputType | true;
  };

  export interface job_applicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job_application']; meta: { name: 'job_application' } };
    /**
     * Find zero or one Job_application that matches the filter.
     * @param {job_applicationFindUniqueArgs} args - Arguments to find a Job_application
     * @example
     * // Get one Job_application
     * const job_application = await prisma.job_application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends job_applicationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, job_applicationFindUniqueArgs<ExtArgs>>,
    ): Prisma__job_applicationClient<
      $Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Job_application that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {job_applicationFindUniqueOrThrowArgs} args - Arguments to find a Job_application
     * @example
     * // Get one Job_application
     * const job_application = await prisma.job_application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends job_applicationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, job_applicationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__job_applicationClient<
      $Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Job_application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationFindFirstArgs} args - Arguments to find a Job_application
     * @example
     * // Get one Job_application
     * const job_application = await prisma.job_application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends job_applicationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, job_applicationFindFirstArgs<ExtArgs>>,
    ): Prisma__job_applicationClient<
      $Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Job_application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationFindFirstOrThrowArgs} args - Arguments to find a Job_application
     * @example
     * // Get one Job_application
     * const job_application = await prisma.job_application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends job_applicationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, job_applicationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__job_applicationClient<
      $Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Job_applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_applications
     * const job_applications = await prisma.job_application.findMany()
     *
     * // Get first 10 Job_applications
     * const job_applications = await prisma.job_application.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const job_applicationWithIdOnly = await prisma.job_application.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends job_applicationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_applicationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Job_application.
     * @param {job_applicationCreateArgs} args - Arguments to create a Job_application.
     * @example
     * // Create one Job_application
     * const Job_application = await prisma.job_application.create({
     *   data: {
     *     // ... data to create a Job_application
     *   }
     * })
     *
     **/
    create<T extends job_applicationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, job_applicationCreateArgs<ExtArgs>>,
    ): Prisma__job_applicationClient<
      $Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Job_applications.
     *     @param {job_applicationCreateManyArgs} args - Arguments to create many Job_applications.
     *     @example
     *     // Create many Job_applications
     *     const job_application = await prisma.job_application.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends job_applicationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_applicationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Job_application.
     * @param {job_applicationDeleteArgs} args - Arguments to delete one Job_application.
     * @example
     * // Delete one Job_application
     * const Job_application = await prisma.job_application.delete({
     *   where: {
     *     // ... filter to delete one Job_application
     *   }
     * })
     *
     **/
    delete<T extends job_applicationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, job_applicationDeleteArgs<ExtArgs>>,
    ): Prisma__job_applicationClient<
      $Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Job_application.
     * @param {job_applicationUpdateArgs} args - Arguments to update one Job_application.
     * @example
     * // Update one Job_application
     * const job_application = await prisma.job_application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends job_applicationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, job_applicationUpdateArgs<ExtArgs>>,
    ): Prisma__job_applicationClient<
      $Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Job_applications.
     * @param {job_applicationDeleteManyArgs} args - Arguments to filter Job_applications to delete.
     * @example
     * // Delete a few Job_applications
     * const { count } = await prisma.job_application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends job_applicationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_applicationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Job_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_applications
     * const job_application = await prisma.job_application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends job_applicationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, job_applicationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Job_application.
     * @param {job_applicationUpsertArgs} args - Arguments to update or create a Job_application.
     * @example
     * // Update or create a Job_application
     * const job_application = await prisma.job_application.upsert({
     *   create: {
     *     // ... data to create a Job_application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_application we want to update
     *   }
     * })
     **/
    upsert<T extends job_applicationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, job_applicationUpsertArgs<ExtArgs>>,
    ): Prisma__job_applicationClient<
      $Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Job_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationCountArgs} args - Arguments to filter Job_applications to count.
     * @example
     * // Count the number of Job_applications
     * const count = await prisma.job_application.count({
     *   where: {
     *     // ... the filter for the Job_applications we want to count
     *   }
     * })
     **/
    count<T extends job_applicationCountArgs>(
      args?: Subset<T, job_applicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_applicationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Job_application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_applicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Job_applicationAggregateArgs>(
      args: Subset<T, Job_applicationAggregateArgs>,
    ): Prisma.PrismaPromise<GetJob_applicationAggregateType<T>>;

    /**
     * Group by Job_application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationGroupByArgs} args - Group by arguments.
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
      T extends job_applicationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: job_applicationGroupByArgs['orderBy'] }
        : { orderBy?: job_applicationGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, job_applicationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetJob_applicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the job_application model
     */
    readonly fields: job_applicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job_application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__job_applicationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    contract<T extends job_application$contractArgs<ExtArgs> = {}>(
      args?: Subset<T, job_application$contractArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contractPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    job_offer<T extends job_offerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, job_offerDefaultArgs<ExtArgs>>,
    ): Prisma__job_offerClient<
      $Result.GetResult<Prisma.$job_offerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the job_application model
   */
  interface job_applicationFieldRefs {
    readonly id: FieldRef<'job_application', 'String'>;
    readonly cover_letter: FieldRef<'job_application', 'String'>;
    readonly resume: FieldRef<'job_application', 'String'>;
    readonly status: FieldRef<'job_application', 'String'>;
    readonly job_offer_id: FieldRef<'job_application', 'String'>;
    readonly freelancer_id: FieldRef<'job_application', 'String'>;
    readonly created_at: FieldRef<'job_application', 'DateTime'>;
    readonly updated_at: FieldRef<'job_application', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * job_application findUnique
   */
  export type job_applicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_application
     */
    select?: job_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicationInclude<ExtArgs> | null;
    /**
     * Filter, which job_application to fetch.
     */
    where: job_applicationWhereUniqueInput;
  };

  /**
   * job_application findUniqueOrThrow
   */
  export type job_applicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the job_application
       */
      select?: job_applicationSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: job_applicationInclude<ExtArgs> | null;
      /**
       * Filter, which job_application to fetch.
       */
      where: job_applicationWhereUniqueInput;
    };

  /**
   * job_application findFirst
   */
  export type job_applicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_application
     */
    select?: job_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicationInclude<ExtArgs> | null;
    /**
     * Filter, which job_application to fetch.
     */
    where?: job_applicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_applications to fetch.
     */
    orderBy?: job_applicationOrderByWithRelationInput | job_applicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for job_applications.
     */
    cursor?: job_applicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of job_applications.
     */
    distinct?: Job_applicationScalarFieldEnum | Job_applicationScalarFieldEnum[];
  };

  /**
   * job_application findFirstOrThrow
   */
  export type job_applicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the job_application
       */
      select?: job_applicationSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: job_applicationInclude<ExtArgs> | null;
      /**
       * Filter, which job_application to fetch.
       */
      where?: job_applicationWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of job_applications to fetch.
       */
      orderBy?: job_applicationOrderByWithRelationInput | job_applicationOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for job_applications.
       */
      cursor?: job_applicationWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` job_applications from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` job_applications.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of job_applications.
       */
      distinct?: Job_applicationScalarFieldEnum | Job_applicationScalarFieldEnum[];
    };

  /**
   * job_application findMany
   */
  export type job_applicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_application
     */
    select?: job_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicationInclude<ExtArgs> | null;
    /**
     * Filter, which job_applications to fetch.
     */
    where?: job_applicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_applications to fetch.
     */
    orderBy?: job_applicationOrderByWithRelationInput | job_applicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing job_applications.
     */
    cursor?: job_applicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_applications.
     */
    skip?: number;
    distinct?: Job_applicationScalarFieldEnum | Job_applicationScalarFieldEnum[];
  };

  /**
   * job_application create
   */
  export type job_applicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_application
     */
    select?: job_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicationInclude<ExtArgs> | null;
    /**
     * The data needed to create a job_application.
     */
    data: XOR<job_applicationCreateInput, job_applicationUncheckedCreateInput>;
  };

  /**
   * job_application createMany
   */
  export type job_applicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many job_applications.
     */
    data: job_applicationCreateManyInput | job_applicationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * job_application update
   */
  export type job_applicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_application
     */
    select?: job_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicationInclude<ExtArgs> | null;
    /**
     * The data needed to update a job_application.
     */
    data: XOR<job_applicationUpdateInput, job_applicationUncheckedUpdateInput>;
    /**
     * Choose, which job_application to update.
     */
    where: job_applicationWhereUniqueInput;
  };

  /**
   * job_application updateMany
   */
  export type job_applicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update job_applications.
     */
    data: XOR<job_applicationUpdateManyMutationInput, job_applicationUncheckedUpdateManyInput>;
    /**
     * Filter which job_applications to update
     */
    where?: job_applicationWhereInput;
  };

  /**
   * job_application upsert
   */
  export type job_applicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_application
     */
    select?: job_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicationInclude<ExtArgs> | null;
    /**
     * The filter to search for the job_application to update in case it exists.
     */
    where: job_applicationWhereUniqueInput;
    /**
     * In case the job_application found by the `where` argument doesn't exist, create a new job_application with this data.
     */
    create: XOR<job_applicationCreateInput, job_applicationUncheckedCreateInput>;
    /**
     * In case the job_application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<job_applicationUpdateInput, job_applicationUncheckedUpdateInput>;
  };

  /**
   * job_application delete
   */
  export type job_applicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_application
     */
    select?: job_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicationInclude<ExtArgs> | null;
    /**
     * Filter which job_application to delete.
     */
    where: job_applicationWhereUniqueInput;
  };

  /**
   * job_application deleteMany
   */
  export type job_applicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_applications to delete
     */
    where?: job_applicationWhereInput;
  };

  /**
   * job_application.contract
   */
  export type job_application$contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contract
     */
    select?: contractSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contractInclude<ExtArgs> | null;
    where?: contractWhereInput;
    orderBy?: contractOrderByWithRelationInput | contractOrderByWithRelationInput[];
    cursor?: contractWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[];
  };

  /**
   * job_application without action
   */
  export type job_applicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_application
     */
    select?: job_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicationInclude<ExtArgs> | null;
  };

  /**
   * Model job_offer
   */

  export type AggregateJob_offer = {
    _count: Job_offerCountAggregateOutputType | null;
    _avg: Job_offerAvgAggregateOutputType | null;
    _sum: Job_offerSumAggregateOutputType | null;
    _min: Job_offerMinAggregateOutputType | null;
    _max: Job_offerMaxAggregateOutputType | null;
  };

  export type Job_offerAvgAggregateOutputType = {
    salary: number | null;
  };

  export type Job_offerSumAggregateOutputType = {
    salary: number | null;
  };

  export type Job_offerMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    salary: number | null;
    location: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Job_offerMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    salary: number | null;
    location: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Job_offerCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    salary: number;
    location: number;
    company_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Job_offerAvgAggregateInputType = {
    salary?: true;
  };

  export type Job_offerSumAggregateInputType = {
    salary?: true;
  };

  export type Job_offerMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    salary?: true;
    location?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Job_offerMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    salary?: true;
    location?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Job_offerCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    salary?: true;
    location?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Job_offerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_offer to aggregate.
     */
    where?: job_offerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_offers to fetch.
     */
    orderBy?: job_offerOrderByWithRelationInput | job_offerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: job_offerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_offers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_offers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned job_offers
     **/
    _count?: true | Job_offerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Job_offerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Job_offerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Job_offerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Job_offerMaxAggregateInputType;
  };

  export type GetJob_offerAggregateType<T extends Job_offerAggregateArgs> = {
    [P in keyof T & keyof AggregateJob_offer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_offer[P]>
      : GetScalarType<T[P], AggregateJob_offer[P]>;
  };

  export type job_offerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_offerWhereInput;
    orderBy?: job_offerOrderByWithAggregationInput | job_offerOrderByWithAggregationInput[];
    by: Job_offerScalarFieldEnum[] | Job_offerScalarFieldEnum;
    having?: job_offerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Job_offerCountAggregateInputType | true;
    _avg?: Job_offerAvgAggregateInputType;
    _sum?: Job_offerSumAggregateInputType;
    _min?: Job_offerMinAggregateInputType;
    _max?: Job_offerMaxAggregateInputType;
  };

  export type Job_offerGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    salary: number | null;
    location: string | null;
    company_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Job_offerCountAggregateOutputType | null;
    _avg: Job_offerAvgAggregateOutputType | null;
    _sum: Job_offerSumAggregateOutputType | null;
    _min: Job_offerMinAggregateOutputType | null;
    _max: Job_offerMaxAggregateOutputType | null;
  };

  type GetJob_offerGroupByPayload<T extends job_offerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_offerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Job_offerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Job_offerGroupByOutputType[P]>
          : GetScalarType<T[P], Job_offerGroupByOutputType[P]>;
      }
    >
  >;

  export type job_offerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        title?: boolean;
        description?: boolean;
        salary?: boolean;
        location?: boolean;
        company_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        job_application?: boolean | job_offer$job_applicationArgs<ExtArgs>;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        _count?: boolean | Job_offerCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['job_offer']
    >;

  export type job_offerSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    salary?: boolean;
    location?: boolean;
    company_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type job_offerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_application?: boolean | job_offer$job_applicationArgs<ExtArgs>;
    company?: boolean | companyDefaultArgs<ExtArgs>;
    _count?: boolean | Job_offerCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $job_offerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'job_offer';
    objects: {
      job_application: Prisma.$job_applicationPayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string;
        salary: number | null;
        location: string | null;
        company_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['job_offer']
    >;
    composites: {};
  };

  type job_offerGetPayload<S extends boolean | null | undefined | job_offerDefaultArgs> = $Result.GetResult<
    Prisma.$job_offerPayload,
    S
  >;

  type job_offerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    job_offerFindManyArgs,
    'select' | 'include'
  > & {
    select?: Job_offerCountAggregateInputType | true;
  };

  export interface job_offerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job_offer']; meta: { name: 'job_offer' } };
    /**
     * Find zero or one Job_offer that matches the filter.
     * @param {job_offerFindUniqueArgs} args - Arguments to find a Job_offer
     * @example
     * // Get one Job_offer
     * const job_offer = await prisma.job_offer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends job_offerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, job_offerFindUniqueArgs<ExtArgs>>,
    ): Prisma__job_offerClient<
      $Result.GetResult<Prisma.$job_offerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Job_offer that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {job_offerFindUniqueOrThrowArgs} args - Arguments to find a Job_offer
     * @example
     * // Get one Job_offer
     * const job_offer = await prisma.job_offer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends job_offerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, job_offerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__job_offerClient<
      $Result.GetResult<Prisma.$job_offerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Job_offer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_offerFindFirstArgs} args - Arguments to find a Job_offer
     * @example
     * // Get one Job_offer
     * const job_offer = await prisma.job_offer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends job_offerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, job_offerFindFirstArgs<ExtArgs>>,
    ): Prisma__job_offerClient<
      $Result.GetResult<Prisma.$job_offerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Job_offer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_offerFindFirstOrThrowArgs} args - Arguments to find a Job_offer
     * @example
     * // Get one Job_offer
     * const job_offer = await prisma.job_offer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends job_offerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, job_offerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__job_offerClient<
      $Result.GetResult<Prisma.$job_offerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Job_offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_offerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_offers
     * const job_offers = await prisma.job_offer.findMany()
     *
     * // Get first 10 Job_offers
     * const job_offers = await prisma.job_offer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const job_offerWithIdOnly = await prisma.job_offer.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends job_offerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_offerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_offerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Job_offer.
     * @param {job_offerCreateArgs} args - Arguments to create a Job_offer.
     * @example
     * // Create one Job_offer
     * const Job_offer = await prisma.job_offer.create({
     *   data: {
     *     // ... data to create a Job_offer
     *   }
     * })
     *
     **/
    create<T extends job_offerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, job_offerCreateArgs<ExtArgs>>,
    ): Prisma__job_offerClient<$Result.GetResult<Prisma.$job_offerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Job_offers.
     *     @param {job_offerCreateManyArgs} args - Arguments to create many Job_offers.
     *     @example
     *     // Create many Job_offers
     *     const job_offer = await prisma.job_offer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends job_offerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_offerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Job_offer.
     * @param {job_offerDeleteArgs} args - Arguments to delete one Job_offer.
     * @example
     * // Delete one Job_offer
     * const Job_offer = await prisma.job_offer.delete({
     *   where: {
     *     // ... filter to delete one Job_offer
     *   }
     * })
     *
     **/
    delete<T extends job_offerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, job_offerDeleteArgs<ExtArgs>>,
    ): Prisma__job_offerClient<$Result.GetResult<Prisma.$job_offerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Job_offer.
     * @param {job_offerUpdateArgs} args - Arguments to update one Job_offer.
     * @example
     * // Update one Job_offer
     * const job_offer = await prisma.job_offer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends job_offerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, job_offerUpdateArgs<ExtArgs>>,
    ): Prisma__job_offerClient<$Result.GetResult<Prisma.$job_offerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Job_offers.
     * @param {job_offerDeleteManyArgs} args - Arguments to filter Job_offers to delete.
     * @example
     * // Delete a few Job_offers
     * const { count } = await prisma.job_offer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends job_offerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_offerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Job_offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_offerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_offers
     * const job_offer = await prisma.job_offer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends job_offerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, job_offerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Job_offer.
     * @param {job_offerUpsertArgs} args - Arguments to update or create a Job_offer.
     * @example
     * // Update or create a Job_offer
     * const job_offer = await prisma.job_offer.upsert({
     *   create: {
     *     // ... data to create a Job_offer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_offer we want to update
     *   }
     * })
     **/
    upsert<T extends job_offerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, job_offerUpsertArgs<ExtArgs>>,
    ): Prisma__job_offerClient<$Result.GetResult<Prisma.$job_offerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Job_offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_offerCountArgs} args - Arguments to filter Job_offers to count.
     * @example
     * // Count the number of Job_offers
     * const count = await prisma.job_offer.count({
     *   where: {
     *     // ... the filter for the Job_offers we want to count
     *   }
     * })
     **/
    count<T extends job_offerCountArgs>(
      args?: Subset<T, job_offerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_offerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Job_offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_offerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Job_offerAggregateArgs>(
      args: Subset<T, Job_offerAggregateArgs>,
    ): Prisma.PrismaPromise<GetJob_offerAggregateType<T>>;

    /**
     * Group by Job_offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_offerGroupByArgs} args - Group by arguments.
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
      T extends job_offerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: job_offerGroupByArgs['orderBy'] }
        : { orderBy?: job_offerGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, job_offerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetJob_offerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the job_offer model
     */
    readonly fields: job_offerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job_offer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__job_offerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job_application<T extends job_offer$job_applicationArgs<ExtArgs> = {}>(
      args?: Subset<T, job_offer$job_applicationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the job_offer model
   */
  interface job_offerFieldRefs {
    readonly id: FieldRef<'job_offer', 'String'>;
    readonly title: FieldRef<'job_offer', 'String'>;
    readonly description: FieldRef<'job_offer', 'String'>;
    readonly salary: FieldRef<'job_offer', 'Int'>;
    readonly location: FieldRef<'job_offer', 'String'>;
    readonly company_id: FieldRef<'job_offer', 'String'>;
    readonly created_at: FieldRef<'job_offer', 'DateTime'>;
    readonly updated_at: FieldRef<'job_offer', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * job_offer findUnique
   */
  export type job_offerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offer
     */
    select?: job_offerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_offerInclude<ExtArgs> | null;
    /**
     * Filter, which job_offer to fetch.
     */
    where: job_offerWhereUniqueInput;
  };

  /**
   * job_offer findUniqueOrThrow
   */
  export type job_offerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offer
     */
    select?: job_offerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_offerInclude<ExtArgs> | null;
    /**
     * Filter, which job_offer to fetch.
     */
    where: job_offerWhereUniqueInput;
  };

  /**
   * job_offer findFirst
   */
  export type job_offerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offer
     */
    select?: job_offerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_offerInclude<ExtArgs> | null;
    /**
     * Filter, which job_offer to fetch.
     */
    where?: job_offerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_offers to fetch.
     */
    orderBy?: job_offerOrderByWithRelationInput | job_offerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for job_offers.
     */
    cursor?: job_offerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_offers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_offers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of job_offers.
     */
    distinct?: Job_offerScalarFieldEnum | Job_offerScalarFieldEnum[];
  };

  /**
   * job_offer findFirstOrThrow
   */
  export type job_offerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offer
     */
    select?: job_offerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_offerInclude<ExtArgs> | null;
    /**
     * Filter, which job_offer to fetch.
     */
    where?: job_offerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_offers to fetch.
     */
    orderBy?: job_offerOrderByWithRelationInput | job_offerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for job_offers.
     */
    cursor?: job_offerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_offers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_offers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of job_offers.
     */
    distinct?: Job_offerScalarFieldEnum | Job_offerScalarFieldEnum[];
  };

  /**
   * job_offer findMany
   */
  export type job_offerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offer
     */
    select?: job_offerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_offerInclude<ExtArgs> | null;
    /**
     * Filter, which job_offers to fetch.
     */
    where?: job_offerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_offers to fetch.
     */
    orderBy?: job_offerOrderByWithRelationInput | job_offerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing job_offers.
     */
    cursor?: job_offerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_offers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_offers.
     */
    skip?: number;
    distinct?: Job_offerScalarFieldEnum | Job_offerScalarFieldEnum[];
  };

  /**
   * job_offer create
   */
  export type job_offerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offer
     */
    select?: job_offerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_offerInclude<ExtArgs> | null;
    /**
     * The data needed to create a job_offer.
     */
    data: XOR<job_offerCreateInput, job_offerUncheckedCreateInput>;
  };

  /**
   * job_offer createMany
   */
  export type job_offerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many job_offers.
     */
    data: job_offerCreateManyInput | job_offerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * job_offer update
   */
  export type job_offerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offer
     */
    select?: job_offerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_offerInclude<ExtArgs> | null;
    /**
     * The data needed to update a job_offer.
     */
    data: XOR<job_offerUpdateInput, job_offerUncheckedUpdateInput>;
    /**
     * Choose, which job_offer to update.
     */
    where: job_offerWhereUniqueInput;
  };

  /**
   * job_offer updateMany
   */
  export type job_offerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update job_offers.
     */
    data: XOR<job_offerUpdateManyMutationInput, job_offerUncheckedUpdateManyInput>;
    /**
     * Filter which job_offers to update
     */
    where?: job_offerWhereInput;
  };

  /**
   * job_offer upsert
   */
  export type job_offerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offer
     */
    select?: job_offerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_offerInclude<ExtArgs> | null;
    /**
     * The filter to search for the job_offer to update in case it exists.
     */
    where: job_offerWhereUniqueInput;
    /**
     * In case the job_offer found by the `where` argument doesn't exist, create a new job_offer with this data.
     */
    create: XOR<job_offerCreateInput, job_offerUncheckedCreateInput>;
    /**
     * In case the job_offer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<job_offerUpdateInput, job_offerUncheckedUpdateInput>;
  };

  /**
   * job_offer delete
   */
  export type job_offerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offer
     */
    select?: job_offerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_offerInclude<ExtArgs> | null;
    /**
     * Filter which job_offer to delete.
     */
    where: job_offerWhereUniqueInput;
  };

  /**
   * job_offer deleteMany
   */
  export type job_offerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_offers to delete
     */
    where?: job_offerWhereInput;
  };

  /**
   * job_offer.job_application
   */
  export type job_offer$job_applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_application
     */
    select?: job_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicationInclude<ExtArgs> | null;
    where?: job_applicationWhereInput;
    orderBy?: job_applicationOrderByWithRelationInput | job_applicationOrderByWithRelationInput[];
    cursor?: job_applicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Job_applicationScalarFieldEnum | Job_applicationScalarFieldEnum[];
  };

  /**
   * job_offer without action
   */
  export type job_offerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offer
     */
    select?: job_offerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_offerInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | user$companyArgs<ExtArgs>;
      job_application?: boolean | user$job_applicationArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | user$companyArgs<ExtArgs>;
    job_application?: boolean | user$job_applicationArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>[];
      job_application: Prisma.$job_applicationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    job_application<T extends user$job_applicationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$job_applicationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user.job_application
   */
  export type user$job_applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_application
     */
    select?: job_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicationInclude<ExtArgs> | null;
    where?: job_applicationWhereInput;
    orderBy?: job_applicationOrderByWithRelationInput | job_applicationOrderByWithRelationInput[];
    cursor?: job_applicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Job_applicationScalarFieldEnum | Job_applicationScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const ContractScalarFieldEnum: {
    id: 'id';
    start_date: 'start_date';
    end_date: 'end_date';
    job_application_id: 'job_application_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum];

  export const Job_applicationScalarFieldEnum: {
    id: 'id';
    cover_letter: 'cover_letter';
    resume: 'resume';
    status: 'status';
    job_offer_id: 'job_offer_id';
    freelancer_id: 'freelancer_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Job_applicationScalarFieldEnum =
    (typeof Job_applicationScalarFieldEnum)[keyof typeof Job_applicationScalarFieldEnum];

  export const Job_offerScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    salary: 'salary';
    location: 'location';
    company_id: 'company_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Job_offerScalarFieldEnum = (typeof Job_offerScalarFieldEnum)[keyof typeof Job_offerScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    job_offer?: Job_offerListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    job_offer?: job_offerOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      job_offer?: Job_offerListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type contractWhereInput = {
    AND?: contractWhereInput | contractWhereInput[];
    OR?: contractWhereInput[];
    NOT?: contractWhereInput | contractWhereInput[];
    id?: UuidFilter<'contract'> | string;
    start_date?: DateTimeFilter<'contract'> | Date | string;
    end_date?: DateTimeNullableFilter<'contract'> | Date | string | null;
    job_application_id?: UuidFilter<'contract'> | string;
    created_at?: DateTimeFilter<'contract'> | Date | string;
    updated_at?: DateTimeFilter<'contract'> | Date | string;
    job_application?: XOR<Job_applicationRelationFilter, job_applicationWhereInput>;
  };

  export type contractOrderByWithRelationInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrderInput | SortOrder;
    job_application_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    job_application?: job_applicationOrderByWithRelationInput;
  };

  export type contractWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: contractWhereInput | contractWhereInput[];
      OR?: contractWhereInput[];
      NOT?: contractWhereInput | contractWhereInput[];
      start_date?: DateTimeFilter<'contract'> | Date | string;
      end_date?: DateTimeNullableFilter<'contract'> | Date | string | null;
      job_application_id?: UuidFilter<'contract'> | string;
      created_at?: DateTimeFilter<'contract'> | Date | string;
      updated_at?: DateTimeFilter<'contract'> | Date | string;
      job_application?: XOR<Job_applicationRelationFilter, job_applicationWhereInput>;
    },
    'id'
  >;

  export type contractOrderByWithAggregationInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrderInput | SortOrder;
    job_application_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: contractCountOrderByAggregateInput;
    _max?: contractMaxOrderByAggregateInput;
    _min?: contractMinOrderByAggregateInput;
  };

  export type contractScalarWhereWithAggregatesInput = {
    AND?: contractScalarWhereWithAggregatesInput | contractScalarWhereWithAggregatesInput[];
    OR?: contractScalarWhereWithAggregatesInput[];
    NOT?: contractScalarWhereWithAggregatesInput | contractScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'contract'> | string;
    start_date?: DateTimeWithAggregatesFilter<'contract'> | Date | string;
    end_date?: DateTimeNullableWithAggregatesFilter<'contract'> | Date | string | null;
    job_application_id?: UuidWithAggregatesFilter<'contract'> | string;
    created_at?: DateTimeWithAggregatesFilter<'contract'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'contract'> | Date | string;
  };

  export type job_applicationWhereInput = {
    AND?: job_applicationWhereInput | job_applicationWhereInput[];
    OR?: job_applicationWhereInput[];
    NOT?: job_applicationWhereInput | job_applicationWhereInput[];
    id?: UuidFilter<'job_application'> | string;
    cover_letter?: StringFilter<'job_application'> | string;
    resume?: StringFilter<'job_application'> | string;
    status?: StringFilter<'job_application'> | string;
    job_offer_id?: UuidFilter<'job_application'> | string;
    freelancer_id?: UuidFilter<'job_application'> | string;
    created_at?: DateTimeFilter<'job_application'> | Date | string;
    updated_at?: DateTimeFilter<'job_application'> | Date | string;
    contract?: ContractListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
    job_offer?: XOR<Job_offerRelationFilter, job_offerWhereInput>;
  };

  export type job_applicationOrderByWithRelationInput = {
    id?: SortOrder;
    cover_letter?: SortOrder;
    resume?: SortOrder;
    status?: SortOrder;
    job_offer_id?: SortOrder;
    freelancer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    contract?: contractOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
    job_offer?: job_offerOrderByWithRelationInput;
  };

  export type job_applicationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: job_applicationWhereInput | job_applicationWhereInput[];
      OR?: job_applicationWhereInput[];
      NOT?: job_applicationWhereInput | job_applicationWhereInput[];
      cover_letter?: StringFilter<'job_application'> | string;
      resume?: StringFilter<'job_application'> | string;
      status?: StringFilter<'job_application'> | string;
      job_offer_id?: UuidFilter<'job_application'> | string;
      freelancer_id?: UuidFilter<'job_application'> | string;
      created_at?: DateTimeFilter<'job_application'> | Date | string;
      updated_at?: DateTimeFilter<'job_application'> | Date | string;
      contract?: ContractListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
      job_offer?: XOR<Job_offerRelationFilter, job_offerWhereInput>;
    },
    'id'
  >;

  export type job_applicationOrderByWithAggregationInput = {
    id?: SortOrder;
    cover_letter?: SortOrder;
    resume?: SortOrder;
    status?: SortOrder;
    job_offer_id?: SortOrder;
    freelancer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: job_applicationCountOrderByAggregateInput;
    _max?: job_applicationMaxOrderByAggregateInput;
    _min?: job_applicationMinOrderByAggregateInput;
  };

  export type job_applicationScalarWhereWithAggregatesInput = {
    AND?: job_applicationScalarWhereWithAggregatesInput | job_applicationScalarWhereWithAggregatesInput[];
    OR?: job_applicationScalarWhereWithAggregatesInput[];
    NOT?: job_applicationScalarWhereWithAggregatesInput | job_applicationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'job_application'> | string;
    cover_letter?: StringWithAggregatesFilter<'job_application'> | string;
    resume?: StringWithAggregatesFilter<'job_application'> | string;
    status?: StringWithAggregatesFilter<'job_application'> | string;
    job_offer_id?: UuidWithAggregatesFilter<'job_application'> | string;
    freelancer_id?: UuidWithAggregatesFilter<'job_application'> | string;
    created_at?: DateTimeWithAggregatesFilter<'job_application'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'job_application'> | Date | string;
  };

  export type job_offerWhereInput = {
    AND?: job_offerWhereInput | job_offerWhereInput[];
    OR?: job_offerWhereInput[];
    NOT?: job_offerWhereInput | job_offerWhereInput[];
    id?: UuidFilter<'job_offer'> | string;
    title?: StringFilter<'job_offer'> | string;
    description?: StringFilter<'job_offer'> | string;
    salary?: IntNullableFilter<'job_offer'> | number | null;
    location?: StringNullableFilter<'job_offer'> | string | null;
    company_id?: UuidFilter<'job_offer'> | string;
    created_at?: DateTimeFilter<'job_offer'> | Date | string;
    updated_at?: DateTimeFilter<'job_offer'> | Date | string;
    job_application?: Job_applicationListRelationFilter;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
  };

  export type job_offerOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    salary?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    job_application?: job_applicationOrderByRelationAggregateInput;
    company?: companyOrderByWithRelationInput;
  };

  export type job_offerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: job_offerWhereInput | job_offerWhereInput[];
      OR?: job_offerWhereInput[];
      NOT?: job_offerWhereInput | job_offerWhereInput[];
      title?: StringFilter<'job_offer'> | string;
      description?: StringFilter<'job_offer'> | string;
      salary?: IntNullableFilter<'job_offer'> | number | null;
      location?: StringNullableFilter<'job_offer'> | string | null;
      company_id?: UuidFilter<'job_offer'> | string;
      created_at?: DateTimeFilter<'job_offer'> | Date | string;
      updated_at?: DateTimeFilter<'job_offer'> | Date | string;
      job_application?: Job_applicationListRelationFilter;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
    },
    'id'
  >;

  export type job_offerOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    salary?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: job_offerCountOrderByAggregateInput;
    _avg?: job_offerAvgOrderByAggregateInput;
    _max?: job_offerMaxOrderByAggregateInput;
    _min?: job_offerMinOrderByAggregateInput;
    _sum?: job_offerSumOrderByAggregateInput;
  };

  export type job_offerScalarWhereWithAggregatesInput = {
    AND?: job_offerScalarWhereWithAggregatesInput | job_offerScalarWhereWithAggregatesInput[];
    OR?: job_offerScalarWhereWithAggregatesInput[];
    NOT?: job_offerScalarWhereWithAggregatesInput | job_offerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'job_offer'> | string;
    title?: StringWithAggregatesFilter<'job_offer'> | string;
    description?: StringWithAggregatesFilter<'job_offer'> | string;
    salary?: IntNullableWithAggregatesFilter<'job_offer'> | number | null;
    location?: StringNullableWithAggregatesFilter<'job_offer'> | string | null;
    company_id?: UuidWithAggregatesFilter<'job_offer'> | string;
    created_at?: DateTimeWithAggregatesFilter<'job_offer'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'job_offer'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    company?: CompanyListRelationFilter;
    job_application?: Job_applicationListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByRelationAggregateInput;
    job_application?: job_applicationOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      company?: CompanyListRelationFilter;
      job_application?: Job_applicationListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    job_offer?: job_offerCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    job_offer?: job_offerUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    job_offer?: job_offerUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    job_offer?: job_offerUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type contractCreateInput = {
    id?: string;
    start_date: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_application: job_applicationCreateNestedOneWithoutContractInput;
  };

  export type contractUncheckedCreateInput = {
    id?: string;
    start_date: Date | string;
    end_date?: Date | string | null;
    job_application_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type contractUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_application?: job_applicationUpdateOneRequiredWithoutContractNestedInput;
  };

  export type contractUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    job_application_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type contractCreateManyInput = {
    id?: string;
    start_date: Date | string;
    end_date?: Date | string | null;
    job_application_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type contractUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type contractUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    job_application_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_applicationCreateInput = {
    id?: string;
    cover_letter: string;
    resume: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    contract?: contractCreateNestedManyWithoutJob_applicationInput;
    user: userCreateNestedOneWithoutJob_applicationInput;
    job_offer: job_offerCreateNestedOneWithoutJob_applicationInput;
  };

  export type job_applicationUncheckedCreateInput = {
    id?: string;
    cover_letter: string;
    resume: string;
    status: string;
    job_offer_id: string;
    freelancer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    contract?: contractUncheckedCreateNestedManyWithoutJob_applicationInput;
  };

  export type job_applicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    cover_letter?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    contract?: contractUpdateManyWithoutJob_applicationNestedInput;
    user?: userUpdateOneRequiredWithoutJob_applicationNestedInput;
    job_offer?: job_offerUpdateOneRequiredWithoutJob_applicationNestedInput;
  };

  export type job_applicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    cover_letter?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    job_offer_id?: StringFieldUpdateOperationsInput | string;
    freelancer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    contract?: contractUncheckedUpdateManyWithoutJob_applicationNestedInput;
  };

  export type job_applicationCreateManyInput = {
    id?: string;
    cover_letter: string;
    resume: string;
    status: string;
    job_offer_id: string;
    freelancer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_applicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    cover_letter?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_applicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    cover_letter?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    job_offer_id?: StringFieldUpdateOperationsInput | string;
    freelancer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_offerCreateInput = {
    id?: string;
    title: string;
    description: string;
    salary?: number | null;
    location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_application?: job_applicationCreateNestedManyWithoutJob_offerInput;
    company: companyCreateNestedOneWithoutJob_offerInput;
  };

  export type job_offerUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    salary?: number | null;
    location?: string | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_application?: job_applicationUncheckedCreateNestedManyWithoutJob_offerInput;
  };

  export type job_offerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_application?: job_applicationUpdateManyWithoutJob_offerNestedInput;
    company?: companyUpdateOneRequiredWithoutJob_offerNestedInput;
  };

  export type job_offerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_application?: job_applicationUncheckedUpdateManyWithoutJob_offerNestedInput;
  };

  export type job_offerCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    salary?: number | null;
    location?: string | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_offerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_offerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    job_application?: job_applicationCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    job_application?: job_applicationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    job_application?: job_applicationUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    job_application?: job_applicationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type Job_offerListRelationFilter = {
    every?: job_offerWhereInput;
    some?: job_offerWhereInput;
    none?: job_offerWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type job_offerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type Job_applicationRelationFilter = {
    is?: job_applicationWhereInput;
    isNot?: job_applicationWhereInput;
  };

  export type contractCountOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    job_application_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type contractMaxOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    job_application_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type contractMinOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    job_application_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type ContractListRelationFilter = {
    every?: contractWhereInput;
    some?: contractWhereInput;
    none?: contractWhereInput;
  };

  export type Job_offerRelationFilter = {
    is?: job_offerWhereInput;
    isNot?: job_offerWhereInput;
  };

  export type contractOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type job_applicationCountOrderByAggregateInput = {
    id?: SortOrder;
    cover_letter?: SortOrder;
    resume?: SortOrder;
    status?: SortOrder;
    job_offer_id?: SortOrder;
    freelancer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_applicationMaxOrderByAggregateInput = {
    id?: SortOrder;
    cover_letter?: SortOrder;
    resume?: SortOrder;
    status?: SortOrder;
    job_offer_id?: SortOrder;
    freelancer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_applicationMinOrderByAggregateInput = {
    id?: SortOrder;
    cover_letter?: SortOrder;
    resume?: SortOrder;
    status?: SortOrder;
    job_offer_id?: SortOrder;
    freelancer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type Job_applicationListRelationFilter = {
    every?: job_applicationWhereInput;
    some?: job_applicationWhereInput;
    none?: job_applicationWhereInput;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type job_applicationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type job_offerCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    salary?: SortOrder;
    location?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_offerAvgOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type job_offerMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    salary?: SortOrder;
    location?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_offerMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    salary?: SortOrder;
    location?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_offerSumOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type job_offerCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<job_offerCreateWithoutCompanyInput, job_offerUncheckedCreateWithoutCompanyInput>
      | job_offerCreateWithoutCompanyInput[]
      | job_offerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: job_offerCreateOrConnectWithoutCompanyInput | job_offerCreateOrConnectWithoutCompanyInput[];
    createMany?: job_offerCreateManyCompanyInputEnvelope;
    connect?: job_offerWhereUniqueInput | job_offerWhereUniqueInput[];
  };

  export type job_offerUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<job_offerCreateWithoutCompanyInput, job_offerUncheckedCreateWithoutCompanyInput>
      | job_offerCreateWithoutCompanyInput[]
      | job_offerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: job_offerCreateOrConnectWithoutCompanyInput | job_offerCreateOrConnectWithoutCompanyInput[];
    createMany?: job_offerCreateManyCompanyInputEnvelope;
    connect?: job_offerWhereUniqueInput | job_offerWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type job_offerUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<job_offerCreateWithoutCompanyInput, job_offerUncheckedCreateWithoutCompanyInput>
      | job_offerCreateWithoutCompanyInput[]
      | job_offerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: job_offerCreateOrConnectWithoutCompanyInput | job_offerCreateOrConnectWithoutCompanyInput[];
    upsert?: job_offerUpsertWithWhereUniqueWithoutCompanyInput | job_offerUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: job_offerCreateManyCompanyInputEnvelope;
    set?: job_offerWhereUniqueInput | job_offerWhereUniqueInput[];
    disconnect?: job_offerWhereUniqueInput | job_offerWhereUniqueInput[];
    delete?: job_offerWhereUniqueInput | job_offerWhereUniqueInput[];
    connect?: job_offerWhereUniqueInput | job_offerWhereUniqueInput[];
    update?: job_offerUpdateWithWhereUniqueWithoutCompanyInput | job_offerUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: job_offerUpdateManyWithWhereWithoutCompanyInput | job_offerUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: job_offerScalarWhereInput | job_offerScalarWhereInput[];
  };

  export type job_offerUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<job_offerCreateWithoutCompanyInput, job_offerUncheckedCreateWithoutCompanyInput>
      | job_offerCreateWithoutCompanyInput[]
      | job_offerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: job_offerCreateOrConnectWithoutCompanyInput | job_offerCreateOrConnectWithoutCompanyInput[];
    upsert?: job_offerUpsertWithWhereUniqueWithoutCompanyInput | job_offerUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: job_offerCreateManyCompanyInputEnvelope;
    set?: job_offerWhereUniqueInput | job_offerWhereUniqueInput[];
    disconnect?: job_offerWhereUniqueInput | job_offerWhereUniqueInput[];
    delete?: job_offerWhereUniqueInput | job_offerWhereUniqueInput[];
    connect?: job_offerWhereUniqueInput | job_offerWhereUniqueInput[];
    update?: job_offerUpdateWithWhereUniqueWithoutCompanyInput | job_offerUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: job_offerUpdateManyWithWhereWithoutCompanyInput | job_offerUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: job_offerScalarWhereInput | job_offerScalarWhereInput[];
  };

  export type job_applicationCreateNestedOneWithoutContractInput = {
    create?: XOR<job_applicationCreateWithoutContractInput, job_applicationUncheckedCreateWithoutContractInput>;
    connectOrCreate?: job_applicationCreateOrConnectWithoutContractInput;
    connect?: job_applicationWhereUniqueInput;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type job_applicationUpdateOneRequiredWithoutContractNestedInput = {
    create?: XOR<job_applicationCreateWithoutContractInput, job_applicationUncheckedCreateWithoutContractInput>;
    connectOrCreate?: job_applicationCreateOrConnectWithoutContractInput;
    upsert?: job_applicationUpsertWithoutContractInput;
    connect?: job_applicationWhereUniqueInput;
    update?: XOR<
      XOR<job_applicationUpdateToOneWithWhereWithoutContractInput, job_applicationUpdateWithoutContractInput>,
      job_applicationUncheckedUpdateWithoutContractInput
    >;
  };

  export type contractCreateNestedManyWithoutJob_applicationInput = {
    create?:
      | XOR<contractCreateWithoutJob_applicationInput, contractUncheckedCreateWithoutJob_applicationInput>
      | contractCreateWithoutJob_applicationInput[]
      | contractUncheckedCreateWithoutJob_applicationInput[];
    connectOrCreate?:
      | contractCreateOrConnectWithoutJob_applicationInput
      | contractCreateOrConnectWithoutJob_applicationInput[];
    createMany?: contractCreateManyJob_applicationInputEnvelope;
    connect?: contractWhereUniqueInput | contractWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutJob_applicationInput = {
    create?: XOR<userCreateWithoutJob_applicationInput, userUncheckedCreateWithoutJob_applicationInput>;
    connectOrCreate?: userCreateOrConnectWithoutJob_applicationInput;
    connect?: userWhereUniqueInput;
  };

  export type job_offerCreateNestedOneWithoutJob_applicationInput = {
    create?: XOR<job_offerCreateWithoutJob_applicationInput, job_offerUncheckedCreateWithoutJob_applicationInput>;
    connectOrCreate?: job_offerCreateOrConnectWithoutJob_applicationInput;
    connect?: job_offerWhereUniqueInput;
  };

  export type contractUncheckedCreateNestedManyWithoutJob_applicationInput = {
    create?:
      | XOR<contractCreateWithoutJob_applicationInput, contractUncheckedCreateWithoutJob_applicationInput>
      | contractCreateWithoutJob_applicationInput[]
      | contractUncheckedCreateWithoutJob_applicationInput[];
    connectOrCreate?:
      | contractCreateOrConnectWithoutJob_applicationInput
      | contractCreateOrConnectWithoutJob_applicationInput[];
    createMany?: contractCreateManyJob_applicationInputEnvelope;
    connect?: contractWhereUniqueInput | contractWhereUniqueInput[];
  };

  export type contractUpdateManyWithoutJob_applicationNestedInput = {
    create?:
      | XOR<contractCreateWithoutJob_applicationInput, contractUncheckedCreateWithoutJob_applicationInput>
      | contractCreateWithoutJob_applicationInput[]
      | contractUncheckedCreateWithoutJob_applicationInput[];
    connectOrCreate?:
      | contractCreateOrConnectWithoutJob_applicationInput
      | contractCreateOrConnectWithoutJob_applicationInput[];
    upsert?:
      | contractUpsertWithWhereUniqueWithoutJob_applicationInput
      | contractUpsertWithWhereUniqueWithoutJob_applicationInput[];
    createMany?: contractCreateManyJob_applicationInputEnvelope;
    set?: contractWhereUniqueInput | contractWhereUniqueInput[];
    disconnect?: contractWhereUniqueInput | contractWhereUniqueInput[];
    delete?: contractWhereUniqueInput | contractWhereUniqueInput[];
    connect?: contractWhereUniqueInput | contractWhereUniqueInput[];
    update?:
      | contractUpdateWithWhereUniqueWithoutJob_applicationInput
      | contractUpdateWithWhereUniqueWithoutJob_applicationInput[];
    updateMany?:
      | contractUpdateManyWithWhereWithoutJob_applicationInput
      | contractUpdateManyWithWhereWithoutJob_applicationInput[];
    deleteMany?: contractScalarWhereInput | contractScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutJob_applicationNestedInput = {
    create?: XOR<userCreateWithoutJob_applicationInput, userUncheckedCreateWithoutJob_applicationInput>;
    connectOrCreate?: userCreateOrConnectWithoutJob_applicationInput;
    upsert?: userUpsertWithoutJob_applicationInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutJob_applicationInput, userUpdateWithoutJob_applicationInput>,
      userUncheckedUpdateWithoutJob_applicationInput
    >;
  };

  export type job_offerUpdateOneRequiredWithoutJob_applicationNestedInput = {
    create?: XOR<job_offerCreateWithoutJob_applicationInput, job_offerUncheckedCreateWithoutJob_applicationInput>;
    connectOrCreate?: job_offerCreateOrConnectWithoutJob_applicationInput;
    upsert?: job_offerUpsertWithoutJob_applicationInput;
    connect?: job_offerWhereUniqueInput;
    update?: XOR<
      XOR<job_offerUpdateToOneWithWhereWithoutJob_applicationInput, job_offerUpdateWithoutJob_applicationInput>,
      job_offerUncheckedUpdateWithoutJob_applicationInput
    >;
  };

  export type contractUncheckedUpdateManyWithoutJob_applicationNestedInput = {
    create?:
      | XOR<contractCreateWithoutJob_applicationInput, contractUncheckedCreateWithoutJob_applicationInput>
      | contractCreateWithoutJob_applicationInput[]
      | contractUncheckedCreateWithoutJob_applicationInput[];
    connectOrCreate?:
      | contractCreateOrConnectWithoutJob_applicationInput
      | contractCreateOrConnectWithoutJob_applicationInput[];
    upsert?:
      | contractUpsertWithWhereUniqueWithoutJob_applicationInput
      | contractUpsertWithWhereUniqueWithoutJob_applicationInput[];
    createMany?: contractCreateManyJob_applicationInputEnvelope;
    set?: contractWhereUniqueInput | contractWhereUniqueInput[];
    disconnect?: contractWhereUniqueInput | contractWhereUniqueInput[];
    delete?: contractWhereUniqueInput | contractWhereUniqueInput[];
    connect?: contractWhereUniqueInput | contractWhereUniqueInput[];
    update?:
      | contractUpdateWithWhereUniqueWithoutJob_applicationInput
      | contractUpdateWithWhereUniqueWithoutJob_applicationInput[];
    updateMany?:
      | contractUpdateManyWithWhereWithoutJob_applicationInput
      | contractUpdateManyWithWhereWithoutJob_applicationInput[];
    deleteMany?: contractScalarWhereInput | contractScalarWhereInput[];
  };

  export type job_applicationCreateNestedManyWithoutJob_offerInput = {
    create?:
      | XOR<job_applicationCreateWithoutJob_offerInput, job_applicationUncheckedCreateWithoutJob_offerInput>
      | job_applicationCreateWithoutJob_offerInput[]
      | job_applicationUncheckedCreateWithoutJob_offerInput[];
    connectOrCreate?:
      | job_applicationCreateOrConnectWithoutJob_offerInput
      | job_applicationCreateOrConnectWithoutJob_offerInput[];
    createMany?: job_applicationCreateManyJob_offerInputEnvelope;
    connect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
  };

  export type companyCreateNestedOneWithoutJob_offerInput = {
    create?: XOR<companyCreateWithoutJob_offerInput, companyUncheckedCreateWithoutJob_offerInput>;
    connectOrCreate?: companyCreateOrConnectWithoutJob_offerInput;
    connect?: companyWhereUniqueInput;
  };

  export type job_applicationUncheckedCreateNestedManyWithoutJob_offerInput = {
    create?:
      | XOR<job_applicationCreateWithoutJob_offerInput, job_applicationUncheckedCreateWithoutJob_offerInput>
      | job_applicationCreateWithoutJob_offerInput[]
      | job_applicationUncheckedCreateWithoutJob_offerInput[];
    connectOrCreate?:
      | job_applicationCreateOrConnectWithoutJob_offerInput
      | job_applicationCreateOrConnectWithoutJob_offerInput[];
    createMany?: job_applicationCreateManyJob_offerInputEnvelope;
    connect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type job_applicationUpdateManyWithoutJob_offerNestedInput = {
    create?:
      | XOR<job_applicationCreateWithoutJob_offerInput, job_applicationUncheckedCreateWithoutJob_offerInput>
      | job_applicationCreateWithoutJob_offerInput[]
      | job_applicationUncheckedCreateWithoutJob_offerInput[];
    connectOrCreate?:
      | job_applicationCreateOrConnectWithoutJob_offerInput
      | job_applicationCreateOrConnectWithoutJob_offerInput[];
    upsert?:
      | job_applicationUpsertWithWhereUniqueWithoutJob_offerInput
      | job_applicationUpsertWithWhereUniqueWithoutJob_offerInput[];
    createMany?: job_applicationCreateManyJob_offerInputEnvelope;
    set?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    disconnect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    delete?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    connect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    update?:
      | job_applicationUpdateWithWhereUniqueWithoutJob_offerInput
      | job_applicationUpdateWithWhereUniqueWithoutJob_offerInput[];
    updateMany?:
      | job_applicationUpdateManyWithWhereWithoutJob_offerInput
      | job_applicationUpdateManyWithWhereWithoutJob_offerInput[];
    deleteMany?: job_applicationScalarWhereInput | job_applicationScalarWhereInput[];
  };

  export type companyUpdateOneRequiredWithoutJob_offerNestedInput = {
    create?: XOR<companyCreateWithoutJob_offerInput, companyUncheckedCreateWithoutJob_offerInput>;
    connectOrCreate?: companyCreateOrConnectWithoutJob_offerInput;
    upsert?: companyUpsertWithoutJob_offerInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutJob_offerInput, companyUpdateWithoutJob_offerInput>,
      companyUncheckedUpdateWithoutJob_offerInput
    >;
  };

  export type job_applicationUncheckedUpdateManyWithoutJob_offerNestedInput = {
    create?:
      | XOR<job_applicationCreateWithoutJob_offerInput, job_applicationUncheckedCreateWithoutJob_offerInput>
      | job_applicationCreateWithoutJob_offerInput[]
      | job_applicationUncheckedCreateWithoutJob_offerInput[];
    connectOrCreate?:
      | job_applicationCreateOrConnectWithoutJob_offerInput
      | job_applicationCreateOrConnectWithoutJob_offerInput[];
    upsert?:
      | job_applicationUpsertWithWhereUniqueWithoutJob_offerInput
      | job_applicationUpsertWithWhereUniqueWithoutJob_offerInput[];
    createMany?: job_applicationCreateManyJob_offerInputEnvelope;
    set?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    disconnect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    delete?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    connect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    update?:
      | job_applicationUpdateWithWhereUniqueWithoutJob_offerInput
      | job_applicationUpdateWithWhereUniqueWithoutJob_offerInput[];
    updateMany?:
      | job_applicationUpdateManyWithWhereWithoutJob_offerInput
      | job_applicationUpdateManyWithWhereWithoutJob_offerInput[];
    deleteMany?: job_applicationScalarWhereInput | job_applicationScalarWhereInput[];
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type job_applicationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<job_applicationCreateWithoutUserInput, job_applicationUncheckedCreateWithoutUserInput>
      | job_applicationCreateWithoutUserInput[]
      | job_applicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: job_applicationCreateOrConnectWithoutUserInput | job_applicationCreateOrConnectWithoutUserInput[];
    createMany?: job_applicationCreateManyUserInputEnvelope;
    connect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type job_applicationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<job_applicationCreateWithoutUserInput, job_applicationUncheckedCreateWithoutUserInput>
      | job_applicationCreateWithoutUserInput[]
      | job_applicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: job_applicationCreateOrConnectWithoutUserInput | job_applicationCreateOrConnectWithoutUserInput[];
    createMany?: job_applicationCreateManyUserInputEnvelope;
    connect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type job_applicationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<job_applicationCreateWithoutUserInput, job_applicationUncheckedCreateWithoutUserInput>
      | job_applicationCreateWithoutUserInput[]
      | job_applicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: job_applicationCreateOrConnectWithoutUserInput | job_applicationCreateOrConnectWithoutUserInput[];
    upsert?:
      | job_applicationUpsertWithWhereUniqueWithoutUserInput
      | job_applicationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: job_applicationCreateManyUserInputEnvelope;
    set?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    disconnect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    delete?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    connect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    update?:
      | job_applicationUpdateWithWhereUniqueWithoutUserInput
      | job_applicationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | job_applicationUpdateManyWithWhereWithoutUserInput
      | job_applicationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: job_applicationScalarWhereInput | job_applicationScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type job_applicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<job_applicationCreateWithoutUserInput, job_applicationUncheckedCreateWithoutUserInput>
      | job_applicationCreateWithoutUserInput[]
      | job_applicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: job_applicationCreateOrConnectWithoutUserInput | job_applicationCreateOrConnectWithoutUserInput[];
    upsert?:
      | job_applicationUpsertWithWhereUniqueWithoutUserInput
      | job_applicationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: job_applicationCreateManyUserInputEnvelope;
    set?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    disconnect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    delete?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    connect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    update?:
      | job_applicationUpdateWithWhereUniqueWithoutUserInput
      | job_applicationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | job_applicationUpdateManyWithWhereWithoutUserInput
      | job_applicationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: job_applicationScalarWhereInput | job_applicationScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_application?: job_applicationCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_application?: job_applicationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type job_offerCreateWithoutCompanyInput = {
    id?: string;
    title: string;
    description: string;
    salary?: number | null;
    location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_application?: job_applicationCreateNestedManyWithoutJob_offerInput;
  };

  export type job_offerUncheckedCreateWithoutCompanyInput = {
    id?: string;
    title: string;
    description: string;
    salary?: number | null;
    location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_application?: job_applicationUncheckedCreateNestedManyWithoutJob_offerInput;
  };

  export type job_offerCreateOrConnectWithoutCompanyInput = {
    where: job_offerWhereUniqueInput;
    create: XOR<job_offerCreateWithoutCompanyInput, job_offerUncheckedCreateWithoutCompanyInput>;
  };

  export type job_offerCreateManyCompanyInputEnvelope = {
    data: job_offerCreateManyCompanyInput | job_offerCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_application?: job_applicationUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_application?: job_applicationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type job_offerUpsertWithWhereUniqueWithoutCompanyInput = {
    where: job_offerWhereUniqueInput;
    update: XOR<job_offerUpdateWithoutCompanyInput, job_offerUncheckedUpdateWithoutCompanyInput>;
    create: XOR<job_offerCreateWithoutCompanyInput, job_offerUncheckedCreateWithoutCompanyInput>;
  };

  export type job_offerUpdateWithWhereUniqueWithoutCompanyInput = {
    where: job_offerWhereUniqueInput;
    data: XOR<job_offerUpdateWithoutCompanyInput, job_offerUncheckedUpdateWithoutCompanyInput>;
  };

  export type job_offerUpdateManyWithWhereWithoutCompanyInput = {
    where: job_offerScalarWhereInput;
    data: XOR<job_offerUpdateManyMutationInput, job_offerUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type job_offerScalarWhereInput = {
    AND?: job_offerScalarWhereInput | job_offerScalarWhereInput[];
    OR?: job_offerScalarWhereInput[];
    NOT?: job_offerScalarWhereInput | job_offerScalarWhereInput[];
    id?: UuidFilter<'job_offer'> | string;
    title?: StringFilter<'job_offer'> | string;
    description?: StringFilter<'job_offer'> | string;
    salary?: IntNullableFilter<'job_offer'> | number | null;
    location?: StringNullableFilter<'job_offer'> | string | null;
    company_id?: UuidFilter<'job_offer'> | string;
    created_at?: DateTimeFilter<'job_offer'> | Date | string;
    updated_at?: DateTimeFilter<'job_offer'> | Date | string;
  };

  export type job_applicationCreateWithoutContractInput = {
    id?: string;
    cover_letter: string;
    resume: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutJob_applicationInput;
    job_offer: job_offerCreateNestedOneWithoutJob_applicationInput;
  };

  export type job_applicationUncheckedCreateWithoutContractInput = {
    id?: string;
    cover_letter: string;
    resume: string;
    status: string;
    job_offer_id: string;
    freelancer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_applicationCreateOrConnectWithoutContractInput = {
    where: job_applicationWhereUniqueInput;
    create: XOR<job_applicationCreateWithoutContractInput, job_applicationUncheckedCreateWithoutContractInput>;
  };

  export type job_applicationUpsertWithoutContractInput = {
    update: XOR<job_applicationUpdateWithoutContractInput, job_applicationUncheckedUpdateWithoutContractInput>;
    create: XOR<job_applicationCreateWithoutContractInput, job_applicationUncheckedCreateWithoutContractInput>;
    where?: job_applicationWhereInput;
  };

  export type job_applicationUpdateToOneWithWhereWithoutContractInput = {
    where?: job_applicationWhereInput;
    data: XOR<job_applicationUpdateWithoutContractInput, job_applicationUncheckedUpdateWithoutContractInput>;
  };

  export type job_applicationUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string;
    cover_letter?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutJob_applicationNestedInput;
    job_offer?: job_offerUpdateOneRequiredWithoutJob_applicationNestedInput;
  };

  export type job_applicationUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string;
    cover_letter?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    job_offer_id?: StringFieldUpdateOperationsInput | string;
    freelancer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type contractCreateWithoutJob_applicationInput = {
    id?: string;
    start_date: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type contractUncheckedCreateWithoutJob_applicationInput = {
    id?: string;
    start_date: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type contractCreateOrConnectWithoutJob_applicationInput = {
    where: contractWhereUniqueInput;
    create: XOR<contractCreateWithoutJob_applicationInput, contractUncheckedCreateWithoutJob_applicationInput>;
  };

  export type contractCreateManyJob_applicationInputEnvelope = {
    data: contractCreateManyJob_applicationInput | contractCreateManyJob_applicationInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutJob_applicationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutJob_applicationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutJob_applicationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutJob_applicationInput, userUncheckedCreateWithoutJob_applicationInput>;
  };

  export type job_offerCreateWithoutJob_applicationInput = {
    id?: string;
    title: string;
    description: string;
    salary?: number | null;
    location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutJob_offerInput;
  };

  export type job_offerUncheckedCreateWithoutJob_applicationInput = {
    id?: string;
    title: string;
    description: string;
    salary?: number | null;
    location?: string | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_offerCreateOrConnectWithoutJob_applicationInput = {
    where: job_offerWhereUniqueInput;
    create: XOR<job_offerCreateWithoutJob_applicationInput, job_offerUncheckedCreateWithoutJob_applicationInput>;
  };

  export type contractUpsertWithWhereUniqueWithoutJob_applicationInput = {
    where: contractWhereUniqueInput;
    update: XOR<contractUpdateWithoutJob_applicationInput, contractUncheckedUpdateWithoutJob_applicationInput>;
    create: XOR<contractCreateWithoutJob_applicationInput, contractUncheckedCreateWithoutJob_applicationInput>;
  };

  export type contractUpdateWithWhereUniqueWithoutJob_applicationInput = {
    where: contractWhereUniqueInput;
    data: XOR<contractUpdateWithoutJob_applicationInput, contractUncheckedUpdateWithoutJob_applicationInput>;
  };

  export type contractUpdateManyWithWhereWithoutJob_applicationInput = {
    where: contractScalarWhereInput;
    data: XOR<contractUpdateManyMutationInput, contractUncheckedUpdateManyWithoutJob_applicationInput>;
  };

  export type contractScalarWhereInput = {
    AND?: contractScalarWhereInput | contractScalarWhereInput[];
    OR?: contractScalarWhereInput[];
    NOT?: contractScalarWhereInput | contractScalarWhereInput[];
    id?: UuidFilter<'contract'> | string;
    start_date?: DateTimeFilter<'contract'> | Date | string;
    end_date?: DateTimeNullableFilter<'contract'> | Date | string | null;
    job_application_id?: UuidFilter<'contract'> | string;
    created_at?: DateTimeFilter<'contract'> | Date | string;
    updated_at?: DateTimeFilter<'contract'> | Date | string;
  };

  export type userUpsertWithoutJob_applicationInput = {
    update: XOR<userUpdateWithoutJob_applicationInput, userUncheckedUpdateWithoutJob_applicationInput>;
    create: XOR<userCreateWithoutJob_applicationInput, userUncheckedCreateWithoutJob_applicationInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutJob_applicationInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutJob_applicationInput, userUncheckedUpdateWithoutJob_applicationInput>;
  };

  export type userUpdateWithoutJob_applicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutJob_applicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type job_offerUpsertWithoutJob_applicationInput = {
    update: XOR<job_offerUpdateWithoutJob_applicationInput, job_offerUncheckedUpdateWithoutJob_applicationInput>;
    create: XOR<job_offerCreateWithoutJob_applicationInput, job_offerUncheckedCreateWithoutJob_applicationInput>;
    where?: job_offerWhereInput;
  };

  export type job_offerUpdateToOneWithWhereWithoutJob_applicationInput = {
    where?: job_offerWhereInput;
    data: XOR<job_offerUpdateWithoutJob_applicationInput, job_offerUncheckedUpdateWithoutJob_applicationInput>;
  };

  export type job_offerUpdateWithoutJob_applicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutJob_offerNestedInput;
  };

  export type job_offerUncheckedUpdateWithoutJob_applicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_applicationCreateWithoutJob_offerInput = {
    id?: string;
    cover_letter: string;
    resume: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    contract?: contractCreateNestedManyWithoutJob_applicationInput;
    user: userCreateNestedOneWithoutJob_applicationInput;
  };

  export type job_applicationUncheckedCreateWithoutJob_offerInput = {
    id?: string;
    cover_letter: string;
    resume: string;
    status: string;
    freelancer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    contract?: contractUncheckedCreateNestedManyWithoutJob_applicationInput;
  };

  export type job_applicationCreateOrConnectWithoutJob_offerInput = {
    where: job_applicationWhereUniqueInput;
    create: XOR<job_applicationCreateWithoutJob_offerInput, job_applicationUncheckedCreateWithoutJob_offerInput>;
  };

  export type job_applicationCreateManyJob_offerInputEnvelope = {
    data: job_applicationCreateManyJob_offerInput | job_applicationCreateManyJob_offerInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutJob_offerInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutJob_offerInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutJob_offerInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutJob_offerInput, companyUncheckedCreateWithoutJob_offerInput>;
  };

  export type job_applicationUpsertWithWhereUniqueWithoutJob_offerInput = {
    where: job_applicationWhereUniqueInput;
    update: XOR<job_applicationUpdateWithoutJob_offerInput, job_applicationUncheckedUpdateWithoutJob_offerInput>;
    create: XOR<job_applicationCreateWithoutJob_offerInput, job_applicationUncheckedCreateWithoutJob_offerInput>;
  };

  export type job_applicationUpdateWithWhereUniqueWithoutJob_offerInput = {
    where: job_applicationWhereUniqueInput;
    data: XOR<job_applicationUpdateWithoutJob_offerInput, job_applicationUncheckedUpdateWithoutJob_offerInput>;
  };

  export type job_applicationUpdateManyWithWhereWithoutJob_offerInput = {
    where: job_applicationScalarWhereInput;
    data: XOR<job_applicationUpdateManyMutationInput, job_applicationUncheckedUpdateManyWithoutJob_offerInput>;
  };

  export type job_applicationScalarWhereInput = {
    AND?: job_applicationScalarWhereInput | job_applicationScalarWhereInput[];
    OR?: job_applicationScalarWhereInput[];
    NOT?: job_applicationScalarWhereInput | job_applicationScalarWhereInput[];
    id?: UuidFilter<'job_application'> | string;
    cover_letter?: StringFilter<'job_application'> | string;
    resume?: StringFilter<'job_application'> | string;
    status?: StringFilter<'job_application'> | string;
    job_offer_id?: UuidFilter<'job_application'> | string;
    freelancer_id?: UuidFilter<'job_application'> | string;
    created_at?: DateTimeFilter<'job_application'> | Date | string;
    updated_at?: DateTimeFilter<'job_application'> | Date | string;
  };

  export type companyUpsertWithoutJob_offerInput = {
    update: XOR<companyUpdateWithoutJob_offerInput, companyUncheckedUpdateWithoutJob_offerInput>;
    create: XOR<companyCreateWithoutJob_offerInput, companyUncheckedCreateWithoutJob_offerInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutJob_offerInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutJob_offerInput, companyUncheckedUpdateWithoutJob_offerInput>;
  };

  export type companyUpdateWithoutJob_offerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutJob_offerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    job_offer?: job_offerCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    job_offer?: job_offerUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type job_applicationCreateWithoutUserInput = {
    id?: string;
    cover_letter: string;
    resume: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    contract?: contractCreateNestedManyWithoutJob_applicationInput;
    job_offer: job_offerCreateNestedOneWithoutJob_applicationInput;
  };

  export type job_applicationUncheckedCreateWithoutUserInput = {
    id?: string;
    cover_letter: string;
    resume: string;
    status: string;
    job_offer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    contract?: contractUncheckedCreateNestedManyWithoutJob_applicationInput;
  };

  export type job_applicationCreateOrConnectWithoutUserInput = {
    where: job_applicationWhereUniqueInput;
    create: XOR<job_applicationCreateWithoutUserInput, job_applicationUncheckedCreateWithoutUserInput>;
  };

  export type job_applicationCreateManyUserInputEnvelope = {
    data: job_applicationCreateManyUserInput | job_applicationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type job_applicationUpsertWithWhereUniqueWithoutUserInput = {
    where: job_applicationWhereUniqueInput;
    update: XOR<job_applicationUpdateWithoutUserInput, job_applicationUncheckedUpdateWithoutUserInput>;
    create: XOR<job_applicationCreateWithoutUserInput, job_applicationUncheckedCreateWithoutUserInput>;
  };

  export type job_applicationUpdateWithWhereUniqueWithoutUserInput = {
    where: job_applicationWhereUniqueInput;
    data: XOR<job_applicationUpdateWithoutUserInput, job_applicationUncheckedUpdateWithoutUserInput>;
  };

  export type job_applicationUpdateManyWithWhereWithoutUserInput = {
    where: job_applicationScalarWhereInput;
    data: XOR<job_applicationUpdateManyMutationInput, job_applicationUncheckedUpdateManyWithoutUserInput>;
  };

  export type job_offerCreateManyCompanyInput = {
    id?: string;
    title: string;
    description: string;
    salary?: number | null;
    location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_offerUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_application?: job_applicationUpdateManyWithoutJob_offerNestedInput;
  };

  export type job_offerUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_application?: job_applicationUncheckedUpdateManyWithoutJob_offerNestedInput;
  };

  export type job_offerUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type contractCreateManyJob_applicationInput = {
    id?: string;
    start_date: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type contractUpdateWithoutJob_applicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type contractUncheckedUpdateWithoutJob_applicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type contractUncheckedUpdateManyWithoutJob_applicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_applicationCreateManyJob_offerInput = {
    id?: string;
    cover_letter: string;
    resume: string;
    status: string;
    freelancer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_applicationUpdateWithoutJob_offerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    cover_letter?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    contract?: contractUpdateManyWithoutJob_applicationNestedInput;
    user?: userUpdateOneRequiredWithoutJob_applicationNestedInput;
  };

  export type job_applicationUncheckedUpdateWithoutJob_offerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    cover_letter?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    freelancer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    contract?: contractUncheckedUpdateManyWithoutJob_applicationNestedInput;
  };

  export type job_applicationUncheckedUpdateManyWithoutJob_offerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    cover_letter?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    freelancer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type job_applicationCreateManyUserInput = {
    id?: string;
    cover_letter: string;
    resume: string;
    status: string;
    job_offer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    job_offer?: job_offerUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    job_offer?: job_offerUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type job_applicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    cover_letter?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    contract?: contractUpdateManyWithoutJob_applicationNestedInput;
    job_offer?: job_offerUpdateOneRequiredWithoutJob_applicationNestedInput;
  };

  export type job_applicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    cover_letter?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    job_offer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    contract?: contractUncheckedUpdateManyWithoutJob_applicationNestedInput;
  };

  export type job_applicationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    cover_letter?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    job_offer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Job_applicationCountOutputTypeDefaultArgs instead
   */
  export type Job_applicationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Job_applicationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Job_offerCountOutputTypeDefaultArgs instead
   */
  export type Job_offerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Job_offerCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use contractDefaultArgs instead
   */
  export type contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    contractDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use job_applicationDefaultArgs instead
   */
  export type job_applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    job_applicationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use job_offerDefaultArgs instead
   */
  export type job_offerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    job_offerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
