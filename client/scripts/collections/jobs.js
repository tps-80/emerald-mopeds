// Job Collection
Lancealot.Jobs = Backbone.Collection.extend({

  model: Lancealot.Job,
  url: '/jobs',

  searchByClient: function(value){

    if (value == "") return this;
 
    var pattern = new RegExp(value,"gi");

    var filtered = (this.filter(function (job) {
      return pattern.test(job.get('client').name);
    }));

    return new Lancealot.Jobs(filtered);

  }

});