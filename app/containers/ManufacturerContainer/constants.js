/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CREATE_MANUFACTURER = 'manin/brand/CREATE_MANUFACTURER';
export const VIEW_ALL_MANUFACTURER = 'manin/brand/VIEW_ALL_MANUFACTURER';
export const VIEW_MANUFACTURER_DETAIL = 'manin/brand/VIEW_MANUFACTURER_DETAIL';
export const DELETE_MANUFACTURER = 'manin/brand/DELETE_MANUFACTURER';
