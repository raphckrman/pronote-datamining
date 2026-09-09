IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetDestinatairesMessagerie = void 0;
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const Enumere_Etat_1 = require('@cp/script/Enumere/Enumere_Etat');
    const ObjetIdentite_1 = require('@cp/script/ObjetIdentite');
    const ObjetElement_1 = require('@cp/script/ObjetElement');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const Enumere_Ressource_1 = require('@scolys/espace/script/enumere/Enumere_Ressource');
    const UtilitaireBoutonBandeau_1 = require('@cp/Produit/Script/Utilitaire/UtilitaireBoutonBandeau');
    const UtilitaireMessagerie_1 = require('@scolys/produit/script/utilitaire/UtilitaireMessagerie');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const IEHtml_BtnSelecteur_1 = require('@cp/Produit/Script/IEHtml.BtnSelecteur');
    class ObjetDestinatairesMessagerie extends ObjetIdentite_1.Identite {
      constructor(aParams) {
        super(aParams);
        const lApplicationSco = (0, AccessApp_1.getApp)();
        this.etatUtilisateurSco = lApplicationSco.getEtatUtilisateur();
        this._parametres = {
          genres: {},
          genresRessources: [],
          avecDirecteur: false,
        };
      }
      setDonnees(
        aGenresRessources,
        aAvecIndicationDiscussionInterdit,
        aAvecListeDiffusion,
      ) {
        let lLibelle;
        this.avecIndicationDiscussionInterdit =
          aAvecIndicationDiscussionInterdit;
        this.avecListeDiffusion = aAvecListeDiffusion;
        this._parametres.genresRessources = aGenresRessources;
        this._parametres.genres = {};
        if (aGenresRessources && aGenresRessources.length) {
          for (let i = 0; i < aGenresRessources.length; i++) {
            const lParam = aGenresRessources[i];
            lLibelle = '';
            switch (lParam.genre) {
              case Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Eleve:
                lLibelle = 'Élèves';
                break;
              case Enumere_Ressource_1.TypeHttpRessource
                .HttpRessource_Responsable:
                lLibelle =
                  'Responsables';
                break;
              case Enumere_Ressource_1.TypeHttpRessource
                .HttpRessource_Enseignant:
                lLibelle =
                  'Professeurs';
                break;
              case Enumere_Ressource_1.TypeHttpRessource
                .HttpRessource_Personnel:
                lLibelle =
                  'Personnels';
                break;
              default:
            }
            this._parametres.genres[lParam.genre] = $.extend(
              {
                genre: null,
                libelle: lLibelle,
                listeDestinataires:
                  lParam.listeDestinataires ||
                  new ObjetListeElements_1.ObjetListeElements(),
                getDisabled: null,
              },
              lParam,
            );
            if (this._getDisabledParGenre(lParam.genre)) {
              this._parametres.genres[lParam.genre].listeDestinataires =
                new ObjetListeElements_1.ObjetListeElements();
            }
          }
        }
        this.afficher();
      }
      jsxGetStyleLibellesBouton(aGenre) {
        return {
          color: this._getDisabledParGenre(aGenre) ? GCouleur.grisFonce : '',
        };
      }
      jsxModeleBoutonAfficherListesDiffusion() {
        return {
          event: () => {
            this._evenementSurBoutonListeDiffusion();
          },
          getTitle: () => {
            return 'Initialiser avec une liste de diffusion';
          },
        };
      }
      jsxModeleBoutonSupprimerDestinataires() {
        return {
          event: () => {
            this._evenementSurBoutonSupprimer();
          },
          getTitle: () => {
            return 'Supprimer les destinataires';
          },
          getDisabled: () => {
            return !this._existeDestinataires();
          },
        };
      }
      jsxModelCheckboxDestinataireDirecteur() {
        return {
          getValue: () => {
            return this._parametres.avecDirecteur;
          },
          setValue: (aValue) => {
            this._parametres.avecDirecteur = aValue;
          },
        };
      }
      construireAffichage() {
        if (!ObjetHtml_1.GHtml.elementExiste(this.Nom)) {
          return '';
        }
        return this._compose();
      }
      setListeDestinataires(aListeDestinataires) {
        for (const i in this._parametres.genres) {
          const lListe = this._parametres.genres[i].listeDestinataires;
          const lGenre = this._parametres.genres[i].genre;
          aListeDestinataires.parcourir((aElement) => {
            if (aElement.getGenre() === lGenre) {
              const lIndice = lListe.getIndiceParElement(aElement);
              if (lIndice === null || lIndice === undefined) {
                const lElement = new ObjetElement_1.ObjetElement(
                  '',
                  aElement.getNumero(),
                  lGenre,
                );
                lElement.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
                lListe.addElement(lElement);
              }
            }
          });
          this.callback.appel(lGenre, lListe, this.getListeDestinataires());
        }
      }
      getListeDestinataires() {
        const lListe = new ObjetListeElements_1.ObjetListeElements();
        function _ajouterElement(aGenreRessource, D) {
          const lElement = new ObjetElement_1.ObjetElement(
            '',
            D.getNumero(),
            aGenreRessource,
          );
          lElement.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
          lListe.addElement(lElement);
        }
        for (const i in this._parametres.genres) {
          this._parametres.genres[i].listeDestinataires.parcourir(
            _ajouterElement.bind(this, this._parametres.genres[i].genre),
          );
        }
        if (this.etatUtilisateurSco.pourPrimaire()) {
          if (this._parametres.avecDirecteur) {
            _ajouterElement(
              Enumere_Ressource_1.TypeHttpRessource.HttpRessource_Personnel,
              new ObjetElement_1.ObjetElement('', 0),
            );
          }
        }
        return lListe;
      }
      _existeDestinataires() {
        let lNombre = 0;
        for (const i in this._parametres.genres) {
          lNombre +=
            this._parametres.genres[
              i
            ].listeDestinataires.getNbrElementsExistes();
        }
        return lNombre > 0;
      }
      _toutesDestinataires() {
        const lResult = this.avecListeDiffusion;
        return lResult;
      }
      _getDisabledParGenre(aGenre) {
        return this._parametres &&
          this._parametres.genres &&
          this._parametres.genres[aGenre] &&
          this._parametres.genres[aGenre].getDisabled
          ? this._parametres.genres[aGenre].getDisabled()
          : false;
      }
      _composeRessource(aParams) {
        const H = [];
        if (!this._getDisabledParGenre(aParams.genre)) {
          const lModeleBtnSelecteur = () => {
            return {
              event: () => {
                UtilitaireMessagerie_1.UtilitaireMessagerie.selectionnerListePublics(
                  {
                    instance: this,
                    genreRessource: aParams.genre,
                    avecIndicationDiscussionInterdit:
                      this.avecIndicationDiscussionInterdit,
                    listeRessourcesSelectionnees:
                      this._parametres.genres[aParams.genre].listeDestinataires,
                  },
                ).then((aListe) => {
                  if (aListe) {
                    this.callback.appel(
                      aParams.genre,
                      aListe,
                      this.getListeDestinataires(),
                    );
                  }
                });
              },
              getDisabled: () => {
                return this._getDisabledParGenre(aParams.genre);
              },
              getChips: () => {
                return this._parametres.genres[
                  aParams.genre
                ].listeDestinataires.count() > 0
                  ? `${this._parametres.genres[aParams.genre].listeDestinataires.count()} ${Enumere_Ressource_1.TypeHttpRessourceUtil.getLabelChips(aParams.genre)}`
                  : '';
              },
            };
          };
          H.push(
            IE.jsx.str(
              'li',
              { class: 'field-wrapper' },
              IE.jsx.str(
                'span',
                {
                  class: 'libelle',
                  ie_style: this.jsxGetStyleLibellesBouton.bind(
                    this,
                    aParams.genre,
                  ),
                },
                aParams.libelle,
              ),
              IE.jsx.str(IEHtml_BtnSelecteur_1.BtnSelecteur, {
                ie_model: lModeleBtnSelecteur,
                placeholder:
                  Enumere_Ressource_1.TypeHttpRessourceUtil.getTitreFenetreSelectionRessource(
                    aParams.genre,
                  ),
                ie_tooltiplabel:
                  Enumere_Ressource_1.TypeHttpRessourceUtil.getTitreFenetreSelectionRessource(
                    aParams.genre,
                  ),
              }),
            ),
          );
        }
        return H.join('');
      }
      _compose() {
        const H = [];
        H.push(`<div class="flex-contain">`);
        if (this._toutesDestinataires()) {
          H.push(
            IE.jsx.str(
              'div',
              {
                class: 'fix-bloc m-right-l flex-contain cols flex-center',
                style: 'width:2.4rem;',
              },
              IE.jsx.str(
                'div',
                { class: 'fix-bloc', style: 'height:2.4rem;' },
                UtilitaireBoutonBandeau_1.UtilitaireBoutonBandeau.getHtmlBtnListesDiffusion(
                  this.jsxModeleBoutonAfficherListesDiffusion.bind(this),
                ),
              ),
              IE.jsx.str(
                'div',
                { class: 'fix-bloc m-top-l', style: 'height:2.4rem;' },
                UtilitaireBoutonBandeau_1.UtilitaireBoutonBandeau.getHtmlBtnSupprimer(
                  this.jsxModeleBoutonSupprimerDestinataires.bind(this),
                ),
              ),
            ),
          );
        }
        H.push(`   <div class="fluid-bloc flex-contain cols">`);
        if (
          this._parametres.genresRessources &&
          this._parametres.genresRessources.length
        ) {
          const lIdLibelleOnglet = GUID_1.GUID.getId();
          H.push(
            IE.jsx.str(
              'div',
              { class: 'conteneur-tabs' },
              IE.jsx.str(
                'div',
                { class: 'menu-tabs' },
                IE.jsx.str(
                  'div',
                  { class: 'tab-item' },
                  IE.jsx.str(
                    'div',
                    { class: 'tab-content selected' },
                    IE.jsx.str(
                      'div',
                      {
                        id: lIdLibelleOnglet,
                        class: 'libelle BordureNavigationInactive sel',
                      },
                      'Destinataires',
                    ),
                  ),
                ),
              ),
            ),
          );
          H.push(
            `    <div role="group" aria-labelledby="${lIdLibelleOnglet}" class="tabs-contenu with-border">`,
          );
          H.push(`<ul class="ul-contenu-item auto-grid">`);
          for (let i = 0; i < this._parametres.genresRessources.length; i++) {
            H.push(
              this._composeRessource(
                this._parametres.genres[
                  this._parametres.genresRessources[i].genre
                ],
              ),
            );
          }
          H.push(`</ul>`);
          if (this.etatUtilisateurSco.pourPrimaire()) {
            H.push(
              UtilitaireMessagerie_1.UtilitaireMessagerie.composeMettreEnCopie({
                jsxCheckboxDestinataireDirecteur:
                  this.jsxModelCheckboxDestinataireDirecteur.bind(this),
              }),
            );
          }
          H.push(`    </div>\n                </div>`);
        }
        H.push(`   </div>\n            </div>`);
        return H.join('');
      }
      _evenementSurBoutonListeDiffusion() {
        UtilitaireMessagerie_1.UtilitaireMessagerie.selectionnerListeDiffusions(
          this,
        ).then((aListeSelec) => {
          if (aListeSelec && aListeSelec.count() > 0) {
            const lListe = new ObjetListeElements_1.ObjetListeElements();
            aListeSelec.parcourir((aDiffusion) => {
              aDiffusion.listePublicIndividu.parcourir((aElement) => {
                const lIndice = lListe.getIndiceParElement(aElement);
                const lGenreDisabled = this._getDisabledParGenre(
                  aElement.getGenre(),
                );
                if (
                  (lIndice === null || lIndice === undefined) &&
                  !lGenreDisabled
                ) {
                  lListe.addElement(
                    MethodesObjet_1.MethodesObjet.dupliquer(aElement),
                  );
                }
              });
            });
            this.setListeDestinataires(lListe);
          }
        });
      }
      _evenementSurBoutonSupprimer() {
        this._viderPublic();
      }
      _viderPublic() {
        for (const i in this._parametres.genres) {
          this._parametres.genres[i].listeDestinataires =
            new ObjetListeElements_1.ObjetListeElements();
          const lGenre = this._parametres.genres[i].genre;
          this.callback.appel(
            lGenre,
            new ObjetListeElements_1.ObjetListeElements(),
            this.getListeDestinataires(),
          );
        }
      }
    }
    exports.ObjetDestinatairesMessagerie = ObjetDestinatairesMessagerie;
  },
  fn: 'objetdestinatairesmessagerie.js',
});