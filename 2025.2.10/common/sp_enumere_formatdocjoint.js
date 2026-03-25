IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.EFormatDocJointUtil = exports.EFormatDocJoint = void 0;
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