IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.SyntheseVocale = exports.SyntheseVocaleNS = void 0;
    const AccessApp_1 = require('AccessApp');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetPosition_1 = require('ObjetPosition');
    const UtilitaireChangementLangueProduit_1 = require('UtilitaireChangementLangueProduit');
    var SyntheseVocaleNS;
    (function (SyntheseVocaleNS) {
      let TypeVoix;
      (function (TypeVoix) {
        TypeVoix[(TypeVoix['compatible'] = 1)] = 'compatible';
        TypeVoix[(TypeVoix['memeLangue'] = 2)] = 'memeLangue';
        TypeVoix[(TypeVoix['tous'] = 3)] = 'tous';
      })(
        (TypeVoix =
          SyntheseVocaleNS.TypeVoix || (SyntheseVocaleNS.TypeVoix = {})),
      );
    })(SyntheseVocaleNS || (exports.SyntheseVocaleNS = SyntheseVocaleNS = {}));
    class UtilitaireSyntheseVocale {
      constructor() {
        this.supportee = !!window.speechSynthesis;
        this.active = false;
        this.avecSurlignage = false;
        this.estInitialise = false;
        this.existeVoixCompatible = false;
        this.listeVoix = [];
        this.listeElementVoix = new ObjetListeElements_1.ObjetListeElements();
      }
      getActif() {
        this.initialiser();
        return this.active;
      }
      getAvecSurLignage() {
        this.initialiser();
        return this.avecSurlignage;
      }
      initialiser(aForce) {
        var _a;
        if (!this.supportee) {
          if (
            (_a = (0, AccessApp_1.getApp)()) === null || _a === void 0
              ? void 0
              : _a.estAppliMobile
          ) {
            this.initApp();
          }
          return;
        }
        if (!this.estInitialise || aForce === true) {
          this.initVoix();
          speechSynthesis.onvoiceschanged = () => {
            this.initVoix();
          };
        }
      }
      getListeVoix(aOptions) {
        this.initialiser();
        const lOptions = {
          avecRemoteVoix: false,
          typeVoix: SyntheseVocaleNS.TypeVoix.compatible,
        };
        if (aOptions) {
          $.extend(lOptions, aOptions);
        }
        const lResult = this.listeElementVoix.getListeElements((aElement) => {
          const lEstUtilisable =
            aElement.voix.localService || lOptions.avecRemoteVoix;
          if (!lEstUtilisable) {
            return false;
          }
          return (
            aElement.type === SyntheseVocaleNS.TypeVoix.compatible ||
            lOptions.typeVoix === SyntheseVocaleNS.TypeVoix.tous ||
            (aElement.type === SyntheseVocaleNS.TypeVoix.memeLangue &&
              (lOptions.typeVoix === SyntheseVocaleNS.TypeVoix.memeLangue ||
                !this.existeVoixCompatible))
          );
        });
        return lResult;
      }
      getVoix() {
        this.initialiser();
        return this.voix;
      }
      initApp() {
        var _a, _b, _c, _d, _e;
        this.active =
          (_e =
            (_d =
              (_c =
                (_b =
                  (_a = (0, AccessApp_1.getApp)()) === null || _a === void 0
                    ? void 0
                    : _a.getOptionsEspaceLocal) === null || _b === void 0
                  ? void 0
                  : _b.call(_a)) === null || _c === void 0
                ? void 0
                : _c.getSyntheseVocaleActif) === null || _d === void 0
              ? void 0
              : _d.call(_c)) !== null && _e !== void 0
            ? _e
            : false;
      }
      initVoix() {
        var _a, _b;
        let lResult;
        let lAvecDefault = false;
        const lAppl = (0, AccessApp_1.getApp)();
        if (
          (lAppl === null || lAppl === void 0
            ? void 0
            : lAppl.getOptionsEspaceLocal) &&
          lAppl.getOptionsEspaceLocal()
        ) {
          this.active = lAppl.getOptionsEspaceLocal().getSyntheseVocaleActif();
          this.avecSurlignage = lAppl
            .getOptionsEspaceLocal()
            .getSyntheseVocaleAvecSurlignage();
          this.uriCookie =
            lAppl.getOptionsEspaceLocal().getVoixSyntheseVocale() || '';
        }
        this.listeVoix = speechSynthesis.getVoices();
        const lListeVoixCompatible = [];
        const lListeVoixLangue = [];
        if (this.estInitialise) {
          this.existeVoixCompatible = false;
          this.listeElementVoix = new ObjetListeElements_1.ObjetListeElements();
        }
        this.estInitialise = true;
        let lPosCompatible = 1;
        let lPosLangue = 501;
        let lPosAutre = 1001;
        for (let i = 0; i < this.listeVoix.length; i++) {
          const lVoix = this.listeVoix[i];
          const lElement = ObjetElement_1.ObjetElement.create({
            Libelle: lVoix.name,
            Genre: i,
            type: SyntheseVocaleNS.TypeVoix.tous,
            voix: lVoix,
          });
          if (this.uriCookie !== '' && lVoix.voiceURI === this.uriCookie) {
            lElement.setActif(true);
            lResult = lVoix;
            lAvecDefault = true;
          }
          const lLangID =
            ((_a = global.GParametres) === null || _a === void 0
              ? void 0
              : _a.langID) || 1036;
          const lLangue =
            ((_b = global.GParametres) === null || _b === void 0
              ? void 0
              : _b.langue) || 'fr';
          const lEstVoixCompatible =
            lVoix.lang ===
            UtilitaireChangementLangueProduit_1.UtilitaireChangementLangueProduit.getCodeLangueIetf(
              lLangID,
            );
          const lEstLangueCompatible = lVoix.lang.substring(0, 2) === lLangue;
          if (lEstVoixCompatible) {
            if (!lAvecDefault && lVoix.default) {
              lResult = lVoix;
              lAvecDefault = true;
            }
            lElement.type = SyntheseVocaleNS.TypeVoix.compatible;
            lElement.Position = lPosCompatible;
            lPosCompatible++;
            this.existeVoixCompatible = true;
            lListeVoixCompatible.push(lVoix);
            lListeVoixLangue.push(lVoix);
          } else if (lEstLangueCompatible) {
            lElement.type = SyntheseVocaleNS.TypeVoix.memeLangue;
            lElement.Position = lPosLangue;
            lPosLangue++;
            lListeVoixLangue.push(lVoix);
          } else {
            lElement.Position = lPosAutre;
            lPosAutre++;
          }
          this.listeElementVoix.add(lElement);
        }
        this.listeElementVoix.trier();
        if (!lAvecDefault) {
          if (lListeVoixCompatible.length > 0) {
            lResult = lListeVoixCompatible[0];
          } else if (lListeVoixLangue.length > 0) {
            lResult = lListeVoixLangue[0];
          }
        }
        if ((!this.voix || !this.listeVoix.includes(lResult)) && lResult) {
          this.voix = lResult;
          this.saisieVoix(lResult);
        }
      }
      modifierVoix(aVoix) {
        this.saisieVoix(aVoix);
      }
      saisieVoix(aVoix) {
        this.voix = aVoix;
        if (this.voix && this.uriCookie !== this.voix.voiceURI) {
          const lAppl = (0, AccessApp_1.getApp)();
          this.uriCookie = this.voix.voiceURI;
          if (
            (lAppl === null || lAppl === void 0
              ? void 0
              : lAppl.getOptionsEspaceLocal) &&
            lAppl.getOptionsEspaceLocal()
          ) {
            lAppl.getOptionsEspaceLocal().setVoixSyntheseVocale(this.uriCookie);
          }
        }
      }
      debugActive(aActif) {
        const lApp = (0, AccessApp_1.getApp)();
        if (
          lApp.getOptionsDebug() &&
          lApp.getOptionsDebug().forcerSyntheseVocale
        ) {
          if (!this.active && aActif) {
            this.initialiser();
          }
        }
        this.active = aActif;
      }
      saisieActive(aActif, aForcerInitialisation) {
        if (aForcerInitialisation) {
          this.initialiser();
        }
        this.active = aActif;
        const lAppl = (0, AccessApp_1.getApp)();
        if (
          (lAppl === null || lAppl === void 0
            ? void 0
            : lAppl.getOptionsEspaceLocal) &&
          lAppl.getOptionsEspaceLocal()
        ) {
          lAppl.getOptionsEspaceLocal().setSyntheseVocaleActif(aActif);
        }
      }
      saisieAvecSurlignage(aValeur) {
        this.avecSurlignage = aValeur;
        const lAppl = (0, AccessApp_1.getApp)();
        if (
          (lAppl === null || lAppl === void 0
            ? void 0
            : lAppl.getOptionsEspaceLocal) &&
          lAppl.getOptionsEspaceLocal()
        ) {
          lAppl
            .getOptionsEspaceLocal()
            .setSyntheseVocaleAvecSurlignage(aValeur);
        }
      }
      speak(aNode, aNodeBouton, aResult) {
        this.infoPrecedente = this.infoAttente;
        this.infoAttente = {
          node: aNode,
          nodeBouton: aNodeBouton,
          result: aResult,
        };
        if (!this.active) {
          return;
        }
        const lText = aResult.text;
        if (!this.supportee) {
          if (window.messageData) {
            (0, AccessApp_1.getApp)().callbackSyntheseVocale = () => {
              this.reset(aNodeBouton);
            };
            const lEstBtnPlay = aNodeBouton.hasClass('icon_play_sign');
            const lEstBtnStop = aNodeBouton.hasClass('icon_stop_sign');
            if (lEstBtnPlay) {
              window.messageData.push({ action: 'tts', message: lText });
              $(this.infoAttente.nodeBouton).addClass('icon_stop_sign');
              $(this.infoAttente.nodeBouton).removeClass('icon_play_sign');
              return;
            }
            if (lEstBtnStop) {
              window.messageData.push({ action: 'stopTts' });
              $(this.infoAttente.nodeBouton).removeClass('icon_stop_sign');
              $(this.infoAttente.nodeBouton).addClass('icon_play_sign');
              return;
            }
          }
          return;
        }
        if (speechSynthesis.speaking) {
          if (this.nodeSurligne) {
            $(this.nodeSurligne)
              .removeClass('surlignage-conteneur')
              .find(`.${'surlignage-recherche-texte'}`)
              .remove();
            this.nodeSurligne = null;
          }
          if (lText === this.utterance.text) {
            this.reset(this.infoAttente.nodeBouton);
            speechSynthesis.cancel();
          } else {
            this.reset(this.infoPrecedente.nodeBouton);
            speechSynthesis.cancel();
            this.creerUtterance(lText);
          }
        } else if (lText) {
          this.creerUtterance(lText);
        }
      }
      creerUtterance(aTexte) {
        const lNodes = this.getTextNodesIn(this.infoAttente.node);
        let lIndiceOffset = 0;
        let lIndiceOffsetNode = 0;
        $(this.infoAttente.nodeBouton).addClass('icon_stop_sign');
        $(this.infoAttente.nodeBouton).removeClass('icon_play_sign');
        this.utterance = new SpeechSynthesisUtterance(aTexte);
        this.utterance.voice = this.voix;
        let lIndiceNodeCourant = 0;
        let lNodeCourant = lNodes[lIndiceNodeCourant];
        let lNodeSurligne;
        let lRange = null;
        this.utterance.onend = () => {
          if (this.nodeSurligne) {
            $(this.nodeSurligne)
              .removeClass('surlignage-conteneur')
              .find(`.${'surlignage-recherche-texte'}`)
              .remove();
            this.nodeSurligne = null;
          }
          this.reset(this.infoAttente.nodeBouton);
          if (
            this.infoAttente.result.idSuivant !== undefined &&
            this.infoAttente.result.idSuivant !== null
          ) {
            const lIDSuivant = this.infoAttente.result.idSuivant
              ? `#${this.infoAttente.result.idSuivant}`
              : '';
            if (lIDSuivant !== '') {
              $(lIDSuivant).trigger('click');
            }
          }
        };
        this.utterance.onboundary = (aEvent) => {
          if (aEvent.name !== 'word' || !this.avecSurlignage) {
            return;
          }
          if (aEvent.charIndex >= lIndiceOffset) {
            if (aEvent.charIndex > lIndiceOffset) {
              lIndiceOffset = aEvent.charIndex;
            }
            let lWord = aTexte
              .substring(lIndiceOffset, lIndiceOffset + aEvent.charLength)
              .trim();
            if (lWord.startsWith('. ')) {
              lWord = lWord.substring(2);
            }
            if (['.', ',', ':', ';', '?'].includes(lWord)) {
              return;
            }
            let lResultFindWord = this.getDebutFinInNode(
              lNodeCourant,
              lWord,
              lIndiceOffsetNode,
              aEvent.charLength,
            );
            let lStart = lResultFindWord.debut;
            let lEnd = lResultFindWord.fin;
            let lIndiceRecherche = lIndiceNodeCourant;
            while (lStart === -1 && lIndiceRecherche < lNodes.length) {
              lIndiceOffsetNode = 0;
              lIndiceRecherche++;
              lNodeCourant = lNodes[lIndiceRecherche];
              lResultFindWord = this.getDebutFinInNode(
                lNodeCourant,
                lWord,
                lIndiceOffsetNode,
                aEvent.charLength,
              );
              lStart = lResultFindWord.debut;
              lEnd = lResultFindWord.fin;
              if (lStart > -1) {
                lIndiceNodeCourant = lIndiceRecherche;
              }
            }
            if (lNodeSurligne) {
              $(lNodeSurligne)
                .removeClass('surlignage-conteneur')
                .find(`.${'surlignage-recherche-texte'}`)
                .remove();
              lNodeSurligne = null;
            }
            if (lStart > -1) {
              lNodeSurligne = lNodeCourant;
              if (lNodeCourant.nodeType === 3) {
                lNodeSurligne = lNodeCourant.parentElement;
              }
              const lRectConteneur =
                ObjetPosition_1.GPosition.getClientRect(lNodeSurligne);
              let lRects;
              if (lEnd === 0 && lNodeCourant.nodeType === 1) {
                lRects = [lRectConteneur];
              } else {
                lRange = new Range();
                lRange.setStart(lNodeCourant, lStart);
                lRange.setEnd(lNodeCourant, lEnd);
                lRects = lRange.getClientRects();
              }
              this.setRange(lNodeSurligne, lRectConteneur, lRects);
              lIndiceOffset = lIndiceOffset + aEvent.charLength;
              lIndiceOffsetNode = lEnd;
            }
          }
        };
        speechSynthesis.speak(this.utterance);
      }
      forcerArretLecture() {
        var _a, _b, _c;
        if (!this.supportee) {
          if (
            (_a = (0, AccessApp_1.getApp)()) === null || _a === void 0
              ? void 0
              : _a.estAppliMobile
          ) {
            (_c =
              (_b = window.messageData) === null || _b === void 0
                ? void 0
                : _b.push) === null || _c === void 0
              ? void 0
              : _c.call(_b, { action: 'stopTts' });
          }
          return;
        }
        if (this.supportee && speechSynthesis.speaking) {
          if (this.nodeSurligne) {
            $(this.nodeSurligne)
              .removeClass('surlignage-conteneur')
              .find(`.${'surlignage-recherche-texte'}`)
              .remove();
            this.nodeSurligne = null;
          }
          this.reset(this.infoAttente.nodeBouton);
          speechSynthesis.cancel();
        }
      }
      setRange(aNode, aRectCellule, aRects) {
        this.nodeSurligne = aNode;
        const lRectCellule = aRectCellule;
        for (let i = 0; i < aRects.length; i++) {
          const lRect = aRects[i];
          if (lRect.width > 0 && lRect.height > 0) {
            if (i > 0) {
              const lRectPrec = aRects[i - 1];
              if (
                lRectPrec.x === lRect.x &&
                lRectPrec.y === lRect.y &&
                lRectPrec.width === lRect.width &&
                lRectPrec.height === lRect.height
              ) {
                continue;
              }
            }
            $(aNode)
              .addClass('surlignage-conteneur')
              .append(
                IE.jsx.str(
                  IE.jsx.fragment,
                  null,
                  IE.jsx.str('div', {
                    class: 'surlignage-recherche-texte',
                    style: `top:${lRect.y - lRectCellule.y}px; left:${lRect.x - lRectCellule.x}px; width:${lRect.width}px; height:${lRect.height}px;"`,
                  }),
                ),
              );
          }
        }
      }
      reset(aNodePlay = this.infoAttente.nodeBouton) {
        $(aNodePlay).removeClass('icon_stop_sign');
        $(aNodePlay).addClass('icon_play_sign');
      }
      getTextNodesDUneChaineHTML(aChaine) {
        const lElement = document.createElement('div');
        lElement.innerHTML = aChaine;
        return this.getTextNodesIn(lElement);
      }
      getTextesDUneChaineHTML(aChaine) {
        const lNodes = this.getTextNodesDUneChaineHTML(aChaine);
        const lResult = [];
        lNodes.forEach((aNode) => {
          const lJNode = $(aNode);
          const lText = lJNode.text() || lJNode.val();
          lResult.push(lText);
        });
        return lResult;
      }
      getTextNodesIn(node) {
        let textNodes = [],
          nonWhitespaceMatcher = /\S/;
        function getTextNodes(node) {
          if (node.classList && node.classList.contains('noSpeechSynthesis')) {
            return;
          }
          if (node.nodeType === 3) {
            if (nonWhitespaceMatcher.test(node.nodeValue)) {
              textNodes.push(node);
            }
          } else if (
            node.nodeType === 1 &&
            (!!node.ariaLabel ||
              !!node.title ||
              (!!node.attributes.alt && node.attributes.alt.nodeValue))
          ) {
            node.data =
              node.ariaLabel || node.title || node.attributes.alt.nodeValue;
            textNodes.push(node);
          } else {
            for (let i = 0, len = node.childNodes.length; i < len; ++i) {
              getTextNodes(node.childNodes[i]);
            }
          }
        }
        getTextNodes(node);
        return textNodes;
      }
      getDebutFinInNode(aNode, aWord, aIndiceDebut, aLength) {
        const lObj = { debut: -1, fin: -1 };
        const lEstNodeTexte = !!aNode && !!aNode.nodeValue;
        if (!lEstNodeTexte) {
          if (!!aNode) {
            lObj.debut = aNode.data.indexOf(aWord, aIndiceDebut);
            if (lObj.debut > -1) {
              lObj.debut = 0;
            }
            lObj.fin = 0;
          }
        } else {
          lObj.debut = aNode.data.indexOf(aWord, aIndiceDebut);
          lObj.fin = lObj.debut + aLength;
        }
        return lObj;
      }
    }
    exports.SyntheseVocale = new UtilitaireSyntheseVocale();
  },
  fn: 'utilitairesynthesevocale.js',
});