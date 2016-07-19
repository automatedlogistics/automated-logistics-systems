jQuery(document).ready(function(t){t("textarea.text-editor-custom-control").each(function(e,n){var a=t(n).attr("name");t(n).attr("data-customize-setting-link",a),setTimeout(function(){var e=tinyMCE.get(a);e&&e.on("change",function(){e.save(),t(n).trigger("change")})},1e3)})});
//# sourceMappingURL=customizer-controls.js.map
