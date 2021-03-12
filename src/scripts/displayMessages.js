import $ from "jquery";

//display error message for 10 seconds
export default (text)=>{
    $("#error_message").text(text);
    $("#error_message").css("display", "inline");
    window.setTimeout(() => {
        $("#error_message").text("");
        $("#error_message").css("display", "none");
    }, 10000)
}