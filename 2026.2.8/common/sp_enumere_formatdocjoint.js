IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EFormatDocJointUtil = exports.EFormatDocJoint = void 0;
    const IconeSvgFichier_word_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFichier_word');
    const IconeSvgUniF1C1_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgUniF1C1');
    const IconeSvgFichier_excel_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFichier_excel');
    const IconeSvgFichier_zip_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFichier_zip');
    const IconeSvgFichier_image_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFichier_image');
    const IconeSvgFichier_audio_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFichier_audio');
    const IconeSvgFichier_video_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFichier_video');
    const IconeSvgFichier_powerpoint_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFichier_powerpoint');
    const IconeSvgFile_text_alt_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFile_text_alt');
    const IconeSvgFile_alt_1 = require('@cp/Produit/Script/IconesSvg/IconeSvgFile_alt');
    var EFormatDocJoint;
    (function (EFormatDocJoint) {
      EFormatDocJoint[(EFormatDocJoint['Inconnu'] = 0)] = 'Inconnu';
      EFormatDocJoint[(EFormatDocJoint['Texte'] = 1)] = 'Texte';
      EFormatDocJoint[(EFormatDocJoint['Pdf'] = 2)] = 'Pdf';
      EFormatDocJoint[(EFormatDocJoint['Excel'] = 3)] = 'Excel';
      EFormatDocJoint[(EFormatDocJoint['Archive'] = 4)] = 'Archive';
      EFormatDocJoint[(EFormatDocJoint['Image'] = 5)] = 'Image';
      EFormatDocJoint[(EFormatDocJoint['Son'] = 6)] = 'Son';
      EFormatDocJoint[(EFormatDocJoint['Video'] = 7)] = 'Video';
      EFormatDocJoint[(EFormatDocJoint['Diapo'] = 8)] = 'Diapo';
      EFormatDocJoint[(EFormatDocJoint['Geogebra'] = 9)] = 'Geogebra';
    })(EFormatDocJoint || (exports.EFormatDocJoint = EFormatDocJoint = {}));
    const EFormatDocJointUtil = {
      getClassImgDeGenre(aGenre) {
        switch (aGenre) {
          case EFormatDocJoint.Texte:
            return 'Image_FormatTexte';
          case EFormatDocJoint.Pdf:
            return 'Image_FormatPDF';
          case EFormatDocJoint.Excel:
            return 'Image_FormatExcel';
          case EFormatDocJoint.Archive:
            return 'Image_FormatArch';
          case EFormatDocJoint.Image:
            return 'Image_FormatImg';
          case EFormatDocJoint.Son:
            return 'Image_FormatSon';
          case EFormatDocJoint.Video:
            return 'Image_FormatVideo';
          case EFormatDocJoint.Diapo:
            return 'Image_FormatPPT';
          case EFormatDocJoint.Geogebra:
            return 'Image_FormatGGB';
        }
        return 'Image_FormatInconnu';
      },
      getGenreDExtension(aExtension) {
        switch (aExtension) {
          case 'doc':
          case 'docx':
          case 'txt':
            return EFormatDocJoint.Texte;
          case 'pdf':
            return EFormatDocJoint.Pdf;
          case 'gzip':
          case 'zip':
          case 'rar':
            return EFormatDocJoint.Archive;
          case 'xls':
          case 'xlsx':
            return EFormatDocJoint.Excel;
          case 'png':
          case 'mng':
          case 'tiff':
          case 'jpeg':
          case 'gif':
          case 'jpg':
          case 'webp':
          case 'bmp':
            return EFormatDocJoint.Image;
          case 'mp3':
          case 'ogg':
          case 'wav':
            return EFormatDocJoint.Son;
          case 'mp4':
          case 'mpeg':
          case 'avi':
            return EFormatDocJoint.Video;
          case 'ppt':
          case 'pptx':
            return EFormatDocJoint.Diapo;
          case 'ggb':
            return EFormatDocJoint.Geogebra;
        }
        return EFormatDocJoint.Inconnu;
      },
      getIconDeGenre(aGenre, aAttrs = {}) {
        switch (aGenre) {
          case EFormatDocJoint.Texte:
            return IE.jsx.str(
              IconeSvgFichier_word_1.IconeSvgFichier_word,
              Object.assign({}, aAttrs),
            );
          case EFormatDocJoint.Pdf:
            return IE.jsx.str(
              IconeSvgUniF1C1_1.IconeSvgUniF1C1,
              Object.assign({}, aAttrs),
            );
          case EFormatDocJoint.Excel:
            return IE.jsx.str(
              IconeSvgFichier_excel_1.IconeSvgFichier_excel,
              Object.assign({}, aAttrs),
            );
          case EFormatDocJoint.Archive:
            return IE.jsx.str(
              IconeSvgFichier_zip_1.IconeSvgFichier_zip,
              Object.assign({}, aAttrs),
            );
          case EFormatDocJoint.Image:
            return IE.jsx.str(
              IconeSvgFichier_image_1.IconeSvgFichier_image,
              Object.assign({}, aAttrs),
            );
          case EFormatDocJoint.Son:
            return IE.jsx.str(
              IconeSvgFichier_audio_1.IconeSvgFichier_audio,
              Object.assign({}, aAttrs),
            );
          case EFormatDocJoint.Video:
            return IE.jsx.str(
              IconeSvgFichier_video_1.IconeSvgFichier_video,
              Object.assign({}, aAttrs),
            );
          case EFormatDocJoint.Diapo:
            return IE.jsx.str(
              IconeSvgFichier_powerpoint_1.IconeSvgFichier_powerpoint,
              Object.assign({}, aAttrs),
            );
          case EFormatDocJoint.Geogebra:
            return IE.jsx.str(
              IconeSvgFile_text_alt_1.IconeSvgFile_text_alt,
              Object.assign({}, aAttrs),
            );
          default:
            return IE.jsx.str(
              IconeSvgFile_alt_1.IconeSvgFile_alt,
              Object.assign({}, aAttrs),
            );
        }
      },
      getClassIconDeGenre(aGenre) {
        switch (aGenre) {
          case EFormatDocJoint.Texte:
            return 'icon_fichier_word';
          case EFormatDocJoint.Pdf:
            return 'icon_uniF1C1';
          case EFormatDocJoint.Excel:
            return 'icon_fichier_excel';
          case EFormatDocJoint.Archive:
            return 'icon_fichier_zip';
          case EFormatDocJoint.Image:
            return 'icon_fichier_image';
          case EFormatDocJoint.Son:
            return 'icon_fichier_audio';
          case EFormatDocJoint.Video:
            return 'icon_fichier_video';
          case EFormatDocJoint.Diapo:
            return 'icon_fichier_powerpoint';
          case EFormatDocJoint.Geogebra:
            return 'icon_file_text_alt';
          default:
            return 'icon_file_alt';
        }
      },
      getSvgIconDeGenre(aGenre) {
        switch (aGenre) {
          case EFormatDocJoint.Texte:
            return IE.jsx.str(
              IconeSvgFichier_word_1.IconeSvgFichier_word,
              null,
            );
          case EFormatDocJoint.Pdf:
            return IE.jsx.str(IconeSvgUniF1C1_1.IconeSvgUniF1C1, null);
          case EFormatDocJoint.Excel:
            return IE.jsx.str(
              IconeSvgFichier_excel_1.IconeSvgFichier_excel,
              null,
            );
          case EFormatDocJoint.Archive:
            return IE.jsx.str(IconeSvgFichier_zip_1.IconeSvgFichier_zip, null);
          case EFormatDocJoint.Image:
            return IE.jsx.str(
              IconeSvgFichier_image_1.IconeSvgFichier_image,
              null,
            );
          case EFormatDocJoint.Son:
            return IE.jsx.str(
              IconeSvgFichier_audio_1.IconeSvgFichier_audio,
              null,
            );
          case EFormatDocJoint.Video:
            return IE.jsx.str(
              IconeSvgFichier_video_1.IconeSvgFichier_video,
              null,
            );
          case EFormatDocJoint.Diapo:
            return IE.jsx.str(
              IconeSvgFichier_powerpoint_1.IconeSvgFichier_powerpoint,
              null,
            );
          case EFormatDocJoint.Geogebra:
            return IE.jsx.str(
              IconeSvgFile_text_alt_1.IconeSvgFile_text_alt,
              null,
            );
          default:
            return IE.jsx.str(IconeSvgFile_alt_1.IconeSvgFile_alt, null);
        }
      },
      getGenreDeFichier(aExtension) {
        if (aExtension !== '') {
          return EFormatDocJointUtil.getGenreDExtension(
            aExtension.toLowerCase(),
          );
        }
        return EFormatDocJoint.Inconnu;
      },
    };
    exports.EFormatDocJointUtil = EFormatDocJointUtil;
  },
  fn: 'enumere_formatdocjoint.js',
});