IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetGalerieCarrousel = exports.TypeCallbackObjetGalerieCarrousel =
      void 0;
    const ObjetIdentite_1 = require('ObjetIdentite');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const GUID_1 = require('GUID');
    const ObjetHtml_1 = require('ObjetHtml');
    const ObjetPosition_1 = require('ObjetPosition');
    const GestionnaireBlocDiapoCarrousel_1 = require('GestionnaireBlocDiapoCarrousel');
    const Enumere_Etat_1 = require('Enumere_Etat');
    const ObjetVignette_1 = require('ObjetVignette');
    const ObjetListeElements_1 = require('ObjetListeElements');
    require('ObjetGalerieCarrousel.css');
    var TypeCallbackObjetGalerieCarrousel;
    (function (TypeCallbackObjetGalerieCarrousel) {
      TypeCallbackObjetGalerieCarrousel[
        (TypeCallbackObjetGalerieCarrousel['SuppressionDiapo'] = 0)
      ] = 'SuppressionDiapo';
    })(
      TypeCallbackObjetGalerieCarrousel ||
        (exports.TypeCallbackObjetGalerieCarrousel =
          TypeCallbackObjetGalerieCarrousel =
            {}),
    );
    class ObjetGalerieCarrousel extends ObjetIdentite_1.Identite {
      constructor(...aParams) {
        super(...aParams);
        this.ids = {
          conteneurDiapos: GUID_1.GUID.getId(),
          zoneNavigation: GUID_1.GUID.getId(),
          indicateursNavigation: GUID_1.GUID.getId(),
        };
        this.gestionnaireBlocsDiapos = ObjetIdentite_1.Identite.creerInstance(
          GestionnaireBlocDiapoCarrousel_1.GestionnaireBlocDiapoCarrousel,
          { pere: this, evenement: this.surEvntGestionnaireDiapos },
        );
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          nodeZoneVisu: function () {
            $(this.node).on({
              swipeleft: function () {
                aInstance._naviguerDiapoSuivante();
                if (!aInstance.options.bouclerSurNavigation) {
                  aInstance.$refresh();
                }
              },
              swiperight: function () {
                aInstance._naviguerDiapoPrecedente();
                if (!aInstance.options.bouclerSurNavigation) {
                  aInstance.$refresh();
                }
              },
            });
          },
          avecAffBtnAutour: function () {
            return (
              aInstance.options.avecFlechesAutourDesDiapos &&
              aInstance._avecAffichageZoneNavigation()
            );
          },
          avecAffBtnZoneNav: function () {
            return !aInstance.options.avecFlechesAutourDesDiapos;
          },
          btnPrec: {
            event() {
              aInstance._naviguerDiapoPrecedente();
            },
            getTitle() {
              return 'Précédent';
            },
            getDisabled() {
              return aInstance.options.bouclerSurNavigation
                ? false
                : !aInstance._existeDiapoPrecedente();
            },
          },
          btnSuiv: {
            event() {
              aInstance._naviguerDiapoSuivante();
            },
            getTitle() {
              return 'Suivant';
            },
            getDisabled() {
              if (aInstance.options.bouclerSurNavigation) {
                return false;
              }
              let lSuivanteDerniereVisible =
                aInstance._getNumDerniereDiapoVisible() + 1;
              return !aInstance._estDiapoExistante(lSuivanteDerniereVisible);
            },
          },
          avecAffIndicateursNav: function () {
            return aInstance.options.avecIndicateursNavigation;
          },
        });
      }
      construireAffichage() {
        const H = [];
        H.push('<div class="ObjetGalerieCarrousel">');
        H.push('<div class="zoneContenu">');
        H.push(
          '<ie-btnicon ie-model="btnPrec" ie-display="avecAffBtnAutour" class="icon_angle_left btnAutour"></ie-btnicon>',
        );
        H.push('<div class="zoneVisu" ie-node="nodeZoneVisu">');
        H.push(
          '<div id="',
          this.ids.conteneurDiapos,
          '" class="conteneurDiapos ie-imgviewer-container">',
        );
        H.push('</div>');
        H.push('</div>');
        H.push(
          '<ie-btnicon ie-model="btnSuiv" ie-display="avecAffBtnAutour" class="icon_angle_right btnAutour"></ie-btnicon>',
        );
        H.push('</div>');
        H.push(
          '<div id="',
          this.ids.zoneNavigation,
          '" class="zoneNavigation">',
        );
        H.push('</div>');
        H.push('</div>');
        return H.join('');
      }
      setOptions(aOptions) {
        this.options = $.extend(
          {
            dimensionPhoto: 50,
            tailleFixe: false,
            nbMaxDiaposEnZoneVisible: 4,
            bouclerSurNavigation: true,
            avecCmpSurDiapo: false,
            avecFlechesAutourDesDiapos: true,
            avecIndicateursNavigation: false,
            avecSuppression: false,
            avecEditionLegende: false,
            sansBlocLibelle: false,
            justifieAGauche: false,
            altImage: '',
          },
          aOptions,
        );
        return this;
      }
      initialiserCarrousel() {
        this.numDiapoCourante = 1;
        this.numDerniereDiapo = 0;
        this.dimensionPhotoAdaptee = null;
        this.nbTotalDiapos = 0;
      }
      setDonnees(aParam) {
        this.initialiserCarrousel();
        this.listeDiapos = aParam.listeDiapos;
        const lRessourceDocJoint = aParam.ressourceDocJoint;
        this.nbDiaposVisibles = this._determinerNbDiaposAAfficher();
        this.gestionnaireBlocsDiapos.setOptions({
          genreRessource: lRessourceDocJoint,
          dimensionPhoto:
            this.dimensionPhotoAdaptee !== null
              ? this.dimensionPhotoAdaptee
              : this.options.dimensionPhoto,
          avecEtiquette: this.options.avecCmpSurDiapo,
          avecSuppression: this.options.avecSuppression,
          avecEditionLegende: this.options.avecEditionLegende,
          sansBlocLibelle: this.options.sansBlocLibelle,
          afficherNomFichierSiLibelleVide:
            this.options.afficherNomFichierSiLibelleVide,
          altImage: this.options.altImage,
        });
        ObjetHtml_1.GHtml.setHtml(
          this.ids.conteneurDiapos,
          this.composerDiapos(),
          { instance: this },
        );
        if (
          this.options.justifieAGauche &&
          !(
            this.options.avecFlechesAutourDesDiapos &&
            this._avecAffichageZoneNavigation()
          )
        ) {
          $('#' + this.ids.conteneurDiapos.escapeJQ()).addClass('justifyLeft');
        }
        this.gestionnaireBlocsDiapos.refresh();
        if (this._avecUnEltDeLaZoneNavigation()) {
          ObjetHtml_1.GHtml.setHtml(
            this.ids.zoneNavigation,
            this.composerZoneNavigation(),
            { instance: this },
          );
          this._actualiserZoneNavigation();
        } else {
          this._cacherEltParId(this.ids.zoneNavigation);
          this.$refresh();
        }
      }
      composerDiapos() {
        const H = [];
        if (
          this.listeDiapos !== null &&
          this.listeDiapos !== undefined &&
          this.listeDiapos.count() > 0
        ) {
          let lCmp = 0;
          let lNumDiapoCourante = 0;
          let lListeDiapos = this.listeDiapos.getListeElements((D) => {
            return D.existe();
          });
          this.nbTotalDiapos = lListeDiapos.count();
          const lAvecEtiquette =
            this.options.avecCmpSurDiapo && this._avecAffichageZoneNavigation();
          let lCss;
          lListeDiapos.parcourir((D) => {
            lCmp++;
            lNumDiapoCourante = lCmp;
            this.numDerniereDiapo = lCmp;
            lCss = lNumDiapoCourante <= this.nbDiaposVisibles ? 'on' : 'off';
            D.numDiapo = lNumDiapoCourante;
            if (lAvecEtiquette) {
              D.strEtiquette =
                this._strClassementDiapoNumero(lNumDiapoCourante);
            }
            H.push(
              this._composerHtmlDiapo({
                numDiapo: lNumDiapoCourante,
                orderDiapo: lCmp,
                dataDiapo: D,
                cssDiapo: lCss,
              }),
            );
          });
        }
        return H.join('');
      }
      composerZoneNavigation() {
        const H = [];
        H.push(
          '<ie-btnicon ie-model="btnPrec" ie-display="avecAffBtnZoneNav" class="icon_angle_left"></ie-btnicon>',
        );
        H.push(
          '<div ie-display="avecAffIndicateursNav" id="',
          this.ids.indicateursNavigation,
          '" class="indicateurNav"></div>',
        );
        H.push(
          '<ie-btnicon ie-model="btnSuiv" ie-display="avecAffBtnZoneNav" class="icon_angle_right"></ie-btnicon>',
        );
        return H.join('');
      }
      surEvntGestionnaireDiapos(aParam) {
        if (aParam) {
          switch (aParam.evnt) {
            case ObjetVignette_1.ETypeEvntVignette.suppression:
              this._surSuppressionDiapo(aParam.data);
              break;
          }
        }
      }
      libererUrlsBlob() {
        this.listeDiapos.parcourir((aDiapo) => {
          if (
            this._docDeLaDiapoEstUnBlob(aDiapo) &&
            aDiapo.documentCasier.urlBlob
          ) {
            URL.revokeObjectURL(aDiapo.documentCasier.urlBlob);
            aDiapo.documentCasier.urlBlob = null;
          }
        });
      }
      ajouterDiapo(aData) {
        if (aData.existe()) {
          if (this.listeDiapos === null || this.listeDiapos === undefined) {
            this.listeDiapos = new ObjetListeElements_1.ObjetListeElements();
          }
          if (this._docDeLaDiapoEstUnBlob(aData)) {
            aData.documentCasier.urlBlob = URL.createObjectURL(
              aData.documentCasier.fichier.file,
            );
          }
          this.listeDiapos.addElement(aData);
          const lEstCas1ereDiapo = this.numDerniereDiapo === 0;
          if (!lEstCas1ereDiapo) {
            this._decalerOrdreDesDiaposSuivantLaDiapoNumero(
              this.numDerniereDiapo,
              1,
            );
          }
          let lNumDerniereDiapoApresAjout = this.numDerniereDiapo + 1;
          aData.numDiapo = lNumDerniereDiapoApresAjout;
          let lOrderDiapoAAjouter = lEstCas1ereDiapo
            ? 1
            : this._getOrderDiapoNumero(this.numDerniereDiapo) + 1;
          let lHtmlDiapo = this._composerHtmlDiapo({
            numDiapo: lNumDerniereDiapoApresAjout,
            orderDiapo: lOrderDiapoAAjouter,
            dataDiapo: aData,
            cssDiapo: 'off',
          });
          $('#' + this.ids.conteneurDiapos.escapeJQ()).append(lHtmlDiapo);
          this.gestionnaireBlocsDiapos.refreshInstance(
            aData.indiceInstanceMetier,
          );
          this.nbTotalDiapos = this.nbTotalDiapos + 1;
          this.numDerniereDiapo = lNumDerniereDiapoApresAjout;
          if (lEstCas1ereDiapo) {
            this._montrerLesDiaposVisibles();
          } else {
            this._deplacerDiaposDansCarrousel(-(lOrderDiapoAAjouter - 1));
          }
          this._actualiserZoneNavigation();
        }
      }
      _docDeLaDiapoEstUnBlob(aDiapo) {
        let lDoc = aDiapo.documentCasier;
        return !!(
          lDoc &&
          lDoc.getEtat() === Enumere_Etat_1.EGenreEtat.Creation &&
          lDoc.fichier &&
          lDoc.fichier.file
        );
      }
      _composerHtmlDiapo(aParam) {
        let lStyle = this.options.bouclerSurNavigation
          ? 'order:' + aParam.orderDiapo + '; '
          : '';
        const H = [];
        H.push(
          '<div id="',
          this._getIdDiapoNumero(aParam.numDiapo),
          '" class="diapo ',
          aParam.cssDiapo,
          '" style="',
          lStyle,
          ' width:',
          this.dimensionPhotoAdaptee !== null
            ? this.dimensionPhotoAdaptee
            : this.options.dimensionPhoto,
          'px;">',
        );
        let lBloc = this.gestionnaireBlocsDiapos.composeBloc(aParam.dataDiapo);
        H.push(lBloc.html);
        H.push('</div>');
        return H.join('');
      }
      _decalerOrdreDesDiaposSuivantLaDiapoNumero(aNumDiapo, aDecalage) {
        let lOrdreCourantDiapoDeRef = this._getOrderDiapoNumero(aNumDiapo);
        let lNbDiaposADecaler = this.numDerniereDiapo - lOrdreCourantDiapoDeRef;
        for (let i = 1, lNbr = lNbDiaposADecaler; i <= lNbr; i++) {
          let lNumADecaler = aNumDiapo + i;
          if (
            this._estDiapoExistante(lNumADecaler) ||
            this.options.bouclerSurNavigation
          ) {
            let lNumADecalerSelonModulo =
              this._getNumDiapoSelonModulo(lNumADecaler);
            let lEltDiapoADecaler = this._getIdDiapoNumero(
              lNumADecalerSelonModulo,
            );
            let lOrdreCourant = this._getOrderDiapoNumero(
              lNumADecalerSelonModulo,
            );
            let lOrdreAVenir = lOrdreCourant + aDecalage;
            $('#' + lEltDiapoADecaler.escapeJQ()).css('order', lOrdreAVenir);
          }
        }
      }
      _getOrderDiapoNumero(aNumDiapo) {
        let lEltDiapo = this._getIdDiapoNumero(aNumDiapo);
        return parseInt($('#' + lEltDiapo.escapeJQ()).css('order'));
      }
      _composerIndicateursNavigation() {
        return this._strClassementDiapoNumero(this.numDiapoCourante);
      }
      _actualiserIndicateursNavigation() {
        if (this.options.avecIndicateursNavigation) {
          ObjetHtml_1.GHtml.setHtml(
            this.ids.indicateursNavigation,
            this._composerIndicateursNavigation(),
            { instance: this },
          );
        }
      }
      _avecUnEltDeLaZoneNavigation() {
        const lAvecFlechesDansZoneNav =
          !this.options.avecFlechesAutourDesDiapos;
        const lAvecIndicateursNav = this.options.avecIndicateursNavigation;
        return lAvecFlechesDansZoneNav || lAvecIndicateursNav;
      }
      _actualiserZoneNavigation() {
        if (this._avecUnEltDeLaZoneNavigation()) {
          let lId = this.ids.zoneNavigation;
          if (this._avecAffichageZoneNavigation()) {
            this._montrerEltParId(lId);
            this._actualiserIndicateursNavigation();
          } else {
            this._cacherEltParId(lId);
          }
        }
      }
      _determinerNbDiaposAffichables() {
        let lWidthDispo =
          ObjetPosition_1.GPosition.getWidth(this.ids.conteneurDiapos) - 2 * 20;
        if (
          this.options.avecSuppression ||
          (this.options.avecFlechesAutourDesDiapos &&
            !this._avecAffichageZoneNavigation())
        ) {
          lWidthDispo = lWidthDispo - 2 * 40;
        }
        let lWidthDiapo = this.options.dimensionPhoto + 20;
        let lResult = Math.floor(lWidthDispo / lWidthDiapo);
        if (lResult <= 1) {
          this.dimensionPhotoAdaptee = lWidthDispo;
        }
        if (lResult <= 1) {
          this.dimensionPhotoAdaptee = this.dimensionPhotoAdaptee + 2 * 20;
          $('#' + this.ids.conteneurDiapos.escapeJQ()).addClass('onlyOne');
          if (this.options.tailleFixe && lResult !== 0) {
            this.dimensionPhotoAdaptee = this.options.dimensionPhoto;
          }
          lResult = 1;
        }
        return lResult;
      }
      _determinerNbDiaposAAfficher() {
        let lNbDiaposPossibles = this._determinerNbDiaposAffichables();
        let lNbDiaposMax = this.options.nbMaxDiaposEnZoneVisible;
        return Math.min(lNbDiaposMax, lNbDiaposPossibles);
      }
      _existeDiapoPrecedente() {
        return this.numDiapoCourante > 1;
      }
      _estDiapoExistante(aNum) {
        return aNum >= 1 && aNum <= this.numDerniereDiapo;
      }
      _avecAffichageZoneNavigation() {
        let lResult = true;
        if (
          !this._contientAuMoinsUneDiapo() ||
          this._contientDiapoUnique() ||
          this._toutesLesDiaposSontVisibles()
        ) {
          lResult = false;
        }
        return lResult;
      }
      _getNumDerniereDiapoVisible() {
        return this.numDiapoCourante + this.nbDiaposVisibles - 1;
      }
      _getIdDiapoNumero(aNum) {
        return this.Nom + '_' + aNum;
      }
      _cacherEltParId(aId) {
        $('#' + aId.escapeJQ())
          .removeClass('on')
          .addClass('off');
      }
      _montrerEltParId(aId) {
        $('#' + aId.escapeJQ())
          .removeClass('off')
          .addClass('on');
      }
      _cacherLesDiaposVisibles() {
        for (
          let i = this.numDiapoCourante,
            lNbr = this.numDiapoCourante + this.nbDiaposVisibles - 1;
          i <= lNbr;
          i++
        ) {
          this._cacherDiapoNumero(this._getNumDiapoSelonModulo(i));
        }
      }
      _montrerLesDiaposVisibles() {
        for (
          let i = this.numDiapoCourante,
            lNbr = this.numDiapoCourante + this.nbDiaposVisibles - 1;
          i <= lNbr;
          i++
        ) {
          this._montrerDiapoNumero(this._getNumDiapoSelonModulo(i));
        }
      }
      _cacherDiapoNumero(aNumDiapo) {
        let lId = this._getIdDiapoNumero(aNumDiapo);
        this._cacherEltParId(lId);
      }
      _montrerDiapoNumero(aNumDiapo) {
        let lId = this._getIdDiapoNumero(aNumDiapo);
        this._montrerEltParId(lId);
      }
      _contientAuMoinsUneDiapo() {
        return this.nbTotalDiapos > 0;
      }
      _contientDiapoUnique() {
        return this.nbTotalDiapos === 1;
      }
      _toutesLesDiaposSontVisibles() {
        return this.nbTotalDiapos <= this.nbDiaposVisibles;
      }
      _strClassementDiapoNumero(aNumDiapo) {
        return aNumDiapo + '/' + this.nbTotalDiapos;
      }
      _reordonnerDiapos(aDecalage) {
        if (this.options.bouclerSurNavigation) {
          for (let i = 1, lNbr = this.numDerniereDiapo; i <= lNbr; i++) {
            let lEltDiapo = this._getIdDiapoNumero(i);
            let lOrdreCourant = this._getOrderDiapoNumero(i);
            let lOrdreAVenir = lOrdreCourant + aDecalage;
            if (aDecalage < 0 && lOrdreAVenir < 1) {
              lOrdreAVenir = lOrdreAVenir + this.numDerniereDiapo;
            }
            if (aDecalage > 0 && lOrdreAVenir > this.numDerniereDiapo) {
              lOrdreAVenir = lOrdreAVenir - this.numDerniereDiapo;
            }
            $('#' + lEltDiapo.escapeJQ()).css('order', lOrdreAVenir);
          }
        }
      }
      _getNumDiapoSelonModulo(aNum) {
        let lNumModulo = aNum % this.numDerniereDiapo;
        if (lNumModulo === 0) {
          lNumModulo = this.numDerniereDiapo;
        }
        return lNumModulo;
      }
      _deplacerDiaposDansCarrousel(aDecalage) {
        if (!this.options.bouclerSurNavigation) {
          return;
        }
        this._cacherLesDiaposVisibles();
        this._reordonnerDiapos(aDecalage);
        this.numDiapoCourante = this._getNumDiapoSelonModulo(
          this.numDiapoCourante - aDecalage,
        );
        this._montrerLesDiaposVisibles();
        this._actualiserIndicateursNavigation();
      }
      _naviguerDiapoSuivante() {
        this._deplacerDiaposDansCarrousel(-1);
      }
      _naviguerDiapoPrecedente() {
        this._deplacerDiaposDansCarrousel(1);
      }
      _surSuppressionDiapo(aData) {
        let lNumDiapo = aData.numDiapo;
        let lNumDiapoAMontrer = this._getNumDerniereDiapoVisible() + 1;
        if (
          this._estDiapoExistante(lNumDiapoAMontrer) ||
          this.options.bouclerSurNavigation
        ) {
          this._montrerDiapoNumero(
            this._getNumDiapoSelonModulo(lNumDiapoAMontrer),
          );
        }
        let lIdDiapoASupprimer = this._getIdDiapoNumero(lNumDiapo);
        this._decalerOrdreDesDiaposSuivantLaDiapoNumero(lNumDiapo, -1);
        let lEltDomASupprimer = document.getElementById(lIdDiapoASupprimer);
        if (lEltDomASupprimer.parentNode) {
          lEltDomASupprimer.parentNode.removeChild(lEltDomASupprimer);
        }
        for (
          let i = lNumDiapo + 1, lNbr = this.numDerniereDiapo;
          i <= lNbr;
          i++
        ) {
          let lNouveauNum = i - 1;
          let lNouvelId = this._getIdDiapoNumero(lNouveauNum);
          let lEltAModifier = document.getElementById(
            this._getIdDiapoNumero(i),
          );
          lEltAModifier.id = lNouvelId;
        }
        this.numDerniereDiapo = this.numDerniereDiapo - 1;
        this.nbTotalDiapos = this.nbTotalDiapos - 1;
        this._actualiserInstancesDiaposSurSuppression(aData);
        this._actualiserZoneNavigation();
        this.callback.appel(TypeCallbackObjetGalerieCarrousel.SuppressionDiapo);
      }
      _actualiserInstancesDiaposSurSuppression(aData) {
        let lIndInstance = aData.indiceInstanceMetier;
        aData.numDiapo = null;
        for (
          let i = lIndInstance + 1,
            lNbr = this.gestionnaireBlocsDiapos._instances.length;
          i < lNbr;
          i++
        ) {
          let lInstanceDiapo = this.gestionnaireBlocsDiapos._instances[i];
          let lDataDiapo = lInstanceDiapo.data;
          if (lDataDiapo.numDiapo !== null) {
            lDataDiapo.numDiapo = lDataDiapo.numDiapo - 1;
          }
        }
      }
    }
    exports.ObjetGalerieCarrousel = ObjetGalerieCarrousel;
  },
  fn: 'objetgaleriecarrousel.js',
});