IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    const TypeArrierePlanAuthentification_1 = require('TypeArrierePlanAuthentification');
    const ObjetDate_1 = require('ObjetDate');
    class ObjetImageConnexion {
      constructor() {
        this.definitionImages = [];
        this.definitionImagesExtra = {};
      }
      getClassImage() {
        return '';
      }
      getObjetImagePronote(aGenreImageConnexion) {
        let lDate = new Date();
        if (
          location &&
          location.search &&
          location.search.search(/dateCnx=[0-9]{4}-[0-9]{2}-[0-9]{2}/) > -1
        ) {
          const lDateMatch = location.search.match(
            /dateCnx=([0-9]{4}-[0-9]{2}-[0-9]{2})/,
          );
          lDate = new Date(lDateMatch[1]);
        }
        let lResult = {};
        try {
          switch (aGenreImageConnexion) {
            case TypeArrierePlanAuthentification_1
              .TypeArrierePlanAuthentification.Photo:
              lResult =
                this.definitionImages[
                  TypeArrierePlanAuthentification_1
                    .TypeArrierePlanAuthentification.Photo
                ][
                  lDate.getMonth() %
                    this.definitionImages[
                      TypeArrierePlanAuthentification_1
                        .TypeArrierePlanAuthentification.Photo
                    ].length
                ];
              break;
            case TypeArrierePlanAuthentification_1
              .TypeArrierePlanAuthentification.Louvre:
              if (
                this.definitionImages[
                  TypeArrierePlanAuthentification_1
                    .TypeArrierePlanAuthentification.Louvre
                ].length === 12
              ) {
                lResult =
                  this.definitionImages[
                    TypeArrierePlanAuthentification_1
                      .TypeArrierePlanAuthentification.Louvre
                  ][
                    lDate.getMonth() %
                      this.definitionImages[
                        TypeArrierePlanAuthentification_1
                          .TypeArrierePlanAuthentification.Louvre
                      ].length
                  ];
              } else if (
                this.definitionImages[
                  TypeArrierePlanAuthentification_1
                    .TypeArrierePlanAuthentification.Louvre
                ].length === 53
              ) {
                const lDatePourSemaine = new Date(lDate.getTime());
                lDatePourSemaine.setHours(0, 0, 0, 0);
                lDatePourSemaine.setDate(
                  lDatePourSemaine.getDate() +
                    3 -
                    ((lDatePourSemaine.getDay() + 6) % 7),
                );
                const lWeek1 = new Date(lDatePourSemaine.getFullYear(), 0, 4);
                const lSemaine =
                  1 +
                  Math.round(
                    ((lDatePourSemaine.getTime() - lWeek1.getTime()) /
                      86400000 -
                      3 +
                      ((lWeek1.getDay() + 6) % 7)) /
                      7,
                  );
                lResult =
                  this.definitionImages[
                    TypeArrierePlanAuthentification_1
                      .TypeArrierePlanAuthentification.Louvre
                  ][
                    (lSemaine - 1) %
                      this.definitionImages[
                        TypeArrierePlanAuthentification_1
                          .TypeArrierePlanAuthentification.Louvre
                      ].length
                  ];
              } else {
                lResult =
                  this.definitionImages[
                    TypeArrierePlanAuthentification_1
                      .TypeArrierePlanAuthentification.Louvre
                  ][
                    ObjetDate_1.GDate.getNbrJoursEntreDeuxDates(
                      new Date(lDate.getFullYear(), 0, 1),
                      lDate,
                    ) %
                      this.definitionImages[
                        TypeArrierePlanAuthentification_1
                          .TypeArrierePlanAuthentification.Louvre
                      ].length
                  ];
              }
              if (
                this.definitionImagesExtra[
                  lDate.getMonth() + '-' + lDate.getDate()
                ]
              ) {
                lResult =
                  this.definitionImagesExtra[
                    lDate.getMonth() + '-' + lDate.getDate()
                  ];
                if (lResult.suiviLogo1) {
                  lResult.suiviLien = lResult.suiviLogo1;
                }
              }
              if (new Date() >= lResult.dateMaxLien) {
                lResult.lien = '';
                lResult.lienSuite = '';
              }
              break;
            case TypeArrierePlanAuthentification_1
              .TypeArrierePlanAuthentification.Arbre:
              lDate.setFullYear(1900);
              if (lDate < new Date(1900, 2, 20)) {
                lResult =
                  this.definitionImages[
                    TypeArrierePlanAuthentification_1
                      .TypeArrierePlanAuthentification.Arbre
                  ][0];
              } else if (lDate < new Date(1900, 5, 21)) {
                lResult =
                  this.definitionImages[
                    TypeArrierePlanAuthentification_1
                      .TypeArrierePlanAuthentification.Arbre
                  ][1];
              } else if (lDate < new Date(1900, 8, 23)) {
                lResult =
                  this.definitionImages[
                    TypeArrierePlanAuthentification_1
                      .TypeArrierePlanAuthentification.Arbre
                  ][2];
              } else if (lDate < new Date(1900, 11, 21)) {
                lResult =
                  this.definitionImages[
                    TypeArrierePlanAuthentification_1
                      .TypeArrierePlanAuthentification.Arbre
                  ][3];
              } else {
                lResult =
                  this.definitionImages[
                    TypeArrierePlanAuthentification_1
                      .TypeArrierePlanAuthentification.Arbre
                  ][0];
              }
              break;
            default:
              lResult = {};
              break;
          }
        } catch (e) {
          lResult = {};
        }
        return lResult;
      }
      getClassFond() {
        return 'Image_Connexion_Fond Repeat';
      }
      setDefinitionImages(aArray) {
        this.definitionImages = aArray;
      }
      setDefinitionImagesExtra(aObjet) {
        this.definitionImagesExtra = aObjet;
      }
    }
    const GImageConnexion = new ObjetImageConnexion();
    module.exports = GImageConnexion;
  },
  fn: 'objetimageconnexion.js',
});