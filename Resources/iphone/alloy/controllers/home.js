function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function toggleMenu() {
        var menuView = $.menu.getView("menu_view");
        if (false == menuView._toggle) {
            menuView.animate({
                left: 0,
                duration: 250,
                curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
            });
            $.scrollView.animate({
                backgroundColor: "#222222",
                duration: 250
            });
            menuView._toggle = true;
        } else {
            menuView.animate({
                left: "-80%",
                duration: 250,
                curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
            });
            $.scrollView.animate({
                backgroundColor: "#FFFFFF",
                duration: 250
            });
            menuView._toggle = false;
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
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
    $.__views.home = Ti.UI.createWindow({
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.__alloyId0 = Ti.UI.createView({
        backgroundColor: Alloy.CFG.dark_main_color,
        height: "24dp",
        top: 0,
        zIndex: 4,
        width: Ti.UI.FIT,
        id: "__alloyId0"
    });
    $.__views.home.add($.__views.__alloyId0);
    $.__views.actionbar = Ti.UI.createView({
        backgroundColor: Alloy.CFG.main_color,
        height: "56dp",
        left: 0,
        top: "24dp",
        width: Ti.UI.FIT,
        zIndex: 5,
        id: "actionbar"
    });
    $.__views.home.add($.__views.actionbar);
    $.__views.menu_icon = Ti.UI.createButton({
        backgroundColor: "transparent",
        backgroundImage: "/images/menu.png",
        left: "16dp",
        height: "13dp",
        width: "20dp",
        id: "menu_icon"
    });
    $.__views.actionbar.add($.__views.menu_icon);
    toggleMenu ? $.__views.menu_icon.addEventListener("click", toggleMenu) : __defers["$.__views.menu_icon!click!toggleMenu"] = true;
    $.__views.menu_title = Ti.UI.createLabel({
        color: "#FFF",
        font: {
            fontFamily: Alloy.CFG.title_font,
            fontSize: Alloy.CFG.title_size,
            fontWeight: "bold"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
        left: "72dp",
        text: "Titulo",
        id: "menu_title"
    });
    $.__views.actionbar.add($.__views.menu_title);
    $.__views.actionbar_shadow = Ti.UI.createView({
        backgroundColor: "black",
        height: "57dp",
        left: 0,
        opacity: .2,
        top: "24dp",
        width: Ti.UI.FIT,
        zIndex: 4,
        id: "actionbar_shadow"
    });
    $.__views.home.add($.__views.actionbar_shadow);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        width: "100%",
        height: "100%",
        backgroundColor: "#FFF"
    });
    $.__views.home.add($.__views.scrollView);
    $.__views.menu = Alloy.createController("menu", {
        id: "menu",
        __parentSymbol: $.__views.home
    });
    $.__views.menu.setParent($.__views.home);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menu.getView("index_menu_row").addEventListener("click", function(e) {
        toggleMenu(e);
        alert("Inicio");
    });
    $.menu.getView("drivers_menu_row").addEventListener("click", function(e) {
        toggleMenu(e);
        alert("Pilotos");
    });
    $.menu.getView("teams_menu_row").addEventListener("click", function(e) {
        toggleMenu(e);
        alert("Equipos");
    });
    $.menu.getView("races_menu_row").addEventListener("click", function(e) {
        toggleMenu(e);
        alert("Carreras");
    });
    __defers["$.__views.menu_icon!click!toggleMenu"] && $.__views.menu_icon.addEventListener("click", toggleMenu);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;