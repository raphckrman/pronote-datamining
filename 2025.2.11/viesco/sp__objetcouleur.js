IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjectCouleurCelluleListe =
      exports.ObjectCouleurCellule =
      exports._ObjetCouleur =
        void 0;
    const MethodesObjet_1 = require('MethodesObjet');
    const UtilitaireCouleur_1 = require('UtilitaireCouleur');
    if (!global.GCouleur) {
      global.GCouleur = null;
    }
    class _ObjetCouleur {
      constructor(aAvecNonEditable) {
        this.blanc = 'var(--color-background)';
        this.noir = 'var(--color-text)';
        this.eleve = { garcon: '#2D24F0', fille: '#EE01F6' };
        this.fond = 'var(--color-background)';
        this.themeNeutre = {};
        [
          'light',
          'legere',
          'legere2',
          'claire',
          'moyen1',
          'moyen2',
          'moyen3',
          'foncee',
          'sombre',
        ].forEach((aKey) => {
          this.themeNeutre[aKey] = `var(--theme-neutre-${aKey})`;
        });
        this.themeCouleur = {};
        ['claire', 'moyen1', 'foncee', 'sombre'].forEach((aKey) => {
          this.themeCouleur[aKey] = `var(--theme-${aKey})`;
        });
        this.texte = this.noir;
        this.bordure = this.trait = this.themeNeutre.moyen2;
        this.cumul = this.themeNeutre.moyen2;
        this.nonEditable = {
          fond: 'var(--color-background-non-editable)',
          texte: this.themeNeutre.foncee,
          bordure: this.themeNeutre.moyen2,
        };
        this.intermediaire = this.themeNeutre.claire;
        this.avecNonEditable =
          aAvecNonEditable === null || aAvecNonEditable === undefined
            ? true
            : aAvecNonEditable;
        this.texteListeCreation = '#444444';
        this.fenetre = {
          fond: this.fond,
          bordure: this.bordure,
          bandeau: { fond: this.blanc, texte: this.noir },
          nonEditable: this.nonEditable,
          cumul: this.cumul,
          texte: this.themeNeutre.foncee,
          intermediaire: this.themeNeutre.claire,
        };
        this.rouge = 'var(--color-red-foncee)';
        this.rougeClair = 'var(--color-red-claire)';
        this.vert = 'var( --color-green-moyen)';
        this.grisTresClair = this.fenetre.nonEditable;
        this.grisClair = this.fenetre.intermediaire;
        this.grisFonce = this.fenetre.cumul;
        this.grisTresFonce = this.fenetre.texte;
        this.standard = new ObjectCouleurCellule(this.blanc, this.noir);
        this.selection = new ObjectCouleurCelluleFC(
          'var(--couleur-selection)',
          this.blanc,
        );
        this.selection.fondClair = 'var(--couleur-selection-fond-clair)';
        this.inactif = new ObjectCouleurCellule('#F0F0F0', '#AAAAAA');
        this.grille = {
          fond: this.themeNeutre.moyen1,
          bordure: '#848484',
          texte: 'black',
          gabarit: 'var(--color-grille-gabarit)',
          fondCoursSuperpose: '#f9f4f0',
          selectionCours: this.selection.fond,
        };
        this.bandeau = {
          fond: this.themeNeutre.moyen1,
          texte: this.noir,
          bordure: this.themeNeutre.light,
          separateur: this.themeCouleur.foncee,
        };
        this.titre = new ObjectCouleurCellule(
          this.themeNeutre.light,
          this.themeCouleur.foncee,
          this.bordure,
        );
        this.liste = new ObjectCouleurCelluleListe();
        this.liste.bordure = this.bordure;
        this.liste.cellule = new ObjectCouleurCellule(
          this.fond,
          this.texte,
          this.bordure,
        );
        this.liste.editable = new ObjectCouleurCellule(
          this.blanc,
          this.noir,
          this.bordure,
        );
        this.liste.editableAlternee1 = new ObjectCouleurCellule(
          this.themeNeutre.light,
          this.noir,
          this.bordure,
        );
        this.liste.editableAlternee2 = new ObjectCouleurCellule(
          this.blanc,
          this.noir,
          this.bordure,
        );
        this.liste.nonEditable = new ObjectCouleurCellule(
          this.avecNonEditable ? this.themeNeutre.legere2 : this.blanc,
          this.noir,
          this.bordure,
        );
        this.liste.nonEditableAlternee1 = new ObjectCouleurCellule(
          this.themeNeutre.claire,
          this.noir,
          this.bordure,
        );
        this.liste.nonEditableAlternee2 = new ObjectCouleurCellule(
          this.themeNeutre.legere2,
          this.noir,
          this.bordure,
        );
        this.liste.nonApplicable = new ObjectCouleurCellule(
          this.themeNeutre.moyen1,
          this.noir,
          this.bordure,
        );
        this.liste.colonneFixe = new ObjectCouleurCellule(
          this.themeNeutre.claire,
          this.noir,
          this.bordure,
        );
        this.liste.colonneFixeAlternee1 = new ObjectCouleurCellule(
          this.themeNeutre.claire,
          this.noir,
          this.bordure,
        );
        this.liste.colonneFixeAlternee2 = new ObjectCouleurCellule(
          this.themeNeutre.legere2,
          this.noir,
          this.bordure,
        );
        this.liste.moyenne = new ObjectCouleurCellule(
          this.themeNeutre.claire,
          this.noir,
          this.bordure,
        );
        this.liste.moyenneAlternee1 = new ObjectCouleurCellule(
          this.themeNeutre.claire,
          this.noir,
          this.bordure,
        );
        this.liste.moyenneAlternee2 = new ObjectCouleurCellule(
          this.themeNeutre.legere2,
          this.noir,
          this.bordure,
        );
        this.liste.total = new ObjectCouleurCellule(
          this.themeNeutre.foncee,
          this.blanc,
          this.bordure,
        );
        this.liste.totalAlternee1 = new ObjectCouleurCellule(
          this.themeNeutre.sombre,
          this.blanc,
          this.bordure,
        );
        this.liste.totalAlternee2 = new ObjectCouleurCellule(
          this.themeNeutre.foncee,
          this.blanc,
          this.bordure,
        );
        this.liste.cumul = new ObjectCouleurCelluleCumul(
          this.themeCouleur.claire,
          this.noir,
          this.bordure,
        );
        this.liste.cumul[0] = new ObjectCouleurCellule(
          this.themeCouleur.moyen1,
          this.blanc,
          this.bordure,
        );
        this.liste.cumul[1] = new ObjectCouleurCellule(
          this.themeCouleur.claire,
          this.noir,
          this.bordure,
        );
        this.liste.cumul[2] = new ObjectCouleurCellule(
          this.themeNeutre.moyen1,
          this.noir,
          this.bordure,
        );
        this.liste.cumul[3] = new ObjectCouleurCellule(
          this.themeNeutre.claire,
          this.noir,
          this.bordure,
        );
        this.listeNeutre = MethodesObjet_1.MethodesObjet.dupliquer(this.liste);
        this.listeNeutre.cumul[0].fond = this.themeNeutre.claire;
        this.listeNeutre.cumul[1].fond = this.themeNeutre.claire;
        this.listeNeutre.cumul[2].fond = this.themeNeutre.claire;
        this.listeNeutre.cumul[3].fond = this.themeNeutre.claire;
        this.correspondance = {};
        this.accessible = {};
        this.devoir = {
          commeUnBonus: '#00FF00',
          commeUneNote: 'darkorange',
          commeUnSeuil: '#9933FF',
        };
        this.surlignageTexte = '#99cde4';
      }
      getCouleurCellule(aEditable, aSelectionne) {
        if (aSelectionne) {
          return this.selection;
        }
        return aEditable ? this.liste.editable : this.liste.nonEditable;
      }
      couleurToRGB(aHex) {
        return UtilitaireCouleur_1.UtilitaireCouleur.couleurToRGB(aHex);
      }
      couleurToHSV(hex) {
        return UtilitaireCouleur_1.UtilitaireCouleur.couleurToHSV(hex);
      }
      rgbToCouleur(aRGB) {
        return UtilitaireCouleur_1.UtilitaireCouleur.rgbToCouleur(aRGB);
      }
      rgbToHSV(rgb) {
        return UtilitaireCouleur_1.UtilitaireCouleur.rgbToHSV(rgb);
      }
      hsvToCouleur(hsl) {
        return UtilitaireCouleur_1.UtilitaireCouleur.hsvToCouleur(hsl);
      }
      hsvToRGB(hsl) {
        return UtilitaireCouleur_1.UtilitaireCouleur.hsvToRGB(hsl);
      }
      hsvToHSLDelphi(hsv) {
        return UtilitaireCouleur_1.UtilitaireCouleur.hsvToHSLDelphi(hsv);
      }
      hslDelphiToHSV(hsl) {
        return UtilitaireCouleur_1.UtilitaireCouleur.hslDelphiToHSV(hsl);
      }
      getCouleurCorrespondance(aCouleur) {
        return UtilitaireCouleur_1.UtilitaireCouleur.getContrastedColor(
          aCouleur,
        );
      }
      getCouleurAccessible(aCouleur) {
        if (!aCouleur || !aCouleur.substring) {
          return aCouleur;
        }
        if (this.accessible[aCouleur] !== undefined) {
          return this.accessible[aCouleur];
        }
        let r = parseInt(aCouleur.substring(1, 3), 16) / 255;
        let g = parseInt(aCouleur.substring(3, 5), 16) / 255;
        let b = parseInt(aCouleur.substring(5, 7), 16) / 255;
        const max = Math.max(r, g, b),
          min = Math.min(r, g, b);
        const l = (max + min) / 2;
        r = g = b = Math.round(l * 255);
        this.accessible[aCouleur] =
          '#' +
          (r < 16 ? '0' : '') +
          r.toString(16) +
          (g < 16 ? '0' : '') +
          g.toString(16) +
          (b < 16 ? '0' : '') +
          b.toString(16);
        return this.accessible[aCouleur];
      }
      getCouleurTransparente(aColor, aOpacity, aBackground, aBackOpa) {
        if (!aColor || !aColor.substring) {
          return false;
        }
        if (aOpacity < 0 || aOpacity > 1) {
          return false;
        }
        if (!aBackOpa || aBackOpa < 0 || aBackOpa > 1) {
          aBackOpa = 1;
        }
        const lDest = [];
        const lFond = [255, 255, 255];
        const lOrig = [];
        if (aBackground && aBackground.substring) {
          lFond[0] = parseInt(aBackground.substring(1, 3), 16);
          lFond[1] = parseInt(aBackground.substring(3, 5), 16);
          lFond[2] = parseInt(aBackground.substring(5, 7), 16);
        }
        lDest[0] = parseInt(aColor.substring(1, 3), 16);
        lDest[1] = parseInt(aColor.substring(3, 5), 16);
        lDest[2] = parseInt(aColor.substring(5, 7), 16);
        for (let i = 0; i < 3; i++) {
          lOrig[i] = Math.floor(
            (lDest[i] * (aOpacity + aBackOpa * (1 - aOpacity)) -
              lFond[i] * aBackOpa * (1 - aOpacity)) /
              aOpacity,
          );
          if (lOrig[i] > 255 || lOrig[i] < 0) {
            return false;
          }
        }
        return (
          '#' +
          (lOrig[0] < 16 ? '0' : '') +
          lOrig[0].toString(16) +
          (lOrig[1] < 16 ? '0' : '') +
          lOrig[1].toString(16) +
          (lOrig[2] < 16 ? '0' : '') +
          lOrig[2].toString(16)
        );
      }
      getCouleurTransformationCours(aCouleur) {
        const lRGB = this.couleurToRGB(aCouleur),
          lHSL = this.hsvToHSLDelphi(this.rgbToHSV(lRGB));
        let lEstProcheDuGris =
          Math.abs(lRGB.r - lRGB.g) < 10 &&
          Math.abs(lRGB.r - lRGB.b) < 10 &&
          Math.abs(lRGB.g - lRGB.b) < 10;
        if (!lEstProcheDuGris) {
          lEstProcheDuGris = lHSL.s < 8;
        }
        if (lEstProcheDuGris) {
          lRGB.r = Math.borner(lRGB.r + 50, 180, 255);
          lRGB.g = Math.borner(lRGB.g + 50, 180, 255);
          lRGB.b = Math.borner(lRGB.b + 50, 180, 255);
          return this.rgbToCouleur(lRGB);
        } else {
          lHSL.s = Math.max(lHSL.s - 100, 60);
          if (lHSL.l < 140) {
            lHSL.l = 160;
          } else if (lHSL.l < 160) {
            lHSL.l = 200;
          } else {
            lHSL.l = 220;
          }
          return this.hsvToCouleur(this.hslDelphiToHSV(lHSL));
        }
      }
      getCouleurContrastee(aCouleur, aCouleurFond, aParametresContraste) {
        if (!aCouleur || !aCouleurFond) {
          return aCouleur || '#000';
        }
        if (!aParametresContraste) {
          aParametresContraste = {};
        }
        if (aParametresContraste.ponderationFoncee === undefined) {
          aParametresContraste.ponderationFoncee = 1;
        }
        if (aParametresContraste.ponderationClaire === undefined) {
          aParametresContraste.ponderationClaire = 1;
        }
        const lHSL = UtilitaireCouleur_1.UtilitaireCouleur.hsvToHSLDelphi(
          UtilitaireCouleur_1.UtilitaireCouleur.couleurToHSV(aCouleur),
        );
        const lHSLFond = UtilitaireCouleur_1.UtilitaireCouleur.hsvToHSLDelphi(
          UtilitaireCouleur_1.UtilitaireCouleur.couleurToHSV(aCouleurFond),
        );
        const lDeltaInitial = 30;
        const lDeltaRenduPlusFoncee =
          lDeltaInitial * aParametresContraste.ponderationFoncee;
        const lDeltaRenduPlusClair =
          lDeltaInitial * aParametresContraste.ponderationClaire;
        if (lHSLFond.l > 75) {
          if (lHSL.l >= lDeltaRenduPlusFoncee) {
            lHSL.l += -1 * lDeltaRenduPlusFoncee;
          } else {
            lHSL.l = 0;
          }
        } else {
          lHSL.l =
            UtilitaireCouleur_1.UtilitaireCouleur.hslDelphiMax -
            lDeltaRenduPlusClair;
        }
        return UtilitaireCouleur_1.UtilitaireCouleur.hsvToCouleur(
          UtilitaireCouleur_1.UtilitaireCouleur.hslDelphiToHSV(lHSL),
        );
      }
    }
    exports._ObjetCouleur = _ObjetCouleur;
    _ObjetCouleur.hslDelphiMax =
      UtilitaireCouleur_1.UtilitaireCouleur.hslDelphiMax;
    class ObjectCouleurCellule {
      constructor(aFond, aTexte, aBordure) {
        this.fond = aFond;
        this.texte = aTexte;
        this.bordure = aBordure;
      }
      getFond(aPourImpression) {
        return aPourImpression ? global.GCouleur.blanc : this.fond;
      }
      getTexte(aPourImpression) {
        return aPourImpression ? global.GCouleur.noir : this.texte;
      }
      getBordure(aPourImpression) {
        return aPourImpression ? global.GCouleur.noir : this.bordure;
      }
    }
    exports.ObjectCouleurCellule = ObjectCouleurCellule;
    class ObjectCouleurCelluleCumul extends ObjectCouleurCellule {}
    class ObjectCouleurCelluleFC extends ObjectCouleurCellule {}
    class ObjectCouleurCelluleListe extends ObjectCouleurCellule {}
    exports.ObjectCouleurCelluleListe = ObjectCouleurCelluleListe;
  },
  fn: '_objetcouleur.js',
});