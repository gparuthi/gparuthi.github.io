<projects>
	<div>
		<div class="iamText" >I am...</div> 
		<div class="mdl-grid">
			<button class={mdl-button:true, mdl-js-button:true, des:true, isSelected:isSelected} each={tags} onclick={clickAction} >
				{label}
			</button>
		</div>
	</div>
	<p></p>
<script>
	var self= this
	projectsTag = this
	this.tags = [{label: 'Engineer', isSelected: true}, {label: 'Designer', isSelected: true}, {label: 'HCI-Researcher', isSelected: true}, {label: 'Data-Scientist', isSelected: true}]

	clickAction(e){
		e.item.isSelected=!e.item.isSelected
		var label = e.item.label

		var selectedLabels =  _.chain(self.tags).filter('isSelected').pluck('label').value()

		var eles = $('.projects li');

		eles.each(function(k,v){
			// var v = eles[i]
			var tags = v.getAttribute('data-tags').split(',')
			goodtag = _.some(tags, function(tag){
				return _.contains(selectedLabels,tag)
			})
			
			if (goodtag)
				v.style.display = 'block'
			else
				v.style.display = 'none'
		})
		

	}
</script>
<style scoped>
	.isSelected{
		background-color: aliceblue;
	}
</style>

</projects>

