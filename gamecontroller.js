var game_controller_template = function(game_container){
	var self=this;
	self.box_list = [];
	self.first_clicked_box = null;
	self.game_container = game_container;
	self.create_boxes = function(box_count){
		for(var i=0; i<box_count; i++){
			var color = colors[Math.floor(Math.random()*colors.length)];
			var box = new window[color+'_box_template'](self,color);
			self.game_container.append(box);
			self.box_list.push(box);
			console.log(self.game_container);
		}
	}
	self.process_click = function(box){
		console.log('I am this ',box);
	    if(self.first_clicked_box===null){
	      self.first_clicked_box = box;
	      self.first_clicked_box.on_first_click();
	    }
	    else{
	    	box.on_second_click();
	      if(box.get_color() == self.first_clicked_box.get_color()){
	      console.log('they match');
	      	box.on_match();
	        self.first_clicked_box.on_match();
	      }
	      else{
	        console.log('they don\'t match');
	      	box.on_mismatch();
	        self.first_clicked_box.on_mismatch();
	      }
	      self.first_clicked_box = null;
	    }
	};
	self.init = function(){
		//no init code yet
		return self;
	};
	return self.init(game_container);
}