IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireCouleur = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const UtilitaireCouleur = {
      hslDelphiMax: 240,
      couleurToRGB: function (aHex) {
        if (
          !aHex ||
          !aHex.substring ||
          aHex[0] !== '#' ||
          (aHex.length !== 4 && aHex.length < 7)
        ) {
          return { r: 0, g: 0, b: 0 };
        }
        if (aHex.length === 4) {
          const lRGBHex = {
            r: aHex.substring(1, 2),
            g: aHex.substring(2, 3),
            b: aHex.substring(3, 4),
          };
          return {
            r: parseInt(lRGBHex.r + lRGBHex.r, 16),
            g: parseInt(lRGBHex.g + lRGBHex.g, 16),
            b: parseInt(lRGBHex.b + lRGBHex.b, 16),
          };
        }
        return {
          r: parseInt(aHex.substring(1, 3), 16),
          g: parseInt(aHex.substring(3, 5), 16),
          b: parseInt(aHex.substring(5, 7), 16),
        };
      },
      couleurToHSV: function (hex) {
        return this.rgbToHSV(this.couleurToRGB(hex));
      },
      rgbToCouleur: function (aRGB) {
        if (!aRGB) {
          return null;
        }
        let lRGB = null;
        if (typeof aRGB === 'string') {
          const lRegex = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
          const lRGBRegex = lRegex.exec(aRGB);
          if (lRGBRegex) {
            lRGB = {
              r: parseInt(lRGBRegex[1]),
              g: parseInt(lRGBRegex[2]),
              b: parseInt(lRGBRegex[3]),
            };
          }
        } else {
          lRGB = aRGB;
        }
        if (
          !lRGB ||
          isNaN(lRGB.r) ||
          isNaN(lRGB.g) ||
          isNaN(lRGB.b) ||
          lRGB.r < 0 ||
          lRGB.g < 0 ||
          lRGB.b < 0
        ) {
          return null;
        }
        const hex = [
          lRGB.r.toString(16),
          lRGB.g.toString(16),
          lRGB.b.toString(16),
        ];
        $.each(hex, (nr, val) => {
          if (val.length === 1) {
            hex[nr] = '0' + val;
          }
        });
        return '#' + hex.join('');
      },
      rgbToHSV: function (rgb) {
        let rr, gg, bb;
        const r = rgb.r / 255,
          g = rgb.g / 255,
          b = rgb.b / 255;
        let h, s;
        const v = Math.max(r, g, b),
          diff = v - Math.min(r, g, b),
          diffc = function (c) {
            return (v - c) / 6 / diff + 1 / 2;
          };
        if (diff === 0) {
          h = s = 0;
        } else {
          s = diff / v;
          rr = diffc(r);
          gg = diffc(g);
          bb = diffc(b);
          if (r === v) {
            h = bb - gg;
          } else if (g === v) {
            h = 1 / 3 + rr - bb;
          } else if (b === v) {
            h = 2 / 3 + gg - rr;
          }
          if (h < 0) {
            h += 1;
          } else if (h > 1) {
            h -= 1;
          }
        }
        return {
          h: Math.round(h * 360),
          s: Math.round(s * 100),
          l: Math.round(v * 100),
        };
      },
      hsvToCouleur: function (hsl) {
        return this.rgbToCouleur(this.hsvToRGB(hsl));
      },
      hsvToRGB: function (hsl) {
        const rgb = {};
        let h = Math.round(hsl.h);
        const s = Math.round((hsl.s * 255) / 100);
        const v = Math.round((hsl.l * 255) / 100);
        if (s === 0) {
          rgb.r = rgb.g = rgb.b = v;
        } else {
          const t1 = v;
          const t2 = ((255 - s) * v) / 255;
          const t3 = ((t1 - t2) * (h % 60)) / 60;
          if (h === 360) {
            h = 0;
          }
          if (h < 60) {
            rgb.r = t1;
            rgb.b = t2;
            rgb.g = t2 + t3;
          } else if (h < 120) {
            rgb.g = t1;
            rgb.b = t2;
            rgb.r = t1 - t3;
          } else if (h < 180) {
            rgb.g = t1;
            rgb.r = t2;
            rgb.b = t2 + t3;
          } else if (h < 240) {
            rgb.b = t1;
            rgb.r = t2;
            rgb.g = t1 - t3;
          } else if (h < 300) {
            rgb.b = t1;
            rgb.g = t2;
            rgb.r = t2 + t3;
          } else if (h < 360) {
            rgb.r = t1;
            rgb.g = t2;
            rgb.b = t1 - t3;
          } else {
            rgb.r = 0;
            rgb.g = 0;
            rgb.b = 0;
          }
        }
        return {
          r: Math.round(rgb.r),
          g: Math.round(rgb.g),
          b: Math.round(rgb.b),
        };
      },
      hsvToHSLDelphi: function (hsv) {
        const lLuminance = ((200 - hsv.s) * hsv.l) / 200,
          lHSL = {
            h: (hsv.h * this.hslDelphiMax) / 360,
            s: 0,
            l: (lLuminance * this.hslDelphiMax) / 100,
          };
        lHSL.s =
          ((hsv.l > 0
            ? (hsv.s * hsv.l) /
              (lLuminance < 50 ? lLuminance * 2 : 200 - lLuminance * 2)
            : hsv.s) *
            this.hslDelphiMax) /
          100;
        if (isNaN(lHSL.s)) {
          lHSL.s = 0;
        }
        return lHSL;
      },
      hslDelphiToHSV: function (hsl) {
        const lHSV = {
          h: (hsl.h * 360) / this.hslDelphiMax,
          s: (hsl.s * 100) / this.hslDelphiMax,
          l: (hsl.l * 100) / this.hslDelphiMax,
        };
        const t = (lHSV.s * (lHSV.l < 50 ? lHSV.l : 100 - lHSV.l)) / 100;
        lHSV.s = lHSV.l > 0 ? (200 * t) / (lHSV.l + t) : lHSV.s;
        if (isNaN(lHSV.s)) {
          lHSV.s = 0;
        }
        lHSV.l = t + lHSV.l;
        return lHSV;
      },
      getContrastedColor(aColor) {
        const lWhite = '#FFFFFF';
        const lBlack = '#000000';
        if (
          this.contrastRatio(aColor, lWhite) >
          this.contrastRatio(aColor, lBlack)
        ) {
          return lWhite;
        }
        return lBlack;
      },
      contrastRatio(aColor1, aColor2) {
        let ratio =
          (0.05 + this.relativeLum(aColor1)) /
          (0.05 + this.relativeLum(aColor2));
        if (ratio < 1) {
          ratio = 1 / ratio;
        }
        return ratio;
      },
      relativeLum(aColor) {
        let lRGB = null;
        if (MethodesObjet_1.MethodesObjet.isString(aColor)) {
          lRGB = this.couleurToRGB(aColor);
        } else if (aColor && 'r' in aColor) {
          lRGB = aColor;
        }
        if (!lRGB) {
          return 1;
        }
        lRGB.r = (lRGB.r || 0) / 255;
        lRGB.g = (lRGB.g || 0) / 255;
        lRGB.b = (lRGB.b || 0) / 255;
        let transformed = {};
        let x;
        for (x in lRGB) {
          if (lRGB[x] <= 0.04045) {
            transformed[x] = lRGB[x] / 12.92;
          } else {
            transformed[x] = Math.pow((lRGB[x] + 0.055) / 1.055, 2.4);
          }
        }
        let lum =
          transformed.r * 0.2126 +
          transformed.g * 0.7152 +
          transformed.b * 0.0722;
        return lum;
      },
    };
    exports.UtilitaireCouleur = UtilitaireCouleur;
  },
  fn: 'utilitairecouleur.js',
});