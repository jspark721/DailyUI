$('.input-card-number').keyup(function () {
        if (this.value.length == this.maxLength) {
          $(this).next('.input-card-number').focus();
        }
  });
