IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFicheEtablissement = void 0;
    const ObjetFiche_1 = require('@cp/script/ObjetFiche');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const ObjetRequeteSaisieAccepterReglement_1 = require('@scolys/espace/script/requete/ObjetRequeteSaisieAccepterReglement');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const IEHtml_CheckboxRadio_1 = require('@cp/Produit/Script/IEHtml.CheckboxRadio');
    const Enumere_Espace_1 = require('@scolys/espace/script/enumere/Enumere_Espace');
    const ObjetElement_1 = require('@cp/script/ObjetElement');
    const ObjetChaine_1 = require('@cp/Produit/Script/ObjetChaine');
    const TypeFichierExterneHttpSco_1 = require('@scolys/produit/script/enumere/TypeFichierExterneHttpSco');
    const Enumere_DocumentJoint_1 = require('@cp/script/Enumere/Enumere_DocumentJoint');
    const UtilitaireContactReferents_1 = require('@scolys/produit/script/utilitaire/UtilitaireContactReferents');
    const ObjetTabOnglets_1 = require('@cp/script/ObjetsGraphiques/ObjetTabOnglets');
    const UtilitaireUrl_1 = require('@cp/script/UtilitaireUrl');
    const IEHtml_Bouton_1 = require('@cp/Produit/Script/IEHtml.Bouton');
    const IconeSvgEnvoyer_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgEnvoyer');
    require('@cp/Produit/Css/general/Fiche-Etablissement.css');
    const GestionnaireStickyScroll_1 = require('@cp/Produit/Script/GestionnaireStickyScroll');
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
      jsxModelBoutonContacerReferentsVS() {
        return {
          event: () => {
            var _a;
            if (
              (_a = this.etablissementAffiche) === null || _a === void 0
                ? void 0
                : _a.listeReferentsVieScolaire
            ) {
              UtilitaireContactReferents_1.UtilitaireContactReferents.contacterReferentsVieScolaire(
                this,
                this.etablissementAffiche.listeReferentsVieScolaire,
              );
            }
          },
        };
      }
      jsxIdentiteOngletEtablissement() {
        return {
          create: () =>
            new ObjetTabOnglets_1.ObjetTabOnglets({
              pere: this,
              evenement: (aEtablissement) => {
                ObjetHtml_1.GHtml.setHtml(
                  this.idInformation,
                  this.composeInformations(aEtablissement),
                  { instance: this },
                );
              },
            }),
          start: (aInstance) => {
            aInstance.setDonnees(
              this.listeEtablissements,
              this.listeEtablissements.getIndiceParElement(
                this.etablissementAffiche,
              ),
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
      jsxModelCheckboxAccepterReglement() {
        return {
          getValue: () => {
            return this.etablissementAffiche.relancerNotif;
          },
          setValue: (aValue) => {
            this.etablissementAffiche.relancerNotif = true;
            new ObjetRequeteSaisieAccepterReglement_1.ObjetRequeteSaisieAccepterReglement(
              this,
            ).lancerRequete({
              etablissement: this.etablissementAffiche,
              accepterReglement: aValue,
            });
          },
          getDisabled: () => {
            return this.etablissementAffiche.relancerNotif;
          },
        };
      }
      composeContenu() {
        const H = [];
        H.push(
          IE.jsx.str('div', {
            ie_identite: this.jsxIdentiteOngletEtablissement.bind(this),
            class: [
              GestionnaireStickyScroll_1.GestionnaireStickyScroll.stickyTop,
              GestionnaireStickyScroll_1.GestionnaireStickyScroll
                .stickyAlwaysVisible,
            ],
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
          Enumere_Espace_1.TypeGenreEspace.Espace_Parent,
          Enumere_Espace_1.TypeGenreEspace.Mobile_Parent,
          Enumere_Espace_1.TypeGenreEspace.Espace_Accompagnant,
          Enumere_Espace_1.TypeGenreEspace.Mobile_Accompagnant,
          Enumere_Espace_1.TypeGenreEspace.Espace_Entreprise,
          Enumere_Espace_1.TypeGenreEspace.Mobile_Entreprise,
          Enumere_Espace_1.TypeGenreEspace.Espace_PrimParent,
          Enumere_Espace_1.TypeGenreEspace.Mobile_PrimParent,
          Enumere_Espace_1.TypeGenreEspace.Espace_PrimAccompagnant,
          Enumere_Espace_1.TypeGenreEspace.Mobile_PrimAccompagnant,
          Enumere_Espace_1.TypeGenreEspace.Espace_Tuteur,
        ].includes(
          (_a =
            this === null || this === void 0
              ? void 0
              : this.etatUtilisateurPN) === null || _a === void 0
            ? void 0
            : _a.GenreEspace,
        );
        const lAvecReglementAAccepte = [
          Enumere_Espace_1.TypeGenreEspace.Espace_Parent,
          Enumere_Espace_1.TypeGenreEspace.Espace_Eleve,
          Enumere_Espace_1.TypeGenreEspace.Mobile_Parent,
          Enumere_Espace_1.TypeGenreEspace.Mobile_Eleve,
          Enumere_Espace_1.TypeGenreEspace.Espace_PrimParent,
          Enumere_Espace_1.TypeGenreEspace.Mobile_PrimParent,
          Enumere_Espace_1.TypeGenreEspace.Espace_PrimEleve,
          Enumere_Espace_1.TypeGenreEspace.Mobile_PrimEleve,
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
            IE.jsx.str('img', {
              class: 'logo',
              src: lEtablissement.urlLogo,
              alt: '',
              ie_eventmap: { error: (e, aNode) => $(aNode).remove() },
            }),
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
            H.push(IE.jsx.str('p', null, lEtablissement.Coordonnees.Adresse1));
          }
          if (lEtablissement.Coordonnees.Adresse2) {
            H.push(IE.jsx.str('p', null, lEtablissement.Coordonnees.Adresse2));
          }
          if (lEtablissement.Coordonnees.Adresse3) {
            H.push(IE.jsx.str('p', null, lEtablissement.Coordonnees.Adresse3));
          }
          if (lEtablissement.Coordonnees.Adresse4) {
            H.push(IE.jsx.str('p', null, lEtablissement.Coordonnees.Adresse4));
          }
          H.push('<p>');
          if (
            lEtablissement.Coordonnees.CodePostal &&
            !lEtablissement.Coordonnees.LibellePostal
          ) {
            H.push(
              IE.jsx.str('span', null, lEtablissement.Coordonnees.CodePostal),
            );
          }
          if (lEtablissement.Coordonnees.LibellePostal) {
            H.push(
              IE.jsx.str(
                'span',
                null,
                lEtablissement.Coordonnees.LibellePostal,
              ),
            );
          }
          if (lEtablissement.Coordonnees.LibelleVille) {
            H.push(
              IE.jsx.str('span', null, lEtablissement.Coordonnees.LibelleVille),
            );
          }
          H.push('</p>');
          if (lEtablissement.Coordonnees.Province) {
            H.push(IE.jsx.str('p', null, lEtablissement.Coordonnees.Province));
          }
          if (lEtablissement.Coordonnees.Pays) {
            H.push(IE.jsx.str('p', null, lEtablissement.Coordonnees.Pays));
          }
          H.push('</div></div>');
        }
        if (
          lEtablissement.Coordonnees.NumPersonnalise1 &&
          lEtablissement.Coordonnees.NumPersonnalise1.Numero
        ) {
          H.push(
            IE.jsx.str(
              'div',
              { class: 'infos-contain icon_phone' },
              IE.jsx.str(
                'div',
                { class: 'telephone' },
                lEtablissement.Coordonnees.NumPersonnalise1.NomPersonnalise
                  ? IE.jsx.str(
                      'p',
                      null,
                      lEtablissement.Coordonnees.NumPersonnalise1
                        .NomPersonnalise,
                      ' : ',
                    )
                  : '',
                IE.jsx.str(
                  'p',
                  null,
                  this._getTelephoneAvecEspaces(
                    lEtablissement.Coordonnees.NumPersonnalise1.Numero,
                  ),
                ),
              ),
            ),
          );
        }
        if (
          lEtablissement.Coordonnees.NumPersonnalise2 &&
          lEtablissement.Coordonnees.NumPersonnalise2.Numero
        ) {
          H.push(
            IE.jsx.str(
              'div',
              { class: 'infos-contain icon_phone' },
              IE.jsx.str(
                'div',
                { class: 'telephone' },
                lEtablissement.Coordonnees.NumPersonnalise2.NomPersonnalise
                  ? IE.jsx.str(
                      'p',
                      null,
                      lEtablissement.Coordonnees.NumPersonnalise2
                        .NomPersonnalise,
                      ' : ',
                    )
                  : '',
                IE.jsx.str(
                  'p',
                  null,
                  this._getTelephoneAvecEspaces(
                    lEtablissement.Coordonnees.NumPersonnalise2.Numero,
                  ),
                ),
              ),
            ),
          );
        }
        if (
          lEtablissement.Coordonnees.NumPersonnalise3 &&
          lEtablissement.Coordonnees.NumPersonnalise3.Numero
        ) {
          H.push(
            IE.jsx.str(
              'div',
              { class: 'infos-contain icon_phone' },
              IE.jsx.str(
                'div',
                null,
                lEtablissement.Coordonnees.NumPersonnalise3.NomPersonnalise
                  ? IE.jsx.str(
                      'p',
                      null,
                      lEtablissement.Coordonnees.NumPersonnalise3
                        .NomPersonnalise,
                      ' : ',
                    )
                  : '',
                IE.jsx.str(
                  'p',
                  null,
                  this._getTelephoneAvecEspaces(
                    lEtablissement.Coordonnees.NumPersonnalise3.Numero,
                  ),
                ),
              ),
            ),
          );
        }
        if (lEtablissement.Coordonnees.SiteInternet) {
          H.push(
            IE.jsx.str(
              'div',
              { class: 'infos-contain flex-center icon_curseur_souris' },
              IE.jsx.str(
                'a',
                {
                  class: 'Souligne AvecMain',
                  target: '_blank',
                  href: ObjetChaine_1.GChaine.verifierURLHttp(
                    lEtablissement.Coordonnees.SiteInternet,
                  ),
                },
                lEtablissement.Coordonnees.SiteInternet,
              ),
            ),
          );
        }
        if (
          lEtablissement.Coordonnees.EMailPersonnalise1 &&
          lEtablissement.Coordonnees.EMailPersonnalise1.Mail
        ) {
          H.push(
            IE.jsx.str(
              'div',
              { class: 'infos-contain icon_envelope' },
              IE.jsx.str(
                'div',
                null,
                lEtablissement.Coordonnees.EMailPersonnalise1.NomPersonnalise
                  ? IE.jsx.str(
                      'p',
                      null,
                      lEtablissement.Coordonnees.EMailPersonnalise1
                        .NomPersonnalise,
                      ' : ',
                    )
                  : '',
                IE.jsx.str(
                  'p',
                  null,
                  this._composeEmail(
                    lEtablissement.Coordonnees.EMailPersonnalise1.Mail,
                  ),
                ),
              ),
            ),
          );
        }
        if (
          lEtablissement.Coordonnees.EMailPersonnalise2 &&
          lEtablissement.Coordonnees.EMailPersonnalise2.Mail
        ) {
          H.push(
            IE.jsx.str(
              'div',
              { class: 'infos-contain icon_envelope' },
              IE.jsx.str(
                'div',
                null,
                lEtablissement.Coordonnees.EMailPersonnalise2.NomPersonnalise
                  ? IE.jsx.str(
                      'p',
                      null,
                      lEtablissement.Coordonnees.EMailPersonnalise2
                        .NomPersonnalise,
                      ' : ',
                    )
                  : '',
                IE.jsx.str(
                  'p',
                  null,
                  this._composeEmail(
                    lEtablissement.Coordonnees.EMailPersonnalise2.Mail,
                  ),
                ),
              ),
            ),
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
            UtilitaireUrl_1.UtilitaireUrl.composerUrlLienExterne({
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
            UtilitaireUrl_1.UtilitaireUrl.composerUrlLienExterne({
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
          H.push(
            IE.jsx.str(
              'div',
              { class: 'GrandEspaceDroit' },
              IE.jsx.str(
                IEHtml_CheckboxRadio_1.Checkbox,
                { ie_model: this.jsxModelCheckboxAccepterReglement.bind(this) },
                'J'ai pris connaissance des documents disponibles en téléchargement',
              ),
            ),
          );
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
                    lReferent.strInfoComplementaire
                      ? ` (${lReferent.strInfoComplementaire})`
                      : '',
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
                          IEHtml_Bouton_1.Bouton,
                          {
                            ie_model:
                              this.jsxModelBoutonContacerReferentsVS.bind(this),
                            svg: IE.jsx.str(
                              IconeSvgEnvoyer_1.IconeSvgEnvoyer,
                              null,
                            ),
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
          return IE.jsx.str(
            'a',
            { href: 'mailto:' + aParam, target: '_blank' },
            aParam,
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
          return IE.jsx.str('a', { href: 'tel:' + aNumeroTelephone }, lResult);
        } else {
          return lResult;
        }
      }
    }
    exports.ObjetFicheEtablissement = ObjetFicheEtablissement;
  },
  fn: 'objetficheetablissement.js',
});