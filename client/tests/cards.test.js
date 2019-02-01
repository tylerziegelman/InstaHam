"@fixture cards";
"@page http://localhost:3000/home";

"@test"["Signout"] = {
    "1.Click Signout on header button": function() {
        act.click(".ant-btn.signout-button.ant-btn-default");
    },
    "2.Header WithNoBtns Logo displays": function() {
        act.click(".logo-no-btns");
    },
    "3.AssertHeaderNoBtnsSize": function() {
        eq($(".logo-no-btns").outerWidth(), 350, "On Load of unsecured routes Header with no buttons displays");
    }
};

