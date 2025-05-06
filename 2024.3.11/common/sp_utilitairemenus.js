IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.UtilitaireMenus = void 0;
    const ObjetDate_1 = require('ObjetDate');
    const ObjetTraduction_1 = require('ObjetTraduction');
    const TypeOrigineCreationLabelAlimentaire_1 = require('TypeOrigineCreationLabelAlimentaire');
    const TypeOrigineCreationAllergeneAlimentaire_1 = require('TypeOrigineCreationAllergeneAlimentaire');
    const ObjetElement_1 = require('ObjetElement');
    const ObjetListeElements_1 = require('ObjetListeElements');
    const MethodesObjet_1 = require('MethodesObjet');
    const ObjetTri_1 = require('ObjetTri');
    const Enumere_Repas_1 = require('Enumere_Repas');
    exports.UtilitaireMenus = {
      composeColonne: (aParams) => {
        const lEstJourVide =
          aParams && 'estJourVide' in aParams && aParams.estJourVide;
        let lDate =
          aParams && aParams.date
            ? ObjetDate_1.GDate.formatDate(aParams.date, '%JJJJ %J %MMMM')
            : '';
        let lHtmlDate = lDate;
        if (lDate.length > 0) {
          const [lJour, lNumero, lMois] = lDate.split(' ');
          lHtmlDate = `${lJour} <span class="titre-gras">${lNumero}</span> ${lMois}`;
        }
        const H = [];
        const lClass = ['ctn-liste'];
        if (
          MethodesObjet_1.MethodesObjet.isNumber(aParams.indice) &&
          !aParams.estDernierJourCycle
        ) {
          lClass.push(
            'avecPlusieurRepas' in aParams && aParams.avecPlusieurRepas
              ? 'full-height'
              : 'half-height',
          );
        }
        H.push(
          `<div class="${lClass.join(' ')}" role="group" aria-label="${lDate}">`,
        );
        if (!IE.estMobile) {
          H.push(
            `<div class="ctn-date ie-shadow-bottom">`,
            `<h2 class="ie-texte p-y-xl">${lHtmlDate}</h2>`,
            `</div>`,
          );
        }
        if (lEstJourVide) {
          H.push(exports.UtilitaireMenus.composeJourVide());
        } else {
          H.push(exports.UtilitaireMenus.composeJour(aParams));
        }
        H.push(`</div>`);
        return H.join('');
      },
      composeJourVide: () => {
        const H = [];
        H.push(
          `<div class="ctn-vide">`,
          `<p>${'Aucun menu renseigné à cette date'}</p>`,
          IE.estMobile
            ? `<div class="Image_No_Data image-colonne " aria-hidden="true"></div>`
            : '',
          `</div>`,
        );
        return H.join('');
      },
      composeJour: (aParams) => {
        const H = [];
        H.push(`<ul>`);
        if (aParams.options.avecRepasMidi) {
          if (aParams.avecRepasMidi) {
            H.push(
              exports.UtilitaireMenus.composeRepas(
                aParams,
                Enumere_Repas_1.EGenreRepas.Midi,
              ),
            );
          } else if (!IE.estMobile) {
            H.push(
              exports.UtilitaireMenus.composeRepasVide(
                Enumere_Repas_1.EGenreRepas.Midi,
              ),
            );
          }
        }
        if (aParams.options.avecRepasSoir) {
          if (aParams.avecRepasSoir) {
            H.push(
              exports.UtilitaireMenus.composeRepas(
                aParams,
                Enumere_Repas_1.EGenreRepas.Soir,
              ),
            );
          } else if (!IE.estMobile) {
            H.push(
              exports.UtilitaireMenus.composeRepasVide(
                Enumere_Repas_1.EGenreRepas.Soir,
              ),
            );
          }
        }
        H.push(`</ul>`);
        return H.join('');
      },
      composeRepas: (aParams, aGenre) => {
        let lTitre, lRepas, lAvecInversion;
        if (aParams.listeRepas) {
          aParams.listeRepas.parcourir((aRepas) => {
            if (aRepas.getGenre() === aGenre && aRepas.ListePlats) {
              lRepas = aRepas;
              return false;
            }
          });
        }
        const lLibelle =
          lRepas && lRepas.getLibelle().length > 0 ? lRepas.getLibelle() : null;
        switch (aGenre) {
          case Enumere_Repas_1.EGenreRepas.Midi:
            lTitre = 'Menu du Midi';
            lAvecInversion = false;
            break;
          case Enumere_Repas_1.EGenreRepas.Soir:
            lTitre = 'Menu du Soir';
            lAvecInversion = true;
            break;
        }
        const H = [];
        if (
          aGenre === Enumere_Repas_1.EGenreRepas.Soir &&
          aParams.options.avecRepasSoir &&
          !IE.estMobile
        ) {
          H.push(`<li class="div-horizontal" aria-hidden="true" ></li>`);
        }
        H.push(`<li class="p-top-xxl ctn-repas">`);
        if (
          (aParams.options.avecRepasSoir &&
            aParams.options.avecRepasMidi &&
            !IE.estMobile) ||
          lLibelle ||
          (IE.estMobile && !aParams.avecPlusieurRepas)
        ) {
          H.push(
            `<div  class="titre-repas ${!IE.estMobile && aParams.avecPlusieurRepas ? 'flex-contain' : ''} cols">`,
          );
          const lHtmlTitre = [];
          if (
            (aParams.options.avecRepasSoir &&
              aParams.options.avecRepasMidi &&
              !IE.estMobile) ||
            (IE.estMobile && !aParams.avecPlusieurRepas)
          ) {
            lHtmlTitre.push(`<div class="ie-sous-titre m-y-s">${lTitre}</div>`);
          }
          if (lLibelle) {
            lHtmlTitre.push(`<div class="titre-gras m-y-s">${lLibelle}</div>`);
          }
          if (lAvecInversion) {
            lHtmlTitre.reverse();
          }
          H.push(lHtmlTitre.join(''));
          H.push(`</div>`);
        }
        H.push(
          `<ul class="browser-default" aria-label="${lTitre} ${lLibelle || ''}">`,
        );
        if (lRepas) {
          lRepas.ListePlats.parcourir((aPlat) => {
            H.push(exports.UtilitaireMenus.composePlat(aPlat));
          });
        }
        H.push('</ul>');
        H.push(`</li>`);
        return H.join('');
      },
      composeRepasVide: (aGenreRepas) => {
        const H = [];
        let lTitre;
        switch (aGenreRepas) {
          case Enumere_Repas_1.EGenreRepas.Midi:
            lTitre = 'Menu du Midi';
            break;
          case Enumere_Repas_1.EGenreRepas.Soir:
            lTitre = 'Menu du Soir';
            H.push(`<div class="div-horizontal"></div>`);
            break;
        }
        H.push(`<div class="p-y-xxl ctn-repas  vide">`);
        H.push(`<div class="titre-repas">`);
        H.push(`<div class="ie-sous-titre m-y-s">${lTitre}</div>`);
        H.push(`</div>`);
        H.push(`</div>`);
        return H.join('');
      },
      composePlat: (aPlat) => {
        const H = [];
        if (aPlat && aPlat.ListeAliments) {
          const lListeAliment = aPlat.ListeAliments.trier();
          H.push(`<li class="ie-texte p-y-xl">`);
          lListeAliment.parcourir((aAliment) => {
            const lAvecLabels =
              aAliment.listeLabelsAlimentaires &&
              aAliment.listeLabelsAlimentaires.count() > 0;
            const lAvecAllergene =
              aAliment.listeAllergenesAlimentaire &&
              aAliment.listeAllergenesAlimentaire.count() > 0;
            H.push(`<div class="aliment m-y-xl">`);
            H.push(
              `<div ${lAvecLabels || lAvecAllergene ? 'class="ctn-gauche"' : ''} >${aAliment.getLibelle()}</div>`,
            );
            if (lAvecLabels || lAvecAllergene) {
              H.push(`<div class="ctn-droite flex-contain cols flex-gap ">`);
              if (lAvecLabels) {
                H.push('<div class="ctn-labels">');
                aAliment.listeLabelsAlimentaires.parcourir((aLabel) => {
                  H.push(exports.UtilitaireMenus.composeLabel(aLabel));
                });
                H.push('</div>');
              }
              if (lAvecAllergene) {
                H.push(`<div class="ctn-allergenes">`);
                const lListeAllergene = [];
                aAliment.listeAllergenesAlimentaire.parcourir((aAllergene) => {
                  H.push(exports.UtilitaireMenus.composeAllergene(aAllergene));
                  lListeAllergene.push(aAllergene.getLibelle());
                });
                H.push(`</div>`);
              }
              H.push(`</div>`);
            }
            H.push(`</div>`);
          });
          H.push(`</li>`);
        }
        return H.join('');
      },
      composeAllergene: (aAllergene) => {
        return aAllergene
          ? `<i role="img" alt="${aAllergene.getLibelle()}" class="i-medium icon ${TypeOrigineCreationAllergeneAlimentaire_1.TypeOrigineCreationAllergeneAlimentaireUtil.getClassIcone(aAllergene.getGenre())}" style="${aAllergene.couleur ? `color:${aAllergene.couleur}` : ''}" title="${aAllergene.getLibelle()}" ></i>`
          : '';
      },
      composeLabel: (aLabel) => {
        if (!aLabel) {
          return '';
        }
        if (
          aLabel.getGenre() ===
            TypeOrigineCreationLabelAlimentaire_1
              .TypeOrigineCreationLabelAlimentaire.OCLA_Utilisateur &&
          !!aLabel.icone
        ) {
          return `<img class="img-icon" src="data:image/png;base64,${aLabel.icone}" alt="${aLabel.getLibelle()}" onerror="$(this).parent().remove();" title="${aLabel.getLibelle()}" />`;
        } else {
          return `<i role="img" alt="${aLabel.getLibelle()}" class="i-medium icon ${TypeOrigineCreationLabelAlimentaire_1.TypeOrigineCreationLabelAlimentaireUtil.getClassIcone(aLabel.getGenre())}" style="${aLabel.couleur ? `color:${aLabel.couleur}` : ''}" title="${aLabel.getLibelle()}" ></i> `;
        }
      },
      formatDonnees: (aListeJours, aAvecRepasMidi, aAvecRepasSoir) => {
        const lListe = new ObjetListeElements_1.ObjetListeElements();
        if (aListeJours && aListeJours.parcourir) {
          aListeJours.parcourir((aJour) => {
            if (aJour && aJour.ListeRepas && aJour.ListeRepas.parcourir) {
              lListe.addElement(
                exports.UtilitaireMenus.formatDonneesJour(
                  aJour,
                  aListeJours,
                  aAvecRepasMidi,
                  aAvecRepasSoir,
                ),
              );
            }
          });
        }
        lListe.setTri([
          ObjetTri_1.ObjetTri.init('Date'),
          ObjetTri_1.ObjetTri.init('Libelle'),
        ]);
        lListe.trier();
        return lListe;
      },
      formatDonneesJour: (
        aJour,
        aListeJours,
        aAvecRepasMidi,
        aAvecRepasSoir,
      ) => {
        let lAvecRepasMidi = false,
          lAvecRepasSoir = false;
        aJour.ListeRepas.parcourir((aRepas) => {
          if (aRepas.getGenre() === Enumere_Repas_1.EGenreRepas.Midi) {
            lAvecRepasMidi = true;
          }
          if (aRepas.getGenre() === Enumere_Repas_1.EGenreRepas.Soir) {
            lAvecRepasSoir = true;
          }
        });
        return ObjetElement_1.ObjetElement.create({
          Libelle: aJour.Libelle,
          Numero: aJour.Numero,
          Genre: aJour.Genre,
          Position: aJour.Position,
          Actif: aJour.Actif,
          date: aJour.Date,
          listeRepas: aJour.ListeRepas,
          avecRepasMidi: lAvecRepasMidi,
          avecRepasSoir: lAvecRepasSoir,
          avecPlusieurRepas: lAvecRepasMidi && lAvecRepasSoir,
          options: {
            avecRepasMidi: aAvecRepasMidi,
            avecRepasSoir: aAvecRepasSoir,
            donneesOriginal:
              MethodesObjet_1.MethodesObjet.dupliquer(aListeJours),
          },
        });
      },
    };
  },
  fn: 'utilitairemenus.js',
});