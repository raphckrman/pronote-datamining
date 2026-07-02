IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireUrl = void 0;
    const Enumere_DocumentJoint_1 = require('@cp/script/Enumere/Enumere_DocumentJoint');
    const Enumere_Etat_1 = require('@cp/script/Enumere/Enumere_Etat');
    const Enumere_FormatDocJoint_1 = require('@cp/Produit/Script/Enumere/Enumere_FormatDocJoint');
    const IEHtml_Chips_1 = require('@cp/Produit/Script/IEHtml.Chips');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    class UtilitaireUrl {
      static composerUrlLienExterne(aParam) {
        var _a;
        const lParam = Object.assign(
          {
            documentJoint: undefined,
            genreDocumentJoint: undefined,
            genreRessource: undefined,
            infoSupp: undefined,
            libelle: '',
            libelleEcran: undefined,
            ariaLabel: '',
            ariaLabelledby: '',
            avecAriaLabelledby: false,
            title: '',
            iconeOverride: '',
            afficherIconeDocument: true,
            avecLien: true,
            maxWidth: 0,
            ieChipsMinimal: false,
            class: '',
            forcerURLComplete: undefined,
          },
          aParam,
        );
        if (
          !MethodesObjet_1.MethodesObjet.isNumber(lParam.genreDocumentJoint)
        ) {
          lParam.genreDocumentJoint = lParam.documentJoint
            ? lParam.documentJoint.getGenre()
            : Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier;
        }
        if (
          lParam.documentJoint &&
          (lParam.documentJoint.getEtat() ===
            Enumere_Etat_1.EGenreEtat.Creation ||
            !lParam.documentJoint.existeNumero())
        ) {
          lParam.avecLien = false;
        }
        if (
          lParam.genreDocumentJoint ===
            Enumere_DocumentJoint_1.EGenreDocumentJoint.Url &&
          !lParam.libelleEcran &&
          !lParam.libelle
        ) {
          if (lParam.documentJoint.getLibelle()) {
            lParam.libelleEcran = lParam.documentJoint.getLibelle();
          } else {
            lParam.libelleEcran = lParam.documentJoint.url;
            lParam.avecAriaLabelledby = true;
          }
          lParam.libelle = 'link';
        }
        if (
          lParam.genreDocumentJoint ===
            Enumere_DocumentJoint_1.EGenreDocumentJoint.LienVisio &&
          !lParam.libelleEcran &&
          !lParam.libelle
        ) {
          lParam.libelleEcran = !!lParam.documentJoint.libelleLien
            ? lParam.documentJoint.libelleLien
            : undefined;
          lParam.libelle = lParam.documentJoint.url;
        }
        let lUrl = '';
        if (lParam.avecLien) {
          lUrl = ObjetChaine_1.GChaine.creerUrlBruteLienExterne(
            lParam.documentJoint,
            {
              genreRessource:
                (_a = lParam.genreRessource) !== null && _a !== void 0
                  ? _a
                  : undefined,
              genreDocumentJoint: lParam.genreDocumentJoint,
              forcerURLComplete: lParam.forcerURLComplete,
              libelle: lParam.libelle,
              infoSupp: lParam.infoSupp,
            },
          );
        }
        const lStrLibelleChips =
          lParam.libelleEcran !== undefined && lParam.libelleEcran !== null
            ? lParam.libelleEcran
            : lParam.libelle
              ? lParam.libelle
              : lParam.documentJoint
                ? lParam.documentJoint.getLibelle()
                : '';
        let lStyle = false;
        if (lParam.maxWidth > 0) {
          lStyle = { 'max-width': lParam.maxWidth + 'px' };
        }
        let lTitle = false;
        if (lParam.title) {
          lTitle = ObjetChaine_1.GChaine.toTitle(lParam.title);
        }
        let lHref;
        if (lUrl) {
          lHref = lUrl;
        }
        const lGenreFichier =
          Enumere_FormatDocJoint_1.EFormatDocJointUtil.getGenreDeFichier(
            ObjetChaine_1.GChaine.extraireExtensionFichier(
              lParam.libelle
                ? lParam.libelle
                : lParam.documentJoint
                  ? lParam.documentJoint.getLibelle()
                  : '',
            ),
          );
        if (
          lGenreFichier === Enumere_FormatDocJoint_1.EFormatDocJoint.Geogebra
        ) {
          lHref = 'geogebra.html?view=' + encodeURIComponent(lUrl) + '';
        }
        const lClasses = [];
        if (!!lParam.class) {
          lClasses.push(lParam.class);
        }
        let lIconeLien = '';
        if (!!lParam.afficherIconeDocument) {
          if (lParam.iconeOverride) {
            lIconeLien = lParam.iconeOverride;
          } else {
            lIconeLien = _getClasseIconeDocumentJoint(lParam.documentJoint);
          }
        }
        if (!!lIconeLien) {
          lClasses.push('iconic');
          lClasses.push(lIconeLien);
        }
        if (!!lParam.ieChipsMinimal) {
          lClasses.push('chips-minimal');
        }
        let lAriaLabel = false;
        if (lParam.ariaLabel) {
          lAriaLabel = lParam.ariaLabel;
        }
        let lAriaLabelledBy = false;
        if (lParam.avecAriaLabelledby && lParam.ariaLabelledby) {
          lAriaLabelledBy = lParam.ariaLabelledby;
        }
        let lIeModel = false;
        if (aParam.jsxModelChips) {
          lIeModel = aParam.jsxModelChips;
        }
        return IE.jsx.str(
          IEHtml_Chips_1.Chips,
          {
            style: lStyle,
            title: lTitle,
            href: lHref,
            ie_model: lIeModel,
            class: lClasses.join(' '),
            'aria-label': lAriaLabel,
            'aria-labelledby': lAriaLabelledBy,
          },
          lStrLibelleChips,
        );
      }
      static construireListeUrls(aListe, aParams) {
        const lParams = Object.assign(
          {
            genreFiltre: null,
            genreRessource: UtilitaireUrl.genreRessourceDefault,
            separateur: ' ',
            jsxModelChips: null,
            maxWidth: 0,
            class: '',
          },
          aParams,
        );
        if (!aListe || !aListe.parcourir) {
          return '';
        }
        const T = [];
        aListe.parcourir((aElement, aIndex) => {
          if (aElement.existe()) {
            if (
              lParams.genreFiltre === null ||
              lParams.genreFiltre === undefined ||
              aElement.getGenre() === lParams.genreFiltre
            ) {
              let lJsxModelChips = null;
              if (lParams.jsxModelChips) {
                lJsxModelChips = lParams.jsxModelChips(aIndex);
              }
              const lIeChips = this.composerUrlLienExterne({
                documentJoint: aElement,
                genreRessource: lParams.genreRessource,
                maxWidth: lParams.maxWidth,
                jsxModelChips: lJsxModelChips,
                class: lParams.class,
              });
              T.push(IE.jsx.str('div', null, lIeChips));
            }
          }
        });
        let lResult = T.join(lParams.separateur);
        if (T.length > 0) {
          lResult = IE.jsx.str('div', { class: 'liste-url-chips' }, lResult);
        }
        return lResult;
      }
    }
    exports.UtilitaireUrl = UtilitaireUrl;
    UtilitaireUrl.genreRessourceDefault = null;
    function _getClasseIconeDocumentJoint(aDocJoint) {
      let lClasseIcone = '';
      const lGenreFichier =
        Enumere_FormatDocJoint_1.EFormatDocJointUtil.getGenreDeFichier(
          ObjetChaine_1.GChaine.extraireExtensionFichier(
            aDocJoint.getLibelle(),
          ),
        );
      if (lGenreFichier !== Enumere_FormatDocJoint_1.EFormatDocJoint.Inconnu) {
        lClasseIcone =
          Enumere_FormatDocJoint_1.EFormatDocJointUtil.getClassIconDeGenre(
            lGenreFichier,
          );
      } else {
        if (
          aDocJoint.getGenre() ===
          Enumere_DocumentJoint_1.EGenreDocumentJoint.Cloud
        ) {
          lClasseIcone = 'icon_cloud';
        } else if (
          aDocJoint.getGenre() ===
          Enumere_DocumentJoint_1.EGenreDocumentJoint.Url
        ) {
          lClasseIcone = 'icon_link';
        } else if (
          aDocJoint.getGenre() ===
          Enumere_DocumentJoint_1.EGenreDocumentJoint.LienKiosque
        ) {
          lClasseIcone = 'icon_external_link';
        } else if (
          aDocJoint.getGenre() ===
          Enumere_DocumentJoint_1.EGenreDocumentJoint.LienVisio
        ) {
          lClasseIcone = 'icon_cours_virtuel';
        }
      }
      return lClasseIcone;
    }
  },
  fn: 'utilitaireurl.js',
});