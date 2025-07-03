IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.StylesIEHtmlImgViewer = void 0;
    require('IEHtml.ImgViewer.css');
    exports.StylesIEHtmlImgViewer = {
      ieImgviewer: 'ie-imgviewer',
      ieImgviewerPopup: 'ie-imgviewer-popup',
      active: 'active',
      loading: 'loading',
      zoomistContainer: 'zoomist-container',
      zoomistWrapper: 'zoomist-wrapper',
      zoomistImage: 'zoomist-image',
      conteneurImg: 'conteneur-img',
      VoileDeFondViewer: 'VoileDeFondViewer',
      BandeauViewer: 'BandeauViewer',
      TitreImage: 'TitreImage',
      btnCarrViewer: 'btn-carr-viewer',
      prec: 'prec',
      suiv: 'suiv',
      btnZoomViewer: 'btn-zoom-viewer',
      zoomIn: 'zoom-in',
      zoomOut: 'zoom-out',
      btnFermer: 'btn-fermer',
    };
  },
  fn: 'iehtml.imgviewer.css.js',
});