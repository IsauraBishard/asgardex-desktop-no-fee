// tslint:disable
/**
 * Midgard Public API
 * The Midgard Public API queries THORChain and any chains linked via the Bifröst and prepares information about the network to be readily available for public users. The API parses transaction event data from THORChain and stores them in a time-series database to make time-dependent queries easy. Midgard does not hold critical information. To interact with BEPSwap and Asgardex, users should query THORChain directly.
 *
 * The version of the OpenAPI document: 2.0.0-alpha.3
 * Contact: devs@thorchain.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * pool earnings data during the time interval
 * @export
 * @interface EarningsHistoryItemPool
 */
export interface EarningsHistoryItemPool {
    /**
     * Int64 (10^8), liquidity fees collected in the pool\'s asset
     * @type {string}
     * @memberof EarningsHistoryItemPool
     */
    assetLiquidityFees: string;
    /**
     * Int64 (10^8), total earnings in RUNE (totalLiquidityFees + rewards)
     * @type {string}
     * @memberof EarningsHistoryItemPool
     */
    earnings: string;
    /**
     * asset for the given pool
     * @type {string}
     * @memberof EarningsHistoryItemPool
     */
    pool: string;
    /**
     * Int64 (10^8), RUNE amount sent to (positive) or taken from (negative) the pool as a result of balancing it\'s share of system income each block 
     * @type {string}
     * @memberof EarningsHistoryItemPool
     */
    rewards: string;
    /**
     * Int64 (10^8), liquidity fees collected in RUNE
     * @type {string}
     * @memberof EarningsHistoryItemPool
     */
    runeLiquidityFees: string;
    /**
     * Int64 (10^8), total liquidity fees (assetFees + runeFees) collected, shown in RUNE
     * @type {string}
     * @memberof EarningsHistoryItemPool
     */
    totalLiquidityFeesRune: string;
}
