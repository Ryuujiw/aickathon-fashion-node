function uploadFile() {
    var blobFile = $('#filechooser')[0].files[0];
    var formData = new FormData();
  
    // upload image through form (jpg/jpeg/png)
    formData.append("filename", blobFile);
  
    // change the access_key and secret_key here
    formData.append("access_key", "YOUR_ACCESS_KEY");
    formData.append("secret_key", "YOUR_SECRET_KEY");
  
    //To use Jquery, you can download it from http://jquery.com/download/
    //or include it from a CDN into your HTML.
    $.ajax({
       url: "",
       type: "POST",
       data: formData,
       processData: false,
       contentType: false,
       success: function(response) {
           console.log(response);
       },
       error: function(jqXHR, textStatus, errorMessage) {
           console.log(errorMessage); // Optional
       }
    });
  }