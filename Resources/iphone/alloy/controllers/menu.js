function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function menuItemFunction(e) {
        $.menu_view;
        e.source.animate({
            backgroundColor: Alloy.CFG.dark_main_color,
            duration: 100,
            autoreverse: true
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId1 = [];
    $.__views.__alloyId2 = Ti.UI.createTableViewRow({
        backgroundColor: "transparent",
        backgroundImage: "/images/semaforo.jpg",
        bottom: "8dp",
        height: "180dp",
        selectedBackgroundColor: Alloy.CFG.dark_main_color,
        width: Ti.UI.FIT,
        id: "__alloyId2"
    });
    __alloyId1.push($.__views.__alloyId2);
    $.__views.index_menu_row = Ti.UI.createTableViewRow({
        backgroundColor: "transparent",
        height: "48dp",
        selectedBackgroundColor: Alloy.CFG.dark_main_color,
        width: "100%",
        id: "index_menu_row"
    });
    __alloyId1.push($.__views.index_menu_row);
    menuItemFunction ? $.__views.index_menu_row.addEventListener("click", menuItemFunction) : __defers["$.__views.index_menu_row!click!menuItemFunction"] = true;
    $.__views.index_menu_row_image = Ti.UI.createImageView({
        left: "16dp",
        height: "18dp",
        width: "18dp",
        image: "/images/icons/home.png",
        id: "index_menu_row_image"
    });
    $.__views.index_menu_row.add($.__views.index_menu_row_image);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#000000",
        font: {
            fontFamily: Alloy.CFG.body2_font,
            fontSize: Alloy.CFG.body2_size
        },
        left: "72dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "Inicio",
        id: "__alloyId3"
    });
    $.__views.index_menu_row.add($.__views.__alloyId3);
    $.__views.drivers_menu_row = Ti.UI.createTableViewRow({
        backgroundColor: "transparent",
        height: "48dp",
        selectedBackgroundColor: Alloy.CFG.dark_main_color,
        width: "100%",
        id: "drivers_menu_row"
    });
    __alloyId1.push($.__views.drivers_menu_row);
    menuItemFunction ? $.__views.drivers_menu_row.addEventListener("click", menuItemFunction) : __defers["$.__views.drivers_menu_row!click!menuItemFunction"] = true;
    $.__views.drivers_menu_row_image = Ti.UI.createImageView({
        left: "16dp",
        height: "18dp",
        width: "18dp",
        image: "/images/icons/person.png",
        id: "drivers_menu_row_image"
    });
    $.__views.drivers_menu_row.add($.__views.drivers_menu_row_image);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#000000",
        font: {
            fontFamily: Alloy.CFG.body2_font,
            fontSize: Alloy.CFG.body2_size
        },
        left: "72dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "Pilotos",
        id: "__alloyId4"
    });
    $.__views.drivers_menu_row.add($.__views.__alloyId4);
    $.__views.teams_menu_row = Ti.UI.createTableViewRow({
        backgroundColor: "transparent",
        height: "48dp",
        selectedBackgroundColor: Alloy.CFG.dark_main_color,
        width: "100%",
        id: "teams_menu_row"
    });
    __alloyId1.push($.__views.teams_menu_row);
    menuItemFunction ? $.__views.teams_menu_row.addEventListener("click", menuItemFunction) : __defers["$.__views.teams_menu_row!click!menuItemFunction"] = true;
    $.__views.teams_menu_row_image = Ti.UI.createImageView({
        left: "16dp",
        height: "18dp",
        width: "18dp",
        image: "/images/icons/car.png",
        id: "teams_menu_row_image"
    });
    $.__views.teams_menu_row.add($.__views.teams_menu_row_image);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#000000",
        font: {
            fontFamily: Alloy.CFG.body2_font,
            fontSize: Alloy.CFG.body2_size
        },
        left: "72dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "Equipos",
        id: "__alloyId5"
    });
    $.__views.teams_menu_row.add($.__views.__alloyId5);
    $.__views.races_menu_row = Ti.UI.createTableViewRow({
        backgroundColor: "transparent",
        height: "48dp",
        selectedBackgroundColor: Alloy.CFG.dark_main_color,
        width: "100%",
        id: "races_menu_row"
    });
    __alloyId1.push($.__views.races_menu_row);
    menuItemFunction ? $.__views.races_menu_row.addEventListener("click", menuItemFunction) : __defers["$.__views.races_menu_row!click!menuItemFunction"] = true;
    $.__views.races_menu_row_image = Ti.UI.createImageView({
        left: "16dp",
        height: "18dp",
        width: "18dp",
        image: "/images/icons/gesture.png",
        id: "races_menu_row_image"
    });
    $.__views.races_menu_row.add($.__views.races_menu_row_image);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#000000",
        font: {
            fontFamily: Alloy.CFG.body2_font,
            fontSize: Alloy.CFG.body2_size
        },
        left: "72dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "Circuitos",
        id: "__alloyId6"
    });
    $.__views.races_menu_row.add($.__views.__alloyId6);
    $.__views.menu_view = Ti.UI.createTableView({
        backgroundColor: "#FFFFFF",
        borderColor: "#222222",
        borderWidth: "1px",
        height: Ti.UI.FIT,
        left: "-80%",
        separatorColor: "transparent",
        width: "80%",
        zIndex: 9,
        _toggle: false,
        data: __alloyId1,
        id: "menu_view"
    });
    $.__views.menu_view && $.addTopLevelView($.__views.menu_view);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.index_menu_row!click!menuItemFunction"] && $.__views.index_menu_row.addEventListener("click", menuItemFunction);
    __defers["$.__views.drivers_menu_row!click!menuItemFunction"] && $.__views.drivers_menu_row.addEventListener("click", menuItemFunction);
    __defers["$.__views.teams_menu_row!click!menuItemFunction"] && $.__views.teams_menu_row.addEventListener("click", menuItemFunction);
    __defers["$.__views.races_menu_row!click!menuItemFunction"] && $.__views.races_menu_row.addEventListener("click", menuItemFunction);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;