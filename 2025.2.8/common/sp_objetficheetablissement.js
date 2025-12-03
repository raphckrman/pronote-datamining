IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFicheEtablissement = void 0;
    const ObjetFiche_1 = require('ObjetFiche');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const GUID_1 = require('GUID');
    const ObjetRequeteSaisieAccepterReglement_1 = require('ObjetRequeteSaisieAccepterReglement');
    const ObjetHtml_1 = require('ObjetHtml');
    const Enumere_Espace_1 = require('Enumere_Espace');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetChaine_1 = require('ObjetChaine');
    const TypeFichierExterneHttpSco_1 = require('TypeFichierExterneHttpSco');
    const Enumere_DocumentJoint_1 = require('Enumere_DocumentJoint');
    const UtilitaireContactReferents_1 = require('UtilitaireContactReferents');
    const ObjetTabOnglets_1 = require('ObjetTabOnglets');
    require('Fiche-Etablissement.css');
    class ObjetFicheEtablissement extends ObjetFiche_1.ObjetFiche {
      constructor(...aParams) {
        super(...aParams);
        this.etatUtilisateurPN = GApplication.getEtatUtilisateur();
        this.idInformation = GUID_1.GUID.getId();
        this.optionsFicheEtab = this.getOptionsParDefaut();
        this.setOptionsFenetre({
          fermerFenetreSurClicHorsFenetre: true,
          titre: 'Contacter l'établissement',
        });
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(this), {
          accepterReglement: {
            getValue() {
              return aInstance.etablissementAffiche.relancerNotif;
            },
            setValue(aValue) {
              aInstance.etablissementAffiche.relancerNotif = true;
              new ObjetRequeteSaisieAccepterReglement_1.ObjetRequeteSaisieAccepterReglement(
                aInstance,
              ).lancerRequete({
                etablissement: aInstance.etablissementAffiche,
                accepterReglement: aValue,
              });
            },
            getDisabled() {
              return aInstance.etablissementAffiche.relancerNotif;
            },
          },
          contacterReferentsVS: {
            event() {
              var _a;
              if (
                (_a = aInstance.etablissementAffiche) === null || _a === void 0
                  ? void 0
                  : _a.listeReferentsVieScolaire
              ) {
                UtilitaireContactReferents_1.UtilitaireContactReferents.contacterReferentsVieScolaire(
                  aInstance,
                  aInstance.etablissementAffiche.listeReferentsVieScolaire,
                );
              }
            },
          },
        });
      }
      jsxIdentiteOngletEtablissement() {
        return {
          class: ObjetTabOnglets_1.ObjetTabOnglets,
          pere: this,
          start: (aInstance) => {
            aInstance.setDonnees(
              this.listeEtablissements,
              this.listeEtablissements.getIndiceParElement(
                this.etablissementAffiche,
              ),
            );
          },
          evenement: (aEtablissement) => {
            ObjetHtml_1.GHtml.setHtml(
              this.idInformation,
              this.composeInformations(aEtablissement),
              { controleur: this.controleur },
            );
          },
        };
      }
      setDonnees(aParams) {
        var _a, _b;
        this.optionsFicheEtab = Object.assign(this.optionsFicheEtab, aParams);
        let lListeEtab = null;
        if (this.optionsFicheEtab.estEspaceAvecMembre) {
          if (
            !!((_b =
              (_a = this.etatUtilisateurPN) === null || _a === void 0
                ? void 0
                : _a.getMembre()) === null || _b === void 0
              ? void 0
              : _b.Etablissement)
          ) {
            lListeEtab = new ObjetListeElements_1.ObjetListeElements();
            lListeEtab.add(
              this.optionsFicheEtab.listeInformationsEtablissements.getElementParNumero(
                this.etatUtilisateurPN.getMembre().Etablissement.getNumero(),
              ),
            );
          } else {
            lListeEtab = this.optionsFicheEtab.listeInformationsEtablissements;
          }
        } else {
          lListeEtab = this.optionsFicheEtab.listeInformationsEtablissements;
        }
        this.listeEtablissements =
          new ObjetListeElements_1.ObjetListeElements();
        if (lListeEtab) {
          for (let i = 0, lNbr = lListeEtab.count(); i < lNbr; i++) {
            if (lListeEtab.get(i).avecInformations) {
              this.listeEtablissements.add(lListeEtab.get(i));
            }
          }
        }
        if (this.listeEtablissements.count()) {
          this.etablissementAffiche = this.listeEtablissements.get(0);
          this.afficherFiche({ centrerParDefaut: true });
        }
      }
      composeContenu() {
        const H = [];
        H.push(
          IE.jsx.str('div', {
            'ie-identite': this.jsxIdentiteOngletEtablissement.bind(this),
          }),
        );
        H.push(
          IE.jsx.str(
            'div',
            {
              id: this.idInformation,
              class: 'fiche-etablissement informations',
            },
            this.composeInformations(this.etablissementAffiche),
          ),
        );
        return H.join('');
      }
      getOptionsParDefaut() {
        var _a, _b;
        const lEstEspaceAvecMembre = [
          Enumere_Espace_1.EGenreEspace.Parent,
          Enumere_Espace_1.EGenreEspace.Mobile_Parent,
          Enumere_Espace_1.EGenreEspace.Accompagnant,
          Enumere_Espace_1.EGenreEspace.Mobile_Accompagnant,
          Enumere_Espace_1.EGenreEspace.Entreprise,
          Enumere_Espace_1.EGenreEspace.Mobile_Entreprise,
          Enumere_Espace_1.EGenreEspace.PrimParent,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimParent,
          Enumere_Espace_1.EGenreEspace.PrimAccompagnant,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimAccompagnant,
          Enumere_Espace_1.EGenreEspace.Tuteur,
        ].includes(
          (_a =
            this === null || this === void 0
              ? void 0
              : this.etatUtilisateurPN) === null || _a === void 0
            ? void 0
            : _a.GenreEspace,
        );
        const lAvecReglementAAccepte = [
          Enumere_Espace_1.EGenreEspace.Parent,
          Enumere_Espace_1.EGenreEspace.Eleve,
          Enumere_Espace_1.EGenreEspace.Mobile_Parent,
          Enumere_Espace_1.EGenreEspace.Mobile_Eleve,
          Enumere_Espace_1.EGenreEspace.PrimParent,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimParent,
          Enumere_Espace_1.EGenreEspace.PrimEleve,
          Enumere_Espace_1.EGenreEspace.Mobile_PrimEleve,
        ].includes(
          (_b =
            this === null || this === void 0
              ? void 0
              : this.etatUtilisateurPN) === null || _b === void 0
            ? void 0
            : _b.GenreEspace,
        );
        return {
          listeInformationsEtablissements: null,
          estSurMobile: IE.estMobile,
          estEspaceAvecMembre: lEstEspaceAvecMembre,
          avecReglementAAccepter: lAvecReglementAAccepte,
        };
      }
      composeInformations(aEtablissement) {
        const H = [];
        const lEtablissement = aEtablissement;
        if (lEtablissement.urlLogo) {
          H.push(
            '<img class="logo" src="',
            lEtablissement.urlLogo,
            '" alt="" onerror="$(this).remove();" />',
          );
        }
        if (
          lEtablissement.Coordonnees.Adresse1 ||
          lEtablissement.Coordonnees.Adresse2 ||
          lEtablissement.Coordonnees.Adresse3 ||
          lEtablissement.Coordonnees.Adresse4
        ) {
          H.push('<div class="infos-contain icon_map_marker">');
          H.push('<div>');
          if (lEtablissement.Coordonnees.Adresse1) {
            H.push('<p>', lEtablissement.Coordonnees.Adresse1, '</p>');
          }
          if (lEtablissement.Coordonnees.Adresse2) {
            H.push('<p>', lEtablissement.Coordonnees.Adresse2, '</p>');
          }
          if (lEtablissement.Coordonnees.Adresse3) {
            H.push('<p>', lEtablissement.Coordonnees.Adresse3, '</p>');
          }
          if (lEtablissement.Coordonnees.Adresse4) {
            H.push('<p>', lEtablissement.Coordonnees.Adresse4, '</p>');
          }
          H.push('<p>');
          if (
            lEtablissement.Coordonnees.CodePostal &&
            !lEtablissement.Coordonnees.LibellePostal
          ) {
            H.push('<span>', lEtablissement.Coordonnees.CodePostal, '</span>');
          }
          if (lEtablissement.Coordonnees.LibellePostal) {
            H.push(
              '<span>',
              lEtablissement.Coordonnees.LibellePostal,
              '</span>',
            );
          }
          if (lEtablissement.Coordonnees.LibelleVille) {
            H.push(
              '<span>',
              lEtablissement.Coordonnees.LibelleVille,
              '</span>',
            );
          }
          H.push('</p>');
          if (lEtablissement.Coordonnees.Province) {
            H.push('<p>', lEtablissement.Coordonnees.Province, '</p>');
          }
          if (lEtablissement.Coordonnees.Pays) {
            H.push('<p>', lEtablissement.Coordonnees.Pays, '</p>');
          }
          H.push('</div></div>');
        }
        if (
          lEtablissement.Coordonnees.NumPersonnalise1 &&
          lEtablissement.Coordonnees.NumPersonnalise1.Numero
        ) {
          H.push(
            '<div class="infos-contain icon_phone">',
            '<div class="telephone" >',
            '<p>',
            lEtablissement.Coordonnees.NumPersonnalise1.NomPersonnalise
              ? lEtablissement.Coordonnees.NumPersonnalise1.NomPersonnalise +
                  ' : '
              : '',
            '</p>',
            '<p>',
            this._getTelephoneAvecEspaces(
              lEtablissement.Coordonnees.NumPersonnalise1.Numero,
            ),
            '</p></div></div>',
          );
        }
        if (
          lEtablissement.Coordonnees.NumPersonnalise2 &&
          lEtablissement.Coordonnees.NumPersonnalise2.Numero
        ) {
          H.push(
            '<div class="infos-contain icon_phone">',
            '<div class="telephone" >',
            '<p>',
            lEtablissement.Coordonnees.NumPersonnalise2.NomPersonnalise
              ? lEtablissement.Coordonnees.NumPersonnalise2.NomPersonnalise +
                  ' : '
              : '',
            '</p>',
            '<p>',
            this._getTelephoneAvecEspaces(
              lEtablissement.Coordonnees.NumPersonnalise2.Numero,
            ),
            '</p></div></div>',
          );
        }
        if (
          lEtablissement.Coordonnees.NumPersonnalise3 &&
          lEtablissement.Coordonnees.NumPersonnalise3.Numero
        ) {
          H.push(
            '<div class="infos-contain icon_phone">',
            '<div>',
            '<p>',
            lEtablissement.Coordonnees.NumPersonnalise3.NomPersonnalise
              ? lEtablissement.Coordonnees.NumPersonnalise3.NomPersonnalise +
                  ' : '
              : '',
            '</p>',
            '<p>',
            this._getTelephoneAvecEspaces(
              lEtablissement.Coordonnees.NumPersonnalise3.Numero,
            ),
            '</p></div></div>',
          );
        }
        if (lEtablissement.Coordonnees.SiteInternet) {
          H.push(
            '<div class="infos-contain flex-center icon_curseur_souris">',
            '<a class="Souligne AvecMain" target="_blank" href="',
            ObjetChaine_1.GChaine.verifierURLHttp(
              lEtablissement.Coordonnees.SiteInternet,
            ),
            '">',
            lEtablissement.Coordonnees.SiteInternet,
            '</a>',
            '</div>',
          );
        }
        if (
          lEtablissement.Coordonnees.EMailPersonnalise1 &&
          lEtablissement.Coordonnees.EMailPersonnalise1.Mail
        ) {
          H.push(
            '<div class="infos-contain icon_envelope">',
            '<div>',
            '<p>',
            lEtablissement.Coordonnees.EMailPersonnalise1.NomPersonnalise
              ? lEtablissement.Coordonnees.EMailPersonnalise1.NomPersonnalise +
                  ' : '
              : '',
            '</p>',
            '<p>',
            this._composeEmail(
              lEtablissement.Coordonnees.EMailPersonnalise1.Mail,
            ),
            '</p></div></div>',
          );
        }
        if (
          lEtablissement.Coordonnees.EMailPersonnalise2 &&
          lEtablissement.Coordonnees.EMailPersonnalise2.Mail
        ) {
          H.push(
            '<div class="infos-contain icon_envelope">',
            '<div>',
            '<p>',
            lEtablissement.Coordonnees.EMailPersonnalise2.NomPersonnalise
              ? lEtablissement.Coordonnees.EMailPersonnalise2.NomPersonnalise +
                  ' : '
              : '',
            '</p>',
            '<p>',
            this._composeEmail(
              lEtablissement.Coordonnees.EMailPersonnalise2.Mail,
            ),
            '</p></div></div>',
          );
        }
        let lFichier;
        if (lEtablissement.avecFichierRI) {
          lFichier = new ObjetElement_1.ObjetElement(
            lEtablissement.LibelleFichierRI,
            lEtablissement.getNumero(),
            Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier,
          );
          H.push(
            '<div class="GrandEspaceHaut PetitEspaceBas">',
            ObjetChaine_1.GChaine.composerUrlLienExterne({
              documentJoint: lFichier,
              libelleEcran: 'Règlement intérieur',
              genreRessource:
                TypeFichierExterneHttpSco_1.TypeFichierExterneHttpSco
                  .EtablissementReglement,
              afficherIconeDocument: true,
              iconeOverride: 'icon_doc_telech',
            }),
            '</div>',
          );
        }
        if (lEtablissement.avecFichierCU) {
          lFichier = new ObjetElement_1.ObjetElement(
            lEtablissement.LibelleFichierCU,
            lEtablissement.getNumero(),
            Enumere_DocumentJoint_1.EGenreDocumentJoint.Fichier,
          );
          H.push(
            '<div class="EspaceHaut GrandEspaceBas">',
            ObjetChaine_1.GChaine.composerUrlLienExterne({
              documentJoint: lFichier,
              libelleEcran: 'Charte d'utilisation',
              genreRessource:
                TypeFichierExterneHttpSco_1.TypeFichierExterneHttpSco
                  .EtablissementCharte,
              afficherIconeDocument: true,
              iconeOverride: 'icon_doc_telech',
            }),
            '</div>',
          );
        }
        if (
          (lEtablissement.avecFichierRI || lEtablissement.avecFichierCU) &&
          this.optionsFicheEtab.avecReglementAAccepter
        ) {
          H.push('<div class="GrandEspaceDroit">');
          H.push(
            '<ie-checkbox ie-model="accepterReglement">' +
              'J'ai pris connaissance des documents disponibles en téléchargement' +
              '</ie-checkbox>',
          );
          H.push('</div>');
        }
        if (
          this.optionsFicheEtab.avecReferentsHarcelement &&
          lEtablissement.avecReferentsHarcelementPublie
        ) {
          const lListeReferentsHarcelement =
            lEtablissement.listeReferentsHarcelement;
          if (
            lListeReferentsHarcelement &&
            lListeReferentsHarcelement.count() > 0
          ) {
            const lStrReferents = [];
            for (const lReferent of lListeReferentsHarcelement) {
              lStrReferents.push(
                IE.jsx.str(
                  IE.jsx.fragment,
                  null,
                  IE.jsx.str(
                    'p',
                    null,
                    lReferent.getLibelle(),
                    lReferent.discipline ? ` (${lReferent.discipline})` : '',
                  ),
                ),
              );
            }
            H.push(
              IE.jsx.str(
                IE.jsx.fragment,
                null,
                IE.jsx.str(
                  'div',
                  { class: 'infos-contain icon_stop_harcelement' },
                  IE.jsx.str(
                    'div',
                    null,
                    IE.jsx.str(
                      'p',
                      null,
                      'Référent(s) contre le harcèlement'],
                      ),
                      ' :',
                    ),
                    lStrReferents.join(''),
                  ),
                ),
              ),
            );
          }
        }
        if (this.optionsFicheEtab.avecReferentsVieScolaire) {
          if (
            lEtablissement.listeReferentsVieScolaire &&
            lEtablissement.listeReferentsVieScolaire.count() > 0
          ) {
            if (
              UtilitaireContactReferents_1.UtilitaireContactReferents.auMoinsUnReferentVieScolaireAccepteDiscussion(
                lEtablissement.listeReferentsVieScolaire,
              )
            ) {
              H.push(
                IE.jsx.str(
                  IE.jsx.fragment,
                  null,
                  IE.jsx.str(
                    'div',
                    { class: 'infos-contain icon_envoyer' },
                    IE.jsx.str(
                      'div',
                      null,
                      IE.jsx.str(
                        'p',
                        null,
                        'Référent(s) vie scolaire',
                      ),
                      IE.jsx.str(
                        'p',
                        null,
                        IE.jsx.str(
                          'ie-bouton',
                          {
                            'ie-model': 'contacterReferentsVS',
                            'ie-icon': 'icon_envoyer',
                            class: 'themeBoutonNeutre small-bt',
                          },
                          'Contacter',
                        ),
                      ),
                    ),
                  ),
                ),
              );
            }
          }
        }
        return H.join('');
      }
      _composeEmail(aParam) {
        if (this.optionsFicheEtab.estSurMobile) {
          return (
            '<a href="mailto:' + aParam + '" target="_blank">' + aParam + '</a>'
          );
        } else {
          return ObjetChaine_1.GChaine.composerEmail(aParam);
        }
      }
      _getTelephoneAvecEspaces(aNumeroTelephone) {
        if (!aNumeroTelephone || !aNumeroTelephone.length) {
          return '';
        }
        let lResult = '';
        let lCompteur = 0;
        for (let i = aNumeroTelephone.length - 1; i >= 0; i--) {
          if (lCompteur % 2 === 0) {
            lResult = ' ' + lResult;
          }
          lResult = aNumeroTelephone.charAt(i) + lResult;
          lCompteur++;
        }
        lResult = lResult.trim();
        if (this.optionsFicheEtab.estSurMobile) {
          return '<a href="tel:' + aNumeroTelephone + '">' + lResult + '</a>';
        } else {
          return lResult;
        }
      }
    }
    exports.ObjetFicheEtablissement = ObjetFicheEtablissement;
  },
  fn: 'objetficheetablissement.js',
});