// ==UserScript==
// @name        VECTRA GO
// @namespace   simple script
// @match       https://www.vectra.lol/*
// @version     1.0
// @author      simple
// @description vectra+ but not retarded 5/02/2024
// @icon         https://www.google.com/s2/favicons?sz=64&domain=austiblox.net
// @grant       GM_webRequest
// @webRequest   [{"selector":"*://www.vectra.lol/static/js/presence.js","action":"cancel"}]
// ==/UserScript==

// hi, take a tour around my shitty coding.

// skidded this from
GM_webRequest([
    { selector: 'https://www.vectra.lol/static/js/presence.js', action: 'cancel' },
], function(info, message, details) {
    console.log(info, message, details);
});

setInterval(function() {
      fetch('https://www.vectra.lol/presence')
      console.log("Fetched!")
}, 50000);

(function() {
    'use strict';

    let Admins = ["simple", "car", "zinc", "ROBLOX", "skeet", "kudz", "cozol", "juju", "ariez"];
    console.log("STOP, Do not put any code here unless approved by any Mods, Admins, Trusted Community Members, or the owner of VECTRA.");
    console.log("If you see any errors, report it to us!");

    // Change some visual things...
    let Header = document.getElementsByClassName("navbar-brand position-relative me-md-2")[0];
    Header.innerHTML = "<h1> VECTRA GO </h1>";
    Header.href = "https://www.vectra.lol/go";

    // Themes
    let Theme = localStorage.getItem("Theme");
    if (Theme == "OBC")
    {
        Header.innerHTML = "<h1> VECTRA </h1>"; // Scalling issues, LOL
        document.head.innerHTML += `<style>
/* by W(x20), thanks! */
    body {
  background-image: url(http://sim.ct8.pl/images/kewl/bg.png);
}

.navbar {
  background-color: #0074bd;
  border-bottom: none;
  --bs-navbar-padding-y: 0.1rem;
}

.subnav-bar {
  background-color: #1b1d1d;
}

.border-bottom {
  border-bottom: none !important;
}

.navbar-brand h1 {
  font-weight: 1000;
  background-image: url(http://sim.ct8.pl/images/kewl/syntax.png);
  color: transparent;
  background-size: cover;
  padding-left: 22px;
  user-select: none;
  font-size: 1.5rem;
}

.navbar-expand-lg .navbar-nav .nav-link {
  padding-left: 1rem;
}

#currencydiv span {
  margin-top: 0.3rem;
  margin-left: 0.5rem;
}

.container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
  background-color: transparent !important;
}
</style>`;
    }
    else if (Theme == "Clean")
    {
        let BottomNav = document.getElementsByClassName("w-100 border-bottom subnav-bar ps-3 pe-3")[0];
        let Alerts = document.getElementsByClassName("alert");
        let Years = document.getElementsByClassName("fw-bold bg-dark text-white");
        let Searchbar = document.getElementsByClassName("ms-md-auto me-md-4"); // only on the games
        var i=0;
        for (i=0; i<Alerts.length; i++) {
            Alerts[i].remove();
        }
        // theres some weird bug so i do this hacky method
        for (var x=0; x<10; x++)
        {
            for (i=0; i<Years.length; i++) {
                Years[i].remove();
            }
        }

        if (document.body.contains(Searchbar[0]))
        {
            Searchbar[0].remove();
        }
        if (window.location.pathname == "/home")
        {
            document.querySelector("body > #main > .container > h4").outerHTML += "<br>";
            document.querySelector("body > #main > .container > h4").remove();
            if (document.body.contains(document.querySelector("body > #main > .container > div")))
            {
                document.querySelector("body > #main > .container > div").remove();
            }
        }
        if (window.location.pathname == "/catalog/")
        {

            document.querySelector("body > #main > .container > div > div > form > div > div:nth-child(2)").remove();
        }
        if (window.location.pathname == "/games")
        {

            document.querySelector("body > div:nth-child(2) > div:nth-child(3)").remove();
            document.querySelector("body > div:nth-child(2) > div:nth-child(4)").remove();
            document.querySelector("body > div:nth-child(2) > div:nth-child(4)").remove();
            document.querySelector("body > div:nth-child(2) > div").remove();
        }
        BottomNav.remove();
        document.querySelector("body > .fixed-top > nav > div > div > #currencydiv > a").remove();
    }
    else if (Theme == "Early")
    {
        let Years = document.getElementsByClassName("fw-bold bg-dark text-white");
        // theres some weird bug so i do this hacky method
        for (x=0; x<10; x++)
        {
            for (i=0; i<Years.length; i++) {
                Years[i].remove();
            }
        }
        Header.innerHTML = "<h1> SYNTAX </h1>";
        document.querySelector("body > .fixed-top > div > a:nth-child(6)").remove();
        document.querySelector("body > .fixed-top > div > a:nth-child(1)").remove();
        document.querySelector("body > .fixed-top > div > a:nth-child(2)").remove();
        document.querySelector("body > .fixed-top > div > a:nth-child(6)").remove();
        document.querySelector("body > .fixed-top > div > a:nth-child(6)").remove();
        document.querySelector("body > .fixed-top > div > a:nth-child(6)").remove();
        document.querySelector("body > .fixed-top > nav > div > div > #currencydiv > div > ul > li").outerHTML += '<li><a class="dropdown-item" href="/invite-keys">Invite Keys</a></li>';
        document.querySelector("body > .fixed-top > nav > div > div > #currencydiv > a:nth-child(2)").href = "https://www.vectra.lol/currency-exchange/";
        document.querySelector("body > .fixed-top > nav > div > div > #currencydiv > a:nth-child(4)").href = "https://www.vectra.lol/currency-exchange/";
        if (window.location.pathname == "/games")
        {

            document.querySelector("body > div:nth-child(2) > div:nth-child(3)").remove();
            document.querySelector("body > div:nth-child(2) > div:nth-child(3)").remove();
            document.querySelector("body > div:nth-child(2) > div > form").remove();
        }
        else if (window.location.pathname.search("/profile") != -1)
        {
            document.querySelector("body > #main > .container > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(4)").remove(); // remove rap
        }
        else if (window.location.pathname == "/home")
        {
            if (document.body.contains(document.querySelector("body > #main > .container > div")))
            {
                if (document.querySelector("body > #main > .container > div").className.search("alert") != -1)
                {
                    document.querySelector("body > #main > .container > div").remove();
                }
            }
        }
        else if (window.location.pathname == "/avatar")
        {
            let r15 = document.getElementById("change-rigtype-btn");
            document.querySelector("body > #main > .container > div > div:nth-child(2) > select").remove();
            r15.remove();
        }
    }



    // settings
    function getStringToggle(main)
    {
        if (main == "Enabled")
        {
            return "Disable";
        }
        else if (main == "Disabled")
        {
            return "Enable";
        }
    }

    function handleSetting(link, setting, value)
    {
        if (window.location.pathname == link)
        {
            document.querySelector("body > div:nth-child(2) > div > h1").outerHTML = "<h1><i>Loading settings...<i></h1>";
            document.querySelector("body > div:nth-child(2) > div > p").innerHTML = "Wait for VECTRA GO to load the setting...";
            localStorage.setItem(setting, value)
            window.location = "/go"
        }
    }

    let AdminIcon = localStorage.getItem("AdminIcon");
    let AvatarPage = localStorage.getItem("AvatarPage");
    let HideMsg = localStorage.getItem("HideMsg");
    if (!AdminIcon)
    {
        localStorage.setItem("AdminIcon", "Disabled");
    }
    if (!AvatarPage)
    {
        localStorage.setItem("AvatarPage", "Disabled");
    }
    if (!HideMsg)
    {
        localStorage.setItem("HideMsg", "Disabled");
    }
    if (window.location.pathname == "/go")
    {
        let goDiv = document.createElement('div');
        goDiv.setAttribute('id', 'main');
        goDiv.setAttribute('style', 'min-height: 100vh;width: 100%; padding-top:7rem;');

        document.title = "VECTRA GO - Vectra";
        document.querySelector("body > div:nth-child(2)").parentNode.replaceChild(goDiv, document.querySelector("body > div:nth-child(2)"));
        goDiv.innerHTML = `
    <div class="container">

        <div class="alert p-2 alert-warning d-flex align-items-center">
            <i class="bi bi-envelope-plus ms-2" style="font-size: 30px;"></i>
            <div class="m-2">
                VECTRA GO is in alpha right now! Report any bugs to our team.
            </div>
        </div>
<div class="d-flex align-items-center mb-2">
            <p style="width: fit-content;height: 100%;" class="me-auto">Theme: <b>`+ Theme +`</b></p>
            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Theme</button>
  <ul class="dropdown-menu" style="">
    <li><a class="dropdown-item" href="/theme/obc">OBC by W(x20)</a></li>
    <li><a class="dropdown-item" href="/theme/clean">Clean</a></li>
    <li><a class="dropdown-item" href="/theme/early">Early Syntax (August)</a></li>
    <li><a class="dropdown-item" href="/theme/main">Main</a></li>
  </ul>
</div>
        </div>
        <div class="d-flex align-items-center mb-2">
            <p style="width: fit-content;height: 100%;" class="me-auto">Show Admin Icons: <b>`+ AdminIcon +`</b></p>
            <a class="btn btn-primary btn-sm d-flex fw-bold text-decoration-none" href="/adminicons/`+ AdminIcon +`">`+ getStringToggle(AdminIcon) +`</a>
        </div>
        <div class="d-flex align-items-center mb-2">
            <p style="width: fit-content;height: 100%;" class="me-auto">Fix Avatar Page: <b>`+ AvatarPage +`</b></p>
            <a class="btn btn-primary btn-sm d-flex fw-bold text-decoration-none" href="/avatarpage/`+ AvatarPage +`">`+ getStringToggle(AvatarPage) +`</a>
        </div>
        <div class="d-flex align-items-center mb-2">
            <p style="width: fit-content;height: 100%;" class="me-auto">Hide Website Message: <b>`+ HideMsg +`</b></p>
            <a class="btn btn-danger btn-sm d-flex fw-bold text-decoration-none" href="/hidemsg/`+ HideMsg +`">`+ getStringToggle(HideMsg) +`</a>
        </div>




        </div>
    </div>
</div>`;
    }
    handleSetting("/theme/obc", "Theme", "OBC");
    handleSetting("/theme/clean", "Theme", "Clean");
    handleSetting("/theme/early", "Theme", "Early");
    handleSetting("/theme/main", "Theme", "Main");

    handleSetting("/adminicons/Disabled", "AdminIcon", "Enabled");
    handleSetting("/adminicons/Enabled", "AdminIcon", "Disabled");

    handleSetting("/avatarpage/Disabled", "AvatarPage", "Enabled");
    handleSetting("/avatarpage/Enabled", "AvatarPage", "Disabled");

    handleSetting("/hidemsg/Disabled", "HideMsg", "Enabled");
    handleSetting("/hidemsg/Enabled", "HideMsg", "Disabled");

    // fix avatar page
    if (AvatarPage == "Enabled")
    {
        if (window.location.pathname == "/avatar")
        {
            // fix the avatar page
            document.querySelector("body > #main > .container").setAttribute("style", "max-width: 900px; padding-top: 2rem");

            if (document.body.contains(document.querySelector("body > .fixed-top > div:nth-child(3)")))
            {
                if (document.querySelector("body > .fixed-top > div:nth-child(3)").id == "websitewidemessage")
                {
                    document.querySelector("body > .fixed-top > div:nth-child(3)").remove();
                }
            }
        }
    }

    // hide site message
    if (HideMsg == "Enabled")
    {
        if (document.body.contains(document.querySelector("body > .fixed-top > div:nth-child(3)")))
        {
            if (document.querySelector("body > .fixed-top > div:nth-child(3)").id == "websitewidemessage")
            {
                document.querySelector("body > .fixed-top > div:nth-child(3)").remove();
            }
        }
    }


    // Admin icons
    if (window.location.pathname.search("/profile") != -1)
    {
        if (AdminIcon == "Enabled")
        {
            let name = document.querySelector("body > #main > .container > div > div > div:nth-child(2) > div > h1").innerHTML;
            if (Admins.includes(name))
            {
                document.querySelector("body > #main > .container > div > div > div:nth-child(2) > div > h1").outerHTML += '<span class="rbx-icon-nav-settings ms-2" title="This user is an Admin for VECTRA."></span>';
            }
        }
    }
})();
