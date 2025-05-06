IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.GChaine = exports.ObjetChaine = void 0;
    require('DeclarationDOMPurify');
    require('Divers');
    const GUID_1 = require('GUID');
    const MethodesObjet_1 = require('MethodesObjet');
    const Enumere_ChampsJSON_1 = require('Enumere_ChampsJSON');
    const Enumere_DocumentJoint_1 = require('Enumere_DocumentJoint');
    const ObjetElement_1 = require('ObjetElement');
    const Enumere_Etat_1 = require('Enumere_Etat');
    const ObjetSupport_1 = require('ObjetSupport');
    const TypeHttpVariable_1 = require('TypeHttpVariable');
    const Enumere_FormatDocJoint_1 = require('Enumere_FormatDocJoint');
    const UtilitaireCss_1 = require('UtilitaireCss');
    const ComparateurChaines_1 = require('ComparateurChaines');
    const tag_1 = require('tag');
    const UtilitaireEmail_1 = require('UtilitaireEmail');
    const ObjetTraduction_1 = require('ObjetTraduction');
    let GChaine;
    class ObjetChaine {
      constructor() {
        this.maskTelephone = '99 99 99 99 99 99';
        this._hauteurPolice = [];
        this.regexURL = /(https?:\/\/|www\.)[^ \r\n,]+/gi;
        this.__cacheCanvas = null;
        this.LongueurCaracteres = new Array(30);
        for (let I = 0; I < 30; I++) {
          this.LongueurCaracteres[I] = new Array(2);
          for (let J = 0; J < 2; J++) {
            this.LongueurCaracteres[I][J] = [];
          }
        }
      }
      enleverChemin(aFichier) {
        let N = aFichier.lastIndexOf('/');
        if (N === -1) {
          N = aFichier.lastIndexOf('\\');
        }
        return aFichier.substring(N + 1, aFichier.length);
      }
      avecEspaceSiVide(AChaine) {
        return AChaine && AChaine.length > 0 ? AChaine : '&nbsp;';
      }
      toAttrValue(aChaine) {
        return aChaine && aChaine.toAttrValue ? aChaine.toAttrValue() : '';
      }
      toTitle(aChaine) {
        return aChaine && aChaine.toTitle ? aChaine.toTitle() : '';
      }
      strToDate(ADate) {
        const lTabDate = ADate.split(' ');
        const LJour = lTabDate[0].split('/');
        const LHeure = lTabDate[1] ? lTabDate[1].split(':') : ['0', '0', '0'];
        return new Date(
          parseInt(LJour[2]),
          parseInt(LJour[1]) - 1,
          parseInt(LJour[0]),
          parseInt(LHeure[0]),
          parseInt(LHeure[1]),
          parseInt(LHeure[2]),
        );
      }
      strToInteger(aInteger) {
        return parseInt(aInteger, 10);
      }
      strToDouble(aDouble) {
        return parseFloat(aDouble.replace(',', '.'));
      }
      strToCardinal(ACardinal) {
        return parseInt(ACardinal, 10);
      }
      strToBoolean(ABoolean) {
        return (
          ABoolean === '1' ||
          ABoolean.toUpperCase() === 'TRUE' ||
          ABoolean.toUpperCase() === 'VRAI'
        );
      }
      strToIp(aIP) {
        const T = aIP.split('.');
        if (T.length !== 4) {
          return '';
        }
        let lIp = 0;
        let lValeur;
        for (let I = 0; I < 4; I++) {
          lValeur = parseInt(T[I], 10);
          if (lValeur < 0 || lValeur > 255) {
            return 0;
          }
          lIp = 256 * lIp + lValeur;
        }
        return lIp;
      }
      dateToStr(ADate) {
        return _dateToStr(ADate);
      }
      domaineToStr(aDomaine) {
        return aDomaine ? aDomaine.toString() : '';
      }
      doubleToStr(aDouble) {
        return ('' + aDouble).replace('.', ',');
      }
      chaineToStr(AChaine) {
        return !AChaine ? '' : AChaine;
      }
      cardinalToStr(ACardinal) {
        return '' + ACardinal;
      }
      ipToStr(aIp) {
        aIp = parseInt(aIp, 10);
        if (isNaN(aIp)) {
          return '';
        }
        const T = [];
        for (let I = 4; I > 0; I--) {
          T[I - 1] = aIp % 256;
          if (T[I - 1] < 0) {
            T[I - 1] += 256;
          }
          aIp = Math.floor(aIp / 256);
        }
        return T.join('.');
      }
      estAdresseIPV4Valide(aStrAdresseIPV4) {
        let lEstValide = false;
        if (!!aStrAdresseIPV4) {
          const lStrAdresseIP = aStrAdresseIPV4.trim();
          const lStrNombres = lStrAdresseIP.split('.');
          if (lStrNombres.length === 4) {
            lEstValide = true;
            for (const lStrNombre of lStrNombres) {
              const lNb = parseInt(lStrNombre);
              if (lNb < 0 || lNb >= 256) {
                lEstValide = false;
                break;
              }
            }
          }
        }
        return lEstValide;
      }
      format(aChaine, aTabElements) {
        if (!aChaine || !aChaine.format) {
          return aChaine;
        }
        return aChaine.format(aTabElements);
      }
      tailleOctetsToStr(aTailleEnOctets) {
        if (
          aTailleEnOctets < 0 ||
          !MethodesObjet_1.MethodesObjet.isNumber(aTailleEnOctets)
        ) {
          return `0 ${'Ko'}`;
        }
        const lUnit = 1024;
        let lFixed = 0;
        let lVal = aTailleEnOctets;
        let lUnite = 'o';
        if (lVal === 0) {
          lUnite = 'Ko';
        } else if (lVal > lUnit) {
          lUnite = 'Ko';
          lVal = lVal / lUnit;
          lFixed = 1;
          if (lVal > lUnit) {
            lUnite = 'Mo';
            lVal = lVal / lUnit;
            lFixed = 2;
            if (lVal > lUnit) {
              lUnite = 'Go';
              lVal = lVal / lUnit;
            }
          }
        }
        return `${this.doubleToStr(lVal.toFixed(lFixed))} ${lUnite}`;
      }
      insecable(AChaine) {
        try {
          return AChaine
            ? AChaine.replace(/ /g, '&nbsp;').replace(/-/g, '&#x2011;')
            : '';
        } catch (e) {
          return '';
        }
      }
      formatTelephone(aChaine, aOptions) {
        if (!aChaine || !aChaine.trim) {
          return '';
        }
        const lOptions = Object.assign(
          { mask: '', avecTailleMask: true },
          aOptions,
        );
        let lMask = lOptions.mask || this.maskTelephone;
        const lChaine = aChaine.trim().replace(/([^0-9\s])/g, '');
        lMask = this._reverseString(lMask.replace(/([^9\s])/g, ''));
        const lLengthCharMask = lMask.replace(/([^9])/g, '').length;
        const lNumeroSansEspace = lChaine.replace(/([^0-9])/g, '');
        const lEcart = Math.max(0, lNumeroSansEspace.length - lLengthCharMask);
        let lPartieDroite = lNumeroSansEspace.slice(
          lEcart,
          lNumeroSansEspace.length,
        );
        let lPartieGaucheIntacte = '';
        let lPartieGauche;
        let lResult;
        lPartieDroite = this._reverseString(lPartieDroite);
        let lIndice = -1;
        lResult = lMask.replace(/9/g, () => {
          lIndice += 1;
          return lPartieDroite[lIndice] || '';
        });
        if (!lOptions.avecTailleMask) {
          lPartieGauche = lNumeroSansEspace.slice(0, lEcart);
          lIndice = 0;
          for (let i = 0; i < lChaine.length; i++) {
            if (lChaine.charAt(i) === ' ') {
              lPartieGaucheIntacte += ' ';
            } else {
              lPartieGaucheIntacte += lPartieGauche.charAt(lIndice);
              lIndice += 1;
              if (lIndice >= lPartieGauche.length) {
                break;
              }
            }
          }
        }
        return (lPartieGaucheIntacte + this._reverseString(lResult)).trim();
      }
      formatTelephoneAvecIndicatif(aIndicatif, aNumeroTel) {
        const lIndicatif = aIndicatif ? '+' + aIndicatif : '';
        if (
          !!aIndicatif &&
          aNumeroTel.length === 10 &&
          aNumeroTel.startsWith('0')
        ) {
          aNumeroTel = aNumeroTel.slice(1);
        }
        return lIndicatif + aNumeroTel;
      }
      geStrTelephoneAvecEspaces(aNumTel) {
        if (!aNumTel || !aNumTel.length) {
          return '';
        }
        let lResult = '';
        let lCompteur = 0;
        for (let i = aNumTel.length - 1; i >= 0; i--) {
          if (lCompteur % 2 === 0) {
            lResult = ' ' + lResult;
          }
          lResult = aNumTel.charAt(i) + lResult;
          lCompteur++;
        }
        return lResult.trim();
      }
      _getConteneurCalculChaine() {
        const ldLongueurChaineEnPixel = 'LongueurChaineEnPixel';
        let E = document.getElementById(ldLongueurChaineEnPixel);
        if (!E) {
          let lConteneur = document.body;
          if (global.GApplication) {
            lConteneur =
              document.getElementById(GApplication.getIdConteneur()) ||
              document.body;
          }
          lConteneur.insertAdjacentHTML(
            'beforeend',
            '<div id="' +
              ldLongueurChaineEnPixel +
              '" class="Texte10 hide" style="position:absolute; top:-50px; white-space:pre;"></div>',
          );
          E = document.getElementById(ldLongueurChaineEnPixel);
        }
        if (E) {
          return E;
        }
        return null;
      }
      getLongueurChaineDansDiv(AChaine, ATaille, AGras, aNonToTexte) {
        if (!AChaine) {
          return 0;
        }
        if (!ATaille) {
          ATaille = 10;
        }
        if (!this.__cacheCanvas) {
          this.__cacheCanvas =
            ObjetSupport_1.Support.supportCanvasText &&
            UtilitaireCss_1.UtilitaireCss.chercherAttributReglesCss
              ? {
                  canvas: document.createElement('canvas'),
                  fontFamily: global
                    .getComputedStyle(document.body)
                    .getPropertyValue('font-family'),
                  fontSize: {},
                }
              : {};
          this.__cacheCanvas.actif =
            !!this.__cacheCanvas.canvas && !!this.__cacheCanvas.fontFamily;
          if (!this.__cacheCanvas.actif) {
            this.__cacheCanvas.canvas = null;
          }
        }
        if (this.__cacheCanvas.actif) {
          const lContext = this.__cacheCanvas.canvas.getContext('2d');
          if (!this.__cacheCanvas.fontSize[ATaille]) {
            if (
              ATaille &&
              typeof ATaille === 'string' &&
              ATaille.endsWith('rem')
            ) {
              this.__cacheCanvas.fontSize[ATaille] =
                this.cacheCanvasConvertREMToPx(ATaille);
            } else if (
              ATaille &&
              typeof ATaille === 'string' &&
              ATaille.endsWith('px')
            ) {
              this.__cacheCanvas.fontSize[ATaille] = ATaille;
            } else {
              let lVal =
                UtilitaireCss_1.UtilitaireCss.chercherAttributReglesCss(
                  '.Texte' + ATaille,
                  'fontSize',
                );
              if (!lVal) {
                lVal = Math.round(ATaille * 1.1) + 'px';
              } else if (lVal.endsWith && lVal.endsWith('rem')) {
                lVal = this.cacheCanvasConvertREMToPx(lVal);
              }
              this.__cacheCanvas.fontSize[ATaille] = lVal;
            }
          }
          let lFontWeight = '';
          if (AGras === true) {
            lFontWeight = 'bold';
          } else if (AGras) {
            if (typeof AGras === 'number') {
              lFontWeight = AGras + '';
            } else {
              lFontWeight = AGras;
            }
          }
          lContext.font =
            (lFontWeight ? lFontWeight + ' ' : '') +
            this.__cacheCanvas.fontSize[ATaille] +
            ' ' +
            this.__cacheCanvas.fontFamily;
          const lMetrics = lContext.measureText(AChaine);
          return lMetrics.width;
        }
        const E = this._getConteneurCalculChaine();
        if (!E) {
          return 0;
        }
        E.className = 'hide Texte' + ATaille + (AGras ? ' Gras' : '');
        let lChaine =
          aNonToTexte === true ? AChaine : this.ajouterEntites(AChaine);
        lChaine =
          lChaine && lChaine.replace
            ? lChaine.replace(/ /g, '&nbsp;')
            : lChaine;
        E.innerHTML = lChaine;
        const lLongueur = E.clientWidth;
        E.innerHTML = '';
        return lLongueur;
      }
      getLongueurChaine(AChaine, ATaille, AGras, ALongueur, aChaineEnTexte) {
        if (!AChaine) {
          return '';
        }
        const lChaine = this.enleverEntites(AChaine);
        let LLongueur = 0;
        let I;
        const N = lChaine.length;
        if (lChaine.length > 0) {
          LLongueur = this.getLongueurChaineDansDiv(lChaine, ATaille, AGras);
        }
        if (ALongueur === null || ALongueur === undefined) {
          return LLongueur;
        }
        if (ALongueur > 0 && LLongueur >= ALongueur) {
          LLongueur = 0;
          const G = AGras ? 1 : 0;
          for (
            I = 0;
            I < N &&
            (ALongueur === null ||
              ALongueur === undefined ||
              LLongueur < ALongueur);
            I++
          ) {
            let C = lChaine.charCodeAt(I);
            let L = this.LongueurCaracteres[ATaille][G][C];
            if (!L) {
              L = this.LongueurCaracteres[ATaille][G][C] =
                this.getLongueurChaineDansDiv(
                  lChaine.charAt(I),
                  ATaille,
                  AGras,
                );
            }
            LLongueur += L === 0 ? 10 : L;
          }
        }
        if (LLongueur >= ALongueur) {
          let lChaineTronque = lChaine.substring(0, I);
          if (lChaineTronque && lChaine !== lChaineTronque && LLongueur > 0) {
            LLongueur = this.getLongueurChaineDansDiv(
              lChaineTronque,
              ATaille,
              AGras,
            );
          }
          if (LLongueur === 0) {
            return aChaineEnTexte
              ? ''
              : '<div style="font-size:1px">&nbsp;</div>';
          }
          if (LLongueur >= ALongueur) {
            lChaineTronque = lChaine.substring(0, I - 1);
            while (I > 2) {
              if (
                this.getLongueurChaineDansDiv(lChaineTronque, ATaille, AGras) <
                ALongueur
              ) {
                break;
              }
              I--;
              lChaineTronque = lChaine.substring(0, I - 1);
            }
          }
          return this.ajouterEntites(lChaineTronque);
        }
        return AChaine;
      }
      estChaineTropLongue(AChaine, ATaille, AGras, ALongueur) {
        const lResult = this.getChaine(AChaine, ATaille, AGras, ALongueur);
        if (typeof lResult === 'string') {
          return lResult.length !== AChaine.length;
        }
        return false;
      }
      getChaine(AChaine, ATaille, AGras, ALongueur, aChaineEnTexte) {
        return this.getLongueurChaine(
          AChaine,
          ATaille,
          AGras,
          ALongueur,
          aChaineEnTexte,
        );
      }
      getHauteurPolice(ATaille) {
        let lHauteur = this._hauteurPolice[ATaille];
        if (!lHauteur) {
          const E = this._getConteneurCalculChaine();
          if (!E) {
            return 0;
          }
          E.className = 'hide Texte' + ATaille;
          E.innerHTML = 'X';
          lHauteur = this._hauteurPolice[ATaille] = E.offsetHeight;
        }
        return lHauteur;
      }
      encoderComposantUrl(S, aAvecDecode = false) {
        if (!MethodesObjet_1.MethodesObjet.isString(S)) {
          return '';
        }
        try {
          const lStr = aAvecDecode ? decodeURI(S) : S;
          return encodeURIComponent(
            lStr.replace(ObjetChaine.regexCarControl, ''),
          );
        } catch (e) {
          return '';
        }
      }
      encoderUrl(S) {
        if (!MethodesObjet_1.MethodesObjet.isString(S)) {
          return '';
        }
        try {
          return encodeURI(
            decodeURI(S).replace(ObjetChaine.regexCarControl, ''),
          );
        } catch (e) {
          return '';
        }
      }
      replaceRCToHTML(AChaine, aChaineRemplacement) {
        return AChaine ? AChaine.replaceRCToHTML(aChaineRemplacement) : '';
      }
      fromHTML(AChaine) {
        return AChaine ? AChaine.replace(/<br( \/)?>/gi, '\n') : '';
      }
      nodeToTextAvecRC(aNode) {
        return aNode ? aNode.innerText || '' : '';
      }
      ajouterEntites(aChaine, aSansQuote) {
        if (aChaine && aChaine.ajouterEntites) {
          return aChaine.ajouterEntites(aSansQuote);
        }
        return aChaine;
      }
      enleverEntites(aChaine) {
        if (aChaine && aChaine.enleverEntites) {
          return aChaine.enleverEntites();
        }
        return aChaine;
      }
      nettoyerCommentaire(aChaine) {
        return aChaine && aChaine.replace
          ? aChaine.replace(/(<!--)(.+)(-->)/g, '')
          : aChaine;
      }
      verifierURLHttp(aUrl) {
        return aUrl
          ? aUrl.toLowerCase().indexOf('http://') === 0 ||
            aUrl.toLowerCase().indexOf('https://') === 0
            ? aUrl
            : 'http://' + aUrl
          : aUrl;
      }
      ajouterLiensURL(aTexte) {
        if (!aTexte) {
          aTexte = '';
        }
        const urlRegex = this.regexURL;
        return aTexte.replace(urlRegex, (url) => {
          return (
            '<a href="' +
            this.verifierURLHttp(url) +
            '" target="_blank">' +
            url +
            '</a>'
          );
        });
      }
      contientAuMoinsUneURL(aTexte) {
        if (!aTexte) {
          aTexte = '';
        }
        const lTexteAvecLiensURL = this.ajouterLiensURL(aTexte);
        return aTexte !== lTexteAvecLiensURL;
      }
      creerUrlBruteLienExterne(aDocumentJoint, aParam) {
        if (!('getCommunication' in GApplication)) {
          return;
        }
        if (!aDocumentJoint) {
          return '';
        }
        if (
          aDocumentJoint.getEtat() === Enumere_Etat_1.EGenreEtat.Creation ||
          !aDocumentJoint.existeNumero()
        ) {
          return '';
        }
        if (!aParam) {
          aParam = {};
        }
        let lUrl = '';
        let lGenreDocumentJoint = aParam.genreDocumentJoint;
        if (!MethodesObjet_1.MethodesObjet.isNumber(lGenreDocumentJoint)) {
          lGenreDocumentJoint = aDocumentJoint.getGenre();
        }
        let lLibelleLienExterne = aParam.libelle;
        if (!lLibelleLienExterne) {
          lLibelleLienExterne = aDocumentJoint.getLibelle();
        }
        if (
          lGenreDocumentJoint ===
          Enumere_DocumentJoint_1.EGenreDocumentJoint.Url
        ) {
          lLibelleLienExterne = 'link';
        }
        const lInfoFichier = new ObjetElement_1.ObjetElement(
          '',
          aDocumentJoint.getNumero(),
          aParam.genreRessource,
        );
        if (!!aParam.infoSupp) {
          Object.assign(lInfoFichier, aParam.infoSupp);
        }
        if (aParam.miniature !== null && aParam.miniature !== undefined) {
          Object.assign(lInfoFichier, { miniature: aParam.miniature });
        }
        lUrl = GApplication.getCommunication().composeUrlFichierExterne(
          this.encoderComposantUrl(lLibelleLienExterne, true),
          lInfoFichier,
        );
        if (aParam.forcerURLComplete) {
          const lBalise = document.createElement('a');
          lBalise.href = lUrl;
          lUrl = lBalise.href;
        }
        return lUrl;
      }
      composerUrlLienExterne(aParam) {
        const lParam = {
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
          ieModelChips: null,
          ieChipsMinimal: false,
          argsIEModel: null,
          class: '',
          forcerURLComplete: undefined,
        };
        Object.assign(lParam, aParam);
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
          lUrl = this.creerUrlBruteLienExterne(lParam.documentJoint, {
            genreRessource: lParam.genreRessource,
            genreDocumentJoint: lParam.genreDocumentJoint,
            forcerURLComplete: lParam.forcerURLComplete,
            libelle: lParam.libelle,
            infoSupp: lParam.infoSupp,
          });
        }
        const lInfosLiens = {
          tag: 'ie-chips',
          ieModel: '',
          title: lParam.title || false,
          libelle:
            lParam.libelleEcran !== undefined && lParam.libelleEcran !== null
              ? lParam.libelleEcran
              : lParam.libelle
                ? lParam.libelle
                : lParam.documentJoint
                  ? lParam.documentJoint.getLibelle()
                  : '',
          href: lUrl,
          classes: [],
          ariaLabel: lParam.ariaLabel
            ? ' ' + tag_1.tag.composeAttr('aria-label', lParam.ariaLabel)
            : '',
          ariaLabelledby:
            lParam.avecAriaLabelledby && lParam.ariaLabelledby
              ? ' ' +
                tag_1.tag.composeAttr('aria-labelledby', lParam.ariaLabelledby)
              : '',
        };
        if (!!lParam.class) {
          lInfosLiens.classes.push(lParam.class);
        }
        if (!!lParam.ieModelChips) {
          lInfosLiens.ieModel =
            ' ' +
            tag_1.tag.composeAttr(
              'ie-model',
              lParam.ieModelChips,
              lParam.argsIEModel,
            );
        }
        let lIconeLien = '';
        if (!!lParam.afficherIconeDocument) {
          if (lParam.iconeOverride) {
            lIconeLien = lParam.iconeOverride;
          } else {
            lIconeLien = this._getClasseIconeDocumentJoint(
              lParam.documentJoint,
            );
          }
        }
        if (!!lIconeLien) {
          lInfosLiens.classes.push('iconic');
          lInfosLiens.classes.push(lIconeLien);
        }
        if (!!lParam.ieChipsMinimal) {
          lInfosLiens.classes.push('chips-minimal');
        }
        const lGenreFichier =
          Enumere_FormatDocJoint_1.EFormatDocJointUtil.getGenreDeFichier(
            this.extraireExtensionFichier(
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
          lInfosLiens.href =
            'geogebra.html?view=' + encodeURIComponent(lInfosLiens.href) + '';
        }
        return (
          '<' +
          lInfosLiens.tag +
          ' id="' +
          GUID_1.GUID.getId() +
          '"' +
          (lParam.maxWidth > 0
            ? ' style="max-width:' + lParam.maxWidth + 'px;"'
            : '') +
          (lInfosLiens.title && typeof lInfosLiens.title === 'string'
            ? ' title="' + GChaine.toTitle(lInfosLiens.title) + '"'
            : '') +
          (!!lInfosLiens.href ? ' href="' + lInfosLiens.href + '"' : '') +
          (!!lInfosLiens.ieModel ? lInfosLiens.ieModel : '') +
          (lInfosLiens.classes.length > 0
            ? ' class="' + lInfosLiens.classes.join(' ') + '"'
            : '') +
          (lInfosLiens.ariaLabel ? lInfosLiens.ariaLabel : '') +
          (lInfosLiens.ariaLabelledby ? lInfosLiens.ariaLabelledby : '') +
          '>' +
          lInfosLiens.libelle +
          '</' +
          lInfosLiens.tag +
          '>'
        );
      }
      estFichierImageAvecMiniaturePossible(aNomFichier) {
        if (aNomFichier) {
          const lExt = this.extraireExtensionFichier(aNomFichier);
          return (
            !!lExt &&
            !['webp'].includes(lExt) &&
            Enumere_FormatDocJoint_1.EFormatDocJointUtil.getGenreDeFichier(
              lExt,
            ) === Enumere_FormatDocJoint_1.EFormatDocJoint.Image
          );
        }
        return false;
      }
      composeUrlRequete(aParam) {
        let lResult = '';
        if (aParam.url) {
          lResult = aParam.url;
          if (lResult.charAt(lResult.length - 1) !== '/') {
            lResult += '/';
          }
        }
        if (aParam.nomRequete) {
          if (aParam.nomRequete.charAt(0) !== '/') {
            lResult += aParam.nomRequete;
          } else {
            lResult += aParam.nomRequete.substring(
              1,
              aParam.nomRequete.length - 1,
            );
          }
        }
        return lResult;
      }
      composeUrlImgPhotoIndividu(aIndividu) {
        if (!aIndividu || !aIndividu.getNumero) {
          return '';
        }
        if (!('getCommunication' in GApplication)) {
          return;
        }
        return GApplication.getCommunication().composeUrlFichierExterne(
          aIndividu.getLibelle().replace(/[\s]/gi, '_') + '.jpg',
          new ObjetElement_1.ObjetElement('', aIndividu.getNumero()),
        );
      }
      supprimerEspaces(aChaine) {
        return aChaine && aChaine.replace ? aChaine.replace(/ /g, '') : aChaine;
      }
      latinize(aChaine) {
        return ComparateurChaines_1.ComparateurChaines.latinize(aChaine);
      }
      normalize(aChaine) {
        return ComparateurChaines_1.ComparateurChaines.normalize(aChaine);
      }
      miseEnFormeEmail(aEmail) {
        return aEmail ? aEmail.replace(/;/g, '<br/>') : '';
      }
      composerEmail(aEmail, aNotMailTo, aSansTabulation) {
        return !aNotMailTo
          ? '<a href="mailto:' +
              aEmail +
              '"' +
              (aSansTabulation ? ' tabindex="-1"' : '') +
              ' target="_blank">' +
              GChaine.miseEnFormeEmail(aEmail) +
              '</a>'
          : '<span class="LienAccueil AvecMain">' +
              GChaine.miseEnFormeEmail(aEmail) +
              '</span>';
      }
      estEmailValide(aEmail) {
        if (!aEmail || !MethodesObjet_1.MethodesObjet.isString(aEmail)) {
          return false;
        }
        return UtilitaireEmail_1.TUtilitaireEmail.estValide(aEmail);
      }
      controleTailleTexte(aParam) {
        let lResult = { controleOK: true, chaine: aParam.chaine };
        let lValeurSansEntites = this.enleverEntites(aParam.chaine);
        if (
          aParam.tailleTexteMax > 0 &&
          lValeurSansEntites.length > aParam.tailleTexteMax
        ) {
          lValeurSansEntites = lValeurSansEntites.slice(
            0,
            aParam.tailleTexteMax,
          );
          lResult = {
            controleOK: false,
            chaine: this.ajouterEntites(lValeurSansEntites),
          };
        }
        return lResult;
      }
      extraireNomFichier(aNomFichier) {
        if (!aNomFichier || !aNomFichier.split) {
          return aNomFichier;
        }
        const lTab = aNomFichier.split('.');
        if (lTab.length > 1) {
          lTab.pop();
        }
        return lTab.join('.');
      }
      extraireExtensionFichier(aNomFichier) {
        if (!aNomFichier || !aNomFichier.split) {
          return '';
        }
        const lTab = aNomFichier.split('.');
        return lTab.length > 1 ? lTab[lTab.length - 1] : '';
      }
      getLibelleSurligne(aLibelle, aRecherches, aOptions) {
        if (!aLibelle) {
          return aLibelle;
        }
        let lRecherche, lIndex;
        const lArray = [];
        const lLibelle = GChaine.enleverEntites(aLibelle || '').replace(
          /&nbsp;/g,
          ' ',
        );
        let lResult;
        const lOptions = Object.assign(
          { couleur: GCouleur.surlignageTexte },
          aOptions,
        );
        if (Array.isArray(aRecherches)) {
          for (let i = 0; i < aRecherches.length; i++) {
            lRecherche = aRecherches[i].trim();
            if (lRecherche.length > 0) {
              for (lIndex = 0; lIndex < lLibelle.length; lIndex++) {
                if (
                  lIndex + lRecherche.length <= lLibelle.length &&
                  ComparateurChaines_1.ComparateurChaines.egal(
                    lRecherche,
                    lLibelle.slice(lIndex, lIndex + lRecherche.length),
                  )
                ) {
                  for (let j = 0; j < lRecherche.length; j++) {
                    lArray[lIndex + j] = true;
                  }
                }
              }
            }
          }
        }
        lResult = '';
        for (let i = 0; i < lLibelle.length; i++) {
          if (lArray[i]) {
            if (!lArray[i - 1]) {
              lResult +=
                '<span style="background-color:' + lOptions.couleur + '">';
            }
            lResult += GChaine.ajouterEntites(lLibelle[i]);
            if (!lArray[i + 1]) {
              lResult += '</span>';
            }
          } else {
            lResult += GChaine.insecable(GChaine.ajouterEntites(lLibelle[i]));
          }
        }
        return lResult;
      }
      supprimerBalisesHtml(aContenu) {
        if (!aContenu || !MethodesObjet_1.MethodesObjet.isString(aContenu)) {
          return '';
        }
        let lContenu = aContenu
          .replace(/\n/g, '')
          .replace(
            /(<\/div>|<\/ol>|<\/ul>|<\/li>|<\/p>)(?!(<br>|<br\/>|<\/div>|<\/ol>|<\/ul>|<\/li>|<\/p>))/g,
            '$1\n',
          )
          .replace(/(<br>|<br\/>)/g, '$1\n')
          .replace(/<[^>]*?>/gi, '');
        if (lContenu.endsWith('\n')) {
          lContenu = lContenu.slice(0, lContenu.length - 1);
        }
        return lContenu;
      }
      simpleHtmlToSafeHtml(aHtml) {
        try {
          const lDoc = new DOMParser().parseFromString(aHtml, 'text/html');
          if (lDoc && lDoc.body) {
            return lDoc.body.innerHTML || '';
          }
        } catch (e) {}
        return aHtml;
      }
      htmlToSafeHtml(aHtml) {
        if (!IE.DOMPurifyDisabled) {
          return this.htmlDOMPurify(aHtml);
        }
        return this.simpleHtmlToSafeHtml(aHtml);
      }
      htmlDOMPurify(aHtml, aOptionsDOMPurify) {
        if (
          aHtml &&
          MethodesObjet_1.MethodesObjet.isString(aHtml) &&
          global.DOMPurify &&
          !IE.DOMPurifyDisabled
        ) {
          try {
            const lOptions = Object.assign(
              {
                FORBID_TAGS: [
                  'form',
                  'input',
                  'textarea',
                  'select',
                  'option',
                  'optgroup',
                  'style',
                  'template',
                  'head',
                  'html',
                  'body',
                  'header',
                  'footer',
                  'nav',
                ],
              },
              aOptionsDOMPurify,
            );
            return global.DOMPurify.sanitize(aHtml, lOptions);
          } catch (e) {}
        }
        return aHtml;
      }
      estChaineHTMLEgal(aChaine1, aChaine2) {
        if (aChaine1 === aChaine2) {
          return true;
        }
        return this.htmlToSafeHtml(aChaine1) === this.htmlToSafeHtml(aChaine2);
      }
      _reverseString(a) {
        return a.split('').reverse().join('');
      }
      cacheCanvasConvertREMToPx(aTailleREM) {
        if (!this.__cacheCanvas.fontSizeRoot) {
          let lSize = 0;
          try {
            lSize = parseFloat(
              global
                .getComputedStyle(document.documentElement)
                .getPropertyValue('font-size'),
            );
          } catch (e) {
            lSize = 10;
          }
          this.__cacheCanvas.fontSizeRoot = lSize;
        }
        return parseFloat(aTailleREM) * this.__cacheCanvas.fontSizeRoot + 'px';
      }
      _getClasseIconeDocumentJoint(aDocJoint) {
        let lClasseIcone = '';
        const lGenreFichier =
          Enumere_FormatDocJoint_1.EFormatDocJointUtil.getGenreDeFichier(
            GChaine.extraireExtensionFichier(aDocJoint.getLibelle()),
          );
        if (
          lGenreFichier !== Enumere_FormatDocJoint_1.EFormatDocJoint.Inconnu
        ) {
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
    }
    exports.ObjetChaine = ObjetChaine;
    ObjetChaine.regexCarControl = /[\x00-\x1F\x7F-\x9f]/gi;
    function _dateToStr(ADate) {
      return ADate
        ? ADate.getDate() +
            '/' +
            (ADate.getMonth() + 1) +
            '/' +
            ADate.getFullYear() +
            ' ' +
            ADate.getHours() +
            ':' +
            ADate.getMinutes() +
            ':' +
            ADate.getSeconds()
        : '';
    }
    exports.GChaine = GChaine = new ObjetChaine();
    Date.prototype.toJSON = function () {
      const lJSON = {};
      lJSON[Enumere_ChampsJSON_1.TypeChampsJSON.type] =
        TypeHttpVariable_1.TypeHttpVariable.TypeHttpDateTime;
      lJSON[Enumere_ChampsJSON_1.TypeChampsJSON.valeur] = _dateToStr(this);
      return lJSON;
    };
  },
  fn: 'objetchaine.js',
});