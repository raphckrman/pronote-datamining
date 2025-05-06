IE.fModule({
  f: function (exports, require, module, global) {
    const { Requetes } = require('CollectionRequetes.js');
    const { ObjetRequeteConsultation } = require('ObjetRequeteJSON.js');
    const { ObjetRequeteSaisie } = require('ObjetRequeteJSON.js');
    const { ObjetFenetre } = require('ObjetFenetre.js');
    const { GTraductions } = require('ObjetTraduction.js');
    const { EGenreBoiteMessage } = require('Enumere_BoiteMessage.js');
    const { EGenreEtat } = require('Enumere_Etat.js');
    const { TypeThemeBouton } = require('Type_ThemeBouton.js');
    const { EGenreAction } = require('Enumere_Action.js');
    const { MethodesObjet } = require('MethodesObjet.js');
    const { GUID } = require('GUID.js');
    require('ObjetFenetre_SaisieVisiosCours.css');
    Requetes.inscrire('FenetreSaisieVisiosCours', ObjetRequeteConsultation);
    Requetes.inscrire('SaisieVisio', ObjetRequeteSaisie);
    const TypeBoutonFenetreSaisieVisiosCours = {
      Supprimer: 'supprimer',
      Annuler: 'annuler',
      Valider: 'valider',
    };
    class ObjetFenetre_SaisieVisiosCours extends ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.setOptionsFenetre({
          titre: GTraductions.getValeur(
            'FenetreSaisieVisiosCours.URLAssocieeAuCours',
          ),
          largeur: 500,
          hauteur: 300,
          listeBoutons: [
            {
              libelle: GTraductions.getValeur('Annuler'),
              theme: TypeThemeBouton.secondaire,
              typeBouton: TypeBoutonFenetreSaisieVisiosCours.Annuler,
            },
            {
              libelle: GTraductions.getValeur('Valider'),
              theme: TypeThemeBouton.primaire,
              typeBouton: TypeBoutonFenetreSaisieVisiosCours.Valider,
            },
          ],
          avecComposeBasInFooter: true,
        });
        this.saisieDirecte = false;
        this.estPourHP = false;
        this.callbackOuvrirLienVisio = null;
        this.tailleMaxChamps = { libelle: 60, commentaire: 255 };
        this.donnees = {
          cours: null,
          progression: null,
          nbVisiosMaxProgrammes: 0,
        };
      }
      getVisioCours() {
        return this.donnees.lienVisio;
      }
      getNbVisiosProgrammesSurLaJournee() {
        let lNbVisios = 0;
        if (!!this.donnees.cours) {
          lNbVisios = this.donnees.nbVisiosMaxProgrammes || 0;
        }
        return lNbVisios;
      }
      getControleur(aInstance) {
        return $.extend(true, super.getControleur(aInstance), {
          avecLienTesterURL() {
            const lVisioCours = aInstance.getVisioCours();
            return estLienTesterURLVisible(lVisioCours);
          },
          getNodeTestURL() {
            $(this.node).on('click', (event) => {
              event.preventDefault();
              if (!!aInstance.callbackOuvrirLienVisio) {
                const lVisioCours = aInstance.getVisioCours();
                aInstance.callbackOuvrirLienVisio(lVisioCours);
              }
            });
          },
          modelURL: {
            getValue() {
              const lVisioCours = aInstance.getVisioCours();
              return lVisioCours ? lVisioCours.url || '' : '';
            },
            setValue(aValue) {
              const lVisioCours = aInstance.getVisioCours();
              if (!!lVisioCours) {
                lVisioCours.url = aValue;
                lVisioCours.setEtat(EGenreEtat.Modification);
              }
            },
          },
          modelLibelleLien: {
            getValue() {
              const lVisioCours = aInstance.getVisioCours();
              return lVisioCours ? lVisioCours.libelleLien || '' : '';
            },
            setValue(aValue) {
              const lVisioCours = aInstance.getVisioCours();
              if (!!lVisioCours) {
                lVisioCours.libelleLien = aValue;
                lVisioCours.setEtat(EGenreEtat.Modification);
              }
            },
          },
          modelCommentaire: {
            getValue() {
              const lVisioCours = aInstance.getVisioCours();
              return lVisioCours ? lVisioCours.commentaire || '' : '';
            },
            setValue(aValue) {
              const lVisioCours = aInstance.getVisioCours();
              if (!!lVisioCours) {
                lVisioCours.commentaire = aValue;
                lVisioCours.setEtat(EGenreEtat.Modification);
              }
            },
          },
          btnSupprimer: {
            event() {
              aInstance._surValidation(
                TypeBoutonFenetreSaisieVisiosCours.Supprimer,
              );
            },
            getDisabled() {
              const lVisioCours = aInstance.getVisioCours();
              return (
                !lVisioCours ||
                !lVisioCours.existeNumero() ||
                lVisioCours.getEtat() === EGenreEtat.Creation
              );
            },
          },
          afficherNbVisiosProgrammes() {
            return aInstance.getNbVisiosProgrammesSurLaJournee() > 0;
          },
          getStrNbVisiosProgrammes() {
            const lNbVisios = aInstance.getNbVisiosProgrammesSurLaJournee();
            if (lNbVisios > 1) {
              return GTraductions.getValeur(
                'FenetreSaisieVisiosCours.XCoursEnVisioProgrammes',
                [lNbVisios],
              );
            } else {
              return GTraductions.getValeur(
                'FenetreSaisieVisiosCours.1CoursEnVisioProgramme',
              );
            }
          },
        });
      }
      setAvecSaisieDirecte(aSaisieDirecte) {
        this.saisieDirecte = !!aSaisieDirecte;
      }
      setCallbackOuvrirLienVisio(aCallbackOuvrirLienVisio) {
        this.callbackOuvrirLienVisio = aCallbackOuvrirLienVisio;
      }
      setDonnees(aParametres) {
        this.donnees.lienVisio = aParametres.lienVisio;
        this.callbackValider = aParametres.callbackValider;
        this.sauvegardeVisio = MethodesObjet.dupliquer(aParametres.lienVisio);
        if (!!aParametres) {
          if (aParametres.tailleMaxLibelle) {
            this.tailleMaxChamps.libelle = aParametres.tailleMaxLibelle;
          }
          if (aParametres.tailleMaxCommentaire) {
            this.tailleMaxChamps.commentaire = aParametres.tailleMaxCommentaire;
          }
        }
        const lThis = this;
        lThis.donnees.nbVisiosMaxProgrammes = 0;
        lThis.afficher();
      }
      composeContenu() {
        const T = [];
        const lIdInputURLCours = GUID.getId();
        const lIdInputLibelleURL = GUID.getId();
        const lIdTextareaCommentaire = GUID.getId();
        T.push('<div class="flex-contain cols">');
        T.push(
          `<div class="field-contain label-up">\n              <div class="flex-contain flex-center justify-between">\n                  <label for="${lIdInputURLCours}" class="fluid-bloc">${GTraductions.getValeur('FenetreSaisieVisiosCours.ChampURL')} : ${GTraductions.getValeur('FenetreSaisieVisiosCours.MarqueurChampObligatoire')}</label>\n                  <span class="fluid-bloc text-end m-bottom-l" ie-node="getNodeTestURL" ie-if="avecLienTesterURL">\n                    <a href="#">${GTraductions.getValeur('FenetreSaisieVisiosCours.TesterURL')}</a>\n                  </span>\n              </div>\n\n              <input id="${lIdInputURLCours}" ie-model="modelURL" ie-trim class="round-style full-width" required="true"/>\n            </div>`,
        );
        T.push(
          `<div class="field-contain label-up">\n              <label for="${lIdInputLibelleURL}">${GTraductions.getValeur('FenetreSaisieVisiosCours.ChampLibelleURL')} :</label>\n              <input id="${lIdInputLibelleURL}" ie-model="modelLibelleLien" ie-trim class="round-style full-width" maxlength="${this.tailleMaxChamps.libelle}"/>\n            </div>`,
        );
        T.push(
          `<div class="field-contain label-up">\n              <label for="${lIdTextareaCommentaire}">${GTraductions.getValeur('FenetreSaisieVisiosCours.ChampCommentaireURL')} :</label>\n              <ie-textareamax id="${lIdTextareaCommentaire}" ${!IE.estMobile ? `style="height: 6rem;"` : ``}  ie-model="modelCommentaire" class="full-width" maxlength="${this.tailleMaxChamps.commentaire}" placeholder="${GTraductions.getValeur('FenetreSaisieVisiosCours.PlaceholderCommentaire')}"></ie-textareamax>\n            </div>`,
        );
        T.push(
          `<div ie-if="afficherNbVisiosProgrammes()">\n              <span ie-html="getStrNbVisiosProgrammes()"></span>\n            </div>`,
        );
        T.push(`<div class="m-top-l ${IE.estMobile ? ` m-bottom-nega-xl` : `m-bottom-nega-l`}">\n                ${GTraductions.getValeur('FenetreSaisieVisiosCours.MarqueurChampObligatoire')} ${GTraductions.getValeur('FenetreSaisieVisiosCours.ChampObligatoire')}
            </div>`);
        T.push('</div>');
        return T.join('');
      }
      composeBas() {
        const lHTML = [];
        lHTML.push('<div class="compose-bas">');
        lHTML.push(
          '<ie-btnicon ie-model="btnSupprimer" title="',
          GTraductions.getValeur('Supprimer'),
          '" class="icon_trash avecFond i-medium"></ie-btnicon>',
        );
        lHTML.push('</div>');
        return lHTML.join('');
      }
      surValidation(aNumeroBouton) {
        let lTypeBouton = TypeBoutonFenetreSaisieVisiosCours.Annuler;
        const lBouton = this.getBoutonNumero(aNumeroBouton);
        if (!!lBouton && lBouton.typeBouton !== undefined) {
          lTypeBouton = lBouton.typeBouton;
        }
        this._surValidation(lTypeBouton);
      }
      _surValidation(aTypeBouton) {
        let lVisioCours = this.getVisioCours();
        if (!lVisioCours) {
          this.fermer();
          return;
        }
        if (aTypeBouton === TypeBoutonFenetreSaisieVisiosCours.Valider) {
          const lMessagesChampsObligatoires = [];
          if (!lVisioCours.url || lVisioCours.url.length === 0) {
            lMessagesChampsObligatoires.push(
              GTraductions.getValeur(
                'FenetreSaisieVisiosCours.ChampURLEstObligatoire',
              ),
            );
          }
          if (lMessagesChampsObligatoires.length > 0) {
            GApplication.getMessage().afficher({
              type: EGenreBoiteMessage.Information,
              message: lMessagesChampsObligatoires.join('<br/>'),
            });
            return;
          }
        }
        if (aTypeBouton === TypeBoutonFenetreSaisieVisiosCours.Annuler) {
          lVisioCours = this.sauvegardeVisio;
        }
        const lThis = this;
        (aTypeBouton === TypeBoutonFenetreSaisieVisiosCours.Supprimer
          ? new Promise((aResolve) => {
              GApplication.getMessage().afficher({
                type: EGenreBoiteMessage.Confirmation,
                message: GTraductions.getValeur(
                  'FenetreSaisieVisiosCours.ConfirmationSuppression',
                ),
                callback: function (aNumeroBouton) {
                  if (aNumeroBouton === EGenreAction.Valider) {
                    aResolve();
                  }
                },
              });
            })
          : Promise.resolve()
        ).then(() => {
          if (aTypeBouton === TypeBoutonFenetreSaisieVisiosCours.Supprimer) {
            lVisioCours.setEtat(EGenreEtat.Suppression);
          } else if (
            aTypeBouton !== TypeBoutonFenetreSaisieVisiosCours.Valider
          ) {
            if (lVisioCours.getEtat() === EGenreEtat.Creation) {
              lVisioCours.setEtat(EGenreEtat.Suppression);
            }
          }
          if (
            lThis.saisieDirecte &&
            (aTypeBouton === TypeBoutonFenetreSaisieVisiosCours.Valider ||
              aTypeBouton === TypeBoutonFenetreSaisieVisiosCours.Supprimer)
          ) {
            lThis.callbackValider(aTypeBouton, lThis.donnees);
          } else {
            lThis.callback.appel(aTypeBouton, lThis.donnees);
          }
          lThis.fermer();
        });
      }
    }
    function estLienTesterURLVisible(aVisioCours) {
      let lEstLienVisible = true;
      if (!aVisioCours || !aVisioCours.url || aVisioCours.url.length === 0) {
        lEstLienVisible = false;
      }
      return lEstLienVisible;
    }
    module.exports = {
      ObjetFenetre_SaisieVisiosCours,
      TypeBoutonFenetreSaisieVisiosCours,
    };
  },
  fn: 'objetfenetre_saisievisioscours.js',
});