IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ZoneFenetre = void 0;
    const ObjetHtml_1 = require('ObjetHtml');
    const Invocateur_1 = require('Invocateur');
    const UtilitaireMenuContextuelNatif_1 = require('UtilitaireMenuContextuelNatif');
    const ZoneFenetre = {
      idZoneFenetre: 'zone_fenetre',
      idConteneurApp: '',
      getElementZoneFenetre() {
        const lId = ZoneFenetre.idZoneFenetre;
        let lElement = ObjetHtml_1.GHtml.getElement(lId);
        if (!ObjetHtml_1.GHtml.estElement(lElement)) {
          lElement = ObjetHtml_1.GHtml.htmlToDOM(
            IE.jsx.str('div', { id: lId, class: 'NePasImprimer' }),
          );
          const lDivFrere = ZoneFenetre.idConteneurApp
            ? ObjetHtml_1.GHtml.getElement(ZoneFenetre.idConteneurApp)
            : null;
          if (lDivFrere && lDivFrere.parentNode) {
            lDivFrere.parentNode.insertBefore(lElement, lDivFrere);
          } else {
            document.body.appendChild(lElement);
          }
          Invocateur_1.Invocateur.evenement('creationZoneFenetre', lElement);
          UtilitaireMenuContextuelNatif_1.UtilitaireMenuContextuelNatif.desactiverSurElement(
            $(lElement),
          );
        }
        return lElement;
      },
      ajouterFenetre(aId, aZIndex) {
        if (ObjetHtml_1.GHtml.elementExiste(aId)) {
          ZoneFenetre.enleverFenetre(aId);
          IE.log.addLog(
            'ZoneFenetre.ajouterFenetre : la fenetre ' + aId + ' existe déjà!',
          );
        }
        const lZIndex = aZIndex === 0 ? 0 : aZIndex || 1100;
        ObjetHtml_1.GHtml.addHtml(
          ZoneFenetre.getElementZoneFenetre(),
          IE.jsx.str('div', {
            class: 'zone-fenetre',
            id: aId,
            style: `display:none;${lZIndex ? 'z-index:' + lZIndex : ''}`,
          }),
        );
      },
      enleverFenetre(aId) {
        const lElement = ObjetHtml_1.GHtml.getElement(aId);
        if (
          ObjetHtml_1.GHtml.estElement(lElement) &&
          lElement.parentNode &&
          'id' in lElement.parentNode &&
          lElement.parentNode.id === ZoneFenetre.idZoneFenetre
        ) {
          $(lElement).remove();
        } else {
          IE.log.addLog('erreur enleverFenetre de ' + aId);
        }
      },
    };
    exports.ZoneFenetre = ZoneFenetre;
  },
  fn: 'iezonefenetre.js',
});