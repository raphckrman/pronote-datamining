IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.GestionnaireModale = exports.OpaciteVoileBloquant = void 0;
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetStyle_1 = require('ObjetStyle');
    const Invocateur_1 = require('Invocateur');
    const GUID_1 = require('GUID');
    var TypePrioriteBlocageInterface;
    (function (TypePrioriteBlocageInterface) {
      TypePrioriteBlocageInterface[
        (TypePrioriteBlocageInterface['voile'] = 1)
      ] = 'voile';
      TypePrioriteBlocageInterface[
        (TypePrioriteBlocageInterface['standard'] = 10)
      ] = 'standard';
      TypePrioriteBlocageInterface[
        (TypePrioriteBlocageInterface['message'] = 20)
      ] = 'message';
      TypePrioriteBlocageInterface[
        (TypePrioriteBlocageInterface['messageInformatif'] = 30)
      ] = 'messageInformatif';
      TypePrioriteBlocageInterface[
        (TypePrioriteBlocageInterface['systeme'] = 99999)
      ] = 'systeme';
    })(TypePrioriteBlocageInterface || (TypePrioriteBlocageInterface = {}));
    var OpaciteVoileBloquant;
    (function (OpaciteVoileBloquant) {
      OpaciteVoileBloquant[(OpaciteVoileBloquant['default'] = 1)] = 'default';
      OpaciteVoileBloquant[(OpaciteVoileBloquant['opaqueComplet'] = 2)] =
        'opaqueComplet';
    })(
      OpaciteVoileBloquant ||
        (exports.OpaciteVoileBloquant = OpaciteVoileBloquant = {}),
    );
    exports.GestionnaireModale = (function () {
      const uBlocage = {
        pile: [],
        nb: 0,
        avecVoile: false,
        pourPatience: false,
      };
      const CidBlocageGeneral = GUID_1.GUID.getId() + '_bloquer';
      const uPileZIndex = {};
      let uMaxZIndex = -1;
      const uZIndexBlocage = 1000;
      const uGenerateurGUID = new GUID_1.GUID.generateur();
      const uClassBloquageInterface = 'nav_zoneBloquageInterface';
      function _ajoutDansPile(
        aId,
        aPourPremierPlan,
        aPourBlocageInterface,
        aPrioriteBlocage,
      ) {
        const lPriorite = _getPrioriteBlocageDePriorite(aPrioriteBlocage);
        if (uPileZIndex[aId]) {
          uPileZIndex[aId].pourPremierPlan =
            uPileZIndex[aId].pourPremierPlan || aPourPremierPlan;
          uPileZIndex[aId].pourBlocageInterface =
            uPileZIndex[aId].pourBlocageInterface || aPourBlocageInterface;
          uPileZIndex[aId].prioriteBlocage = Math.max(
            uPileZIndex[aId].prioriteBlocage,
            lPriorite,
          );
        } else {
          const lElement = ObjetHtml_1.GHtml.getElement(aId);
          const lZindex = ObjetStyle_1.GStyle.getZindex(aId);
          if (lZindex || aPourBlocageInterface) {
            uPileZIndex[aId] = {
              element: lElement,
              zIndexOrigine: lZindex,
              zIndex: lZindex,
              pourPremierPlan: aPourPremierPlan,
              pourBlocageInterface: aPourBlocageInterface,
              prioriteBlocage: lPriorite,
              estBloque: false,
              pileBlocage: [],
            };
            uMaxZIndex = Math.max(uMaxZIndex, lZindex);
          }
        }
      }
      function _setZIndex(aId, zIndex) {
        if (!uPileZIndex[aId]) {
          return;
        }
        uPileZIndex[aId].zIndex = zIndex;
        ObjetStyle_1.GStyle.setZindex(aId, zIndex);
      }
      function _getPrioriteBlocageCourant() {
        let lPriorite = 0;
        uBlocage.pile.forEach((aElement) => {
          lPriorite = Math.max(lPriorite, aElement.priorite);
        });
        return lPriorite;
      }
      function _getPrioriteBlocageDePriorite(aPrioriteBlocage) {
        return (
          aPrioriteBlocage ||
          exports.GestionnaireModale.TypePrioriteBlocageInterface.standard
        );
      }
      function _notifierAbonneBlocageInterface(
        aId,
        aBloquer,
        aForcerDeblocage,
        aPrioriteBlocage,
        aEtatBloquerPrecedent,
      ) {
        const lElement = uPileZIndex[aId];
        if (lElement && lElement.pourBlocageInterface) {
          const lPrioriteBlocage =
            _getPrioriteBlocageDePriorite(aPrioriteBlocage);
          if (!aBloquer && aForcerDeblocage) {
            lElement.estBloque = false;
            if (lElement.methode) {
              lElement.methode(
                aBloquer,
                uBlocage.avecVoile,
                uBlocage.pourPatience,
              );
            } else {
              _setZIndex(aId, lElement.zIndexOrigine);
            }
          } else {
            if (
              (aBloquer &&
                (!lElement.estBloque ||
                  (!lElement.avecVoile && uBlocage.avecVoile !== false)) &&
                lElement.prioriteBlocage <= lPrioriteBlocage) ||
              (!aBloquer && lElement.estBloque && !aEtatBloquerPrecedent)
            ) {
              if (aBloquer) {
                lElement.estBloque = true;
              } else {
                lElement.estBloque = !!aEtatBloquerPrecedent;
              }
              if (lElement.methode) {
                if (lElement.estBloque) {
                  lElement.avecVoile = uBlocage.avecVoile;
                }
                lElement.methode(
                  lElement.estBloque,
                  uBlocage.avecVoile,
                  uBlocage.pourPatience,
                );
              } else {
                if (lElement.estBloque) {
                  if (lElement.zIndex > uZIndexBlocage - 10) {
                    _setZIndex(aId, uZIndexBlocage - 10);
                  }
                } else {
                  _setZIndex(aId, lElement.zIndexOrigine);
                }
              }
            }
          }
          let lId = aId;
          if (lElement.blocageGeneral && global.GApplication) {
            lId = global.GApplication.getIdConteneur();
          }
          if (lElement.estBloque) {
            $('#' + lId.escapeJQ()).addClass(uClassBloquageInterface);
          } else {
            $('#' + lId.escapeJQ()).removeClass(uClassBloquageInterface);
          }
        }
      }
      function _notifierAbonnesBlocageInterface(
        aBloquer,
        aForcerDeblocage,
        aPrioriteBlocage,
      ) {
        for (let lId in uPileZIndex) {
          const lElement = uPileZIndex[lId];
          let lEtatPrecedent = null;
          if (aBloquer) {
            lElement.pileBlocage.push(lElement.estBloque);
          } else {
            lEtatPrecedent = lElement.pileBlocage.pop();
          }
          _notifierAbonneBlocageInterface(
            lId,
            aBloquer,
            aForcerDeblocage,
            aPrioriteBlocage,
            lEtatPrecedent,
          );
        }
      }
      function _desabonnementBlocageInterface(aId) {
        if (uPileZIndex[aId] && uPileZIndex[aId].pourBlocageInterface) {
          ObjetStyle_1.GStyle.setZindex(aId, uPileZIndex[aId].zIndex);
          if (!uPileZIndex[aId].pourPremierPlan) {
            delete uPileZIndex[aId];
          } else {
            uPileZIndex[aId].estBloque = false;
            uPileZIndex[aId].pourBlocageInterface = false;
          }
        }
      }
      function _desabonnementPremierPlan(aId) {
        if (uPileZIndex[aId]) {
          if (uPileZIndex[aId].zIndex >= uMaxZIndex) {
            uMaxZIndex = -1;
            for (const lId in uPileZIndex) {
              if (
                uPileZIndex[lId] &&
                uPileZIndex[lId].pourPremierPlan &&
                lId !== aId
              ) {
                uMaxZIndex = Math.max(uMaxZIndex, uPileZIndex[lId].zIndex);
              }
            }
          }
          _setZIndex(aId, uPileZIndex[aId].zIndexOrigine);
          if (!uPileZIndex[aId].pourBlocageInterface) {
            delete uPileZIndex[aId];
          } else {
            uPileZIndex[aId].pourPremierPlan = false;
          }
        }
      }
      function _bloquerInterfaceGenerale(
        ABloquer,
        aAvecVoileOpaque,
        aPourPatience,
      ) {
        if (IE.estTestMocha) {
          return;
        }
        let lElement = ObjetHtml_1.GHtml.getElement(CidBlocageGeneral);
        if (!lElement) {
          $(document.body)
            .find(':first')
            .before(
              '<div id="' +
                CidBlocageGeneral +
                '" class="BloquerInterface NePasImprimer SansSelectionTexte" style="display:none;"></div>',
            );
          lElement = ObjetHtml_1.GHtml.getElement(CidBlocageGeneral);
        }
        if (ABloquer) {
          const lAvecVoileOpaque =
            aAvecVoileOpaque !== null && aAvecVoileOpaque !== void 0
              ? aAvecVoileOpaque
              : true;
          $(lElement).removeClass('VoileOpaque50 VoileOpaqueComplet');
          if (lAvecVoileOpaque) {
            let lOpaciteVoile = OpaciteVoileBloquant.default;
            uBlocage.pile.forEach((aElement) => {
              if (aElement.opaciteVoile > lOpaciteVoile) {
                lOpaciteVoile = aElement.opaciteVoile;
                if (lOpaciteVoile === OpaciteVoileBloquant.opaqueComplet) {
                }
              }
            });
            let lCss =
              lOpaciteVoile === OpaciteVoileBloquant.default
                ? 'VoileOpaque50'
                : 'VoileOpaqueComplet';
            $(lElement).addClass(lCss);
          }
        }
        if (!lElement.oncontextmenu) {
          lElement.oncontextmenu = function () {
            return false;
          };
        }
        ObjetStyle_1.GStyle.setDisplay(lElement, ABloquer);
        if (aPourPatience) {
          $(lElement).addClass('blocage-patience');
        } else {
          $(lElement).removeClass('blocage-patience');
        }
      }
      Invocateur_1.Invocateur.abonner('finSession', () => {
        _notifierAbonnesBlocageInterface(
          false,
          true,
          exports.GestionnaireModale.TypePrioriteBlocageInterface.systeme,
        );
      });
      return {
        TypePrioriteBlocageInterface: TypePrioriteBlocageInterface,
        enPremierPlan(AIdPremierPlan) {
          if (!uPileZIndex[AIdPremierPlan]) {
            return;
          }
          for (const lId in uPileZIndex) {
            let lElement = uPileZIndex[lId];
            if (lElement && lElement.pourPremierPlan) {
              if (!ObjetHtml_1.GHtml.elementExiste(lId)) {
                IE.log.addLog(
                  'Erreur GestionnaireModale.enPremierPlan : element supprimé sans etre desabonné',
                  null,
                  IE.log.genre.Erreur,
                );
                _desabonnementPremierPlan(lId);
              } else if (!lElement.estBloque) {
                if (lId === AIdPremierPlan) {
                  _setZIndex(lId, uMaxZIndex + 1);
                } else if (!uPileZIndex[lId].estBloque) {
                  _setZIndex(lId, lElement.zIndexOrigine);
                }
              }
            }
          }
        },
        abonnementPremierPlan(aAbonner, aId) {
          if (aAbonner) {
            _ajoutDansPile(aId, true, false);
          } else {
            _desabonnementPremierPlan(aId);
          }
        },
        abonnementBlocageInterfaceGenerale() {
          uPileZIndex[CidBlocageGeneral] = {
            blocageGeneral: true,
            pourPremierPlan: false,
            pourBlocageInterface: true,
            estBloque: false,
            pileBlocage: [],
            prioriteBlocage:
              exports.GestionnaireModale.TypePrioriteBlocageInterface.voile,
            methode: _bloquerInterfaceGenerale,
          };
        },
        abonnementBlocageInterface(aAbonner, aId, aPrioriteBlocage) {
          if (aAbonner) {
            _ajoutDansPile(aId, false, true, aPrioriteBlocage);
            const lPriorite = _getPrioriteBlocageDePriorite(aPrioriteBlocage);
            if (
              exports.GestionnaireModale.estInterfaceBloque() &&
              _getPrioriteBlocageCourant() > lPriorite
            ) {
              _notifierAbonneBlocageInterface(aId, true, false, lPriorite);
            }
          } else {
            _desabonnementBlocageInterface(aId);
          }
        },
        estInterfaceBloque() {
          return uBlocage.pile.length > 0;
        },
        estJElementBloque(aJElement) {
          return aJElement && aJElement.parents
            ? aJElement.closest('.' + uClassBloquageInterface).length > 0
            : false;
        },
        bloquerInterface(aParams) {
          const lParams = Object.assign(
            {
              bloquer: false,
              prioriteBlocage:
                exports.GestionnaireModale.TypePrioriteBlocageInterface
                  .standard,
              pourPatience: false,
              avecVoile: null,
              forcerDeblocage: false,
              guidBlocage: null,
              opaciteVoile: OpaciteVoileBloquant.default,
            },
            aParams,
          );
          if (!lParams.bloquer && uBlocage.pile.length === 0) {
            return;
          }
          let lId = null;
          lParams.prioriteBlocage = _getPrioriteBlocageDePriorite(
            lParams.prioriteBlocage,
          );
          if (lParams.bloquer) {
            const lElement = {
              priorite: lParams.prioriteBlocage,
              guid: uGenerateurGUID.get(),
              opaciteVoile: lParams.opaciteVoile,
            };
            uBlocage.pile.push(lElement);
            lId = lElement.guid;
            uBlocage.avecVoile = lParams.avecVoile;
            uBlocage.pourPatience = !!lParams.pourPatience;
          } else {
            if (lParams.guidBlocage) {
              let lTrouve = false;
              uBlocage.pile = uBlocage.pile.filter((aElement) => {
                if (aElement.guid === lParams.guidBlocage) {
                  lTrouve = true;
                }
                return aElement.guid !== lParams.guidBlocage;
              });
              if (!lTrouve) {
                return;
              }
            } else {
              uBlocage.pile.pop();
            }
          }
          _notifierAbonnesBlocageInterface(
            lParams.bloquer,
            false,
            lParams.prioriteBlocage,
          );
          return lId;
        },
      };
    })();
    if (!IE.estMobile) {
      exports.GestionnaireModale.abonnementBlocageInterfaceGenerale();
    }
  },
  fn: 'gestionnairemodale.js',
});