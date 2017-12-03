<projects>
<div style="display: none;" id="projectsContainer">
	<div>
			
			<div if={hide} id="iamTypes" class="mdl-grid">
				<button class={mdl-button:true, mdl-js-button:true, des:true, isSelected:isSelected} each={filterTags} onclick={clickAction} >
					{label}
				</button>
			</div>
		</div>
		
		<p></p>
	
</div>

 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">

<script>
	var self= this
	projectsTag = this
	this.iamTypes = [{label: 'Engineer', isSelected: true}, {label: 'Designer', isSelected: true}, {label: 'HCI-Researcher', isSelected: true}, {label: 'Data-Scientist', isSelected: true}]
	this.interestTypes = [{label: 'Ubicomp', isSelected: true}, {label: 'ICTD', isSelected: true}, {label: 'Crowd-Sourcing', isSelected: true}, {label: 'Social-Computing', isSelected: true}]
	this.filterTags = JSON.parse(JSON.stringify(this.iamTypes))
	this.iamInterestsToggle = true
	self.gridViewToggle = true 
	self.firstTime = true

	this.on("mount", function(){
		$('#projectsContainer').fadeIn(1000)
		// if(Math.round(Math.random()))
			// self.showInterests()		

		// if(Math.round(Math.random()))
			self.gridViewToggle= true
			
		
		self.toggleGridView(false) 
		self.update()

		})

	
	showInterests(){
		this.iamInterestsToggle = false
		this.filterTags = JSON.parse(JSON.stringify(this.interestTypes))
	}
	showIamtypes(){
		this.iamInterestsToggle = true
		this.filterTags = JSON.parse(JSON.stringify(this.iamTypes))
	}

	clickAction(e){
		// self._scrollToTop()
		var label = e.item.label

		if (self.cntrlIsPressed )
		{
			e.item.isSelected=!e.item.isSelected
			

			// self.firstTime = false
		} else {
			// select this and unselect all others
			_.each(self.filterTags, function(tag){
				if (tag.label != label)
					tag.isSelected = false
				else 
					tag.isSelected = true
			})
			
		}

		var selectedLabels =  _.chain(self.filterTags).filter('isSelected').pluck('label').value()

			var filterElements = function(k,v){
				// var v = eles[i]
				var tags = v.getAttribute('data-tags').split(',')
				goodtag = _.some(tags, function(tag){
					return _.contains(selectedLabels,tag)
				})
				
				if (goodtag){
					v.style.display = 'block'
					$(v).addClass('animated fadeIn')
				}
				else{
					v.style.display = 'none'
				}
			}

			$('.projects .mdl-cell').each(filterElements)
			$('.projects li').each(filterElements)
			$('.mdl-button').removeClass("ui-state-hover")
		
	}
	_scrollToTop(){
		$('html, body').animate({
		        scrollTop: $("#iamTypes").offset().top-30
		    }, 300);
	}
	toggleGridView(scroll){
		self.gridViewToggle = !self.gridViewToggle
		if (self.gridViewToggle){
			$('.projectGrid').toggle(true)
			$('.projectDetails').toggle(false)
		}
		else {
			$('.projectGrid').toggle(false)
			$('.projectDetails').toggle(true)
				}
		// if (!scroll)
		// 	self._scrollToTop()
	}

	$(document).keydown(function(event){
		// console.log(event.which);
	    if(event.which=="91" || event.which=="17")
	        self.cntrlIsPressed = true;
	});

	$(document).keyup(function(){
	    self.cntrlIsPressed = false;
	});

	self.cntrlIsPressed = false;
</script>
<style scoped>
	.mdl-button:hover{
		background-color: transparent ;
	}
	.isSelected{
		background-color: aliceblue !important;
	}
	.iamText{
		text-align: center;
	  color: lightgray;
	  font-size: 20px;
	}
	#iamTypes{
		padding-left: 0px;

	}
	.strong {
		color: gray;
  font-weight: bold; }

</style>

</projects>

