IE.fModule({
  f: function (exports, require, module, global) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.IconeSvg = IconeSvg;
    exports.IconeSvgCustom_ = IconeSvgCustom_;
    const tslib_1 = require('tslib');
    const Divers_css_1 = require('@cp/Produit/Css/general/Divers.css');
    const IEHtml_1 = require('@cp/Produit/Script/IEHtml');
    function IconeSvg(_a) {
      var { children, class: className, role, viewBox, withComment } = _a,
        aAttrs = tslib_1.__rest(_a, [
          'children',
          'class',
          'role',
          'viewBox',
          'withComment',
        ]);
      const lClasses = [
        Divers_css_1.SD.iconeSvg,
        ...(Array.isArray(className)
          ? className
          : className
            ? [className]
            : []),
      ];
      return IE.jsx.str(
        IE.jsx.fragment,
        null,
        withComment !== false
          ? IEHtml_1.IEHtml.getCommentHtmlDebug(`<IconeSvg>`)
          : '',
        IE.jsx.str(
          'svg',
          Object.assign(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: viewBox || '0 0 24 24',
              class: lClasses,
              role: role,
              'aria-hidden': role ? false : 'true',
            },
            aAttrs,
          ),
          children,
        ),
      );
    }
    function IconeSvgCustom_(_a) {
      var { children, type, class: className } = _a,
        aAttrs = tslib_1.__rest(_a, ['children', 'type', 'class']);
      const lClasses = [
        'icone-svg-' + type,
        ...(Array.isArray(className)
          ? className
          : className
            ? [className]
            : []),
      ];
      return IE.jsx.str(
        IE.jsx.fragment,
        null,
        IEHtml_1.IEHtml.getCommentHtmlDebug(`<IconeSvg${type.ucfirst()}>`),
        IE.jsx.str(
          IconeSvg,
          Object.assign({ class: lClasses, withComment: false }, aAttrs),
          children,
        ),
      );
    }
  },
  fn: 'iconesvg.js',
});