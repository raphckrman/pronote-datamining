IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.GImage = void 0;
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetStyle_1 = require('ObjetStyle');
    const UtilitaireCss_1 = require('UtilitaireCss');
    const GImage = {
      compose(aClass, aLargeur) {
        return (
          '<div' +
          (aClass ? ' class="' + aClass + '"' : '') +
          ' style="margin-left:auto; margin-right:auto; width:' +
          (aLargeur ? aLargeur + 'px' : '100%;') +
          '">&nbsp;</div>'
        );
      },
      composeImage(aClass, aLargeur, aPourImpression = false) {
        if (!aClass) {
          IE.log.addLog('ObjetImage.composeImage : aClass non definie');
          return '';
        }
        if (aPourImpression) {
          const lRegleCss = '.' + aClass;
          const lUrl =
            UtilitaireCss_1.UtilitaireCss.extraireUrlReglesCss(lRegleCss);
          if (!lUrl) {
            IE.log.addLog(
              'ObjetImage.composeImage : lUrl non trouvé dans la regle Css : ' +
                aClass,
            );
            return '';
          }
          let lPosition =
            UtilitaireCss_1.UtilitaireCss.chercherAttributReglesCss(
              lRegleCss,
              'position',
            );
          const lHeight =
            UtilitaireCss_1.UtilitaireCss.chercherAttributReglesCss(
              lRegleCss,
              'height',
            );
          if (!lPosition) {
            lPosition = 'relative';
          }
          let lLargeur = aLargeur;
          if (!lLargeur) {
            lLargeur = parseInt(
              UtilitaireCss_1.UtilitaireCss.chercherAttributReglesCss(
                lRegleCss,
                'width',
              ),
            );
          }
          let lLeft,
            lTop = '0';
          const lBackGroundPosition =
            UtilitaireCss_1.UtilitaireCss.chercherAttributReglesCss(
              lRegleCss,
              'backgroundPosition',
            );
          if (lBackGroundPosition) {
            const lTab = lBackGroundPosition.split(' ');
            if (lTab.length === 2) {
              lLeft = lTab[0];
              lTop = lTab[1];
            }
          } else {
            lLeft = UtilitaireCss_1.UtilitaireCss.chercherAttributReglesCss(
              lRegleCss,
              'left',
            );
            lTop = UtilitaireCss_1.UtilitaireCss.chercherAttributReglesCss(
              lRegleCss,
              'top',
            );
          }
          let lStyle = '';
          if (lPosition) {
            lStyle += 'position:' + lPosition + ';';
          }
          if (lHeight) {
            lStyle += 'height:' + lHeight + ';';
          }
          if (lLeft) {
            lStyle += 'left:' + lLeft + ';';
          }
          if (lTop) {
            lStyle += 'top:' + lTop + ';';
          }
          return (
            '<div style="' +
            ObjetStyle_1.GStyle.composeWidth(lLargeur) +
            'margin-left:auto; margin-right:auto; overflow: hidden">' +
            '<img src="' +
            lUrl +
            '" style="' +
            lStyle +
            '" /></div>'
          );
        } else {
          return (
            '<div class="' +
            aClass +
            '" style="' +
            (aLargeur ? ObjetStyle_1.GStyle.composeWidth(aLargeur) : '') +
            'margin-left:auto; margin-right:auto;">&nbsp;</div>'
          );
        }
      },
      setImage(aId, aClass) {
        ObjetHtml_1.GHtml.setHtml(aId, this.compose(aClass));
      },
    };
    exports.GImage = GImage;
  },
  fn: 'objetimage.js',
});