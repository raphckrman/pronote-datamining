IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.GestionnaireModale = void 0;
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const ObjetStyle_1 = require('@cp/Produit/Script/ObjetStyle');
    const Invocateur_1 = require('@librairies/script/Divers/Invocateur');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const IEZoneFenetre_1 = require('@cp/script/IEZoneFenetre');
    const uBlocage = { pile: [], nb: 0, avecVoile: false, pourPatience: false };
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
        GestionnaireModale.TypePrioriteBlocageInterface.standard
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
            _setZIndex(aId, lElement.zIndexOrigine || 0);
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
                _setZIndex(aId, lElement.zIndexOrigine || 0);
              }
            }
          }
        }
        let lId = aId;
        if (lElement.blocageGeneral && (0, AccessApp_1.getApp)()) {
          lId = (0, AccessApp_1.getApp)().getIdConteneur();
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
        let lEtatPrecedent;
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
        ObjetStyle_1.GStyle.setZindex(aId, uPileZIndex[aId].zIndex || 0);
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
              uMaxZIndex = Math.max(uMaxZIndex, uPileZIndex[lId].zIndex || 0);
            }
          }
        }
        _setZIndex(aId, uPileZIndex[aId].zIndexOrigine || 0);
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
          let lOpaciteVoile = GestionnaireModale.OpaciteVoileBloquant.default;
          uBlocage.pile.forEach((aElement) => {
            if (aElement.opaciteVoile > lOpaciteVoile) {
              lOpaciteVoile = aElement.opaciteVoile;
              if (
                lOpaciteVoile ===
                GestionnaireModale.OpaciteVoileBloquant.opaqueComplet
              ) {
              }
            }
          });
          let lCss =
            lOpaciteVoile === GestionnaireModale.OpaciteVoileBloquant.default
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
        GestionnaireModale.TypePrioriteBlocageInterface.systeme,
      );
    });
    class GestionnaireModale {
      static enPremierPlan(AIdPremierPlan) {
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
                _setZIndex(lId, lElement.zIndexOrigine || 0);
              }
            }
          }
        }
      }
      static abonnementPremierPlan(aAbonner, aId) {
        if (aAbonner) {
          _ajoutDansPile(aId, true, false);
        } else {
          _desabonnementPremierPlan(aId);
        }
      }
      static abonnementBlocageInterfaceGenerale() {
        uPileZIndex[CidBlocageGeneral] = {
          blocageGeneral: true,
          pourPremierPlan: false,
          pourBlocageInterface: true,
          estBloque: false,
          pileBlocage: [],
          prioriteBlocage:
            GestionnaireModale.TypePrioriteBlocageInterface.voile,
          methode: _bloquerInterfaceGenerale,
        };
      }
      static abonnementBlocageInterface(aAbonner, aId, aPrioriteBlocage) {
        if (aAbonner) {
          _ajoutDansPile(aId, false, true, aPrioriteBlocage);
          const lPriorite = _getPrioriteBlocageDePriorite(aPrioriteBlocage);
          if (
            GestionnaireModale.estInterfaceBloque() &&
            _getPrioriteBlocageCourant() > lPriorite
          ) {
            _notifierAbonneBlocageInterface(aId, true, false, lPriorite);
          }
        } else {
          _desabonnementBlocageInterface(aId);
        }
      }
      static estInterfaceBloque() {
        return uBlocage.pile.length > 0;
      }
      static estJElementBloque(aJElement) {
        return aJElement && aJElement.parents
          ? aJElement.closest('.' + uClassBloquageInterface).length > 0
          : false;
      }
      static estInterfaceBloqueAvecFocusFenetre() {
        var _a, _b;
        return (
          GestionnaireModale.estInterfaceBloque() &&
          !!((_b =
            (_a = document.activeElement) === null || _a === void 0
              ? void 0
              : _a.closest) === null || _b === void 0
            ? void 0
            : _b.call(_a, `#${IEZoneFenetre_1.ZoneFenetre.idZoneFenetre}`))
        );
      }
      static bloquerInterface(aParams) {
        const lParams = Object.assign(
          {
            bloquer: false,
            prioriteBlocage:
              GestionnaireModale.TypePrioriteBlocageInterface.standard,
            pourPatience: false,
            avecVoile: undefined,
            forcerDeblocage: false,
            guidBlocage: undefined,
            opaciteVoile: GestionnaireModale.OpaciteVoileBloquant.default,
          },
          aParams,
        );
        if (!lParams.bloquer && uBlocage.pile.length === 0) {
          return;
        }
        let lId;
        lParams.prioriteBlocage = _getPrioriteBlocageDePriorite(
          lParams.prioriteBlocage,
        );
        if (lParams.bloquer) {
          const lElement = {
            priorite: lParams.prioriteBlocage,
            guid: uGenerateurGUID.get(),
            opaciteVoile:
              lParams.opaciteVoile ||
              GestionnaireModale.OpaciteVoileBloquant.default,
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
      }
    }
    exports.GestionnaireModale = GestionnaireModale;
    (function (GestionnaireModale) {
      let TypePrioriteBlocageInterface;
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
      })(
        (TypePrioriteBlocageInterface =
          GestionnaireModale.TypePrioriteBlocageInterface ||
          (GestionnaireModale.TypePrioriteBlocageInterface = {})),
      );
      let OpaciteVoileBloquant;
      (function (OpaciteVoileBloquant) {
        OpaciteVoileBloquant[(OpaciteVoileBloquant['default'] = 1)] = 'default';
        OpaciteVoileBloquant[(OpaciteVoileBloquant['opaqueComplet'] = 2)] =
          'opaqueComplet';
      })(
        (OpaciteVoileBloquant =
          GestionnaireModale.OpaciteVoileBloquant ||
          (GestionnaireModale.OpaciteVoileBloquant = {})),
      );
    })(
      GestionnaireModale ||
        (exports.GestionnaireModale = GestionnaireModale = {}),
    );
    if (!IE.estMobile) {
      GestionnaireModale.abonnementBlocageInterfaceGenerale();
    }
  },
  fn: 'gestionnairemodale.js',
});