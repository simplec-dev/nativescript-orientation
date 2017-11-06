import { DeviceOrientation } from "tns-core-modules/ui/enums";

/**
 * Get the current orientation of the device.
 * @param sensors [boolean] - If true, will return you sensor values on android verses screen size calculation.
 */
export function getOrientation(sensors?: boolean): DeviceOrientation;

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
  animation: boolean
): void;

/**
 * This will enable automatic orientation support.
 */
export function enableRotation(): void;

/**
 * This will disable automatic orientation support and lock it to the current orientation.
 */
export function disableRotation(): void;
