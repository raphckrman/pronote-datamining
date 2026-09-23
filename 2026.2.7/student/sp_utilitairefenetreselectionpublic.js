IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.requeteListesDiffusion =
      exports.ouvrirFenetreListesDiffusion =
      exports.getHtmlFiltreSelectionPublic =
      exports.getCumulPourFenetrePublic =
        void 0;
    const ObjetFenetre_SelectionPublic_1 = require('@cp/Espace/Script/Fenetres/ObjetFenetre_SelectionPublic');
    const Enumere_Ressource_1 = require('@scolys/espace/script/enumere/Enumere_Ressource');
    const IEHtml_CheckboxRadio_1 = require('@cp/Produit/Script/IEHtml.CheckboxRadio');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const DonneesListe_SelectionDiffusion_1 = require('@scolys/espace/script/donneesliste/DonneesListe_SelectionDiffusion');
    const ObjetRequeteListeDiffusion_1 = require('@scolys/produit/script/requete/ObjetRequeteListeDiffusion');
    const ObjetTri_1 = require('@cp/script/ObjetTri');
    const ObjetFenetre_SelectionListeDiffusion_1 = require('@scolys/espace/script/ObjetFenetre_SelectionListeDiffusion');
    const getCumulPourFenetrePublic = function (aGenre, aChecked, aNombre) {
      switch (aGenre) {
        case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve:
          return aChecked === true
            ? ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic
                .initial
            : ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic
                .classe;
        case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Responsable:
          return aNombre > 200
            ? ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic
                .initial
            : ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic.sans;
        case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Classe:
        case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant:
        case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel:
        case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_MaitreDeStage:
        case Enumere_Ressource_1.TypeHttpRessource
          .HttpRessource_InspecteurPedagogique:
          return ObjetFenetre_SelectionPublic_1.TypeGenreCumulSelectionPublic
            .sans;
        default:
          return;
      }
    };
    exports.getCumulPourFenetrePublic = getCumulPourFenetrePublic;
    const getHtmlFiltreSelectionPublic = (aParams) => {
      const lEstPourPrimaire = (0, AccessApp_1.getApp)()
        .getEtatUtilisateur()
        .pourPrimaire();
      return IE.jsx.str(
        IE.jsx.fragment,
        null,
        IE.jsx.str(
          'div',
          { class: 'm-top-l' },
          IE.jsx.str(
            IEHtml_CheckboxRadio_1.Checkbox,
            { ie_model: aParams.modelCBProfPincipaux },
            lEstPourPrimaire
              ? 'Professeurs référents'
              : 'Professeurs principaux',
          ),
        ),
        !lEstPourPrimaire &&
          IE.jsx.str(
            'div',
            { class: 'm-top-l' },
            IE.jsx.str(
              IEHtml_CheckboxRadio_1.Checkbox,
              { ie_model: aParams.modelCBTuteurs },
              'Tuteurs',
            ),
          ),
      );
    };
    exports.getHtmlFiltreSelectionPublic = getHtmlFiltreSelectionPublic;
    const ouvrirFenetreListesDiffusion = async (
      aGenresRessource,
      aCallback,
    ) => {
      const lListeDiffusion = await (0, exports.requeteListesDiffusion)(
        aGenresRessource,
      );
      lListeDiffusion.parcourir((aElement) => {
        aElement.cmsActif = false;
      });
      const lFenetre =
        new ObjetFenetre_SelectionListeDiffusion_1.ObjetFenetre_SelectionListeDiffusion(
          { pere: this },
        );
      lFenetre.avecLibelleListeFiltre = true;
      lFenetre.initAfficher({
        options: {
          callback: (aNumeroBtn, aSelection, aAvecChangement, aSelections) => {
            if (aNumeroBtn === 1 && aAvecChangement && aSelections) {
              aCallback(aSelections);
            }
          },
        },
      });
      lFenetre.setDonnees(
        new DonneesListe_SelectionDiffusion_1.DonneesListe_SelectionDiffusion(
          lListeDiffusion,
        ),
      );
    };
    exports.ouvrirFenetreListesDiffusion = ouvrirFenetreListesDiffusion;
    const requeteListesDiffusion = async (aGenresRessource) => {
      const lCache =
        ObjetRequeteListeDiffusion_1.ObjetRequeteListeDiffusion.getCacheListeDiffFiltreParGenre(
          aGenresRessource,
        );
      if (lCache) {
        return lCache;
      }
      const lResult =
        await new ObjetRequeteListeDiffusion_1.ObjetRequeteListeDiffusion().lancerRequete(
          { filtreGenresIndividu: aGenresRessource },
        );
      lResult.liste.setTri([ObjetTri_1.ObjetTri.init('Libelle')]).trier();
      ObjetRequeteListeDiffusion_1.ObjetRequeteListeDiffusion.setCacheListeDiffFiltreParGenre(
        aGenresRessource,
        lResult.liste,
      );
      return lResult.liste;
    };
    exports.requeteListesDiffusion = requeteListesDiffusion;
  },
  fn: 'utilitairefenetreselectionpublic.js',
});