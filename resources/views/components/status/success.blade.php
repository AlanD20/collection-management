@if(session('status'))
<div class="alert-status alert alert-success w-max mb-8">
  <span>{{session('status')}} </span>
</div>
@endif

<script>
  const alertTimeout = setTimeout(() => {
    document.querySelector('.alert-status').remove();
  }, 2000);
</script>
