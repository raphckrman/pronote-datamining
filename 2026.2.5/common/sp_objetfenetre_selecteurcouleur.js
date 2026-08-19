IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ObjetFenetre_SelecteurCouleur = void 0;
    require('@cp/Espace/Css/FenetreSelecteurCouleur.css');
    const ObjetHtml_1 = require('@cp/Produit/Script/ObjetHtml');
    const ObjetPosition_1 = require('@cp/Produit/Script/ObjetPosition');
    const ObjetStyle_1 = require('@cp/Produit/Script/ObjetStyle');
    const ObjetFenetre_1 = require('@cp/Produit/Script/ObjetFenetre');
    const ObjetTraduction_1 = require('@cp/script/ObjetTraduction');
    const MethodesObjet_1 = require('@librairies/script/Outils/MethodesObjet');
    const AccessApp_1 = require('@cp/script/AccessApp');
    const IEHtml_CheckboxRadio_1 = require('@cp/Produit/Script/IEHtml.CheckboxRadio');
    const const_tailleImageCouleur = 150;
    var GenreCouleur;
    (function (GenreCouleur) {
      GenreCouleur[(GenreCouleur['RGB_R'] = 0)] = 'RGB_R';
      GenreCouleur[(GenreCouleur['RGB_G'] = 1)] = 'RGB_G';
      GenreCouleur[(GenreCouleur['RGB_B'] = 2)] = 'RGB_B';
      GenreCouleur[(GenreCouleur['HSL_H'] = 3)] = 'HSL_H';
      GenreCouleur[(GenreCouleur['HSL_S'] = 4)] = 'HSL_S';
      GenreCouleur[(GenreCouleur['HSL_L'] = 5)] = 'HSL_L';
    })(GenreCouleur || (GenreCouleur = {}));
    class ObjetFenetre_SelecteurCouleur extends ObjetFenetre_1.ObjetFenetre {
      constructor(aParams) {
        super(aParams);
        this.idCouleurPredef = this.IdContenu + '_CPreDef_';
        this.parametres = {
          marges: 15,
          largeurPickColor: 20,
          hauteurPickColor: 20,
          tailleCouleurSelectionne: { width: 70, height: 70 },
          largeurLibelleEdit: 18,
          hauteurConteneurEditCouleur: 25,
          largeurEditCouleurEtLibelle: 60,
          tailleInputCouleur: { width: 30, height: 18 },
        };
        this.setOptionsFenetre({
          titre: TradObjetFenetre_SelecteurCouleur.titre,
          listeBoutons: [
            'Annuler',
            'Valider',
          ],
          avecTailleSelonContenu: true,
        });
      }
      jsxNodeColorPicker(aNode) {
        $(aNode).on('pointerdown', (aEvent) => {
          const lData = {
            instance: this,
            positionRef: ObjetPosition_1.GPosition.getClientRect(aNode),
          };
          const lHSL = this._getHSLSelonEvent(lData, aEvent);
          this._actualiser({ HSL: lHSL });
        });
      }
      jsxNodeSlider(aNode) {
        $(aNode).on('pointerdown', (aEvent) => {
          const lData = {
            instance: this,
            positionRef: ObjetPosition_1.GPosition.getClientRect(aNode),
            pourSlider: true,
          };
          const lHSL = this._getHSLSelonEvent(lData, aEvent);
          this._actualiser({ HSL: lHSL });
        });
      }
      jsxModelRadioColor(aIndice) {
        return {
          getValue: () => {
            var _a;
            return (
              ((_a = this.couleur) === null || _a === void 0
                ? void 0
                : _a.couleur) === lTabCouleurs[aIndice].couleur
            );
          },
          setValue: (aValue) => {
            this._actualiser({ couleur: lTabCouleurs[aIndice].couleur });
          },
          getName: () => {
            return `${this.Nom}_jsxModelRadioColor`;
          },
        };
      }
      setDonnees(aCouleur) {
        this.afficher();
        ObjetPosition_1.GPosition.centrer(this.Nom);
        this._actualiser({ couleur: aCouleur });
        this._ajouterEvents();
      }
      surValidation(aGenreBouton) {
        this.fermer();
        this.callback.appel(aGenreBouton, this.couleur.couleur);
      }
      composeContenu() {
        const T = [];
        T.push('<div class="conteneur">');
        T.push(
          IE.jsx.str(
            'div',
            {
              class: 'FSC_ConteneurPickColor',
              role: 'radiogroup',
              'aria-label': TradObjetFenetre_SelecteurCouleur.radiogroup,
            },
            (aTab) => {
              if (lTabCouleurs) {
                let i = 0;
                for (const lObjCouleur of lTabCouleurs) {
                  aTab.push(
                    IE.jsx.str(IEHtml_CheckboxRadio_1.Radio, {
                      id: this.idCouleurPredef + i,
                      class: 'FSC_PickColor AvecMain',
                      ie_model: this.jsxModelRadioColor.bind(this, i),
                      style: ObjetStyle_1.GStyle.composeCouleurFond(
                        lObjCouleur.couleur,
                      ),
                      'aria-label': lObjCouleur.ariaLabel,
                    }),
                  );
                  i++;
                }
              }
            },
          ),
        );
        T.push('<div class="conteneur_droit">');
        T.push(this._composeZoneChoix());
        T.push(
          '<div class="FSC_CouleurSelection" style="margin-left:' +
            this.parametres.marges +
            'px;',
          'margin-top:',
          this.parametres.marges,
          'px;',
          ObjetStyle_1.GStyle.composeWidth(
            this.parametres.tailleCouleurSelectionne.width,
          ),
          ObjetStyle_1.GStyle.composeHeight(
            this.parametres.tailleCouleurSelectionne.height,
          ),
          '">',
          '</div>',
        );
        T.push(
          '<div style="position:absolute; left:' +
            (2 * this.parametres.marges +
              this.parametres.tailleCouleurSelectionne.width) +
            'px;',
          'top:',
          const_tailleImageCouleur + this.parametres.marges,
          'px;',
          '">',
        );
        T.push(this._composeBlocSaisieCouleur());
        T.push('</div>');
        T.push('</div>');
        T.push('</div>');
        return T.join('');
      }
      _actualiser(aCouleurObjet) {
        if (aCouleurObjet.couleur) {
          this.couleur = {
            couleur: aCouleurObjet.couleur,
            RGB: (0, AccessApp_1.getApp)()
              .getCouleur()
              .couleurToRGB(aCouleurObjet.couleur),
            HSL: (0, AccessApp_1.getApp)()
              .getCouleur()
              .couleurToHSV(aCouleurObjet.couleur),
          };
        } else if (aCouleurObjet.RGB) {
          this.couleur = {
            couleur:
              (0, AccessApp_1.getApp)()
                .getCouleur()
                .rgbToCouleur(aCouleurObjet.RGB) || '',
            RGB: aCouleurObjet.RGB,
            HSL: (0, AccessApp_1.getApp)()
              .getCouleur()
              .rgbToHSV(aCouleurObjet.RGB),
          };
        } else if (aCouleurObjet.HSL) {
          this.couleur = {
            couleur:
              (0, AccessApp_1.getApp)()
                .getCouleur()
                .hsvToCouleur(aCouleurObjet.HSL) || '',
            RGB: (0, AccessApp_1.getApp)()
              .getCouleur()
              .hsvToRGB(aCouleurObjet.HSL),
            HSL: aCouleurObjet.HSL,
          };
        } else {
          return;
        }
        ObjetHtml_1.GHtml.setValue(
          this._getIdEditCouleur(GenreCouleur.RGB_R),
          Math.round(this.couleur.RGB.r),
        );
        ObjetHtml_1.GHtml.setValue(
          this._getIdEditCouleur(GenreCouleur.RGB_G),
          Math.round(this.couleur.RGB.g),
        );
        ObjetHtml_1.GHtml.setValue(
          this._getIdEditCouleur(GenreCouleur.RGB_B),
          Math.round(this.couleur.RGB.b),
        );
        ObjetHtml_1.GHtml.setValue(
          this._getIdEditCouleur(GenreCouleur.HSL_H),
          Math.round(this.couleur.HSL.h),
        );
        ObjetHtml_1.GHtml.setValue(
          this._getIdEditCouleur(GenreCouleur.HSL_S),
          Math.round(this.couleur.HSL.s),
        );
        ObjetHtml_1.GHtml.setValue(
          this._getIdEditCouleur(GenreCouleur.HSL_L),
          Math.round(this.couleur.HSL.l),
        );
        const lHSLCarreCouleur = { h: this.couleur.HSL.h, s: 100, l: 100 };
        $('.Image_ColorPicker').css(
          'background-color',
          (0, AccessApp_1.getApp)()
            .getCouleur()
            .hsvToCouleur(lHSLCarreCouleur) || '',
        );
        const lPosition = {
          left: Math.floor(
            Math.max(
              0,
              Math.min(
                const_tailleImageCouleur,
                (this.couleur.HSL.s * const_tailleImageCouleur) / 100,
              ),
            ),
          ),
          top: Math.floor(
            const_tailleImageCouleur -
              Math.max(
                0,
                Math.min(
                  const_tailleImageCouleur,
                  (this.couleur.HSL.l * const_tailleImageCouleur) / 100,
                ),
              ),
          ),
        };
        $('.Image_CouleurSelection').css({
          left: lPosition.left + 'px',
          top: lPosition.top + 'px',
        });
        const lTop = Math.floor(
          const_tailleImageCouleur -
            Math.max(
              0,
              Math.min(
                const_tailleImageCouleur,
                (this.couleur.HSL.h * const_tailleImageCouleur) / 360,
              ),
            ),
        );
        $('.Image_CouleurIndicateur').css('top', lTop + 'px');
        $('.FSC_CouleurSelection').css(
          'background-color',
          this.couleur.couleur,
        );
      }
      _composeZoneChoix() {
        return IE.jsx.str(
          'div',
          { class: 'FSC_ZoneChoix' },
          IE.jsx.str(
            'div',
            { style: { 'margin-left': this.parametres.marges } },
            IE.jsx.str(
              'div',
              {
                class: 'Image_ColorPicker AvecMain',
                ie_node: this.jsxNodeColorPicker.bind(this),
                ie_draggable: this.jsxDragColorPicker.bind(this),
              },
              IE.jsx.str('div', {
                class: 'Image_CouleurSelection',
                style: 'position:absolute',
              }),
            ),
          ),
          IE.jsx.str(
            'div',
            {
              class: 'FondBlanc',
              style: `margin:0 ${this.parametres.marges}px`,
            },
            IE.jsx.str(
              'div',
              {
                class: 'Image_SliderCouleur AvecMain',
                ie_node: this.jsxNodeSlider.bind(this),
                ie_draggable: this.jsxDragSlider.bind(this),
              },
              IE.jsx.str('div', {
                class: 'Image_CouleurIndicateur',
                style: 'position:absolute;left:-9px; margin-top:-4px;',
              }),
            ),
          ),
        );
      }
      jsxDragColorPicker(aNode) {
        return {
          containment: aNode,
          drag: (aParamsDrag, aEvent) => {
            const lData = {
              instance: this,
              positionRef: aParamsDrag.rectContrainte,
            };
            const lHSL = this._getHSLSelonEvent(lData, aEvent);
            this._actualiser({ HSL: lHSL });
          },
        };
      }
      jsxDragSlider(aNode) {
        return {
          containment: aNode,
          drag: (aParamsDrag, aEvent) => {
            const lData = {
              instance: this,
              positionRef: aParamsDrag.rectContrainte,
              pourSlider: true,
            };
            const lHSL = this._getHSLSelonEvent(lData, aEvent);
            this._actualiser({ HSL: lHSL });
          },
        };
      }
      _composeBlocSaisieCouleur() {
        const T = [];
        const lStyleDefault =
          'position:absolute;' +
          ObjetStyle_1.GStyle.composeWidth(
            this.parametres.largeurEditCouleurEtLibelle,
          );
        T.push('<div style="', lStyleDefault, '">');
        T.push(this._composeSaisieCouleur(GenreCouleur.RGB_R));
        T.push('</div>');
        T.push(
          '<div style="',
          lStyleDefault,
          'top:',
          this.parametres.hauteurConteneurEditCouleur,
          'px">',
        );
        T.push(this._composeSaisieCouleur(GenreCouleur.RGB_G));
        T.push('</div>');
        T.push(
          '<div style="',
          lStyleDefault,
          'top:',
          this.parametres.hauteurConteneurEditCouleur * 2,
          'px">',
        );
        T.push(this._composeSaisieCouleur(GenreCouleur.RGB_B));
        T.push('</div>');
        T.push(
          '<div style="',
          lStyleDefault,
          'left:',
          this.parametres.largeurEditCouleurEtLibelle,
          'px;">',
        );
        T.push(this._composeSaisieCouleur(GenreCouleur.HSL_H));
        T.push('</div>');
        T.push(
          '<div style="',
          lStyleDefault,
          'left:',
          this.parametres.largeurEditCouleurEtLibelle,
          'px; top:',
          this.parametres.hauteurConteneurEditCouleur,
          'px">',
        );
        T.push(this._composeSaisieCouleur(GenreCouleur.HSL_S));
        T.push('</div>');
        T.push(
          '<div style="',
          lStyleDefault,
          'left:',
          this.parametres.largeurEditCouleurEtLibelle,
          'px; top:',
          this.parametres.hauteurConteneurEditCouleur * 2,
          'px">',
        );
        T.push(this._composeSaisieCouleur(GenreCouleur.HSL_L));
        T.push('</div>');
        return T.join('');
      }
      _getIdEditCouleur(aGenre) {
        return this.Nom + '_editC_' + aGenre;
      }
      _composeSaisieCouleur(aGenreCouleur) {
        let lLibelle;
        switch (aGenreCouleur) {
          case GenreCouleur.RGB_R:
            lLibelle = 'R';
            break;
          case GenreCouleur.RGB_G:
            lLibelle = 'G';
            break;
          case GenreCouleur.RGB_B:
            lLibelle = 'B';
            break;
          case GenreCouleur.HSL_H:
            lLibelle = 'H';
            break;
          case GenreCouleur.HSL_S:
            lLibelle = 'S';
            break;
          case GenreCouleur.HSL_L:
            lLibelle = 'L';
            break;
        }
        const lId = this._getIdEditCouleur(aGenreCouleur);
        const lStyle =
          ObjetStyle_1.GStyle.composeHeight(
            this.parametres.tailleInputCouleur.height,
          ) +
          ObjetStyle_1.GStyle.composeWidth(
            this.parametres.tailleInputCouleur.width,
          );
        return IE.jsx.str(
          IE.jsx.fragment,
          null,
          IE.jsx.str(
            'label',
            {
              for: lId,
              class: 'InlineBlock',
              style:
                ObjetStyle_1.GStyle.composeWidth(
                  this.parametres.largeurLibelleEdit,
                ) + 'padding-top:2px;',
            },
            lLibelle,
            ' :',
          ),
          IE.jsx.str(
            'div',
            { class: 'InlineBlock' },
            IE.jsx.str('input', {
              id: lId,
              class: 'AlignementDroit',
              type: 'text',
              style: lStyle,
              maxlength: '3',
            }),
          ),
        );
      }
      _ajouterEvents() {
        let lData, lEventMap;
        lEventMap = {
          change: this._onEditCouleur,
          keyup: this._onEditCouleur,
          focusout: this._onSortieCouleur,
        };
        for (const lKey of MethodesObjet_1.MethodesObjet.enumKeys(
          GenreCouleur,
        )) {
          lData = { instance: this, genre: GenreCouleur[lKey] };
          $('#' + this._getIdEditCouleur(lData.genre).escapeJQ()).on(
            lEventMap,
            lData,
          );
        }
      }
      _onEditCouleur(event) {
        const lGenreEdit = event.data.genre;
        const lValue = this.value;
        const lRegex = /[^0-9 ]+/g;
        let lChaine = lValue.replace(lRegex, '');
        if (lChaine !== '') {
          lChaine = parseInt(lChaine);
          switch (lGenreEdit) {
            case GenreCouleur.RGB_B:
            case GenreCouleur.RGB_G:
            case GenreCouleur.RGB_R:
              lChaine = Math.max(Math.min(lChaine, 255), 0);
              break;
            case GenreCouleur.HSL_H:
              lChaine = Math.max(Math.min(lChaine, 360), 0);
              break;
            default:
              lChaine = Math.max(Math.min(lChaine, 100), 0);
              break;
          }
        }
        if (!lChaine) {
          lChaine = '0';
        }
        if (lValue !== lChaine) {
          ObjetHtml_1.GHtml.setValue(this, lChaine);
        }
      }
      _onSortieCouleur(event) {
        const lGenreEdit = event.data.genre;
        const lThis = event.data.instance;
        if (
          lGenreEdit === GenreCouleur.RGB_R ||
          lGenreEdit === GenreCouleur.RGB_G ||
          lGenreEdit === GenreCouleur.RGB_B
        ) {
          const lRGB = {
            r: parseInt(
              ObjetHtml_1.GHtml.getValue(
                lThis._getIdEditCouleur(GenreCouleur.RGB_R),
              ),
            ),
            g: parseInt(
              ObjetHtml_1.GHtml.getValue(
                lThis._getIdEditCouleur(GenreCouleur.RGB_G),
              ),
            ),
            b: parseInt(
              ObjetHtml_1.GHtml.getValue(
                lThis._getIdEditCouleur(GenreCouleur.RGB_B),
              ),
            ),
          };
          lThis._actualiser({ RGB: lRGB });
        } else {
          const lHSL = {
            h: parseInt(
              ObjetHtml_1.GHtml.getValue(
                lThis._getIdEditCouleur(GenreCouleur.HSL_H),
              ),
            ),
            s: parseInt(
              ObjetHtml_1.GHtml.getValue(
                lThis._getIdEditCouleur(GenreCouleur.HSL_S),
              ),
            ),
            l: parseInt(
              ObjetHtml_1.GHtml.getValue(
                lThis._getIdEditCouleur(GenreCouleur.HSL_L),
              ),
            ),
          };
          lThis._actualiser({ HSL: lHSL });
        }
      }
      _getHSLSelonEvent(aParametres, event) {
        const lPosEvent =
          ObjetPosition_1.GPosition.getPositionEventJQuery(event);
        let lHSL;
        if (aParametres.pourSlider) {
          lHSL = {
            h: Math.floor(
              (360 *
                (const_tailleImageCouleur -
                  Math.max(
                    0,
                    Math.min(
                      const_tailleImageCouleur,
                      lPosEvent.y - aParametres.positionRef.top,
                    ),
                  ))) /
                const_tailleImageCouleur,
            ),
            s: aParametres.instance.couleur.HSL.s,
            l: aParametres.instance.couleur.HSL.l,
          };
        } else {
          lHSL = {
            h: aParametres.instance.couleur.HSL.h,
            s: Math.floor(
              (100 *
                Math.max(
                  0,
                  Math.min(
                    const_tailleImageCouleur,
                    lPosEvent.x - aParametres.positionRef.left,
                  ),
                )) /
                const_tailleImageCouleur,
            ),
            l: Math.floor(
              (100 *
                (const_tailleImageCouleur -
                  Math.max(
                    0,
                    Math.min(
                      const_tailleImageCouleur,
                      lPosEvent.y - aParametres.positionRef.top,
                    ),
                  ))) /
                const_tailleImageCouleur,
            ),
          };
        }
        return lHSL;
      }
    }
    exports.ObjetFenetre_SelecteurCouleur = ObjetFenetre_SelecteurCouleur;
    const ObjetTraduction_2 = require('@cp/script/ObjetTraduction');
    const TradObjetFenetre_SelecteurCouleur =
      ObjetTraduction_2.TraductionsModule.getModule(
        'ObjetFenetre_SelecteurCouleur',
        {
          titre: '',
          radiogroup: '',
          couleurWAI: {
            Noir: '',
            RougeTresFonce: '',
            Bordeaux: '',
            BrunRougeatre: '',
            RougeVif: '',
            RoseClair: '',
            OliveFonce: '',
            BrunFonce: '',
            OrangeVif: '',
            OrangeClair: '',
            JauneVif: '',
            JaunePale: '',
            VertOlive: '',
            VertSapin: '',
            VertFonce: '',
            VertVif: '',
            VertAnis: '',
            VertClair: '',
            GrisMoyen: '',
            VertCanard: '',
            VertForet: '',
            TurquoiseFonce: '',
            VertFluo: '',
            VertMenthe: '',
            BleuVertGrise: '',
            BleuMarine: '',
            BleuVif: '',
            BleuFonce: '',
            Cyan: '',
            BleuCielClair: '',
            GrisClair: '',
            BleuNuit: '',
            BleuRoi: '',
            BleuLavande: '',
            BleuTurquoise: '',
            BleuCiel: '',
            VioletTresFonce: '',
            TerreCuite: '',
            VioletFonce: '',
            RoseFonce: '',
            BleuLavandeGris: '',
            RoseBonbon: '',
            Blanc: '',
            VioletProfond: '',
            VioletVif: '',
            Fuchsia: '',
            Magenta: '',
            RosePale: '',
          },
        },
      );
    const lTabCouleurs = [
      {
        couleur: '#000000',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.Noir,
      },
      {
        couleur: '#400000',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.RougeTresFonce,
      },
      {
        couleur: '#800000',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.Bordeaux,
      },
      {
        couleur: '#804040',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.BrunRougeatre,
      },
      {
        couleur: '#FF0000',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.RougeVif,
      },
      {
        couleur: '#FF8080',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.RoseClair,
      },
      {
        couleur: '#808000',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.OliveFonce,
      },
      {
        couleur: '#804000',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.BrunFonce,
      },
      {
        couleur: '#FF8000',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.OrangeVif,
      },
      {
        couleur: '#FF8040',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.OrangeClair,
      },
      {
        couleur: '#FFFF00',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.JauneVif,
      },
      {
        couleur: '#FFFF80',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.JaunePale,
      },
      {
        couleur: '#808040',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.VertOlive,
      },
      {
        couleur: '#004000',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.VertSapin,
      },
      {
        couleur: '#008000',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.VertFonce,
      },
      {
        couleur: '#00FF00',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.VertVif,
      },
      {
        couleur: '#80FF00',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.VertAnis,
      },
      {
        couleur: '#80FF80',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.VertClair,
      },
      {
        couleur: '#808080',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.GrisMoyen,
      },
      {
        couleur: '#004040',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.VertCanard,
      },
      {
        couleur: '#008040',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.VertForet,
      },
      {
        couleur: '#008080',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.TurquoiseFonce,
      },
      {
        couleur: '#00FF40',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.VertFluo,
      },
      {
        couleur: '#00FF80',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.VertMenthe,
      },
      {
        couleur: '#408080',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.BleuVertGrise,
      },
      {
        couleur: '#000080',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.BleuMarine,
      },
      {
        couleur: '#0000FF',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.BleuVif,
      },
      {
        couleur: '#004080',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.BleuFonce,
      },
      {
        couleur: '#00FFFF',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.Cyan,
      },
      {
        couleur: '#80FFFF',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.BleuCielClair,
      },
      {
        couleur: '#C0C0C0',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.GrisClair,
      },
      {
        couleur: '#000040',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.BleuNuit,
      },
      {
        couleur: '#0000A0',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.BleuRoi,
      },
      {
        couleur: '#8080FF',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.BleuLavande,
      },
      {
        couleur: '#0080C0',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.BleuTurquoise,
      },
      {
        couleur: '#0080FF',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.BleuCiel,
      },
      {
        couleur: '#400040',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.VioletTresFonce,
      },
      {
        couleur: '#80424F',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.TerreCuite,
      },
      {
        couleur: '#800080',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.VioletFonce,
      },
      {
        couleur: '#800040',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.RoseFonce,
      },
      {
        couleur: '#8080C0',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.BleuLavandeGris,
      },
      {
        couleur: '#FF80C0',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.RoseBonbon,
      },
      {
        couleur: '#FFFFFF',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.Blanc,
      },
      {
        couleur: '#400080',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.VioletProfond,
      },
      {
        couleur: '#8000FF',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.VioletVif,
      },
      {
        couleur: '#FF0080',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.Fuchsia,
      },
      {
        couleur: '#FF00FF',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.Magenta,
      },
      {
        couleur: '#FF80FF',
        ariaLabel: TradObjetFenetre_SelecteurCouleur.couleurWAI.RosePale,
      },
    ];
  },
  fn: 'objetfenetre_selecteurcouleur.js',
});