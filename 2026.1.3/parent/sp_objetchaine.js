IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.GChaine = exports.ObjetChaine = void 0;
    require('@librairies/Declaration/DeclarationDOMPurify');
    require('@librairies/script/Divers/Divers');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const Enumere_ChampsJSON_1 = require('@cp/script/Enumere/Enumere_ChampsJSON');
    const Enumere_DocumentJoint_1 = require('@cp/script/Enumere/Enumere_DocumentJoint');
    const ObjetElement_1 = require('@cp/script/ObjetElement');
    const Enumere_Etat_1 = require('@cp/script/Enumere/Enumere_Etat');
    const ObjetSupport_1 = require('@cp/script/ObjetSupport');
    const TypeHttpVariable_1 = require('@cp/script/Enumere/TypeHttpVariable');
    const Enumere_FormatDocJoint_1 = require('@cp/Produit/Script/Enumere/Enumere_FormatDocJoint');
    const ComparateurChaines_1 = require('@cp/script/ComparateurChaines');
    const UtilitaireEmail_1 = require('@cp/script/UtilitaireEmail');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const UtilitaireTelephone_1 = require('@cp/script/UtilitaireTelephone');
    let GChaine;
    var TypeFormatSIRET;
    (function (TypeFormatSIRET) {
      TypeFormatSIRET[(TypeFormatSIRET['FR'] = 0)] = 'FR';
      TypeFormatSIRET[(TypeFormatSIRET['IT'] = 1)] = 'IT';
    })(TypeFormatSIRET || (TypeFormatSIRET = {}));
    class ObjetChaine {
      constructor() {
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
      format(aChaine, aTabElements) {
        if (!aChaine || !aChaine.format) {
          return aChaine !== null && aChaine !== void 0 ? aChaine : '';
        }
        return aChaine.format(aTabElements);
      }
      tailleOctetsToStr(aTailleEnOctets) {
        if (
          !MethodesObjet_1.MethodesObjet.isNumber(aTailleEnOctets) ||
          aTailleEnOctets < 0
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
        return UtilitaireTelephone_1.UtilitaireTelephone.formatTelephone(
          aChaine,
          aOptions,
        );
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
      getStrTelephoneAvecEspaces(aNumTel) {
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
          if ((0, AccessApp_1.getApp)()) {
            lConteneur =
              document.getElementById(
                (0, AccessApp_1.getApp)().getIdConteneur(),
              ) || document.body;
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
          this.__cacheCanvas = ObjetSupport_1.Support.supportCanvasText
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
            this.__cacheCanvas.canvas = undefined;
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
              this.__cacheCanvas.fontSize[ATaille] =
                this.conversionTailleTexteToREM(ATaille);
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
      conversionTailleTexteToREM(aTailleCss) {
        let lTailleCss = MethodesObjet_1.MethodesObjet.isString(aTailleCss)
          ? parseInt(aTailleCss)
          : aTailleCss;
        if (isNaN(lTailleCss) || lTailleCss < 0) {
          lTailleCss = 10;
        }
        if (IE.estMobile) {
          return Math.round(lTailleCss * 1.1) + 'px';
        }
        if (lTailleCss >= 10) {
          if (lTailleCss <= 12) {
            lTailleCss += 1;
          } else if (lTailleCss <= 14) {
            lTailleCss += 2;
          } else if (lTailleCss <= 19) {
            lTailleCss += 3;
          } else {
            lTailleCss += 4;
          }
        }
        const lTailleREM = lTailleCss ? lTailleCss / 10 : 1;
        return this.cacheCanvasConvertREMToPx(lTailleREM);
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
      supprimerRC(aString) {
        return aString.replace(/\r\n/g, '');
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
        return aChaine !== null && aChaine !== void 0 ? aChaine : '';
      }
      enleverEntites(aChaine) {
        if (aChaine && aChaine.enleverEntites) {
          return aChaine.enleverEntites();
        }
        return aChaine !== null && aChaine !== void 0 ? aChaine : '';
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
          return IE.jsx.str(
            'a',
            { href: this.verifierURLHttp(url), target: '_blank' },
            url,
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
        var _a, _b, _c, _d;
        const lApp = (0, AccessApp_1.getApp)();
        if (!('getCommunication' in lApp)) {
          return '';
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
        let lLibelleLienExterne =
          (_b =
            (_a = aParam.libelle) === null || _a === void 0
              ? void 0
              : _a.enleverEntites) === null || _b === void 0
            ? void 0
            : _b.call(_a);
        if (!lLibelleLienExterne) {
          lLibelleLienExterne =
            ((_d =
              (_c = aDocumentJoint.getLibelle()) === null || _c === void 0
                ? void 0
                : _c.enleverEntites) === null || _d === void 0
              ? void 0
              : _d.call(_c)) || '';
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
        lUrl = lApp
          .getCommunication()
          .composeUrlFichierExterne(
            this.encoderComposantUrl(lLibelleLienExterne, true),
            lInfoFichier,
          );
        if (aParam.forcerURLComplete) {
          lUrl = this.getURLComplete(lUrl);
        }
        return lUrl;
      }
      getURLComplete(aUrl, aAvecEncodage = false) {
        if (aAvecEncodage) {
          aUrl = this.encoderUrl(aUrl);
        }
        const lBalise = document.createElement('a');
        lBalise.href = aUrl;
        return lBalise.href;
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
        var _a, _b;
        if (!aIndividu || !aIndividu.getNumero) {
          return '';
        }
        const lApp = (0, AccessApp_1.getApp)();
        if (!('getCommunication' in lApp)) {
          return '';
        }
        return lApp
          .getCommunication()
          .composeUrlFichierExterne(
            ((_b =
              (_a = aIndividu.getLibelle()) === null || _a === void 0
                ? void 0
                : _a.replace) === null || _b === void 0
              ? void 0
              : _b.call(_a, /[\s]/gi, '_')) + '.jpg',
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
          ? IE.jsx.str(
              'a',
              {
                href: 'mailto:' + aEmail,
                tabindex: aSansTabulation ? '-1' : false,
                target: '_blank',
              },
              GChaine.miseEnFormeEmail(aEmail),
            )
          : IE.jsx.str(
              'span',
              { class: 'LienAccueil' },
              GChaine.miseEnFormeEmail(aEmail),
            );
      }
      estEmailValide(aEmail) {
        if (!aEmail || !MethodesObjet_1.MethodesObjet.isString(aEmail)) {
          return false;
        }
        return UtilitaireEmail_1.TUtilitaireEmail.estValide(aEmail);
      }
      getLongueurMaximaleSIRET(aTypeFormatSIRET = TypeFormatSIRET.FR) {
        if (aTypeFormatSIRET === TypeFormatSIRET.IT) {
          return 11;
        }
        return 17;
      }
      formaterChaineEnSIRET(aChaine, aTypeFormatSIRET = TypeFormatSIRET.FR) {
        const lChaineFormatee = [];
        if (aTypeFormatSIRET === TypeFormatSIRET.IT) {
          lChaineFormatee.push(aChaine);
        } else {
          if (aChaine.length <= 3) {
            lChaineFormatee.push(aChaine);
          } else {
            lChaineFormatee.push(aChaine.substring(0, 3), ' ');
            if (aChaine.length <= 6) {
              lChaineFormatee.push(aChaine.substring(3));
            } else {
              lChaineFormatee.push(aChaine.substring(3, 6), ' ');
              if (aChaine.length <= 9) {
                lChaineFormatee.push(aChaine.substring(6));
              } else {
                lChaineFormatee.push(
                  aChaine.substring(6, 9),
                  ' ',
                  aChaine.substring(9),
                );
              }
            }
          }
        }
        return lChaineFormatee.join('');
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
          return aLibelle !== null && aLibelle !== void 0 ? aLibelle : '';
        }
        let lRecherche, lIndex;
        const lArray = [];
        const lLibelle = GChaine.enleverEntites(aLibelle || '').replace(
          /&nbsp;/g,
          ' ',
        );
        let lResult;
        const lOptions = Object.assign(
          { couleur: (0, AccessApp_1.getApp)().getCouleur().surlignageTexte },
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
        return aHtml !== null && aHtml !== void 0 ? aHtml : '';
      }
      estChaineHTMLEgal(aChaine1, aChaine2) {
        if (aChaine1 === aChaine2) {
          return true;
        }
        return this.htmlToSafeHtml(aChaine1) === this.htmlToSafeHtml(aChaine2);
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