IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetParametresCP = void 0;
    const TypeDomaine_1 = require('@cp/script/Type/TypeDomaine');
    class ObjetParametresCP {
      constructor() {
        this.langue = '';
        this.langID = 0;
        this.premierJourSemaine = 0;
        this.JoursOuvres = new TypeDomaine_1.TypeDomaine(false);
        this.JoursFeries = new TypeDomaine_1.TypeDomaine(false);
        this.afficherAbbreviationNiveauDAcquisition = false;
        this.PlacesParJour = 0;
        this.urlFAQEnregistrementDoubleAuth = '';
        this.urlLogo = '';
        this.urlSiteIndexEducation = '';
        this.urlInfosHebergement = '';
        this.urlTutoVideoSecurite = '';
        this.urlTutoEnregistrerAppareils = '';
        this.logoDepartementImage = '';
        this.logoDepartementLien = '';
        this.urlAide = '';
        this.urlDeclarationAccessibilite = '';
        this.accessibiliteNonConforme = false;
        this.URLEspace = '';
        this.NomEtablissementConnexion = '';
        this.NomEtablissement = '';
        this.logoProduitCss = '';
        this.labelLienProduit = '';
        this.lienMentions = '';
        this.publierMentions = false;
        this.public = false;
        this.urlConfidentialite = '';
        this.minBaremeQuestionQCM = 0;
        this.maxBaremeQuestionQCM = 0;
        this.maxNombrePointsQCM = 0;
        this.maxNiveauQCM = 0;
        this.PageEtablissement = '';
        this.avecMembre = false;
        this.aideContextuelle = null;
        this.versionAppliMobile = '';
        this.derniereVersionAppliMobile = '';
      }
      getNomEspace() {
        return '';
      }
      getCookieValidationAppli() {
        return '';
      }
      estPeriodeTrimestrielle(aNumeroPeriode) {
        return false;
      }
      estPeriodeSemestrielle(aNumeroPeriode) {
        return false;
      }
      estPeriodeOfficielle(aNumeroPeriode) {
        return true;
      }
      setDocumentTitle(aLibelleOnglet) {
        return;
      }
    }
    exports.ObjetParametresCP = ObjetParametresCP;
  },
  fn: 'objetparametrescp.js',
});