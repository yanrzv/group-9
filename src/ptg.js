function postToGoogle() {
    let gName = settingObjForm.postParams.first_name;
    let gSurname = settingObjForm.postParams.last_name;
    let gEmail = settingObjForm.postParams.email;
    let gPhone = settingObjForm.postParams.phone;

  
    $.ajax({
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdaLYsbRprZodOieBoW5kSfpv01rDttcpu8lw86hHW0avXUEg/formResponse",
      data: {
        "entry.52533572": gName,
        "entry.340297665": gSurname,
        "entry.23443234": gEmail,
        "entry.23432234": gPhone,
      },
      type: "POST",
      dataType: "xml",
      success: function (d) {}
    });
    return false;
  }
  
  /* GOOGLE__POST__DATA NOT VALID */
  function postToGoogleNotValid() {
    let gName = settingObjForm.postParams.first_name;
    let gSurname = settingObjForm.postParams.last_name;
    let gEmail = settingObjForm.postParams.email;
    let gPhone = settingObjForm.postParams.phone;
  
    $.ajax({
     url: "https://docs.google.com/forms/d/e/1FAIpQLSdaLYsbRprZodOieBoW5kSfpv01rDttcpu8lw86hHW0avXUEg/formResponse",
      data: {
        "entry.52533572": gName,
        "entry.340297665": gSurname,
        "entry.2343243423": gEmail,
        "entry.234234423": gPhone,
      },
      type: "POST",
      dataType: "xml",
      success: function (d) {}
    });
    return false;
  }