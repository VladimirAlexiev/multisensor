Reveal.configure ({mouseWheel:true, previewLinks:false, viewDistance:4,
  keyboard:{
    85:function(){ // U=show slide number in URL/history
      var r = Reveal.getIndices();
      Reveal.configure({history : !Reveal.getConfig().history}); 
      Reveal.slide(r.h,r.v);
      if (!Reveal.getConfig().history) {window.location.hash=''}; 
      //window.location.reload;
      // unfortunately goes to first slide when history is turned off, last line doesn't fix
      // https://github.com/hakimel/reveal.js/issues/934
    },
    72:function(){ // H=keyboard help
      window.open('../../reveal.js/reveal-help.html','_blank','width=640,height=500,location=0,menubar=0,scrollbars=0,status=0,titlebar=0,toolbar=0');
    }}})
