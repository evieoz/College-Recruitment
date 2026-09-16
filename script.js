/* ==========================================
   PENN STATE RECRUITMENT WEBSITE
   SHARED JAVASCRIPT
========================================== */


/* ==========================================
   HOME HERO VIDEO
========================================== */

const heroVideo = document.querySelector(".hero-video");
const videoButton = document.querySelector("#videoButton");


if (heroVideo && videoButton) {

    videoButton.addEventListener("click", function () {

        if (heroVideo.paused) {

            heroVideo.play();

            videoButton.textContent = "❚❚";

            videoButton.setAttribute(
                "aria-label",
                "Pause background video"
            );

        } else {

            heroVideo.pause();

            videoButton.textContent = "▶";

            videoButton.setAttribute(
                "aria-label",
                "Play background video"
            );

        }

    });

}



/* ==========================================
   PROGRAM FILTER
========================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const programCards =
    document.querySelectorAll(".program-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedCategory =
            button.getAttribute("data-filter");


        /* Remove active style from every button */

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        /* Add active style to clicked button */

        button.classList.add("active");


        /* Filter cards */

        programCards.forEach(function (card) {

            const cardCategory =
                card.getAttribute("data-category");


            if (
                selectedCategory === "all" ||
                cardCategory === selectedCategory
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});



/* ==========================================
   MAJOR MATCHER
========================================== */

const interestButtons =
    document.querySelectorAll(".interest-btn");

const majorResult =
    document.querySelector("#major-result");


interestButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const suggestedProgram =
            button.getAttribute("data-result");


        /* Remove selected style */

        interestButtons.forEach(function (btn) {

            btn.classList.remove("selected-interest");

        });


        /* Highlight clicked choice */

        button.classList.add("selected-interest");


        /* Change result */

        if (majorResult) {

            majorResult.innerHTML =
                "<span>Your Penn State Match</span>" +
                "<strong>" +
                suggestedProgram +
                "</strong>" +
                "<p>This could be a great place to start exploring.</p>";

        }

    });

});



/* ==========================================
   PROGRAM INFORMATION POPUP
========================================== */

const programButtons =
    document.querySelectorAll(".program-more");

const programPopup =
    document.querySelector("#programPopup");

const programPopupTitle =
    document.querySelector("#programPopupTitle");

const programPopupText =
    document.querySelector("#programPopupText");

const closeProgramPopup =
    document.querySelector("#closeProgramPopup");

const closeProgramButton =
    document.querySelector("#closeProgramButton");



/* Program descriptions */

const programDescriptions = {

    "Advertising & Public Relations":
        "Explore how brands communicate with audiences through campaigns, media strategy, storytelling, public relations, and creative communication.",

    "Journalism":
        "Build skills in reporting, interviewing, writing, research, and storytelling across digital, print, broadcast, and emerging media.",

    "Media Industries":
        "Explore the business and creative sides of television, entertainment, digital platforms, media technology, and communication.",

    "Marketing":
        "Study consumers, branding, strategy, markets, research, and the ways organizations connect products and ideas with audiences.",

    "Engineering":
        "Use mathematics, science, technology, creativity, and design to solve problems and develop new ideas.",

    "Art & Design":
        "Develop creative ideas through visual communication, design, artistic expression, and hands-on projects."

};



programButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const program =
            button.getAttribute("data-program");


        if (
            programPopup &&
            programPopupTitle &&
            programPopupText
        ) {

            programPopupTitle.textContent =
                program;


            programPopupText.textContent =
                programDescriptions[program];


            programPopup.classList.add("show");


            programPopup.setAttribute(
                "aria-hidden",
                "false"
            );


            document.body.classList.add(
                "popup-open"
            );

        }

    });

});



/* Function for closing popup */

function closePopup() {

    if (programPopup) {

        programPopup.classList.remove("show");


        programPopup.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "popup-open"
        );

    }

}



/* X button */

if (closeProgramPopup) {

    closeProgramPopup.addEventListener(
        "click",
        closePopup
    );

}



/* Keep Exploring button */

if (closeProgramButton) {

    closeProgramButton.addEventListener(
        "click",
        closePopup
    );

}



/* Click dark background to close */

if (programPopup) {

    programPopup.addEventListener(
        "click",
        function (event) {

            if (event.target === programPopup) {

                closePopup();

            }

        }
    );

}



/* Escape key closes popup */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closePopup();

        }

    }
);



/* ==========================================
   ADMISSIONS FAQ
========================================== */

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const faqItem =
            question.closest(".faq-item");


        const faqSymbol =
            question.querySelector(".faq-symbol");


        /* Close other questions */

        document
            .querySelectorAll(".faq-item")
            .forEach(function (item) {

                if (item !== faqItem) {

                    item.classList.remove("open");


                    const otherSymbol =
                        item.querySelector(".faq-symbol");


                    if (otherSymbol) {

                        otherSymbol.textContent = "+";

                    }

                }

            });


        /* Open or close clicked question */

        faqItem.classList.toggle("open");


        if (faqSymbol) {

            if (faqItem.classList.contains("open")) {

                faqSymbol.textContent = "−";

            } else {

                faqSymbol.textContent = "+";

            }

        }

    });

});



/* ==========================================
   VISIT OPTION SELECTOR
========================================== */

const visitChoices =
    document.querySelectorAll(".visit-choice");

const visitResult =
    document.querySelector("#visit-result");


visitChoices.forEach(function (button) {

    button.addEventListener("click", function () {

        const choice =
            button.getAttribute("data-choice");


        /* Remove selected state */

        visitChoices.forEach(function (btn) {

            btn.classList.remove(
                "selected-visit"
            );

        });


        /* Highlight selected button */

        button.classList.add(
            "selected-visit"
        );


        /* Display result */

        if (visitResult) {

            visitResult.innerHTML =
                "<strong>" +
                choice +
                " Selected ✓</strong>" +
                "<span>You're one step closer to experiencing Penn State.</span>";

        }

    });

});



/* ==========================================
   VISIT INTEREST FORM
========================================== */

const interestForm =
    document.querySelector("#interest-form");


if (interestForm) {

    interestForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const nameInput =
                document.querySelector(
                    "#student-name"
                );


            const interestInput =
                document.querySelector(
                    "#student-interest"
                );


            const formResult =
                document.querySelector(
                    "#form-result"
                );


            if (
                nameInput &&
                interestInput &&
                formResult
            ) {

                const studentName =
                    nameInput.value.trim();


                const studentInterest =
                    interestInput.value;


                if (
                    studentName === "" ||
                    studentInterest === ""
                ) {

                    formResult.innerHTML =
                        "Please enter your name and choose an interest.";

                    return;

                }


                formResult.innerHTML =
                    "<strong>Hi " +
                    studentName +
                    "! 👋</strong>" +
                    "<span>Your next step is exploring Penn State's " +
                    studentInterest +
                    " opportunities.</span>";

            }

        }
    );

}



/* ==========================================
   SCROLL REVEAL
========================================== */

const sectionsToReveal =
    document.querySelectorAll(

        ".why-section, " +
        ".future-section, " +
        ".visit-section, " +
        ".about-story-section, " +
        ".facts-section, " +
        ".about-location, " +
        ".experience-section, " +
        ".program-grid, " +
        ".major-section, " +
        ".program-stats, " +
        ".cost-section, " +
        ".admissions-aid, " +
        ".steps, " +
        ".faq-section, " +
        ".life-grid, " +
        ".cta-band"

    );



/* Only use animation if browser supports it */

if ("IntersectionObserver" in window) {

    sectionsToReveal.forEach(function (section) {

        section.classList.add("reveal");

    });



    const revealObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );


                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.10
            }

        );



    sectionsToReveal.forEach(function (section) {

        revealObserver.observe(section);

    });

}