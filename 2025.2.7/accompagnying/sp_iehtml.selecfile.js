IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    require('IEHtml.SelecFile.css');
    const IEHtml = require('IEHtml');
    const Invocateur_1 = require('Invocateur');
    const ObjetHtml_1 = require('ObjetHtml');
    const GestionnaireModale_1 = require('GestionnaireModale');
    const ToucheClavier_1 = require('ToucheClavier');
    const SelecFile_1 = require('SelecFile');
    const Tooltip_1 = require('Tooltip');
    let uInvocateurSelecFile = new Invocateur_1.ObjetInvocateur();
    IEHtml.addAttribut(
      'ie-selecfile',
      (aContexteCourant, aNodeName, aAttributValue, aOutils) => {
        const lModele = aOutils.getModel(aContexteCourant);
        let lDisabled = false;
        let lDesactiverClick_openFileManuel = false;
        let lTimeoutDrag;
        let lTimeoutDragSurvol;
        const lDureeTimeoutDrag = 10;
        let lDragEnCours = false;
        let lDragHoverEnCours = false;
        let lIdsAbon = null;
        if (!lModele) {
          return true;
        }
        const lJElement = $(aContexteCourant.node),
          lInfosOptions = aOutils.getAccesParametresModel(
            'getOptionsSelecFile',
            aContexteCourant,
          ),
          lInfosAdd = aOutils.getAccesParametresModel(
            'addFiles',
            aContexteCourant,
          ),
          lInfosGetDisabled = aOutils.getAccesParametresModel(
            'getDisabled',
            aContexteCourant,
          );
        if (!lInfosAdd.estFonction) {
          return true;
        }
        if (!lInfosOptions.estFonction) {
          return true;
        }
        const lOptions = SelecFile_1.SelecFile.getOptionsDefaut();
        function _estDisabled() {
          return lDisabled;
        }
        const lOuvrirSelecteur = async function () {
          const lResult = await SelecFile_1.SelecFile.select(lOptions);
          if (lResult && lResult.files) {
            lInfosAdd.callback([lResult, aContexteCourant.node]);
            IEHtml.refresh();
          }
        };
        function _surDrag(aParams) {
          if (_estDisabled()) {
            return;
          }
          clearTimeout(lTimeoutDrag);
          if (aParams.start && lOptions.acceptDragDrop) {
            if (
              !lDragEnCours &&
              !GestionnaireModale_1.GestionnaireModale.estJElementBloque(
                lJElement,
              )
            ) {
              lDragEnCours = true;
              if (lOptions.classDrag) {
                aContexteCourant.node.classList.add(lOptions.classDrag);
              }
              if (lOptions.eventSurDrag) {
                lOptions.eventSurDrag({ surDrag: true });
              }
            }
          } else if (lDragEnCours) {
            lTimeoutDrag = setTimeout(() => {
              lDragEnCours = false;
              lDragHoverEnCours = false;
              if (lOptions.classDrag) {
                aContexteCourant.node.classList.remove(lOptions.classDrag);
              }
              if (lOptions.classDragHoverSelec) {
                aContexteCourant.node.classList.remove(
                  lOptions.classDragHoverSelec,
                );
              }
              if (lOptions.eventSurDrag) {
                lOptions.eventSurDrag({ surDrag: false });
              }
            }, lDureeTimeoutDrag);
          }
          if (lOptions.bloquerDropHorsZoneDrop) {
            aParams.avecSelecAbonne = true;
          }
        }
        Object.assign(lOptions, {
          acceptDragDrop: true,
          eventClick: true,
          title: '',
          getClass: function (aDisabled) {
            return aDisabled || !lOptions.eventClick ? '' : 'AvecMain';
          },
          interrompreClick: false,
          click_surEventCapture: true,
          dragEnCoursVisible: true,
          bloquerDropHorsZoneDrop: true,
          classDrag: 'SelecFile_DragEnCours',
          classDragHoverSelec: 'SelecFile_DragEnCours_survol',
          eventSurDrag: null,
        });
        function _majOptions() {
          if (lInfosOptions.estFonction) {
            const lFunc = () => {
              lDesactiverClick_openFileManuel = true;
              return lOuvrirSelecteur;
            };
            const lResultOptions = lInfosOptions.callback([
              lFunc,
              aContexteCourant.node,
            ]);
            if (lResultOptions) {
              Object.assign(lOptions, lResultOptions);
            }
          }
          if (lOptions.dragEnCoursVisible) {
            if (lIdsAbon) {
              uInvocateurSelecFile.desabonner(lIdsAbon);
            }
            lIdsAbon = uInvocateurSelecFile.abonner('drag', _surDrag);
          }
        }
        function _listenerClick(aEvent) {
          if (
            _estDisabled() ||
            !lOptions.eventClick ||
            lDesactiverClick_openFileManuel
          ) {
            return;
          }
          lOuvrirSelecteur();
          if (lOptions.interrompreClick) {
            aEvent.stopImmediatePropagation();
            aEvent.preventDefault();
            return false;
          }
        }
        function _listenerClickCapture(aEvent) {
          if (lOptions.click_surEventCapture) {
            _listenerClick(aEvent);
          }
        }
        function _listenerClickBubbling(aEvent) {
          if (!lOptions.click_surEventCapture) {
            _listenerClick(aEvent);
          }
        }
        aContexteCourant.node.addEventListener(
          'click',
          _listenerClickCapture,
          true,
        );
        aContexteCourant.node.addEventListener(
          'click',
          _listenerClickBubbling,
          false,
        );
        const lOldRole = lJElement.attr('role');
        const lOldTabIndex = lJElement.attr('tabindex');
        const lEstDansElementInteractif =
          !!ObjetHtml_1.GHtml.getClosestInteractive(lJElement.get(0));
        lJElement.on({
          destroyed: function () {
            if (lIdsAbon) {
              uInvocateurSelecFile.desabonner(lIdsAbon);
              lIdsAbon = null;
            }
            clearTimeout(lTimeoutDrag);
            clearTimeout(lTimeoutDragSurvol);
            lDragEnCours = false;
            lDragHoverEnCours = false;
            if (lOptions.classDrag) {
              aContexteCourant.node.classList.remove(lOptions.classDrag);
            }
            if (lOptions.classDragHoverSelec) {
              aContexteCourant.node.classList.remove(
                lOptions.classDragHoverSelec,
              );
            }
            if (lOptions.eventSurDrag) {
              lOptions.eventSurDrag({ surDrag: false });
            }
            aContexteCourant.node.removeEventListener(
              'click',
              _listenerClickCapture,
              true,
            );
            aContexteCourant.node.removeEventListener(
              'click',
              _listenerClickBubbling,
              false,
            );
          },
          keyup(aEvent) {
            if (
              !_estDisabled() &&
              ToucheClavier_1.ToucheClavierUtil.estEventSelection(aEvent)
            ) {
              lOuvrirSelecteur();
            }
          },
          'dragenter.selecfile dragover.selecfile': function (aEvent) {
            if (
              !lOptions.acceptDragDrop ||
              _estDisabled() ||
              !_eventDragAvecFiles(aEvent)
            ) {
              return;
            }
            aEvent.originalEvent.__dropAccepted__ = true;
            aEvent.preventDefault();
            if (lOptions.dragEnCoursVisible) {
              clearTimeout(lTimeoutDragSurvol);
              if (lOptions.classDragHoverSelec && !lDragHoverEnCours) {
                lDragHoverEnCours = true;
                aContexteCourant.node.classList.add(
                  lOptions.classDragHoverSelec,
                );
              }
            }
          },
          'dragexit.selecfile dragleave.selecfile dragend.selecfile':
            function () {
              clearTimeout(lTimeoutDrag);
              clearTimeout(lTimeoutDragSurvol);
              if (lOptions.classDragHoverSelec && lDragHoverEnCours) {
                lTimeoutDragSurvol = setTimeout(() => {
                  lDragHoverEnCours = false;
                  aContexteCourant.node.classList.remove(
                    lOptions.classDragHoverSelec,
                  );
                }, lDureeTimeoutDrag);
              }
            },
          'drop.selecfile': async function (aEvent) {
            uInvocateurSelecFile.evenement('drag', { start: false });
            if (!lOptions.acceptDragDrop || _estDisabled()) {
              return;
            }
            aEvent.stopPropagation();
            aEvent.preventDefault();
            const lDataTransfert = aEvent.originalEvent.dataTransfer;
            if (lDataTransfert) {
              const lFiles = Array.from(lDataTransfert.files);
              if (lFiles.length > 0) {
                const lResult = await SelecFile_1.SelecFile.addFiles(
                  lOptions,
                  lFiles,
                );
                if (lResult && lResult.files) {
                  lInfosAdd.callback([lResult, aContexteCourant.node]);
                  IEHtml.refresh();
                }
              }
            }
          },
        });
        const lTitleOrigine = aContexteCourant.node.title;
        const lMAJDisabled = (aDisabled) => {
          if (!aDisabled) {
            _majOptions();
          }
          if (
            !aDisabled &&
            !lEstDansElementInteractif &&
            lOptions.eventClick &&
            !lOldRole
          ) {
            lJElement.attr('role', 'button');
          } else {
            lJElement.attr('role', lOldRole);
          }
          if (
            !aDisabled &&
            !lEstDansElementInteractif &&
            lOptions.eventClick &&
            !lOldTabIndex
          ) {
            lJElement.attr('tabindex', '0');
          } else {
            lJElement.attr('tabindex', lOldTabIndex);
          }
          if (!aContexteCourant.node.hasAttribute(Tooltip_1.Tooltip.attrType)) {
            if (aDisabled && lTitleOrigine && lOptions.title) {
              ObjetHtml_1.GHtml.setTitle(
                aContexteCourant.node,
                lTitleOrigine || '',
              );
            } else if (!aDisabled && lOptions.title) {
              ObjetHtml_1.GHtml.setTitle(aContexteCourant.node, lOptions.title);
            }
          }
          if (lOptions.getClass) {
            lJElement
              .removeClass(lOptions.getClass(!aDisabled))
              .addClass(lOptions.getClass(aDisabled));
          }
        };
        if (lInfosGetDisabled.valide) {
          const lGetter = function () {
            return !!lInfosGetDisabled.callback([
              lJElement.get(0),
              aContexteCourant.data,
            ]);
          };
          if (
            lInfosGetDisabled.estFonction ||
            !lGetter() ||
            lGetter() === true
          ) {
            lDisabled = !!lGetter();
            aOutils.abonnerRefresh(
              () => {
                const lNewDisabled = !!lGetter();
                if (lNewDisabled !== lDisabled) {
                  lDisabled = lNewDisabled;
                  lMAJDisabled(lDisabled);
                }
              },
              lJElement.get(0),
              aContexteCourant,
            );
          } else {
            IE.log.addLog(
              'echec getDisabled de ie-selecfile, propriété incorrecte du model "' +
                lModele +
                '"',
            );
          }
        }
        lMAJDisabled(lDisabled);
        aOutils.addCommentaireDebug(aContexteCourant.node, 'ie-selecfile');
        return true;
      },
    );
    function _eventDragAvecFiles(aEvent) {
      if (
        aEvent.originalEvent &&
        aEvent.originalEvent.dataTransfer &&
        aEvent.originalEvent.dataTransfer.items &&
        aEvent.originalEvent.dataTransfer.items.length > 0
      ) {
        let lAvecFile = false;
        try {
          for (
            let i = 0;
            i < aEvent.originalEvent.dataTransfer.items.length;
            i++
          ) {
            const lData = aEvent.originalEvent.dataTransfer.items[i];
            if (!lData || lData.kind !== 'string') {
              lAvecFile = true;
              break;
            }
          }
        } catch (e) {
          lAvecFile = true;
        }
        return lAvecFile;
      }
      return true;
    }
    $(document).on({
      'dragenter.selecfile dragover.selecfile': function (aEvent) {
        const lParams = { start: true, avecSelecAbonne: false };
        if (_eventDragAvecFiles(aEvent)) {
          uInvocateurSelecFile.evenement('drag', lParams);
        } else {
          lParams.avecSelecAbonne = false;
        }
        if (
          lParams.avecSelecAbonne &&
          !('__dropAccepted__' in aEvent.originalEvent) &&
          'dataTransfer' in aEvent.originalEvent
        ) {
          aEvent.originalEvent.dataTransfer.dropEffect = 'none';
          return false;
        }
      },
      'dragexit.selecfile dragleave.selecfile dragend.selecfile drop.selecfile':
        function () {
          uInvocateurSelecFile.evenement('drag', { start: false });
        },
    });
  },
  fn: 'iehtml.selecfile.js',
});