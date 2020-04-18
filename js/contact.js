(function(){
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const subjectInput = document.querySelector(".js-subject");
    const createSubject = (subject) => `I'm interested in the ${subject}.`

    if (!subjectInput) return;

    console.log("yo");

    if (params.has("purchase")) {
        subjectInput.value = createSubject(params.get("purchase"))
    }


}())