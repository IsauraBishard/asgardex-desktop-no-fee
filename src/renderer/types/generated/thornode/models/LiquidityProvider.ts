// tslint:disable
/**
 * Thornode API
 * Thornode REST API.
 *
 * The version of the OpenAPI document: 1.101.0
 * Contact: devs@thorchain.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface LiquidityProvider
 */
export interface LiquidityProvider {
    /**
     * @type {string}
     * @memberof LiquidityProvider
     */
    asset: string;
    /**
     * @type {string}
     * @memberof LiquidityProvider
     */
    rune_address?: string;
    /**
     * @type {string}
     * @memberof LiquidityProvider
     */
    asset_address?: string;
    /**
     * @type {number}
     * @memberof LiquidityProvider
     */
    last_add_height?: number;
    /**
     * @type {number}
     * @memberof LiquidityProvider
     */
    last_withdraw_height?: number;
    /**
     * @type {string}
     * @memberof LiquidityProvider
     */
    units: string;
    /**
     * @type {string}
     * @memberof LiquidityProvider
     */
    pending_rune: string;
    /**
     * @type {string}
     * @memberof LiquidityProvider
     */
    pending_asset: string;
    /**
     * @type {string}
     * @memberof LiquidityProvider
     */
    pending_tx_id?: string;
    /**
     * @type {string}
     * @memberof LiquidityProvider
     */
    rune_deposit_value: string;
    /**
     * @type {string}
     * @memberof LiquidityProvider
     */
    asset_deposit_value: string;
    /**
     * @type {string}
     * @memberof LiquidityProvider
     */
    rune_redeem_value: string;
    /**
     * @type {string}
     * @memberof LiquidityProvider
     */
    asset_redeem_value: string;
    /**
     * @type {string}
     * @memberof LiquidityProvider
     */
    luvi_deposit_value: string;
    /**
     * @type {string}
     * @memberof LiquidityProvider
     */
    luvi_redeem_value: string;
    /**
     * @type {string}
     * @memberof LiquidityProvider
     */
    luvi_growth_pct: string;
}
