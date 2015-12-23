var box_object_template = function(parent, color){

  var self = this;
  self.element = null;
  self.parent = parent;
  self.get_color = function(){
  	return this.element.css('background-color');
  };
  self.create_element = function(color){
    self.element = $('<div>',{
      class: 'box'
    });
    self.element.css('background-color',color);
    self.element.click(this.on_click)
    return self.element;
  };
  self.on_click = function(){
  	if($(this).hasClass('selected')){
      console.log('can\'t be clicked twice');
    	return;
    }
    self.element.addClass('selected');
    self.parent.process_click(self);

  };

  self.on_first_click = function(){
    console.log(self.element,'first click');
  };
  self.on_second_click = function(){
    console.log(self.element,'second click');
  };
  self.on_match = function(){
    $(self.element).addClass('matched');
  };
  self.on_mismatch = function(){
  	var self = this;
    self.revert_timer = setTimeout(self.unclick_self,3000);
  };
  self.unclick_self = function(){
  	self.element.removeClass('selected');
  }
  self.init = function(color){
    return this.create_element(color);
  };
  if(color!=='undefined')
  {
  	return this.init(color);
  }
};
var red_box_template = function(){
   var r_val = box_object_template.apply(this, arguments);
	//nothing new
	return r_val;
};

red_box_template.prototype = new box_object_template();
var white_box_template = function(){
  var self=this;
  var r_val = box_object_template.apply(this, arguments);
	//nothing new
  this.on_match = function(){
    alert('you lose!');
  };
  return r_val;
};
white_box_template.prototype = new box_object_template();
var green_box_template = function(){
  var r_val = box_object_template.apply(this, arguments);
	var self=this;
  self.on_first_click = function(){
    console.log(self.element,'super duper first click');
    
  };  
  return r_val;
};
green_box_template.prototype = new box_object_template();