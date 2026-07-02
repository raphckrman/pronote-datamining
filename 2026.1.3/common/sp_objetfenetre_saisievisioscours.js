IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_SaisieVisiosCours = void 0;
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const Enumere_BoiteMessage_1 = require('@cp/Produit/Script/Enumere/Enumere_BoiteMessage');
    const Enumere_Etat_1 = require('@cp/script/Enumere/Enumere_Etat');
    const Type_ThemeBouton_1 = require('@cp/Produit/Script/Enumere/Type_ThemeBouton');
    const Enumere_Action_1 = require('@cp/Produit/Script/Enumere/Enumere_Action');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const GUID_1 = require('@librairies/script/Divers/GUID');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const IEHtml_TextareaMax_1 = require('@cp/Produit/Script/IEHtml.TextareaMax');
    const IEHtml_BtnImage_1 = require('@cp/Produit/Script/IEHtml.BtnImage');
    const GlossaireCP_1 = require('@cp/Produit/Script/GlossaireCP');
    require('@cp/Espace/Css/ObjetFenetre_SaisieVisiosCours.css');
    const IconeSvgTrash_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgTrash');
    class ObjetFenetre_SaisieVisiosCours extends ObjetFenetre_1.ObjetFenetre {
      constructor(...aParams) {
        super(...aParams);
        this.saisieDirecte = false;
        this.tailleMaxChamps = { libelle: 60, commentaire: 255 };
        this.setOptionsFenetre({
          titre: 'Lien pour une visioconférence',
          largeur: 500,
          hauteur: 300,
          listeBoutons: [
            {
              libelle: 'Annuler',
              theme: Type_ThemeBouton_1.TypeThemeBouton.secondaire,
              typeBouton: ObjetFenetre_SaisieVisiosCours.TypeBouton.Annuler,
            },
            {
              libelle: 'Valider',
              theme: Type_ThemeBouton_1.TypeThemeBouton.primaire,
              typeBouton: ObjetFenetre_SaisieVisiosCours.TypeBouton.Valider,
            },
          ],
          avecComposeBasInFooter: true,
        });
        this.callbackOuvrirLienVisio = null;
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
      jsxNodeTestUrl(aNode) {
        $(aNode).on('validation', (aEvent) => {
          aEvent.preventDefault();
          if (!!this.callbackOuvrirLienVisio) {
            const lVisioCours = this.getVisioCours();
            this.callbackOuvrirLienVisio(lVisioCours);
          }
        });
      }
      jsxIfAvecAffichageLienTesterUrl() {
        const lVisioCours = this.getVisioCours();
        return estLienTesterURLVisible(lVisioCours);
      }
      jsxModelTextareaCommentaire() {
        return {
          getValue: () => {
            const lVisioCours = this.getVisioCours();
            return lVisioCours ? lVisioCours.commentaire || '' : '';
          },
          setValue: (aValue) => {
            const lVisioCours = this.getVisioCours();
            if (!!lVisioCours) {
              lVisioCours.commentaire = aValue;
              lVisioCours.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
            }
          },
        };
      }
      jsxModelInputURL() {
        return {
          getValue: () => {
            const lVisioCours = this.getVisioCours();
            return lVisioCours ? lVisioCours.url || '' : '';
          },
          setValue: (aValue) => {
            const lVisioCours = this.getVisioCours();
            if (!!lVisioCours) {
              lVisioCours.url = aValue;
              lVisioCours.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
            }
          },
        };
      }
      jsxModelInputLibelleLien() {
        return {
          getValue: () => {
            const lVisioCours = this.getVisioCours();
            return lVisioCours ? lVisioCours.libelleLien || '' : '';
          },
          setValue: (aValue) => {
            const lVisioCours = this.getVisioCours();
            if (!!lVisioCours) {
              lVisioCours.libelleLien = aValue;
              lVisioCours.setEtat(Enumere_Etat_1.EGenreEtat.Modification);
            }
          },
        };
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
        this.sauvegardeVisio = MethodesObjet_1.MethodesObjet.dupliquer(
          aParametres.lienVisio,
        );
        if (!!aParametres) {
          if (aParametres.tailleMaxLibelle) {
            this.tailleMaxChamps.libelle = aParametres.tailleMaxLibelle;
          }
          if (aParametres.tailleMaxCommentaire) {
            this.tailleMaxChamps.commentaire = aParametres.tailleMaxCommentaire;
          }
        }
        this.donnees.nbVisiosMaxProgrammes = 0;
        this.afficher();
      }
      jsxIfAffichageNbVisiosProgrammes() {
        return this.getNbVisiosProgrammesSurLaJournee() > 0;
      }
      jsxGetHtmlNbVisiosProgrammes() {
        const lNbVisios = this.getNbVisiosProgrammesSurLaJournee();
        if (lNbVisios > 1) {
          return 'Au moins un élève "A la maison" a déjà %d cours en visioconférence à cette date';
        } else {
          return '1 cours en visioconférence est déjà programmé pour au moins un élève à cette date';
        }
      }
      composeContenu() {
        const T = [];
        const lIdInputURLCours = GUID_1.GUID.getId();
        const lIdInputLibelleURL = GUID_1.GUID.getId();
        const lIdTextareaCommentaire = GUID_1.GUID.getId();
        T.push(
          IE.jsx.str(
            'div',
            { class: 'flex-contain cols' },
            IE.jsx.str(
              'div',
              { class: 'field-contain label-up' },
              IE.jsx.str(
                'div',
                { class: 'flex-contain flex-center justify-between' },
                IE.jsx.str(
                  'label',
                  { for: lIdInputURLCours, class: 'fluid-bloc' },
                  'Lien du cours',
                  ' ',
                  IE.jsx.str(
                    'span',
                    { 'aria-hidden': 'true' },
                    '(',
                    'Obligatoire'.toLowerCase(),
                    ')',
                  ),
                  ' : ',
                ),
                IE.jsx.str(
                  'span',
                  {
                    class: 'fluid-bloc text-end m-bottom-l',
                    ie_node: this.jsxNodeTestUrl.bind(this),
                    ie_if: this.jsxIfAvecAffichageLienTesterUrl.bind(this),
                  },
                  IE.jsx.str(
                    'a',
                    { href: '#' },
                    'Tester',
                  ),
                ),
              ),
              IE.jsx.str('input', {
                id: lIdInputURLCours,
                ie_model: this.jsxModelInputURL.bind(this),
                ie_trim: true,
                class: 'full-width',
                required: true,
              }),
            ),
            IE.jsx.str(
              'div',
              { class: 'field-contain label-up' },
              IE.jsx.str(
                'label',
                { for: lIdInputLibelleURL },
                'Libellé du lien',
                ' :',
              ),
              IE.jsx.str('input', {
                id: lIdInputLibelleURL,
                ie_model: this.jsxModelInputLibelleLien.bind(this),
                ie_trim: true,
                class: 'full-width',
                maxlength: this.tailleMaxChamps.libelle,
              }),
            ),
            IE.jsx.str(
              'div',
              { class: 'field-contain label-up' },
              IE.jsx.str(
                'label',
                { for: lIdTextareaCommentaire },
                'Commentaire',
                ' :',
              ),
              IE.jsx.str(IEHtml_TextareaMax_1.TextareaMax, {
                id: lIdTextareaCommentaire,
                style: !IE.estMobile ? 'height: 6rem;' : '',
                ie_model: this.jsxModelTextareaCommentaire.bind(this),
                class: 'full-width',
                maxlength: this.tailleMaxChamps.commentaire,
                placeholder: 'Rédigez votre commentaire',
              }),
            ),
            IE.jsx.str(
              'div',
              { ie_if: this.jsxIfAffichageNbVisiosProgrammes.bind(this) },
              IE.jsx.str('span', {
                ie_html: this.jsxGetHtmlNbVisiosProgrammes.bind(this),
              }),
            ),
          ),
        );
        return T.join('');
      }
      jsxModeleBoutonSupprimer() {
        return {
          event: () => {
            this._surValidation(
              ObjetFenetre_SaisieVisiosCours.TypeBouton.Supprimer,
            );
          },
          getDisabled: () => {
            const lVisioCours = this.getVisioCours();
            return (
              !lVisioCours ||
              !lVisioCours.existeNumero() ||
              lVisioCours.getEtat() === Enumere_Etat_1.EGenreEtat.Creation
            );
          },
        };
      }
      composeBas() {
        const H = [];
        H.push(
          IE.jsx.str(
            'div',
            { class: 'compose-bas' },
            IE.jsx.str(
              IEHtml_BtnImage_1.BtnIcon,
              {
                ie_model: this.jsxModeleBoutonSupprimer.bind(this),
                title: GlossaireCP_1.TradGlossaireCP.Supprimer,
                class: 'avecFond i-medium',
              },
              IE.jsx.str(IconeSvgTrash_1.IconeSvgTrash, null),
            ),
          ),
        );
        return H.join('');
      }
      surValidation(aNumeroBouton) {
        let lTypeBouton = ObjetFenetre_SaisieVisiosCours.TypeBouton.Annuler;
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
        if (aTypeBouton === ObjetFenetre_SaisieVisiosCours.TypeBouton.Valider) {
          const lMessagesChampsObligatoires = [];
          if (!lVisioCours.url || lVisioCours.url.length === 0) {
            lMessagesChampsObligatoires.push(
              'Vous devez obligatoirement renseigner un lien.',
            );
          }
          if (lMessagesChampsObligatoires.length > 0) {
            (0, AccessApp_1.getApp)()
              .getMessage()
              .afficher({
                type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Information,
                message: lMessagesChampsObligatoires.join('<br/>'),
              });
            return;
          }
        }
        if (aTypeBouton === ObjetFenetre_SaisieVisiosCours.TypeBouton.Annuler) {
          lVisioCours = this.sauvegardeVisio;
        }
        const lThis = this;
        (aTypeBouton === ObjetFenetre_SaisieVisiosCours.TypeBouton.Supprimer
          ? new Promise((aResolve) => {
              (0, AccessApp_1.getApp)()
                .getMessage()
                .afficher({
                  type: Enumere_BoiteMessage_1.EGenreBoiteMessage.Confirmation,
                  message: 'Voulez-vous supprimer ce lien ?',
                  callback: function (aNumeroBouton) {
                    if (
                      aNumeroBouton === Enumere_Action_1.EGenreAction.Valider
                    ) {
                      aResolve();
                    }
                  },
                });
            })
          : Promise.resolve()
        ).then(() => {
          if (
            aTypeBouton === ObjetFenetre_SaisieVisiosCours.TypeBouton.Supprimer
          ) {
            lVisioCours.setEtat(Enumere_Etat_1.EGenreEtat.Suppression);
          } else if (
            aTypeBouton !== ObjetFenetre_SaisieVisiosCours.TypeBouton.Valider
          ) {
            if (lVisioCours.getEtat() === Enumere_Etat_1.EGenreEtat.Creation) {
              lVisioCours.setEtat(Enumere_Etat_1.EGenreEtat.Suppression);
            }
          }
          if (
            lThis.saisieDirecte &&
            (aTypeBouton ===
              ObjetFenetre_SaisieVisiosCours.TypeBouton.Valider ||
              aTypeBouton ===
                ObjetFenetre_SaisieVisiosCours.TypeBouton.Supprimer)
          ) {
            lThis.callbackValider(aTypeBouton, lThis.donnees);
          } else {
            lThis.callback.appel(aTypeBouton, lThis.donnees);
          }
          lThis.fermer();
        });
      }
    }
    exports.ObjetFenetre_SaisieVisiosCours = ObjetFenetre_SaisieVisiosCours;
    function estLienTesterURLVisible(aVisioCours) {
      let lEstLienVisible = true;
      if (!aVisioCours || !aVisioCours.url || aVisioCours.url.length === 0) {
        lEstLienVisible = false;
      }
      return lEstLienVisible;
    }
    (function (ObjetFenetre_SaisieVisiosCours) {
      let TypeBouton;
      (function (TypeBouton) {
        TypeBouton['Supprimer'] = 'supprimer';
        TypeBouton['Annuler'] = 'annuler';
        TypeBouton['Valider'] = 'valider';
      })(
        (TypeBouton =
          ObjetFenetre_SaisieVisiosCours.TypeBouton ||
          (ObjetFenetre_SaisieVisiosCours.TypeBouton = {})),
      );
    })(
      ObjetFenetre_SaisieVisiosCours ||
        (exports.ObjetFenetre_SaisieVisiosCours =
          ObjetFenetre_SaisieVisiosCours =
            {}),
    );
  },
  fn: 'objetfenetre_saisievisioscours.js',
});