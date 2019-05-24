<script>
    export let variant = null;
</script>

<button on:click type="button" class="nes-btn {variant && `is-${variant}`}">
    <slot></slot>
</button>