IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.LottiePatience = void 0;
    const GUID_1 = require('GUID');
    require('DeclarationLottie');
    class LottiePatience {
      static construire() {
        if (LottiePatience.url) {
          return IE.jsx.str('lottie-player', {
            src: LottiePatience.url,
            class: 'lottie-patience',
            background: 'transparent',
            'aria-hidden': 'true',
            autoplay: true,
            loop: true,
          });
        }
        return '';
      }
      static setUrl(aUrlLottie) {
        LottiePatience.url = aUrlLottie;
      }
    }
    exports.LottiePatience = LottiePatience;
    LottiePatience.url = '';
    $(window).on('load', () => {
      const lGuid = GUID_1.GUID.getId();
      setTimeout(() => {
        if (LottiePatience.url) {
          $(document.body).append(
            IE.jsx.str(
              'div',
              {
                id: lGuid,
                style:
                  'display:none; position:absolute; left: -1000px; width: 0px;',
              },
              LottiePatience.construire(),
            ),
          );
          $(`#${lGuid}`).remove();
        }
      }, 5000);
    });
  },
  fn: 'lottiepatience.js',
});