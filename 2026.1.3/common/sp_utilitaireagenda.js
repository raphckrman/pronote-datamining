IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ActionsAgenda = exports.UtilitaireAgenda = void 0;
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const ObjetElement_1 = require('@cp/script/ObjetElement');
    const TypeEnsembleNombre_1 = require('@cp/script/Type/TypeEnsembleNombre');
    const Enumere_Etat_1 = require('@cp/script/Enumere/Enumere_Etat');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const UtilitaireVisiosSco_1 = require('@scolys/produit/script/utilitaire/UtilitaireVisiosSco');
    const IEHtml_Chips_1 = require('@cp/Produit/Script/IEHtml.Chips');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const Enumere_Ressource_1 = require('@scolys/espace/script/enumere/Enumere_Ressource');
    const TypeGenreEvenementAgenda_1 = require('@scolys/espace/script/enumere/TypeGenreEvenementAgenda');
    exports.UtilitaireAgenda = {
      _getEvenementParDefaut(aDate, aFamille, aPourPrimaire) {
        const lEvenement = ObjetElement_1.ObjetElement.create({
          Libelle: '',
          DateDebut: new Date(aDate),
          DateFin: new Date(aDate),
          datePublication: new Date(aDate),
          sansHoraire: true,
          publie: true,
          proprietaire: true,
          Commentaire: '',
          famille: aFamille,
          CouleurCellule: aFamille ? aFamille.couleur : '#FFFF00',
          genresPublicEntite: new TypeEnsembleNombre_1.TypeEnsembleNombre(),
          avecElevesRattaches: false,
          listePublicEntite: new ObjetListeElements_1.ObjetListeElements(),
          listePublicIndividu: new ObjetListeElements_1.ObjetListeElements(),
          avecDirecteur: aPourPrimaire ? true : undefined,
          Public: {
            listeClassesGroupes: new ObjetListeElements_1.ObjetListeElements(),
            listeProfs: new ObjetListeElements_1.ObjetListeElements(),
          },
          listeDocJoints: new ObjetListeElements_1.ObjetListeElements(),
        });
        lEvenement.setEtat(Enumere_Etat_1.EGenreEtat.Creation);
        lEvenement.DateDebut.setHours(9);
        lEvenement.DateFin.setHours(17);
        lEvenement.DateDebut.setMinutes(0);
        lEvenement.DateFin.setMinutes(0);
        return lEvenement;
      },
      composeListeAccompagnant(aEvenement) {
        var _a, _b;
        if (
          (aEvenement === null || aEvenement === void 0
            ? void 0
            : aEvenement.getGenre()) !==
          TypeGenreEvenementAgenda_1.TypeGenreEvenementAgenda
            .tgea_AbsencesRessource
        ) {
          return '';
        }
        const lListeProf =
          (_a =
            aEvenement === null || aEvenement === void 0
              ? void 0
              : aEvenement.listeAccompagnant) === null || _a === void 0
            ? void 0
            : _a.getListeElements((aElement) => {
                return (
                  aElement.getGenre() ===
                  Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Enseignant
                );
              });
        const lListePersonnel =
          (_b =
            aEvenement === null || aEvenement === void 0
              ? void 0
              : aEvenement.listeAccompagnant) === null || _b === void 0
            ? void 0
            : _b.getListeElements((aElement) => {
                return (
                  aElement.getGenre() ===
                  Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel
                );
              });
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          (lListeProf === null || lListeProf === void 0
            ? void 0
            : lListeProf.count()) > 0 &&
            IE.jsx.str(
              'div',
              { class: 'ie-sous-titre' },
              'Professeurs',
              ' : ',
              lListeProf.getTableauLibelles().join(', '),
            ),
          (lListePersonnel === null || lListePersonnel === void 0
            ? void 0
            : lListePersonnel.count()) > 0 &&
            IE.jsx.str(
              'div',
              { class: 'ie-sous-titre' },
              'Personnels',
              ' : ',
              lListePersonnel.getTableauLibelles().join(', '),
            ),
        );
      },
      composeConseilClasse(aEvenement) {
        const H = [];
        const lPresidentCC = !!aEvenement.presidentCC
          ? 'Président' +
            ' : ' +
            aEvenement.presidentCC
          : '';
        let lProfPrincipaux = '';
        if (
          !!aEvenement.listeProfsPrincipaux &&
          aEvenement.listeProfsPrincipaux.count() > 0
        ) {
          lProfPrincipaux =
            aEvenement.listeProfsPrincipaux.count() > 1
              ? 'Professeurs principaux'
              : 'Professeur(e) principal(e)';
          lProfPrincipaux +=
            ' : ' +
            aEvenement.listeProfsPrincipaux.getTableauLibelles().join(', ');
        }
        let lParentDelegues = '';
        if (
          !!aEvenement.listeDeleguesParents &&
          aEvenement.listeDeleguesParents.count() > 0
        ) {
          lParentDelegues =
            'Parents délégués' +
            ' : ';
          lParentDelegues += aEvenement.listeDeleguesParents
            .getTableauLibelles()
            .join(', ');
        }
        let lElevesDelegues = '';
        if (
          !!aEvenement.listeDeleguesEleves &&
          aEvenement.listeDeleguesEleves.count() > 0
        ) {
          lElevesDelegues =
            'Élèves délégués' +
            ' : ';
          lElevesDelegues += aEvenement.listeDeleguesEleves
            .getTableauLibelles()
            .join(', ');
        }
        H.push(
          '<div class="Espace">',
          '<ul class="list-as-menu">',
          lPresidentCC ? '<li> ' + lPresidentCC + '</li>' : '',
          lProfPrincipaux ? '<li> ' + lProfPrincipaux + '</li>' : '',
          lParentDelegues ? '<li> ' + lParentDelegues + '</li>' : '',
          lElevesDelegues ? '<li> ' + lElevesDelegues + '</li>' : '',
          '</ul>',
          '</div>',
        );
        if (aEvenement.visio && aEvenement.visio.url) {
          H.push(
            IE.jsx.str(
              'div',
              { class: 'agenda-cc-visio' },
              IE.jsx.str(
                IEHtml_Chips_1.Chips,
                {
                  class: [
                    'iconic',
                    UtilitaireVisiosSco_1.UtilitaireVisios.getNomIconePresenceVisios(),
                  ],
                  href: ObjetChaine_1.GChaine.verifierURLHttp(
                    aEvenement.visio.url,
                  ),
                },
                aEvenement.visio.libelleLien ||
                  'Lancer la visio',
              ),
              aEvenement.visio.commentaire
                ? IE.jsx.str(
                    'label',
                    null,
                    ObjetChaine_1.GChaine.replaceRCToHTML(
                      aEvenement.visio.commentaire,
                    ),
                  )
                : '',
            ),
          );
        }
        return H.join('');
      },
      getLibelleInfosSupp() {
        var _a, _b;
        var _c;
        const lEtatUtilisateur = (0, AccessApp_1.getApp)().getEtatUtilisateur();
        return (_c =
          (_b =
            (_a = lEtatUtilisateur.listeOnglets.getElementParGenre(
              lEtatUtilisateur.getGenreOnglet(),
            )) === null || _a === void 0
              ? void 0
              : _a.getLibelle) === null || _b === void 0
            ? void 0
            : _b.call(_a)) !== null && _c !== void 0
          ? _c
          : 'agenda';
      },
      getFiltreParDefault() {
        return {
          avecEvenementsPasses: false,
          uniquementMesEvenements: false,
          avecRdvPartages: true,
        };
      },
      getInfosOnglet() {
        var _a;
        const lEtatUtilisateur =
          (_a = (0, AccessApp_1.getApp)()) === null || _a === void 0
            ? void 0
            : _a.getEtatUtilisateur();
        const lInfosSupp = lEtatUtilisateur.getInfosSupp(
          exports.UtilitaireAgenda.getLibelleInfosSupp(),
        );
        if (!('Filtre' in lInfosSupp)) {
          lInfosSupp.Filtre = exports.UtilitaireAgenda.getFiltreParDefault();
        }
        return lInfosSupp;
      },
      _getFiltre() {
        var _a;
        const lEtatUtilisateur =
          (_a = (0, AccessApp_1.getApp)()) === null || _a === void 0
            ? void 0
            : _a.getEtatUtilisateur();
        return lEtatUtilisateur.getInfosSupp(
          exports.UtilitaireAgenda.getLibelleInfosSupp(),
        )['Filtre'];
      },
      setAvecEvenementsPasses(aAvecEvenementsPasses) {
        const lFiltre = exports.UtilitaireAgenda._getFiltre();
        lFiltre.avecEvenementsPasses = aAvecEvenementsPasses;
      },
      setUniquemmentMesEvenements(aUniquemmentMesEvenements) {
        const lFiltre = exports.UtilitaireAgenda._getFiltre();
        lFiltre.uniquementMesEvenements = aUniquemmentMesEvenements;
      },
      setAvecRdvPartages(aAvecRdvPartages) {
        const lFiltre = exports.UtilitaireAgenda._getFiltre();
        lFiltre.avecRdvPartages = aAvecRdvPartages;
      },
    };
    var ActionsAgenda;
    (function (ActionsAgenda) {
      ActionsAgenda['Modifier'] = 'Modifier';
      ActionsAgenda['Dupliquer'] = 'Dupliquer';
      ActionsAgenda['Supprimer'] = 'Supprimer';
      ActionsAgenda['VoirDetail'] = 'VoirDetail';
    })(ActionsAgenda || (exports.ActionsAgenda = ActionsAgenda = {}));
  },
  fn: 'utilitaireagenda.js',
});