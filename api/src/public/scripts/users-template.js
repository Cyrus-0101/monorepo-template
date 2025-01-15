(function () {
  var template = Handlebars.template,
    templates = (Handlebars.templates = Handlebars.templates || {});
  templates["users-template"] = template({
    1: function (container, depth0, helpers, partials, data) {
      var helper,
        alias1 = depth0 != null ? depth0 : container.nullContext || {},
        alias2 = container.hooks.helperMissing,
        alias3 = "function",
        alias4 = container.escapeExpression,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        '    <div class="user-display-ele">\n      <div class="normal-view">\n        <div><b>Name:</b> ' +
        alias4(
          ((helper =
            (helper =
              lookupProperty(helpers, "name") ||
              (depth0 != null ? lookupProperty(depth0, "name") : depth0)) !=
            null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "name",
                hash: {},
                data: data,
                loc: {
                  start: { line: 4, column: 26 },
                  end: { line: 4, column: 34 },
                },
              })
            : helper)
        ) +
        "</div>\n        <div><b>Email:</b> " +
        alias4(
          ((helper =
            (helper =
              lookupProperty(helpers, "email") ||
              (depth0 != null ? lookupProperty(depth0, "email") : depth0)) !=
            null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "email",
                hash: {},
                data: data,
                loc: {
                  start: { line: 5, column: 27 },
                  end: { line: 5, column: 36 },
                },
              })
            : helper)
        ) +
        "</div>\n        <div><b>Created:</b> " +
        alias4(
          ((helper =
            (helper =
              lookupProperty(helpers, "createdFormatted") ||
              (depth0 != null
                ? lookupProperty(depth0, "createdFormatted")
                : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "createdFormatted",
                hash: {},
                data: data,
                loc: {
                  start: { line: 6, column: 29 },
                  end: { line: 6, column: 49 },
                },
              })
            : helper)
        ) +
        '</div>\n        <button type="button" class="btn btn-primary edit-user-btn" data-user-id="' +
        alias4(
          ((helper =
            (helper =
              lookupProperty(helpers, "id") ||
              (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "id",
                hash: {},
                data: data,
                loc: {
                  start: { line: 7, column: 80 },
                  end: { line: 7, column: 86 },
                },
              })
            : helper)
        ) +
        '">Edit</button>\n        <button class="btn btn-danger delete-user-btn" data-user-id="' +
        alias4(
          ((helper =
            (helper =
              lookupProperty(helpers, "id") ||
              (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "id",
                hash: {},
                data: data,
                loc: {
                  start: { line: 8, column: 70 },
                  end: { line: 8, column: 76 },
                },
              })
            : helper)
        ) +
        '">Delete</button>\n      </div>\n      <div class="edit-view" style="display:none;">\n        <div>Name: <input type="text" class="form-control name-edit-input" value="' +
        alias4(
          ((helper =
            (helper =
              lookupProperty(helpers, "name") ||
              (depth0 != null ? lookupProperty(depth0, "name") : depth0)) !=
            null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "name",
                hash: {},
                data: data,
                loc: {
                  start: { line: 11, column: 81 },
                  end: { line: 11, column: 89 },
                },
              })
            : helper)
        ) +
        '"></div>\n        <div>Email: <input type="email" class="form-control email-edit-input" value="' +
        alias4(
          ((helper =
            (helper =
              lookupProperty(helpers, "email") ||
              (depth0 != null ? lookupProperty(depth0, "email") : depth0)) !=
            null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "email",
                hash: {},
                data: data,
                loc: {
                  start: { line: 12, column: 83 },
                  end: { line: 12, column: 92 },
                },
              })
            : helper)
        ) +
        '"></div>\n        <button class="btn btn-primary submit-edit-btn" data-user-id="' +
        alias4(
          ((helper =
            (helper =
              lookupProperty(helpers, "id") ||
              (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "id",
                hash: {},
                data: data,
                loc: {
                  start: { line: 13, column: 70 },
                  end: { line: 13, column: 76 },
                },
              })
            : helper)
        ) +
        '" data-user-created="' +
        alias4(
          ((helper =
            (helper =
              lookupProperty(helpers, "created") ||
              (depth0 != null ? lookupProperty(depth0, "created") : depth0)) !=
            null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "created",
                hash: {},
                data: data,
                loc: {
                  start: { line: 13, column: 97 },
                  end: { line: 13, column: 108 },
                },
              })
            : helper)
        ) +
        '">Submit</button>\n        <button class="btn btn-secondary cancel-edit-btn" data-user-id="' +
        alias4(
          ((helper =
            (helper =
              lookupProperty(helpers, "id") ||
              (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "id",
                hash: {},
                data: data,
                loc: {
                  start: { line: 14, column: 72 },
                  end: { line: 14, column: 78 },
                },
              })
            : helper)
        ) +
        '">Cancel</button>\n      </div>\n    </div>\n'
      );
    },
    compiler: [8, ">= 4.3.0"],
    main: function (container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (stack1 = lookupProperty(helpers, "each").call(
        depth0 != null ? depth0 : container.nullContext || {},
        depth0 != null ? lookupProperty(depth0, "users") : depth0,
        {
          name: "each",
          hash: {},
          fn: container.program(1, data, 0),
          inverse: container.noop,
          data: data,
          loc: { start: { line: 1, column: 0 }, end: { line: 17, column: 9 } },
        }
      )) != null
        ? stack1
        : "";
    },
    useData: true,
  });
})();
