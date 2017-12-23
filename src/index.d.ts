import { DeviceOrientation } from "tns-core-modules/ui/enums";

/**
 * Type for the OrientationAppliers used within this plugin.
 */
export type OrientationApplierCallback = (currentOrientation: DeviceOrientation) => void;

/**
 * Adds a new OrientationApplier to be called whenever orientation needs to be applied.
 * @param newOrientationApplier [OrientationApplierCallback] - The OrientationApplier that you would like to add.
 */
export function addOrientationApplier(newOrientationApplier: OrientationApplierCallback): void;

/**
 * Removes an OrientationApplier from the list of OrientationAppliers to be called whenever orientation needs to be applied.
 * @param orientationApplier [OrientationApplierCallback] - The OrientationApplier that you would like to remove.
 */
export function removeOrientationApplier(orientationApplier: OrientationApplierCallback): void

/**
 * Get the current orientation of the device.
 * @param sensors [boolean] - If true, will return you sensor values on android verses screen size calculation.
 */
export function getOrientation(sensors?: boolean): DeviceOrientation;

/**
 * Sets app window to (or from) full screen mode.
 * @param shouldBeFullScreen [boolean] - If true, will make app full screen. If false, will make app not full screen.
 */
export function setFullScreen(shouldBeFullScreen: boolean): void;

/**
 * Set the orientation of the device.
 * @param direction ["portrait" | "landscape" | "landscapeleft" | "landscaperight" | enum DeviceOrientation] - The orientation/direction to set the device.
 * @param animation [boolean] - *** iOS Only *** - this will disable the orientation change animation.
 */
export function setOrientation(
  direction?:
    | "portrait"
    | "landscape"
    | "landscapeleft"
    | "landscaperight"
    | DeviceOrientation,
  animation?: boolean
): void;

/**
 * This will enable automatic orientation support.
 */
export function enableRotation(): void;

/**
 * This will disable automatic orientation support and lock it to the current orientation.
 */
export function disableRotation(): void;
