<more>
<div class="moreImage" onclick={showmore} style="text-align:center">
            <img if={!toggle} src="/images/more-expand.svg"/>
            <img if={toggle} src="/images/more-collapse.svg"/>
</div>

<script>
	var self= this
    self.toggle=false
	showmore() {
        $('.more').toggle()
        self.toggle = !self.toggle
        self.update()
    }   
</script>
<style scoped>
	
.moreImage img {
  width: 40px;
      margin: 0 0 4em 0;
}
  

</style>

</more>

