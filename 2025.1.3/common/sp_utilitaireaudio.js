IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireAudio = void 0;
    require('IEHtml.Chips.js');
    const ObjetChaine_1 = require('ObjetChaine');
    const tag_1 = require('tag');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const AccessApp_1 = require('AccessApp');
    const MethodesObjet_1 = require('MethodesObjet');
    exports.UtilitaireAudio = {
      IconeLecture: 'icon_play_sign',
      IconePause: 'icon_pause',
      IconeStop: 'icon_pause',
      ExceptionFichierNonValide: 0,
      construitChipsAudio: function (aInfoChips) {
        const lInfosChips = Object.assign(
          {
            base64Audio: '',
            url: '',
            libelle: '',
            idChips: '',
            idAudio: '',
            ieModel: '',
            argsIEModel: [],
            classes: [],
          },
          aInfoChips,
        );
        lInfosChips.classes.push('ChipsAudio');
        lInfosChips.classes.push('iconic', this.IconeLecture);
        if (!lInfosChips.libelle) {
          lInfosChips.classes.push('no-label');
        }
        if (!lInfosChips.ieModel) {
          lInfosChips.classes.push('avec-event');
        }
        let lSrc;
        let lType;
        if (!!lInfosChips.url) {
          lSrc = lInfosChips.url;
          let lExt = ObjetChaine_1.GChaine.extraireExtensionFichier(
            lInfosChips.url,
          );
          if (!!lExt) {
            const lTab = lExt.split('?');
            if (lTab.length > 1) {
              lExt = lTab[0];
            }
            lType = exports.UtilitaireAudio.getTypeFromExtension(lExt);
          }
        } else {
          lSrc = 'data:audio/mp3;base64,' + lInfosChips.base64Audio;
        }
        return IE.jsx.str(
          'ie-chips',
          {
            id: lInfosChips.idChips,
            'ie-model': MethodesObjet_1.MethodesObjet.isString(
              lInfosChips.ieModel,
            )
              ? tag_1.tag.funcAttr(lInfosChips.ieModel, lInfosChips.argsIEModel)
              : lInfosChips.ieModel || false,
            class: lInfosChips.classes,
          },
          IE.jsx.str(
            'audio',
            null,
            IE.jsx.str('source', {
              src: lSrc,
              type: lType || false,
              id: lInfosChips.idAudio || false,
            }),
          ),
          IE.jsx.str('span', null, lInfosChips.libelle),
        );
      },
      jouerAudio: function (aElementAudio) {
        if (!!aElementAudio && aElementAudio.duration > 0) {
          if (aElementAudio.paused) {
            aElementAudio.play();
          }
        } else {
          throw this.ExceptionFichierNonValide;
        }
      },
      pauseAudio: function (aElementAudio) {
        if (!!aElementAudio && aElementAudio.duration > 0) {
          aElementAudio.pause();
        }
      },
      stopAudio: function (aElementAudio) {
        if (!!aElementAudio && aElementAudio.duration > 0) {
          aElementAudio.currentTime = 0;
          this.pauseAudio(aElementAudio);
        }
      },
      estEnCoursDeLecture: function (aElementAudio) {
        let lEstEnCoursDeLecture = false;
        const laElementAudio = aElementAudio;
        if (!!laElementAudio && laElementAudio.duration > 0) {
          lEstEnCoursDeLecture = !laElementAudio.paused;
        }
        return lEstEnCoursDeLecture;
      },
      getTypeMimeAudio: function (
        aAvecPlusieursFormatsAudio,
        aPourVerification,
      ) {
        const lAudios = ['audio/mp3'];
        if (aPourVerification) {
          lAudios.push('audio/mpeg');
        }
        if (!!aAvecPlusieursFormatsAudio) {
          lAudios.push(
            'audio/mp4',
            'audio/ogg',
            'audio/webm',
            'audio/m4a',
            'audio/x-m4a',
          );
        }
        return lAudios.join(',');
      },
      getTypeFromExtension: function (aExtension) {
        switch (aExtension) {
          case 'mp4':
            return 'audio/m4a';
          case 'oga':
          case 'ogg':
            return 'audio/ogg';
          case 'weba':
          case 'webm':
            return 'audio/webm';
          default:
            return '';
        }
      },
      estFichierAudioValide: function (aFichier, aAvecPlusieursFormatsAudio) {
        let lResult =
          !!aFichier &&
          !!aFichier.file &&
          !!aFichier.file.type &&
          exports.UtilitaireAudio.getTypeMimeAudio(
            !!aAvecPlusieursFormatsAudio,
            true,
          ).includes(aFichier.file.type);
        if (lResult) {
          return exports.UtilitaireAudio.canPlay(aFichier.file);
        }
        return Promise.resolve(false);
      },
      canPlay: function (aFile) {
        return new Promise((aResolve) => {
          if (aFile) {
            const lAudio = new Audio();
            const reader = new FileReader();
            reader.readAsDataURL(aFile);
            reader.addEventListener('load', () => {
              lAudio.src = reader.result;
              $(lAudio).on('canplay', () => {
                aResolve(true);
              });
              $(lAudio).on('error', () => {
                aResolve(false);
              });
            });
          }
        });
      },
      messageErreurFormat: function (aFichier) {
        (0, AccessApp_1.getApp)()
          .getMessage()
          .afficher({
            message: ObjetChaine_1.GChaine.format(
              ObjetTraduction_1.GTraductions.getValeur(
                'EnregistrementAudio.echecFormat',
              ),
              [aFichier.getLibelle() || ''],
            ),
          });
      },
      executeClicChipsParDefaut: function (aNodeChips) {
        $(aNodeChips)
          .toggleClass(exports.UtilitaireAudio.IconeLecture)
          .toggleClass(exports.UtilitaireAudio.IconeStop);
        const lElemAudio = $(aNodeChips).find('audio')[0];
        if (exports.UtilitaireAudio.estEnCoursDeLecture(lElemAudio)) {
          exports.UtilitaireAudio.stopAudio(lElemAudio);
        } else {
          try {
            exports.UtilitaireAudio.jouerAudio(lElemAudio);
          } catch (error) {
            if (error === exports.UtilitaireAudio.ExceptionFichierNonValide) {
              $(aNodeChips)
                .addClass(exports.UtilitaireAudio.IconeLecture)
                .removeClass(exports.UtilitaireAudio.IconeStop);
            }
          }
        }
      },
    };
  },
  fn: 'utilitaireaudio.js',
});