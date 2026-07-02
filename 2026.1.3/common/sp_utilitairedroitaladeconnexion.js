IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.TradUtilitaireDroitALaDeconnexion =
      exports.UtilitaireDroitALaDeconnexion = void 0;
    const TypeGenreOngletInternet_1 = require('@scolys/produit/script/enumere/TypeGenreOngletInternet');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const Invocateur_1 = require('@librairies/script/Divers/Invocateur');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const Enumere_DonneesPersonnelles_1 = require('@cp/script/Enumere/Enumere_DonneesPersonnelles');
    const ObjetTraduction_2 = require('@cp/script/ObjetTraduction');
    const IEHtml_TextareaMax_css_1 = require('@cp/Produit/Css/IEHtml.TextareaMax.css');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    const ObjetDroitsPN_1 = require('@scolys/produit/script/ObjetDroitsPN');
    const IEHtml_Bouton_1 = require('@cp/Produit/Script/IEHtml.Bouton');
    const Type_ThemeBouton_1 = require('@cp/Produit/Script/Enumere/Type_ThemeBouton');
    const IEHtml_Bouton_css_1 = require('@cp/Produit/Css/IEHtml.Bouton.css');
    const MessageInformatif_1 = require('@cp/Produit/Script/MessageInformatif');
    const MessageInformatif_module_css_1 = require('@cp/Produit/Css/MessageInformatif.module.css');
    const ObjetDate_1 = require('@cp/script/ObjetDate');
    class UtilitaireDroitALaDeconnexion {
      static getMessageInformatifPageAccueil(aObjetEtatUtilisateur) {
        return UtilitaireDroitALaDeconnexion.getMessageInformatif({
          class: [Divers_css_1.SD.mBottomXl],
          message: `${TradUtilitaireDroitALaDeconnexion.vousEtesEnPeriodeDeconnexion} :`,
          html: UtilitaireDroitALaDeconnexion.getLibelleInfoDeconnexion(
            aObjetEtatUtilisateur,
          ),
          avecDeploiement: true,
        });
      }
      static getBoutonModifierPreferencesDesactivation(
        aStr = TradUtilitaireDroitALaDeconnexion.modifierLesPreferences,
      ) {
        if (
          !UtilitaireDroitALaDeconnexion.avecCommandeRecuperationMessagerie()
        ) {
          return '';
        }
        const lJsxModelBoutonModifierPref = () => {
          return {
            event: () => {
              (0, AccessApp_1.getApp)()
                .getEtatUtilisateur()
                .setGenreAffichageCompteSelectionne(
                  Enumere_DonneesPersonnelles_1.TypeFiltreAffichage.deconnexion,
                );
              Invocateur_1.Invocateur.evenement(
                Invocateur_1.ObjetInvocateur.events.navigationOnglet,
                TypeGenreOngletInternet_1.TypeGenreOngletInternet
                  .Onglet_InfosPerso,
              );
            },
          };
        };
        return IE.jsx.str(
          IEHtml_Bouton_1.Bouton,
          {
            ie_model: lJsxModelBoutonModifierPref,
            role: 'link',
            class: [
              Type_ThemeBouton_1.TypeThemeBouton.neutre,
              IEHtml_Bouton_css_1.SIEHtmlBouton.smallBt,
              MessageInformatif_module_css_1.SMessageInformatif.isWrap,
            ],
          },
          aStr,
        );
      }
      static avecCommandeRecuperationMessagerie() {
        const lApp = (0, AccessApp_1.getApp)();
        const lEstEleve = lApp.getEtatUtilisateur().estEspaceEleve();
        return (
          lApp.droits.get(
            ObjetDroitsPN_1.TypeDroits.avecDroitDeconnexionMessagerie,
          ) && !lEstEleve
        );
      }
      static getMessageInformatif(aParams) {
        var _a, _b, _c, _d, _e;
        return IE.jsx.str(MessageInformatif_1.MessageInformatif, {
          ie_if: (_a = aParams.ie_if) !== null && _a !== void 0 ? _a : false,
          genreMessageInformatif:
            MessageInformatif_1.GenreMessageInformatif.Info,
          message: aParams.message,
          html: (_b = aParams.html) !== null && _b !== void 0 ? _b : false,
          noShadow: true,
          class: (_c = aParams.class) !== null && _c !== void 0 ? _c : [],
          callbackSurFermeture:
            (_d = aParams.callbackSurFermeture) !== null && _d !== void 0
              ? _d
              : null,
          avecDeploiement:
            (_e = aParams.avecDeploiement) !== null && _e !== void 0
              ? _e
              : false,
        });
      }
      static composeLibelleDroitDecoEleve(
        aClassCssInfosPeriodeDeco = [],
        aClassCssLibelleExplicatif = [],
      ) {
        const lEtatUtil = (0, AccessApp_1.getApp)().getEtatUtilisateur();
        const lLibelleInfoDeonnextion =
          UtilitaireDroitALaDeconnexion.getLibelleInfoDeconnexion(lEtatUtil);
        return {
          libelleExplicatif: IE.jsx.str(
            'span',
            { class: [...aClassCssLibelleExplicatif] },
            TradUtilitaireDroitALaDeconnexion.explicationPourEleve,
          ),
          infosPeriodeDeconnexion: IE.jsx.str(
            'div',
            { class: [...aClassCssInfosPeriodeDeco] },
            lLibelleInfoDeonnextion,
          ),
        };
      }
      static composeStrong(aParams) {
        const lMakeStrong = (aStr) => IE.jsx.str('strong', null, aStr);
        if (Array.isArray(aParams)) {
          return aParams.map(lMakeStrong);
        }
        return lMakeStrong(aParams);
      }
      static getLibelleInfosPeriodeDeconnexionTaf(aObjetEtatUtilisateur) {
        var _a, _b, _c, _d;
        if (
          !MethodesObjet_1.MethodesObjet.isNumber(
            (_b =
              (_a = aObjetEtatUtilisateur.infosDroitDeconnexion) === null ||
              _a === void 0
                ? void 0
                : _a.taf) === null || _b === void 0
              ? void 0
              : _b.heureFinDesactivationPublication,
          ) ||
          !MethodesObjet_1.MethodesObjet.isNumber(
            (_d =
              (_c = aObjetEtatUtilisateur.infosDroitDeconnexion) === null ||
              _c === void 0
                ? void 0
                : _c.taf) === null || _d === void 0
              ? void 0
              : _d.heureDebutDesactivationPublication,
          )
        ) {
          return '';
        }
        const lHeureDebutTAF =
          aObjetEtatUtilisateur.infosDroitDeconnexion.taf
            .heureFinDesactivationPublication;
        const lHeureFinTAF =
          aObjetEtatUtilisateur.infosDroitDeconnexion.taf
            .heureDebutDesactivationPublication;
        return IE.jsx.str(
          'p',
          null,
          TradUtilitaireDroitALaDeconnexion.infosTAF.format(
            UtilitaireDroitALaDeconnexion.composeStrong([
              UtilitaireDroitALaDeconnexion.composeHeure(lHeureDebutTAF),
              UtilitaireDroitALaDeconnexion.composeHeure(lHeureFinTAF),
            ]),
          ),
        );
      }
      static getHeureDebutFinDeconnexionMessagerie(aObjetEtatUtilisateur) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const lDate = new Date();
        const lApp = (0, AccessApp_1.getApp)();
        const lParametres = lApp.getObjetParametres();
        const lEstUnJourFerie = lParametres.JoursFeries.getValeur(
          ObjetDate_1.GDate.getNbrJoursEntreDeuxDates(
            IE.Cycles.dateDebutPremierCycle(),
            lDate,
          ) + 1,
        );
        const lEstUnJourOuvre = ObjetDate_1.GDate.estUnJourOuvre(lDate);
        const lEstJourAvecHoraire = !lEstUnJourFerie && lEstUnJourOuvre;
        const lHeureDebut = MethodesObjet_1.MethodesObjet.isNumber(
          (_b =
            (_a = aObjetEtatUtilisateur.infosDroitDeconnexion) === null ||
            _a === void 0
              ? void 0
              : _a.messagerie) === null || _b === void 0
            ? void 0
            : _b.heureApresDeconnexion,
        )
          ? UtilitaireDroitALaDeconnexion.composeHeure(
              (_d =
                (_c = aObjetEtatUtilisateur.infosDroitDeconnexion) === null ||
                _c === void 0
                  ? void 0
                  : _c.messagerie) === null || _d === void 0
                ? void 0
                : _d.heureApresDeconnexion,
            )
          : '';
        const lHeureFin = MethodesObjet_1.MethodesObjet.isNumber(
          (_f =
            (_e = aObjetEtatUtilisateur.infosDroitDeconnexion) === null ||
            _e === void 0
              ? void 0
              : _e.messagerie) === null || _f === void 0
            ? void 0
            : _f.heureAvantDeconnexion,
        )
          ? UtilitaireDroitALaDeconnexion.composeHeure(
              (_h =
                (_g = aObjetEtatUtilisateur.infosDroitDeconnexion) === null ||
                _g === void 0
                  ? void 0
                  : _g.messagerie) === null || _h === void 0
                ? void 0
                : _h.heureAvantDeconnexion,
            )
          : '';
        return {
          heureDebut: lHeureDebut,
          heureFin: lHeureFin,
          avecHoraire: lEstJourAvecHoraire,
        };
      }
      static getLibelleInfosPeriodeDeconnextionMessagerie(
        aObjetEtatUtilisateur,
      ) {
        var _a,
          _b,
          _c,
          _d,
          _e,
          _f,
          _g,
          _h,
          _j,
          _k,
          _l,
          _m,
          _o,
          _p,
          _q,
          _r,
          _s,
          _t,
          _u,
          _v,
          _w;
        if (
          !((_a = aObjetEtatUtilisateur.infosDroitDeconnexion) === null ||
          _a === void 0
            ? void 0
            : _a.messagerie)
        ) {
          return '';
        }
        if (aObjetEtatUtilisateur.estEspaceEleve()) {
          const lSaisieAucuneSelection =
            !((_d =
              (_c =
                (_b = aObjetEtatUtilisateur.infosDroitDeconnexion) === null ||
                _b === void 0
                  ? void 0
                  : _b.messagerie) === null || _c === void 0
                ? void 0
                : _c.listeJoursOuvresDeconnexion) === null || _d === void 0
              ? void 0
              : _d.length) &&
            !((_g =
              (_f =
                (_e = aObjetEtatUtilisateur.infosDroitDeconnexion) === null ||
                _e === void 0
                  ? void 0
                  : _e.messagerie) === null || _f === void 0
                ? void 0
                : _f.listeJoursNonOuvresDeconnexion) === null || _g === void 0
              ? void 0
              : _g.length) &&
            !aObjetEtatUtilisateur.infosDroitDeconnexion.messagerie
              .avecJourFerieDeconnexion;
          if (lSaisieAucuneSelection) {
            return '';
          }
          let lNombreJours = 0;
          const lNombreJoursOuvres = (
            (_j =
              (_h = aObjetEtatUtilisateur.infosDroitDeconnexion) === null ||
              _h === void 0
                ? void 0
                : _h.messagerie) === null || _j === void 0
              ? void 0
              : _j.listeJoursOuvresDeconnexion
          )
            ? aObjetEtatUtilisateur.infosDroitDeconnexion.messagerie
                .listeJoursOuvresDeconnexion.length
            : 0;
          lNombreJours += lNombreJoursOuvres;
          const lNombreJoursNonOuvres = (
            (_l =
              (_k = aObjetEtatUtilisateur.infosDroitDeconnexion) === null ||
              _k === void 0
                ? void 0
                : _k.messagerie) === null || _l === void 0
              ? void 0
              : _l.listeJoursNonOuvresDeconnexion
          )
            ? aObjetEtatUtilisateur.infosDroitDeconnexion.messagerie
                .listeJoursNonOuvresDeconnexion.length
            : 0;
          lNombreJours += lNombreJoursNonOuvres;
          const lNombreJoursFerie = (
            (_o =
              (_m = aObjetEtatUtilisateur.infosDroitDeconnexion) === null ||
              _m === void 0
                ? void 0
                : _m.messagerie) === null || _o === void 0
              ? void 0
              : _o.avecJourFerieDeconnexion
          )
            ? 1
            : 0;
          lNombreJours += lNombreJoursFerie;
          if (lNombreJours === 0) {
            return '';
          }
          const lLibelleJours = [];
          if (
            (_r =
              (_q =
                (_p = aObjetEtatUtilisateur.infosDroitDeconnexion) === null ||
                _p === void 0
                  ? void 0
                  : _p.messagerie) === null || _q === void 0
                ? void 0
                : _q.listeJoursOuvresDeconnexion) === null || _r === void 0
              ? void 0
              : _r.length
          ) {
            let { heureDebut, heureFin } =
              UtilitaireDroitALaDeconnexion.getHeureDebutFinDeconnexionMessagerie(
                aObjetEtatUtilisateur,
              );
            heureDebut =
              UtilitaireDroitALaDeconnexion.composeStrong(heureDebut);
            heureFin = UtilitaireDroitALaDeconnexion.composeStrong(heureFin);
            const lListeJoursOuvres =
              UtilitaireDroitALaDeconnexion.composeStrong(
                aObjetEtatUtilisateur.infosDroitDeconnexion.messagerie
                  .listeJoursOuvresDeconnexion,
              );
            if (lNombreJoursOuvres > 1) {
              const lDernierJour = lListeJoursOuvres.pop();
              const lAutresJours = lListeJoursOuvres.join(', ');
              lLibelleJours.push(
                TradUtilitaireDroitALaDeconnexion.infosMessagesNonPublieJoursOuvres.format(
                  [heureDebut, heureFin, lAutresJours, lDernierJour],
                ),
              );
            } else {
              const lJourUnique = lListeJoursOuvres[0];
              lLibelleJours.push(
                TradUtilitaireDroitALaDeconnexion.infosMessagesNonPublieJourOuvres.format(
                  [heureDebut, heureFin, lJourUnique],
                ),
              );
            }
          }
          if (
            (_u =
              (_t =
                (_s = aObjetEtatUtilisateur.infosDroitDeconnexion) === null ||
                _s === void 0
                  ? void 0
                  : _s.messagerie) === null || _t === void 0
                ? void 0
                : _t.listeJoursNonOuvresDeconnexion) === null || _u === void 0
              ? void 0
              : _u.length
          ) {
            const lLibelle =
              lNombreJoursNonOuvres > 1
                ? TradUtilitaireDroitALaDeconnexion.infosMessagesNonPublieJoursNonOuvres
                : TradUtilitaireDroitALaDeconnexion.infosMessagesNonPublieJourNonOuvres;
            lLibelleJours.push(
              lLibelle.format(
                UtilitaireDroitALaDeconnexion.composeStrong(
                  aObjetEtatUtilisateur.infosDroitDeconnexion.messagerie
                    .listeJoursNonOuvresDeconnexion,
                ),
              ),
            );
          }
          if (
            (_w =
              (_v = aObjetEtatUtilisateur.infosDroitDeconnexion) === null ||
              _v === void 0
                ? void 0
                : _v.messagerie) === null || _w === void 0
              ? void 0
              : _w.avecJourFerieDeconnexion
          ) {
            lLibelleJours.push(
              TradUtilitaireDroitALaDeconnexion.infosMessagesNonPublieJoursFeries,
            );
            lLibelleJours.push(
              TradUtilitaireDroitALaDeconnexion.infosMessagesNonPublieVacances,
            );
          }
          return IE.jsx.str(
            IE.jsx.fragment,
            null,
            IE.jsx.str(
              'p',
              null,
              TradUtilitaireDroitALaDeconnexion.infosMessagesNonPublie,
              ' :',
            ),
            IE.jsx.str(
              'ul',
              null,
              lLibelleJours.map((aLibelle) =>
                IE.jsx.str('li', null, '- ', aLibelle),
              ),
            ),
          );
        }
        return IE.jsx.str(
          'p',
          null,
          UtilitaireDroitALaDeconnexion.composeStrong(
            TradUtilitaireDroitALaDeconnexion.messageInfoSond,
          ),
          ' : ',
          TradUtilitaireDroitALaDeconnexion.selonVosPreferencesDansMonCompte,
        );
      }
    }
    exports.UtilitaireDroitALaDeconnexion = UtilitaireDroitALaDeconnexion;
    UtilitaireDroitALaDeconnexion.composeHeure = (aHeure) =>
      `${aHeure}${'h'}`;
    UtilitaireDroitALaDeconnexion.getLibelleInfoDeconnexion = (
      aObjetEtatUtilisateur,
      aLibelle = '',
    ) => {
      const lListeInfoDeco = [
        UtilitaireDroitALaDeconnexion.getLibelleInfosPeriodeDeconnexionNote(
          aObjetEtatUtilisateur,
        ),
        UtilitaireDroitALaDeconnexion.getLibelleInfosPeriodeDeconnexionTaf(
          aObjetEtatUtilisateur,
        ),
        UtilitaireDroitALaDeconnexion.getLibelleInfosPeriodeDeconnextionMessagerie(
          aObjetEtatUtilisateur,
        ),
      ].filter(Boolean);
      if (lListeInfoDeco.length) {
        return [
          aLibelle,
          IE.jsx.str(
            'ul',
            {
              class: [
                IEHtml_TextareaMax_css_1.SIEHtmlTextareaMax.browserDefault,
                Divers_css_1.SD.mTop,
                Divers_css_1.SD.mLeftXxl,
                Divers_css_1.SD.pLeftNone,
                Divers_css_1.SD.mBottomNone,
              ],
            },
            lListeInfoDeco.map((aInfo) => IE.jsx.str('li', null, aInfo)),
          ),
        ]
          .filter(Boolean)
          .join('');
      }
      return '';
    };
    UtilitaireDroitALaDeconnexion.getLibelleInfosPeriodeDeconnexionNote = (
      aObjetEtatUtilisateur,
    ) => {
      var _a, _b, _c, _d;
      if (
        !MethodesObjet_1.MethodesObjet.isNumber(
          (_b =
            (_a = aObjetEtatUtilisateur.infosDroitDeconnexion) === null ||
            _a === void 0
              ? void 0
              : _a.notes) === null || _b === void 0
            ? void 0
            : _b.heurePublicationNote,
        ) ||
        !MethodesObjet_1.MethodesObjet.isNumber(
          (_d =
            (_c = aObjetEtatUtilisateur.infosDroitDeconnexion) === null ||
            _c === void 0
              ? void 0
              : _c.notes) === null || _d === void 0
            ? void 0
            : _d.nombreJoursDecalagePublicationNote,
        )
      ) {
        return '';
      }
      const lEstEspaceParent = aObjetEtatUtilisateur.estEspaceParent();
      const lHeureNotes = UtilitaireDroitALaDeconnexion.composeHeure(
        aObjetEtatUtilisateur.infosDroitDeconnexion.notes.heurePublicationNote,
      );
      let lLibelleDecalage = '';
      switch (
        aObjetEtatUtilisateur.infosDroitDeconnexion.notes
          .nombreJoursDecalagePublicationNote
      ) {
        case 0:
          lLibelleDecalage = lEstEspaceParent
            ? TradUtilitaireDroitALaDeconnexion.leJourDeLeurPubliAuxEleves
            : TradUtilitaireDroitALaDeconnexion.leJourDeLeurPubli;
          break;
        case 7:
          lLibelleDecalage = lEstEspaceParent
            ? TradUtilitaireDroitALaDeconnexion.unSemaineApresPublicAuxEleves
            : TradUtilitaireDroitALaDeconnexion.unSemaineApresPublic;
          break;
        default:
          lLibelleDecalage = (
            lEstEspaceParent
              ? TradUtilitaireDroitALaDeconnexion.xJoursApresPubliAuxEleves
              : TradUtilitaireDroitALaDeconnexion.xJoursApresPubli
          ).format([
            aObjetEtatUtilisateur.infosDroitDeconnexion.notes
              .nombreJoursDecalagePublicationNote,
          ]);
          if (
            aObjetEtatUtilisateur.infosDroitDeconnexion.notes
              .nombreJoursDecalagePublicationNote > 6
          ) {
          }
          break;
      }
      return IE.jsx.str(
        'p',
        null,
        TradUtilitaireDroitALaDeconnexion.infosNotes.format([
          UtilitaireDroitALaDeconnexion.composeStrong(lHeureNotes),
          lLibelleDecalage,
        ]),
      );
    };
    const TradUtilitaireDroitALaDeconnexion =
      ObjetTraduction_2.TraductionsModule.getModule(
        'UtilitaireDroitALaDeconnexion',
        {
          explicationPourEleve: '',
          messageInfoSond: '',
          leJourDeLeurPubli: '',
          xJoursApresPubli: '',
          unSemaineApresPublic: '',
          leJourDeLeurPubliAuxEleves: '',
          xJoursApresPubliAuxEleves: '',
          unSemaineApresPublicAuxEleves: '',
          modifierLesPreferences: '',
          messagerieDesactiver: '',
          infoSondDesactiver: '',
          vousEtesEnPeriodeDeconnexion: '',
          selonVosPreferencesDansMonCompte: '',
          infosMessagesNonPublie: '',
          infosMessagesNonPublieJoursOuvres: '',
          infosMessagesNonPublieJourOuvres: '',
          infosMessagesNonPublieJoursNonOuvres: '',
          infosMessagesNonPublieJourNonOuvres: '',
          infosMessagesNonPublieJoursFeries: '',
          infosMessagesNonPublieVacances: '',
          infosTAF: '',
          infosNotes: '',
        },
      );
    exports.TradUtilitaireDroitALaDeconnexion =
      TradUtilitaireDroitALaDeconnexion;
  },
  fn: 'utilitairedroitaladeconnexion.js',
});