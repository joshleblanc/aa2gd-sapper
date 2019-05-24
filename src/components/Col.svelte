<script>
    export let xs = 12;
    export let sm = xs;
    export let md = sm;
    export let lg = md;
    export let xl = lg;
</script>

<style>
    div {
        padding-left: 0;
        padding-right: 0;
    }
</style>

<div class="col-xs-{xs} col-sm-{sm} col-md-{md} col-lg-{lg} col-xl-{xl}">
    <slot></slot>
</div>