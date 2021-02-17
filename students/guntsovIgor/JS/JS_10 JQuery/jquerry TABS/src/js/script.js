// Создать Табы. Макет Game_ui_Tabs.psd
(function ($) {
    $(function () {
        $("ul.tabs__caption").on("click", "li:not(.active)", function () {
            const oldTabList = $(this).addClass("active").siblings().removeClass("active");
            const oldTabContent = oldTabList.closest("div.tabs").find("div.tabs__content").removeClass("active");
            const newActiveTab = oldTabContent.eq($(this).index()).addClass("active");
        });
    });
})(jQuery);
