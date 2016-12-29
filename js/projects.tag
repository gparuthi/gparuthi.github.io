<projects>
<div style="display: none;" id="projectsContainer">
	<div>
			<div class="iamText" >I am...</div> 
			<div id="iamTypes" class="mdl-grid">
				<button class={mdl-button:true, mdl-js-button:true, des:true, isSelected:isSelected} each={tags} onclick={clickAction} >
					{label}
				</button>
			</div>
		</div>
		<div style="text-align: center; color: #ccc" onclick={toggleGridView} >
			<i if={!gridViewToggle} class="fa fa-list" aria-hidden="true"></i>
			<i if={gridViewToggle} class="fa fa-th" aria-hidden="true"></i>
		</div>
		
		<p></p>
	
</div>

 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">

<script>
	var self= this
	projectsTag = this
	this.tags = [{label: 'Engineer', isSelected: true}, {label: 'Designer', isSelected: true}, {label: 'HCI-Researcher', isSelected: true}, {label: 'Data-Scientist', isSelected: true}]
	self.gridViewToggle = true 
	self.firstTime = true

	this.on("mount", function(){
		$('#projectsContainer').fadeIn(1000)
		if(Math.round(Math.random())){
			$('.projectGrid').fadeIn(1500)
			self.gridViewToggle = true 
		} else {
			$('.projectDetails').fadeIn(1500)
			self.gridViewToggle = false 
		}
		self.update()

		})

	clickAction(e){
		self._scrollToTop()
		var label = e.item.label

		if (self.firstTime)
		{
			// select this and unselect all others
			_.each(self.tags, function(tag){
				if (tag.label != label){
					tag.isSelected = false
				}
			})

			self.firstTime = false
		} else {
			e.item.isSelected=!e.item.isSelected
		}

		var selectedLabels =  _.chain(self.tags).filter('isSelected').pluck('label').value()

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
		        scrollTop: $("#iamTypes").offset().top
		    }, 1000);
	}
	toggleGridView(){
		self.gridViewToggle = !self.gridViewToggle
		$('.projectGrid').toggle()
		$('.projectDetails').toggle()
		self._scrollToTop()
	}
</script>
<style scoped>
	.mdl-button:hover{
		background-color: transparent ;
	}
	.isSelected{
		background-color: aliceblue !important;
	}
	
</style>

</projects>

