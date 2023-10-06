$(document).ready(function () {

    $("#uno").click(function () {
        $("td:contains(IAW)").addClass("IAW");
    });

    $("#dos").click(function () {
        $("th").addClass("cabecera");
    });

    $("#tres").click(function () {
        $("table tr:eq(4)").addClass("patio");
    });

    $("#cuatro").click(function () {
        $("table tr th:even").addClass("gold");
        $("table tr th:odd").addClass("orangered");
    });

    $("#cinco").click(function () {
        $("table th:gt(2)").addClass("black");
        $("table th:lt(3)").addClass("darkgreen");
    });

    $("#seis").click(function () {
        $("table th,td").each(function() {
            console.log($(this).text());
        });
    });
    
});