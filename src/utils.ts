export async function isXrModeSupported(mode: XRSessionMode): Promise<boolean> {
  try {
    if (navigator.xr === undefined) {
      return false;
    }
    return await navigator.xr!.isSessionSupported(mode);
  } catch (err) {
    console.error(err);
    return false;
  }
}
