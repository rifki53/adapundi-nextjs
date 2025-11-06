// utils/isMobile.ts

/**
 * Opsi untuk fungsi deteksi mobile.
 * @property {string} [ua] - User agent string kustom untuk pengujian.
 */
interface MobileDetectionOptions {
  ua?: string;
}

/**
 * Mengecek apakah perangkat adalah iOS (iPhone, iPad, iPod).
 * Fungsi ini aman untuk SSR (Server-Side Rendering) karena akan selalu 
 * mengembalikan `false` jika dijalankan di server.
 * 
 * @param {string} [customUA] - User agent string kustom.
 * @returns {boolean} - True jika perangkat adalah iOS.
 */
export function isIOS(customUA?: string): boolean {
  // Guard Clause: Hanya jalankan di browser, bukan di server.
  if (typeof navigator === 'undefined') {
    return false;
  }

  try {
    const ua = (customUA || navigator.userAgent).toLowerCase();
    const isIPhone = /iphone/.test(ua);
    
    // Pengecekan platform untuk mencakup iPad yang mungkin menyamar sebagai Mac
    const isIOSPlatform = ["iPhone Simulator", "iPhone", "iPod", "iPad"].includes(navigator.platform);

    return isIPhone || isIOSPlatform;
  } catch (error) {
    console.error("Error in iOS detection:", error);
    return false;
  }
}

/**
 * Mengecek apakah perangkat adalah Android.
 * Fungsi ini aman untuk SSR dan akan mengembalikan `false` jika dijalankan di server.
 * 
 * @param {string} [customUA] - User agent string kustom.
 * @returns {boolean} - True jika perangkat adalah Android.
 */
export function isAndroid(customUA?: string): boolean {
  // Guard Clause: Hanya jalankan di browser.
  if (typeof navigator === 'undefined') {
    return false;
  }

  try {
    const ua = (customUA || navigator.userAgent).toLowerCase();
    return /android/.test(ua);
  } catch (error) {
    console.error("Error in Android detection:", error);
    return false;
  }
}

/**
 * Mengecek apakah perangkat adalah perangkat mobile (iOS atau Android).
 * Fungsi ini aman untuk SSR dan akan mengembalikan `false` jika dijalankan di server.
 * 
 * @param {MobileDetectionOptions} [opts] - Opsi, termasuk user agent kustom.
 * @returns {boolean} - True jika perangkat adalah mobile.
 */
export function isMobile(opts: MobileDetectionOptions = {}): boolean {
  // Guard Clause: Hanya jalankan di browser.
  if (typeof navigator === 'undefined') {
    return false;
  }

  try {
    const ua = (opts.ua || navigator.userAgent).toLowerCase();
    
    // Regex yang lebih komprehensif
    const mobileRE = /(iphone|ipod|ipad|android|mobile|phone|tablet)/i;

    // Menggunakan fungsi yang sudah ada untuk konsistensi
    const isIOSDevice = isIOS(ua);
    const isAndroidDevice = isAndroid(ua);

    return mobileRE.test(ua) || isIOSDevice || isAndroidDevice;
  } catch (error) {
    console.error("Error in mobile detection:", error);
    return false;
  }
}
