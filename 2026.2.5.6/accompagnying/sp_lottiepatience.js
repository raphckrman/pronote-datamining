IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.LottiePatience = void 0;
    require('@librairies/Declaration/DeclarationLottie');
    const Divers_1 = require('@librairies/script/Divers/Divers');
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
    Divers_1.DiversLib.abonnerLoadingPage(() => {
      const lGuid = `load_lottiepatience_${Date.now()}`;
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