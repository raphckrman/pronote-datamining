IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_LienKiosque = void 0;
    const UtilitaireUrl_1 = require('@cp/script/UtilitaireUrl');
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const ObjetListeElements_1 = require('@cp/script/ObjetListeElements');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const Enumere_Ressource_1 = require('@scolys/espace/script/enumere/Enumere_Ressource');
    const TypeGenreApiKiosque_1 = require('@scolys/espace/script/enumere/TypeGenreApiKiosque');
    const AccessApp_1 = require('@cp/script/AccessApp');
    class ObjetFenetre_LienKiosque extends ObjetFenetre_1.ObjetFenetre {
      constructor() {
        super(...arguments);
        this.listeRessources = new ObjetListeElements_1.ObjetListeElements();
      }
      composeContenu() {
        const T = [];
        T.push('<div style="padding: 5px;">');
        if (!this.pouriDevoir && !this.pourExerciceNum) {
          T.push(
            '<div class="PetitEspaceBas">',
            'Pour ajouter un lien dans la saisie du cahier de textes :',
            '</div>',
          );
          T.push(
            '<div class="EspaceGauche PetitEspaceBas">',
            '1. Ouvrez un des manuels proposés :',
            '</div>',
          );
        } else if (this.pouriDevoir) {
          T.push(
            '<div class="EspaceBas">',
            'Seules les ressources disposant de l'icône iDevoir %s dans le contenu du manuel numérique peuvent être associées à un devoir dans PRONOTE.',
            '</div>',
          );
          T.push(
            '<div class="PetitEspaceBas">',
            'Pour ajouter un iDevoir :',
            '</div>',
          );
          T.push(
            '<div class="EspaceGauche PetitEspaceBas">',
            '1. Ouvrez un des manuels proposés :',
            '</div>',
          );
        } else if (this.pourExerciceNum) {
          T.push(
            '<div class="EspaceBas">',
            'Seules les ressources disposant de l'icône des exercices numériques %s dans le contenu du manuel numérique peuvent être associées à un travail à faire dans PRONOTE.',
            '</div>',
          );
          T.push(
            '<div class="PetitEspaceBas">',
            'Pour ajouter un exercice numérique :',
            '</div>',
          );
          T.push(
            '<div class="EspaceGauche PetitEspaceBas">',
            '1. Ouvrez un des manuels proposés :',
            '</div>',
          );
        }
        T.push('</div>');
        T.push(
          '<fieldset class="FondBlanc" style="margin:0; padding:0;">',
          '<legend>',
          'Manuels numériques',
          '</legend>',
        );
        T.push('<div style="padding: 8px;">');
        for (let i = 0; i < this.listeRessources.count(); i++) {
          const lRessource = this.listeRessources.get(i);
          T.push('<div class="PetitEspaceBas" style="display:flex">');
          T.push(
            '<div class="NoWrap EspaceDroit10">',
            lRessource.editeur || '',
            '</div>',
          );
          const lnodeLien = (aNode) => {
            $(aNode).on('validation', () => {
              if (!!lRessource) {
                this.callback.appel(
                  0,
                  lRessource.getGenre() ||
                    Enumere_Ressource_1.TypeHttpRessource
                      .HttpRessource_RessourceNumeriqueKiosque,
                );
              }
            });
          };
          T.push(
            IE.jsx.str(
              'span',
              { ie_node: lnodeLien },
              UtilitaireUrl_1.UtilitaireUrl.composerUrlLienExterne({
                documentJoint: lRessource,
                title: lRessource.description,
                libelleEcran: lRessource.titre,
              }),
            ),
          );
          T.push('</div>');
        }
        T.push('</div>');
        T.push('</fieldset>');
        T.push('<div style="padding: 5px;">');
        if (!this.pouriDevoir && !this.pourExerciceNum) {
          T.push(
            '<div class="EspaceGauche PetitEspaceBas">',
            '2. Depuis le contenu du manuel numérique, sélectionnez la ressource (contenu, énoncé, vidéo, article, etc.) à l'aide de l'icône suivante : %s',
            '</div>',
          );
          T.push(
            '<div class="EspaceGauche PetitEspaceBas">',
            '3. Envoyez le lien de la ressource vers PRONOTE.',
            '</div>',
          );
          T.push(
            '<div class="EspaceGauche PetitEspaceBas">',
            '4. Depuis PRONOTE, sélectionnez et ajoutez le lien depuis l'affichage de saisie du cahier de textes : ajouter le lien à un contenu ou en documents joints dans un travail à faire.',
            '</div>',
          );
        } else if (this.pouriDevoir) {
          T.push(
            '<div class="EspaceGauche PetitEspaceBas">',
            '2. Depuis le contenu du manuel numérique, sélectionnez la ressource (exercice, vidéo, article, etc.) à l'aide de l'icône suivante : %s',
            '</div>',
          );
          T.push(
            '<div class="EspaceGauche PetitEspaceBas">',
            '3. Envoyez le lien de la ressource vers PRONOTE.',
            '</div>',
          );
          T.push(
            '<div class="EspaceGauche PetitEspaceBas">',
            '4. Depuis PRONOTE, sélectionnez et ajoutez le lien depuis l'affichage de saisie des notes : %s',
              ],
            ),
            '</div>',
          );
        } else if (this.pourExerciceNum) {
          T.push(
            '<div class="EspaceGauche PetitEspaceBas">',
            '2. Depuis le contenu du manuel numérique, sélectionnez la ressource (énoncé, vidéo, article, etc.) à l'aide de l'icône suivante : %s',
            '</div>',
          );
          T.push(
            '<div class="EspaceGauche PetitEspaceBas">',
            '3. Envoyez le lien de la ressource vers PRONOTE.',
            '</div>',
          );
          T.push(
            '<div class="EspaceGauche PetitEspaceBas">',
            '4. Depuis PRONOTE, sélectionnez et ajoutez le lien depuis l'affichage de saisie d'un travail à faire : %s',
              ],
            ),
            '</div>',
          );
        }
        T.push('</div>');
        return T.join('');
      }
      setDonnees(aListeRessources, aGenresApiKiosque) {
        const lEtatUtil = (0, AccessApp_1.getApp)().getEtatUtilisateur();
        this.listeRessources = aListeRessources;
        this.genresApiKiosque = aGenresApiKiosque;
        this.pouriDevoir =
          this.genresApiKiosque.contains(
            TypeGenreApiKiosque_1.TypeGenreApiKiosque.Api_EnvoiNote,
          ) && lEtatUtil.activerKiosqueRenduTAF;
        this.pourExerciceNum =
          this.genresApiKiosque.contains(
            TypeGenreApiKiosque_1.TypeGenreApiKiosque.Api_RenduPJTAF,
          ) && lEtatUtil.activerKiosqueRenduTAF;
        this.actualiser();
        this.afficher();
        this.setBoutonActif(1, false);
      }
      surValidation(aGenreBouton) {
        this.fermer();
        this.callback.appel(aGenreBouton);
      }
    }
    exports.ObjetFenetre_LienKiosque = ObjetFenetre_LienKiosque;
  },
  fn: 'objetfenetre_lienkiosque.js',
});