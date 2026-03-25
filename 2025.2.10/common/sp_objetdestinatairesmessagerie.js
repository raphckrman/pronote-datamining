IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetDestinatairesMessagerie = void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const Enumere_Etat_1 = require('Enumere_Etat');
    const ObjetIdentite_1 = require('ObjetIdentite');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const Enumere_Ressource_1 = require('Enumere_Ressource');
    const UtilitaireBoutonBandeau_1 = require('UtilitaireBoutonBandeau');
    const UtilitaireMessagerie_1 = require('UtilitaireMessagerie');
    class ObjetDestinatairesMessagerie extends ObjetIdentite_1.Identite {
      constructor(...aParams) {
        super(...aParams);
        this.etatUtilisateurSco = GApplication.getEtatUtilisateur();
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
              case Enumere_Ressource_1.EGenreRessource.Eleve:
                lLibelle = 'Élèves';
                break;
              case Enumere_Ressource_1.EGenreRessource.Responsable:
                lLibelle =
                  'Responsables';
                break;
              case Enumere_Ressource_1.EGenreRessource.Enseignant:
                lLibelle =
                  'Professeurs';
                break;
              case Enumere_Ressource_1.EGenreRessource.Personnel:
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
        this._parametres;
        this.afficher();
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          styleLibellesBouton: function (aGenre) {
            return {
              color: aInstance._getDisabledParGenre(aGenre)
                ? GCouleur.grisFonce
                : '',
            };
          },
          bouton: {
            event: function (aGenreRessource) {
              UtilitaireMessagerie_1.UtilitaireMessagerie.selectionnerListePublics(
                {
                  instance: aInstance,
                  genreRessource: aGenreRessource,
                  avecIndicationDiscussionInterdit:
                    aInstance.avecIndicationDiscussionInterdit,
                  listeRessourcesSelectionnees:
                    aInstance._parametres.genres[aGenreRessource]
                      .listeDestinataires,
                },
              ).then((aListe) => {
                if (aListe) {
                  aInstance.callback.appel(
                    aGenreRessource,
                    aListe,
                    aInstance.getListeDestinataires(),
                  );
                }
              });
            },
            getDisabled: function (aGenre) {
              return aInstance._getDisabledParGenre(aGenre);
            },
          },
          dest: {
            html: function (aGenre) {
              return aInstance._parametres.genres[
                aGenre
              ].listeDestinataires.count();
            },
            hint: function (aGenre) {
              return aInstance._parametres.genres[aGenre].listeDestinataires
                .getTableauLibelles()
                .join('\n');
            },
          },
          btnAfficherListesDiffusion: {
            event() {
              aInstance._evenementSurBoutonListeDiffusion();
            },
            getTitle() {
              return 'Utiliser des listes de diffusion';
            },
          },
          btnSupprimerDestinataires: {
            event() {
              aInstance._evenementSurBoutonSupprimer();
            },
            getTitle() {
              return 'Supprimer les destinataires';
            },
            getDisabled() {
              return !aInstance._existeDestinataires();
            },
          },
          cbDestinataireDirecteur: {
            getValue() {
              return aInstance._parametres.avecDirecteur;
            },
            setValue(aValue) {
              aInstance._parametres.avecDirecteur = aValue;
            },
          },
        });
      }
      construireAffichage() {
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
              Enumere_Ressource_1.EGenreRessource.Personnel,
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
        const lLibelleBouton = '...';
        const lId = `${this.Nom}_dest_${aParams.genre}`;
        if (!this._getDisabledParGenre(aParams.genre)) {
          H.push(
            IE.jsx.str(
              'li',
              { class: 'contenu-item' },
              IE.jsx.str(
                'label',
                {
                  for: lId,
                  'ie-style': `styleLibellesBouton(${aParams.genre})`,
                },
                aParams.libelle,
              ),
              IE.jsx.str(
                'ie-bouton',
                {
                  id: lId,
                  'ie-model': `bouton(${aParams.genre})`,
                  'ie-tooltiplabel':
                    Enumere_Ressource_1.EGenreRessourceUtil.getTitreFenetreSelectionRessource(
                      aParams.genre,
                    ),
                  'aria-haspopup': 'dialog',
                },
                lLibelleBouton,
              ),
              IE.jsx.str('span', {
                'ie-html': `dest.html(${aParams.genre})`,
                'ie-title': `dest.hint(${aParams.genre})`,
                'ie-style': `styleLibellesBouton(${aParams.genre})`,
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
            `<div class="fix-bloc m-right-l flex-contain cols flex-center" style="width:2.4rem;">\n                  <div class="fix-bloc" style="height:2.4rem;">\n                    ${UtilitaireBoutonBandeau_1.UtilitaireBoutonBandeau.getHtmlBtnListesDiffusion('btnAfficherListesDiffusion')}\n                  </div>\n                  <div class="fix-bloc m-top-l" style="height:2.4rem;">\n                    ${UtilitaireBoutonBandeau_1.UtilitaireBoutonBandeau.getHtmlBtnSupprimer('btnSupprimerDestinataires')}\n                  </div>\n              </div>`,
          );
        }
        H.push(`   <div class="fluid-bloc flex-contain cols">`);
        if (
          this._parametres.genresRessources &&
          this._parametres.genresRessources.length
        ) {
          H.push(
            `    <div class="conteneur-tabs" >\n                      <div class="menu-tabs">\n                        <div class="tab-item">\n                          <div tabindex="0" class="tab-content selected">\n                              <div class="libelle BordureNavigationInactive sel">${'Destinataires'}</div>\n                          </div>\n                        </div>\n                      </div>\n                  </div>`,
          );
          H.push(`    <div class="tabs-contenu with-border">`);
          H.push(`<ul class="ul-contenu-item">`);
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
                avecDirection: true,
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