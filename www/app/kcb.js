$(function(){
	var html = 	  `<nav class="nav-extended">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">KCB Locker</a>
      <a href="#" data-activates="mobile-demo" class="button-collapse"></a>     
    </div>
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab"><a class="active" href="#test1"><i class="large material-icons">home</i></a></li>
        <li class="tab"><a href="#test2"><i class="material-icons">view_module</i></a></li>
        <li class="tab"><a href="#test3"><i class="material-icons">settings</i></a></li>
        <li class="tab"><a href="#test4"><i class="material-icons">search</i></a></li>
      </ul>
    </div>
  </nav>
  <div id="test1" class="col s12">Test 1</div>
  <div id="test2" class="col s12">Test 2</div>
  <div id="test3" class="col s12">Test 3</div>
  <div id="test4" class="col s12">Test 4</div>`;
	$('.nav').html(html);
	$('ul.tabs').tabs();
	 $(".side-nav").sideNav();
});