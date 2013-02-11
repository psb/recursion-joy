var getElementsByClassName = function(className, node){
  var node = node ? node : window.document;

  var children = node.childNodes;
  var answers = [];
  if(_.contains(node.classList, className)){
    answers.push(node);
  }
  if(children.length !== 0){
    _.each(children, function(child) {
      var newAnswers = getElementsByClassName(className, child);
      answers = answers.concat(newAnswers);
    });
  }
  return answers;
};